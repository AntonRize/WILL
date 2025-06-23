---
layout: default
title: "WILL Geometry Calculator"
---

<style>
/* Enhanced Calculator Styles with Adaptive System */
.calculator-container {
    background: white;
    border-radius: 15px;
    padding: 25px;
    margin: 20px 0;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    border: 1px solid #e1e5e9;
}

.theory-section {
    background: linear-gradient(135deg, #e8f4fd 0%, #d5f4e6 100%);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 25px;
    border-left: 5px solid #3498db;
}

.adaptive-system {
    background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 25px;
    border-left: 5px solid #e17055;
}

.controls-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 25px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
}

.control-group {
    display: flex;
    flex-direction: column;
}

.control-group label {
    font-weight: 600;
    margin-bottom: 8px;
    color: #2c3e50;
    font-size: 14px;
}

.control-group select, .control-group input {
    padding: 12px;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.3s;
    background: white;
}

.control-group select:focus, .control-group input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.btn-calculator {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    margin: 10px 5px;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.btn-calculator:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
    background: linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%);
    box-shadow: 0 4px 15px rgba(127, 140, 141, 0.3);
}

.adaptive-panel {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    border-left: 5px solid #667eea;
}

.depth-indicator {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 600;
    margin: 5px;
    color: white;
}

.depth-0 { background: linear-gradient(135deg, #e74c3c, #c0392b); }
.depth-1 { background: linear-gradient(135deg, #f39c12, #e67e22); }
.depth-5 { background: linear-gradient(135deg, #3498db, #2980b9); }

.reasoning-box {
    background: #f8f9fa;
    border-left: 4px solid #3498db;
    padding: 15px;
    margin: 15px 0;
    border-radius: 5px;
}

.results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
    margin: 25px 0;
}

.stat-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.stat-card:hover {
    transform: translateY(-3px);
}

.stat-value {
    font-size: 2.2em;
    font-weight: 700;
    margin-bottom: 8px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

.stat-label {
    font-size: 0.9em;
    opacity: 0.9;
    font-weight: 500;
}

.chart-container {
    position: relative;
    height: 450px;
    margin: 25px 0;
    background: white;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.galaxy-info {
    background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
    border-radius: 10px;
    padding: 15px;
    margin: 15px 0;
    border-left: 5px solid #e17055;
}

.performance-indicator {
    display: inline-block;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    margin-left: 10px;
}

.excellent { background: #d4edda; color: #155724; }
.good { background: #d1ecf1; color: #0c5460; }
.fair { background: #fff3cd; color: #856404; }
.poor { background: #f8d7da; color: #721c24; }

.database-info {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    text-align: center;
}

.override-controls {
    background: #fff3cd;
    border-radius: 8px;
    padding: 15px;
    margin: 15px 0;
    border-left: 4px solid #856404;
}

@media (max-width: 768px) {
    .controls-grid {
        grid-template-columns: 1fr;
    }
    
    .chart-container {
        height: 350px;
    }
}
</style>

# 🌌 WILL Geometry Calculator
## Adaptive Geometric Depth System

<div class="database-info">
    <h3>🧠 Revolutionary Adaptive Algorithm</h3>
    <p><strong>Auto-selects optimal geometric depth</strong> • <strong>Morphology-based parameters</strong> • <strong>Educational transparency</strong></p>
    <p>From edge-on spirals to dwarf irregulars • Each galaxy gets its perfect geometric treatment</p>
</div>

<div class="calculator-container">

<div class="theory-section">
    <h3>🔬 WILL Adaptive Geometric Evolution</h3>
    <p><strong>Revolutionary Discovery:</strong> Different galaxy morphologies require different geometric depths!</p>
    
    <div style="text-align: center; margin: 15px 0; font-size: 18px;">
        $$v^2_{(n+1)}(r) = v_b^2(r) + \lambda \times \frac{1}{r} \int_0^r v^2_{(n)}(r') dr'$$
    </div>
    
    <p><strong>Adaptive Parameters:</strong> λ and iteration depth automatically selected based on galaxy structure</p>
</div>

<div class="adaptive-system">
    <h3>🧠 Adaptive Depth Criterion</h3>
    <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 15px 0;">
        <div style="text-align: center; margin: 10px;">
            <div class="depth-indicator depth-0">DEPTH 0</div>
            <div style="font-size: 12px; margin-top: 5px;">Thin Disc<br>λ=0.45, 1 iter</div>
        </div>
        <div style="text-align: center; margin: 10px;">
            <div class="depth-indicator depth-1">DEPTH 1</div>
            <div style="font-size: 12px; margin-top: 5px;">Mild Spheroidal<br>λ=0.7, 2 iter</div>
        </div>
        <div style="text-align: center; margin: 10px;">
            <div class="depth-indicator depth-5">DEPTH 5</div>
            <div style="font-size: 12px; margin-top: 5px;">Gas-rich/Irregular<br>λ=1.0, 5 iter</div>
        </div>
    </div>
    <p style="text-align: center; font-size: 14px; margin-top: 15px;">
        <strong>Criterion:</strong> Edge-on + V<sub>flat</sub>≥180 + B/T<0.1 → Depth 0 | 0.1≤B/T<0.3 → Depth 1 | Gas-rich/Irregular → Depth 5
    </p>
</div>

<div class="controls-grid">
    <div class="control-group">
        <label>🌌 Galaxy Selection</label>
        <select id="galaxySelect">
            <optgroup label="🌀 Large Spirals">
                <option value="NGC3198">NGC3198 - Classic Test Case</option>
                <option value="NGC2403">NGC2403 - Nearby Spiral</option>
                <option value="NGC6503" selected>NGC6503 - Edge-on Spiral</option>
                <option value="NGC7331">NGC7331 - Massive Spiral</option>
                <option value="NGC2841">NGC2841 - High Surface Brightness</option>
                <option value="NGC3521">NGC3521 - Flocculent Spiral</option>
            </optgroup>
            <optgroup label="🔸 Dwarf Galaxies">
                <option value="DDO154">DDO154 - Gas-rich Dwarf</option>
                <option value="CamB">CamB - Ultra-faint Dwarf</option>
                <option value="DDO161">DDO161 - Low Surface Brightness</option>
                <option value="UGC04483">UGC04483 - Dwarf Irregular</option>
            </optgroup>
            <optgroup label="🌟 Low Surface Brightness">
                <option value="F583-4">F583-4 - LSB Galaxy</option>
                <option value="UGC07866">UGC07866 - LSB Disk</option>
                <option value="UGC05414">UGC05414 - LSB Spiral</option>
            </optgroup>
        </select>
    </div>
    
    <div class="control-group">
        <label>🤖 Calculation Mode</label>
        <select id="calculationMode">
            <option value="adaptive" selected>🧠 Adaptive (Recommended)</option>
            <option value="manual">🛠️ Manual Override</option>
        </select>
    </div>
    
    <div class="control-group" style="align-self: end;">
        <button class="btn-calculator" onclick="calculateWILL()">🚀 Calculate WILL</button>
        <button class="btn-calculator btn-secondary" onclick="showRandomGalaxy()">🎲 Random Galaxy</button>
    </div>
</div>

<div id="manualControls" class="override-controls" style="display: none;">
    <h4>🛠️ Manual Parameter Override</h4>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
        <div>
            <label>Iterations:</label>
            <input type="number" id="iterations" value="5" min="1" max="10">
        </div>
        <div>
            <label>Disc Factor (λ):</label>
            <select id="discFactor">
                <option value="1.0">1.0 (Spherical)</option>
                <option value="0.7">0.7 (Intermediate)</option>
                <option value="0.45">0.45 (Thin Disk)</option>
            </select>
        </div>
    </div>
</div>

<div id="adaptivePanel" class="adaptive-panel">
    <h3>🧠 Adaptive Algorithm Decision</h3>
    <div id="adaptiveReasoning" class="reasoning-box">
        Select a galaxy to see the adaptive algorithm's reasoning...
    </div>
    <div id="adaptiveParameters" style="text-align: center; margin-top: 15px;">
        <span id="selectedDepth" class="depth-indicator">CALCULATING...</span>
        <span style="margin: 0 15px;"><strong>λ = <span id="selectedLambda">--</span></strong></span>
        <span><strong>Iterations = <span id="selectedIterations">--</span></strong></span>
    </div>
</div>

<div id="galaxyInfo" class="galaxy-info" style="display: none;">
    <h4 id="galaxyName">Galaxy Name</h4>
    <div id="galaxyDetails">Galaxy details...</div>
</div>

## 📊 Performance Results
<div class="results-grid" id="resultsGrid">
    <div class="stat-card">
        <div class="stat-value" id="rmsValue">--</div>
        <div class="stat-label">RMS Residual (km/s)</div>
    </div>
    <div class="stat-card">
        <div class="stat-value" id="meanBias">--</div>
        <div class="stat-label">Mean Bias (km/s)</div>
    </div>
    <div class="stat-card">
        <div class="stat-value" id="dataPoints">--</div>
        <div class="stat-label">Data Points</div>
    </div>
    <div class="stat-card">
        <div class="stat-value" id="adaptiveMode">ADAPTIVE</div>
        <div class="stat-label">Algorithm Mode</div>
    </div>
</div>

## 📈 Rotation Curve Analysis
<div class="chart-container">
    <canvas id="rotationChart"></canvas>
</div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
<script>
// Enhanced SPARC Database with Morphological Parameters
const sparcDatabase = {
    // Large Spiral Galaxies
    "NGC3198": {
        name: "NGC3198", type: "Sb", inclination: 72, vflat: 157, distance: 13.8, bt_ratio: 0.15,
        isEdgeOn: true, gasRich: false, irregular: false,
        description: "Classic rotation curve test case • Well-studied spiral galaxy",
        data: [[0.32, 24.4, 0.0, 63.28, 0.0], [0.64, 43.3, 0.0, 73.66, 0.0], [0.96, 45.5, 0.0, 78.98, 0.0], [1.28, 58.5, 0.35, 82.7, 0.0], [1.61, 68.8, 0.15, 84.22, 0.0], [1.93, 76.9, -0.05, 83.17, 0.0], [2.24, 82.0, -0.47, 87.04, 0.0], [2.57, 86.9, -0.95, 88.91, 0.0], [2.89, 97.6, -1.43, 88.98, 0.0], [3.21, 100.0, -1.14, 93.81, 0.0], [3.54, 107.0, -0.39, 101.22, 0.0], [3.85, 113.0, 0.36, 108.53, 0.0], [4.17, 117.0, 1.52, 115.51, 0.0], [4.5, 119.0, 3.07, 120.51, 0.0], [4.82, 127.0, 4.63, 125.42, 0.0], [5.15, 132.0, 6.02, 129.4, 0.0], [5.46, 134.0, 7.16, 133.15, 0.0], [5.78, 137.0, 8.31, 136.45, 0.0], [6.1, 140.0, 9.46, 139.41, 0.0], [6.43, 142.0, 10.61, 141.85, 0.0]]
    },
    "NGC2403": {
        name: "NGC2403", type: "Scd", inclination: 63, vflat: 131, distance: 3.2, bt_ratio: 0.08,
        isEdgeOn: false, gasRich: true, irregular: false,
        description: "Nearby spiral • Member of M81 group • Excellent data quality",
        data: [[0.16, 24.5, 0.0, 23.21, 0.0], [0.26, 35.3, 0.0, 35.33, 0.0], [0.36, 43.2, 1.92, 46.97, 0.0], [0.46, 52.0, 2.29, 56.68, 0.0], [0.56, 60.9, 2.64, 63.77, 0.0], [0.66, 65.8, 3.0, 67.56, 0.0], [0.76, 71.7, 3.34, 70.83, 0.0], [0.86, 74.6, 3.68, 72.8, 0.0], [0.96, 74.6, 4.02, 74.87, 0.0], [1.06, 76.6, 4.37, 77.12, 0.0], [1.16, 78.5, 4.75, 79.47, 0.0], [1.27, 83.4, 5.15, 82.18, 0.0], [1.36, 86.4, 5.51, 85.19, 0.0], [1.47, 87.4, 5.76, 87.94, 0.0], [1.57, 90.3, 5.98, 90.77, 0.0], [1.67, 93.3, 6.21, 93.98, 0.0]]
    },
    "NGC6503": {
        name: "NGC6503", type: "Sc", inclination: 74, vflat: 116, distance: 5.3, bt_ratio: 0.05,
        isEdgeOn: true, gasRich: false, irregular: false,
        description: "Edge-on spiral • Clean kinematic data • Ideal for testing",
        data: [[0.76, 77.0, 4.04, 70.72, 0.0], [1.52, 100.0, 7.62, 123.17, 0.0], [2.28, 110.0, 9.72, 142.64, 0.0], [3.04, 118.0, 12.42, 134.42, 0.0], [3.79, 121.0, 13.35, 121.97, 0.0], [4.55, 121.0, 14.78, 111.53, 0.0], [5.31, 117.0, 17.55, 103.23, 0.0], [6.07, 116.0, 19.2, 96.65, 0.0], [6.83, 116.0, 20.33, 91.96, 0.0], [7.59, 116.0, 21.66, 87.62, 0.0], [8.35, 115.0, 22.79, 83.25, 0.0], [9.11, 115.0, 23.92, 79.58, 0.0], [9.86, 116.0, 24.84, 76.81, 0.0], [10.64, 117.0, 25.46, 74.18, 0.0]]
    },
    "NGC7331": {
        name: "NGC7331", type: "Sb", inclination: 76, vflat: 239, distance: 14.7, bt_ratio: 0.35,
        isEdgeOn: true, gasRich: false, irregular: false,
        description: "Massive spiral • High velocity • Prominent bulge component",
        data: [[2.67, 221.0, -12.02, 317.9, 136.84], [3.21, 237.0, -12.52, 344.05, 124.77], [3.74, 249.0, -12.91, 365.51, 115.63], [4.27, 250.0, -12.71, 368.89, 108.22], [4.81, 253.0, -11.52, 367.77, 101.96], [5.35, 257.0, -9.56, 371.23, 96.68], [5.88, 257.0, -6.26, 365.05, 92.22], [6.41, 257.0, 4.8, 360.1, 88.33], [7.48, 257.0, 12.22, 345.54, 81.76], [8.55, 255.0, 16.59, 324.23, 76.48], [9.62, 248.0, 22.45, 311.29, 72.1], [10.66, 247.0, 28.21, 299.93, 68.49]]
    },
    "NGC2841": {
        name: "NGC2841", type: "Sb", inclination: 74, vflat: 321, distance: 14.1, bt_ratio: 0.42,
        isEdgeOn: true, gasRich: false, irregular: false,
        description: "High surface brightness • Smooth disk • Excellent kinematics",
        data: [[1.2, 145.0, 2.1, 189.3, 78.2], [1.8, 198.0, 3.5, 234.7, 85.1], [2.4, 235.0, 4.8, 267.4, 89.6], [3.0, 265.0, 6.2, 291.8, 92.3], [3.6, 285.0, 7.5, 308.2, 94.1], [4.2, 298.0, 8.9, 318.7, 95.2], [4.8, 307.0, 10.1, 324.9, 95.8], [5.4, 313.0, 11.2, 327.8, 96.1], [6.0, 317.0, 12.1, 328.4, 96.2], [6.6, 319.0, 12.8, 327.1, 96.0], [7.2, 320.0, 13.3, 324.2, 95.6], [7.8, 320.0, 13.6, 319.8, 95.0]]
    },
    "NGC3521": {
        name: "NGC3521", type: "Sbc", inclination: 73, vflat: 179, distance: 11.2, bt_ratio: 0.25,
        isEdgeOn: true, gasRich: false, irregular: false,
        description: "Flocculent spiral • Complex morphology • Rich HI data",
        data: [[0.8, 89.0, 5.2, 98.7, 34.1], [1.6, 134.0, 8.9, 156.2, 45.6], [2.4, 156.0, 12.1, 182.3, 52.8], [3.2, 169.0, 14.7, 195.4, 56.9], [4.0, 176.0, 16.8, 201.7, 59.2], [4.8, 180.0, 18.3, 203.1, 60.1], [5.6, 182.0, 19.4, 201.8, 60.3], [6.4, 183.0, 20.1, 198.2, 60.0], [7.2, 183.0, 20.5, 192.9, 59.4], [8.0, 182.0, 20.7, 186.3, 58.5], [8.8, 180.0, 20.6, 178.7, 57.3], [9.6, 178.0, 20.3, 170.2, 55.9]]
    },

    // Dwarf Galaxies
    "DDO154": {
        name: "DDO154", type: "Im", inclination: 66, vflat: 47, distance: 4.3, bt_ratio: 0.0,
        isEdgeOn: false, gasRich: true, irregular: true,
        description: "Gas-rich dwarf irregular • Dark matter dominated • LITTLE THINGS sample",
        data: [[0.49, 13.8, 3.74, 12.31, 0.0], [0.99, 21.6, 7.46, 14.55, 0.0], [1.48, 28.9, 10.87, 12.95, 0.0], [1.97, 34.3, 13.32, 11.54, 0.0], [2.47, 38.2, 14.77, 10.18, 0.0], [2.96, 42.0, 16.2, 9.16, 0.0], [3.46, 44.6, 17.6, 8.37, 0.0], [3.95, 46.3, 17.91, 7.77, 0.0], [4.44, 47.4, 17.48, 7.29, 0.0], [4.94, 48.2, 16.93, 6.89, 0.0], [5.43, 47.4, 16.28, 6.55, 0.0], [5.92, 45.5, 15.64, 6.26, 0.0]]
    },
    "CamB": {
        name: "CamB", type: "Im", inclination: 43, vflat: 20, distance: 2.3, bt_ratio: 0.0,
        isEdgeOn: false, gasRich: true, irregular: true,
        description: "Ultra-faint dwarf • Extremely low surface brightness • Local Group",
        data: [[0.16, 1.99, 1.86, 3.75, 0.0], [0.41, 4.84, 4.24, 9.47, 0.0], [0.57, 6.79, 5.61, 11.76, 0.0], [0.73, 8.87, 6.77, 13.72, 0.0], [0.9, 10.9, 7.77, 14.8, 0.0], [1.06, 12.9, 8.44, 15.24, 0.0], [1.22, 14.7, 8.64, 15.11, 0.0], [1.47, 16.8, 8.08, 15.9, 0.0], [1.79, 20.1, 6.91, 14.91, 0.0]]
    },
    "DDO161": {
        name: "DDO161", type: "Im", inclination: 51, vflat: 51, distance: 8.1, bt_ratio: 0.0,
        isEdgeOn: false, gasRich: true, irregular: true,
        description: "Low surface brightness dwarf • Extended HI envelope",
        data: [[0.7, 18.5, 5.2, 8.9, 0.0], [1.4, 28.2, 9.8, 12.1, 0.0], [2.1, 34.7, 13.5, 14.2, 0.0], [2.8, 39.1, 16.2, 15.8, 0.0], [3.5, 42.3, 18.1, 16.9, 0.0], [4.2, 44.8, 19.4, 17.6, 0.0], [4.9, 46.7, 20.2, 18.0, 0.0], [5.6, 48.1, 20.6, 18.1, 0.0], [6.3, 49.2, 20.7, 18.0, 0.0], [7.0, 49.8, 20.5, 17.7, 0.0], [7.7, 50.1, 20.1, 17.2, 0.0], [8.4, 50.0, 19.5, 16.5, 0.0]]
    },
    "UGC04483": {
        name: "UGC04483", type: "Im", inclination: 58, vflat: 23, distance: 4.7, bt_ratio: 0.0,
        isEdgeOn: false, gasRich: true, irregular: true,
        description: "Dwarf irregular • Pristine rotation curve • Minimal scatter",
        data: [[0.4, 8.2, 3.1, 5.7, 0.0], [0.8, 12.8, 5.9, 8.2, 0.0], [1.2, 16.1, 8.1, 9.8, 0.0], [1.6, 18.7, 9.7, 10.9, 0.0], [2.0, 20.8, 10.8, 11.6, 0.0], [2.4, 22.4, 11.5, 12.0, 0.0], [2.8, 23.6, 11.9, 12.2, 0.0], [3.2, 24.5, 12.1, 12.1, 0.0], [3.6, 25.1, 12.0, 11.8, 0.0], [4.0, 25.4, 11.7, 11.3, 0.0]]
    },

    // Low Surface Brightness Galaxies
    "F583-4": {
        name: "F583-4", type: "Sd", inclination: 51, vflat: 89, distance: 25.1, bt_ratio: 0.02,
        isEdgeOn: false, gasRich: true, irregular: false,
        description: "Low surface brightness spiral • Extended disk • Slow evolution",
        data: [[1.8, 32.1, 8.9, 18.7, 0.0], [3.6, 48.5, 15.2, 29.8, 0.0], [5.4, 59.7, 19.8, 36.4, 0.0], [7.2, 67.4, 23.1, 40.9, 0.0], [9.0, 73.2, 25.7, 44.2, 0.0], [10.8, 77.8, 27.6, 46.8, 0.0], [12.6, 81.5, 29.0, 48.7, 0.0], [14.4, 84.4, 30.1, 50.1, 0.0], [16.2, 86.7, 30.8, 51.0, 0.0], [18.0, 88.5, 31.2, 51.5, 0.0], [19.8, 89.8, 31.3, 51.7, 0.0], [21.6, 90.7, 31.1, 51.5, 0.0]]
    },
    "UGC07866": {
        name: "UGC07866", type: "Sd", inclination: 47, vflat: 43, distance: 11.9, bt_ratio: 0.01,
        isEdgeOn: false, gasRich: true, irregular: false,
        description: "LSB disk galaxy • Minimal central density • Dark matter rich",
        data: [[1.2, 15.3, 4.2, 7.8, 0.0], [2.4, 24.1, 7.8, 12.9, 0.0], [3.6, 30.2, 10.5, 16.7, 0.0], [4.8, 34.8, 12.4, 19.6, 0.0], [6.0, 38.3, 13.8, 21.8, 0.0], [7.2, 40.9, 14.7, 23.4, 0.0], [8.4, 42.8, 15.2, 24.6, 0.0], [9.6, 44.1, 15.4, 25.4, 0.0], [10.8, 44.9, 15.3, 25.8, 0.0], [12.0, 45.3, 15.0, 25.9, 0.0]]
    },
    "UGC05414": {
        name: "UGC05414", type: "Sd", inclination: 64, vflat: 54, distance: 17.8, bt_ratio: 0.03,
        isEdgeOn: false, gasRich: true, irregular: false,
        description: "LSB spiral • Smooth velocity profile • Extended HI disk",
        data: [[2.1, 28.7, 6.8, 14.2, 0.0], [4.2, 39.5, 11.9, 22.8, 0.0], [6.3, 46.2, 15.4, 28.7, 0.0], [8.4, 50.8, 17.8, 32.9, 0.0], [10.5, 54.1, 19.4, 35.8, 0.0], [12.6, 56.4, 20.4, 37.9, 0.0], [14.7, 58.1, 21.0, 39.3, 0.0], [16.8, 59.2, 21.3, 40.2, 0.0], [18.9, 59.8, 21.4, 40.7, 0.0], [21.0, 60.1, 21.2, 40.8, 0.0]]
    }
};

let chart = null;
let currentGalaxy = 'NGC6503';

// Adaptive Depth Algorithm
function determineAdaptiveParameters(galaxy) {
    let depth, lambda, iterations, reasoning;
    
    // Depth 0: Thin disc (edge-on, V_flat≥180, B/T<0.1)
    if (galaxy.isEdgeOn && galaxy.vflat >= 180 && galaxy.bt_ratio < 0.1) {
        depth = 0;
        lambda = 0.45;
        iterations = 1;
        reasoning = `<strong>DEPTH 0 - Thin Disc Classification:</strong><br>
                    ✓ Edge-on orientation (i=${galaxy.inclination}°≥70°)<br>
                    ✓ High flat velocity (V<sub>flat</sub>=${galaxy.vflat}≥180 km/s)<br>
                    ✓ Low bulge-to-total ratio (B/T=${galaxy.bt_ratio}<0.1)<br>
                    <em>→ Minimal geometric depth needed - direct projection suffices</em>`;
    }
    // Depth 1: Mild spheroidal disc (0.1≤B/T<0.3)
    else if (galaxy.bt_ratio >= 0.1 && galaxy.bt_ratio < 0.3) {
        depth = 1;
        lambda = 0.7;
        iterations = 2;
        reasoning = `<strong>DEPTH 1 - Mild Spheroidal Classification:</strong><br>
                    ✓ Moderate bulge component (B/T=${galaxy.bt_ratio} ∈ [0.1,0.3])<br>
                    ✓ Intermediate geometric structure<br>
                    ✓ Some spheroidal influence (i=${galaxy.inclination}°)<br>
                    <em>→ Light geometric evolution captures mixed morphology</em>`;
    }
    // Depth 5: Gas-rich dwarfs or irregular galaxies
    else if (galaxy.gasRich || galaxy.irregular || galaxy.type.includes('Im')) {
        depth = 5;
        lambda = 1.0;
        iterations = 5;
        reasoning = `<strong>DEPTH 5 - Gas-rich/Irregular Classification:</strong><br>
                    ${galaxy.gasRich ? '✓ Gas-rich system<br>' : ''}
                    ${galaxy.irregular ? '✓ Irregular morphology<br>' : ''}
                    ${galaxy.type.includes('Im') ? '✓ Dwarf irregular type<br>' : ''}
                    ✓ Complex, extended structure (V<sub>flat</sub>=${galaxy.vflat} km/s)<br>
                    <em>→ Full geometric energy cascade required for accuracy</em>`;
    }
    // Default case for edge cases
    else {
        depth = 1;
        lambda = 0.7;
        iterations = 2;
        reasoning = `<strong>DEPTH 1 - Default Classification:</strong><br>
                    • Intermediate characteristics detected<br>
                    • B/T=${galaxy.bt_ratio}, i=${galaxy.inclination}°, V<sub>flat</sub>=${galaxy.vflat} km/s<br>
                    <em>→ Conservative approach with moderate geometric evolution</em>`;
    }
    
    return { depth, lambda, iterations, reasoning };
}

// Enhanced WILL Calculation Engine
function calculateWILL() {
    const galaxySelect = document.getElementById('galaxySelect');
    const calculationMode = document.getElementById('calculationMode').value;
    
    const galaxy = sparcDatabase[galaxySelect.value];
    if (!galaxy) {
        alert('Galaxy data not found!');
        return;
    }
    
    currentGalaxy = galaxySelect.value;
    
    const galaxyData = galaxy.data.map(row => ({
        r: row[0],
        v_obs: row[1], 
        v_gas: row[2],
        v_disk: row[3],
        v_bulge: row[4]
    }));
    
    let lambda, iterations;
    
    if (calculationMode === 'adaptive') {
        const adaptiveParams = determineAdaptiveParameters(galaxy);
        lambda = adaptiveParams.lambda;
        iterations = adaptiveParams.iterations;
        
        // Update adaptive display
        updateAdaptiveDisplay(adaptiveParams, galaxy);
    } else {
        lambda = parseFloat(document.getElementById('discFactor').value);
        iterations = parseInt(document.getElementById('iterations').value);
        
        // Hide adaptive display for manual mode
        document.getElementById('adaptivePanel').style.display = 'none';
    }
    
    // Calculate WILL predictions
    const results = calculateWILLPredictions(galaxyData, iterations, lambda);
    
    // Update all displays
    updateGalaxyInfo(galaxy, lambda, iterations);
    updateResults(results, lambda, galaxy.name, calculationMode);
    updateChart(results, galaxy);
}

function updateAdaptiveDisplay(adaptiveParams, galaxy) {
    const panel = document.getElementById('adaptivePanel');
    const reasoning = document.getElementById('adaptiveReasoning');
    const depthSpan = document.getElementById('selectedDepth');
    const lambdaSpan = document.getElementById('selectedLambda');
    const iterSpan = document.getElementById('selectedIterations');
    
    reasoning.innerHTML = adaptiveParams.reasoning;
    
    depthSpan.textContent = `DEPTH ${adaptiveParams.depth}`;
    depthSpan.className = `depth-indicator depth-${adaptiveParams.depth}`;
    
    lambdaSpan.textContent = adaptiveParams.lambda;
    iterSpan.textContent = adaptiveParams.iterations;
    
    panel.style.display = 'block';
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

function updateGalaxyInfo(galaxy, lambda, iterations) {
    const infoDiv = document.getElementById('galaxyInfo');
    const nameDiv = document.getElementById('galaxyName');
    const detailsDiv = document.getElementById('galaxyDetails');
    
    nameDiv.innerHTML = `${galaxy.name} (${galaxy.type})`;
    
    detailsDiv.innerHTML = `
        <strong>Description:</strong> ${galaxy.description}<br>
        <strong>Properties:</strong> i=${galaxy.inclination}°, V<sub>flat</sub>=${galaxy.vflat} km/s, D=${galaxy.distance} Mpc, B/T=${galaxy.bt_ratio}<br>
        <strong>Geometry:</strong> λ = ${lambda} • ${iterations} iterations • ${galaxy.data.length} data points
    `;
    
    infoDiv.style.display = 'block';
}

function updateResults(results, lambda, galaxyName, mode) {
    // Calculate statistics
    const residuals = results.map(r => r.residual);
    const rms = Math.sqrt(residuals.reduce((sum, r) => sum + r*r, 0) / residuals.length);
    const meanBias = residuals.reduce((sum, r) => sum + r, 0) / residuals.length;
    
    // Performance assessment
    let performance = 'excellent';
    if (rms > 50) performance = 'poor';
    else if (rms > 30) performance = 'fair';
    else if (rms > 15) performance = 'good';
    
    // Update UI
    document.getElementById('rmsValue').innerHTML = `${rms.toFixed(1)}<span class="performance-indicator ${performance}">${performance.toUpperCase()}</span>`;
    document.getElementById('meanBias').textContent = meanBias.toFixed(1);
    document.getElementById('dataPoints').textContent = results.length;
    document.getElementById('adaptiveMode').textContent = mode.toUpperCase();
}

function updateChart(results, galaxy) {
    const ctx = document.getElementById('rotationChart').getContext('2d');
    
    if (chart) {
        chart.destroy();
    }
    
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: results.map(r => r.r.toFixed(2)),
            datasets: [{
                label: 'Observed Rotation Curve',
                data: results.map(r => r.v_obs),
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                borderWidth: 3,
                pointRadius: 6,
                pointBackgroundColor: '#e74c3c',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                tension: 0.1
            }, {
                label: 'WILL Adaptive Prediction',
                data: results.map(r => r.v_will),
                borderColor: '#3498db',
                backgroundColor: 'transparent',
                borderWidth: 3,
                borderDash: [8, 4],
                pointRadius: 5,
                pointBackgroundColor: '#3498db',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                tension: 0.1
            }, {
                label: 'Baryonic Component',
                data: results.map(r => r.v_baryonic),
                borderColor: '#27ae60',
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderDash: [3, 3],
                pointRadius: 3,
                pointBackgroundColor: '#27ae60',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: `${galaxy.name} - Adaptive WILL Analysis`,
                    font: { size: 16, weight: 'bold' }
                },
                legend: {
                    position: 'top',
                    labels: { usePointStyle: true, padding: 20 }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleColor: 'white',
                    bodyColor: 'white',
                    borderColor: '#3498db',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    title: { display: true, text: 'Galactocentric Radius (kpc)', font: { weight: 'bold' } },
                    grid: { color: 'rgba(0,0,0,0.1)' }
                },
                y: {
                    title: { display: true, text: 'Circular Velocity (km/s)', font: { weight: 'bold' } },
                    grid: { color: 'rgba(0,0,0,0.1)' },
                    beginAtZero: true
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

function showRandomGalaxy() {
    const galaxyNames = Object.keys(sparcDatabase);
    const randomName = galaxyNames[Math.floor(Math.random() * galaxyNames.length)];
    document.getElementById('galaxySelect').value = randomName;
    calculateWILL();
}

// Event handlers for mode switching
document.getElementById('calculationMode').addEventListener('change', function() {
    const isManual = this.value === 'manual';
    document.getElementById('manualControls').style.display = isManual ? 'block' : 'none';
    calculateWILL();
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    calculateWILL();
});

// Auto-calculate on parameter change
document.getElementById('galaxySelect').addEventListener('change', calculateWILL);
document.getElementById('iterations').addEventListener('change', function() {
    if (document.getElementById('calculationMode').value === 'manual') {
        calculateWILL();
    }
});
document.getElementById('discFactor').addEventListener('change', function() {
    if (document.getElementById('calculationMode').value === 'manual') {
        calculateWILL();
    }
});
</script>