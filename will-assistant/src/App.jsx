// src/App.jsx  (v2.0 – June 30 2025)
import React, { useState, useEffect, useRef } from 'react';
import { Send, Database, Clock } from 'lucide-react';

/* ---------- 1. Документы WILL ---------- */
const WILL_DOCUMENTS = {
  relativity: {
    url: 'https://raw.githubusercontent.com/AntonRize/WILL/refs/heads/main/WILL%20DATABASE/WILL%20PART%20I%20SR%20GR.txt',
    name: 'Part I – Relativity',
    keywords: ['relativity','spacetime','lorentz','einstein','β','β²','κ','sr','gr']
  },
  cosmology: {
    url: 'https://raw.githubusercontent.com/AntonRize/WILL/refs/heads/main/WILL%20DATABASE/WILL%20PART%20II%20COSMO%20.txt',
    name: 'Part II – Cosmology',
    keywords: ['cosmology','omega','λ','Λ','Ω','Ω_Λ','Ω_m','hubble','h0','H₀']
  },
  quantum: {
    url: 'https://raw.githubusercontent.com/AntonRize/WILL/refs/heads/main/WILL%20DATABASE/WILL%20PART%20III%20QM%20.txt',
    name: 'Part III – Quantum Mechanics',
    keywords: ['quantum','α','alpha','fine structure','ψ','wave function','qm','bohr']
  }
};

/* ---------- 2. WILL CORE (глобальный конспект) ---------- */
const WILL_CORE = `
# WILL Geometry – основные идеи
SPACETIME ≡ ENERGY EVOLUTION → физика как геометрическое проектирование.

Ключевые формулы
κ² = 2β²   ·   β = v/c   ·   κ = vₑ/c   ·   α = β
Ω_Λ = 2/3   ·   Ω_m = 1/3   ·   w = −1   ·   E = mc²
`;

/* ---------- 3. Документ-кэш с извлечением фрагментов ---------- */
class DocCache {
  cache = new Map();
  loading = new Set();

  async get(key) {
    if (this.cache.has(key)) return this.cache.get(key);
    if (this.loading.has(key)) {
      while (this.loading.has(key)) await new Promise(r=>setTimeout(r,80));
      return this.cache.get(key);
    }
    this.loading.add(key);
    try {
      const res = await fetch(WILL_DOCUMENTS[key].url);
      const txt = await res.text();
      this.cache.set(key, txt);
      return txt;
    } finally { this.loading.delete(key); }
  }

  extract(txt, terms, maxLen = 4000) {
    if (!txt) return '';
    const lines = txt.split('\n');
    const blocks = [];
    lines.forEach((line,i)=>{
      if (terms.some(t=>line.toLowerCase().includes(t))) {
        const part = lines.slice(Math.max(0,i-3), Math.min(lines.length,i+7)).join('\n');
        blocks.push(part);
      }
    });
    const joined = blocks.join('\n\n— — —\n\n');
    return joined.length>maxLen ? joined.slice(0,maxLen)+'…' : joined;
  }
}

/* ---------- 4. Proxy-запрос к Gemini ---------- */
const PROXY = 'https://proxy-flame-seven.vercel.app/api/gemini';
async function askGemini(prompt){
  const r = await fetch(PROXY,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({prompt})
  });
  const raw = await r.text();
  let data; try{data=JSON.parse(raw);}catch{throw new Error(raw);}
  if(!r.ok) throw new Error(data.error||'Gemini error');
  return data.reply;
}

/* ---------- 5. Вспомогательные ---------- */
const GREETINGS = ['hi','hello','привет','hey'];
const detectLang = t => /[а-яё]/i.test(t) ? 'Russian' : 'English';
function isGreeting(q){
  const lq = q.trim().toLowerCase();
  return GREETINGS.includes(lq);
}
function findTerms(q){
  const base = [
    'kappa','κ','beta','β','alpha','α','omega','ω','lambda','λ','hubble','h0','H₀'
  ];
  const lq = q.toLowerCase();
  return base.filter(t=>lq.includes(t));
}
function rankDocs(q){
  const lq = q.toLowerCase();
  return Object.entries(WILL_DOCUMENTS)
    .map(([k,v])=>({key:k,score:v.keywords.filter(kw=>lq.includes(kw)).length,name:v.name}))
    .filter(o=>o.score>0)
    .sort((a,b)=>b.score-a.score)
    .slice(0,2);
}

/* ---------- 6. Основной компонент ---------- */
export default function App(){
  const [msgs,setMsgs] = useState([]);
  const [txt,setTxt]   = useState('');
  const [busy,setBusy] = useState(false);
  const cacheRef = useRef(new DocCache());
  const endRef   = useRef(null);

  useEffect(()=>{endRef.current?.scrollIntoView({behavior:'smooth'});},[msgs]);

  const push = (t,isUser=false)=>setMsgs(m=>[...m,{id:Date.now()+Math.random(),t,isUser}]);

  async function send(){
    const q = txt.trim();
    if(!q||busy) return;
    push(q,true);
    setTxt('');
    if(isGreeting(q)){
      push('Hello!  Ask me anything about WILL Geometry.');
      return;
    }
    setBusy(true);
    try{
      const lang = detectLang(q)==='Russian'?'Russian':'English';
      const terms = findTerms(q);
      const docs  = rankDocs(q);
      let excerpts = '';

      for(const {key,name} of docs){
        const raw = await cacheRef.current.get(key);
        const chunk = cacheRef.current.extract(raw,terms);
        if(chunk) excerpts += `\n\n=== ${name} ===\n${chunk}`;
      }

      const prompt = `
You are WILL Geometry assistant. Answer in ${lang}.
CORE KNOWLEDGE:
${WILL_CORE}
${excerpts ? `RELEVANT EXCERPTS:\n${excerpts}` : ''}
USER QUESTION: """${q}"""
Give a concise, accurate explanation.`;

      const ans = await askGemini(prompt);
      push(ans);
    }catch(e){
      push('⚠️ '+e.message);
    }
    setBusy(false);
  }

  return(
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-white">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 shadow flex items-center gap-2">
        <Database size={20}/> <h1 className="font-bold">WILL AI Assistant</h1>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {msgs.map(m=>(
          <div key={m.id} className={`flex ${m.isUser?'justify-end':'justify-start'}`}>
            <div className={`${m.isUser?'bg-indigo-600 text-white':'bg-white border'} rounded-2xl p-4 max-w-[80%] whitespace-pre-wrap`}>
              {m.t}
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

      <footer className="border-t p-4">
        <div className="flex gap-2">
          <textarea
            className="flex-1 border rounded-2xl px-4 py-3 text-sm resize-none focus:ring-2 focus:ring-indigo-300"
            rows={1}
            placeholder="Ask about WILL Geometry…"
            value={txt}
            disabled={busy}
            onChange={e=>setTxt(e.target.value)}
            onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send();}}}
            onInput={e=>{
              e.target.style.height='auto';
              e.target.style.height=Math.min(e.target.scrollHeight,120)+'px';
            }}
          />
          <button
            onClick={send}
            disabled={!txt.trim()||busy}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl px-5 py-3 disabled:opacity-50 flex items-center gap-1">
            {busy?<Clock size={16} className="animate-spin"/>:<Send size={16}/>}
            Send
          </button>
        </div>
      </footer>
    </div>
  );
}
