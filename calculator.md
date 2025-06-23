---
layout: default
title: "WILL Geometry Calculator"
---

<style>
/* Additional styles for calculator page */
.calculator-container {
    background: white;
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.btn-calculator {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
    margin: 5px;
}

.btn-calculator:hover {
    transform: translateY(-2px);
}

.results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
}

.stat-card {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

.stat-value {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 5px;
}

.chart-container {
    position: relative;
    height: 400px;
    margin: 20px 0;
}
</style>

# 🌌 WILL Geometry Calculator

**Test the geometric alternative to dark matter**

<div class="calculator-container">

## 🔬 Theory
**WILL Geometry** proposes that galactic rotation curves result from geometric energy evolution, not dark matter:

$$v^2_{(n+1)}(r) = v_b^2(r) + \lambda \times \frac{1}{r} \int_0^r v^2_{(n)}(r') dr'$$

## 🎛️ Controls
<div style="margin: 20px 0;">
    <label>Galaxy: </label>
    <select id="galaxySelect" style="padding: 8px; margin: 10px;">
        <option value="NGC3198" selected>NGC3198 (Spiral)</option>
        <option value="DDO154">DDO154 (Dwarf)</option>
        <option value="NGC2403">NGC2403 (Spiral)</option>
        <option value="NGC6503">NGC6503 (Spiral)</option>
    </select>
    
    <label>Iterations: </label>
    <input type="number" id="iterations" value="5" min="1" max="10" style="padding: 8px; width: 60px; margin: 10px;">
    
    <button class="btn-calculator" onclick="calculateWILL()">Calculate WILL</button>
</div>

## 📊 Results
<div class="results-grid" id="resultsGrid">
    <div class="stat-card">
        <div class="stat-value" id="rmsValue">--</div>
        <div class="stat-label">RMS (km/s)</div>
    </div>
    <div class="stat-card">
        <div class="stat-value" id="meanBias">--</div>
        <div class="stat-label">Mean Bias (km/s)</div>
    </div>
    <div class="stat-card">
        <div class="stat-value" id="dataPoints">--</div>
        <div class="stat-label">Data Points</div>
    </div>
</div>

## 📈 Rotation Curve
<div class="chart-container">
    <canvas id="rotationChart"></canvas>
</div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
<script>
// SPARC Galaxy Database
const sparcGalaxies = {
    "NGC3198": {
        name: "NGC3198",
        type: "Spiral Galaxy",
        inclination: 72,
        vflat: 157,
        data: [
            [0.32, 24.4, 0.0, 63.28, 0.0],
            [0.64, 43.3, 0.0, 73.66, 0.0],
            [0.96, 45.5, 0.0, 78.98, 0.0],
            [1.28, 58.5, 0.35, 82.7, 0.0],
            [1.61, 68.8, 0.15, 84.22, 0.0],
            [1.93, 76.9, -0.05, 83.17, 0.0],
            [2.24, 82.0, -0.47, 87.04, 0.0],
            [2.57, 86.9, -0.95, 88.91, 0.0],
            [2.89, 97.6, -1.43, 88.98, 0.0],
            [3.21, 100.0, -1.14, 93.81, 0.0],
            [3.54, 107.0, -0.39, 101.22, 0.0],
            [3.85, 113.0, 0.36, 108.53, 0.0],
            [4.17, 117.0, 1.52, 115.51, 0.0],
            [4.5, 119.0, 3.07, 120.51, 0.0],
            [4.82, 127.0, 4.63, 125.42, 0.0],
            [5.15, 132.0, 6.02, 129.4, 0.0],
            [5.46, 134.0, 7.16, 133.15, 0.0],
            [5.78, 137.0, 8.31, 136.45, 0.0],
            [6.1, 140.0, 9.46, 139.41, 0.0],
            [6.43, 142.0, 10.61, 141.85, 0.0]
        ]
    },
    "DDO154": {
        name: "DDO154", 
        type: "Dwarf Galaxy",
        inclination: 66,
        vflat: 47,
        data: [
            [0.49, 13.8, 3.74, 12.31, 0.0],
            [0.99, 21.6, 7.46, 14.55, 0.0],
            [1.48, 28.9, 10.87, 12.95, 0.0],
            [1.97, 34.3, 13.32, 11.54, 0.0],
            [2.47, 38.2, 14.77, 10.18, 0.0],
            [2.96, 42.0, 16.2, 9.16, 0.0],
            [3.46, 44.6, 17.6, 8.37, 0.0],
            [3.95, 46.3, 17.91, 7.77, 0.0],
            [4.44, 47.4, 17.48, 7.29, 0.0],
            [4.94, 48.2, 16.93, 6.89, 0.0],
            [5.43, 47.4, 16.28, 6.55, 0.0],
            [5.92, 45.5, 15.64, 6.26, 0.0]
        ]
    },
    "NGC2403": {
        name: "NGC2403",
        type: "Spiral Galaxy", 
        inclination: 63,
        vflat: 131,
        data: [
            [0.16, 24.5, 0.0, 23.21, 0.0],
            [0.26, 35.3, 0.0, 35.33, 0.0],
            [0.36, 43.2, 1.92, 46.97, 0.0],
            [0.46, 52.0, 2.29, 56.68, 0.0],
            [0.56, 60.9, 2.64, 63.77, 0.0],
            [0.66, 65.8, 3.0, 67.56, 0.0],
            [0.76, 71.7, 3.34, 70.83, 0.0],
            [0.86, 74.6, 3.68, 72.8, 0.0],
            [0.96, 74.6, 4.02, 74.87, 0.0],
            [1.06, 76.6, 4.37, 77.12, 0.0],
            [1.16, 78.5, 4.75, 79.47, 0.0],
            [1.27, 83.4, 5.15, 82.18, 0.0],
            [1.36, 86.4, 5.51, 85.19, 0.0],
            [1.47, 87.4, 5.76, 87.94, 0.0],
            [1.57, 90.3, 5.98, 90.77, 0.0],
            [1.67, 93.3, 6.21, 93.98, 0.0]
        ]
    },
    "NGC6503": {
        name: "NGC6503",
        type: "Spiral Galaxy",
        inclination: 74,
        vflat: 116,
        data: [
            [0.76, 77.0, 4.04, 70.72, 0.0],
            [1.52, 100.0, 7.62, 123.17, 0.0],
            [2.28, 110.0, 9.72, 142.64, 0.0],
            [3.04, 118.0, 12.42, 134.42, 0.0],
            [3.79, 121.0, 13.35, 121.97, 0.0],
            [4.55, 121.0, 14.78, 111.53, 0.0],
            [5.31, 117.0, 17.55, 103.23, 0.0],
            [6.07, 116.0, 19.2, 96.65, 0.0],
            [6.83, 116.0, 20.33, 91.96, 0.0],
            [7.59, 116.0, 21.66, 87.62, 0.0],
            [8.35, 115.0, 22.79, 83.25, 0.0],
            [9.11, 115.0, 23.92, 79.58, 0.0],
            [9.86, 116.0, 24.84, 76.81, 0.0],
            [10.64, 117.0, 25.46, 74.18, 0.0]
        ]
    }
};

let chart = null;

// WILL Calculation Engine
function calculateWILL() {
    const galaxySelect = document.getElementById('galaxySelect');
    const iterations = parseInt(document.getElementById('iterations').value);
    
    const galaxy = sparcGalaxies[galaxySelect.value];
    const galaxyData = galaxy.data.map(row => ({
        r: row[0],
        v_obs: row[1], 
        v_gas: row[2],
        v_disk: row[3],
        v_bulge: row[4]
    }));
    
    // Determine disc factor (λ = 0.45 for thin discs, 1.0 otherwise)
    const lambda = (galaxy.inclination >= 70 && galaxy.vflat >= 180) ? 0.45 : 1.0;
    
    // Calculate WILL predictions
    const results = calculateWILLPredictions(galaxyData, iterations, lambda);
    
    // Update display
    updateResults(results, lambda, galaxy.name);
    updateChart(results);
}

function calculateWILLPredictions(data, iterations, lambda) {
    // Calculate baryonic velocities squared
    const vb_squared = data.map(point => 
        point.v_gas * point.v_gas + 
        point.v_disk * point.v_disk + 
        point.v_bulge * point.v_bulge
    );
    
    // Initialize with baryonic velocities
    let v_squared_current = [...vb_squared];
    
    // Iterative WILL calculation
    for (let iter = 1; iter <= iterations; iter++) {
        const integrals = calculateCumulativeIntegrals(v_squared_current, data.map(p => p.r));
        
        // Update v² = v_b² + λ * integral/r
        v_squared_current = data.map((point, i) => 
            vb_squared[i] + lambda * integrals[i] / point.r
        );
    }
    
    // Generate results
    const results = data.map((point, i) => ({
        r: point.r,
        v_obs: point.v_obs,
        v_baryonic: Math.sqrt(vb_squared[i]),
        v_will: Math.sqrt(Math.max(0, v_squared_current[i])),
        residual: point.v_obs - Math.sqrt(Math.max(0, v_squared_current[i]))
    }));
    
    return results;
}

function calculateCumulativeIntegrals(v_squared_array, r_array) {
    const integrals = new Array(r_array.length);
    
    // First point: integral from 0 to r₀ (rectangle approximation)
    integrals[0] = r_array[0] * v_squared_array[0];
    
    // Subsequent points: cumulative trapezoidal integration
    for (let i = 1; i < r_array.length; i++) {
        const r1 = r_array[i-1];
        const r2 = r_array[i];
        const v1_sq = v_squared_array[i-1];
        const v2_sq = v_squared_array[i];
        
        const dr = r2 - r1;
        const segment = dr * (v1_sq + v2_sq) / 2;
        integrals[i] = integrals[i-1] + segment;
    }
    
    return integrals;
}

function updateResults(results, lambda, galaxyName) {
    // Calculate statistics
    const residuals = results.map(r => r.residual);
    const rms = Math.sqrt(residuals.reduce((sum, r) => sum + r*r, 0) / residuals.length);
    const meanBias = residuals.reduce((sum, r) => sum + r, 0) / residuals.length;
    
    // Update UI
    document.getElementById('rmsValue').textContent = rms.toFixed(2);
    document.getElementById('meanBias').textContent = meanBias.toFixed(2);
    document.getElementById('dataPoints').textContent = results.length;
}

function updateChart(results) {
    const ctx = document.getElementById('rotationChart').getContext('2d');
    
    if (chart) {
        chart.destroy();
    }
    
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: results.map(r => r.r.toFixed(2)),
            datasets: [{
                label: 'Observed V(r)',
                data: results.map(r => r.v_obs),
                borderColor: '#e74c3c',
                backgroundColor: 'transparent',
                borderWidth: 3,
                pointRadius: 5,
                pointBackgroundColor: '#e74c3c'
            }, {
                label: 'WILL Prediction',
                data: results.map(r => r.v_will),
                borderColor: '#3498db',
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderDash: [5, 5],
                pointRadius: 4,
                pointBackgroundColor: '#3498db'
            }, {
                label: 'Baryonic Only',
                data: results.map(r => r.v_baryonic),
                borderColor: '#2ecc71',
                backgroundColor: 'transparent',
                borderWidth: 1,
                pointRadius: 2,
                pointBackgroundColor: '#2ecc71'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Galactic Rotation Curve: WILL vs Observations'
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Radius (kpc)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Velocity (km/s)'
                    }
                }
            }
        }
    });
}

// Initialize with default galaxy
calculateWILL();</script>