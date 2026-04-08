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
    const ENGINE_LABELS = {
        "loading-pyodide":   "loading pyodide runtime…",
        "loading-packages":  "loading numpy · scipy · pandas…",
        "loading-micropip":  "loading micropip…",
        "installing-emcee":  "installing emcee…",
        "emcee-failed":      "⚠ emcee install failed (non-fatal for Acts I–II)",
        "ready":             "engine ready",
        "generating":        "generating the light-curve…",
        "scouting":          "fitting a classical Kepler orbit…",
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
