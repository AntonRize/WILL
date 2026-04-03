export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const { prompt, forceModel } = req.body;
    if (!prompt || typeof prompt !== 'string') {
      res.status(400).json({ error: 'Missing or invalid prompt (must be a string)' });
      return;
    }

    // Route to OpenRouter MiniMax if explicitly requested
    if (forceModel === 'minimax') {
      const orKey = process.env.OPENROUTER_API_KEY;
      if (!orKey) {
        res.status(500).json({ error: 'OpenRouter API key not configured' });
        return;
      }
      const orResp = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${orKey}`,
          'HTTP-Referer': 'https://willrg.com',
          'X-Title': 'WILL AI'
        },
        body: JSON.stringify({
          model: 'minimax/minimax-m2.5:free',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 4096
        })
      });
      const orData = await orResp.json();
      if (orData.error) {
        res.status(500).json({ error: orData.error.message || JSON.stringify(orData.error) });
        return;
      }
      const reply = orData.choices?.[0]?.message?.content || '';
      res.status(200).json({ reply });
      return;
    }

    // Default: Gemini
    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });
    const data = await resp.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    res.status(200).json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
