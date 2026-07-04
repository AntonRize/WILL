WILL-AI is the public chat at https://willrg.com/will-ai/ — page is assistant/index.html in the WILL repo (this repo), served by GitHub Pages. It calls a Vercel proxy at https://proxy-flame-seven.vercel.app/api/gemini, whose source lives in a SEPARATE repo (AntonRize/proxy, file api/gemini.js). The proxy-server/ folder inside the WILL repo is only a reference copy — editing it does NOT deploy; the live proxy is the separate repo.

Proxy routing: no forceModel (or 'gemini') → Gemini 2.5 Flash, returns JSON {reply}. Any other forceModel, plus Gemini-failure fallback → OpenRouter, streamed as SSE (text/event-stream). The OpenRouter model is the single NEMOTRON_MODEL constant in api/gemini.js. Frontend askModel() auto-detects JSON vs SSE by Content-Type.

Deploy: frontend change → push WILL repo (GitHub Pages rebuild). Proxy change → push AntonRize/proxy repo (Vercel auto-deploys). Vercel env vars: GEMINI_API_KEY, OPENROUTER_API_KEY.

Model constraints: the second (OpenRouter) model MUST be FREE — public site, user will not put paid APIs on it. It also needs a LARGE context window because the entire knowledge base (~130k tokens, 4 files from WILL DATABASE/) is injected into every prompt. Free models are volatile: openrouter/owl-alpha worked for weeks then was pulled; NVIDIA Nemotron :free models are flaky (return only : OPENROUTER PROCESSING keepalives, no tokens, when the free tier is congested). Vetted big-context free fallbacks: qwen/qwen3-next-80b-a3b-instruct:free and google/gemma-4-31b-it:free (~262k ctx). Check availability live via https://openrouter.ai/api/v1/models. See [[user_not_a_programmer]].

Gotcha (fixed 2026): when parsing OpenRouter reasoning from the SSE stream, read delta.reasoning OR delta.reasoning_details — never both. Some models (Nemotron) put identical text in both, which doubles every token in the "Thinking" panel.


