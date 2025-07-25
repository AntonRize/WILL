// 1. Map: section header text (as found in TXT) => html id (from your cleaned_interactive.html)
const sectionMap = {
    "What is This Page?": "postulate-content",
    "Section 1: The Universe from a Single Principle": "postulate-content",
    "Section 2: The Rules of the Game": "postulate-content",
    "Section 3: Act I – Motion as a Shadow on the Circle": "sr-content",
    "How E = mc² Falls Out Naturally": "emc2-content",
    "The Energy-Momentum Triangle": "emc2-triangle-content",
    "Section 4: Act II – Gravity as a Shadow on the Sphere": "gr-content",
    "Gravity and Time Dilation": "gr-dilation-content",
    "Section 5: Unification – When the Circle Meets the Sphere": "unification-content",
    "κ–β Projection": "unification-projection-content",
    "Energy–Symmetry Law (Why No Free Lunch in the Universe)": "symmetry-content",
    "The Whole Universe in a Single Line": "oneline-content",
    "Section 7: Grounding the Vision – From Abstraction to Reality": "validation-content",
    "GPS Time Correction": "validation-gps-content",
    "Mercury's Orbital Precession": "validation-mercury-content",
    "Section 8: A New Reality of Change": "dynamics-content",
    "Section 9: Conclusion — The World as a Projection": "conclusion-content"
};

// 2. Load the narrative file (use relative path as served by github pages)
fetch('narrative/will_narrative1.txt')
.then(r => r.text())
.then(text => {
    // 3. Split into sections by header: match lines starting with ** or ## (not with $!)
    const splitRegex = /^(\*\*|##)\s?(.+)$/gm;
    let sections = [];
    let match;
    let headers = [];
    while ((match = splitRegex.exec(text)) !== null) {
        headers.push({
            header: match[2].trim(),
            start: match.index
        });
    }
    for (let i = 0; i < headers.length; i++) {
        let start = headers[i].start;
        let end = (i+1 < headers.length) ? headers[i+1].start : text.length;
        let header = headers[i].header;
        let body = text.slice(start, end).replace(/^\*\*|^##/gm, '').trim();
        sections.push({header, body});
    }
    // 4. Insert each section in the proper div by id
    for (const section of sections) {
        const id = sectionMap[section.header];
        if (id && document.getElementById(id)) {
            document.getElementById(id).innerHTML = marked.parse(section.body.trim());
        }
    }
});