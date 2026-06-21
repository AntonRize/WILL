// /assets/tutor.js
//
// Contextual "explain the highlighted text" tutor for the WILL RG pages.
// It mirrors the main WILL-AI assistant (assistant/index.html): same knowledge
// base, same proxy, same SYSTEM_PROMPT.txt — but WITHOUT the mathematical
// engagement protocol (no engagement-level gate, no user-profiling, no Socratic
// counter-interrogation). The user highlights text and gets a direct explanation.

(function () {
    // Check if React and ReactDOM are loaded
    if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
        console.error('TutorWidget Error: React or ReactDOM is not loaded.');
        return;
    }

    const { useState, useEffect, useRef } = React;
    const { createRoot } = ReactDOM;

    // --- Configuration (kept in sync with assistant/index.html) ---
    const REPO_BASE = 'https://raw.githubusercontent.com/AntonRize/WILL/main/';
    // Current knowledge-base documents (these replace the old, renamed files).
    const KNOWLEDGE_BASE_FILES = [
        'WILL DATABASE/WILL_RG_I.txt',
        'WILL DATABASE/R.O.M..txt',
        'WILL DATABASE/WILL_RG_II.txt',
        'WILL DATABASE/WILL_RG_III.txt',
    ];
    const SYSTEM_PROMPT_FILE = 'assistant/SYSTEM_PROMPT.txt';
    const PROXY_URL = 'https://proxy-flame-seven.vercel.app/api/gemini';

    // Tutor-specific framing. Replaces the assistant's engagement-level <USER_PROFILE>.
    const TUTOR_CONTEXT = `
<TUTOR_CONTEXT>
- Your Role: You are WILL AI acting as a friendly, embedded "contextual tutor".
- Your Task: Explain the exact text the user highlighted on the page, clearly and accurately, using the WILL Relational Geometry framework's own logic.
- Current Page: https://willrg.com/relativistic-foundations/
- Input: the user provides the highlighted text in <SELECTED_TEXT> and may provide the nearest heading in <CONTEXT>. Keep your answer directly relevant to that selection.
- Audience: assume a curious reader who may be new to the framework. Explain at an accessible level first, then add rigor if they ask.
- DO NOT ask the user to choose a "mathematical engagement level", DO NOT interrogate them about their background or where they found the site, and DO NOT end your answer with a mandatory challenge question. Simply help them understand the selected text.
</TUTOR_CONTEXT>`;

    // Remove the "mathematical engagement" machinery from the shared system prompt:
    //   <USER_PROFILING_PROTOCOL> ... </USER_PROFILING_PROTOCOL>   (background survey)
    //   <ENGAGEMENT_PROTOCOL>     ... </ENGAGEMENT_PROTOCOL>       (Socratic counter-interrogation)
    const stripEngagementProtocol = (prompt) =>
        prompt
            .replace(/<USER_PROFILING_PROTOCOL>[\s\S]*?<\/USER_PROFILING_PROTOCOL>\s*/g, '')
            .replace(/<ENGAGEMENT_PROTOCOL>[\s\S]*?<\/ENGAGEMENT_PROTOCOL>\s*/g, '');

    // Minimal fallback prompt, used only if SYSTEM_PROMPT.txt cannot be fetched,
    // so a single network hiccup never disables the tutor entirely.
    const FALLBACK_SYSTEM_PROMPT = `<SYSTEM_INSTRUCTIONS>
You are WILL AI, the research assistant for WILL Relational Geometry (RG).
Explain concepts clearly from the framework's own logic. Cite the knowledge base when relevant using full https://willrg.com/documents/ links. Use Markdown; write all math in LaTeX ($...$ inline, $$...$$ display). Keep answers short and sharp. If a topic is not in the knowledge base, say so rather than inventing it.
</SYSTEM_INSTRUCTIONS>`;

    // --- Helper Functions ---
    const loadKnowledgeBase = () =>
        Promise.all(
            KNOWLEDGE_BASE_FILES.map(file =>
                fetch(REPO_BASE + file).then(res => {
                    if (!res.ok) throw new Error(`Failed to fetch KB (${file}): ${res.status}`);
                    return res.text();
                }).then(text => `<SOURCE_DOCUMENT: ${file}>\n${text}\n</SOURCE_DOCUMENT>`)
            )
        ).then(texts => texts.join('\n\n'));

    const loadSystemPrompt = () =>
        fetch(REPO_BASE + SYSTEM_PROMPT_FILE)
            .then(res => {
                if (!res.ok) throw new Error(`Prompt fetch ${res.status}`);
                return res.text();
            })
            .then(stripEngagementProtocol)
            .catch(err => {
                console.warn('Tutor: falling back to built-in system prompt —', err);
                return FALLBACK_SYSTEM_PROMPT;
            });

    const askGemini = (prompt) =>
        fetch(PROXY_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt }),
        })
        .then(res => res.text())
        .then(text => {
            let data;
            try { data = JSON.parse(text); }
            catch (e) { throw new Error(text || 'Proxy error'); }
            if (data.error) throw new Error(typeof data.error === 'string' ? data.error : JSON.stringify(data.error));
            if (typeof data.reply !== 'string') throw new Error('Malformed proxy response (no reply).');
            return data.reply;
        });

    // Markdown + LaTeX rendering (mirrors assistant/index.html so equations render).
    const renderMarkdownWithLatex = (text) => {
        const placeholders = [];
        let idx = 0;
        const protect = (re) => {
            text = text.replace(re, (m) => {
                const ph = '\x00MATH' + (idx++) + '\x00';
                placeholders.push({ ph, val: m });
                return ph;
            });
        };
        protect(/\$\$([\s\S]*?)\$\$/g);
        protect(/\$([^\$\n]+?)\$/g);
        protect(/\\\[([\s\S]*?)\\\]/g);
        protect(/\\\(([\s\S]*?)\\\)/g);

        let html = marked.parse(text);
        html = html.replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ');
        for (const { ph, val } of placeholders) html = html.replace(ph, val);
        return html;
    };

    const typesetMath = () => {
        if (window.MathJax && MathJax.typesetPromise) {
            MathJax.typesetPromise().catch(err => console.warn('MathJax typeset error:', err));
        }
    };

    // --- React Component ---
    const TutorWidget = ({ kb, sysPrompt, kbStatus }) => {
        const [isOpen, setIsOpen] = useState(false);
        const [log, setLog] = useState([]);
        const [busy, setBusy] = useState(false);
        const [inputValue, setInputValue] = useState('');
        const logRef = useRef(log);
        const endOfMessagesRef = useRef(null);
        const initialTextRef = useRef(null);

        useEffect(() => {
            window.WILL_TUTOR = {
                explain: (text, context) => {
                    const welcomeMessage = {
                        id: Date.now(),
                        user: false,
                        isWelcome: true,
                        html: renderMarkdownWithLatex(`I will explain the following selected text:\n\n> *${text.trim()}*`),
                    };
                    setLog([welcomeMessage]);
                    initialTextRef.current = { text, context };
                    setIsOpen(true);
                },
            };
            return () => { delete window.WILL_TUTOR; };
        }, []);

        useEffect(() => {
            if (isOpen && initialTextRef.current) {
                const { text, context } = initialTextRef.current;
                sendQuery(text, context, true);
                initialTextRef.current = null;
            }
        }, [isOpen]);

        useEffect(() => {
            endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
            logRef.current = log;
            typesetMath(); // render any LaTeX in freshly added messages
        }, [log]);

        const sendQuery = async (queryText, context = '', isFirstQuery = false) => {
            if (!queryText || busy) return;
            if (kbStatus !== 'ok') {
                pushMessage('Knowledge base is still loading. Please try again in a moment.', false);
                return;
            }

            if (!isFirstQuery) pushMessage(queryText, true);
            setInputValue('');
            setBusy(true);

            try {
                const conversation = logRef.current
                    .filter(m => !m.isWelcome)
                    .map(m => `${m.user ? 'User' : 'Assistant'}: ${m.raw}`)
                    .join('\n');

                const userQuestion = isFirstQuery
                    ? `<CONTEXT>${context}</CONTEXT>\n<SELECTED_TEXT>${queryText}</SELECTED_TEXT>`
                    : queryText;

                const fullPrompt = `${sysPrompt}

${TUTOR_CONTEXT}

<KNOWLEDGE_BASE>
${kb}
</KNOWLEDGE_BASE>
<CONVERSATION_HISTORY>
${conversation}
</CONVERSATION_HISTORY>

Answer in English. Use Markdown and LaTeX for math. Follow the <CITATION_PROTOCOL> for any references. The user's request is below.
<USER_QUESTION>
${userQuestion}
</USER_QUESTION>`;

                const response = await askGemini(fullPrompt);
                pushMessage(response, false);
            } catch (e) {
                pushMessage(`⚠️ Error: ${e.message}`, false);
            }
            setBusy(false);
        };

        const pushMessage = (text, isUser) => {
            const newMessage = {
                id: Date.now() + Math.random(),
                user: isUser,
                raw: text,
                html: isUser ? text : renderMarkdownWithLatex(text),
            };
            setLog(prevLog => [...prevLog, newMessage]);
        };

        const handleSend = () => sendQuery(inputValue.trim());

        if (!isOpen) return null;

        return React.createElement('div', { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" },
            React.createElement('div', { className: "w-full max-w-2xl h-[70vh] bg-slate-800 rounded-lg shadow-2xl flex flex-col p-4" },
                React.createElement('div', { className: "flex justify-between items-center mb-3" },
                    React.createElement('h2', { className: "text-lg font-bold text-white" }, "WILL AI"),
                    React.createElement('button', { onClick: () => setIsOpen(false), className: "text-gray-400 hover:text-white text-2xl" }, "×")
                ),
                React.createElement('div', { className: "flex-1 overflow-y-auto space-y-4 pr-2" },
                    log.map(m => React.createElement('div', { key: m.id, className: `flex ${m.user ? 'justify-end' : 'justify-start'}` },
                        React.createElement('div', {
                            className: `max-w-[85%] p-3 rounded-lg ai-message-bubble ${m.user ? 'bg-cyan-700 text-white' : 'bg-slate-700'}`,
                            style: m.user ? { whiteSpace: 'pre-wrap' } : undefined,
                            dangerouslySetInnerHTML: { __html: m.html }
                        })
                    )),
                    busy && React.createElement('div', { className: 'text-slate-300' }, "Thinking…"),
                    React.createElement('div', { ref: endOfMessagesRef })
                ),
                React.createElement('div', { className: "mt-3 flex gap-2" },
                    React.createElement('textarea', {
                        className: "flex-1 resize-none bg-slate-700 text-slate-50 rounded-lg p-3 focus:outline-none",
                        rows: "1", value: inputValue, placeholder: "Ask a follow-up question…",
                        onInput: e => setInputValue(e.target.value),
                        onKeyDown: e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }}
                    }),
                    React.createElement('button', {
                        className: "px-4 py-2 bg-cyan-600 text-white rounded-lg disabled:opacity-50",
                        disabled: !inputValue.trim() || busy, onClick: handleSend
                    }, "Send")
                )
            )
        );
    };

    const App = () => {
        const [kb, setKb] = useState(null);
        const [sysPrompt, setSysPrompt] = useState('');
        const [kbStatus, setKbStatus] = useState('loading');

        useEffect(() => {
            Promise.all([loadKnowledgeBase(), loadSystemPrompt()])
                .then(([kbData, promptData]) => { setKb(kbData); setSysPrompt(promptData); setKbStatus('ok'); })
                .catch(error => { console.error(error); setKbStatus('error'); });
        }, []);

        return React.createElement('div', null,
            kbStatus === 'loading' && React.createElement('div', { className: "fixed top-2 right-2 text-xs text-yellow-400" }, "KB loading…"),
            kbStatus === 'error' && React.createElement('div', { className: "fixed top-2 right-2 text-xs text-red-500" }, "KB error"),
            React.createElement(TutorWidget, { kb, sysPrompt, kbStatus })
        );
    };

    const rootEl = document.getElementById('tutor-root');
    if (rootEl) {
        const root = createRoot(rootEl);
        root.render(React.createElement(App));
    }

    let selectionPopup = null;
    function removePopup() {
        if (selectionPopup) {
            selectionPopup.remove();
            selectionPopup = null;
        }
    }
    document.addEventListener('mouseup', (e) => {
        setTimeout(() => {
            const selection = window.getSelection();
            const selectedText = selection.toString().trim();
            removePopup();
            if (selectedText.length > 5) {
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                selectionPopup = document.createElement('button');
                selectionPopup.innerHTML = '💡';
                selectionPopup.style.cssText = `position: absolute; left: ${window.scrollX + rect.left + rect.width / 2 - 15}px; top: ${window.scrollY + rect.top - 40}px; background: #38bdf8; color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; z-index: 1000; font-size: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.3);`;
                selectionPopup.onclick = () => {
                    let contextNode = range.startContainer.parentElement;
                    let contextText = '';
                    for (let i = 0; i < 10; i++) {
                        if (!contextNode || contextNode.tagName === 'BODY') break;
                        const heading = contextNode.querySelector('h1, h2, h3, h4');
                        if (heading) {
                            contextText = heading.textContent;
                            break;
                        }
                        contextNode = contextNode.parentElement;
                    }
                    if (window.WILL_TUTOR && typeof window.WILL_TUTOR.explain === 'function') {
                        window.WILL_TUTOR.explain(selectedText, contextText);
                    }
                    removePopup();
                };
                document.body.appendChild(selectionPopup);
            }
        }, 10);
    });
    document.addEventListener('mousedown', (e) => {
        if (selectionPopup && !selectionPopup.contains(e.target)) {
            removePopup();
        }
    });
})();
