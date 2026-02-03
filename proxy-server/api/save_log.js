import fetch from 'node-fetch';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      res.status(500).json({ error: 'Server configuration error: Missing GITHUB_TOKEN' });
      return;
    }

    const { log, sessionId } = req.body;
    if (!log || !sessionId) {
      res.status(400).json({ error: 'Missing log or sessionId' });
      return;
    }

    const ua = req.headers['user-agent'] || '';

    // Filter out the welcome message from logs
    const messages = log.filter(m => !m.isWelcome);
    if (messages.length === 0) {
      res.status(200).json({ ok: true, skipped: true });
      return;
    }

    const firstUserMessage = messages.find(m => m.user && m.raw && m.raw.trim());
    const title = firstUserMessage
      ? firstUserMessage.raw.trim().substring(0, 50)
      : 'Conversation Log';

    const content = [
      '---',
      'layout: log',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `date: ${sessionId}`,
      `user_agent: "${ua.replace(/"/g, '\\"')}"`,
      '---',
      '',
    ]
      .concat(messages.map(m => `**${m.user ? 'User' : 'Assistant'}:** ${m.raw || ''}`))
      .join('\n\n');

    const path = `assistant/logs/${sessionId.replace(/[:.]/g, '-')}.md`;
    const apiUrl = `https://api.github.com/repos/AntonRize/WILL/contents/${path}`;
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'will-log-endpoint',
    };

    // Check if the file already exists to get its SHA (needed for updates)
    let sha = undefined;
    const existing = await fetch(apiUrl, { method: 'GET', headers });
    if (existing.ok) {
      const data = await existing.json();
      sha = data.sha;
    }

    // Create or update the file
    const body = {
      message: `chore: update log ${sessionId}`,
      content: Buffer.from(content).toString('base64'),
    };
    if (sha) {
      body.sha = sha;
    } else {
      body.message = `chore: add log ${sessionId}`;
    }

    const resp = await fetch(apiUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      const txt = await resp.text();
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
