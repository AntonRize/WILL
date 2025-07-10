import fetch from 'node-fetch';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { code } = req.query;
  if (!code) {
    return res.status(400).json({ error: 'Missing ?code param' });
  }

  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;
  if (!client_id || !client_secret) {
    return res.status(500).json({ error: 'Server missing GitHub OAuth env vars' });
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ client_id, client_secret, code }),
    });

    const data = await tokenRes.json();
    const token = data.access_token;

    if (!token) {
      return res.status(500).json({ error: data.error_description || 'No token received' });
    }

    // Return a small HTML page that passes the token back to Decap CMS
    const html = `<!DOCTYPE html><html><body><script>
      (function() {
        function send() {
          window.opener && window.opener.postMessage('authorization:github:${token}', '*');
          window.close();
        }
        send();
      })();
    </script></body></html>`;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}