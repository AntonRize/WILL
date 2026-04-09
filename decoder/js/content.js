// ============================================================================
// ROM Holographic Decoder — Text content module
// ----------------------------------------------------------------------------
// Every user-facing string used by app.js lives here so that prose can be
// edited without touching the controller code. Static Act I–IV prose lives in
// decoder/index.html; this file covers the dynamic pieces (progress messages,
// table labels, invariant line, footer notes).
// ============================================================================
window.DECODER_CONTENT = {

    // ----- Links to canonical WILL_RG_I sections/equations -----------------
    links: {
        decryptionInvariant:
            "https://willrg.com/documents/WILL_RG_I.pdf#eq:decryption_invariant",
        sectionAnalyticalSinI:
            "https://willrg.com/documents/WILL_RG_I.pdf#sec:analytical_sini",
        sectionMsinI:
            "https://willrg.com/documents/WILL_RG_I.pdf#sec:M_sin(i)",
    },

    // ----- Status & progress strings --------------------------------------
    status: {
        sniperRunning:
            'R.O.M. global sniper searching (β, κ) — this takes ~20–40 s in your browser',
        sniperDone: (betaStr) =>
            `sniper peak found · β = ${betaStr} · initialising posterior…`,
        mcmcChunk: (done, total, pct) =>
            `sampling the posterior · ${done} / ${total} steps · ${pct}%`,
        mcmcLocked: (n) => `posterior locked · ${n} samples`,
        mcmcWaiting: "waiting for the sniper…",
    },

    // ----- Reveal table headers & row labels -------------------------------
    reveal: {
        headers: {
            quantity:  "quantity",
            truth:     "sealed truth",
            recovered: "recovered from 1D light alone",
        },
        rows: {
            beta:   "orbital speed, as a fraction of light-speed",
            e:      "eccentricity of the orbit",
            i:      "inclination (folded to 0°–90°, see note)",
            P:      "orbital period (years)",
            omega:  "orientation of the long axis in the orbit plane (deg)",
            vz0:    "overall drift of the system toward/away from us (km/s)",
            Rs:     "Schwarzschild radius of the companion (m)",
            a:      "size of the orbit (AU)",
            rp:     "closest approach distance (AU)",
            prec:   "rate at which the orbit's long axis turns (arcsec/century)",
            M:      "companion mass in solar masses — legacy footnote",
        },
        caption:
            "Every row was reconstructed from a single one-dimensional stream " +
            "of light-frequency measurements, using only the speed of light. " +
            "Newton's gravitational constant and the companion's mass never " +
            "entered the fit. The last row is shown only for comparison with " +
            "classical astronomy: it is the Schwarzschild radius rewritten as " +
            "a mass, not an independent measurement. Inclination is reported " +
            "in the range 0° to 90° because radial-velocity data cannot tell " +
            "whether the orbit tips toward us or away from us — that piece of " +
            "information is genuinely absent from the signal, not from the " +
            "decoder.",
    },

    // ----- Invariant line --------------------------------------------------
    invariant: {
        label: "decryption invariant",
        undefinedMsg: "invariant undefined at this point",
        format: (lhs, residual) =>
            `LHS = <span class="accent-lock">${lhs.toFixed(8)}</span>  ·  ` +
            `|LHS − 2| = <span class="accent-lock">${residual.toExponential(3)}</span>`,
    },
};
