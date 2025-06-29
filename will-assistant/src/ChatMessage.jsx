import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import 'katex/dist/katex.min.css';

/* The custom 'autoParagraph' function has been removed.
  The 'remarkBreaks' plugin is the standard and more reliable way 
  to ensure that line breaks from the AI are displayed correctly.
*/

export default function ChatMessage({ role, text }) {
  return (
    <div className={`msg ${role}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeKatex]}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
