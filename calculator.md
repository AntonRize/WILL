---
layout: default
title: "Galactic Dynamics Calculator"
---

<div class="markdown-content py-8">
  <h1 class="text-4xl font-extrabold tracking-tight">
    Galactic Dynamics Calculator
  </h1>

  <p class="mt-4 text-lg text-gray-400">
    Predict galactic rotation curves using the WILL model without dark
    matter. It posits that the observed velocity ($V_{WILL}$) is a
    combination of the classical gravitational effect of baryons
    ($V_{classic}$) and a non-local geometric term derived from the
    cumulative kinetic energy of the system.
  </p>

  <!-- ============= 1. EDITABLE EQUATION ============= -->
  <h2 class="text-3xl font-bold mt-10">The WILL Predictive Model</h2>
  <div class="formula-box">
    <label
      for="equation-input"
      class="block mb-2 text-gray-300"
      >Editable Equation (LaTeX):</label
    >
    <textarea
      id="equation-input"
      rows="3"
      class="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
    >
V_{WILL}^{2}(r) = a \left[ V_{gas}^{2} + \Upsilon_* (V_{disk}^{2} + V_{bulge}^{2}) \right] + \frac{b \lambda}{r} \int_{0}^{r} \left[ V_{gas}^{2} + \Upsilon_* (V_{disk}^{2} + V_{bulge}^{2}) \right] dr
    </textarea>
    <div id="equation-preview" class="mt-4"></div>
  </div>

  <!-- ============= 2. GALAXY-TYPE FILTER UI ============= -->
  <div id="type-filter" class="bg-gray-800/50 p-4 rounded-lg mb-4">
    <h4 class="text-lg font-bold text-gray-200 mb-2">
      Filter by Galaxy Type:
    </h4>
    <div id="type-checkboxes" class="flex flex-wrap gap-4 text-gray-300"></div>
    <button
      id="analyze-types-btn"
      class="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
    >
      Analyze RMSE by Type
    </button>
  </div>

  <div
    id="type-plot"
    class="bg-gray-800/50 p-4 rounded-lg mb-4"
    style="display: none"
  >
    <div id="rmse-histogram"></div>
  </div>

  <!-- ============= 3. MAIN CALCULATOR ============= -->
  <div class="calculator-container bg-gray-800/50 p-6 rounded-lg">
    <div id="loader">Loading SPARC Database...</div>

    <div id="calculator-body" style="display: none">
      <!-- Controls -->
      <div class="controls-grid">
        <div class="control-group">
          <label for="galaxy-select">Select Galaxy:</label>
          <select id="galaxy-select" class="form-control"></select>
        </div>

        <div class="control-group">
          <label
            for="lambda-slider"
            >Geometric Factor (λ):
            <span id="lambda-value" class="param-display">4.00</span></label
          >
          <input
            type="range"
            id="lambda-slider"
            class="form-range"
            min="0.1"
            max="8.0"
            step="0.01"
            value="4.0"
          />
        </div>

        <div class="control-group">
          <label
            for="ystar-slider"
            >Stellar M/L Ratio (Y*):
            <span id="ystar-value" class="param-display">0.25</span></label
          >
          <input
            type="range"
            id="ystar-slider"
            class="form-range"
            min="0.1"
            max="2.0"
            step="0.01"
            value="0.25"
          />
        </div>

        <!-- NEW: a & b multipliers -->
        <div class="control-group">
          <label for="a-factor">Multiplier a:</label>
          <input
            type="number"
            id="a-factor"
            value="1"
            step="0.01"
            class="form-control"
          />
        </div>
        <div class="control-group">
          <label for="b-factor">Multiplier b:</label>
          <input
            type="number"
            id="b-factor"
            value="1"
            step="0.01"
            class="form-control"
          />
        </div>
      </div>

      <div
        id="galaxy-info"
        class="bg-gray-800/50 p-4 rounded-lg mb-4"
      ></div>

      <div class="unified-model">
        <input type="checkbox" id="unified-model-checkbox" checked />
        <label for="unified-model-checkbox"
          >Enforce Unified Model ($Y_* = 1/\lambda$)</label
        >
        <button id="reset-defaults-btn">Reset Defaults</button>
      </div>

      <div id="results"></div>
      <div id="warning" class="warning"></div>

      <!-- Plots side-by-side -->
      <div class="plot-wrapper">
        <div class="plot-box"><div id="plot-div"></div></div>
        <div class="plot-box"><div id="plot-div-components"></div></div>
      </div>
    </div>
  </div>
</div>

<!-- ============= 4. EXTERNAL LIBS ============= -->
<script src="https://cdn.tailwindcss.com"></script>
<script
  type="text/javascript"
  id="MathJax-script"
  async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
></script>
<script src="https://cdn.plot.ly/plotly-2.32.0.min.js"></script>

<!-- ============= 5. STYLES ============= -->
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
    background-color: rgba(31, 41, 55, 0.5);
    border-radius: 15px;
    padding: 30px 40px;
    margin: 20px auto;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
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

  .form-control,
  .form-range {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #4b5563;
    background-color: #374151;
    color: #d1d5db;
    box-sizing: border-box;
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
  }

  #results {
    text-align: center;
    font-size: 1.25em;
    font-weight: bold;
    margin: 20px 0 25px;
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

  /* New plot layout */
  .plot-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 25px;
    padding-top: 25px;
    border-top: 1px solid #4b5563;
    justify-content: center;
  }

  .plot-box {
    flex: 1 1 45%;
    min-width: 350px;
    max-width: 600px;
    height: 500px;
    border-radius: 8px;
    background-color: #1f2937;
    position: relative;
  }

  #loader {
    text-align: center;
    font-size: 1.5em;
    padding: 50px;
    color: #9ca3af;
  }
</style>

<!-- ============= 6. SCRIPT ============= -->
<script>
  /* ---------- CONFIG ---------- */
  const URL_TABLE1 =
    "https://raw.githubusercontent.com/AntonRize/WILL/main/SPARC%20DATA/table1.dat";
  const URL_TABLE2 =
    "https://raw.githubusercontent.com/AntonRize/WILL/main/SPARC%20DATA/table2.dat";

  /* ---------- GLOBALS ---------- */
  let galaxyData = {};
  let galaxyMeta = {};

  const defaultValues = { lambda: 4.0, yStar: 0.25 };
  const hubbleTypes = [
    "S0",
    "Sa",
    "Sab",
    "Sb",
    "Sbc",
    "Sc",
    "Scd",
    "Sd",
    "Sdm",
    "Sm",
    "Im",
    "BCD",
  ];
  const distMethods = {
    1: "Hubble Flow",
    2: "Tip of the Red Giant Branch",
    3: "Cepheids",
    4: "Ursa Major Cluster",
    5: "Supernova",
  };

  /* ---------- DOM ---------- */
  const loader = document.getElementById("loader");
  const calculatorBody = document.getElementById("calculator-body");
  const galaxySelect = document.getElementById("galaxy-select");
  const lambdaSlider = document.getElementById("lambda-slider");
  const ystarSlider = document.getElementById("ystar-slider");
  const lambdaValueSpan = document.getElementById("lambda-value");
  const ystarValueSpan = document.getElementById("ystar-value");
  const unifiedCheckbox = document.getElementById("unified-model-checkbox");
  const resultsDiv = document.getElementById("results");
  const warningDiv = document.getElementById("warning");
  const plotDiv = document.getElementById("plot-div");
  const plotDivComponents = document.getElementById("plot-div-components");
  const galaxyInfoDiv = document.getElementById("galaxy-info");
  const resetBtn = document.getElementById("reset-defaults-btn");

  /* ---------- LOAD DATA ---------- */
  async function loadData() {
    try {
      const [t1Res, t2Res] = await Promise.all([
        fetch(URL_TABLE1),
        fetch(URL_TABLE2),
      ]);
      if (!t1Res.ok || !t2Res.ok)
        throw new Error("Failed to fetch SPARC tables.");

      const t1Text = await t1Res.text();
      const t2Text = await t2Res.text();

      /* Parse table1.dat (metadata) */
      t1Text
        .trim()
        .split("\n")
        .forEach((line) => {
          if (line.startsWith("#")) return;
          const name = line.substring(0, 11).trim();
          const rest = line.substring(11).trim().split(/\s+/);
          if (rest.length < 18) return;
          galaxyMeta[name] = {
            Name: name,
            Type: +rest[0],
            Dist: +rest[1],
            Dist_err: +rest[2],
            f_Dist: +rest[3],
            Inc: +rest[4],
            Inc_err: +rest[5],
            L36: +rest[6],
            L36_err: +rest[7],
            Reff: +rest[8],
            SBeff: +rest[9],
            Rdisk: +rest[10],
            SBdisk: +rest[11],
            MHI: +rest[12],
            RHI: +rest[13],
            Vflat: +rest[14],
            Vflat_err: +rest[15],
            Qual: +rest[16],
            Ref: rest[17],
          };
        });

      /* Parse table2.dat (rotation-curve data) */
      t2Text
        .trim()
        .split("\n")
        .forEach((line) => {
          if (line.startsWith("#")) return;
          const p = line.trim().split(/\s+/);
          if (p.length < 8) return;
          const row = {
            Name: p[0],
            Dist: +p[1],
            Rad: +p[2],
            Vobs: +p[3],
            Vobs_err: +p[4],
            Vgas: +p[5],
            Vdisk: +p[6],
            Vbul: +p[7],
          };
          (galaxyData[row.Name] ||= []).push(row);
        });

      /* Populate selector */
      Object.keys(galaxyData)
        .sort()
        .forEach((name) => {
          if (galaxyData[name].length < 3) return;
          const opt = document.createElement("option");
          opt.value = name;
          opt.textContent = name;
          galaxySelect.appendChild(opt);
        });

      loader.style.display = "none";
      calculatorBody.style.display = "block";
      galaxySelect.selectedIndex = 0;
      updateGalaxyInfo();
      updateAll();
    } catch (err) {
      loader.textContent = "Error loading data.";
      console.error(err);
    }
  }

  /* ---------- PHYSICS ---------- */
  function calculateWillVelocity(galaxyName, lambda, yStar) {
    const a = parseFloat(document.getElementById("a-factor").value) || 1;
    const b = parseFloat(document.getElementById("b-factor").value) || 1;

    const data = galaxyData[galaxyName].sort((x, y) => x.Rad - y.Rad);
    const rad = data.map((d) => d.Rad);

    const v_gas = data.map((d) => d.Vgas);
    const v_disk_scaled = data.map((d) =>
      Math.sqrt(yStar) * Math.abs(d.Vdisk)
    );
    const v_bulge_scaled = data.map((d) =>
      Math.sqrt(yStar) * Math.abs(d.Vbul)
    );

    const v_bary_sq = data.map(
      (d) => d.Vgas ** 2 + yStar * (d.Vdisk ** 2 + d.Vbul ** 2)
    );

    /* Trapezoidal integral of v_bary_sq */
    const integral = [0];
    for (let i = 1; i < rad.length; i++) {
      const dx = rad[i] - rad[i - 1];
      const dyAvg = (v_bary_sq[i] + v_bary_sq[i - 1]) / 2;
      integral.push(integral[i - 1] + dyAvg * dx);
    }

    const geom_term = integral.map((val, i) =>
      rad[i] > 0 ? (b * lambda * val) / rad[i] : 0
    );

    const v_will_sq = v_bary_sq.map((val, i) => a * val + geom_term[i]);
    const v_will = v_will_sq.map((v) => Math.sqrt(Math.max(0, v)));
    const v_bary = v_bary_sq.map((v) => Math.sqrt(Math.max(0, v)));

    return {
      rad,
      v_bary,
      v_will,
      components: { v_gas, v_disk_scaled, v_bulge_scaled },
    };
  }

  function calculateRMSE(obs, pred) {
    return Math.sqrt(
      obs.reduce((s, v, i) => s + (v - pred[i]) ** 2, 0) / obs.length
    );
  }

  /* ---------- UPDATE UI & PLOTS ---------- */
  function updateAll() {
    const name = galaxySelect.value;
    if (!name) return;

    let lambda = +lambdaSlider.value;
    let yStar = +ystarSlider.value;
    if (unifiedCheckbox.checked && lambda > 0) {
      yStar = 1 / lambda;
      ystarSlider.value = yStar;
    }

    lambdaValueSpan.textContent = lambda.toFixed(2);
    ystarValueSpan.textContent = yStar.toFixed(2);

    const obsData = galaxyData[name];
    const obs_rad = obsData.map((d) => d.Rad);
    const obs_v = obsData.map((d) => d.Vobs);

    const { rad, v_bary, v_will, components } = calculateWillVelocity(
      name,
      lambda,
      yStar
    );
    const rmse = calculateRMSE(obs_v, v_will);
    resultsDiv.textContent = `Model RMSE: ${rmse.toFixed(2)} km/s`;

    const plotLayout = {
      xaxis: {
        title: "Radius (kpc)",
        color: "#d1d5db",
        gridcolor: "#4b5563",
      },
      yaxis: {
        title: "Velocity (km/s)",
        color: "#d1d5db",
        gridcolor: "#4b5563",
        range: [0, Math.max(...obs_v, ...v_will) * 1.1],
      },
      legend: {
        orientation: "h",
        bgcolor: "rgba(31,41,55,0.9)",
        font: { color: "#d1d5db" },
      },
      margin: { l: 60, r: 30, b: 50, t: 60 },
      paper_bgcolor: "transparent",
      plot_bgcolor: "#1f2937",
      font: { color: "#d1d5db" },
    };

    Plotly.react(
      plotDiv,
      [
        {
          x: obs_rad,
          y: obs_v,
          mode: "markers",
          name: "Observed",
          marker: { color: "#d1d5db", size: 8 },
        },
        {
          x: rad,
          y: v_bary,
          mode: "lines",
          name: "Classical Baryonic",
          line: { color: "#9ca3af", dash: "dash" },
        },
        {
          x: rad,
          y: v_will,
          mode: "lines",
          name: "Predicted (WILL)",
          line: { color: "#67e8f9", width: 4 },
        },
      ],
      { ...plotLayout, title: `Rotation Curve for ${name}` }
    );

    Plotly.react(
      plotDivComponents,
      [
        {
          x: obs_rad,
          y: obs_v,
          mode: "markers",
          name: "Observed",
          marker: { color: "#9ca3af", size: 6, symbol: "circle-open" },
        },
        {
          x: rad,
          y: components.v_gas,
          mode: "lines",
          name: "Gas",
          line: { color: "#10b981" },
        },
        {
          x: rad,
          y: components.v_disk_scaled,
          mode: "lines",
          name: "Disk × Y*",
          line: { color: "#3b82f6" },
        },
        {
          x: rad,
          y: components.v_bulge_scaled,
          mode: "lines",
          name: "Bulge × Y*",
          line: { color: "#f59e0b" },
        },
      ],
      { ...plotLayout, title: `Baryonic Components for ${name}` }
    );
  }

  function updateGalaxyInfo() {
    const meta = galaxyMeta[galaxySelect.value];
    if (!meta) return (galaxyInfoDiv.textContent = "");
    galaxyInfoDiv.innerHTML = `
      <p><strong>Hubble Type:</strong> ${meta.Type} (${
      hubbleTypes[meta.Type] || "?"
    })</p>
      <p><strong>Distance:</strong> ${meta.Dist.toFixed(
        2
      )} ± ${meta.Dist_err.toFixed(2)} Mpc (${
      distMethods[meta.f_Dist] || "?"
    })</p>
      <p><strong>Inclination:</strong> ${meta.Inc.toFixed(
        1
      )}° ± ${meta.Inc_err.toFixed(1)}°</p>
      <p><strong>Total Luminosity:</strong> ${meta.L36.toFixed(3)} ± ${meta.L36_err.toFixed(
      3
    )} G&nbsp;L☉</p>
      <p><strong>V_flat:</strong> ${meta.Vflat.toFixed(
        1
      )} ± ${meta.Vflat_err.toFixed(1)} km/s</p>
      <p><strong>RC Quality:</strong> ${meta.Qual}</p>
    `;
  }

  /* ---------- GALAXY-TYPE HISTOGRAM ---------- */
  function initGalaxyTypeCheckboxes() {
    const container = document.getElementById("type-checkboxes");
    hubbleTypes.forEach((type, idx) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="checkbox" value="${idx}" checked /> ${type}`;
      label.className = "flex items-center space-x-1";
      container.appendChild(label);
    });
  }

  async function analyzeSelectedTypes() {
    const types = Array.from(
      document.querySelectorAll("#type-checkboxes input:checked")
    ).map((cb) => +cb.value);
    if (!types.length) return;
  const selectedNames = selectedIDs.map(id => hubbleTypes[id]);
    const rmseVals = [];

    for (const name in galaxyData) {
      const meta = galaxyMeta[name];
      if (!meta || !types.includes(meta.Type)) continue;

      const lambda = +lambdaSlider.value || 4;
      let yStar = +ystarSlider.value || 0.25;
      if (unifiedCheckbox.checked && lambda > 0) yStar = 1 / lambda;

      const obs = galaxyData[name].map((d) => d.Vobs);
      const pred = calculateWillVelocity(name, lambda, yStar).v_will;
      rmseVals.push(calculateRMSE(obs, pred));
    }

      plotRMSEHistogram(rmseValues, selectedNames); 
  }

  function plotRMSEHistogram(rmseArray, typeNames = []) {
  if (!rmseArray.length) return;

  // quick stats
  const mean = rmseArray.reduce((s, v) => s + v, 0) / rmseArray.length;
  const N    = rmseArray.length;

  const layout = {
    title: 'RMSE Distribution of Selected Galaxy Types',
    xaxis: { title: 'RMSE (km/s)', color: '#d1d5db', gridcolor: '#4b5563' },
    yaxis: { title: 'Number of Galaxies', color: '#d1d5db', gridcolor: '#4b5563' },
    paper_bgcolor: 'transparent',
    plot_bgcolor : '#1f2937',
    font: { color: '#d1d5db' },
    margin: { l: 60, r: 30, b: 60, t: 80 },

    // 📌 NEW annotation block
    annotations: [{
      text:
        `Types: <b>${typeNames.join(', ') || 'all'}</b><br>` +
        `N = ${N},  Mean RMSE = ${mean.toFixed(2)} km/s`,
      xref: 'paper', yref: 'paper',
      x: 0.5, y: 1.15, showarrow: false,
      font: { size: 14, color: '#d1d5db' },
      align: 'center'
    }]
  };

  Plotly.newPlot(
    'rmse-histogram',
    [{
      x: rmseArray,
      type: 'histogram',
      marker: { color: '#3b82f6' },
      nbinsx: 20
    }],
    layout
  );
  document.getElementById('type-plot').style.display = 'block';
}

  /* ---------- EVENT LISTENERS ---------- */
  galaxySelect.addEventListener("change", () => {
    updateGalaxyInfo();
    updateAll();
  });
  lambdaSlider.addEventListener("input", () => {
    if (unifiedCheckbox.checked) ystarSlider.value = 1 / +lambdaSlider.value;
    updateAll();
  });
  ystarSlider.addEventListener("input", () => {
    if (unifiedCheckbox.checked) lambdaSlider.value = 1 / +ystarSlider.value;
    updateAll();
  });
  unifiedCheckbox.addEventListener("change", updateAll);
  resetBtn.addEventListener("click", () => {
    lambdaSlider.value = defaultValues.lambda;
    ystarSlider.value = defaultValues.yStar;
    updateAll();
  });

  document
    .getElementById("equation-input")
    .addEventListener("input", () => {
      const latex = document.getElementById("equation-input").value;
      document.getElementById("equation-preview").innerHTML = `$$${latex}$$`;
      MathJax.typeset();
    });

  document
    .getElementById("analyze-types-btn")
    .addEventListener("click", analyzeSelectedTypes);

  /* ---------- INITIALIZATION ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    loadData();
    initGalaxyTypeCheckboxes();
  });
</script>
