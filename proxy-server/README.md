---
sitemap: false
---

# Proxy Server

This folder contains the Vercel serverless function that forwards requests to the Google Gemini API. Deploy it to Vercel so the assistant can interact with Gemini without exposing the API key.

1. Set the `GEMINI_API_KEY` environment variable in your Vercel project.
2. Deploy the `api` directory.
3. The function will be available at `https://<your-vercel-app>.vercel.app/api/gemini`.

The function sends permissive CORS headers so the React app hosted on GitHub Pages can call it from the browser.
