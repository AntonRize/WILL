// ==========================================================================
// ROM Holographic Decoder — UI controller
// Style: matches _layouts/ouroboros.html rhythm (fade-ins, breathing,
// progressive disclosure, hover tooltips as revelation mechanism).
// ==========================================================================

(function () {
    const worker = new Worker("/decoder/js/worker.js");
    const $ = (id) => document.getElementById(id);

    const engineState    = $("engine-state");
    const engineProgress = $("engine-progress");
    const runBtn         = $("run-generator");
    const seedInput      = $("seed-input");
    const seedRandom     = $("seed-random");
    const rvCount        = $("rv-count");
    const datasetReport  = $("dataset-report");
    const reportBody     = $("dataset-report-body");
    const act1           = $("act-1");
    const tooltip        = $("tooltip");

    // ---- Mode toggle -----------------------------------------------------
    const modeGuided   = $("mode-guided");
    const modeRigorous = $("mode-rigorous");
    function setMode(mode) {
        const rigorous = (mode === "rigorous");
        modeGuided.classList.toggle("active",  !rigorous);
        modeRigorous.classList.toggle("active", rigorous);
        document.querySelectorAll(".guided-only")
            .forEach((el) => el.classList.toggle("hidden",  rigorous));
        document.querySelectorAll(".rigorous-only")
            .forEach((el) => el.classList.toggle("hidden", !rigorous));
    }
    modeGuided.addEventListener("click",   () => setMode("guided"));
    modeRigorous.addEventListener("click", () => setMode("rigorous"));

    // ---- Hover tooltips on [data-tip] glyphs (homepage pattern) ---------
    document.querySelectorAll("[data-tip]").forEach((el) => {
        el.style.cursor = "help";
        el.addEventListener("mouseenter", () => {
            tooltip.textContent = el.getAttribute("data-tip");
            tooltip.style.opacity = "1";
        });
        el.addEventListener("mousemove", (e) => {
            tooltip.style.left = (e.clientX + 18) + "px";
            tooltip.style.top  = (e.clientY - tooltip.offsetHeight - 12) + "px";
        });
        el.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
        });
    });

    // ---- Seed randomizer -------------------------------------------------
    seedRandom.addEventListener("click", () => {
        seedInput.value = String(Math.floor(Math.random() * 1_000_000));
    });

    // ---- RV scatter plot (Chart.js), minimal chrome ---------------------
    const rvCtx = $("rv-canvas").getContext("2d");
    const rvChart = new Chart(rvCtx, {
        type: "scatter",
        data: { datasets: [
            {
                label: "Measured velocity",
                type: "scatter",
                data: [],
                backgroundColor: "rgba(103, 232, 249, 0.85)", // cyan / β
                pointRadius: 2.2,
                pointHoverRadius: 4,
            },
            {
                label: "Best classical Kepler fit",
                type: "line",
                data: [],
                borderColor: "rgba(167, 243, 208, 0.85)",   // emerald
                borderWidth: 1.5,
                pointRadius: 0,
                showLine: true,
                tension: 0,
                hidden: true,
            },
        ]},
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { title: { display: true,
                              text: "Time of observation  (Modified Julian Date, days)",
                              color: "#9ca3af",
                              font: { family: "Inter", size: 12, weight: "500" } },
                     ticks:  { color: "#6b7280", font: { family: "JetBrains Mono" } },
                     grid:   { color: "rgba(255,255,255,0.03)", drawBorder: false } },
                y: { title: { display: true,
                              text: "Line-of-sight velocity of the star  (km / s)",
                              color: "#9ca3af",
                              font: { family: "Inter", size: 12, weight: "500" } },
                     ticks:  { color: "#6b7280", font: { family: "JetBrains Mono" } },
                     grid:   { color: "rgba(255,255,255,0.03)", drawBorder: false } },
            },
        },
    });

    // ---- Residuals chart (Act II) ---------------------------------------
    const residCtx = $("resid-canvas").getContext("2d");
    const residChart = new Chart(residCtx, {
        type: "scatter",
        data: { datasets: [
            {
                label: "Residual",
                type: "scatter",
                data: [],
                backgroundColor: "rgba(251, 191, 36, 0.85)", // amber
                pointRadius: 2.2,
                pointHoverRadius: 4,
            },
            {
                label: "zero",
                type: "line",
                data: [],
                borderColor: "rgba(107, 114, 128, 0.5)",
                borderWidth: 1,
                pointRadius: 0,
                showLine: true,
                borderDash: [4, 4],
            },
        ]},
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { title: { display: true,
                              text: "Time of observation  (Modified Julian Date, days)",
                              color: "#9ca3af",
                              font: { family: "Inter", size: 12, weight: "500" } },
                     ticks:  { color: "#6b7280", font: { family: "JetBrains Mono" } },
                     grid:   { color: "rgba(255,255,255,0.03)", drawBorder: false } },
                y: { title: { display: true,
                              text: "Observed  −  best classical fit  (km / s)",
                              color: "#9ca3af",
                              font: { family: "Inter", size: 12, weight: "500" } },
                     ticks:  { color: "#6b7280", font: { family: "JetBrains Mono" } },
                     grid:   { color: "rgba(255,255,255,0.03)", drawBorder: false } },
            },
        },
    });

    // ---- Engine status ---------------------------------------------------
    // ---- Act III elements -----------------------------------------------
    const act3 = $("act-3");
    let act3Revealed = false;
    function revealAct3() {
        if (act3Revealed) return;
        act3Revealed = true;
        act3.classList.remove("hidden");
        requestAnimationFrame(() => {
            setTimeout(() => {
                act3.classList.add("revealed");
                act3.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 50);
        });
    }

    // ---- Q_o canvas (β_o, κ_o) plane ------------------------------------
    const qoCanvas = $("qo-canvas");
    const qoCtx    = qoCanvas.getContext("2d");
    let qoState = { beta: null, e: null, phase: 0 };
    function resizeQo() {
        const r = qoCanvas.getBoundingClientRect();
        qoCanvas.width  = r.width  * devicePixelRatio;
        qoCanvas.height = r.height * devicePixelRatio;
    }
    window.addEventListener("resize", resizeQo);

    function drawQo() {
        if (qoState.beta == null) return;
        resizeQo();
        const W = qoCanvas.width, H = qoCanvas.height;
        qoCtx.clearRect(0, 0, W, H);
        const pad = 40 * devicePixelRatio;
        const { beta, e } = qoState;

        // Trace locus
        const N = 256;
        const pts = [];
        let maxB = 0, maxK = 0;
        for (let i = 0; i < N; i++) {
            const o = (i / N) * 2 * Math.PI;
            const bo2 = beta*beta * (1 + e*e + 2*e*Math.cos(o)) / (1 - e*e);
            const ko2 = 2*beta*beta * (1 + e*Math.cos(o)) / (1 - e*e);
            const bo = Math.sqrt(Math.max(0, bo2));
            const ko = Math.sqrt(Math.max(0, ko2));
            pts.push([bo, ko]);
            if (bo > maxB) maxB = bo;
            if (ko > maxK) maxK = ko;
        }
        const span = Math.max(maxB, maxK) * 1.15 || 0.01;
        const sx = (b) => pad + (b / span) * (W - 2*pad);
        const sy = (k) => H - pad - (k / span) * (H - 2*pad);

        // Axes
        qoCtx.strokeStyle = "rgba(255,255,255,0.12)";
        qoCtx.lineWidth = 1 * devicePixelRatio;
        qoCtx.beginPath();
        qoCtx.moveTo(pad, H-pad); qoCtx.lineTo(W-pad, H-pad);
        qoCtx.moveTo(pad, H-pad); qoCtx.lineTo(pad, pad);
        qoCtx.stroke();

        // Closure line κ = √2 · β
        qoCtx.strokeStyle = "rgba(167,243,208,0.5)";
        qoCtx.setLineDash([6, 6]);
        qoCtx.beginPath();
        qoCtx.moveTo(sx(0), sy(0));
        const bEnd = span / Math.SQRT2;
        qoCtx.lineTo(sx(bEnd), sy(bEnd * Math.SQRT2));
        qoCtx.stroke();
        qoCtx.setLineDash([]);

        // Locus
        qoCtx.strokeStyle = "rgba(251,191,36,0.7)";
        qoCtx.lineWidth = 1.5 * devicePixelRatio;
        qoCtx.beginPath();
        pts.forEach((p, i) => {
            const x = sx(p[0]), y = sy(p[1]);
            if (i === 0) qoCtx.moveTo(x, y); else qoCtx.lineTo(x, y);
        });
        qoCtx.closePath();
        qoCtx.stroke();

        // Live Q_o vector
        const o = qoState.phase;
        const bo2 = beta*beta * (1 + e*e + 2*e*Math.cos(o)) / (1 - e*e);
        const ko2 = 2*beta*beta * (1 + e*Math.cos(o)) / (1 - e*e);
        const bo = Math.sqrt(Math.max(0, bo2));
        const ko = Math.sqrt(Math.max(0, ko2));
        qoCtx.strokeStyle = "rgba(103,232,249,0.95)";
        qoCtx.lineWidth = 2.5 * devicePixelRatio;
        qoCtx.beginPath();
        qoCtx.moveTo(sx(0), sy(0));
        qoCtx.lineTo(sx(bo), sy(ko));
        qoCtx.stroke();
        qoCtx.fillStyle = "rgba(192,132,252,0.95)";
        qoCtx.beginPath();
        qoCtx.arc(sx(bo), sy(ko), 4 * devicePixelRatio, 0, 2*Math.PI);
        qoCtx.fill();

        // Labels
        qoCtx.fillStyle = "rgba(156,163,175,0.8)";
        qoCtx.font = (11 * devicePixelRatio) + "px JetBrains Mono";
        qoCtx.fillText("β_o", W - pad - 20*devicePixelRatio, H - pad + 18*devicePixelRatio);
        qoCtx.fillText("κ_o", pad - 28*devicePixelRatio, pad + 4*devicePixelRatio);
    }

    let qoAnim = null;
    function startQoAnim() {
        cancelAnimationFrame(qoAnim);
        const t0 = performance.now();
        const loop = (t) => {
            qoState.phase = ((t - t0) / 4000) * 2 * Math.PI % (2*Math.PI);
            drawQo();
            qoAnim = requestAnimationFrame(loop);
        };
        qoAnim = requestAnimationFrame(loop);
    }

    const ENGINE_LABELS = {
        "loading-pyodide":   "loading pyodide runtime…",
        "loading-packages":  "loading numpy · scipy · pandas…",
        "loading-micropip":  "loading micropip…",
        "installing-emcee":  "installing emcee…",
        "emcee-failed":      "⚠ emcee install failed (non-fatal for Acts I–II)",
        "ready":             "engine ready",
        "generating":        "generating the light-curve…",
        "scouting":          "fitting a classical Kepler orbit…",
        "sniping":           "R.O.M. global sniper searching (β, κ)…",
    };

    let act1Revealed = false;
    function revealAct1() {
        if (act1Revealed) return;
        act1Revealed = true;
        setTimeout(() => act1.classList.add("revealed"), 100);
    }

    const act2 = $("act-2");
    let act2Revealed = false;
    function revealAct2() {
        if (act2Revealed) return;
        act2Revealed = true;
        act2.classList.remove("hidden");
        // Give the browser one frame to paint, then trigger the fade
        requestAnimationFrame(() => {
            setTimeout(() => {
                act2.classList.add("revealed");
                act2.scrollIntoView({ behavior: "smooth", block: "start" });
                // Kick Chart.js to resize into its newly-visible container
                residChart.resize();
            }, 50);
        });
    }

    worker.onmessage = (ev) => {
        const m = ev.data || {};
        if (m.type === "engine") {
            engineState.textContent = ENGINE_LABELS[m.state] || m.state;
            engineState.className = (m.state === "ready") ? "accent-lock" : "dim";
            engineProgress.textContent = m.progress ? " · " + m.progress : "";
            if (m.state === "ready") {
                runBtn.disabled = false;
                revealAct1();
            }
        } else if (m.type === "init-done") {
            runBtn.disabled = false;
            revealAct1();
        } else if (m.type === "generator-result") {
            onGeneratorResult(m.payload);
        } else if (m.type === "scout-result") {
            onScoutResult(m.payload);
        } else if (m.type === "sniper-result") {
            onSniperResult(m.payload);
        } else if (m.type === "mcmc-init-done") {
            mcmcDriver();
        } else if (m.type === "mcmc-chunk-done") {
            onMcmcChunk(m.payload);
        } else if (m.type === "mcmc-final") {
            onMcmcFinal(m.payload);
        } else if (m.type === "error") {
            engineState.textContent = "error";
            engineState.className = "text-red-400";
            engineProgress.textContent = " · " + m.error;
            console.error("[decoder worker]", m.error);
        }
    };

    function onGeneratorResult(p) {
        const pts = p.t_obs.map((t, i) => ({ x: t, y: p.rv_kms[i] }));
        rvChart.data.datasets[0].data = pts;
        // Clear any previous fit overlay when a new seed is generated
        rvChart.data.datasets[1].data = [];
        rvChart.data.datasets[1].hidden = true;
        rvChart.update();
        rvCount.textContent = `${p.t_obs.length} observations`;
        reportBody.textContent = p.report;
        window.__decoderDataset = p;

        // Hide Act II again if this is a re-generation with a new seed
        act2.classList.add("hidden");
        act2.classList.remove("revealed");
        act2Revealed = false;

        // Auto-trigger Act II: the Keplerian Scout
        worker.postMessage({
            type: "scout",
            dataset_json: JSON.stringify({
                t_obs:     p.t_obs,
                rv_kms:    p.rv_kms,
                sigma_kms: p.sigma_kms,
            }),
        });
    }

    function onScoutResult(p) {
        // 1. Overlay the best classical fit on the RV chart
        const curvePts = p.curve.t.map((t, i) => ({ x: t, y: p.curve.rv[i] }));
        rvChart.data.datasets[1].data = curvePts;
        rvChart.data.datasets[1].hidden = false;
        rvChart.update();

        // 2. Populate the residuals chart
        const residPts = p.residuals.t.map((t, i) => ({ x: t, y: p.residuals.r_kms[i] }));
        residChart.data.datasets[0].data = residPts;
        // Zero reference line across the time range
        const tMin = Math.min.apply(null, p.residuals.t);
        const tMax = Math.max.apply(null, p.residuals.t);
        residChart.data.datasets[1].data = [{ x: tMin, y: 0 }, { x: tMax, y: 0 }];
        residChart.update();

        // 3. Quiet inscription of best-fit parameters, in plain language
        const prm = p.params;
        $("scout-params").innerHTML =
            `period <span class="accent-lock">${prm.P_years.toFixed(3)}</span> years  ·  ` +
            `eccentricity <span class="accent-lock">${prm.e.toFixed(4)}</span>  ·  ` +
            `semi-amplitude <span class="accent-lock">${prm.K_kms.toFixed(1)}</span> km/s<br>` +
            `pericentre angle <span class="accent-lock">${prm.omega_deg.toFixed(1)}°</span>  ·  ` +
            `systemic drift <span class="accent-lock">${prm.vz0_kms.toFixed(1)}</span> km/s`;

        // 4. Header metric for the residuals plot
        $("resid-info").textContent =
            `peak-to-peak ${p.residuals.peak_kms.toFixed(1)} km/s  ·  RMS ${p.residuals.rms_kms.toFixed(1)} km/s`;

        // 5. Fill the rigorous-only scout report
        $("scout-report-body").textContent = p.report;

        window.__decoderScout = p;
        revealAct2();

        // Auto-trigger Act III: the R.O.M. Sniper
        const ds = window.__decoderDataset;
        worker.postMessage({
            type: "sniper",
            dataset_json: JSON.stringify({
                t_obs:     ds.t_obs,
                rv_kms:    ds.rv_kms,
                sigma_kms: ds.sigma_kms,
            }),
            scout_json: JSON.stringify({ params: p.params }),
        });
    }

    const MCMC_TOTAL = 1000;
    const MCMC_CHUNK = 50;

    function onSniperResult(p) {
        window.__decoderSniper = p;
        const prm = p.params;
        qoState.beta = prm.beta;
        qoState.e    = prm.e;
        startQoAnim();
        revealAct3();
        $("mcmc-progress").textContent =
            `sniper peak found · β = ${prm.beta.toExponential(3)} · initialising MCMC…`;
        // Kick off MCMC
        worker.postMessage({ type: "mcmc-init", total_steps: MCMC_TOTAL });
    }

    function mcmcDriver() {
        worker.postMessage({ type: "mcmc-chunk", n_steps: MCMC_CHUNK });
    }

    function onMcmcChunk(s) {
        $("mcmc-progress").textContent =
            `MCMC · ${s.steps_done} / ${s.total_steps} steps`;
        if (s.beta_median != null) {
            $("mcmc-medians").innerHTML =
                `β = <span class="accent-beta">${s.beta_median.toExponential(4)}</span> ` +
                `± ${s.beta_sigma.toExponential(2)}  ·  ` +
                `i = <span class="accent-lock">${s.i_deg_median.toFixed(2)}°</span>  ·  ` +
                `e = <span class="accent-lock">${s.e_median.toFixed(5)}</span>  ·  ` +
                `P = <span class="accent-lock">${s.P_years_median.toFixed(3)}</span> yr  ·  ` +
                `ω = <span class="accent-lock">${s.omega_deg_median.toFixed(2)}°</span>`;
            // Live-update Q_o locus with running median
            qoState.beta = s.beta_median;
            qoState.e    = s.e_median;
        }
        if (s.steps_done < s.total_steps) {
            worker.postMessage({ type: "mcmc-chunk", n_steps: MCMC_CHUNK });
        } else {
            worker.postMessage({ type: "mcmc-finalize" });
        }
    }

    function onMcmcFinal(p) {
        const m = p.median, b = p.band_16_84;
        $("mcmc-progress").textContent =
            `MCMC complete · ${p.n_samples} samples`;
        $("mcmc-medians").innerHTML =
            `β = <span class="accent-beta">${m.beta.toExponential(4)}</span>  ·  ` +
            `i = <span class="accent-lock">${m.i_deg.toFixed(2)}°</span>  ·  ` +
            `e = <span class="accent-lock">${m.e.toFixed(5)}</span>  ·  ` +
            `P = <span class="accent-lock">${m.P_years.toFixed(3)}</span> yr  ·  ` +
            `ω = <span class="accent-lock">${m.omega_deg.toFixed(2)}°</span>  ·  ` +
            `v<sub>z0</sub> = <span class="accent-lock">${m.vz0_kms.toFixed(2)}</span> km/s`;
        qoState.beta = m.beta;
        qoState.e    = m.e;
        const inv = p.decryption_invariant;
        if (inv) {
            $("invariant-line").innerHTML =
                `LHS = <span class="accent-lock">${inv.LHS.toFixed(8)}</span>  ·  ` +
                `|LHS − 2| = <span class="accent-lock">${inv.residual.toExponential(3)}</span>`;
        } else {
            $("invariant-line").textContent = "invariant undefined at this point";
        }
        // Truth reveal
        const ds = window.__decoderDataset;
        if (ds && ds.truth) {
            const t = ds.truth;
            const rows = [
                ["β",       t.beta_true     != null ? t.beta_true.toExponential(4)     : "—", m.beta.toExponential(4)],
                ["e",       t.e             != null ? t.e.toFixed(5)                   : "—", m.e.toFixed(5)],
                ["i (deg)", t.i_deg         != null ? t.i_deg.toFixed(2)               : "—", m.i_deg.toFixed(2)],
                ["P (yr)",  t.P_years       != null ? t.P_years.toFixed(3)             : "—", m.P_years.toFixed(3)],
                ["ω (deg)", t.omega_deg     != null ? t.omega_deg.toFixed(2)           : "—", m.omega_deg.toFixed(2)],
            ];
            const html = `<table class="mx-auto text-sm"><thead><tr>
                <th class="pr-6 text-left whisper">parameter</th>
                <th class="pr-6 text-left whisper">truth</th>
                <th class="text-left whisper">recovered</th></tr></thead><tbody>` +
                rows.map(r => `<tr><td class="pr-6 dim">${r[0]}</td><td class="pr-6 text-gray-300">${r[1]}</td><td class="accent-lock">${r[2]}</td></tr>`).join("") +
                `</tbody></table>`;
            $("truth-table").innerHTML = html;
        }
    }

    // ---- Run ------------------------------------------------------------
    runBtn.addEventListener("click", () => {
        const seed = seedInput.value.trim();
        if (!seed) return;
        runBtn.disabled = true;
        worker.postMessage({ type: "generate", seed });
    });

    worker.postMessage({ type: "init" });
})();
