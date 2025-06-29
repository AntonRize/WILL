import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import 'katex/dist/katex.min.css';

export default function ChatMessage({ role, text, debug_raw_response }) {
  return (
    <div className={`msg ${role}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeKatex]}
      >
        {text}
      </ReactMarkdown>

      {/* This will now work because App.jsx is passing the prop */}
      {debug_raw_response && (
        <pre className="debug-output">
          {debug_raw_response}
        </pre>
      )}
    </div>
  );
}
