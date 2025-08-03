// src/App.jsx  —  WILL Assistant • RAW-FULL • English-only
import { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage.jsx';
import { Send, Database, Clock, AlertTriangle } from 'lucide-react';

/* 1. Knowledge-base file paths */
const FILES = [
  'WILL%20DATABASE/WILL%20PART%20I%20SR%20GR.txt',
  'WILL%20DATABASE/WILL%20PART%20II%20COSMO%20.txt',
  'WILL%20DATABASE/WILL%20PART%20III%20QM%20.txt'
];

/* 2. Compact core overview (English) */
const WILL_CORE = `
# WILL Geometry — fundamental projections

- β (beta) ≡ v / c   — kinematic projection  
- κ (kappa) ≡ vₑ / c — gravitational projection  
- Relation: κ² = 2 β²

Key consequences: α = β, Ω_Λ = 2⁄3, Ω_m = 1⁄3, w = −1, E = mc².
`;

/* 3. Load full KB and patch LaTeX markers */
async function loadKB() {
  const base = 'https://raw.githubusercontent.com/AntonRize/WILL/main/';
  const texts = await Promise.all(
    FILES.map(p => fetch(base + p).then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.text();
    }))
  );

  const full = texts.join('\n\n')
    .replace(/\\beta/g,  'β (beta)')
    .replace(/\\kappa/g, 'κ (kappa)');

  console.log('[WILL] KB loaded, characters:', full.length); // debug
  return full;
}

/* 4. Gemini proxy */
const PROXY = 'https://proxy-flame-seven.vercel.app/api/gemini';
async function askGemini(prompt) {
  const res  = await fetch(PROXY, {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body   : JSON.stringify({ prompt })
  });
  const raw  = await res.text();
  let data;  try { data = JSON.parse(raw); } catch { throw new Error(raw); }
  if (!res.ok) throw new Error(data.error || 'Gemini error');
  return data.reply;
}

/* 5. Detect Cyrillic (switch language if needed) */
const isRussian = txt => /[а-яё]/i.test(txt);

/* 6. React component */
export default function App() {
  const [kb, setKb]       = useState('');
  const [kbStatus, setKs] = useState('loading'); // loading | ok | error
  const [log, setLog]     = useState([]);
  const [inp, setInp]     = useState('');
  const [busy, setBusy]   = useState(false);
  const endRef            = useRef(null);

  /* Fetch KB once */
  useEffect(() => {
    loadKB()
      .then(data => { setKb(data); setKs('ok'); })
      .catch(err  => { console.error(err); setKs('error'); });
  }, []);

  /* Auto-scroll on new message */
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [log]);

  const push = (txt, user = false) =>
    setLog(l => [...l, { id: Date.now() + Math.random(), txt, user }]);

  async function send() {
    const q = inp.trim();
    if (!q || busy) return;
    push(q, true);
    setInp('');

    if (kbStatus !== 'ok') {
      push('Knowledge base is not loaded yet. Please wait a moment.');
      return;
    }

    setBusy(true);
    try {
      const lang = isRussian(q) ? 'Russian' : 'English';
     const prompt = `
You are the WILL Geometry assistant. Answer in **${lang}** only.

CORE OVERVIEW:
${WILL_CORE}

FULL DATABASE:
${kb}

USER QUESTION:
"""${q}"""

Please answer ONLY in valid Markdown format.


Formatting instructions:

...
If the user's question does not request any specific format, default to using paragraphs separated by double line breaks, and highlight all keywords and definitions in bold.
...


If the user's question does not request any specific format, default to using paragraphs separated by double line breaks, and highlight all keywords and definitions in bold.


1. **Paragraphs:** Separate every paragraph with a double line break (`\n\n`).
2. **Numbered lists:** 
   - Always start with an empty line BEFORE and AFTER the list.
   - Every item begins with “1.”, “2.”, etc., followed by a space.
   - Leave an empty line between each item for long explanations.
   - Example:

     1. **First point**

     2. **Second point**

     3. **Third point**

3. **Bulleted lists:**
   - Use `- ` or `* ` at the start of each bullet.
   - Always place an empty line BEFORE and AFTER the bullet list.
   - Example:

     - First bullet

     - Second bullet

     - Third bullet

4. **Bold and italic:** 
   - For bold, use `**bold**`.
   - For italic, use `*italic*`.
   - For bold italic, use `***bold italic***`.
   - Example:  
     This is **bold**, this is *italic*, and this is ***bold italic***.

5. **Headings:**
   - For main section titles, use `# Title`.
   - For subsections, use `## Subtitle`, `### Subsection`, etc.
   - Always leave an empty line BEFORE and AFTER headings.

6. **Blockquotes:**
   - Start the line with `>`.
   - Leave an empty line before and after.
   - Example:

     > This is a quote.

7. **Code blocks and inline code:**
   - For inline code: wrap in backticks, like `` `code` ``.
   - For code blocks: use triple backticks.  
     Example:

     ```js
     function hello() {
       return "Hello, world!";
     }
     ```

8. **Math and formulas:**
   - For inline math, wrap with single `$`, like `$E=mc^2$`.
   - For display math, wrap with double `$$` on a separate line:
     $$
     E = mc^2
     $$

9. **Tables:**
   - Use Markdown table syntax:
     | Column 1 | Column 2 |
     |----------|----------|
     | Row 1    | Data     |
     | Row 2    | Data     |

10. **Links:**  
    - Format: `[Link Text](https://example.com)`

11. **Nested lists:**  
    - Use two spaces or a tab for sub-lists. Example:
      - Parent
        - Child

12. **ALWAYS use empty lines before and after lists, tables, headings, code blocks, and blockquotes to ensure correct rendering.**

13. **Do NOT add extra formatting outside of valid Markdown.  
    Do NOT use HTML tags, only Markdown.**

---

**Always follow these formatting rules, even for short answers.  
Never respond in plain text — only Markdown, using the above conventions.**

`;

      const ans = await askGemini(prompt);
      push(ans);
    } catch (e) {
      push('⚠️ ' + e.message);
    }
    setBusy(false);
  }

  /* --- UI --- */
  const badge = kbStatus === 'loading'
    ? <span className="text-xs text-yellow-600">(KB loading…)</span>
    : kbStatus === 'error'
      ? <span className="flex items-center gap-1 text-xs text-red-600">
          <AlertTriangle size={12}/> KB error
        </span>
      : null;

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 flex items-center gap-2">
        <Database size={20}/> <h1 className="font-bold">WILL Assistant</h1> {badge}
      </header>

      {/* Chat log */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
       {log.map(m => (
  <div key={m.id} className={`flex ${m.user ? 'justify-end' : 'justify-start'}`}>
    <div className={`${m.user ? 'bg-indigo-600 text-white' : 'bg-white border'} rounded-2xl p-4 max-w-[80%]`}>
      <ChatMessage
        role={m.user ? 'user' : 'ai'}
        text={m.txt}
      />
    </div>
  </div>
))}

        {busy && (
          <div className="flex justify-start">
            <div className="bg-white border rounded-2xl p-4 flex items-center gap-2 text-gray-600">
              <Clock size={16} className="animate-spin"/> Thinking…
            </div>
          </div>
        )}
        <div ref={endRef}/>
      </main>

      {/* Input */}
      <footer className="border-t p-4">
        <div className="flex gap-2">
          <textarea
            className="flex-1 border rounded-2xl px-4 py-3 text-sm resize-none focus:ring-2 focus:ring-indigo-300"
            rows={1}
            value={inp}
            placeholder="Ask about WILL Geometry…"
            onChange={e => setInp(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
          />
          <button
            onClick={send}
            disabled={!inp.trim() || busy}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl px-5 py-3 disabled:opacity-50 flex items-center gap-1">
            {busy ? <Clock size={16} className="animate-spin"/> : 'Send'}
          </button>
        </div>
      </footer>
    </div>
  );
}
