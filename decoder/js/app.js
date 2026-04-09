// ==========================================================================
// ROM Holographic Decoder — UI controller
// Style: matches _layouts/ouroboros.html rhythm (fade-ins, breathing,
// progressive disclosure, hover tooltips as revelation mechanism).
// ==========================================================================

(function () {
    const worker = new Worker("/decoder/js/worker.js");
    const $ = (id) => document.getElementById(id);
    const C = (window.DECODER_CONTENT) || { status: {}, reveal: { headers: {}, rows: {} }, invariant: {}, links: {} };

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
                // Force an immediate empty-grid paint so the plane is visible
                setTimeout(() => { resizeQo(); drawQo(); resizeOrbit(); drawOrbit(); }, 400);
            }, 50);
        });
    }

    function setMcmcBar(frac) {
        const bar = $("mcmc-bar");
        if (!bar) return;
        const fill = bar.querySelector(".mcmc-bar-fill");
        if (frac == null) {
            bar.classList.add("indeterminate");
            if (fill) fill.style.width = "40%";
        } else {
            bar.classList.remove("indeterminate");
            if (fill) fill.style.width = Math.max(0, Math.min(1, frac)) * 100 + "%";
        }
    }

    const act4 = $("act-4");
    let act4Revealed = false;
    function revealAct4() {
        if (!act4 || act4Revealed) return;
        act4Revealed = true;
        act4.classList.remove("hidden");
        requestAnimationFrame(() => setTimeout(() => act4.classList.add("revealed"), 80));
    }

    // ---- Q_o canvas (β_o, κ_o) plane ------------------------------------
    const qoCanvas = $("qo-canvas");
    const qoCtx    = qoCanvas.getContext("2d");
    let qoState = { beta: null, e: null, phase: 0 };
    function resizeQo() {
        const wrap = $("qo-wrap");
        const r = wrap ? wrap.getBoundingClientRect() : qoCanvas.getBoundingClientRect();
        const W = Math.max(200, r.width  || 420);
        const H = Math.max(200, r.height || 360);
        qoCanvas.width  = W * devicePixelRatio;
        qoCanvas.height = H * devicePixelRatio;
    }
    window.addEventListener("resize", resizeQo);

    function drawQo() {
        resizeQo();
        // If no fit yet, draw an empty breathing grid so the plane is visible
        if (qoState.beta == null) {
            const W = qoCanvas.width, H = qoCanvas.height;
            qoCtx.clearRect(0, 0, W, H);
            const pad = 40 * devicePixelRatio;
            qoCtx.strokeStyle = "rgba(255,255,255,0.12)";
            qoCtx.lineWidth = 1 * devicePixelRatio;
            qoCtx.beginPath();
            qoCtx.moveTo(pad, H-pad); qoCtx.lineTo(W-pad, H-pad);
            qoCtx.moveTo(pad, H-pad); qoCtx.lineTo(pad, pad);
            qoCtx.stroke();
            // Closure line κ = √2·β
            qoCtx.strokeStyle = "rgba(167,243,208,0.45)";
            qoCtx.setLineDash([6, 6]);
            qoCtx.beginPath();
            qoCtx.moveTo(pad, H-pad);
            qoCtx.lineTo(W-pad, pad + (H-2*pad)*(1 - 1/Math.SQRT2));
            qoCtx.stroke();
            qoCtx.setLineDash([]);
            qoCtx.fillStyle = "rgba(156,163,175,0.75)";
            qoCtx.font = (11 * devicePixelRatio) + "px JetBrains Mono";
            qoCtx.fillText("β_o", W - pad - 20*devicePixelRatio, H - pad + 18*devicePixelRatio);
            qoCtx.fillText("κ_o", pad - 28*devicePixelRatio, pad + 4*devicePixelRatio);
            qoCtx.fillStyle = "rgba(251,191,36,0.55)";
            qoCtx.font = (10 * devicePixelRatio) + "px JetBrains Mono";
            qoCtx.fillText("waiting for (β, κ)…", pad + 10*devicePixelRatio, pad + 18*devicePixelRatio);
            return;
        }
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

    // ---- Precessing orbit canvas (orbital plane view) -------------------
    const orbitCanvas = $("orbit-canvas");
    const orbitCtx    = orbitCanvas ? orbitCanvas.getContext("2d") : null;

    function resizeOrbit() {
        if (!orbitCanvas) return;
        const wrap = $("orbit-wrap");
        const r = wrap ? wrap.getBoundingClientRect() : orbitCanvas.getBoundingClientRect();
        const W = Math.max(200, r.width  || 420);
        const H = Math.max(200, r.height || 340);
        orbitCanvas.width  = W * devicePixelRatio;
        orbitCanvas.height = H * devicePixelRatio;
    }
    window.addEventListener("resize", resizeOrbit);

    function drawOrbit() {
        if (!orbitCtx) return;
        resizeOrbit();
        const W = orbitCanvas.width, H = orbitCanvas.height;
        orbitCtx.clearRect(0, 0, W, H);
        const cx = W / 2, cy = H / 2;
        const pad = 30 * devicePixelRatio;

        if (qoState.beta == null) {
            // Empty frame + focus mark
            orbitCtx.strokeStyle = "rgba(255,255,255,0.12)";
            orbitCtx.lineWidth = 1 * devicePixelRatio;
            orbitCtx.strokeRect(pad, pad, W - 2*pad, H - 2*pad);
            orbitCtx.fillStyle = "rgba(251,191,36,0.55)";
            orbitCtx.font = (10 * devicePixelRatio) + "px JetBrains Mono";
            orbitCtx.fillText("waiting for (β, e)…", pad + 8*devicePixelRatio, pad + 18*devicePixelRatio);
            // center point
            orbitCtx.fillStyle = "rgba(167,243,208,0.6)";
            orbitCtx.beginPath();
            orbitCtx.arc(cx, cy, 3 * devicePixelRatio, 0, 2*Math.PI);
            orbitCtx.fill();
            return;
        }

        const e    = qoState.e;
        const beta = qoState.beta;
        // τ² = (1−β²)(1−2β²);  τ_Y² = 1 − τ²
        const tau_sq   = (1 - beta*beta) * (1 - 2*beta*beta);
        const tauY_sq  = 1 - tau_sq;
        const shiftPerRad = tauY_sq / (1 - e*e);

        // ω_shift for animated periapsis uses the running orbital phase.
        // Trail: sample many revolutions so precession is visible.
        const N_REV  = 8;               // visible revolutions
        const N_PTS  = 1400;
        const r_of = (o, wshift) => (1 - e*e) / (1 + e*Math.cos(o - wshift));

        // Compute scale from peak r so the trail fits
        let rmax = 0;
        for (let i = 0; i < N_PTS; i++) {
            const o = (i / N_PTS) * N_REV * 2 * Math.PI;
            const ws = shiftPerRad * o;
            const r = r_of(o, ws);
            if (r > rmax) rmax = r;
        }
        const Rpx = ((Math.min(W, H) / 2) - pad) / (rmax * 1.05);

        // Axes (faint)
        orbitCtx.strokeStyle = "rgba(255,255,255,0.08)";
        orbitCtx.lineWidth = 1 * devicePixelRatio;
        orbitCtx.beginPath();
        orbitCtx.moveTo(pad, cy); orbitCtx.lineTo(W - pad, cy);
        orbitCtx.moveTo(cx, pad); orbitCtx.lineTo(cx, H - pad);
        orbitCtx.stroke();

        // Precessing trail — fade older revolutions
        orbitCtx.lineWidth = 1.2 * devicePixelRatio;
        for (let seg = 0; seg < N_REV; seg++) {
            const alpha = 0.15 + 0.80 * (seg / (N_REV - 1));
            orbitCtx.strokeStyle = `rgba(103,232,249,${alpha.toFixed(3)})`;
            orbitCtx.beginPath();
            const steps = 180;
            for (let k = 0; k <= steps; k++) {
                const o = (seg + k/steps) * 2 * Math.PI;
                const ws = shiftPerRad * o;
                const r = r_of(o, ws);
                const x = cx + r * Math.cos(o) * Rpx;
                const y = cy - r * Math.sin(o) * Rpx;
                if (k === 0) orbitCtx.moveTo(x, y); else orbitCtx.lineTo(x, y);
            }
            orbitCtx.stroke();
        }

        // Focus (companion)
        orbitCtx.fillStyle = "rgba(167,243,208,0.95)";
        orbitCtx.beginPath();
        orbitCtx.arc(cx, cy, 3.5 * devicePixelRatio, 0, 2*Math.PI);
        orbitCtx.fill();

        // Moving test body — use local phase in [0, 2π] on the *current* revolution
        const oNow = qoState.phase;
        const wsNow = shiftPerRad * oNow;
        const rNow  = r_of(oNow, wsNow);
        const bx = cx + rNow * Math.cos(oNow) * Rpx;
        const by = cy - rNow * Math.sin(oNow) * Rpx;
        orbitCtx.fillStyle = "rgba(103,232,249,1.0)";
        orbitCtx.beginPath();
        orbitCtx.arc(bx, by, 4 * devicePixelRatio, 0, 2*Math.PI);
        orbitCtx.fill();

        // Periapsis marker (drifts with ω_shift)
        const Dpx = (1 - e) * Math.cos(wsNow);
        const Dpy = (1 - e) * Math.sin(wsNow);
        const px = cx + Dpx * Rpx;
        const py = cy - Dpy * Rpx;
        orbitCtx.strokeStyle = "rgba(192,132,252,0.9)";
        orbitCtx.lineWidth = 1.5 * devicePixelRatio;
        orbitCtx.beginPath();
        orbitCtx.moveTo(cx, cy); orbitCtx.lineTo(px, py);
        orbitCtx.stroke();
        orbitCtx.fillStyle = "rgba(192,132,252,0.95)";
        orbitCtx.beginPath();
        orbitCtx.arc(px, py, 3 * devicePixelRatio, 0, 2*Math.PI);
        orbitCtx.fill();

        // Labels
        orbitCtx.fillStyle = "rgba(156,163,175,0.75)";
        orbitCtx.font = (10 * devicePixelRatio) + "px JetBrains Mono";
        orbitCtx.fillText("periapsis drift", pad + 6*devicePixelRatio, pad + 14*devicePixelRatio);
    }

    let qoAnim = null;
    function startQoAnim() {
        cancelAnimationFrame(qoAnim);
        const t0 = performance.now();
        const loop = (t) => {
            qoState.phase = ((t - t0) / 4000) * 2 * Math.PI % (2*Math.PI);
            drawQo();
            drawOrbit();
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

        // Reveal Act III immediately so the user sees the progress bar and plane
        revealAct3();
        const prog = $("mcmc-progress");
        if (prog) prog.innerHTML = `<span class="pulse-dot"></span> ${C.status.sniperRunning}`;
        setMcmcBar(0);
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
        $("mcmc-progress").innerHTML =
            `<span class="pulse-dot"></span>${C.status.sniperDone(prm.beta.toExponential(3))}`;
        setMcmcBar(0);
        worker.postMessage({ type: "mcmc-init", total_steps: MCMC_TOTAL });
    }

    function mcmcDriver() {
        worker.postMessage({ type: "mcmc-chunk", n_steps: MCMC_CHUNK });
    }

    function onMcmcChunk(s) {
        const pct = Math.round(100 * s.steps_done / s.total_steps);
        $("mcmc-progress").innerHTML =
            `<span class="pulse-dot"></span>${C.status.mcmcChunk(s.steps_done, s.total_steps, pct)}`;
        setMcmcBar(s.steps_done / s.total_steps);
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
        $("mcmc-progress").innerHTML =
            `<span style="color:#a7f3d0">●</span> ${C.status.mcmcLocked(p.n_samples)}`;
        setMcmcBar(1);
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
            $("invariant-line").innerHTML = C.invariant.format(inv.LHS, inv.residual);
        } else {
            $("invariant-line").textContent = C.invariant.undefinedMsg;
        }
        // ------------------------------------------------------------
        // Full metric recovery from (β, P, e) alone — no G, no M input
        // ------------------------------------------------------------
        // Canonical closures:
        //   R_s = (P · c · β^3) / π
        //   a   = R_s / (2 β^2)          (since κ² = 2β²  ⇒  R_s/a = 2β²)
        //   r_p = a (1 − e)
        //   Δω per revolution = 3 R_s / (a (1 − e²)) · (2π)
        //   Legacy mass M = R_s c² / (2 G)    (shown muted)
        const C_MS  = 299792458.0;
        const G_SI  = 6.67430e-11;
        const MSUN  = 1.98847e30;
        const SECYR = 365.25 * 86400;
        const AU_M  = 1.495978707e11;
        const P_s   = m.P_years * SECYR;
        const Rs_m  = (P_s * C_MS * Math.pow(m.beta, 3)) / Math.PI;
        const a_m   = Rs_m / (2 * m.beta * m.beta);
        const rp_m  = a_m * (1 - m.e);
        const prec_per_rev_rad = (3 * Rs_m) / (a_m * (1 - m.e*m.e)) * 2 * Math.PI;
        const prec_arcsec_per_century =
            prec_per_rev_rad * (180/Math.PI) * 3600 * (100.0 / m.P_years);
        const M_legacy_kg   = Rs_m * C_MS * C_MS / (2 * G_SI);
        const M_legacy_Msun = M_legacy_kg / MSUN;

        window.__decoderRecovered = {
            beta: m.beta, e: m.e, i_deg: m.i_deg,
            P_years: m.P_years, omega_deg: m.omega_deg, vz0_kms: m.vz0_kms,
            Rs_m, a_m, rp_m,
            a_AU: a_m / AU_M, rp_AU: rp_m / AU_M,
            prec_per_rev_arcsec: prec_per_rev_rad * (180/Math.PI) * 3600,
            prec_arcsec_per_century,
            M_legacy_Msun,
        };

        // ------------------------------------------------------------
        // Truth reveal — sealed-envelope style
        // ------------------------------------------------------------
        const ds = window.__decoderDataset;
        const t  = (ds && ds.truth) ? ds.truth : {};
        // Compute truth-derived Rs, a, r_p, precession so all rows are comparable
        const P_s_t  = t.P_yrs ? t.P_yrs * SECYR : null;
        const Rs_t   = (P_s_t && t.beta) ? (P_s_t * C_MS * Math.pow(t.beta, 3)) / Math.PI : null;
        const a_t    = (Rs_t != null)    ? Rs_t / (2 * t.beta * t.beta) : null;
        const rp_t   = (a_t  != null)    ? a_t * (1 - t.e) : null;
        const prec_t_rev = (Rs_t != null && a_t != null)
            ? (3 * Rs_t) / (a_t * (1 - t.e*t.e)) * 2 * Math.PI * (180/Math.PI) * 3600 : null;
        const prec_t_cy  = (prec_t_rev != null && t.P_yrs)
            ? prec_t_rev * (100.0 / t.P_yrs) : null;

        // Fold inclination into [0°, 90°] and wrap ω to [0°, 360°) —
        // RV is only sensitive to sin i (cos i sign is unrecoverable),
        // and ω is an angle, so direct string comparison needs wrapping.
        const foldI  = (d) => (d == null || !isFinite(d)) ? null : (d <= 90 ? d : 180 - d);
        const wrapW  = (d) => (d == null || !isFinite(d)) ? null : ((d % 360) + 360) % 360;
        const sinI_truth = foldI(t.i_deg);
        const sinI_reco  = foldI(m.i_deg);
        const w_truth    = wrapW(t.omega_deg);
        const w_reco     = wrapW(m.omega_deg);

        const fmt = (x, f) => (x == null || !isFinite(x)) ? "—" : f(x);
        const L = C.reveal.rows;
        const rows = [
            [L.beta,  fmt(t.beta,    v => v.toExponential(4)),     m.beta.toExponential(4)],
            [L.e,     fmt(t.e,       v => v.toFixed(5)),           m.e.toFixed(5)],
            [L.i,     fmt(sinI_truth,v => v.toFixed(2) + "°"),     sinI_reco.toFixed(2) + "°"],
            [L.P,     fmt(t.P_yrs,   v => v.toFixed(4)),           m.P_years.toFixed(4)],
            [L.omega, fmt(w_truth,   v => v.toFixed(2)),           w_reco.toFixed(2)],
            [L.vz0,   fmt(t.vz0_kms, v => v.toFixed(2)),           m.vz0_kms.toFixed(2)],
            [L.Rs,    fmt(Rs_t,      v => v.toExponential(4)),     Rs_m.toExponential(4)],
            [L.a,     fmt(a_t,       v => (v/AU_M).toFixed(4)),    (a_m/AU_M).toFixed(4)],
            [L.rp,    fmt(rp_t,      v => (v/AU_M).toFixed(4)),    (rp_m/AU_M).toFixed(4)],
            [L.prec,  fmt(prec_t_cy, v => v.toFixed(2)),           prec_arcsec_per_century.toFixed(2)],
            [L.M,     fmt(t.M_solar, v => v.toFixed(3)),           M_legacy_Msun.toFixed(3)],
        ];

        const H = C.reveal.headers;
        const html = `<table class="mx-auto text-sm"><thead><tr>
            <th class="pr-8 text-left whisper">${H.quantity}</th>
            <th class="pr-8 text-left whisper">${H.truth}</th>
            <th class="text-left whisper">${H.recovered}</th></tr></thead><tbody>` +
            rows.map(r => `<tr>
                <td class="pr-8 py-1 dim">${r[0]}</td>
                <td class="pr-8 py-1 text-gray-300">${r[1]}</td>
                <td class="py-1 accent-lock">${r[2]}</td></tr>`).join("") +
            `</tbody></table>
            <p class="whisper max-w-2xl mx-auto mt-6 leading-relaxed">${C.reveal.caption}</p>`;
        $("truth-table").innerHTML = html;
        revealAct4();
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
