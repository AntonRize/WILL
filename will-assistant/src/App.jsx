import React, { useState, useEffect } from 'react';

const KB_FILES = [
  'WILL%20DATABASE/WILL%20PART%20I%20SR%20GR.txt',
  'WILL%20DATABASE/WILL%20PART%20II%20COSMO%20.txt',
  'WILL%20DATABASE/WILL%20PART%20III%20QM%20.txt'
];

const MAX_KB_CHARS = 30000; // ≈10-15 k токенов

async function loadKnowledge() {
  const base = 'https://raw.githubusercontent.com/AntonRize/WILL/main/';
  const texts = await Promise.all(
    KB_FILES.map(p => fetch(base + p).then(r => r.text()))
  );
  return texts.join('\n');
}

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [knowledge, setKnowledge] = useState('');

  useEffect(() => { loadKnowledge().then(setKnowledge); }, []);

  const sendMessage = async () => {
    const question = input.trim();
    if (!question) return;
    setMessages(m => [...m, { role: 'user', content: question }]);
    setInput('');

    const prompt = `${question}\n\nKnowledge:\n${knowledge.slice(0, MAX_KB_CHARS)}`;

    try {
      const res = await fetch('https://proxy-flame-seven.vercel.app/api/gemini', {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body   : JSON.stringify({ prompt })
      });

      // определяем, что именно вернул сервер
      const isJson = res.headers.get('content-type')?.includes('application/json');
      const data   = isJson ? await res.json() : { error: await res.text() };

      if (!res.ok) {
        throw new Error(data.error || `HTTP ${res.status}`);
      }

      setMessages(m => [...m,
        { role: 'assistant', content: data.reply || '[empty reply]' }
      ]);

    } catch (err) {
      setMessages(m => [...m,
        { role: 'assistant', content: `Error: ${err.message}` }
      ]);
    }
  };

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>WILL AI Assistant</h1>

      <div style={{ maxHeight: 400, overflowY: 'auto', marginBottom: 12 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 6 }}>
            <strong>{m.role === 'user' ? 'You' : 'AI'}:</strong> {m.content}
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' ? sendMessage() : null}
        placeholder="Ask something..."
        style={{ width: '75%', marginRight: 8 }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
