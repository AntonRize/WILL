import React, { useState, useEffect } from 'react';

const KB_FILES = [
  'WILL%20DATABASE/WILL%20PART%20I%20SR%20GR.txt',
  'WILL%20DATABASE/WILL%20PART%20II%20COSMO%20.txt',
  'WILL%20DATABASE/WILL%20PART%20III%20QM%20.txt'
];

/* —-- утилиты TF-IDF --— */
function tokenize(t){return t.toLowerCase().match(/[a-zа-яё0-9]+/g)||[];}
function tf(words){return Object.fromEntries(words.map(w=>[w,1]).reduce((a,[k,v])=>(a[k]=(a[k]||0)+v,a),{}));}

function rankChunks(question, chunks){
  const qWords = tokenize(question), qSet = new Set(qWords);
  const idf = {};                       // частоты слов по всем chunk’ам
  chunks.forEach(c => tokenize(c).forEach(w => idf[w]=(idf[w]||0)+1));
  Object.keys(idf).forEach(w => idf[w]=Math.log(chunks.length / idf[w]));

  const scores = chunks.map((c,i)=>{
    const words = tokenize(c), freqs=tf(words);
    const score = qWords.reduce((s,w)=>s+(freqs[w]||0)*idf[w],0);
    return {i,score};
  });
  return scores.sort((a,b)=>b.score-a.score).slice(0,3).map(s=>chunks[s.i]);
}

async function loadKB() {
  const base='https://raw.githubusercontent.com/AntonRize/WILL/main/';
  const texts = await Promise.all(KB_FILES.map(p=>fetch(base+p).then(r=>r.text())));
  return texts.join('\n').split(/\n{2,}/);          // массив абзацев
}

export default function App() {
  const [kb,setKb]=useState([]);          // массив строк-абзацев
  const [msgs,setMsgs]=useState([]);
  const [inp,setInp]=useState('');

  useEffect(()=>{ loadKB().then(setKb); },[]);

  async function send(){
    const q = inp.trim();
    if(!q) return;
    setMsgs(m=>[...m,{role:'user',content:q}]);
    setInp('');

    const context = rankChunks(q,kb).join('\n');
    const system = "You are WILL assistant. Answer in **Markdown** with headings and bullet lists when useful.";
    const prompt  = `${system}\n\nContext:\n${context}\n\nQuestion:\n${q}`;

    const res = await fetch('https://proxy-flame-seven.vercel.app/api/gemini',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({prompt})
    });
    const json = await res.json();
    setMsgs(m=>[...m,{role:'assistant',content:json.reply||json.error}]);
  }

  return (
    <div style={{fontFamily:'sans-serif',padding:24}}>
      <h2>WILL AI Assistant</h2>

      <div style={{maxHeight:400,overflowY:'auto',marginBottom:12}}>
        {msgs.map((m,i)=><div key={i} style={{marginBottom:8}}>
          <b>{m.role==='user'?'You':'AI'}:</b>&nbsp;
          <span dangerouslySetInnerHTML={{__html:marked.parseInline(m.content)}} />
        </div>)}
      </div>

      <input value={inp} onChange={e=>setInp(e.target.value)}
             onKeyDown={e=>e.key==='Enter'&&send()}
             placeholder="Ask something…" style={{width:'75%',marginRight:8}}/>
      <button onClick={send}>Send</button>
    </div>
  );
}
