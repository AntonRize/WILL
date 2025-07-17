---
layout: default
title: "Galactic Dynamics Calculator"
---

<div class="markdown-content py-8">
    <h1 class="text-4xl font-extrabold tracking-tight">Galactic Dynamics Calculator</h1>
    <p class="mt-4 text-lg text-gray-400">
        Predict galactic rotation curves using the WILL model without dark matter. This calculator implements the final, simplified WILL model for galactic rotation curves.
    </p>

    <h2 class="text-3xl font-bold">The WILL Predictive Model</h2>
    <div class="bg-gray-800/50 p-6 rounded-lg mt-6">
        <p class="text-gray-400 mb-4">
            This calculator implements the final, simplified WILL model for galactic rotation curves. It posits that the observed velocity ($V_{WILL}$) is a combination of the classical gravitational effect of baryons ($V_{classic}$) and a non-local geometric term derived from the cumulative kinetic energy of the system.
        </p>
        <div class="formula-box">
            $$ V_{WILL}^{2}(r) = \left[ V_{gas}^{2} + \Upsilon_* (V_{disk}^{2} + V_{bulge}^{2}) \right] + \frac{\lambda}{r}\int_{0}^{r}\left[ V_{gas}^{2} + \Upsilon_* (V_{disk}^{2} + V_{bulge}^{2}) \right]dr' $$
        </div>
    </div>

    <!-- Tailwind Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- MathJax 3 (new loader) -->
    <script>
        window.MathJax = {
            tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
            svg: { fontCache: 'global' }
        };
    </script>
    <script type="text/javascript" id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
    </script>

    <!-- Plotly.js for graphing -->
    <script src="https://cdn.plot.ly/plotly-2.32.0.min.js"></script>

    <style>
        .formula-box {
            background-color: #1f2937;
            padding: 1em;
            border-radius: 8px;
            overflow-x: auto;
            margin: 1rem 0;
            text-align: center;
            font-size: 1.1em;
        }
        
        .calculator-container {
            background-color: rgba(31,41,55,0.5);
            border-radius: 15px;
            padding: 30px 40px;
            margin: 20px auto;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            border: 1px solid #374151;
            max-width: 1000px;
        }

        .controls-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin-bottom: 20px;
        }
        
        .control-group {
            display: flex;
            flex-direction: column;
        }
        
        .control-group label {
            margin-bottom: 10px;
            font-weight: 600;
            color: #d1d5db;
        }
        
        .form-control, .form-range {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #4b5563;
            box-sizing: border-box;
            background-color: #374151;
            color: #d1d5db;
        }
        
        .form-range { 
            padding: 0; 
            background-color: #374151;
        }
        
        .param-display { 
            font-weight: bold; 
            color: #67e8f9; 
        }

        .unified-model {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 12px;
            background-color: #1e3a8a;
            border: 1px solid #3b82f6;
            border-radius: 5px;
            margin-bottom: 20px;
            grid-column: 1 / -1;
        }

        .unified-model button {
            padding: 6px 12px;
            background-color: #2563eb;
            color: #d1d5db;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .unified-model input[type="checkbox"] { 
            width: auto; 
            margin-right: 5px; 
        }
        
        .unified-model label { 
            margin: 0; 
            font-weight: normal; 
            cursor: pointer; 
            color: #d1d5db;
        }
        
        #results {
            text-align: center;
            font-size: 1.25em;
            font-weight: bold;
            margin-top: 20px;
            margin-bottom: 25px;
            color: #d1d5db;
            padding: 15px;
            background-color: #374151;
            border-radius: 8px;
        }
        #warning {
            text-align: center;
            color: #f87171;
            font-weight: bold;
            margin-top: 10px;
        }

        .plot-container {
            border-top: 1px solid #4b5563;
            padding-top: 25px;
            margin-top: 25px;
        }
        
        .plot-container h4 {
            text-align: center;
            color: #d1d5db;
            margin-bottom: 15px;
            font-weight: 600;
        }
        
        #plot-div, #plot-div-components {
            width: 100%;
            height: 500px;
            border-radius: 8px;
        }
        
        #loader {
            text-align: center;
            font-size: 1.5em;
            padding: 50px;
            color: #9ca3af;
        }
    </style>

    <div class="calculator-container bg-gray-800/50 p-6 rounded-lg">
        <div id="loader">Loading SPARC Database...</div>

        <div id="calculator-body" style="display: none;">
            <div class="controls-grid">
                <div class="control-group">
                    <label for="galaxy-select">Select Galaxy:</label>
                    <select id="galaxy-select" class="form-control"></select>
                </div>
                <div class="control-group">
                    <label for="lambda-slider">Geometric Factor (λ): <span id="lambda-value" class="param-display">4.00</span></label>
                    <input type="range" id="lambda-slider" class="form-range" min="0.1" max="8.0" step="0.01" value="4.0">
                </div>
                <div class="control-group">
                    <label for="ystar-slider">Stellar M/L Ratio (Y*): <span id="ystar-value" class="param-display">0.25</span></label>
                    <input type="range" id="ystar-slider" class="form-range" min="0.1" max="2.0" step="0.01" value="0.25">
                </div>
            </div>

            <div id="galaxy-info" class="bg-gray-800/50 p-4 rounded-lg mb-4"></div>

            <div class="unified-model">
                <input type="checkbox" id="unified-model-checkbox" checked>
                <label for="unified-model-checkbox">Enforce Unified Model ($Y_* = 1/\lambda$)</label>
                <button id="reset-defaults-btn">Reset Defaults</button>
            </div>
            
            <div id="results"></div>
            <div id="warning" class="warning"></div>

            <div class="plot-container">
                <h4>Overall Rotation Curve</h4>
                <div id="plot-div"></div>
            </div>
            
            <div class="plot-container">
                <h4>Baryonic Component Breakdown</h4>
                <div id="plot-div-components"></div>
            </div>
        </div>
    </div>
</div>

<script>
    // --- CONFIGURATION ---
    const URL_TABLE1 = 'https://raw.githubusercontent.com/AntonRize/WILL/main/SPARC%20DATA/table1.dat';
    const URL_TABLE2 = 'https://raw.githubusercontent.com/AntonRize/WILL/main/SPARC%20DATA/table2.dat';

    // --- GLOBAL VARIABLES ---
    let galaxyData = {};
    let galaxyMeta = {};

    const defaultValues = { lambda: 4.0, yStar: 0.25 };

    const hubbleTypes = ["S0","Sa","Sab","Sb","Sbc","Sc","Scd","Sd","Sdm","Sm","Im","BCD"];
    const distMethods = {
        1: "Hubble Flow",
        2: "Tip of the Red Giant Branch",
        3: "Cepheids",
        4: "Ursa Major Cluster",
        5: "Supernova"
    };

    // --- DOM ELEMENTS ---
    const loader = document.getElementById('loader');
    const calculatorBody = document.getElementById('calculator-body');
    const galaxySelect = document.getElementById('galaxy-select');
    const lambdaSlider = document.getElementById('lambda-slider');
    const ystarSlider = document.getElementById('ystar-slider');
    const lambdaValueSpan = document.getElementById('lambda-value');
    const warningDiv = document.getElementById("warning");
    const ystarValueSpan = document.getElementById('ystar-value');
    const unifiedCheckbox = document.getElementById('unified-model-checkbox');
    const resultsDiv = document.getElementById('results');
    const plotDiv = document.getElementById('plot-div');
    const plotDivComponents = document.getElementById('plot-div-components');
    const galaxyInfoDiv = document.getElementById('galaxy-info');
    const resetBtn = document.getElementById('reset-defaults-btn');

    // --- DATA HANDLING ---
    async function loadData() {
        try {
            const [t1_response, t2_response] = await Promise.all([fetch(URL_TABLE1), fetch(URL_TABLE2)]);
            if (!t1_response.ok || !t2_response.ok) throw new Error('Network response was not ok.');

            const t1_text = await t1_response.text();
            const t2_text = await t2_response.text();
            
            // Parse table1.dat
            const t1_lines = t1_text.trim().split('\n');
            const sparcT1 = [];
            t1_lines.forEach(line => {
                if (line.startsWith('#')) return;
                const name = line.substring(0, 11).trim();
                const rest = line.substring(11).trim().split(/\s+/);
                if (rest.length >= 18) {
                    sparcT1.push({
                        'Name': name,
                        'Type': parseInt(rest[0]),
                        'Dist': parseFloat(rest[1]),
                        'Dist_err': parseFloat(rest[2]),
                        'f_Dist': parseInt(rest[3]),
                        'Inc': parseFloat(rest[4]),
                        'Inc_err': parseFloat(rest[5]),
                        'L36': parseFloat(rest[6]),
                        'L36_err': parseFloat(rest[7]),
                        'Reff': parseFloat(rest[8]),
                        'SBeff': parseFloat(rest[9]),
                        'Rdisk': parseFloat(rest[10]),
                        'SBdisk': parseFloat(rest[11]),
                        'MHI': parseFloat(rest[12]),
                        'RHI': parseFloat(rest[13]),
                        'Vflat': parseFloat(rest[14]),
                        'Vflat_err': parseFloat(rest[15]),
                        'Qual': parseInt(rest[16]),
                        'Ref': rest[17]
                    });
                }
            });

            // Parse table2.dat (space-delimited format)
            const t2_lines = t2_text.trim().split('\n');
            const sparcT2 = [];
            t2_lines.forEach(line => {
                if (line.startsWith('#')) return;
                const parts = line.trim().split(/\s+/);
                // Name, Dist, Rad, Vobs, Vobs_err, Vgas, Vdisk, Vbul
                if (parts.length >= 8) {
                    sparcT2.push({
                        'Name': parts[0],
                        'Dist': parseFloat(parts[1]),
                        'Rad': parseFloat(parts[2]),
                        'Vobs': parseFloat(parts[3]),
                        'Vobs_err': parseFloat(parts[4]),
                        'Vgas': parseFloat(parts[5]),
                        'Vdisk': parseFloat(parts[6]),
                        'Vbul': parseFloat(parts[7])
                    });
                }
            });
            
            // Group data by galaxy
            sparcT2.forEach(row => {
                if (typeof row.Rad !== 'number' || typeof row.Vobs !== 'number' || isNaN(row.Rad) || isNaN(row.Vobs)) return;
                if (!galaxyData[row.Name]) galaxyData[row.Name] = [];
                galaxyData[row.Name].push(row);
            });

            // Build metadata lookup
            sparcT1.forEach(g => { galaxyMeta[g.Name] = g; });

            // Populate galaxy selector
            sparcT1.sort((a, b) => a.Name.localeCompare(b.Name)).forEach(galaxy => {
                if (galaxyData[galaxy.Name] && galaxyData[galaxy.Name].length > 2) {
                    const option = document.createElement('option');
                    option.value = galaxy.Name;
                    option.textContent = galaxy.Name;
                    galaxySelect.appendChild(option);
                }
            });
            galaxySelect.selectedIndex = 0;

            loader.style.display = 'none';
            calculatorBody.style.display = 'block';
            if (galaxySelect.value) {
                updateGalaxyInfo();
                updateAll();
            }

        } catch (error) {
            loader.textContent = 'Error: Could not load data from GitHub. Please check the URLs in the script.';
            console.error('Data loading error:', error);
        }
    }

    // --- PHYSICS CALCULATION ---
    function calculateWillVelocity(galaxyName, lambda, yStar) {
        const data = galaxyData[galaxyName].sort((a, b) => a.Rad - b.Rad);
        const rad = data.map(d => d.Rad);
        
        const v_gas = data.map(d => d.Vgas);
        const v_disk_scaled = data.map(d => Math.sqrt(yStar) * Math.abs(d.Vdisk));
        const v_bulge_scaled = data.map(d => Math.sqrt(yStar) * Math.abs(d.Vbul));

        // Classical baryonic velocity squared
        const v_bary_sq = data.map(d => (d.Vgas**2) + yStar * ((d.Vdisk**2) + (d.Vbul**2)));
        
        // Calculate the integral term: ∫[V_bary²]dr from 0 to r
        const integral = [0];
        for (let i = 1; i < rad.length; i++) {
            const dx = rad[i] - rad[i - 1];
            const dy_avg = (v_bary_sq[i] + v_bary_sq[i - 1]) / 2.0;
            integral.push(integral[i - 1] + dy_avg * dx);
        }

        // Geometric term: λ/r * ∫[V_bary²]dr
        const geom_term = integral.map((val, i) => rad[i] > 0 ? lambda * val / rad[i] : 0);
        
        // WILL velocity squared: V_bary² + geometric term
        const v_will_sq = v_bary_sq.map((val, i) => val + geom_term[i]);
        const v_will = v_will_sq.map(val => Math.sqrt(Math.max(0, val)));
        const v_bary = v_bary_sq.map(v => Math.sqrt(Math.max(0, v)));

        return { rad, v_bary, v_will, components: {v_gas, v_disk_scaled, v_bulge_scaled} };
    }
    
    function calculateRMSE(v_obs, v_pred) {
        let sum_sq_err = 0;
        for(let i = 0; i < v_obs.length; i++) sum_sq_err += (v_obs[i] - v_pred[i])**2;
        return Math.sqrt(sum_sq_err / v_obs.length);
    }

    // --- UI & PLOTTING ---
    function updateAll() {
        window.__update_called = true; // debug flag for tests
        console.log('updateAll triggered');
        const selectedGalaxy = galaxySelect.value;
        if (!selectedGalaxy) return;

        let lambda = parseFloat(lambdaSlider.value);
        let yStar = parseFloat(ystarSlider.value);

        // Handle unified model constraint
        if (unifiedCheckbox.checked) {
            if (lambda > 0) {
                yStar = 1.0 / lambda;
                ystarSlider.value = yStar;
            }
        }

        lambdaValueSpan.textContent = lambda.toFixed(2);
        ystarValueSpan.textContent = yStar.toFixed(2);
        
        const galaxyCurveData = galaxyData[selectedGalaxy];
        const obs_rad = galaxyCurveData.map(d => d.Rad);
        const obs_v = galaxyCurveData.map(d => d.Vobs);

        const { rad, v_bary, v_will, components } = calculateWillVelocity(selectedGalaxy, lambda, yStar);
        const rmse = calculateRMSE(obs_v, v_will);

        const hasInvalid = [...v_will, ...v_bary].some(v => !isFinite(v));
        resultsDiv.textContent = `Model RMSE: ${rmse.toFixed(2)} km/s`;
        warningDiv.textContent = hasInvalid ? "⚠ Calculation issue detected. Results may be incorrect." : "";
        const plotLayout = {
            xaxis: { 
                title: 'Radius (kpc)', 
                gridcolor: '#4b5563', 
                zerolinecolor: '#6b7280',
                color: '#d1d5db'
            },
            yaxis: { 
                title: 'Velocity (km/s)', 
                gridcolor: '#4b5563', 
                zerolinecolor: '#6b7280', 
                range: [0, Math.max(...obs_v, ...v_will) * 1.1],
                color: '#d1d5db'
            },
            legend: { 
                x: 0.05, 
                y: 0.95, 
                bgcolor: 'rgba(31,41,55,0.9)', 
                bordercolor: '#4b5563', 
                borderwidth: 1, 
                orientation: 'h',
                font: {color: '#d1d5db'}
            },
            margin: { l: 60, r: 30, b: 50, t: 60 },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: '#1f2937',
            font: {color: '#d1d5db'}
        };

        // Main Plot
        Plotly.react(plotDiv, [{
            x: obs_rad, y: obs_v, mode: 'markers', type: 'scatter', name: 'Observed (Vobs)',
            marker: { color: '#d1d5db', size: 8, symbol: 'circle' }
        }, {
            x: rad, y: v_bary, mode: 'lines', type: 'scatter', name: 'Classical Baryonic (Vbary)',
            line: { color: '#9ca3af', width: 2.5, dash: 'dash' }
        }, {
            x: rad, y: v_will, mode: 'lines', type: 'scatter', name: 'Predicted (V_WILL)',
            line: { color: '#67e8f9', width: 4 }
        }], { ...plotLayout, title: { text: `Rotation Curve for ${selectedGalaxy}`, font: { size: 20, color: '#d1d5db' } } });
        
        // Component Breakdown Plot
        Plotly.react(plotDivComponents, [{
             x: obs_rad, y: obs_v, mode: 'markers', type: 'scatter', name: 'Observed',
             marker: { color: '#9ca3af', size: 6, symbol: 'circle-open' }
        },{
            x: rad, y: components.v_gas, mode: 'lines', type: 'scatter', name: 'Gas',
            line: { color: '#10b981', width: 2.5 }
        }, {
            x: rad, y: components.v_disk_scaled, mode: 'lines', type: 'scatter', name: 'Disk (scaled by Y*)',
            line: { color: '#3b82f6', width: 2.5 }
        }, {
            x: rad, y: components.v_bulge_scaled, mode: 'lines', type: 'scatter', name: 'Bulge (scaled by Y*)',
            line: { color: '#f59e0b', width: 2.5 }
        }], { ...plotLayout, title: { text: `Baryonic Components for ${selectedGalaxy}`, font: { size: 20, color: '#d1d5db' } } });
    }

    function updateGalaxyInfo() {
        const meta = galaxyMeta[galaxySelect.value];
        if (!meta) { galaxyInfoDiv.textContent = ''; return; }
        const hub = `${meta.Type} (${hubbleTypes[meta.Type] || '?'})`;
        const dist = `${meta.Dist.toFixed(2)} ± ${meta.Dist_err.toFixed(2)} Mpc (${distMethods[meta.f_Dist] || '?'})`;
        const inc = `${meta.Inc.toFixed(1)}° ± ${meta.Inc_err.toFixed(1)}°`;
        const lum = `${meta.L36.toFixed(3)} ± ${meta.L36_err.toFixed(3)} G L☉`;
        const vf = `${meta.Vflat.toFixed(1)} ± ${meta.Vflat_err.toFixed(1)} km/s`;
        galaxyInfoDiv.innerHTML = `
            <p><strong>Hubble Type:</strong> ${hub}</p>
            <p><strong>Distance:</strong> ${dist}</p>
            <p><strong>Inclination:</strong> ${inc}</p>
            <p><strong>Total Luminosity:</strong> ${lum}</p>
            <p><strong>V_flat:</strong> ${vf}</p>
            <p><strong>RC Quality:</strong> ${meta.Qual}</p>`;
    }

    // --- EVENT LISTENERS ---
    function handleLambdaChange() {
        if (unifiedCheckbox.checked) {
            const lambda = parseFloat(lambdaSlider.value);
            if (lambda > 0) {
                ystarSlider.value = 1.0 / lambda;
            }
        }
        updateAll();
    }

    function handleYstarChange() {
        if (unifiedCheckbox.checked) {
            const yStar = parseFloat(ystarSlider.value);
            if (yStar > 0) {
                lambdaSlider.value = 1.0 / yStar;
            }
        }
        updateAll();
    }

    galaxySelect.addEventListener('change', () => { updateGalaxyInfo(); updateAll(); });
    lambdaSlider.addEventListener('input', handleLambdaChange);
    ystarSlider.addEventListener('input', handleYstarChange);
    unifiedCheckbox.addEventListener('change', handleLambdaChange);
    resetBtn.addEventListener('click', () => {
        lambdaSlider.value = defaultValues.lambda;
        ystarSlider.value = defaultValues.yStar;
        updateAll();
    });

    // --- INITIALIZATION ---
    document.addEventListener('DOMContentLoaded', loadData);
</script>
