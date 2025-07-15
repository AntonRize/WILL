---
layout: default
title: "Galactic Dynamics Calculator"
---

<div class="markdown-content py-8">
  <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-4">Galactic Dynamics Calculator</h1>
  <div class="bg-gray-800/50 p-6 rounded-lg mb-8">
    <h2 class="text-xl font-bold text-cyan-400 mb-2">The WILL Predictive Model</h2>
    <p class="text-gray-200 mb-2">
      This calculator implements the final, simplified WILL model for galactic rotation curves. It posits that the observed velocity ($V_{WILL}$) is a combination of the classical gravitational effect of baryons ($V_{classic}$) and a non-local geometric term derived from the cumulative kinetic energy of the system.
    </p>
    <div class="formula-box bg-gray-900 text-cyan-200 rounded p-4 my-4 text-center text-lg">
      $$ V_{WILL}^{2}(r) = \left[ V_{gas}^{2} + \Upsilon_* (V_{disk}^{2} + V_{bulge}^{2}) \right] + \frac{\lambda}{r}\int_{0}^{r}\left[ V_{gas}^{2} + \Upsilon_* (V_{disk}^{2} + V_{bulge}^{2}) \right]dr' $$
    </div>
  </div>

  <div id="loader" class="text-center text-lg text-gray-400 py-8">Loading SPARC Database...</div>

  <div id="calculator-body" style="display: none;">
    <div class="grid md:grid-cols-3 gap-6 mb-6">
      <div class="flex flex-col bg-gray-800/50 p-4 rounded-lg">
        <label for="galaxy-select" class="text-gray-300 font-semibold mb-2">Select Galaxy:</label>
        <select id="galaxy-select" class="bg-gray-900 text-cyan-200 border border-gray-700 rounded p-2 focus:ring-cyan-500 focus:border-cyan-500"></select>
      </div>
      <div class="flex flex-col bg-gray-800/50 p-4 rounded-lg">
        <label for="lambda-slider" class="text-gray-300 font-semibold mb-2">Geometric Factor (λ): <span id="lambda-value" class="font-bold text-cyan-400">4.00</span></label>
        <input type="range" id="lambda-slider" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" min="0.1" max="8.0" step="0.01" value="4.0">
      </div>
      <div class="flex flex-col bg-gray-800/50 p-4 rounded-lg">
        <label for="ystar-slider" class="text-gray-300 font-semibold mb-2">Stellar M/L Ratio (Y*): <span id="ystar-value" class="font-bold text-cyan-400">0.25</span></label>
        <input type="range" id="ystar-slider" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" min="0.1" max="2.0" step="0.01" value="0.25">
      </div>
    </div>
    <div class="flex items-center gap-2 bg-gray-900/50 p-3 rounded mb-6">
      <input type="checkbox" id="unified-model-checkbox" checked class="mr-2">
      <label for="unified-model-checkbox" class="text-gray-200">Enforce Unified Model ($Y_* = 1/\lambda$)</label>
    </div>
    <div id="results" class="text-center text-lg font-bold text-cyan-300 mb-6"></div>
    <div class="bg-gray-800/50 p-4 rounded-lg mb-8">
      <h3 class="text-lg font-semibold text-white text-center mb-2">Overall Rotation Curve</h3>
      <div id="plot-div" class="w-full h-[400px] bg-gray-900 rounded"></div>
    </div>
    <div class="bg-gray-800/50 p-4 rounded-lg">
      <h3 class="text-lg font-semibold text-white text-center mb-2">Baryonic Component Breakdown</h3>
      <div id="plot-div-components" class="w-full h-[400px] bg-gray-900 rounded"></div>
    </div>
  </div>
</div>

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script>
const URL_TABLE1 = 'https://raw.githubusercontent.com/AntonRize/WILL/refs/heads/main/SPARC%20DATA/table1.dat';
const URL_TABLE2 = 'https://raw.githubusercontent.com/AntonRize/WILL/refs/heads/main/SPARC%20DATA/table2.dat';
let galaxyData = {};
let loader, calculatorBody, galaxySelect, lambdaSlider, ystarSlider, lambdaValueSpan, ystarValueSpan, unifiedCheckbox, resultsDiv, plotDiv, plotDivComponents;

function getElements() {
  loader = document.getElementById('loader');
  calculatorBody = document.getElementById('calculator-body');
  galaxySelect = document.getElementById('galaxy-select');
  lambdaSlider = document.getElementById('lambda-slider');
  ystarSlider = document.getElementById('ystar-slider');
  lambdaValueSpan = document.getElementById('lambda-value');
  ystarValueSpan = document.getElementById('ystar-value');
  unifiedCheckbox = document.getElementById('unified-model-checkbox');
  resultsDiv = document.getElementById('results');
  plotDiv = document.getElementById('plot-div');
  plotDivComponents = document.getElementById('plot-div-components');
}

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

function updateAll() {
  const selectedGalaxy = galaxySelect.value;
  if (!selectedGalaxy) return;
  let lambda = parseFloat(lambdaSlider.value);
  let yStar = parseFloat(ystarSlider.value);
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
  resultsDiv.textContent = `Model RMSE: ${rmse.toFixed(2)} km/s`;
  const plotLayout = {
    xaxis: { title: 'Radius (kpc)', gridcolor: '#374151', zerolinecolor: '#64748b', color: '#e0e7ef' },
    yaxis: { title: 'Velocity (km/s)', gridcolor: '#374151', zerolinecolor: '#64748b', color: '#e0e7ef', range: [0, Math.max(...obs_v, ...v_will) * 1.1] },
    legend: { x: 0.05, y: 0.95, bgcolor: 'rgba(17,24,39,0.9)', bordercolor: '#334155', borderwidth: 1, orientation: 'h', font: {color: '#e0e7ef'} },
    margin: { l: 60, r: 30, b: 50, t: 60 },
    paper_bgcolor: 'rgba(17,24,39,1)',
    plot_bgcolor: '#1e293b'
  };
  Plotly.newPlot(plotDiv, [
    { x: obs_rad, y: obs_v, mode: 'markers', type: 'scatter', name: 'Observed (Vobs)', marker: { color: '#fbbf24', size: 8, symbol: 'circle' } },
    { x: rad, y: v_bary, mode: 'lines', type: 'scatter', name: 'Classical Baryonic (Vbary)', line: { color: '#38bdf8', width: 2.5, dash: 'dash' } },
    { x: rad, y: v_will, mode: 'lines', type: 'scatter', name: 'Predicted (V_WILL)', line: { color: '#f472b6', width: 4 } }
  ], { ...plotLayout, title: { text: `Rotation Curve for ${selectedGalaxy}`, font: { size: 20, color: '#e0e7ef' } } });
  Plotly.newPlot(plotDivComponents, [
    { x: obs_rad, y: obs_v, mode: 'markers', type: 'scatter', name: 'Observed', marker: { color: '#fbbf24', size: 6, symbol: 'circle-open' } },
    { x: rad, y: components.v_gas, mode: 'lines', type: 'scatter', name: 'Gas', line: { color: '#22d3ee', width: 2.5 } },
    { x: rad, y: components.v_disk_scaled, mode: 'lines', type: 'scatter', name: 'Disk (scaled by Y*)', line: { color: '#818cf8', width: 2.5 } },
    { x: rad, y: components.v_bulge_scaled, mode: 'lines', type: 'scatter', name: 'Bulge (scaled by Y*)', line: { color: '#facc15', width: 2.5 } }
  ], { ...plotLayout, title: { text: `Baryonic Components for ${selectedGalaxy}`, font: { size: 20, color: '#e0e7ef' } } });
}

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

document.addEventListener('DOMContentLoaded', () => {
  getElements();
  loadData();
  galaxySelect.addEventListener('change', updateAll);
  lambdaSlider.addEventListener('input', handleLambdaChange);
  ystarSlider.addEventListener('input', handleYstarChange);
  unifiedCheckbox.addEventListener('change', handleLambdaChange);
});
</script>
