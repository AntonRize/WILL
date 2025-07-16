# WILL Project Overview

This repository hosts the materials for the **WILL Geometry** research project. It contains:

- **Jekyll site** – the Markdown files in this folder (such as `index.md`, `about.md` and the `_posts` directory) power the public site on GitHub Pages. Edit these files and push to the `main` branch to publish updates automatically.
- **Gemini proxy** – the `proxy-server` folder provides a Vercel function that forwards requests to the Google Gemini API. Deploy the `api` directory to Vercel and set the `GEMINI_API_KEY` environment variable in your project settings.
- **AI assistant** – the `will-assistant` folder contains a small React app used for the WILL chat assistant. From that directory run:

  ```bash
  npm install
  npm run build
  npm run deploy  # publishes to the gh-pages branch
  ```

All code and documents are released for scientific use.

© 2025 Anton Rize
