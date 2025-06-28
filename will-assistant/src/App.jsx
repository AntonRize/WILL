import React, { useState, useEffect } from 'react';

const KB_FILES = [
  'WILL%20DATABASE/WILL%20PART%20I%20SR%20GR.txt',
  'WILL%20DATABASE/WILL%20PART%20II%20COSMO%20.txt',
  'WILL%20DATABASE/WILL%20PART%20III%20QM%20.txt'
];

async function loadKnowledge() {
  const base = 'https://raw.githubusercontent.com/AntonRize/WILL/main/';
  const texts = await Promise.all(
    KB_FILES.map(path => fetch(base + path).then(r => r.text()))
  );
  return texts.join('\n');
}

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [knowledge, setKnowledge] = useState('');

  useEffect(() => {
    loadKnowledge().then(setKnowledge);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages([...messages, userMsg]);
    setInput('');

    const prompt = `${input}\n\nKnowledge:\n${knowledge}`;
    const res = await fetch('https://proxy-flame-seven.vercel.app/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    const reply = { role: 'assistant', content: data.reply || data.error };
    setMessages(m => [...m, reply]);
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '1rem' }}>
      <h1>WILL AI Assistant</h1>
      <div style={{ minHeight: '300px', border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
        {messages.map((m, i) => (
          <p key={i}><strong>{m.role === 'user' ? 'You' : 'AI'}:</strong> {m.content}</p>
        ))}
      </div>
      <div>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' ? sendMessage() : null}
          placeholder="Ask something..."
          style={{ width: '80%' }}
        />
        <button onClick={sendMessage} style={{ marginLeft: '0.5rem' }}>Send</button>
      </div>
    </div>
  );
}
