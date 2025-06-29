import { useState } from 'react';
import ChatMessage  from './ChatMessage';
import './App.css';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput]       = useState('');

  async function send() {
    if (!input.trim()) return;
    setMessages(m => [...m, { role:'user', text: input }]);
    setInput('');

    const r = await fetch(
      'https://proxy-flame-seven.vercel.app/api/gemini',
      { method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ prompt: input }) }
    );
    const { reply } = await r.json();
    setMessages(m => [...m, { role:'ai', text: reply }]);
  }

  return (
    <div className="chat-box">
      {messages.map((m,i) => <ChatMessage key={i} {...m} />)}
      <div className="input-row">
        <input
          value={input}
          onChange={e=>setInput(e.target.value)}
          placeholder="Ask something…"
          onKeyDown={e=>e.key==='Enter'&&send()}
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}
