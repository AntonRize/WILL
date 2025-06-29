import ReactMarkdown  from 'react-markdown';
import remarkMath      from 'remark-math';
import rehypeKatex     from 'rehype-katex';
import remarkGfm       from 'remark-gfm';
import remarkBreaks    from 'remark-breaks';
import 'katex/dist/katex.min.css';

/* Автопараграф:
   ставит двойной \n после точки-пробела «. » и перед звёздочкой списка. */
function autoParagraph(txt) {
  return txt
    .replace(/\. (\p{Lu})/gu, '.\n\n$1')   // новый абзац после точки
    .replace(/\* \*\*/g, '\n\n* **');       // перед bullet-списком
}

export default function ChatMessage({ role, text }) {
  return (
    <div className={`msg ${role}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeKatex]}
      >
        {autoParagraph(text)}
      </ReactMarkdown>
    </div>
  );
}
