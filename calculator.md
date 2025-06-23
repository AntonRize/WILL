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
// [INSERT THE FULL CALCULATOR JAVASCRIPT HERE]
// I'll provide this in the next step to avoid making this too long
</script>