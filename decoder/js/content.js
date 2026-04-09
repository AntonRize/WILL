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
            beta:   "β  (kinematic projection)",
            e:      "e  (eccentricity)",
            i:      'sin i  (inclination, folded to [0°,90°])',
            P:      "P  (period, years)",
            omega:  "ω  (argument of pericentre, deg, mod 360°)",
            vz0:    "v<sub>z0</sub>  (systemic, km/s)",
            Rs:     "R<sub>s</sub>  (Schwarzschild radius, m)",
            a:      "a  (semi-major axis, AU)",
            rp:     "r<sub>p</sub>  (pericentre, AU)",
            prec:   "Δω  (precession, arcsec/century)",
            M:      "M  (legacy, M<sub>☉</sub>) — footnote",
        },
        caption:
            "Every recovered quantity was reconstructed from a one-dimensional " +
            "stream of light-frequency measurements, using only the speed of " +
            "light and the two dimensionless projections (β, κ). Newton's G " +
            "and the companion's mass M never entered the fit. " +
            "Inclination is reported in [0°, 90°] because radial velocity is " +
            "sensitive only to sin i; the sign of cos i cannot be recovered " +
            "from RV alone — this is a property of the signal, not of R.O.M.",
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
