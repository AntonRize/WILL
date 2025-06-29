import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';

// This component is now updated to show the debug information
// we are getting from the server.
export default function ChatMessage({ role, text, debug_raw_response }) {
  return (
    <div className={`msg ${role}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
      >
        {text}
      </ReactMarkdown>

      {/* This will render the raw debug output as pre-formatted text */}
      {debug_raw_response && (
        <pre className="debug-output">
          {debug_raw_response}
        </pre>
      )}
    </div>
  );
}
