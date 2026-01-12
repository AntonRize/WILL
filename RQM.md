---
layout: default
title: "Relational Quantum Mechanics"
---

{% include interactive/RQM_engine.html %}

# Relational Quantum Mechanics
<span class="text-xl text-blue-300 font-light">Deriving Atomic Structure from Pure Geometry.</span>

---

## 1. The Problem: Probability vs. Geometry

Standard Quantum Mechanics treats electrons as probability clouds. It says we can never know exactly *where* an electron is, only where it *might* be.

In **WILL Relational Geometry**, we propose that uncertainty is not fundamental. It is simply a result of neglecting the **geometric shape** of the electron's relationship with the nucleus.

### Our Solution: The Electron as a "Needle"

We model the electron not as a point particle, but as a relational vector (a "needle") in phase space. Its interaction depends on:

* **Eccentricity ($\varepsilon$):** How "stretched" the orbital is.
* **Screening ($\sigma$):** How much it blocks the nuclear charge.
* **Topology Tax:** The energy cost of forming 3D structures (p-orbitals).

---

## 2. Interactive Geometric Analysis

Use the tool below to explore the first 36 elements. Click on an element to see how **WILL RG** calculates its effective nuclear charge ($Z_{eff}$) using only geometric principles.

<div class="app-container bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl mt-8 mb-12 flex flex-col md:flex-row" style="min-height: 600px;">
    
    <div class="flex-1 p-6 bg-slate-900/50 overflow-y-auto custom-scrollbar border-r border-slate-800">
        <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Select Element</h3>
        
        <div class="periodic-grid w-full max-w-4xl mx-auto" id="periodic-table">
            </div>
        
        <div class="mt-6 flex gap-4 text-xs text-slate-500 font-mono">
            <div class="flex items-center gap-2"><div class="w-3 h-3 bg-slate-800 border-b-2 border-red-400"></div> s-block</div>
            <div class="flex items-center gap-2"><div class="w-3 h-3 bg-slate-800 border-b-2 border-yellow-400"></div> p-block</div>
            <div class="flex items-center gap-2"><div class="w-3 h-3 bg-slate-800 border-b-2 border-sky-400"></div> d-block</div>
        </div>
    </div>

    <div class="w-full md:w-[400px] bg-slate-900 flex flex-col overflow-y-auto custom-scrollbar relative">
        
        <div class="p-6 border-b border-slate-800 bg-slate-800/20">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h1 class="text-4xl font-bold text-white tracking-tighter" id="detail-symbol">B</h1>
                    <h2 class="text-lg text-sky-400 font-medium" id="detail-name">Boron</h2>
                </div>
                <div class="text-right">
                    <div class="text-2xl text-slate-600 font-mono font-bold" id="detail-z">5</div>
                    <div class="text-xs font-bold px-2 py-1 bg-slate-800 rounded text-slate-400 mt-1 inline-block" id="detail-cat">METALLOID</div>
                </div>
            </div>
            
            <div class="mt-3 p-3 bg-slate-800 rounded border border-slate-700">
                <label class="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1 block">Configuration</label>
                <div class="font-mono text-sm text-white flex flex-wrap gap-1 leading-relaxed" id="config-display">
                    </div>
            </div>
        </div>

        <div id="will-analysis-panel" class="hidden flex-1 p-6 flex flex-col gap-4">
            
            <div class="bg-gradient-to-br from-slate-800 to-slate-900 p-5 rounded-xl border border-sky-900/50 shadow-lg relative overflow-hidden group">
                <div class="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                     <span class="material-symbols-outlined text-6xl text-sky-500">architecture</span>
                </div>
                
                <h3 class="text-xs font-bold text-sky-400 uppercase tracking-widest mb-4 relative z-10">
                    WILL Geometric Analysis
                </h3>
                
                <div class="flex justify-between items-end mb-4 relative z-10">
                    <div>
                        <span class="text-[10px] text-slate-400 uppercase font-bold block mb-1">Effective Charge ($Z_{eff}$)</span>
                        <div class="text-5xl font-bold text-white tracking-tighter" id="will-zeff">0.00</div>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] text-slate-500 block mb-1">Total Screening</span>
                        <span class="text-xl font-mono text-emerald-400" id="will-screening">0.00</span>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-2 text-xs relative z-10">
                    <div class="bg-black/20 p-2 rounded border border-white/5">
                        <span class="text-slate-500 block text-[10px]">Geometry</span>
                        <span class="text-sky-100 font-mono" id="will-geometry">Linear</span>
                    </div>
                    <div class="bg-black/20 p-2 rounded border border-white/5">
                        <span class="text-slate-500 block text-[10px]">Topology Tax</span>
                        <span class="text-sky-100 font-mono" id="will-tax">0.00</span>
                    </div>
                </div>
            </div>

            <details class="text-[11px] text-slate-400 cursor-pointer bg-slate-800/50 rounded border border-slate-800">
                <summary class="p-3 hover:text-sky-400 transition-colors font-bold select-none">View Calculation Log</summary>
                <div class="px-3 pb-3 pt-0 font-mono whitespace-pre-wrap leading-relaxed text-slate-300 border-t border-slate-700/50 mt-2" id="will-details">...</div>
            </details>

            <div class="relative mt-auto h-48 w-full bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center overflow-hidden">
                <canvas class="absolute inset-0 w-full h-full object-contain opacity-60" id="atom-canvas" width="400" height="200"></canvas>
                <div class="absolute bottom-2 right-2 text-[9px] text-slate-600 font-mono">2D Projection</div>
            </div>

        </div>

        <div id="will-not-supported" class="hidden flex-1 flex flex-col items-center justify-center p-8 text-center opacity-50">
             <span class="material-symbols-outlined text-4xl text-slate-600 mb-2">block</span>
             <span class="text-sm text-slate-400 font-mono block" id="will-error-msg">Block not supported</span>
        </div>

    </div>
</div>

<script>
    // --- Constants ---
    const ORBITAL_CAPACITIES = { s: 2, p: 6, d: 10, f: 14 };
    const SHELL_COLORS = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#64748b'];
    const AUFBAU_ORDER = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s', '4f', '5d', '6p'];
    
    // --- Data: First 36 Elements ---
    const ELEMENTS = [
        { z: 1, symbol: "H", name: "Hydrogen", mass: "1.008", category: "nonmetal", block: "s" },
        { z: 2, symbol: "He", name: "Helium", mass: "4.0026", category: "noble-gas", block: "s" },
        { z: 3, symbol: "Li", name: "Lithium", mass: "6.94", category: "alkali-metal", block: "s" },
        { z: 4, symbol: "Be", name: "Beryllium", mass: "9.0122", category: "alkaline-earth", block: "s" },
        { z: 5, symbol: "B", name: "Boron", mass: "10.81", category: "metalloid", block: "p" },
        { z: 6, symbol: "C", name: "Carbon", mass: "12.011", category: "nonmetal", block: "p" },
        { z: 7, symbol: "N", name: "Nitrogen", mass: "14.007", category: "nonmetal", block: "p" },
        { z: 8, symbol: "O", name: "Oxygen", mass: "15.999", category: "nonmetal", block: "p" },
        { z: 9, symbol: "F", name: "Fluorine", mass: "18.998", category: "halogen", block: "p" },
        { z: 10, symbol: "Ne", name: "Neon", mass: "20.180", category: "noble-gas", block: "p" },
        { z: 11, symbol: "Na", name: "Sodium", mass: "22.990", category: "alkali-metal", block: "s" },
        { z: 12, symbol: "Mg", name: "Magnesium", mass: "24.305", category: "alkaline-earth", block: "s" },
        { z: 13, symbol: "Al", name: "Aluminium", mass: "26.982", category: "post-transition", block: "p" },
        { z: 14, symbol: "Si", name: "Silicon", mass: "28.085", category: "metalloid", block: "p" },
        { z: 15, symbol: "P", name: "Phosphorus", mass: "30.974", category: "nonmetal", block: "p" },
        { z: 16, symbol: "S", name: "Sulfur", mass: "32.06", category: "nonmetal", block: "p" },
        { z: 17, symbol: "Cl", name: "Chlorine", mass: "35.45", category: "halogen", block: "p" },
        { z: 18, symbol: "Ar", name: "Argon", mass: "39.948", category: "noble-gas", block: "p" },
        { z: 19, symbol: "K", name: "Potassium", mass: "39.098", category: "alkali-metal", block: "s" },
        { z: 20, symbol: "Ca", name: "Calcium", mass: "40.078", category: "alkaline-earth", block: "s" },
        { z: 21, symbol: "Sc", name: "Scandium", mass: "44.956", category: "transition", block: "d" },
        { z: 22, symbol: "Ti", name: "Titanium", mass: "47.867", category: "transition", block: "d" },
        { z: 23, symbol: "V", name: "Vanadium", mass: "50.942", category: "transition", block: "d" },
        { z: 24, symbol: "Cr", name: "Chromium", mass: "51.996", category: "transition", block: "d" },
        { z: 25, symbol: "Mn", name: "Manganese", mass: "54.938", category: "transition", block: "d" },
        { z: 26, symbol: "Fe", name: "Iron", mass: "55.845", category: "transition", block: "d" },
        { z: 27, symbol: "Co", name: "Cobalt", mass: "58.933", category: "transition", block: "d" },
        { z: 28, symbol: "Ni", name: "Nickel", mass: "58.693", category: "transition", block: "d" },
        { z: 29, symbol: "Cu", name: "Copper", mass: "63.546", category: "transition", block: "d" },
        { z: 30, symbol: "Zn", name: "Zinc", mass: "65.38", category: "transition", block: "d" },
        { z: 31, symbol: "Ga", name: "Gallium", mass: "69.723", category: "post-transition", block: "p" },
        { z: 32, symbol: "Ge", name: "Germanium", mass: "72.630", category: "metalloid", block: "p" },
        { z: 33, symbol: "As", name: "Arsenic", mass: "74.922", category: "metalloid", block: "p" },
        { z: 34, symbol: "Se", name: "Selenium", mass: "78.96", category: "nonmetal", block: "p" },
        { z: 35, symbol: "Br", name: "Bromine", mass: "79.904", category: "halogen", block: "p" },
        { z: 36, symbol: "Kr", name: "Krypton", mass: "83.798", category: "noble-gas", block: "p" }
    ];

    const EXCEPTIONS = {
        24: "1s2 2s2 2p6 3s2 3p6 4s1 3d5",
        29: "1s2 2s2 2p6 3s2 3p6 4s1 3d10"
    };

    // --- Core Logic ---
    function getOrbitalCapacity(type) { return ORBITAL_CAPACITIES[type]; }

    function generateConfiguration(z) {
        if (EXCEPTIONS[z]) return parseConfigString(EXCEPTIONS[z]);
        let electronsRemaining = z;
        const config = [];
        for (const orbital of AUFBAU_ORDER) {
            if (electronsRemaining <= 0) break;
            const n = parseInt(orbital[0]);
            const type = orbital[1];
            const capacity = getOrbitalCapacity(type);
            const count = Math.min(electronsRemaining, capacity);
            config.push({ n, type, count, label: orbital });
            electronsRemaining -= count;
        }
        return config;
    }

    function parseConfigString(str) {
        return str.split(' ').map(part => {
            const match = part.match(/(\d)([spdf])(\d+)/);
            if (!match) return null;
            return {
                n: parseInt(match[1]),
                type: match[2],
                count: parseInt(match[3]),
                label: match[1] + match[2]
            };
        }).filter(x => x);
    }

    function formatConfig(config) {
        const sorted = [...config].sort((a, b) => {
            if (a.n !== b.n) return a.n - b.n;
            const lOrder = {s:0, p:1, d:2, f:3};
            return lOrder[a.type] - lOrder[b.type];
        });
        // Simplistic display, removed clickable interaction for cleaner UI
        return sorted.map(c => `<span class="text-slate-300">${c.n}${c.type}<sup class="text-sky-400">${c.count}</sup></span>`).join(' ');
    }
    
    // --- Application State ---
    let currentState = { selectedZ: 5 };
    let atomData = { subshells: [] };

    document.addEventListener('DOMContentLoaded', () => {
        renderPeriodicTable();
        selectElement(5); // Default to Boron
        requestAnimationFrame(animateAtom);
    });

    // --- Main Selection Handler ---
    function selectElement(z) {
        currentState.selectedZ = z;
        const el = ELEMENTS.find(e => e.z === z) || ELEMENTS[0];

        // 1. Update Table UI
        document.querySelectorAll('.element-cell').forEach(c => c.classList.remove('selected-element'));
        const cell = document.getElementById(`cell-${z}`);
        if(cell) cell.classList.add('selected-element');

        // 2. Update Header Info
        document.getElementById('detail-symbol').innerText = el.symbol;
        document.getElementById('detail-name').innerText = el.name;
        document.getElementById('detail-z').innerText = z;
        document.getElementById('detail-cat').innerText = el.category.replace('-', ' ').toUpperCase();

        // 3. Generate Config
        const configData = generateConfiguration(z);
        document.getElementById('config-display').innerHTML = formatConfig(configData);
        
        // 4. Update Visualizer Data
        updateAtomVisualizer(z, configData);

        // 5. Integrate WILL Engine
        const willPanel = document.getElementById('will-analysis-panel');
        const willError = document.getElementById('will-not-supported');
        const errorMsg = document.getElementById('will-error-msg');
        
        if (typeof calculateWILL === 'function') {
            if (['s', 'p'].includes(el.block)) {
                // Valid Block
                willPanel.classList.remove('hidden');
                willError.classList.add('hidden');

                const results = calculateWILL(z, configData);

                document.getElementById('will-zeff').innerText = results.effectiveCharge.toFixed(2);
                document.getElementById('will-screening').innerText = results.screeningBreakdown.total.toFixed(2);
                
                let geomInfo = `n=${results.geometry.n}`;
                if(results.geometry.s_eccentricity > 0) geomInfo += ` (ε=${results.geometry.s_eccentricity})`;
                else geomInfo += ` (Sphere)`;
                document.getElementById('will-geometry').innerText = geomInfo;

                document.getElementById('will-tax').innerText = results.geometry.p_topology_tax.toFixed(3);
                document.getElementById('will-details').innerText = results.details;

            } else {
                // Invalid Block
                willPanel.classList.add('hidden');
                willError.classList.remove('hidden');
                errorMsg.innerText = `${el.block.toUpperCase()}-block elements not yet supported in v1.0`;
            }
        } else {
            console.warn("calculateWILL function not found.");
            willPanel.classList.add('hidden');
        }
    }

    // --- Visualization System ---
    function updateAtomVisualizer(z, config) {
        const sortedConfig = [...config].sort((a, b) => {
            if (a.n !== b.n) return a.n - b.n;
            const lOrder = {s:0, p:1, d:2, f:3};
            return lOrder[a.type] - lOrder[b.type];
        });
        const maxN = Math.max(...sortedConfig.map(c => c.n));
        atomData.subshells = sortedConfig.map((c, index) => ({
            ...c,
            isValence: c.n === maxN,
            color: SHELL_COLORS[c.n - 1] || '#cbd5e1'
        }));
        atomData.z = z;
    }

    function animateAtom() {
        const canvas = document.getElementById('atom-canvas');
        if (!canvas) { requestAnimationFrame(animateAtom); return; }
        const ctx = canvas.getContext('2d');
        if (canvas.width !== canvas.clientWidth) {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        }
        const w = canvas.width;
        const h = canvas.height;
        const center = { x: w/2, y: h/2 };
        const time = Date.now() / 1000;
        ctx.clearRect(0, 0, w, h);
        
        // Nucleus
        ctx.beginPath();
        ctx.arc(center.x, center.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();

        const count = atomData.subshells.length;
        // Adjusted scaling for compact view (h-48)
        const maxRadius = (Math.min(w,h)/2) - 10;
        const minRadius = 15;
        const step = (maxRadius - minRadius) / Math.max(count - 1, 1);

        atomData.subshells.forEach((sub, i) => {
            const radius = count === 1 ? minRadius : minRadius + (i * step);
            ctx.beginPath();
            // Elongated orbits (visual style) to fit rectangular canvas better
            ctx.ellipse(center.x, center.y, radius * 1.2, radius * 0.9, 0, 0, Math.PI * 2);
            ctx.strokeStyle = sub.isValence ? sub.color : adjustColorOpacity(sub.color, 0.2);
            ctx.lineWidth = sub.isValence ? 1.5 : 0.5;
            ctx.stroke();

            // Electrons
            const speed = 0.4 / (i + 1); 
            const angleStep = (Math.PI * 2) / sub.count;
            for(let e=0; e<sub.count; e++) {
                const angle = (time * speed) + (e * angleStep) + (i * 0.5);
                // Parametric ellipse
                const ex = center.x + (radius * 1.2) * Math.cos(angle);
                const ey = center.y + (radius * 0.9) * Math.sin(angle);
                
                ctx.beginPath(); ctx.arc(ex, ey, 2, 0, Math.PI * 2);
                ctx.fillStyle = sub.isValence ? '#fff' : sub.color;
                ctx.fill();
            }
        });
        requestAnimationFrame(animateAtom);
    }

    function adjustColorOpacity(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function renderPeriodicTable() {
        const grid = document.getElementById('periodic-table');
        grid.innerHTML = '';
        const layoutMap = {};
        layoutMap[1] = {r:1, c:1}; layoutMap[2] = {r:1, c:18};
        [3,4].forEach((z,i) => layoutMap[z] = {r:2, c:i+1});
        [5,6,7,8,9,10].forEach((z,i) => layoutMap[z] = {r:2, c:13+i});
        [11,12].forEach((z,i) => layoutMap[z] = {r:3, c:i+1});
        [13,14,15,16,17,18].forEach((z,i) => layoutMap[z] = {r:3, c:13+i});
        for(let z=19; z<=36; z++) layoutMap[z] = {r:4, c:z-18};

        ELEMENTS.forEach(el => {
            if(!layoutMap[el.z]) return;
            const pos = layoutMap[el.z];
            const cell = document.createElement('div');
            cell.id = `cell-${el.z}`;
            cell.className = `col-start-${pos.c} row-start-${pos.r} w-full aspect-[4/5] border border-slate-700 bg-slate-800/50 hover:bg-slate-700 cursor-pointer relative p-1 flex flex-col items-center justify-between transition-all select-none group`;
            
            let borderColor = '#64748b';
            if(el.block === 's') borderColor = '#f87171';
            if(el.block === 'p') borderColor = '#facc15';
            if(el.block === 'd') borderColor = '#38bdf8';
            
            cell.style.gridColumn = pos.c; 
            cell.style.gridRow = pos.r; 
            cell.style.borderBottom = `3px solid ${borderColor}`;
            
            cell.innerHTML = `<span class="text-[0.6rem] self-start text-slate-500 group-hover:text-white">${el.z}</span><span class="text-md font-bold text-slate-200">${el.symbol}</span>`;
            cell.onclick = () => selectElement(el.z);
            grid.appendChild(cell);
        });
    }
</script>

<style>
    /* Utility & Grid Overrides */
    .col-start-1 { grid-column-start: 1; } .col-start-2 { grid-column-start: 2; }
    .col-start-13 { grid-column-start: 13; } .col-start-14 { grid-column-start: 14; }
    .col-start-15 { grid-column-start: 15; } .col-start-16 { grid-column-start: 16; }
    .col-start-17 { grid-column-start: 17; } .col-start-18 { grid-column-start: 18; }
    .row-start-1 { grid-row-start: 1; } .row-start-2 { grid-row-start: 2; }
    .row-start-3 { grid-row-start: 3; } .row-start-4 { grid-row-start: 4; }

    .periodic-grid {
        display: grid;
        grid-template-columns: repeat(18, minmax(0, 1fr));
        gap: 2px;
    }
    
    .selected-element { 
        border-color: #38bdf8; 
        box-shadow: 0 0 15px rgba(56, 189, 248, 0.2); 
        background-color: rgb(30 41 59);
        z-index: 10; 
        transform: scale(1.1); 
    }
    
    .custom-scrollbar::-webkit-scrollbar { width: 4px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: #0f172a; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 2px; }
</style>