import { useState } from 'react';
import ChatMessage from './ChatMessage';
import './App.css';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [model, setModel] = useState('');

  async function send() {
    if (!input.trim()) return;
    const userInput = input;
    setMessages(m => [...m, { role: 'user', text: userInput }]);
    setInput('');

    try {
      const r = await fetch(
        'https://proxy-flame-seven.vercel.app/api/gemini',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: userInput })
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
        // This is the fix: We now pass the debug info into the message state
        setMessages(m => [...m, {
          role: 'ai',
          text: data.reply,
          debug_raw_response: data.debug_raw_response
        }]);
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
