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
        data: { datasets: [{
            label: "RV (km/s)",
            data: [],
            backgroundColor: "rgba(103, 232, 249, 0.85)", // cyan / β
            pointRadius: 2.2,
            pointHoverRadius: 4,
        }]},
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

    // ---- Engine status ---------------------------------------------------
    const ENGINE_LABELS = {
        "loading-pyodide":   "loading pyodide runtime…",
        "loading-packages":  "loading numpy · scipy · pandas…",
        "loading-micropip":  "loading micropip…",
        "installing-emcee":  "installing emcee…",
        "emcee-failed":      "⚠ emcee install failed (non-fatal for Acts I–II)",
        "ready":             "engine ready",
        "generating":        "running 1PN generator…",
    };

    let act1Revealed = false;
    function revealAct1() {
        if (act1Revealed) return;
        act1Revealed = true;
        // Match the homepage's 3-second ease-in rhythm
        setTimeout(() => act1.classList.add("revealed"), 100);
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
        rvChart.update();
        rvCount.textContent = `${p.t_obs.length} epochs`;
        reportBody.textContent = p.report;
        window.__decoderDataset = p; // stash for Acts II–IV
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
