// Vercel Serverless Function: api/sync.js
// Relay for cross-device short link creation & expansion via is.gd

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // 1. POST: Create short link
    if (req.method === 'POST') {
      let body = req.body;
      if (typeof body === 'string') {
        try {
          body = JSON.parse(body);
        } catch (e) {
          return res.status(400).json({ error: 'Invalid JSON' });
        }
      }

      if (!body || !body.url) {
        return res.status(400).json({ error: 'Missing url parameter' });
      }

      const longUrl = body.url;
      const isgdUrl = `https://is.gd/create.php?format=json&url=${encodeURIComponent(longUrl)}`;
      
      const response = await fetch(isgdUrl);
      const data = await response.json();

      if (data && data.shorturl) {
        const id = data.shorturl.split('/').filter(Boolean).pop();
        return res.status(200).json({
          shortUrl: data.shorturl,
          id: id,
          success: true
        });
      } else {
        return res.status(502).json({
          error: data.errormessage || 'Failed to shorten URL',
          success: false
        });
      }
    }

    // 2. GET: Resolve short link or code
    if (req.method === 'GET') {
      const { url, id } = req.query;
      let target = url || id;

      if (!target) {
        return res.status(400).json({ error: 'Missing short url or code' });
      }

      if (!target.startsWith('http://') && !target.startsWith('https://')) {
        target = `https://is.gd/${target}`;
      }

      const forwardUrl = `https://is.gd/forward.php?format=json&shorturl=${encodeURIComponent(target)}`;
      const response = await fetch(forwardUrl);
      const data = await response.json();

      if (data && data.url) {
        return res.status(200).json({
          url: data.url,
          success: true
        });
      } else {
        return res.status(404).json({
          error: data.errormessage || 'Short URL not found',
          success: false
        });
      }
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('api/sync error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error', success: false });
  }
}
