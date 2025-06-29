import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks'; // <-- IMPORT THE PLUGIN
import 'katex/dist/katex.min.css';

export default function ChatMessage({ role, text, debug_raw_response }) {
  return (
    <div className={`msg ${role}`}>
      <ReactMarkdown
        // Add remarkBreaks to the list of plugins
        remarkPlugins={[remarkMath, remarkGfm, remarkBreaks]}
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
