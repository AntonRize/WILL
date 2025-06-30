// src/App.jsx  —  RAW-FULL  + LaTeX-markers patch  (English-default)
import { useState, useEffect, useRef } from 'react';
import { Send, Database, Clock } from 'lucide-react';

/* 1. Knowledge-base files */
const FILES = [
  'WILL%20DATABASE/WILL%20PART%20I%20SR%20GR.txt',
  'WILL%20DATABASE/WILL%20PART%20II%20COSMO%20.txt',
  'WILL%20DATABASE/WILL%20PART%20III%20QM%20.txt'
];

/* 2. Compact core overview (English only) */
const WILL_CORE = `
# WILL Geometry — fundamental projections

- **β (beta) ≡ v / c**   — kinematic projector  
- **κ (kappa) ≡ vₑ / c** — gravitational projector  
- Relation: κ² = 2 β²

Key consequences: α = β, Ω_Λ = 2⁄3, Ω_m = 1⁄3, w = −1, E = mc².
`;

/* 3. Load whole KB and patch LaTeX markers */
async function loadKB() {
  const base = 'https://raw.githubusercontent.com/AntonRize/WILL/main/';
  const txts = await Promise.all(
    FILES.map(p => fetch(base + p).then(r => r.text()))
  );

  // Replace \beta and \kappa with visible forms so LLM recognises them
  return txts
    .join('\n\n')
    .replace(/\\beta/g,  'β (beta)')
    .replace(/\\kappa/g, 'κ (kappa)');
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
  let data; try { data = JSON.parse(raw); } catch { throw new Error(raw); }
  if (!res.ok) throw new Error(data.error || 'Gemini error');
  return data.reply;
}

/* 5. Helper: detect Russian */
const isRussian = txt => /[а-яё]/i.test(txt);

/* 6. React component */
export default function App() {
  const [kb,  setKb]  = useState('');
  const [log, setLog] = useState([]);
  const [inp, setInp] = useState('');
  const [busy,setBusy]= useState(false);
  const endRef = useRef(null);

  /* load KB once */
  useEffect(() => { loadKB().then(setKb); }, []);
  /* auto-scroll */
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [log]);

  const push = (txt, user = false) =>
    setLog(l => [...l, { id: Date.now() + Math.random(), txt, user }]);

  async function send() {
    const q = inp.trim();
    if (!q || busy) return;
    push(q, true);
    setInp('');

    if (!kb) { push('Loading WILL knowledge…'); return; }

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
`;
      const ans = await askGemini(prompt);
      push(ans);
    } catch (e) {
      push('⚠️ ' + e.message);
    }
    setBusy(false);
  }

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 flex items-center gap-2">
        <Database size={20} /> <h1 className="font-bold">WILL Assistant</h1>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {log.map(m => (
          <div key={m.id} className={`flex ${m.user ? 'justify-end' : 'justify-start'}`}>
            <div className={`${m.user ? 'bg-indigo-600 text-white' : 'bg-white border'} rounded-2xl p-4 max-w-[80%] whitespace-pre-wrap`}>
              {m.txt}
            </div>
          </div>
        ))}
        {busy && (
          <div className="flex justify-start">
            <div className="bg-white border rounded-2xl p-4 flex items-center gap-2 text-gray-600">
              <Clock size={16} className="animate-spin" /> Thinking…
            </div>
          </div>
        )}
        <div ref={endRef} />
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
            {busy ? <Clock size={16} className="animate-spin" /> : 'Send'}
          </button>
        </div>
      </footer>
    </div>
  );
}
