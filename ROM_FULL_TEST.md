# R.O.M. — Algebraic Verification & Novelty Classification

**Scope (as agreed):** Algebra only. Derivations are *assumed correct and independent*; today we test **results**, not their origin. Two questions: (1) Is the closed system internally consistent? (2) For each relation — is it new, or does it have a twin in classical mechanics / SR / GR?

**Method.** Every multi-form identity was checked numerically at 12 random points to 50 significant digits, with `c` and `G` **also randomized** (so any unit-inconsistent identity fails, not just a lucky single point). The two curved-spacetime results (precession, light deflection) were compared term-by-term against the **exact Schwarzschild geodesic**, integrated numerically to 40 digits. Scripts: `rom_verify.py` (66 identities) and `rom_gr_series.py` (GR comparison).

---

## 1. Bottom line

I did not find new *physics* in the tested results. I did find that the system is **internally consistent** and is an **exact re-encoding of known orbital physics** at leading order, plus **specific higher-order departures from GR** that are either new falsifiable predictions or approximation artifacts — algebra alone cannot decide which.

Concretely:

- **66 / 66** internal identities hold to ~10⁻⁵⁰. The system is algebraically closed and consistent.
- Essentially every relation reduces to one of: **Newtonian circular-orbit / Kepler**, **vis-viva**, **angular-momentum conservation**, **SR transverse Doppler**, or the **Schwarzschild metric/redshift** — rewritten in two angle variables (θ₁, θ₂).
- The **"closure law" κ² = 2β² is exactly the circular-orbit condition** v² = GM/a. It is not a new postulate; it is Newton's circular orbit in disguise.
- **Precession and light deflection match GR exactly at leading order** (the famous 6πGM/c²a(1−e²) and the Einstein 2× deflection), but **diverge from GR at second order** — and the precession driver behaves qualitatively differently in the strong field.
- The **"Energy Symmetry Law" (ΔE_{A→B}+ΔE_{B→A}=0) is a tautology** (antisymmetric by construction). The **"Holographic Decryption Invariant = 2" is a genuine exact identity**, but a designed cancellation, not new dynamics.

I have **not** assessed the derivations, the foundational claims (SPACETIME ≡ ENERGY, relational origin, etc.), or any observational fit. Those were explicitly out of scope.

---

## 2. Internal consistency (66 identities, all PASS)

| Block | # checks | Result | What the block *is* |
|---|---|---|---|
| Closure & global projections | 5 | PASS | κ²=2β² ≡ circular orbit; Q=√3·β repackaging |
| Redshift & phase factors | 7 | PASS | grav. redshift (GR) + transverse Doppler (SR) |
| Orbital scales | 13 | PASS | Kepler III in many disguises |
| Angular momentum | 3 | PASS | h = √(GMa(1−e²)) = r²ω̇ (Kepler II) |
| Local kinematics | 11 | PASS | **vis-viva** + velocity decomposition |
| Named invariants | 2 | PASS | reduce to energy/ang-mom conservation |
| Eccentricity | 7 | PASS | ellipse geometry + ang-mom conservation |
| Peri / aphelion | 9 | PASS | same, evaluated at O=0, π |
| Balance points | 3 | PASS | B_a=arccos(−e): the true anomaly where r=a |
| Tensor translation | 4 | PASS | exact Schwarzschild g_tt, g_rr |
| Holographic invariant | 1 | PASS | exact conjugate-phase cancellation |
| Energy Symmetry | 1 | PASS | tautology (0 ≡ 0) |

Worst relative deviation across all 66: **~10⁻⁵⁰** (i.e., exact to machine-of-50-digits). No identity failed.

---

## 3. Classification of every relation

Legend: **C** = classical (Newton/Kepler/SR) · **G** = General Relativity (Schwarzschild) · **D** = definitional/redundant inside ROM · **X** = deviation from standard physics · **N** = parametrization-specific identity (true, no clean textbook twin) · **A** = auxiliary (introduces a new free symbol; not a closed identity).

| ROM relation | Cat. | Known twin / comment |
|---|---|---|
| κ² = 2β² (closure) | **C** | v² = GM/a, the circular-orbit speed. *Not new.* |
| β² = R_s/2a (binding) | C | specific orbital (kinetic/virial) energy |
| β = 2πa/Tc, β³ = πR_s/Tc, R_s = 8π²a³/T²c² | C | Kepler III |
| h_W = √(GMa(1−e²)) = r²ω̇ | C | Kepler II / angular-momentum conservation |
| β_o² = R_s/r − R_s/2a | C | **vis-viva** (textbook) |
| κ_o² = β² + β_o², κ_o²−β_o² = β² | C | vis-viva rearranged (energy constant) |
| β_T, β_R decomposition; r=a(1−e²)/(1+e cosO) | C | Keplerian ellipse + velocity components |
| e_X=(1+e)/(1−e)=r_a/r_p=β_p/β_a=κ_p²/κ_a² | C | ellipse geometry + ang-mom conservation |
| β² = 1 − 1/(1+z_β)² ; β_Y = 1/γ | C (SR) | transverse Doppler / Lorentz factor |
| κ² = 1 − 1/(1+z_κ)² ; κ_X = 1/(1+z_κ) | **G** | Schwarzschild gravitational redshift, √(1−R_s/r) |
| g_tt = −(1−κ²)c², g_rr = (1−κ²)⁻¹ | **G** | **exact** Schwarzschild metric |
| d/dr(r κ²)=0 ⟹ κ²=R_s/r | G | Schwarzschild vacuum solution |
| ISCO 3R_s, photon sphere 1.5R_s, horizon R_s | G | exact known critical radii (via r=R_s/κ²) |
| Δφ leading = 3πR_s/(a(1−e²)) | G | **exact** 1-PN perihelion advance |
| Δγ leading = 2R_s/r₀ | G | **exact** Einstein deflection (2× Newton) |
| massive-particle deflection (leading) | C/G | weak-field (R_s/r₀)(1+β²)/β² |
| τ = κ_X β_Y ; Z_sys = 1/τ | D / N | multiplicative SR×GR time dilation, renamed |
| Q = √(κ²+β²) = √3 β ; θ₁, θ₂ angles | N | the S¹/S² projective re-coordinatization |
| τ_Y² = 3β² − 2β⁴ | N | combined-dilation "defect"; **drives precession** |
| Holographic Decryption Invariant = 2 | N | exact identity; designed conjugate-phase cancellation |
| B_a = arccos(−e) | N | true anomaly where r=a and local closure holds |
| Δφ 2nd-order term −πR_s²/(a²(1−e²)) | **X** | GR term is **positive**; ROM is **negative** (see §4) |
| Δγ 2nd-order coeff (=2) | **X** | GR is 15π/16−1 ≈ 1.945 (see §4) |
| T⁰₀, Tⁱᵢ = ±κ²c⁴/8πGr² (P=−ρc²) | **X** | exterior Schwarzschild is **vacuum** (T=0); ROM assigns a w=−1 "field energy" — a reinterpretation |
| ΔE_{A→B}+ΔE_{B→A}=0 | **D** | **tautology** (antisymmetric by definition) |
| κ_R, τ_D, θ_sys, K_i, surface-radius forms | **A** | introduce new observational symbols; not closed identities in (c,G,M,a,e,O) — not falsifiable as identities |

---

## 4. The two curved-spacetime tests (where "new" could mean "different from GR")

Both quantities were compared to the **exact Schwarzschild geodesic**. The exact GR coefficients reproduced known closed forms (27π/4 for precession at e=0; 15π/16−1 for deflection), confirming the comparison is sound.

### Perihelion precession, per orbit (x = R_s/a)

| order | GR (exact Schwarzschild) | ROM = π(3x−x²)/(1−e²) | verdict |
|---|---|---|---|
| x¹ | 3π/(1−e²) | 3π/(1−e²) | **identical** (match to 10⁻⁹) |
| x² (e=0) | +27π/4 ≈ **+21.206** | −π ≈ **−3.142** | **different sign & size** |
| x² (e=0.5) | **+38.22** | −4π/3 ≈ **−4.189** | different |

So ROM's precession **is the GR result at 1-PN order**, then deviates: GR's next term is positive (precession *accelerates* as the field strengthens, diverging near the ISCO), while ROM's is negative. In the strong field, ROM's driver τ_Y² = 3β²−2β⁴ **peaks at β²=3/4 and falls back to zero** — bounded and non-monotonic — whereas GR diverges. For weak systems the x² term is ~10⁻⁸ of the leading term, so this does not conflict with Solar-System data; it is a **formula-level** difference.

### Light deflection (s = R_s/r₀)

| order | GR (exact) | ROM = 2·arcsin(s/(1−s)) | verdict |
|---|---|---|---|
| s¹ | 2 (Einstein, = 2× Newton) | 2 | **identical** |
| s² | 15π/16 − 1 ≈ **1.945** | **2** | different (~2.8%) |
| s³ | ≈ 2.138 | 7/3 ≈ 2.333 | different |

ROM reproduces the **Einstein value** (twice the Newtonian deflection) at leading order — the discriminator that historically confirmed GR over Newton — then differs at second order.

**Honest reading.** These second-order departures are the *only* place the tested results are not identical to standard physics. Two interpretations, and algebra cannot choose between them today: either (a) ROM's closed forms are exact and constitute **new, falsifiable predictions** that differ from GR (testable in principle, but below current precision for accessible weak-field systems, and GR is strongly confirmed where they'd diverge most), or (b) the closed forms are **leading-order constructions** and the higher-order terms are artifacts, in which case ROM ≡ GR+Newton at the level it actually controls and the content is representational.

---

## 5. The named invariants

- **Energy Symmetry Law**, ΔE_{A→B} + ΔE_{B→A} = 0. With ΔE_{A→B} = E₀(κ_{X,B}/β_{Y,B} − κ_{X,A}/β_{Y,A}) and ΔE_{B→A} the same with A,B swapped, the sum is **identically zero for any A, B** — it is antisymmetry by construction. It encodes "energy is a state function" (a conservative-field truism) but carries **no testable constraint** as written. The non-trivial object is the *quantity* κ_X/β_Y itself; the *law* is a tautology.

- **Holographic Decryption Invariant = 2.** This one is a **real identity**, verified exactly: writing Z_raw·τ = 1 + β_int(cos(O+ω_i)+e cos ω_i)sin i and evaluating at the conjugate phases O=−ω_i and O=π−ω_i, the line-of-sight terms cancel under the weights (1∓e cos ω_i), leaving exactly 2. It is mathematically true and slightly elegant, but it is a **designed cancellation** of a 2-parameter shift model at symmetric points — not a new conservation law.

---

## 6. What is genuinely distinctive (and what it is not)

**Distinctive (representational, internally consistent):** the S¹/S² two-angle projective coordinatization (β=cosθ₁, κ=sinθ₂); the single "relational spacetime factor" τ=κ_Xβ_Y unifying SR and GR time dilation; the invariant κ_o²−β_o²=β²; and the Holographic Invariant. These are coherent and occasionally neat ways to **organize** known mechanics.

**Not found:** a new conserved quantity or symmetry absent from classical mechanics. Every invariant I tested collapses to energy conservation, angular-momentum conservation, or vis-viva. No identity required physics beyond Newton + Kepler + SR transverse Doppler + Schwarzschild.

**The one substantive divergence from GR** is the higher-order precession/deflection structure (§4) and the non-vacuum stress-energy reinterpretation (T-block). These are where ROM is *not* a re-encoding — but they are also where, if taken literally, ROM would have to answer to strong-field GR tests that are already well confirmed.

---

## 7. Caveats / not checked

1. **Derivations assumed correct** (per instructions). This report tests *results*, so a result matching a textbook formula is classified as "equivalent," even though ROM claims to derive it independently. Equivalence of output ≠ equivalence of derivation.
2. **Auxiliary-symbol chains** (κ_R, τ_D, θ_sys, K_i, surface-radius and density-time forms) introduce free parameters and were not testable as closed identities in the base variables; they are definitions, not checks.
3. **No observational fit** (agreed scope). The second-order deviations from GR are below current measurement precision for weak-field systems but were not compared to data.
4. **Foundational claims** (SPACETIME ≡ ENERGY, relational origin, DOF-2:1, the WILL framework) were **not** evaluated — only the algebra of the closed system.
5. The "newness" verdict applies to the **tested algebraic content**. It is a statement about equivalence to known formulas, not a judgment of the program's value as a representation or of the untested higher-order predictions.

---

## 8. Reproduce

```
python3 rom_verify.py      # 66 internal identities, 50-digit, randomized c,G,M,a,e,O
python3 rom_gr_series.py   # exact-Schwarzschild comparison: precession, deflection, radii
```
