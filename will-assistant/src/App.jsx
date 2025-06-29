import { useState } from 'react';
import ChatMessage from './ChatMessage';
import './App.css';

// This new function manually adds the necessary line breaks
// to the AI's response to ensure it's not a "wall of text".
function formatAIResponse(text) {
  // Ensure paragraphs are separated by adding double newlines after periods.
  let formattedText = text.replace(/\. /g, '.\n\n');

  // Ensure that lists (which start with *) are properly formatted on new lines.
  formattedText = formattedText.replace(/\* /g, '\n* ');

  return formattedText;
}

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  async function send() {
    if (!input.trim()) return;

    const userInput = input; // Save the user's message before clearing the input box
    setMessages(m => [...m, { role: 'user', text: userInput }]);
    setInput('');

    const r = await fetch(
      'https://proxy-flame-seven.vercel.app/api/gemini',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput })
      }
    );
    const { reply } = await r.json();

    // We process the AI's raw text with our new formatting function
    const formattedReply = formatAIResponse(reply);

    // Then add the fully formatted message to the chat
    setMessages(m => [...m, { role: 'ai', text: formattedReply }]);
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
