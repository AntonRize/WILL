import { useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import './App.css';

const KB_FILES = [
  'WILL%20DATABASE/WILL%20PART%20I%20SR%20GR.txt',
  'WILL%20DATABASE/WILL%20PART%20II%20COSMO%20.txt',
  'WILL%20DATABASE/WILL%20PART%20III%20QM%20.txt'
];

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
  const [model, setModel] = useState('');
  const [sections, setSections] = useState(null);

  useEffect(() => {
    loadKnowledge()
      .then(text => {
        const parts = text.split(/\n\s*\n/).map(t => t.trim()).filter(Boolean);
        setSections(parts);
      })
      .catch(err => {
        console.error('Failed to load knowledge base', err);
      });
  }, []);

  async function send() {
    if (!input.trim()) return;
    const userInput = input;
    setMessages(m => [...m, { role: 'user', text: userInput }]);
    setInput('');

    if (!sections) {
      setMessages(m => [...m, { role: 'ai', text: 'Knowledge base is still loading. Please try again in a moment.' }]);
      return;
    }

    const lowerWords = userInput.toLowerCase().split(/\s+/);
    const ranked = sections
      .map(text => {
        const l = text.toLowerCase();
        const score = lowerWords.reduce((c, w) => l.includes(w) ? c + 1 : c, 0);
        return { text, score };
      })
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    if (ranked.length === 0) {
      setMessages(m => [...m, { role: 'ai', text: 'I could not find an answer in the WILL documentation. Please ask your question here: https://antonrize.github.io/WILL/discussions/' }]);
      return;
    }

    const context = ranked.map(r => r.text).join('\n');

    try {
      const r = await fetch(
        'https://proxy-flame-seven.vercel.app/api/gemini',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: `${userInput}\n\nContext:\n${context}` })
        }
      );

      const rawText = await r.text();
      let data;
      try {
        data = JSON.parse(rawText);
      } catch {
        throw new Error(rawText);
      }

      if (r.ok) {
        setMessages(m => [...m, { role: 'ai', text: data.reply }]);
        if (data.model) setModel(data.model);
      } else {
        const errorText = `Error: ${data.error || 'An unknown server error occurred.'}`;
        setMessages(m => [...m, { role: 'ai', text: errorText }]);
      }

    } catch (e) {
      const errorText = `Error: Failed to connect to the server. ${e.message}`;
      setMessages(m => [...m, { role: 'ai', text: errorText }]);
    }
  }

  return (
    <div className="chat-box">
      <h1 className="title">WILL AI Assistant</h1>
      {model && (
        <p className="model-name">Model: {model}</p>
      )}
      <p className="disclaimer">AI can make mistakes. Double-check with the main WILL documentation.</p>

      {/* The spread operator {...m} will now correctly pass all props */}
      {messages.map((m, i) => <ChatMessage key={i} {...m} />)}
      <div className="input-row">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask something…"
          onKeyDown={e => e.key === 'Enter' && send()}
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}
