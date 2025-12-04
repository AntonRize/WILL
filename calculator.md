---
layout: default
title: "Galactic Dynamics Calculator"
---

<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">

<style>
    /* Scoped styles for the explorer to avoid conflicts */
    .galaxy-explorer-wrapper { font-family: 'Inter', sans-serif; color: #e5e7eb; position: relative; overflow: hidden; border-bottom: 1px solid #374151; padding-bottom: 4rem; }
    .galaxy-explorer-wrapper h1, .galaxy-explorer-wrapper h2, .galaxy-explorer-wrapper h3, .font-display { font-family: 'Space Grotesk', sans-serif; }
    .galaxy-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
    .galaxy-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px -10px rgba(56, 189, 248, 0.3); }
    
    /* Custom Scrollbar hiding */
    .hide-scroll::-webkit-scrollbar { display: none; }
    .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }

    /* Animated Background for this section */
    .star-bg {
        background-image: radial-gradient(white 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px);
        background-size: 50px 50px, 20px 20px;
        background-position: 0 0, 25px 25px;
        opacity: 0.1;
        pointer-events: none;
    }
</style>

<div class="galaxy-explorer-wrapper bg-[#050505] w-full">
    <div class="absolute inset-0 star-bg z-0"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-[#0a0f1c] pointer-events-none z-0"></div>

    <div class="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        
        <header class="mb-12 text-center relative pt-8">
            <div class="inline-block p-1 px-3 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider mb-4 uppercase">
                Interactive Astronomy Guide
            </div>
            <h1 class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400 mb-6 tracking-tight">
                The Galaxy Zoo
            </h1>
            <p class="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                An interactive infographic exploring the <span class="text-white font-medium">de Vaucouleurs extension</span> of the Hubble Sequence. 
                Explore the physical evolution from orderly <span class="text-yellow-200">Lenticulars</span> to chaotic <span class="text-blue-300">Irregulars</span>.
            </p>
        </header>

        <div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div class="flex items-center gap-2 bg-slate-900/50 p-1 rounded-lg border border-slate-800 backdrop-blur-sm">
                <button class="filter-btn px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white shadow-lg transition-all" id="btn-all" onclick="setFilter('all')">All Types</button>
                <button class="filter-btn px-4 py-2 rounded-md text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-all" id="btn-spiral" onclick="setFilter('spiral')">Spirals</button>
                <button class="filter-btn px-4 py-2 rounded-md text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-all" id="btn-magellanic" onclick="setFilter('magellanic')">Magellanic & Dwarfs</button>
            </div>
            <div class="text-slate-400 text-sm flex items-center gap-2">
                <span class="material-symbols-outlined text-yellow-500 text-lg">info</span>
                <span>Click cards to view details • Use scale to compare</span>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="galaxy-grid">
            </div>

        <div class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-blue-500/30 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-6 z-40 transform translate-y-[150%] transition-transform duration-300 w-[90%] max-w-2xl" id="compare-bar">
            <div class="flex-1">
                <p class="text-xs text-blue-300 uppercase tracking-wider font-bold mb-1">Comparison Mode</p>
                <div class="flex items-center gap-2">
                    <span class="text-sm text-slate-400 italic" id="compare-slot-1">Select first galaxy...</span>
                    <span class="text-slate-600">vs</span>
                    <span class="text-sm text-slate-400 italic" id="compare-slot-2">Select second galaxy...</span>
                </div>
            </div>
            <div id="compare-actions" class="flex items-center gap-2"></div>
            <button class="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors" onclick="clearComparison()">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>

        <div aria-labelledby="modal-title" aria-modal="true" class="fixed inset-0 z-50 hidden opacity-0 transition-opacity duration-300" id="detail-modal" role="dialog" style="font-family: 'Inter', sans-serif;">
            <div class="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>
            
            <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-2xl bg-[#0f1219] border border-slate-800 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl max-h-[90vh] overflow-y-auto hide-scroll">
                    
                    <div class="absolute right-4 top-4 z-10">
                        <button class="rounded-full bg-black/50 p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none" onclick="closeModal()" type="button">
                            <span class="sr-only">Close</span>
                            <span class="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <div id="modal-view-detail" class="flex flex-col md:flex-row h-full">
                        <div class="w-full md:w-5/12 relative h-64 md:h-auto overflow-hidden bg-black shrink-0">
                            <img alt="Galaxy Visualization" class="w-full h-full object-cover opacity-90" id="modal-image" src="">
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0f1219] via-transparent to-transparent md:bg-gradient-to-r"></div>
                            <div class="absolute bottom-4 left-4">
                                <span class="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg" id="modal-type-badge"></span>
                            </div>
                        </div>
                        
                        <div class="w-full md:w-7/12 p-8 md:p-10">
                            <h3 class="text-3xl md:text-4xl font-display font-bold text-white mb-2" id="modal-title"></h3>
                            <p class="text-blue-300 text-lg mb-6 font-light" id="modal-subtitle"></p>
                            <p class="text-slate-300 leading-relaxed mb-8 text-sm md:text-base border-l-2 border-blue-500/50 pl-4" id="modal-desc"></p>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                                <div id="stat-container-bulge"></div>
                                <div id="stat-container-gas"></div>
                                <div id="stat-container-arms"></div>
                                <div id="stat-container-sfr"></div>
                            </div>

                            <div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                                <div class="flex items-start gap-3">
                                    <span class="material-symbols-outlined text-yellow-400 mt-0.5">lightbulb</span>
                                    <div>
                                        <h4 class="text-sm font-bold text-white mb-1">Key Characteristic</h4>
                                        <p class="text-xs text-slate-400" id="modal-fact"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="modal-view-compare" class="hidden w-full p-8">
                        <h3 class="text-3xl font-display font-bold text-white mb-8 text-center">Comparative Analysis</h3>
                        <div class="grid grid-cols-3 gap-4 items-center mb-10">
                            <div class="text-center">
                                <img id="comp-img-1" src="" class="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                <h4 id="comp-title-1" class="text-xl font-bold text-white"></h4>
                            </div>
                            <div class="text-center">
                                <span class="material-symbols-outlined text-4xl text-slate-600">compare_arrows</span>
                            </div>
                            <div class="text-center">
                                <img id="comp-img-2" src="" class="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-2 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                                <h4 id="comp-title-2" class="text-xl font-bold text-white"></h4>
                            </div>
                        </div>
                        <div class="space-y-8 max-w-2xl mx-auto" id="comparison-bars-container"></div>
                        <div class="mt-10 text-center">
                            <button onclick="closeModal()" class="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors">Close Analysis</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    // --- DATA ---
    // Images replaced with stable Wikimedia/NASA URLs
    const galaxies = [
        {
            id: 'S0',
            name: 'Lenticular',
            group: 'spiral',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/NGC_2768_HST.jpg/800px-NGC_2768_HST.jpg', // NGC 2768
            subtitle: 'The Armless Bridge',
            desc: 'Intermediate between ellipticals and spirals. S0 galaxies have a central bulge and a disk but lack visible spiral arms. They have used up most of their interstellar gas and dust, resulting in very little new star formation.',
            stats: { bulge: 90, gas: 10, arms: 0, sfr: 5 },
            fact: 'Often called "arm-less spirals". They are composed mostly of old, red stars.',
            labels: { bulge: 'Dominant', gas: 'Very Low', arms: 'None', sfr: 'Passive' }
        },
        {
            id: 'Sa',
            name: 'Early Spiral',
            group: 'spiral',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/M104_ngc4594_sombrero_galaxy_hi-res.jpg/800px-M104_ngc4594_sombrero_galaxy_hi-res.jpg', // Sombrero M104
            subtitle: 'The Tight Winder',
            desc: 'Sa galaxies feature a large, bright central bulge that dominates the structure. The spiral arms are smooth, tightly wound, and often difficult to distinguish from the disk.',
            stats: { bulge: 80, gas: 20, arms: 20, sfr: 20 },
            fact: 'The Sombrero Galaxy (M104) is a classic example of an Sa/Sab type.',
            labels: { bulge: 'Large', gas: 'Low', arms: 'Very Tight', sfr: 'Low' }
        },
        {
            id: 'Sab',
            name: 'Intermediate Early Spiral',
            group: 'spiral',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/M81_hst_big.jpg/800px-M81_hst_big.jpg', // M81 (Bode's) often cited as Sa-Sb
            subtitle: 'The Transition',
            desc: 'A transitional morphotype between Sa and Sb. The bulge is still prominent but less overwhelming than in Sa, and the arms begin to show more definition.',
            stats: { bulge: 70, gas: 30, arms: 35, sfr: 30 },
            fact: 'Shows a mix of old stellar populations in the core and some young stars in the arms.',
            labels: { bulge: 'Prominent', gas: 'Low-Med', arms: 'Tight', sfr: 'Low-Med' }
        },
        {
            id: 'Sb',
            name: 'Intermediate Spiral',
            group: 'spiral',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/M31_TP_sc_2015.jpg/800px-M31_TP_sc_2015.jpg', // Andromeda
            subtitle: 'The Classic Spiral',
            desc: 'The textbook galaxy shape. Sb galaxies have a moderate-sized central bulge and well-defined spiral arms that are neither very tight nor very loose.',
            stats: { bulge: 50, gas: 45, arms: 50, sfr: 45 },
            fact: 'Andromeda (M31) is the most famous example of an Sb galaxy.',
            labels: { bulge: 'Moderate', gas: 'Medium', arms: 'Distinct', sfr: 'Medium' }
        },
        {
            id: 'Sbc',
            name: 'Intermediate Late Spiral',
            group: 'spiral',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NGC_1300_Hubble_WikiSky.jpg/800px-NGC_1300_Hubble_WikiSky.jpg', // NGC 1300 (Barred Sbc)
            subtitle: 'The Milky Way Cousin',
            desc: 'Between Sb and Sc. The bulge is smaller, and the arms are knottier and more open. Star formation becomes quite evident in the arms.',
            stats: { bulge: 40, gas: 55, arms: 65, sfr: 55 },
            fact: 'The Milky Way is likely a barred version of this type (SBbc).',
            labels: { bulge: 'Smaller', gas: 'Medium', arms: 'Open', sfr: 'Active' }
        },
        {
            id: 'Sc',
            name: 'Late Spiral',
            group: 'spiral',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/M74_by_HST.jpg/800px-M74_by_HST.jpg', // M74
            subtitle: 'The Open Flower',
            desc: 'Sc galaxies have small bulges and loosely wound, open arms. The arms are often clumpy, containing many star-forming nebulae and blue star clusters.',
            stats: { bulge: 25, gas: 65, arms: 80, sfr: 70 },
            fact: 'M33 (The Triangulum Galaxy) is a nearby example of an Sc type.',
            labels: { bulge: 'Small', gas: 'High', arms: 'Loose', sfr: 'High' }
        },
        {
            id: 'Scd',
            name: 'Diffuse Spiral',
            group: 'spiral',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/M101_hires_STScI-PRC2006-10a.jpg/800px-M101_hires_STScI-PRC2006-10a.jpg', // M101 Pinwheel (Sc/Scd)
            subtitle: 'The Fragmenting Disk',
            desc: 'The bulge becomes tiny. The spiral structure is very loose and patchy, transitioning towards a structure dominated purely by the disk.',
            stats: { bulge: 15, gas: 75, arms: 85, sfr: 75 },
            fact: 'Often shows "flocculent" (fluffy/patchy) spiral structure rather than grand design arms.',
            labels: { bulge: 'Tiny', gas: 'High', arms: 'Very Loose', sfr: 'Very High' }
        },
        {
            id: 'Sd',
            name: 'Very Late Spiral',
            group: 'spiral',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/NGC_7793.jpg/800px-NGC_7793.jpg', // NGC 7793
            subtitle: 'The Broken Spiral',
            desc: 'Sd galaxies have a faint, virtually non-existent bulge. The spiral arms are fragmented, diffuse, and made up of individual stellar clusters rather than continuous lanes.',
            stats: { bulge: 5, gas: 80, arms: 90, sfr: 70 },
            fact: 'Strictly defined in the de Vaucouleurs system as having almost no bulge.',
            labels: { bulge: 'Negligible', gas: 'Very High', arms: 'Fragmented', sfr: 'High' }
        },
        {
            id: 'Sdm',
            name: 'Magellanic Spiral',
            group: 'magellanic',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/NGC_4236_GALEX.jpg/800px-NGC_4236_GALEX.jpg', // NGC 4236
            subtitle: 'The Asymmetric One',
            desc: 'A specific type of "Magellanic" spiral. Often characterized by a single, asymmetric spiral arm and an offset bar/nucleus. It lacks a true central bulge.',
            stats: { bulge: 0, gas: 85, arms: 95, sfr: 65 },
            fact: 'Named after the Large Magellanic Cloud (which is SBm, a barred cousin).',
            labels: { bulge: 'None', gas: 'Rich', arms: 'Single/Chaos', sfr: 'Variable' }
        },
        {
            id: 'Sm',
            name: 'Magellanic Irregular',
            group: 'magellanic',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Large_Magellanic_Cloud_mosaic_-_ESA_-_Hubble.jpg/800px-Large_Magellanic_Cloud_mosaic_-_ESA_-_Hubble.jpg', // LMC
            subtitle: 'The Chaotic Transition',
            desc: 'The bridge between spirals and true irregulars. Sm galaxies have no bulge and very little regular structure, though a bar or trace of a disk may be visible.',
            stats: { bulge: 0, gas: 90, arms: 10, sfr: 60 },
            fact: 'Dominated by young blue stars and HII regions (glowing gas).',
            labels: { bulge: 'None', gas: 'Very Rich', arms: 'None', sfr: 'Patchy' }
        },
        {
            id: 'Im',
            name: 'Magellanic Irregular',
            group: 'magellanic',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Small_Magellanic_Cloud_%28Digitized_Sky_Survey_2%29.jpg/800px-Small_Magellanic_Cloud_%28Digitized_Sky_Survey_2%29.jpg', // SMC
            subtitle: 'The Unstructured',
            desc: 'Highly irregular shape with no bulge and no spiral structure. They are rich in gas and young stars, appearing chaotic and clumpy.',
            stats: { bulge: 0, gas: 95, arms: 0, sfr: 65 },
            fact: 'The Small Magellanic Cloud is a classic Im galaxy.',
            labels: { bulge: 'None', gas: 'Extreme', arms: 'None', sfr: 'High' }
        },
        {
            id: 'BCD',
            name: 'Blue Compact Dwarf',
            group: 'magellanic',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/I_Zwicky_18_HST.jpg/600px-I_Zwicky_18_HST.jpg', // I Zwicky 18
            subtitle: 'The Starburst Engine',
            desc: 'Small, compact galaxies undergoing intense bursts of star formation. They appear very blue due to massive, hot young stars and have low heavy-element content (metallicity).',
            stats: { bulge: 10, gas: 80, arms: 0, sfr: 100 },
            fact: 'They resemble the primordial galaxies from the early universe.',
            labels: { bulge: 'Compact', gas: 'Rich', arms: 'None', sfr: 'Starburst' }
        }
    ];

    let selectedForCompare = [];

    // --- INIT ---
    function initGalaxyExplorer() {
        renderGrid(galaxies);
        // Prepare Modal Stat Containers (empty initially)
    }

    // --- GRID RENDERING ---
    function renderGrid(data) {
        const container = document.getElementById('galaxy-grid');
        if(!container) return;
        container.innerHTML = '';
        
        data.forEach((galaxy) => {
            const card = document.createElement('div');
            card.className = 'galaxy-card group relative bg-[#0f1219] rounded-2xl overflow-hidden border border-slate-800/50 cursor-pointer flex flex-col h-full select-none';
            card.onclick = () => openDetailModal(galaxy.id);

            card.innerHTML = `
                <div class="relative h-48 overflow-hidden">
                    <img src="${galaxy.image}" alt="${galaxy.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0f1219] to-transparent opacity-80"></div>
                    <div class="absolute bottom-3 left-4">
                        <span class="text-xs font-mono text-blue-400 mb-1 block">Type</span>
                        <h2 class="text-2xl font-display font-bold text-white tracking-wide">${galaxy.id}</h2>
                    </div>
                    <button onclick="toggleCompare(event, '${galaxy.id}')" class="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white/50 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all z-20" title="Add to Compare">
                        <span class="material-symbols-outlined text-lg">balance</span>
                    </button>
                </div>
                
                <div class="p-5 flex-grow flex flex-col">
                    <h3 class="text-lg font-medium text-slate-200 mb-2">${galaxy.name}</h3>
                    <p class="text-sm text-slate-400 line-clamp-2 mb-4 flex-grow">${galaxy.desc}</p>
                    
                    <div class="grid grid-cols-2 gap-2 mt-auto">
                        <div class="bg-slate-900/50 p-2 rounded border border-slate-800">
                            <span class="text-[10px] text-slate-500 uppercase block">Bulge</span>
                            <div class="w-full bg-slate-800 h-1 mt-1 rounded-full overflow-hidden">
                                <div class="bg-yellow-600 h-full" style="width: ${galaxy.stats.bulge}%"></div>
                            </div>
                        </div>
                        <div class="bg-slate-900/50 p-2 rounded border border-slate-800">
                            <span class="text-[10px] text-slate-500 uppercase block">Gas</span>
                            <div class="w-full bg-slate-800 h-1 mt-1 rounded-full overflow-hidden">
                                <div class="bg-blue-600 h-full" style="width: ${galaxy.stats.gas}%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    function setFilter(filter) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white', 'shadow-lg');
            btn.classList.add('text-slate-400');
        });
        const activeBtn = document.getElementById(filter === 'all' ? 'btn-all' : 'btn-' + filter);
        if(activeBtn) {
            activeBtn.classList.remove('text-slate-400');
            activeBtn.classList.add('bg-blue-600', 'text-white', 'shadow-lg');
        }

        if (filter === 'all') renderGrid(galaxies);
        else renderGrid(galaxies.filter(g => g.group === filter));
    }

    // --- DETAIL MODAL ---
    function openDetailModal(id) {
        const g = galaxies.find(x => x.id === id);
        if(!g) return;

        const viewDetail = document.getElementById('modal-view-detail');
        const viewCompare = document.getElementById('modal-view-compare');
        
        viewDetail.classList.remove('hidden');
        viewDetail.classList.add('flex');
        viewCompare.classList.add('hidden');

        document.getElementById('modal-title').textContent = g.id + ' - ' + g.name;
        document.getElementById('modal-subtitle').textContent = g.subtitle;
        document.getElementById('modal-desc').textContent = g.desc;
        document.getElementById('modal-image').src = g.image;
        document.getElementById('modal-type-badge').textContent = g.id;
        document.getElementById('modal-fact').textContent = g.fact;

        // Helper for stats
        const createStatRow = (key, title, colorClass, val, label) => {
            return `
            <div class="flex justify-between mb-1">
                <span class="text-xs font-semibold text-slate-400 uppercase">${title}</span>
                <span class="text-xs text-white">${label}</span>
            </div>
            <div class="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div class="${colorClass} h-1.5 rounded-full" style="width: ${val}%"></div>
            </div>`;
        };

        document.getElementById('stat-container-bulge').innerHTML = createStatRow('bulge', 'Bulge Dominance', 'bg-yellow-500', g.stats.bulge, g.labels.bulge);
        document.getElementById('stat-container-gas').innerHTML = createStatRow('gas', 'Gas Content (HI)', 'bg-blue-500', g.stats.gas, g.labels.gas);
        document.getElementById('stat-container-arms').innerHTML = createStatRow('arms', 'Arm Tightness', 'bg-indigo-400', g.stats.arms, g.labels.arms);
        document.getElementById('stat-container-sfr').innerHTML = createStatRow('sfr', 'Star Formation', 'bg-red-400', g.stats.sfr, g.labels.sfr);

        showModal();
    }

    // --- COMPARISON LOGIC ---
    function toggleCompare(e, id) {
        e.stopPropagation();
        const index = selectedForCompare.indexOf(id);
        if (index > -1) {
            selectedForCompare.splice(index, 1);
        } else {
            if (selectedForCompare.length >= 2) selectedForCompare.shift();
            selectedForCompare.push(id);
        }
        updateCompareUI();
    }

    function updateCompareUI() {
        const bar = document.getElementById('compare-bar');
        const slot1 = document.getElementById('compare-slot-1');
        const slot2 = document.getElementById('compare-slot-2');
        const actions = document.getElementById('compare-actions');

        if (selectedForCompare.length > 0) {
            bar.classList.remove('translate-y-[150%]');
            const g1 = galaxies.find(g => g.id === selectedForCompare[0]);
            slot1.textContent = g1.id;
            slot1.className = "text-xl font-bold text-white";

            if (selectedForCompare.length > 1) {
                const g2 = galaxies.find(g => g.id === selectedForCompare[1]);
                slot2.textContent = g2.id;
                slot2.className = "text-xl font-bold text-white";
                
                actions.innerHTML = `
                    <button onclick="launchComparison()" class="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-lg transition-all flex items-center gap-1 animate-pulse">
                        <span>Analyze</span>
                        <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                `;
            } else {
                slot2.textContent = "Select second...";
                slot2.className = "text-sm text-slate-400 italic";
                actions.innerHTML = '';
            }
        } else {
            bar.classList.add('translate-y-[150%]');
        }
    }

    function clearComparison() {
        selectedForCompare = [];
        updateCompareUI();
    }

    function launchComparison() {
        if (selectedForCompare.length < 2) return;
        const g1 = galaxies.find(x => x.id === selectedForCompare[0]);
        const g2 = galaxies.find(x => x.id === selectedForCompare[1]);

        const viewDetail = document.getElementById('modal-view-detail');
        const viewCompare = document.getElementById('modal-view-compare');

        viewDetail.classList.add('hidden');
        viewDetail.classList.remove('flex');
        viewCompare.classList.remove('hidden');

        document.getElementById('comp-img-1').src = g1.image;
        document.getElementById('comp-title-1').textContent = g1.id;
        document.getElementById('comp-img-2').src = g2.image;
        document.getElementById('comp-title-2').textContent = g2.id;

        const container = document.getElementById('comparison-bars-container');
        container.innerHTML = `
            ${renderCompareRow('Bulge Size', g1.stats.bulge, g2.stats.bulge, 'bg-yellow-500')}
            ${renderCompareRow('Gas Content', g1.stats.gas, g2.stats.gas, 'bg-blue-500')}
            ${renderCompareRow('Arm Structure', g1.stats.arms, g2.stats.arms, 'bg-indigo-400')}
            ${renderCompareRow('Star Formation', g1.stats.sfr, g2.stats.sfr, 'bg-red-500')}
        `;

        showModal();
    }

    function renderCompareRow(label, v1, v2, colorClass) {
        return `
            <div>
                <div class="flex justify-between text-xs text-slate-400 mb-1 px-1">
                    <span class="font-mono">${v1}%</span>
                    <span class="uppercase font-semibold text-white tracking-widest">${label}</span>
                    <span class="font-mono">${v2}%</span>
                </div>
                <div class="flex h-3 bg-slate-800 rounded-full overflow-hidden relative border border-slate-700">
                    <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-500 z-10 opacity-30"></div>
                    <div class="w-1/2 flex justify-end">
                        <div class="${colorClass} h-full rounded-l-md opacity-80" style="width: ${v1}%"></div>
                    </div>
                    <div class="w-1/2 flex justify-start">
                        <div class="${colorClass} h-full rounded-r-md" style="width: ${v2}%"></div>
                    </div>
                </div>
            </div>
        `;
    }

    function showModal() {
        const modal = document.getElementById('detail-modal');
        modal.classList.remove('hidden');
        // Small timeout to allow transition
        setTimeout(() => modal.classList.remove('opacity-0'), 10);
    }

    function closeModal() {
        const modal = document.getElementById('detail-modal');
        modal.classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    // Initialize the Explorer
    document.addEventListener("DOMContentLoaded", ()=>{
        initGalaxyExplorer();
    });
</script>

<div class="markdown-content py-8">
  <h1 class="text-4xl font-extrabold tracking-tight">Galactic Dynamics Calculator</h1>

  <p class="mt-4 text-lg text-gray-400">
    <b>Update (QWILL √3 law):</b> After extensive testing, the integral-based model collapses to a remarkably simple law:
    <span class="font-mono">V<sub>QWILL</sub>(r) = √3 · V<sub>bary</sub>(r)</span>.
    Rotation curves are computed with a single control — the stellar mass-to-light ratio <span class="font-mono">Υ*</span>.
    <span class="block mt-2">All plots and metrics on this page use the <b>SPARC</b> database.</span>
    <span class="block mt-2">The detailed QWILL paper on galactic dynamics is in development.</span>
  </p>

  <div class="rounded-xl p-4 mt-4 border border-gray-700 bg-gray-800/40">
    <p class="text-gray-200 font-semibold">In short</p>
    <p class="text-gray-200"><em>“Rotating galaxies are more massive than stationary ones.”</em> In WILL/QWILL this is expressed by <span class="font-mono">V<sub>QWILL</sub> = √3 · V<sub>bary</sub></span>.</p>
  </div>

  <div class="mt-6 text-gray-300 leading-relaxed" id="howto">
    <h3 class="text-xl font-bold mb-2">What this page is & how to use it</h3>
    <ul class="list-disc pl-6 space-y-1">
      <li><b>Data:</b> rotation curves from the <b>SPARC</b> catalog (radius <span class="font-mono">Rad</span>, observed speed <span class="font-mono">Vobs</span>, baryonic components <span class="font-mono">Vgas</span>, <span class="font-mono">Vdisk</span>, <span class="font-mono">Vbul</span>).</li>
      <li><b>QWILL law:</b> <span class="font-mono">V<sub>QWILL</sub> = √3 · V<sub>bary</sub></span>, where <span class="font-mono">V<sub>bary</sub>² = V<sub>gas</sub>² + Υ* · (V<sub>disk</sub>² + V<sub>bul</sub>²)</span>.</li>
      <li><b>Controls:</b> pick a galaxy; adjust <span class="font-mono">Υ*</span> with the slider. Left plot: Observed vs QWILL. Right plot: gas/disk/bulge contributions.</li>
      <li><b>Quality:</b> per-galaxy RMSE is shown below. The button builds the RMSE distribution by type and shows the <u>median</u> for the selected groups.</li>
    </ul>
  </div>

  <div id="overall-median-inline" class="mt-4 text-cyan-200 font-semibold"></div>

  <div id="type-filter" class="bg-gray-800/50 p-4 rounded-lg mb-4">
    <h4 class="text-lg font-bold text-gray-200 mb-2">Filter by Hubble Type:</h4>
    <div id="type-checkboxes" class="flex flex-wrap gap-4 text-gray-300"></div>
    <button id="analyze-types-btn" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Analyze RMSE by Type</button>
  </div>

  <div id="type-plot" class="bg-gray-800/50 p-4 rounded-lg mb-4" style="display:none">
    <div id="overall-median" class="text-gray-200 font-semibold mb-3"></div>
    <div id="rmse-histogram"></div>
  </div>

  <div class="calculator-container bg-gray-800/50 p-6 rounded-lg">
    <div id="loader">Loading SPARC Database...</div>

    <div id="calculator-body" style="display:none">
      <div class="controls-grid">
        <div class="control-group">
          <label for="galaxy-select">Select Galaxy:</label>
          <select id="galaxy-select" class="form-control"></select>
        </div>

        <div class="control-group">
          <label for="ystar-slider">Stellar M/L Ratio (Υ*):
            <span id="ystar-value" class="param-display">0.66</span>
          </label>
          <input type="range" id="ystar-slider" class="form-range" min="0.00" max="2.00" step="0.01" value="0.66" />
        </div>
      </div>

      <div id="galaxy-info" class="bg-gray-800/50 p-4 rounded-lg mb-4"></div>

      <div id="results"></div>
      <div id="warning" class="warning"></div>

      <div class="plot-wrapper">
        <div class="plot-box"><div id="plot-div"></div></div>
        <div class="plot-box"><div id="plot-div-components"></div></div>
      </div>
    </div>
  </div>
</div>

<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.plot.ly/plotly-2.32.0.min.js"></script>

<style>
  .calculator-container{background-color:rgba(31,41,55,.5);border-radius:15px;padding:30px 40px;margin:20px auto;box-shadow:0 10px 40px rgba(0,0,0,.3);border:1px solid #374151;max-width:1000px}
  .controls-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:25px;margin-bottom:20px}
  .control-group{display:flex;flex-direction:column}
  .control-group label{margin-bottom:10px;font-weight:600;color:#d1d5db}
  .form-control,.form-range{width:100%;padding:10px;border-radius:5px;border:1px solid #4b5563;background-color:#374151;color:#d1d5db;box-sizing:border-box}
  .param-display{font-weight:700;color:#67e8f9}
  #results{text-align:center;font-size:1.25em;font-weight:700;margin:20px 0 25px;color:#d1d5db;padding:15px;background:#374151;border-radius:8px}
  #warning{text-align:center;color:#f87171;font-weight:700;margin-top:10px}
  .plot-wrapper{display:flex;flex-wrap:wrap;gap:20px;margin-top:25px;padding-top:25px;border-top:1px solid #4b5563;justify-content:center}
  .plot-box{flex:1 1 45%;min-width:350px;max-width:600px;height:500px;border-radius:8px;background:#1f2937;position:relative}
  #loader{text-align:center;font-size:1.5em;padding:50px;color:#9ca3af}
</style>

<script>
  /* ---------- CONFIG (explicit columns; no autodetect) ---------- */
  const RAW_BASE = "https://raw.githubusercontent.com/AntonRize/WILL/main/SPARC%20DATA/";
  const URL_TABLE1 = RAW_BASE + "table1.dat";
  const URL_TABLE2 = RAW_BASE + "table2.dat";

  /* ---------- GLOBALS ---------- */
  let galaxyData = {};   // per galaxy: [{Name,Dist,Rad,Vobs,Vobs_err,Vgas,Vdisk,Vbul}, ...]
  let galaxyMeta = {};   // per galaxy: metadata from table1
  let distinctTypes = []; // dynamically discovered (mapped to human labels)
  const defaultValues = { yStar: 0.66 };
  // Hubble-type labels (SPARC mapping 0..11)
  const hubbleTypes = ["S0","Sa","Sab","Sb","Sbc","Sc","Scd","Sd","Sdm","Sm","Im","BCD"];

  /* ---------- DOM ---------- */
  const loader=document.getElementById("loader");
  const bodyEl=document.getElementById("calculator-body");
  const galaxySelect=document.getElementById("galaxy-select");
  const ystarSlider=document.getElementById("ystar-slider");
  const ystarValueSpan=document.getElementById("ystar-value");
  const resultsDiv=document.getElementById("results");
  const plotDiv=document.getElementById("plot-div");
  const plotDivComponents=document.getElementById("plot-div-components");
  const galaxyInfoDiv=document.getElementById("galaxy-info");

  /* ---------- LOAD DATA ---------- */
  async function loadData(){
    try{
      if(!window.Plotly){
        throw new Error("Plotly failed to load. Check CDN URL.");
      }

      const [t1Res,t2Res]=await Promise.all([fetch(URL_TABLE1),fetch(URL_TABLE2)]);
      if(!t1Res.ok||!t2Res.ok) throw new Error("Failed to fetch SPARC tables.");

      const t1Text=await t1Res.text();
      const t2Text=await t2Res.text();

      // table1.dat (fixed-width name + space-separated columns)
      const typeSet = new Set();
      t1Text.trim().split("\n").forEach(line=>{
        if(line.startsWith("#")) return;
        const name=line.substring(0,11).trim();
        const rest=line.substring(11).trim().split(/\s+/);
        if(rest.length<18) return;
        const typeRaw = rest[0];
        const typeId = Number.isFinite(parseInt(typeRaw,10)) ? parseInt(typeRaw,10) : null;
        const typeLabel = (typeId!==null && hubbleTypes[typeId]!==undefined) ? hubbleTypes[typeId] : String(typeRaw);
        typeSet.add(typeLabel);
        galaxyMeta[name]={
          Name:name,
          TypeRaw:typeRaw,
          TypeId:typeId,
          TypeLabel:typeLabel,
          Dist:+rest[1], Dist_err:+rest[2], f_Dist:+rest[3],
          Inc:+rest[4], Inc_err:+rest[5], L36:+rest[6], L36_err:+rest[7], Reff:+rest[8],
          SBeff:+rest[9], Rdisk:+rest[10], SBdisk:+rest[11], MHI:+rest[12], RHI:+rest[13],
          Vflat:+rest[14], Vflat_err:+rest[15], Qual:+rest[16], Ref:rest[17]
        };
      });
      distinctTypes = Array.from(typeSet).sort();

      // table2.dat (explicit columns)
      t2Text.trim().split("\n").forEach(line=>{
        if(line.startsWith("#")) return;
        const p=line.trim().split(/\s+/);
        if(p.length<8) return;
        const row={ Name:p[0], Dist:+p[1], Rad:+p[2], Vobs:+p[3], Vobs_err:+p[4], Vgas:+p[5], Vdisk:+p[6], Vbul:+p[7] };
        (galaxyData[row.Name] ||= []).push(row);
      });

      // populate selector
      Object.keys(galaxyData).sort().forEach(name=>{
        if(galaxyData[name].length<3) return;
        const opt=document.createElement("option");
        opt.value=name; opt.textContent=name; galaxySelect.appendChild(opt);
      });

      // dynamic type checkboxes
      initGalaxyTypeCheckboxes();

      loader.style.display="none"; bodyEl.style.display="block";
      galaxySelect.selectedIndex=0;
      ystarSlider.value = defaultValues.yStar; ystarValueSpan.textContent = Number(defaultValues.yStar).toFixed(2);
      updateGalaxyInfo();
      updateAll();
      selfTest(); // run lightweight self-tests in console
    }catch(err){
      loader.textContent = "Error loading data.";
      console.error(err);
    }
  }

  /* ---------- PHYSICS: QWILL √3 ---------- */
  function seriesQWILL(galaxyName, yStar){
    // Match Python script behavior: fill missing baryonic components with 0; keep rows if Vobs is valid.
    const data = (galaxyData[galaxyName]||[]).slice().sort((a,b)=>a.Rad-b.Rad);

    const r = [], Vobs = [], Vbary = [], Vq = [];
    const Vgas_comp = [], Vdisk_scaled = [], Vbulge_scaled = [];

    for(const d of data){
      const vo = (Number.isFinite(d.Vobs) && d.Vobs >= 0) ? d.Vobs : NaN; // drop only if Vobs invalid
      if(!Number.isFinite(vo)) continue;

      const vg = Number.isFinite(d.Vgas)  && d.Vgas  > 0 ? d.Vgas  : 0;
      const vd = Number.isFinite(d.Vdisk) && d.Vdisk > 0 ? d.Vdisk : 0;
      const vb = Number.isFinite(d.Vbul)  && d.Vbul  > 0 ? d.Vbul  : 0;

      const vbary2 = vg*vg + yStar * (vd*vd + vb*vb);
      const vbary  = Math.sqrt(Math.max(0, vbary2));
      const vq     = Math.sqrt(3) * vbary;

      r.push(d.Rad);
      Vobs.push(vo);
      Vbary.push(vbary);
      Vq.push(vq);
      Vgas_comp.push(vg);
      Vdisk_scaled.push(Math.sqrt(yStar) * vd);
      Vbulge_scaled.push(Math.sqrt(yStar) * vb);
    }

    return { r, Vobs, Vbary, Vq, components: { Vgas: Vgas_comp, Vdisk_scaled, Vbulge_scaled } };
  }

  function rmse(obs, pred){
    const n = Math.min(obs.length, pred.length);
    if(n===0) return NaN;
    let s = 0, k = 0;
    for(let i=0;i<n;i++){
      const a = obs[i], b = pred[i];
      if(Number.isFinite(a) && Number.isFinite(b)){
        s += (a-b)**2;
        k++;
      }
    }
    return (k>0) ? Math.sqrt(s/k) : NaN;
  }

  /* ---------- COLOR UTILS (blue → red) ---------- */
  function blueRedColor(v, vmin, vmax){
    if(!isFinite(v) || !isFinite(vmin) || !isFinite(vmax) || vmax<=vmin) return "rgb(128,128,128)";
    const t = (v - vmin) / (vmax - vmin); // 0..1
    const r = 59 + (239-59)*t;
    const g = 130 + (68-130)*t;
    const b = 246 + (68-246)*t;
    return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
  }

  /* ---------- UPDATE UI & PLOTS ---------- */
  function computeOverallMedianRMSE(yStar){
    const values=[];
    for(const name in galaxyData){
      const S=seriesQWILL(name,yStar);
      if(S.Vobs.length===S.Vq.length && S.Vobs.length>0) values.push(rmse(S.Vobs,S.Vq));
    }
    if(!values.length) return NaN;
    const sorted=values.slice().sort((a,b)=>a-b);
    const mid=Math.floor(sorted.length/2);
    return (sorted.length%2===0) ? (sorted[mid-1]+sorted[mid])/2 : sorted[mid];
  }

  function updateOverallMedianInline(){
    const yStar=(+ystarSlider.value || defaultValues.yStar);
    const med=computeOverallMedianRMSE(yStar);
    const el=document.getElementById("overall-median-inline");
    if(Number.isFinite(med)){
      el.innerHTML = `Overall <b>Median RMSE</b> (all types, Υ*=${yStar.toFixed(2)}): <b>${med.toFixed(2)} km/s</b>`;
    } else {
      el.textContent = "";
    }
  }

  function updateAll(){
    const name=galaxySelect.value; if(!name) return;
    const yStar = (+ystarSlider.value || defaultValues.yStar);
    ystarValueSpan.textContent = yStar.toFixed(2);

    const S = seriesQWILL(name,yStar);
    const R = rmse(S.Vobs,S.Vq);
    resultsDiv.textContent = `RMSE: ${isFinite(R)?R.toFixed(2):"—"} km/s`;

    // inline overall median (all galaxies)
    updateOverallMedianInline();

    const ymax = Math.max(1, ...S.Vobs, ...S.Vq);
    const layoutBase = {
      xaxis:{ title:"r (kpc)", color:"#d1d5db", gridcolor:"#4b5563" },
      yaxis:{ title:"Velocity (km/s)", color:"#d1d5db", gridcolor:"#4b5563", range:[0, ymax*1.1] },
      legend:{ orientation:"h", bgcolor:"rgba(31,41,55,0.9)", font:{color:"#d1d5db"} },
      margin:{ l:60, r:30, b:50, t:60 },
      paper_bgcolor:"transparent", plot_bgcolor:"#1f2937", font:{ color:"#d1d5db" }
    };

    Plotly.react(
      plotDiv,
      [
        { x:S.r, y:S.Vobs, mode:"markers", name:"Observed", marker:{ color:"#d1d5db", size:8 }},
        { x:S.r, y:S.Vbary, mode:"lines", name:"Baryonic", line:{ color:"#9ca3af", dash:"dash" }},
        { x:S.r, y:S.Vq,    mode:"lines", name:"QWILL = √3·V_bary", line:{ color:"#67e8f9", width:4 }}
      ],
      { ...layoutBase, title:`Rotation Curve for ${name}` }
    );

    Plotly.react(
      plotDivComponents,
      [
        { x:S.r, y:S.Vobs,                     mode:"markers", name:"Observed", marker:{ color:"#9ca3af", size:6, symbol:"circle-open" }},
        { x:S.r, y:S.components.Vgas,          mode:"lines",   name:"Gas",       line:{ color:"#10b981" }},
        { x:S.r, y:S.components.Vdisk_scaled,  mode:"lines",   name:"Disk × Υ*", line:{ color:"#3b82f6" }},
        { x:S.r, y:S.components.Vbulge_scaled, mode:"lines",   name:"Bulge × Υ*",line:{ color:"#f59e0b" }}
      ],
      { ...layoutBase, title:`Baryonic Components for ${name}` }
    );
  }

  function updateGalaxyInfo(){
    const meta=galaxyMeta[galaxySelect.value]; if(!meta){ galaxyInfoDiv.textContent=""; return; }
    const hubbleLabel = (meta.TypeLabel!==undefined) ? meta.TypeLabel : ( (Number.isFinite(parseInt(meta.TypeRaw,10)) && hubbleTypes[parseInt(meta.TypeRaw,10)]!==undefined) ? hubbleTypes[parseInt(meta.TypeRaw,10)] : String(meta.TypeRaw) );
    galaxyInfoDiv.innerHTML = `
      <p><strong>Type:</strong> ${hubbleLabel} <span class="opacity-60">(code ${meta.TypeRaw})</span></p>
      <p><strong>Distance:</strong> ${meta.Dist.toFixed(2)} ± ${meta.Dist_err.toFixed(2)} Mpc (code ${meta.f_Dist})</p>
      <p><strong>Inclination:</strong> ${meta.Inc.toFixed(1)}° ± ${meta.Inc_err.toFixed(1)}°</p>
      <p><strong>Total Luminosity:</strong> ${meta.L36.toFixed(3)} ± ${meta.L36_err.toFixed(3)} G&nbsp;L☉</p>
      <p><strong>V_flat:</strong> ${meta.Vflat.toFixed(1)} ± ${meta.Vflat_err.toFixed(1)} km/s</p>
      <p><strong>RC Quality:</strong> ${meta.Qual}</p>`;
  }

  /* ---------- TYPE UI (dynamic from dataset) ---------- */
  function initGalaxyTypeCheckboxes(){
    const container=document.getElementById("type-checkboxes");
    container.innerHTML = "";
    distinctTypes.forEach(labelName=>{
      const id = `type_${labelName.replace(/[^a-zA-Z0-9_-]/g,'_')}`;
      const wrap=document.createElement("label");
      wrap.className="flex items-center space-x-2";
      wrap.htmlFor = id;
      wrap.innerHTML = `<input id="${id}" type="checkbox" value="${labelName}" checked /> <span>${labelName}</span>`;
      container.appendChild(wrap);
    });
  }

  // pure helper to prepare histogram data (testable)
  function buildHistogramData(rmseValues, vInitValues, bins){
    const N = rmseValues.length; if(!N) return null;
    const B = bins || 20;
    const minRMSE = Math.min(...rmseValues);
    const maxRMSE = Math.max(...rmseValues);
    const binWidth = (maxRMSE - minRMSE) / B || 1;

    const counts = new Array(B).fill(0);
    const sumInit = new Array(B).fill(0);

    for(let i=0;i<N;i++){
      let idx = Math.floor((rmseValues[i]-minRMSE)/binWidth);
      if(idx===B) idx = B-1;
      if(idx<0) idx=0; if(idx>=B) idx=B-1;
      counts[idx] += 1;
      const vi = Number.isFinite(vInitValues[i]) ? vInitValues[i] : 0;
      sumInit[idx] += vi;
    }

    const avgInit = counts.map((c,i)=> c>0 ? sumInit[i]/c : 0);
    const minInit = Math.min(...avgInit.filter(x=>isFinite(x)));
    const maxInit = Math.max(...avgInit.filter(x=>isFinite(x)));

    const binEdges = Array.from({length: B+1}, (_,i)=> minRMSE + i*binWidth);
    const binCenters = Array.from({length: B}, (_,i)=> (binEdges[i]+binEdges[i+1])/2);

    return {counts, avgInit, minInit, maxInit, binCenters, binWidth};
  }

  function analyzeSelectedTypes(){
    const selected = Array.from(document.querySelectorAll("#type-checkboxes input:checked")).map(cb=>cb.value);
    if(!selected.length){ alert("Select at least one galaxy type first."); return; }

    const yStar=+ystarSlider.value || defaultValues.yStar;
    const rmseValues=[];
    const vInitValues=[]; // initial observed velocity per galaxy

    for(const name in galaxyData){
      const meta=galaxyMeta[name]; if(!meta) continue;
      const labelName = (meta.TypeLabel!==undefined) ? meta.TypeLabel : ( (Number.isFinite(parseInt(meta.TypeRaw,10)) && hubbleTypes[parseInt(meta.TypeRaw,10)]!==undefined) ? hubbleTypes[parseInt(meta.TypeRaw,10)] : String(meta.TypeRaw) );
      if(!selected.includes(labelName)) continue;

      const S=seriesQWILL(name,yStar);
      if(S.Vobs.length===S.Vq.length && S.Vobs.length>0){
        rmseValues.push(rmse(S.Vobs,S.Vq));
        vInitValues.push(S.Vobs[0]);
      }
    }
    if(!rmseValues.length){ alert("No galaxies matched the selected types."); return; }

    const N = rmseValues.length;
    const sorted = rmseValues.slice().sort((a,b)=>a-b);
    const mid = Math.floor(N/2);
    const median = (N%2===0) ? (sorted[mid-1]+sorted[mid])/2 : sorted[mid];

    // Headline (median only)
    const headline = `Types: <b>${selected.join(", ")}</b> — N = ${N} — <b>Median RMSE = ${median.toFixed(2)} km/s</b>`;
    document.getElementById("overall-median").innerHTML = headline + `<div class="opacity-70 text-sm">Bar color encodes initial observed velocity: blue → red</div>`;

    // --- Build histogram data (testable helper) ---
    const H = buildHistogramData(rmseValues, vInitValues, 20);
    const colors = H.avgInit.map(v => blueRedColor(v, H.minInit, H.maxInit));

    const trace = {
      type: "bar",
      x: H.binCenters,
      y: H.counts,
      marker: { color: colors, line: { color: "#111827", width: 1 } },
      width: H.binWidth*0.95,
      hovertemplate: "RMSE bin: %{x:.2f}±"+(H.binWidth/2).toFixed(2)+"<br>Count: %{y}<br>Avg V₀: "+"%{customdata:.1f}"+" km/s<extra></extra>",
      customdata: H.avgInit
    };

    // vertical colorbar (blue→red) calibrated to initial velocity
    const colorscaleBR = [ [0, "rgb(59,130,246)"], [1, "rgb(239,68,68)"] ];
    const ticks = [H.minInit, (2*H.minInit+H.maxInit)/3, (H.minInit+2*H.maxInit)/3, H.maxInit].map(v=>Math.round(v*10)/10);
    const dummy = {
      type: "heatmap",
      z: [[H.minInit, H.maxInit]],
      colorscale: colorscaleBR,
      showscale: true,
      opacity: 0,
      colorbar: { title:{text:"Initial V₀ (km/s)",side:"right"}, thickness:16, len:0.8, y:0.5, tickvals:ticks, ticktext:ticks.map(String) }
    };

    const layoutHist = {
      title: ".",
      xaxis:{ title:"RMSE (km/s)", color:"#d1d5db", gridcolor:"#4b5563" },
      yaxis:{ title:"Number of Galaxies", color:"#d1d5db", gridcolor:"#4b5563" },
      font:{ color:"#d1d5db" }, paper_bgcolor:"transparent", plot_bgcolor:"#1f2937",
      margin:{ l:60,r:30,t:60,b:60 }
    };

    Plotly.newPlot("rmse-histogram", [trace, dummy], layoutHist);
    document.getElementById("type-plot").style.display="block";
  }

  /* ---------- LIGHTWEIGHT SELF-TESTS (console only) ---------- */
  function selfTest(){
    try{
      console.group("QWILL self-tests");
      // Test 1: RMSE zero on identical arrays
      console.assert(rmse([1,2,3],[1,2,3]) === 0, "RMSE identical should be 0");
      // Test 2: RMSE ignores NaN/inf pairs
      const r2 = rmse([1,NaN,3],[1,5,3]);
      console.assert(r2 === 0, "RMSE should ignore NaN pairs and be 0 for the valid ones");
      // Test 3: seriesQWILL treats negative components as 0 (keeps the row)
      galaxyData.__mock__ = [
        {Rad:1,Vobs:10,Vgas:6,Vdisk:8,Vbul:0},
        {Rad:2,Vobs:20,Vgas:-999,Vdisk:8,Vbul:0},
        {Rad:3,Vobs:30,Vgas:10,Vdisk:0,Vbul:0}
      ];
      const S = seriesQWILL("__mock__", 0.66);
      console.assert(S.r.length===3 && S.Vobs.length===3, "series should keep all rows with valid Vobs");
      console.assert(S.components.Vgas[1]===0, "missing gas should be treated as 0");
      console.assert(Math.abs(S.Vq[0] - Math.sqrt(3)*S.Vbary[0])<1e-9, "QWILL = √3·V_bary holds");
      // Test 4: RMSE on shifted arrays should equal shift magnitude
      const r4 = rmse([10,20,30],[11,21,31]);
      console.assert(Math.abs(r4-1)<1e-12, "RMSE of +1 shift should be 1");
      // Test 5: Color mapping edge case (flat range)
      console.assert(blueRedColor(5,5,5)==="rgb(128,128,128)", "Flat v-range should yield gray");
      // Test 6: One-point galaxy sanity for seriesQWILL
      galaxyData.__one__ = [{Rad:1,Vobs:10,Vgas:3,Vdisk:4,Vbul:0}];
      const S1 = seriesQWILL("__one__", 0.66);
      const vb2 = 3*3 + 0.66*(4*4 + 0*0);
      console.assert(Math.abs(S1.Vbary[0]-Math.sqrt(vb2))<1e-12, "Vbary formula matches");
      // Test 7: histogram helper returns consistent lengths
      const H = buildHistogramData([10,20,30,40],[5,6,7,8],4);
      console.assert(H && H.counts.length===4 && H.avgInit.length===4, "histogram helper produces 4 bins");
      delete galaxyData.__one__;
      delete galaxyData.__mock__;
      console.groupEnd();
    }catch(e){
      console.error("Self-test failed:", e);
    }
  }

  /* ---------- LISTENERS & INIT ---------- */
  document.addEventListener("DOMContentLoaded", ()=>{
    loadData();
    document.getElementById("analyze-types-btn").addEventListener("click", analyzeSelectedTypes);
    document.getElementById("galaxy-select").addEventListener("change", ()=>{ updateGalaxyInfo(); updateAll(); });
    document.getElementById("ystar-slider").addEventListener("input", ()=>{ updateAll(); });
  });
</script>