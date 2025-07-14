---
layout: default
title: "WILL Geometry Calculator"
---

<!-- MathJax for LaTeX rendering -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<!-- Plotly.js for graphing -->
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<style>
    /* This style block only affects the calculator, not your site's main design. */
    .calculator-container {
        background: #fdfdff; /* A very soft, almost white background for the main block */
        border-radius: 15px;
        padding: 30px 40px;
        margin: 20px auto;
        box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        border: 1px solid #e9ecef;
        max-width: 1000px;
    }

    .theory-section {
        background: #f8f9fa;
        border-radius: 10px;
        padding: 25px;
        margin-bottom: 30px;
        border-left: 5px solid #0d6efd;
    }
    .theory-section h3 {
        margin-top: 0;
        color: #212529;
        font-size: 1.5em;
    }
    .theory-section p {
        color: #495057;
        line-height: 1.7;
    }
    .formula {
        font-size: 1.1em;
        text-align: center;
        padding: 20px;
        background-color: #e9ecef;
        border-radius: 5px;
        margin-top: 20px;
        overflow-x: auto;
        white-space: nowrap;
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
        color: #495057;
    }
    .form-control, .form-range {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ced4da;
        box-sizing: border-box;
    }
    .form-range { padding: 0; }
    .param-display { font-weight: bold; color: #0d6efd; }

    .unified-model {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 12px;
        background-color: #e9f5ff;
        border: 1px solid #bde0fe;
        border-radius: 5px;
        margin-bottom: 20px;
        grid-column: 1 / -1;
    }
    .unified-model input[type="checkbox"] { width: auto; margin-right: 5px; }
    .unified-model label { margin: 0; font-weight: normal; cursor: pointer; }
    
    #results {
        text-align: center;
        font-size: 1.25em;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 25px;
        color: #343a40;
        padding: 15px;
        background-color: #e9ecef;
        border-radius: 8px;
    }

    .plot-container {
        border-top: 1px solid #e9ecef;
        padding-top: 25px;
        margin-top: 25px;
    }
    .plot-container h4 {
        text-align: center;
        color: #495057;
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
        color: #6c757d;
    }
</style>

<div class="calculator-container">
    
    <div class="theory-section">
        <h3>The WILL Predictive Model</h3>
        <p>
            This calculator implements the final, simplified WILL model for galactic rotation curves. It posits that the observed velocity ($V_{WILL}$) is a combination of the classical gravitational effect of baryons ($V_{classic}$) and a non-local geometric term derived from the cumulative kinetic energy of the system.
        </p>
        <div class="formula">
            $$ V_{WILL}^{2}(r) = \left[ V_{gas}^{2} + \Upsilon_* (V_{disk}^{2} + V_{bulge}^{2}) \right] + \frac{\lambda}{r}\int_{0}^{r}\left[ V_{gas}^{2} + \Upsilon_* (V_{disk}^{2} + V_{bulge}^{2}) \right]dr' $$
        </div>
    </div>

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

        <div class="unified-model">
            <input type="checkbox" id="unified-model-checkbox" checked>
            <label for="unified-model-checkbox">Enforce Unified Model ($Y_* = 1/\lambda$)</label>
        </div>
        
        <div id="results"></div>

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

<script>
    // --- CONFIGURATION ---
    const URL_TABLE1 = 'https://raw.githubusercontent.com/AntonRize/WILL/refs/heads/main/SPARC%20DATA/table1.dat';
    const URL_TABLE2 = 'https://raw.githubusercontent.com/AntonRize/WILL/refs/heads/main/SPARC%20DATA/table2.dat';

    // --- GLOBAL VARIABLES ---
    let galaxyData = {};

    // --- DOM ELEMENTS ---
    const loader = document.getElementById('loader');
    const calculatorBody = document.getElementById('calculator-body');
    const galaxySelect = document.getElementById('galaxy-select');
    const lambdaSlider = document.getElementById('lambda-slider');
    const ystarSlider = document.getElementById('ystar-slider');
    const lambdaValueSpan = document.getElementById('lambda-value');
    const ystarValueSpan = document.getElementById('ystar-value');
    const unifiedCheckbox = document.getElementById('unified-model-checkbox');
    const resultsDiv = document.getElementById('results');
    const plotDiv = document.getElementById('plot-div');
    const plotDivComponents = document.getElementById('plot-div-components');

    // --- DATA HANDLING ---
    async function loadData() {
        try {
            const [t1_response, t2_response] = await Promise.all([fetch(URL_TABLE1), fetch(URL_TABLE2)]);
            if (!t1_response.ok || !t2_response.ok) throw new Error('Network response was not ok.');

            const t1_text = await t1_response.text();
            const t2_text = await t2_response.text();
            
            const t1_colspecs = [[0, 9]];
            const t1_names = ['Name'];
            const sparcT1 = parseFWF(t1_text, t1_colspecs, t1_names);

            const t2_lines = t2_text.trim().split('\n');
            const sparcT2 = [];
            t2_lines.forEach(line => {
                if (line.startsWith('#')) return;
                const parts = line.trim().split(/\s+/);
                if (parts.length >= 7) {
                    sparcT2.push({
                        'Name': parts[0], 'Rad': parseFloat(parts[1]), 'Vobs': parseFloat(parts[2]),
                        'Vgas': parseFloat(parts[4]), 'Vdisk': parseFloat(parts[5]), 'Vbul': parseFloat(parts[6])
                    });
                }
            });
            
            sparcT2.forEach(row => {
                if (typeof row.Rad !== 'number' || typeof row.Vobs !== 'number' || isNaN(row.Rad) || isNaN(row.Vobs)) return;
                if (!galaxyData[row.Name]) galaxyData[row.Name] = [];
                galaxyData[row.Name].push(row);
            });

            sparcT1.sort((a, b) => a.Name.localeCompare(b.Name)).forEach(galaxy => {
                if (galaxyData[galaxy.Name] && galaxyData[galaxy.Name].length > 2) {
                    const option = document.createElement('option');
                    option.value = galaxy.Name;
                    option.textContent = galaxy.Name;
                    galaxySelect.appendChild(option);
                }
            });

            loader.style.display = 'none';
            calculatorBody.style.display = 'block';
            updateAll();

        } catch (error) {
            loader.textContent = 'Error: Could not load data from GitHub. Please check the URLs in the script.';
            console.error('Data loading error:', error);
        }
    }

    function parseFWF(text, colspecs, names) {
        const lines = text.trim().split('\n');
        const data = [];
        lines.forEach(line => {
            if (line.startsWith('#')) return;
            let record = {};
            for (let i = 0; i < names.length; i++) {
                const [start, end] = colspecs[i];
                record[names[i]] = line.substring(start, end).trim();
            }
            data.push(record);
        });
        return data;
    }

    // --- PHYSICS CALCULATION ---
    function calculateWillVelocity(galaxyName, lambda, yStar) {
        const data = galaxyData[galaxyName].sort((a, b) => a.Rad - b.Rad);
        const rad = data.map(d => d.Rad);
        
        const v_gas = data.map(d => d.Vgas);
        const v_disk_scaled = data.map(d => Math.sqrt(yStar) * Math.abs(d.Vdisk));
        const v_bulge_scaled = data.map(d => Math.sqrt(yStar) * Math.abs(d.Vbul));

        const v_bary_sq = data.map(d => (d.Vgas**2) + yStar * ((d.Vdisk**2) + (d.Vbul**2)));
        
        const integral = [0];
        for (let i = 1; i < rad.length; i++) {
            const dx = rad[i] - rad[i - 1];
            const dy_avg = (v_bary_sq[i] + v_bary_sq[i - 1]) / 2.0;
            integral.push(integral[i - 1] + dy_avg * dx);
        }

        const geom_term = integral.map((val, i) => rad[i] > 0 ? lambda * val / rad[i] : 0);
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
        const selectedGalaxy = galaxySelect.value;
        if (!selectedGalaxy) return;

        const lambda = parseFloat(lambdaSlider.value);
        const yStar = parseFloat(ystarSlider.value);

        lambdaValueSpan.textContent = lambda.toFixed(2);
        ystarValueSpan.textContent = yStar.toFixed(2);
        
        const galaxyCurveData = galaxyData[selectedGalaxy];
        const obs_rad = galaxyCurveData.map(d => d.Rad);
        const obs_v = galaxyCurveData.map(d => d.Vobs);

        const { rad, v_bary, v_will, components } = calculateWillVelocity(selectedGalaxy, lambda, yStar);
        const rmse = calculateRMSE(obs_v, v_will);

        resultsDiv.textContent = `Model RMSE: ${rmse.toFixed(2)} km/s`;

        const plotLayout = {
            xaxis: { title: 'Radius (kpc)', gridcolor: '#e9ecef', zerolinecolor: '#ced4da' },
            yaxis: { title: 'Velocity (km/s)', gridcolor: '#e9ecef', zerolinecolor: '#ced4da', range: [0, Math.max(...obs_v, ...v_will) * 1.1] },
            legend: { x: 0.05, y: 0.95, bgcolor: 'rgba(255,255,255,0.7)', bordercolor: '#ced4da', borderwidth: 1 },
            margin: { l: 60, r: 30, b: 50, t: 60 },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: '#f8f9fa'
        };

        // Main Plot
        Plotly.newPlot(plotDiv, [{
            x: obs_rad, y: obs_v, mode: 'markers', type: 'scatter', name: 'Observed (Vobs)',
            marker: { color: '#343a40', size: 8, symbol: 'circle' }
        }, {
            x: rad, y: v_bary, mode: 'lines', type: 'scatter', name: 'Classical Baryonic (Vbary)',
            line: { color: '#6c757d', width: 2.5, dash: 'dash' }
        }, {
            x: rad, y: v_will, mode: 'lines', type: 'scatter', name: 'Predicted (V_WILL)',
            line: { color: '#dc3545', width: 4 }
        }], { ...plotLayout, title: { text: `Rotation Curve for ${selectedGalaxy}`, font: { size: 20, color: '#343a40' } } });
        
        // Component Breakdown Plot
        Plotly.newPlot(plotDivComponents, [{
             x: obs_rad, y: obs_v, mode: 'markers', type: 'scatter', name: 'Observed',
             marker: { color: '#adb5bd', size: 6, symbol: 'circle-open' }
        },{
            x: rad, y: components.v_gas, mode: 'lines', type: 'scatter', name: 'Gas',
            line: { color: '#198754', width: 2 }
        }, {
            x: rad, y: components.v_disk_scaled, mode: 'lines', type: 'scatter', name: 'Disk (scaled by Y*)',
            line: { color: '#0d6efd', width: 2 }
        }, {
            x: rad, y: components.v_bulge_scaled, mode: 'lines', type: 'scatter', name: 'Bulge (scaled by Y*)',
            line: { color: '#fd7e14', width: 2 }
        }], { ...plotLayout, title: { text: `Baryonic Components for ${selectedGalaxy}`, font: { size: 20, color: '#343a40' } } });
    }
    
    // --- EVENT LISTENERS ---
    function handleUnifiedLink() {
        if (unifiedCheckbox.checked) {
            const lambda = parseFloat(lambdaSlider.value);
            if (lambda > 0) {
                ystarSlider.value = (1.0 / lambda);
            }
        }
        updateAll();
    }
    
    galaxySelect.addEventListener('change', updateAll);
    lambdaSlider.addEventListener('input', handleUnifiedLink);
    ystarSlider.addEventListener('input', () => {
         if (unifiedCheckbox.checked) {
            const yStar = parseFloat(ystarSlider.value);
            if (yStar > 0) {
                lambdaSlider.value = (1.0 / yStar);
            }
        }
        updateAll();
    });
    unifiedCheckbox.addEventListener('change', handleUnifiedLink);

    // --- INITIALIZATION ---
    document.addEventListener('DOMContentLoaded', loadData);
</script>
