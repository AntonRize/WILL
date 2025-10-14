// /assets/tutor.js

(function () {
    // Check if React and ReactDOM are loaded
    if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
        console.error('TutorWidget Error: React or ReactDOM is not loaded.');
        return;
    }

    const { useState, useEffect, useRef } = React;
    const { createRoot } = ReactDOM;

    // --- Configuration ---
    const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/AntonRize/WILL/main/';
    const KNOWLEDGE_BASE_FILES = [
        'WILL%20DATABASE/WILL-PART-I.txt',
        'WILL%20DATABASE/WILL-APENDIX-I.txt',
        'WILL%20DATABASE/WILL-PART-II-COSMO.txt',
        'WILL%20DATABASE/WILL-PART-III-QM.txt',
    ];
    const PROXY_URL = 'https://proxy-flame-seven.vercel.app/api/gemini';

    // --- Helper Functions ---
    const loadKnowledgeBase = () => {
        return Promise.all(
            KNOWLEDGE_BASE_FILES.map(file =>
                fetch(GITHUB_BASE_URL + file).then(res => {
                    if (!res.ok) throw new Error(`Failed to fetch KB: ${res.status}`);
                    return res.text();
                })
            )
        ).then(texts => texts.join('\n\n'));
    };

    const askGemini = (prompt) => {
        return fetch(PROXY_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt }),
        })
        .then(res => res.text())
        .then(text => {
            try {
                const data = JSON.parse(text);
                if (!data.reply) throw new Error(data.error || 'Proxy error');
                return data.reply;
            } catch (e) {
                throw new Error(text);
            }
        });
    };

    // --- React Component ---
    const TutorWidget = ({ kb, kbStatus }) => {
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
                        html: marked.parse(`I will explain the following selected text:\n\n> *${text.trim()}*`),
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
        }, [log]);

        const sendQuery = async (queryText, context = '', isFirstQuery = false) => {
            if (!queryText || busy || kbStatus !== 'ok') {
                if (kbStatus !== 'ok') pushMessage('Knowledge base is not available. Please try again later.', false);
                return;
            }

            if (!isFirstQuery) pushMessage(queryText, true);
            setInputValue('');
            setBusy(true);

            try {
                const conversation = logRef.current.filter(m => !m.isWelcome).map(m => `${m.user ? 'User' : 'Assistant'}: ${m.raw}`).join('\n');
                const systemPrompt = `
<SYSTEM_INSTRUCTIONS>
<TUTOR_CONTEXT>
- Your Role: You are a helpful, expert 'Contextual Tutor'.
- Your Task: Your primary goal is to help a user understand a piece of text they have highlighted on a webpage about a new physics framework called WILL Geometry.
- Current Page: The user is currently reading this page: https://antonrize.github.io/WILL/relativistic-foundations/
- User Input: The user will provide the text they selected ('<SELECTED_TEXT>') and may provide the surrounding context ('<CONTEXT>'). Your explanation must be directly related to this input.
</TUTOR_CONTEXT>
<RULES_OF_INTELLECTUAL_CONDUCT>
<PRIMARY_TUTORING_DIRECTIVE>
Your primary goal is to explain the selected text clearly and accurately *from the perspective of the WILL Geometry framework*. Assume the user is a student trying to understand the material as it is presented on the page. Your first response should be dedicated to explaining the concept within the theory's own logic. Avoid introducing external criticism, alternative theories, or skeptical remarks unless the user specifically asks for a comparison or a critique in a follow-up question.
</PRIMARY_TUTORING_DIRECTIVE>
3. Understand the Foundational Principle: When evaluating the framework's central principle (SPACETIME ≡ ENERGY), you must understand that it is presented not as a new postulate, but as the direct consequence of removing a hidden assumption from physics — the separation of "structure" (spacetime) and "dynamics" (energy). The framework's goal is to demonstrate that all of physics can be derived logically from this single act of methodological hygiene. Your analysis must focus on the validity of the logical steps that follow this removal, not on the principle as an arbitrary axiom.
</RULES_OF_INTELLECTUAL_CONDUCT>
<FORMATTING_RULES>
You MUST format your entire response using Markdown. Separate all paragraphs with a double line break. Never wrap your entire response in a code block.
</FORMATTING_RULES>
</SYSTEM_INSTRUCTIONS>`;
                const userQuestion = isFirstQuery ? `<CONTEXT>${context}</CONTEXT>\n<SELECTED_TEXT>${queryText}</SELECTED_TEXT>` : queryText;
                const fullPrompt = `${systemPrompt}\n<KNOWLEDGE_BASE>\n${kb}\n</KNOWLEDGE_BASE>\n<CONVERSATION_HISTORY>\n${conversation}\n</CONVERSATION_HISTORY>\n\nAnswer in English. Use Markdown. The user's request is below.\n<USER_QUESTION>\n${userQuestion}\n</USER_QUESTION>`;
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
                html: isUser ? text : marked.parse(text),
            };
            setLog(prevLog => [...prevLog, newMessage]);
        };
        
        const handleSend = () => sendQuery(inputValue.trim());

        if (!isOpen) return null;

        return React.createElement('div', { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" },
            React.createElement('div', { className: "w-full max-w-2xl h-[70vh] bg-slate-800 rounded-lg shadow-2xl flex flex-col p-4" },
                React.createElement('div', { className: "flex justify-between items-center mb-3" },
                    React.createElement('h2', { className: "text-lg font-bold text-white" }, "Contextual Tutor"),
                    React.createElement('button', { onClick: () => setIsOpen(false), className: "text-gray-400 hover:text-white text-2xl" }, "×")
                ),
                React.createElement('div', { className: "flex-1 overflow-y-auto space-y-4 pr-2" },
                    log.map(m => React.createElement('div', { key: m.id, className: `flex ${m.user ? 'justify-end' : 'justify-start'}` },
                        React.createElement('div', {
                            className: `max-w-[85%] p-3 rounded-lg ${m.user ? 'bg-cyan-700 text-white' : 'bg-slate-700'}`,
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
        const [kbStatus, setKbStatus] = useState('loading');

        useEffect(() => {
            loadKnowledgeBase().then(data => { setKb(data); setKbStatus('ok'); }).catch(error => { console.error(error); setKbStatus('error'); });
        }, []);

        return React.createElement('div', null,
            kbStatus === 'loading' && React.createElement('div', { className: "fixed top-2 right-2 text-xs text-yellow-400" }, "KB loading…"),
            kbStatus === 'error' && React.createElement('div', { className: "fixed top-2 right-2 text-xs text-red-500" }, "KB error"),
            React.createElement(TutorWidget, { kb, kbStatus })
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