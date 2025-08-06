import fetch from 'node-fetch';

export default async function handler(req, res) {
  const allowedOrigin = process.env.ALLOWED_ORIGIN || '';
  const origin = req.headers.origin || '';
  if (origin !== allowedOrigin) {
    res.status(403).json({ error: 'Forbidden' });
    return;
  }
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      res.status(500).json({ error: 'Missing token' });
      return;
    }
    const { log } = req.body;
    const ua = req.headers['user-agent'] || '';
    const now = new Date().toISOString();
    const content = ['---', `date: ${now}`, `user-agent: ${ua}`, '---', '']
      .concat(log.map(m => `**${m.user ? 'User' : 'Assistant'}:** ${m.raw || ''}`))
      .join('\n\n');
    const path = `assistant/logs/${now.replace(/[:]/g, '-')}.md`;
    const resp = await fetch(`https://api.github.com/repos/AntonRize/WILL/contents/${path}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'log-endpoint'
      },
      body: JSON.stringify({
        message: `chore: add log ${now}`,
        content: Buffer.from(content).toString('base64')
      })
    });
    if (!resp.ok) {
      const txt = await resp.text();
      throw new Error(txt);
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
