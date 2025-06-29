/*  will-assistant/src/App.jsx
    – TF-IDF RAG (top-3)
    – Markdown + auto-paragraph & bullet fix
    – EN by default, RU if question has Cyrillic
------------------------------------------------------------------------ */

import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

/* ---------- config ---------- */
const KB = [
  'WILL%20DATABASE/WILL%20PART%20I%20SR%20GR.txt',
  'WILL%20DATABASE/WILL%20PART%20II%20COSMO%20.txt',
  'WILL%20DATABASE/WILL%20PART%20III%20QM%20.txt'
];
const PROXY = 'https://proxy-flame-seven.vercel.app/api/gemini';
const TOPK  = 3;

/* ---------- tiny TF-IDF ---------- */
const tok=t=>(t.toLowerCase().match(/[a-zа-яё0-9]+/g)||[]);
function rank(q,chunks){
  const qw=tok(q), idf={};
  chunks.forEach(c=>new Set(tok(c)).forEach(w=>idf[w]=(idf[w]||0)+1));
  Object.keys(idf).forEach(w=>idf[w]=Math.log(chunks.length/idf[w]));
  return chunks.map(t=>{
      const freq=tok(t).reduce((m,w)=>(m[w]=(m[w]||0)+1,m),{});
      const score=qw.reduce((s,w)=>s+(freq[w]||0)*(idf[w]||0),0);
      return {t,score};
    })
    .sort((a,b)=>b.score-a.score)
    .slice(0,TOPK).map(o=>o.t);
}

/* ---------- load KB ---------- */
async function loadKB(){
  const root='https://raw.githubusercontent.com/AntonRize/WILL/main/';
  const txt=await Promise.all(KB.map(p=>fetch(root+p).then(r=>r.text())));
  return txt.join('\n').split(/\n{2,}/);
}

/* ---------- tidy helpers ---------- */
function subSupToTex(s){
  return s.replace(/<sub>(.*?)<\/sub>/gi,'_{\$1}')
          .replace(/<sup>(.*?)<\/sup>/gi,'^{\$1}');
}
function tidy(md){
  let s=subSupToTex(md);

  /* вставляем два \n после точки/воскл./вопроса + пробел + заглавная */
  s=s.replace(/([.!?])\s+(?=[A-ZА-Я])/g,'$1\n\n');

  /* пустая строка перед «1. …» «* …» «- …», если её нет */
  s=s.replace(/(^|\n)(\d+\.\s+)/g,'\n\n$2');
  s=s.replace(/(^|\n)([*-]\s+)/g,'\n\n$2');

  return s.trim();
}

/* ---------- markdown config ---------- */
marked.setOptions({ breaks:true });          // сохраняем \n как <br>

/* ---------- React ---------- */
export default function App(){
  const [kb,setKb]=useState([]);  const [log,setLog]=useState([]);  const [inp,setInp]=useState('');
  useEffect(()=>{ loadKB().then(setKb); },[]);

  async function ask(){
    const q=inp.trim(); if(!q)return;
    setInp(''); setLog(l=>[...l,{role:'user',content:q}]);

    const context=rank(q,kb).join('\n');
    const sys=`You are WILL assistant.
• Default language: **English**. Reply in Russian only if question contains Cyrillic.  
• Use Markdown headings, blank line between paragraphs, bullet/numbered lists.  
• All formulas in LaTeX ($…$ / $$…$$). No HTML <sub>, <sup>.`;
    const prompt=`${sys}\n\nContext:\n${context}\n\nQuestion:\n${q}`;

    const r=await fetch(PROXY,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt})});
    const {reply='',error=''}=await r.json();
    const clean=tidy(reply||error);

    setLog(l=>[...l,{role:'assistant',content:clean}]);
  }

  const md=txt=>({__html:marked.parse(txt)});

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

      <input style={{width:'75%',marginRight:8}} value={inp}
        onChange={e=>setInp(e.target.value)}
        onKeyDown={e=>e.key==='Enter'&&ask()}
        placeholder="Ask something…"/>
      <button onClick={ask}>Send</button>
    </div>
  );
}
