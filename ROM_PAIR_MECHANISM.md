# Testing the Symmetry-Breaking Hypothesis for Binary Decay

**Hypothesis (Anton, July 2026):** the energy leak of a radiating binary comes from a chiral-style symmetry breaking on the *directed pair relation* (like the Kerr asymmetry, but not spin-based), with the causal lag of the relation as the breaking agent and the global structure of Part II (fundamental tone / horizon) as the receiver of the leaked energy.

**Verification:** `rom_pair_mechanism_test.py` (repo root) — 16/16 checks pass.
**Companion document:** `ROM_RADIATIVE_DECAY.md` (the decay-law skeleton this plugs into).

---

## Verdict in one paragraph

The hypothesis survives every test it could be given without introducing new numbers. The crude version of it (one-way lag) is decisively rejected by the existence of Mercury. The reciprocity-corrected version cancels exactly — which is *why* the closed conservative set works. The refined version — the odd leftover of the two-way causal handshake, acting on the pair's quadratic directed structure with ledger-balance weighting — produces, with **no fitting**: the missing mass-ratio factor η, the β⁵ speed scaling, the complete observed eccentricity dependence of *both* decay channels, the exact e = 0 relation between the channels that the closed set demands, and automatic circularisation. One pure number remains underived: the overall coupling strength λ (the value λ = 1/5 reproduces general relativity and the Hulse–Taylor pulsar to 0.02%). The previous session's result "two unknown functions are missing" is hereby reduced to "**one unknown number is missing**."

---

## What was computed

Setup: closed-set ellipse (β, e), two bodies with scales R_s1, R_s2, each carrying a *directed share* of the single pair relation. The share weighting is forced by the Energy Symmetry Law (ledger balance): each body's share is proportional to the *partner's* scale. Units G = c = 1, a = 1 inside the calculation. η = R_s1·R_s2/(R_s1+R_s2)².

### Stage 1 — one-way lag (naive version): REJECTED

Each body pulled toward where its partner *was* (lag angle = β_T, a quantity already in the closed set). Result:

    eps_W(naive) = 4π·β·(2+e²)/(2(1−e²)^{3/2})   — one power of β, not five.

For Mercury this predicts the orbit shrinks e-fold every ~457 orbits (~110 years). Mercury has survived ~1.9×10¹⁰ orbits. Excluded by ~8 orders of magnitude. (This is the historical Laplace aberration problem; any version of the hypothesis in which the lag acts one-way dies here.)

### Stage 2 — reciprocity handshake: cancels exactly

The relation is mutual (Q_{A→B} = Q_{B→A}). The symmetric two-way combination of lagged directions has zero transverse drag *exactly*, and its magnitude corrections are the same forwards and backwards — conservative shifts only, no leak, at every order. Framework meaning: **reciprocity is what protects the closed set from the Laplace catastrophe.** The conservative R.O.M. algebra is recovered.

### Stage 3 — the odd leftover on the directed pair: PASSES ALL SHAPE TESTS

The only piece that distinguishes forward from backward is the odd residual of the causal handshake. Acting on the pair, the framework's own rules select what it can couple to:

- **no breathing channel** — exterior rigidity d/dr(r·κ²) = 0 locks the outside relation to R_s (spherical pulsation cannot alter any exterior relation);
- **no one-sided channel** — ledger-balance weighting makes the pair's directed sum vanish identically (verified symbolically); this is where η enters;
- first surviving coupling: **five time-derivatives on the trace-free quadratic pair form** Q_ij.

With the coupling strength λ left free, the cycle-averaged results (all verified symbolically, exact in e):

    eps_W = 128π·λ · η·β⁵ · (1 + 73e²/24 + 37e⁴/96) / (1−e²)^{7/2}
    eps_h =  64π·λ · η·β⁵ · (1 + 7e²/8) / (1−e²)^{5/2}

Parameter-free predictions of the mechanism (independent of λ), all PASS:

1. leak ∝ η·β⁵ exactly (the missing mass-ratio factor and the "fifth power of speed" law emerge, not assumed);
2. eccentricity shape of the energy channel = the observed (Peters) enhancement, exactly;
3. eccentricity shape of the angular-momentum channel = the observed one, exactly;
4. e = 0 lock eps_h = eps_W/2 — the one constraint the closed set *forces* on any decay law (see ROM_RADIATIVE_DECAY.md §4 Step 6) — emerges automatically;
5. eccentric orbits circularise (de/dN < 0), automatically;
6. cycle identity ⟨P⟩ = −λ⟨(d³Q_ij/dt³)²⟩ holds (pure calculus check of the pipeline).

With λ = 1/5: both channels reproduce general relativity exactly, and PSR B1913+16's period drift comes out −2.4021×10⁻¹² against the observed −2.40263×10⁻¹² (0.02%, input-mass rounding).

### Stage 3b — falsifiable discriminator

If the breathing (trace) part of the pair form *did* leak, the eccentricity shape changes: same (1−e²)^{−7/2} envelope, different polynomial — a 0.39% difference at e = 0.617 (B1913+16's eccentricity). Current timing precision (~0.16%) disfavors the breathing variant at ~2σ but does **not** exclude it. Improved timing of eccentric pulsars can decide. So the framework's exterior-rigidity selection rule is *testable*, not just aesthetic.

---

## Where the tone (Part II) fits

- **Why decay exists at all:** Part II's Phase Closure theorem states that only configurations returning to exactly the same phase (whole-number windings) "neither grow nor decay." A generic binary never phase-closes → it is a transient by the framework's own theorem → it must evolve. 
- **Receiver without a container:** the closed universe of Part II (Self-Interaction lemma — every propagated relation re-encounters itself) plays the role of a *perfect absorber*. A perfect absorber leaves no fingerprint of its own structure on the leak rate — consistent with the double pulsar matching tone-free predictions to 1.3×10⁻⁴ despite orbiting at 3×10¹⁴ times the fundamental tone.
- **Where decay stops:** the tone sets the floor, not the rate. A 2 M☉ binary reaches the Part II kinetic floor a_β = cH₀/6π at ~18,400 AU separation — precisely the wide-binary regime where Part II already reports the Gaia anomaly. The radiating binary (strong end) and the wide-binary anomaly (weak end) become the two ends of one bookkeeping.

---

## Honest accounting

**Imported structure (the hypothesis itself, one rule):** relations propagate at the causal limit both ways; the even (handshake) part is conservative; the odd leftover leaks to the global absorber with unit efficiency. The Taylor structure of the odd leftover is pure mathematics once propagation at c is granted; five derivatives and the quadratic form follow from the framework's own selection rules.

**Framework-forced ingredients:** share weighting (Energy Symmetry) → η; no-dipole; exterior rigidity → no-breathing; the e = 0 channel lock; the closed-set ellipse and averaging measure.

**Still underived: λ.** GR's value is 1/5, which in the standard derivation comes from how the leaked energy distributes over directions. The natural next task: derive λ from the S² carrier's angular weighting (2-DOF omnidirectional structure). If the framework's DOF-counting yields 1/5, the decay law is complete with zero free parameters. If it yields something else, the framework disagrees with GR at leading order in the decay rate — immediately falsifiable against B1913+16.

**Assumptions carried over from the skeleton:** adiabatic drift (leak per orbit ≪ 1), scale constancy at leading order, planar non-spinning pair (see ROM_RADIATIVE_DECAY.md §3).

---

*All computations in `rom_pair_mechanism_test.py`; runtime ~1 min; requires sympy + mpmath. Every claim above is a PASS/FAIL line in the script output.*
