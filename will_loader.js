document.addEventListener('DOMContentLoaded', function() {
    // 1. Карта: Заголовок в текстовом файле => ID элемента в HTML
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
            // Новый, надежный парсер, который обрабатывает текст построчно, сохраняя абзацы.
            const sections = [];
            let currentBody = '';
            let currentHeader = null;

            // Разбиваем на строки, чтобы обработать каждую индивидуально
            const lines = text.split(/\r?\n/);

            for (const line of lines) {
                // Ищем заголовки, которые начинаются с '## '
                const match = line.match(/^##\s+(.*)/);

                if (match) {
                    // Если мы нашли новый заголовок, сохраняем предыдущую секцию
                    if (currentHeader) {
                        sections.push({ header: currentHeader, body: currentBody });
                    }
                    // Начинаем новую секцию
                    currentHeader = match[1].trim();
                    currentBody = '';
                } else {
                    // Если это не заголовок, просто добавляем строку к телу текущей секции.
                    // Важно: добавляем `\n`, чтобы сохранить переносы строк для Markdown-парсера.
                    currentBody += line + '\n';
                }
            }

            // Не забываем сохранить самую последнюю секцию после окончания цикла
            if (currentHeader) {
                sections.push({ header: currentHeader, body: currentBody });
            }

            // 5. Вставляем контент в нужные места на странице
            sections.forEach(section => {
                const id = sectionMap[section.header];
                if (id) {
                    const element = document.getElementById(id);
                    if (element) {
                        // `marked.parse` теперь получит текст с переносами строк и создаст <p> теги
                        element.innerHTML += marked.parse(section.body);
                    } else {
                        console.warn(`HTML элемент с id '${id}' не найден для заголовка '${section.header}'`);
                    }
                } else {
                     console.warn(`Заголовок '${section.header}' не найден в sectionMap.`);
                }
            });
        })
        .catch(e => console.error('Критическая ошибка при загрузке или обработке narrative.txt:', e));
});