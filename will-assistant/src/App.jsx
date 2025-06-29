/*  will-assistant/src/App.jsx
    – dynamic RAG (TF-IDF top-k)
    – Markdown output with LaTeX formulas
    – answers in English by default, auto-switch to Russian if question is RU   */

import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

const KB_FILES = [
  'WILL%20DATABASE/WILL%20PART%20I%20SR%20GR.txt',
  'WILL%20DATABASE/WILL%20PART%20II%20COSMO%20.txt',
  'WILL%20DATABASE/WILL%20PART%20III%20QM%20.txt'
];
const PROXY_URL = 'https://proxy-flame-seven.vercel.app/api/gemini';
const TOP_K = 3;

/* ---------- tiny TF-IDF ---------- */
const tok = t => (t.toLowerCase().match(/[a-zа-яё0-9]+/g) || []);
const tf  = arr => arr.reduce((m,w)=>(m[w]=(m[w]||0)+1,m),{});
function rank(q,chunks){
  const qw = tok(q); const idf={};
  chunks.forEach(c=>new Set(tok(c)).forEach(w=>idf[w]=(idf[w]||0)+1));
  Object.keys(idf).forEach(w=>idf[w]=Math.log(chunks.length/idf[w]));
  return chunks.map(t=>{
    const freq=tf(tok(t));
    const s=qw.reduce((s,w)=>s+(freq[w]||0)*idf[w]||0,0);
    return {t,s};
  }).sort((a,b)=>b.s-a.s).slice(0,TOP_K).map(o=>o.t);
}

/* ---------- load KB ---------- */
async function loadKB(){
  const root='https://raw.githubusercontent.com/AntonRize/WILL/main/';
  const txt=await Promise.all(KB_FILES.map(p=>fetch(root+p).then(r=>r.text())));
  return txt.join('\n').split(/\n{2,}/);
}

export default function App(){
  const [kb,setKb]=useState([]);   const [log,setLog]=useState([]);  const [inp,setInp]=useState('');
  useEffect(()=>{loadKB().then(setKb);},[]);

  const send=async()=>{
    const q=inp.trim(); if(!q)return; setInp('');
    setLog(l=>[...l,{role:'user',content:q}]);

    /* --- language detect: RU letters? --- */
    const isRU=/[а-яё]/i.test(q);

    const context=rank(q,kb).join('\n');
    const system=`You are WILL assistant.
• Reply in **English by default**. If the question is written in Russian, reply in Russian instead.
• Format using Markdown headings, bullet lists.
• Write every formula in LaTeX ($ … $ or $$ … $$). No raw HTML tags like <sub> or <sup>.`;

    const prompt=`${system}\n\nContext:\n${context}\n\nQuestion:\n${q}`;

    const res=await fetch(PROXY_URL,{
      method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt})
    });
    const data=await res.json();
    setLog(l=>[...l,{role:'assistant',content:data.reply||data.error}]);
  };

  const md=txt=>({__html:marked.parse(txt)});

  return(
    <div style={{fontFamily:'sans-serif',padding:24}}>
      <h1>WILL AI Assistant</h1>
      <div style={{maxHeight:400,overflowY:'auto',marginBottom:12}}>
        {log.map((m,i)=><div key={i} style={{marginBottom:8}}>
          <b>{m.role==='user'?'You':'AI'}:</b>
          <div dangerouslySetInnerHTML={md(m.content)}/>
        </div>)}
      </div>
      <input style={{width:'75%',marginRight:8}}
        value={inp} onChange={e=>setInp(e.target.value)}
        onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Ask something…"/>
      <button onClick={send}>Send</button>
    </div>
  );
}
