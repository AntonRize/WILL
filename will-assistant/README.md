# WILL AI Assistant

This React single-page application provides the chat interface for WILL Geometry's AI assistant. It fetches knowledge text files from the main repository and sends user questions to the Gemini API via a proxy server.

## Development

```bash
npm install
npm run dev
```

## Deployment

Build the static files and push them to the `gh-pages` branch so they appear at `https://antonrize.github.io/WILL/assistant/`:

```bash
npm run deploy
```

This uses the `gh-pages` package to publish the `dist` folder.

The app expects a proxy endpoint that forwards prompts to the Google Gemini API. Deploy the code under `../proxy-server` to Vercel and set the `GEMINI_API_KEY` environment variable. Update `src/App.jsx` if your proxy URL differs from the sample `proxy-flame-seven` endpoint.
