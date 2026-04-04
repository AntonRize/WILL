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
    const deletePassword = process.env.DELETE_PASSWORD;

    if (!token) {
      res.status(500).json({ error: 'Server configuration error: Missing GITHUB_TOKEN' });
      return;
    }

    if (!deletePassword) {
      res.status(500).json({ error: 'Server configuration error: Missing DELETE_PASSWORD' });
      return;
    }

    const { slug, password } = req.body;

    if (!slug) {
      res.status(400).json({ error: 'Missing slug' });
      return;
    }

    if (!password || password !== deletePassword) {
      res.status(403).json({ error: 'Invalid password' });
      return;
    }

    // Sanitize slug to prevent path traversal
    const safeSlug = slug.replace(/[^a-zA-Z0-9_\-TZ]/g, '');
    if (safeSlug !== slug) {
      res.status(400).json({ error: 'Invalid slug format' });
      return;
    }

    const path = `assistant/logs/${safeSlug}.md`;
    const apiUrl = `https://api.github.com/repos/AntonRize/WILL/contents/${path}`;
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'will-log-endpoint',
    };

    // Get the file SHA (required for deletion)
    const existing = await fetch(apiUrl, { method: 'GET', headers });
    if (!existing.ok) {
      res.status(404).json({ error: 'Log file not found' });
      return;
    }

    const data = await existing.json();
    const sha = data.sha;

    // Delete the file via GitHub API
    const resp = await fetch(apiUrl, {
      method: 'DELETE',
      headers,
      body: JSON.stringify({
        message: `chore: delete log ${safeSlug}`,
        sha: sha,
      }),
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
