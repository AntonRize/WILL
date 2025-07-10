import querystring from 'node:querystring';

export default async function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return res.status(500).json({ error: 'Missing GITHUB_CLIENT_ID env var' });
  }

  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = (req.headers['x-forwarded-proto'] || 'https').split(',')[0];
  const baseUrl = `${proto}://${host}`;
  const redirectUri = `${baseUrl}/api/callback`;

  const params = querystring.stringify({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo',
  });

  res.writeHead(302, { Location: `https://github.com/login/oauth/authorize?${params}` });
  res.end();
}