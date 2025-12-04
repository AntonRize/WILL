---
layout: default
title: "Galactic Dynamics Calculator"
---

{% include interactive/galaxy_zoo.html %}

<div class="markdown-content py-8">
  <h1 class="text-4xl font-extrabold tracking-tight">Galactic Dynamics Calculator</h1>

  <p class="mt-4 text-lg text-gray-400">
    <b>Update (Q √3 law):</b> After extensive testing, the integral-based model collapses to a remarkably simple law connecting the relational displacement vector Q² = β² + κ² to the galactic dynamics and does not require to speculate any dark entity's.:
    <span class="font-mono">V<sub>Q</sub>(r) = √3 · V<sub>bary</sub>(r)</span>.
    Rotation curves are computed with a single control — the stellar mass-to-light ratio <span class="font-mono">Υ*</span>.
    <span class="block mt-2">All plots and metrics on this page use the <b>SPARC</b> database.</span>
    <span class="block mt-2">The detailed "WILL Relational Galactic Dynamics" paper is in development.</span>
  </p>

  <div class="rounded-xl p-4 mt-4 border border-gray-700 bg-gray-800/40">
    <p class="text-gray-200 font-semibold">In short</p>
    <p class="text-gray-200"><em>“What we interpreted as "Dark Matter" is a potential contribution to dynamics of the Galactic system.”</em> This is expressed by <span class="font-mono">V<sub>Q</sub> = Q · V<sub>bary</sub> and for energy-closed systems it simplifies to V<sub>Q</sub> = √3 · V<sub>bary</sub></span>.</p>

  </div>

  <div class="mt-6 text-gray-300 leading-relaxed" id="howto">
    <h3 class="text-xl font-bold mb-2">What this page is & how to use it</h3>
    <ul class="list-disc pl-6 space-y-1">
      <li><b>Data:</b> rotation curves from the <b>SPARC</b> catalog (radius <span class="font-mono">Rad</span>, observed speed <span class="font-mono">Vobs</span>, baryonic components <span class="font-mono">Vgas</span>, <span class="font-mono">Vdisk</span>, <span class="font-mono">Vbul</span>).</li>
      <li><b>Q law:</b> <span class="font-mono">V<sub>Q</sub> = √3 · V<sub>bary</sub></span>, where <span class="font-mono">V<sub>bary</sub>² = V<sub>gas</sub>² + Υ* · (V<sub>disk</sub>² + V<sub>bul</sub>²)</span>.</li>
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