---
layout: default
title: "Galactic Dynamics Calculator"
---

<div class="markdown-content py-8">
  <h1 class="text-4xl font-extrabold tracking-tight">
    Galactic Dynamics Calculator
  </h1>

  <p class="mt-4 text-lg text-gray-400">
    <b>Update (QWILL √3 law):</b> After extensive testing the long, integral-based
    formula collapses to a remarkably simple law:
    <span class="font-mono">V<sub>QWILL</sub>(r) = √3 · V<sub>bary</sub>(r)</span>.
    No extra geometric terms are required. Rotation curves are now computed with a
    single slider — the stellar mass-to-light ratio <span class="font-mono">Υ*</span>.
  </p>

  <div id="type-filter" class="bg-gray-800/50 p-4 rounded-lg mb-4">
    <h4 class="text-lg font-bold text-gray-200 mb-2">Filter by Galaxy Type:</h4>
    <div id="type-checkboxes" class="flex flex-wrap gap-4 text-gray-300"></div>
    <button id="analyze-types-btn" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
      Analyze RMSE by Type
    </button>
  </div>

  <div id="type-plot" class="bg-gray-800/50 p-4 rounded-lg mb-4" style="display:none">
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
            <span id="ystar-value" class="param-display">0.25</span>
          </label>
          <input type="range" id="ystar-slider" class="form-range"
                 min="0.00" max="2.00" step="0.01" value="0.25" />
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
<script src="https://cdn.plotly/plotly-2.32.0.min.js"></script>

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
  const URL_TABLE1 = "https://raw.githubusercontent.com/AntonRize/WILL/main/SPARC%20DATA/table1.dat";
  const URL_TABLE2 = "https://raw.githubusercontent.com/AntonRize/WILL/main/SPARC%20DATA/table2.dat";

  /* ---------- GLOBALS ---------- */
  let galaxyData = {};   // per galaxy: [{Name,Dist,Rad,Vobs,Vobs_err,Vgas,Vdisk,Vbul}, ...]
  let galaxyMeta = {};   // per galaxy: metadata from table1
  const defaultValues = { yStar: 0.25 };
  const hubbleTypes = ["S0","Sa","Sab","Sb","Sbc","Sc","Scd","Sd","Sdm","Sm","Im","BCD"];
  const distMethods = {1:"Hubble Flow",2:"Tip of the Red Giant Branch",3:"Cepheids",4:"Ursa Major Cluster",5:"Supernova"};

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
      const [t1Res,t2Res]=await Promise.all([fetch(URL_TABLE1),fetch(URL_TABLE2)]);
      if(!t1Res.ok||!t2Res.ok) throw new Error("Failed to fetch SPARC tables.");

      const t1Text=await t1Res.text();
      const t2Text=await t2Res.text();

      // table1.dat
      t1Text.trim().split("\n").forEach(line=>{
        if(line.startsWith("#")) return;
        const name=line.substring(0,11).trim();
        const rest=line.substring(11).trim().split(/\s+/);
        if(rest.length<18) return;
        galaxyMeta[name]={
          Name:name, Type:+rest[0], Dist:+rest[1], Dist_err:+rest[2], f_Dist:+rest[3],
          Inc:+rest[4], Inc_err:+rest[5], L36:+rest[6], L36_err:+rest[7], Reff:+rest[8],
          SBeff:+rest[9], Rdisk:+rest[10], SBdisk:+rest[11], MHI:+rest[12], RHI:+rest[13],
          Vflat:+rest[14], Vflat_err:+rest[15], Qual:+rest[16], Ref:rest[17]
        };
      });

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

      loader.style.display="none"; bodyEl.style.display="block";
      galaxySelect.selectedIndex=0;
      updateGalaxyInfo();
      updateAll();
    }catch(err){
      loader.textContent="Error loading data."; console.error(err);
    }
  }

  /* ---------- PHYSICS: QWILL √3 ---------- */
  function seriesQWILL(galaxyName, yStar){
    const data = galaxyData[galaxyName].slice().sort((a,b)=>a.Rad-b.Rad);
    const r    = data.map(d=>d.Rad);
    const Vgas = data.map(d=>d.Vgas);
    const Vd   = data.map(d=>d.Vdisk);
    const Vb   = data.map(d=>d.Vbul);

    const Vbary2 = data.map(d => d.Vgas**2 + yStar * (d.Vdisk**2 + d.Vbul**2));
    const Vbary  = Vbary2.map(x => Math.sqrt(Math.max(0,x)));
    const Vq     = Vbary.map(v => Math.sqrt(3)*v);

    return {
      r,
      Vobs: data.map(d=>d.Vobs),
      Vbary,
      Vq,
      components: {
        Vgas,
        Vdisk_scaled: Vd.map(v=>Math.sqrt(yStar)*Math.abs(v)),
        Vbulge_scaled: Vb.map(v=>Math.sqrt(yStar)*Math.abs(v))
      }
    };
  }

  function rmse(obs,pred){
    const n=obs.length;
    let s=0; for(let i=0;i<n;i++) s+=(obs[i]-pred[i])**2;
    return Math.sqrt(s/n);
  }

  /* ---------- UPDATE UI & PLOTS ---------- */
  function updateAll(){
    const name=galaxySelect.value; if(!name) return;
    const yStar=+ystarSlider.value || 0.25;
    ystarValueSpan.textContent = yStar.toFixed(2);

    const S = seriesQWILL(name,yStar);
    const R = rmse(S.Vobs,S.Vq);
    resultsDiv.textContent = `RMSE: ${R.toFixed(2)} km/s`;

    const layoutBase = {
      xaxis:{ title:".", color:"#d1d5db", gridcolor:"#4b5563" },
      yaxis:{ title:"Velocity (km/s)", color:"#d1d5db", gridcolor:"#4b5563",
              range:[0, Math.max(...S.Vobs, ...S.Vq)*1.1] },
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
        { x:S.r, y:S.Vobs,           mode:"markers", name:"Observed", marker:{ color:"#9ca3af", size:6, symbol:"circle-open" }},
        { x:S.r, y:S.components.Vgas,           mode:"lines", name:"Gas",       line:{ color:"#10b981" }},
        { x:S.r, y:S.components.Vdisk_scaled,   mode:"lines", name:"Disk × Υ*", line:{ color:"#3b82f6" }},
        { x:S.r, y:S.components.Vbulge_scaled,  mode:"lines", name:"Bulge × Υ*",line:{ color:"#f59e0b" }}
      ],
      { ...layoutBase, title:`Baryonic Components for ${name}` }
    );
  }

  function updateGalaxyInfo(){
    const meta=galaxyMeta[galaxySelect.value]; if(!meta){ galaxyInfoDiv.textContent=""; return; }
    galaxyInfoDiv.innerHTML = `
      <p><strong>Hubble Type:</strong> ${meta.Type} (${hubbleTypes[meta.Type] || "?"})</p>
      <p><strong>Distance:</strong> ${meta.Dist.toFixed(2)} ± ${meta.Dist_err.toFixed(2)} Mpc (${distMethods[meta.f_Dist] || "?"})</p>
      <p><strong>Inclination:</strong> ${meta.Inc.toFixed(1)}° ± ${meta.Inc_err.toFixed(1)}°</p>
      <p><strong>Total Luminosity:</strong> ${meta.L36.toFixed(3)} ± ${meta.L36_err.toFixed(3)} G&nbsp;L☉</p>
      <p><strong>V_flat:</strong> ${meta.Vflat.toFixed(1)} ± ${meta.Vflat_err.toFixed(1)} km/s</p>
      <p><strong>RC Quality:</strong> ${meta.Qual}</p>`;
  }

  /* ---------- TYPE HISTOGRAM ---------- */
  function initGalaxyTypeCheckboxes(){
    const container=document.getElementById("type-checkboxes");
    hubbleTypes.forEach((type,idx)=>{
      const label=document.createElement("label");
      label.innerHTML=`<input type="checkbox" value="${idx}" checked /> ${type}`;
      label.className="flex items-center space-x-1";
      container.appendChild(label);
    });
  }

  function analyzeSelectedTypes(){
    const selectedIDs=Array.from(document.querySelectorAll("#type-checkboxes input:checked")).map(cb=>+cb.value);
    if(!selectedIDs.length){ alert("Select at least one galaxy type first."); return; }

    const yStar=+ystarSlider.value || 0.25;
    const rmseValues=[];
    for(const name in galaxyData){
      const meta=galaxyMeta[name]; if(!meta || !selectedIDs.includes(meta.Type)) continue;
      const S=seriesQWILL(name,yStar);
      if(S.Vobs.length===S.Vq.length) rmseValues.push(rmse(S.Vobs,S.Vq));
    }
    if(!rmseValues.length){ alert("No galaxies matched the selected types."); return; }

    const N=rmseValues.length, mean=rmseValues.reduce((s,v)=>s+v,0)/N;
    const layout = {
      title: ".",
      xaxis:{ title:"RMSE (km/s)", color:"#d1d5db", gridcolor:"#4b5563" },
      yaxis:{ title:"Number of Galaxies", color:"#d1d5db", gridcolor:"#4b5563" },
      font:{ color:"#d1d5db" }, paper_bgcolor:"transparent", plot_bgcolor:"#1f2937",
      margin:{ l:60,r:30,t:90,b:60 },
      annotations:[{
        text:`Types: <b>${selectedIDs.map(i=>hubbleTypes[i]).join(", ")}</b><br>`+
             `N&nbsp;=&nbsp;${N} &nbsp;&nbsp;Mean&nbsp;RMSE&nbsp;=&nbsp;${mean.toFixed(2)} km/s`,
        xref:"paper", yref:"paper", x:0.5, y:1.18, showarrow:false, align:"center", font:{ size:14, color:"#d1d5db" }
      }]
    };
    Plotly.newPlot("rmse-histogram", [{ x:rmseValues, type:"histogram", nbinsx:20, marker:{ color:"#3b82f6" } }], layout);
    document.getElementById("type-plot").style.display="block";
  }

  /* ---------- LISTENERS & INIT ---------- */
  document.addEventListener("DOMContentLoaded", ()=>{
    loadData(); initGalaxyTypeCheckboxes();
  });
  document.getElementById("analyze-types-btn").addEventListener("click", analyzeSelectedTypes);
  document.getElementById("galaxy-select").addEventListener("change", ()=>{ updateGalaxyInfo(); updateAll(); });
  document.getElementById("ystar-slider").addEventListener("input", updateAll);
</script>
