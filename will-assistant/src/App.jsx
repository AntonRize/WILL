import { useState } from 'react';
import ChatMessage from './ChatMessage';
import './App.css';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

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

      const data = await r.json();

      // --- NEW: Proper Error Handling ---
      // This checks if the response was successful or an error.
      let messageText;
      if (r.ok) {
        messageText = data.reply;
      } else {
        messageText = `Error: ${data.error || 'An unknown server error occurred.'}`;
      }
      setMessages(m => [...m, { role: 'ai', text: messageText }]);

    } catch (e) {
      // This catches network errors or if the server returns non-JSON text.
      const errorText = `Error: Failed to connect to the server. ${e.message}`;
      setMessages(m => [...m, { role: 'ai', text: errorText }]);
    }
  }

  return (
    <div className="chat-box">
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
