// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Send, BookOpen, Database, Globe,
  AlertCircle, CheckCircle, Clock
} from 'lucide-react';

/* -------------------------------------------------
   1. Конфигурация документов WILL
-------------------------------------------------- */
const WILL_DOCUMENTS = {
  relativity: {
    url: 'https://raw.githubusercontent.com/AntonRize/WILL/refs/heads/main/WILL%20DATABASE/WILL%20PART%20I%20SR%20GR.txt',
    name: 'Part I: Special & General Relativity',
    keywords: ['relativity','spacetime','lorentz','einstein','beta','kappa','sr','gr']
  },
  cosmology: {
    url: 'https://raw.githubusercontent.com/AntonRize/WILL/refs/heads/main/WILL%20DATABASE/WILL%20PART%20II%20COSMO%20.txt',
    name: 'Part II: Cosmology',
    keywords: ['cosmology','omega','lambda','hubble','friedmann','cosmo']
  },
  quantum: {
    url: 'https://raw.githubusercontent.com/AntonRize/WILL/refs/heads/main/WILL%20DATABASE/WILL%20PART%20III%20QM%20.txt',
    name: 'Part III: Quantum Mechanics',
    keywords: ['quantum','alpha','fine structure','wave function','qm','bohr']
  }
};

/* -------------------------------------------------
   2. Краткий «CORE»-конспект WILL (глобальный контекст)
-------------------------------------------------- */
const WILL_CORE_KNOWLEDGE = `
# WILL Geometry – базовые принципы
SPACETIME ≡ ENERGY EVOLUTION  → вся физика – геометрическое проецирование.

Ключевые отношения:
- κ² = 2β²
- β = v/c
- κ = vₑ/c
- α = β
- κ² = Rₛ/r = ρ/ρₘₐₓ
- Ω_Λ = 2/3, Ω_m = 1/3, w = −1
`;

/* -------------------------------------------------
   3. Класс кэша документов
-------------------------------------------------- */
class DocumentCache {
  cache = new Map();
  loading = new Set();

  async get(docKey) {
    if (this.cache.has(docKey)) return this.cache.get(docKey);

    if (this.loading.has(docKey)) {
      // ждём, пока другой запрос загрузит
      while (this.loading.has(docKey)) await new Promise(r => setTimeout(r, 100));
      return this.cache.get(docKey);
    }

    this.loading.add(docKey);
    try {
      const { url } = WILL_DOCUMENTS[docKey];
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      this.cache.set(docKey, text);
      return text;
    } finally {
      this.loading.delete(docKey);
    }
  }

  /* Выдёргиваем вокруг найденной строки ± контекст */
  extract(context, terms, maxLen = 4000) {
    if (!context) return '';
    const lines = context.split('\n');
    const blocks = [];

    lines.forEach((line, idx) => {
      if (terms.some(t => line.toLowerCase().includes(t))) {
        const start = Math.max(0, idx - 3);
        const end   = Math.min(lines.length, idx + 7);
        blocks.push(lines.slice(start, end).join('\n'));
      }
    });

    const joined = blocks.join('\n\n— — —\n\n');
    return joined.length > maxLen ? joined.slice(0, maxLen) + '…' : joined;
  }
}

/* -------------------------------------------------
   4. Простая оболочка над proxy
-------------------------------------------------- */
const proxyURL = 'https://proxy-flame-seven.vercel.app/api/gemini';
async function askGemini(prompt) {
  const r = await fetch(proxyURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:   JSON.stringify({ prompt })
  });
  const txt = await r.text();
  let data;
  try { data = JSON.parse(txt); }
  catch { throw new Error(txt); }

  if (!r.ok) throw new Error(data.error || 'Unknown error');
  return data.reply;
}

/* -------------------------------------------------
   5. Вспомогательные функции
-------------------------------------------------- */
const detectLang = txt => /[а-яё]/i.test(txt) ? 'ru' : 'en';
const findTerms  = q => {
  const base = ['beta','kappa','alpha','omega','lambda','relativity','cosmology','quantum'];
  return base.filter(t => q.toLowerCase().includes(t));
};
const rankDocs = q => {
  const ql = q.toLowerCase();
  return Object.entries(WILL_DOCUMENTS)
    .map(([k,v]) => ({
      key:k,
      score: v.keywords.reduce((s,kw)=>s+(ql.includes(kw)?1:0), 0),
      name:v.name
    }))
    .sort((a,b)=>b.score-a.score)
    .slice(0,2);
};

/* -------------------------------------------------
   6. Основной React-компонент
-------------------------------------------------- */
export default function App() {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const cache = useRef(new DocumentCache());
  const endRef = useRef(null);

  /* авто-скролл */
  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:'smooth'}); }, [msgs]);

  const push = (text, isUser, meta=null) =>
    setMsgs(m=>[...m,{id:Date.now()+Math.random(),text,isUser,meta,time:new Date()}]);

  /* ---------- обработка вопроса ---------- */
  async function handleSend() {
    const q = input.trim();
    if (!q || busy) return;
    push(q, true);
    setInput('');
    setBusy(true);

    try {
      /* 1. Определяем релевантные документы */
      const docsRanked = rankDocs(q);
      const terms      = findTerms(q);
      let accessed = [];
      let context = '';

      for (const {key,name} of docsRanked) {
        const raw = await cache.current.get(key);
        const chunk = cache.current.extract(raw, terms);
        if (chunk) {
          accessed.push(name);
          context += `\n\n=== ${name} ===\n${chunk}`;
        }
      }

      /* 2. Собираем prompt */
      const lang = detectLang(q) === 'ru' ? 'Russian' : 'English';
      const prompt = `
You are WILL Geometry assistant. Answer in ${lang}.
CORE KNOWLEDGE:
${WILL_CORE_KNOWLEDGE}

${context ? `RELEVANT EXCERPTS:\n${context}` : ''}
USER QUESTION: """${q}"""
Provide a clear answer${context ? ' using the excerpts where helpful' : ''}.`;

      /* 3. Запрос к Gemini */
      const answer = await askGemini(prompt);

      push(answer, false, {
        confidence: accessed.length ? 'high' : 'medium',
        docs: accessed
      });

    } catch (e) {
      push(`⚠️ Error: ${e.message}`, false, {confidence:'low'});
    }
    setBusy(false);
  }

  /* ---------- UI ---------- */
  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 shadow">
        <div className="flex items-center gap-2">
          <Database size={20}/> <h1 className="font-bold">WILL AI Assistant</h1>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {msgs.map(m=>(
          <div key={m.id} className={`flex ${m.isUser?'justify-end':'justify-start'}`}>
            <div className={`${m.isUser
              ?'bg-indigo-600 text-white'
              :'bg-white border border-gray-200'} rounded-2xl p-4 max-w-[80%] prose prose-sm`}>
              <div className="whitespace-pre-wrap">{m.text}</div>
              {!m.isUser && m.meta && (
                <div className="mt-2 text-xs opacity-70">
                  Confidence: {m.meta.confidence}
                  {m.meta.docs?.length>0 && ` · Docs: ${m.meta.docs.join(', ')}`}
                </div>
              )}
              <div className="text-[10px] opacity-50 mt-1 text-right">
                {m.time.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        {busy && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 rounded-2xl p-4 text-gray-600 flex items-center gap-2">
              <Clock className="animate-spin" size={16}/> Thinking…
            </div>
          </div>
        )}
        <div ref={endRef}/>
      </main>

      {/* Input */}
      <footer className="border-t border-gray-200 p-4">
        <div className="flex gap-2">
          <textarea
            value={input}
            onChange={e=>setInput(e.target.value)}
            onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();handleSend();}}}
            placeholder="Ask about WILL Geometry…"
            disabled={busy}
            rows={1}
            className="flex-1 resize-none border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-indigo-300 text-sm"
            style={{minHeight:'48px',maxHeight:'120px'}}
            onInput={e=>{
              e.target.style.height='auto';
              e.target.style.height=Math.min(e.target.scrollHeight,120)+'px';
            }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()||busy}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl px-5 py-3 disabled:opacity-50 flex items-center gap-1">
            {busy ? <Clock size={16} className="animate-spin"/> : <Send size={16}/>}
            <span>Send</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
