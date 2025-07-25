document.addEventListener('DOMContentLoaded', function() {
    // Карта, связывающая заголовки из текста с ID элементов на странице
    const sectionMap = {
        "What is This Page?": "postulate-content",
        "Section 1: The Universe from a Single Principle": "postulate-content",
        "Section 2: The Rules of the Game — A Foundation of Pure Logic": "postulate-content",
        "Section 3: Act I – Motion as a Shadow on the Circle (Special Relativity)": "sr-content",
        "How E = mc² Falls Out Naturally": "emc2-content",
        "The Energy-Momentum Triangle": "emc2-triangle-content",
        "Section 4: Act II – Gravity as a Shadow on the Sphere": "gr-content",
        "Gravity and Time Dilation": "gr-dilation-content",
        "Section 5: Unification – When the Circle Meets the Sphere": "unification-content",
        "κ–β Projection": "unification-projection-content",
        "Energy–Symmetry Law (Why No Free Lunch in the Universe)": "symmetry-content",
        "The Whole Universe in a Single Line": "oneline-content",
        "Section 7: Grounding the Vision – From Abstraction to Reality": "validation-content",
        "1. Time Correction in the GPS System": "validation-gps-content",
        "2. Precession of Mercury’s Orbit": "validation-mercury-content",
        "Section 8: A New Reality of Change — Dynamics Without Time": "dynamics-content",
        "Section 9: Conclusion — The World as a Projection": "conclusion-content"
    };

    fetch('narrative/will_narrative1.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
            // Умный парсер, который не ломает абзацы
            const sections = [];
            let currentSection = null;

            text.split('\n').forEach(line => {
                // Проверяем, является ли строка заголовком (начинается с ## или **)
                const match = line.match(/^(?:##|\*\*)\s*(.*?)\s*(?:\*\*)*$/);
                if (match) {
                    const header = match[1].trim();
                    currentSection = { header: header, body: '' };
                    sections.push(currentSection);
                } else if (currentSection) {
                    // Если это не заголовок, добавляем строку к телу текущей секции
                    currentSection.body += line + '\n';
                }
            });

            // Вставляем обработанные секции в нужные div
            sections.forEach(section => {
                const id = sectionMap[section.header];
                if (id) {
                    const element = document.getElementById(id);
                    if (element) {
                        // Используем +=, чтобы добавлять контент, а не перезаписывать его
                        element.innerHTML += marked.parse(section.body);
                    }
                }
            });
        })
        .catch(e => console.error('Ошибка загрузки или обработки текста:', e));
});