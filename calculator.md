---
layout: default
title: "WILL Geometry Calculator"
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WILL Framework | Galactic Dynamics Calculator</title>
    
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    
    <style>
        /* --- Minimalist Styling --- */
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: #f8f9fa;
            color: #212529;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
            padding: 20px;
        }
        .container {
            width: 100%;
            max-width: 900px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            padding: 20px 30px;
            margin-top: 20px;
        }
        h1, h2 {
            text-align: center;
            color: #343a40;
            border-bottom: 2px solid #e9ecef;
            padding-bottom: 10px;
            margin-top: 0;
        }
        .controls {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px 0;
            align-items: center;
        }
        .control-group {
            display: flex;
            flex-direction: column;
        }
        label {
            margin-bottom: 8px;
            font-weight: 600;
            color: #495057;
        }
        select, input[type="range"] {
            width: 100%;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ced4da;
        }
        input[type="range"] {
            padding: 0;
        }
        .param-display {
            font-weight: bold;
            color: #007bff;
        }
        .unified-model {
            display: flex;
            align-items: center;
            gap: 10px;
            grid-column: 1 / -1; /* Span all columns */
            justify-content: center;
            padding: 10px;
            background-color: #e9ecef;
            border-radius: 5px;
        }
        #plot-div {
            width: 100%;
            height: 500px;
        }
        .results {
            text-align: center;
            font-size: 1.2em;
            font-weight: bold;
            margin-top: 20px;
            color: #343a40;
        }
        #loader {
            font-size: 1.5em;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>WILL Framework</h1>
    <h2>Galactic Dynamics Calculator</h2>

    <div class="container">
        <div id="loader">Loading SPARC Database...</div>

        <div id="calculator-body" style="display: none;">
            <div class="controls">
                <div class="control-group">
                    <label for="galaxy-select">Select Galaxy:</label>
                    <select id="galaxy-select"></select>
                </div>
                
                <div class="control-group">
                    <label for="lambda-slider">Geometric Factor (λ): <span id="lambda-value" class="param-display">4.00</span></label>
                    <input type="range" id="lambda-slider" min="0.1" max="6.0" step="0.01" value="4.0">
                </div>
                
                <div class="control-group">
                    <label for="ystar-slider">Stellar M/L Ratio (Y*): <span id="ystar-value" class="param-display">0.25</span></label>
                    <input type="range" id="ystar-slider" min="0.1" max="2.0" step="0.01" value="0.25">
                </div>

                <div class="unified-model">
                    <input type="checkbox" id="unified-model-checkbox">
                    <label for="unified-model-checkbox" style="margin-bottom:0;">Enforce Unified Model ($Y_* = 1/\lambda$)</label>
                </div>
            </div>

            <div id="plot-div"></div>
            <div id="results" class="results"></div>
        </div>
    </div>

    <script>
        // --- CONFIGURATION ---
        // !!! IMPORTANT !!!
        // Replace these URLs with the raw content URLs of your data files on GitHub.
        const URL_TABLE1 = '(https://raw.githubusercontent.com/AntonRize/WILL/refs/heads/main/SPARC%20DATA/table1.dat)';
        const URL_TABLE2 = 'https://raw.githubusercontent.com/AntonRize/WILL/refs/heads/main/SPARC%20DATA/table2.dat';

        // --- GLOBAL VARIABLES ---
        let sparcT1 = null;
        let sparcT2 = null;
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

        // --- PARSING FUNCTION ---
        function parseFWF(text, colspecs, names) {
            const lines = text.trim().split('\n');
            const data = [];
            lines.forEach(line => {
                if (line.startsWith('#')) return;
                let record = {};
                for (let i = 0; i < names.length; i++) {
                    const [start, end] = colspecs[i];
                    let value = line.substring(start, end).trim();
                    record[names[i]] = isNaN(parseFloat(value)) ? value : parseFloat(value);
                }
                data.push(record);
            });
            return data;
        }

        // --- DATA LOADING ---
        async function loadData() {
            try {
                const [t1_response, t2_response] = await Promise.all([
                    fetch(URL_TABLE1),
                    fetch(URL_TABLE2)
                ]);

                if (!t1_response.ok || !t2_response.ok) {
                    throw new Error('Network response was not ok.');
                }

                const t1_text = await t1_response.text();
                const t2_text = await t2_response.text();
                
                // Parse table1.dat
                const t1_colspecs = [[0, 9], [12, 17], [29, 36]];
                const t1_names = ['Name', 'Dist', 'L_[3.6]'];
                sparcT1 = parseFWF(t1_text, t1_colspecs, t1_names);

                // Parse table2.dat
                const t2_colspecs = [[0, 9], [11, 19], [20, 26], [33, 41], [42, 50], [51, 59]];
                const t2_names = ['Name', 'Rad', 'Vobs', 'Vgas', 'Vdisk', 'Vbul'];
                sparcT2 = parseFWF(t2_text, t2_colspecs, t2_names);

                // Process and structure the data
                sparcT2.forEach(row => {
                    if (!galaxyData[row.Name]) {
                        galaxyData[row.Name] = [];
                    }
                    // Calculate V_bary_sq_components here for efficiency
                    row.Vgas_sq = row.Vgas * row.Vgas;
                    row.Vdisk_sq = row.Vdisk * row.Vdisk;
                    row.Vbul_sq = row.Vbul * row.Vbul;
                    galaxyData[row.Name].push(row);
                });

                // Populate galaxy dropdown
                sparcT1.forEach(galaxy => {
                    if (galaxyData[galaxy.Name]) { // Only add galaxies with curve data
                        const option = document.createElement('option');
                        option.value = galaxy.Name;
                        option.textContent = galaxy.Name;
                        galaxySelect.appendChild(option);
                    }
                });

                loader.style.display = 'none';
                calculatorBody.style.display = 'block';

                // Initial plot
                updatePlot();

            } catch (error) {
                loader.textContent = 'Error: Could not load data from GitHub. Please check the URLs in the script.';
                console.error('Data loading error:', error);
            }
        }

        // --- PHYSICS CALCULATION ---
        function calculateWillVelocity(galaxyName, lambda, yStar) {
            const data = galaxyData[galaxyName].sort((a, b) => a.Rad - b.Rad);
            const rad = data.map(d => d.Rad);
            
            const v_bary_sq = data.map(d => d.Vgas_sq + yStar * (d.Vdisk_sq + d.Vbul_sq));
            
            // Cumulative Trapezoidal Integration
            const integral = [0];
            for (let i = 1; i < rad.length; i++) {
                const dx = rad[i] - rad[i-1];
                const dy_avg = (v_bary_sq[i] + v_bary_sq[i-1]) / 2.0;
                integral.push(integral[i-1] + dy_avg * dx);
            }

            const geom_term = integral.map((val, i) => {
                return rad[i] > 0 ? lambda * val / rad[i] : 0;
            });
            
            const v_will_sq = v_bary_sq.map((val, i) => val + geom_term[i]);
            const v_will = v_will_sq.map(val => Math.sqrt(Math.max(0, val)));

            return { rad, v_bary: v_bary_sq.map(v=>Math.sqrt(v)), v_will };
        }
        
        function calculateRMSE(v_obs, v_pred) {
            let sum_sq_err = 0;
            for(let i=0; i < v_obs.length; i++){
                sum_sq_err += (v_obs[i] - v_pred[i])**2;
            }
            return Math.sqrt(sum_sq_err / v_obs.length);
        }


        // --- PLOTTING & UI UPDATE ---
        function updatePlot() {
            const selectedGalaxy = galaxySelect.value;
            const lambda = parseFloat(lambdaSlider.value);
            const yStar = parseFloat(ystarSlider.value);

            lambdaValueSpan.textContent = lambda.toFixed(2);
            ystarValueSpan.textContent = yStar.toFixed(2);
            
            const galaxyCurveData = galaxyData[selectedGalaxy].sort((a, b) => a.Rad - b.Rad);
            const obs_rad = galaxyCurveData.map(d => d.Rad);
            const obs_v = galaxyCurveData.map(d => d.Vobs);

            const { rad, v_bary, v_will } = calculateWillVelocity(selectedGalaxy, lambda, yStar);
            const rmse = calculateRMSE(obs_v, v_will);

            resultsDiv.textContent = `Model RMSE: ${rmse.toFixed(2)} km/s`;

            Plotly.react('plot-div', [{
                x: obs_rad,
                y: obs_v,
                mode: 'markers',
                type: 'scatter',
                name: 'Observed (Vobs)',
                marker: { color: '#212529', size: 8 }
            }, {
                x: rad,
                y: v_bary,
                mode: 'lines',
                type: 'scatter',
                name: 'Classical Baryonic (Vbary)',
                line: { color: '#007bff', width: 2, dash: 'dash' }
            }, {
                x: rad,
                y: v_will,
                mode: 'lines',
                type: 'scatter',
                name: 'Predicted (V_WILL)',
                line: { color: '#dc3545', width: 3 }
            }], {
                title: `Rotation Curve for ${selectedGalaxy}`,
                xaxis: { title: 'Radius (kpc)' },
                yaxis: { title: 'Velocity (km/s)', range: [0, Math.max(...obs_v) * 1.2] },
                legend: { x: 0.05, y: 0.95 },
                margin: { l: 50, r: 30, b: 50, t: 50 }
            });
        }
        
        // --- EVENT LISTENERS ---
        galaxySelect.addEventListener('change', updatePlot);
        lambdaSlider.addEventListener('input', () => {
            if (unifiedCheckbox.checked) {
                const lambda = parseFloat(lambdaSlider.value);
                if (lambda > 0) {
                    ystarSlider.value = (1.0 / lambda).toFixed(2);
                }
            }
            updatePlot();
        });
        ystarSlider.addEventListener('input', () => {
             if (unifiedCheckbox.checked) {
                const yStar = parseFloat(ystarSlider.value);
                if (yStar > 0) {
                    lambdaSlider.value = (1.0 / yStar).toFixed(2);
                }
            }
            updatePlot();
        });
        unifiedCheckbox.addEventListener('change', () => {
            if (unifiedCheckbox.checked) {
                // When checked, sync ystar to lambda
                const lambda = parseFloat(lambdaSlider.value);
                 if (lambda > 0) {
                    ystarSlider.value = (1.0 / lambda).toFixed(2);
                }
            }
            updatePlot();
        });

        // --- INITIALIZATION ---
        document.addEventListener('DOMContentLoaded', loadData);

    </script>
</body>
</html>
