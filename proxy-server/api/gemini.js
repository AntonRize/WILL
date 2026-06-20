// api/gemini.js — Vercel proxy: Gemini (default, non-streaming) with
// Nemotron-via-OpenRouter (streaming) as the manual model and as the
// automatic fallback when Gemini is unavailable.
//
// Request body: { prompt: string, forceModel?: string }
//   • forceModel falsy or 'gemini'  -> Gemini first, Nemotron stream on failure
//   • forceModel any other value     -> Nemotron stream directly (manual mode)
//
// Response shape depends on the path taken:
//   • Gemini success  -> application/json  { reply, model, mode }
//   • Nemotron        -> text/event-stream (raw OpenRouter SSE, forwarded as-is)
//   • Any error       -> application/json  { error }

export const config = { runtime: 'nodejs' };

// Single source of truth for the OpenRouter model slug — change it in one place.
const NEMOTRON_MODEL = 'openrouter/owl-alpha';
const GEMINI_MODEL = 'gemini-2.5-flash';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400'
};

function applyCors(res) {
  Object.entries(cors).forEach(([k, v]) => res.setHeader(k, v));
}

// Stream Nemotron (via OpenRouter) straight through to the client as SSE.
// If the upstream request fails before any bytes are sent, respond with JSON
// so the client's JSON-error path can surface a readable message.
async function streamNemotron(res, prompt, OPENROUTER_KEY) {
  const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENROUTER_KEY}`,
      'HTTP-Referer': 'https://willrg.com',
      'X-Title': 'WILL-AI'
    },
    body: JSON.stringify({
      model: NEMOTRON_MODEL,
      messages: [{ role: 'user', content: prompt }],
      stream: true
    })
  });

  if (!upstream.ok || !upstream.body) {
    const errText = await upstream.text().catch(() => '');
    return res.status(upstream.status || 502).json({
      error: errText || 'OpenRouter request failed'
    });
  }

  // Headers that make streaming actually stream (defeat proxy/CDN buffering).
  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  if (typeof res.flushHeaders === 'function') res.flushHeaders();

  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(decoder.decode(value, { stream: true }));
      if (typeof res.flush === 'function') res.flush();
    }
  } catch (e) {
    // Stream interrupted mid-flight; nothing reliable to send, just close.
    console.error('Nemotron stream error:', e && e.message);
  } finally {
    res.end();
  }
}

export default async function handler(req, res) {
  applyCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { prompt, forceModel } = req.body || {};
  if (!prompt) {
    return res.status(400).json({ error: 'No prompt provided' });
  }

  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY;

  // ============================================
  // MANUAL MODE: Nemotron streaming
  // Triggered by any non-default forceModel value.
  // ============================================
  if (forceModel && forceModel !== 'gemini') {
    if (!OPENROUTER_KEY) {
      return res.status(500).json({ error: 'OPENROUTER_API_KEY is not configured' });
    }
    console.log('[MANUAL] Streaming Nemotron');
    return streamNemotron(res, prompt, OPENROUTER_KEY);
  }

  // ============================================
  // DEFAULT: Gemini first, fallback to Nemotron streaming
  // ============================================
  if (!GEMINI_KEY) {
    return res.status(500).json({ error: 'GEMINI_API_KEY environment variable is not set' });
  }

  try {
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_KEY}`;
    const geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }]
      })
    });

    if (geminiRes.ok) {
      const data = await geminiRes.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
      console.log('[GEMINI 2.5 FLASH] Request served');
      return res.status(200).json({ reply, model: GEMINI_MODEL, mode: 'auto' });
    }

    const errorText = await geminiRes.text();
    const shouldFallback =
      geminiRes.status === 429 ||
      geminiRes.status === 403 ||
      geminiRes.status >= 500 ||
      errorText.includes('RESOURCE_EXHAUSTED') ||
      errorText.includes('quota') ||
      errorText.includes('exceeded') ||
      errorText.includes('free_tier_requests') ||
      errorText.includes('PERMISSION_DENIED');

    if (!shouldFallback) {
      return res.status(geminiRes.status).json({ error: errorText });
    }
    if (!OPENROUTER_KEY) {
      return res.status(429).json({ error: 'Gemini failed and no OpenRouter key configured.' });
    }

    console.log('[AUTO FALLBACK] Gemini -> Nemotron streaming');
    return streamNemotron(res, prompt, OPENROUTER_KEY);

  } catch (e) {
    console.error('Proxy error:', e && e.message);
    return res.status(500).json({ error: (e && e.message) || 'Proxy error' });
  }
}
