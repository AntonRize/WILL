import fetch from 'node-fetch';

export default async function handler(req, res) {
  const allowedOrigin = process.env.ALLOWED_ORIGIN || 'https://antonrize.github.io';
  const origin = req.headers.origin;

  // Set CORS headers for all responses
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // For POST requests, validate the origin
  if (origin !== allowedOrigin) {
    res.status(403).json({ error: 'Forbidden' });
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      // This error will now be correctly reported back to the browser
      res.status(500).json({ error: 'Server configuration error: Missing GITHUB_TOKEN' });
      return;
    }

    const { log } = req.body;
    const ua = req.headers['user-agent'] || '';
    const now = new Date();
    const now_iso = now.toISOString();

    const firstUserMessage = log.find(m => m.user && m.raw.trim());
    const title = firstUserMessage ? firstUserMessage.raw.trim().substring(0, 50) : "Conversation Log";

    const content = [
        '---',
        'layout: log',
        `title: "${title.replace(/"/g, '\\"')}"`,
        `date: ${now_iso}`,
        `user_agent: "${ua.replace(/"/g, '\\"')}"`,
        '---',
        ''
    ].concat(log.map(m => `**${m.user ? 'User' : 'Assistant'}:** ${m.raw || ''}`)).join('\n\n');

    const path = `assistant/logs/${now_iso.replace(/[:.]/g, '-')}.md`;
    const resp = await fetch(`https://api.github.com/repos/AntonRize/WILL/contents/${path}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'log-endpoint'
      },
      body: JSON.stringify({
        message: `chore: add log ${now_iso}`,
        content: Buffer.from(content).toString('base64')
      })
    });

    if (!resp.ok) {
      const txt = await resp.text();
      // Log the error from GitHub API for easier debugging on Vercel
      console.error('GitHub API Error:', txt);
      res.status(resp.status).json({ error: `GitHub API error: ${txt}` });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Server Error:', err);
    res.status(500).json({ error: err.message });
  }
}
