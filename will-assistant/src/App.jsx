/*  will-assistant/src/App.jsx
    – dynamic TF-IDF RAG
    – Markdown + LaTeX
    – EN default / RU if question in Cyrillic
    – авто-параграфы & no <sub>/<sup>                                 */

import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

/* -------- settings ---------- */
const KB = [
  'WILL%20DATABASE/WILL%20PART%20I%20SR%20GR.txt',
  'WILL%20DATABASE/WILL%20PART%20II%20COSMO%20.txt',
  'WILL%20DATABASE/WILL%20PART%20III%20QM%20.txt'
];
const PROXY = 'https://proxy-flame-seven.vercel.app/api/gemini';
const TOPK  = 3;

/* -------- tiny TF-IDF ---------- */
const tok = t => (t.toLowerCase().match(/[a-zа-яё0-9]+/g) || []);
const tf  = arr => arr.reduce((m,w)=>(m[w]=(m[w]||0)+1,m),{});
function rank(q, arr) {
  const qw = tok(q), idf = {};
  arr.forEach(t => new Set(tok(t)).forEach(w => idf[w]=(idf[w]||0)+1));
  Object.keys(idf).forEach(w => idf[w] = Math.log(arr.length / idf[w]));
  return arr.map(t => {
      const f = tf(tok(t));
      const s = qw.reduce((s,w)=>s + (f[w]||0)*(idf[w]||0), 0);
      return {t,s};
    })
    .sort((a,b)=>b.s-a.s).slice(0,TOPK).map(o=>o.t);
}

/* -------- load KB ---------- */
async function loadKB(){
  const root='https://raw.githubusercontent.com/AntonRize/WILL/main/';
  const txt=await Promise.all(KB.map(p=>fetch(root+p).then(r=>r.text())));
  return txt.join('\n').split(/\n{2,}/);
}

/* -------- helpers ---------- */
const subSupToTex = s =>
  s.replace(/<sub>(.*?)<\/sub>/gi,'_{\$1}')
   .replace(/<sup>(.*?)<\/sup>/gi,'^{\$1}');

const autoPara   = s =>
  s.replace(/([.!?])\s+(?=[A-ZА-Я])/g,'$1\n\n');  // абзац после точки-финала

/* -------- React ---------- */
export default function App(){
  const [kb,setKb]=useState([]);  const [log,setLog]=useState([]);  const [inp,setInp]=useState('');
  useEffect(()=>{ loadKB().then(setKb); },[]);

  async function ask(){
    const q=inp.trim(); if(!q) return;
    setInp(''); setLog(l=>[...l,{role:'user',content:q}]);

    const context=rank(q,kb).join('\n');
    const system=`You are WILL assistant.
• Default language: **English**. If the question contains Cyrillic, answer in Russian.  
• Write with Markdown headings, blank line between paragraphs, bullet/numbered lists where helpful.  
• Formulas **only** in LaTeX ($…$ or $$…$$). Never output raw HTML like <sub> or <sup>.`;

    const prompt=`${system}\n\nContext:\n${context}\n\nQuestion:\n${q}`;

    const r=await fetch(PROXY,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt})});
    const {reply='',error=''}=await r.json();

    const cleaned = autoPara(subSupToTex(reply||error));
    setLog(l=>[...l,{role:'assistant',content:cleaned}]);
  }

  const md = t => ({__html: marked.parse(t)});

  return (
    <div style={{fontFamily:'sans-serif',padding:24}}>
      <h1>WILL AI Assistant</h1>

      <div style={{maxHeight:400,overflowY:'auto',marginBottom:12}}>
        {log.map((m,i)=>
          <div key={i} style={{marginBottom:8}}>
            <b>{m.role==='user'?'You':'AI'}:</b>
            <div dangerouslySetInnerHTML={md(m.content)}/>
          </div>
        )}
      </div>

      <input style={{width:'75%',marginRight:8}}
        value={inp} onChange={e=>setInp(e.target.value)}
        onKeyDown={e=>e.key==='Enter'&&ask()}
        placeholder="Ask something…"/>
      <button onClick={ask}>Send</button>
    </div>
  );
}
