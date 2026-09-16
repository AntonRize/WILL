# WILL Relational Geometry I — machine-checked audit of the zero-parameter core

Every boxed identity of `WILL_RG_I` is re-expressed as a SymPy residual that must
vanish identically. A claim counts as verified only when `simplify(residual) == 0`
and every symbol it consumed belongs to a declared register.

## Result

- **68 checks, 68 with the expected verdict, 0 problems.**
- 67 residuals vanish identically; 1 check (`C1.5`) is a negative control designed to leave a non-zero residual.
- Symbols appearing outside the declared registers: `R` — the deliberately smuggled carrier radius of the negative control, and nothing else.
- No symbol in any verified identity is a fitted quantity. `c`, `G`, `M`, `E_0`, `R_s` enter only through the `SCALE` register and cancel wherever the paper claims they do (checks `C6.2`, `C7.5`, `C8.1`).

### Where every number in the core comes from

| constant | provenance |
|---|---|
| `1` | unit normalisation of the relational ledger on each carrier |
| `2` | dim S^2 / dim S^1 = DOF count (Closure Theorem); also R_s = 2GM/c^2 bookkeeping |
| `1/2` | first Taylor coefficient of sqrt(1-x) -- origin of the classical 1/2 |
| `3` | volumetric proxy exponent r^3, fixed by r-independence of the mass label |
| `4` | square of the DOF ratio entering the tau inversion (1+8 tau^2 quadratic) |
| `8` | 8 pi G/c^4 legacy coupling; and the 8 in 1+8 tau^2 from the closure quadratic |
| `1/4` | root of the closure quadratic beta^2 = (3 - sqrt(1+8 tau^2))/4 |
| `4*pi` | surface measure of the S^2 carrier (NOT Newton's 4pi/3 volume measure) |
| `8*pi` | 2 x 4 pi: carrier surface measure times the R_s = 2GM/c^2 factor |
| `19/32, 3/8` | higher Taylor coefficients of the exact RG ratio (derived, not fitted) |

## Earth–GPS numerical reproduction (40-digit arithmetic)

| quantity | value |
|---|---|
| Δt_RG, exact ratio [µs/day] | `38.5421472752` |
| Δt_GR, additive 1PN [µs/day] | `38.5421472451` |
| Δt_RG − Δt_GR [µs/day] | `3.01678e-8` |
| δ_RG⁽²⁾·D·M predicted [µs/day] | `3.01678e-8` |
| residual of difference vs prediction | `2.21e-17` |
| closure residual β²_GPS − κ²_GPS/2 | `0.0` |
| omitted term / total shift | `7.827e-10` |

These reproduce the table in `Sec earth-gps` of the source document exactly, including the `~1e-17` residual and the `~7.8e-10` relative size of the term the additive formula omits.

## Checks by layer

### Layer 1 carriers

| id | claim | source | residual | verdict |
|---|---|---|---|---|
| `C1.1` | S^1 closure beta^2 + beta_Y^2 = 1 under beta=cos(th1), beta_Y=sin(th1) | Thm carriers (a); Thm conservation | `0 ✓` | OK |
| `C1.2` | S^2 closure kappa^2 + kappa_X^2 = 1 under kappa=sin(th2), kappa_X=cos(th2) | Thm carriers (b); Thm conservation | `0 ✓` | OK |
| `C1.3` | Phase is fixed by amplitude: beta_Y = sqrt(1-beta^2) | Sec kinetic | `0 ✓` | OK |
| `C1.4` | Phase is fixed by amplitude: kappa_X = sqrt(1-kappa^2) | Sec potential | `0 ✓` | OK |
| `C1.5` | Any carrier radius R != 1 reintroduces a free parameter (must fail) | Thm carriers; Pr epistemic | `1 - R**2` | OK |

Notes:

- `C1.1` — Closure is the Pythagorean identity of the unit circle: no parameter.
- `C1.2` — Meridional great-circle section of S^2; ledger normalised to unity.
- `C1.5` — NEGATIVE CONTROL: residual 1-R^2 is the smuggled scale; vanishes only at R=1.

### Layer 2 spectroscopy

| id | claim | source | residual | verdict |
|---|---|---|---|---|
| `C2.1` | kappa^2 = 1 - 1/(1+z_kappa)^2  from  kappa_X = 1/(1+z_kappa) | Thm Spectroscopic Phase Shift | `0 ✓` | OK |
| `C2.2` | beta^2 = 1 - 1/(1+z_beta)^2  from  beta_Y = 1/(1+z_beta) | Thm Kinematic Phase Shift | `0 ✓` | OK |
| `C2.3` | Round trip: 1+z_kappa = 1/kappa_X recovers kappa | Thm Spectroscopic Phase Shift | `0 ✓` | OK |
| `C2.4` | tau = 1/[(1+z_kappa)(1+z_beta)] = kappa_X*beta_Y | Thm Operational Measurability, step 1 | `0 ✓` | OK |
| `C2.5` | tau^2 = 1 - (kappa^2+beta^2) + kappa^2 beta^2 | Thm Operational Measurability, step 2 | `0 ✓` | OK |
| `C2.6` | Lorentz factor is the reciprocal phase: gamma = 1/beta_Y | Summary after Thm restenergy | `0 ✓` | OK |

Notes:

- `C2.2` — Transverse Doppler: observer's own amplitude vanishes against its local frame.
- `C2.5` — Multiplicative composition of the two phases -- source of the cross term.

### Layer 3 closure

| id | claim | source | residual | verdict |
|---|---|---|---|---|
| `C3.1` | Closure kappa^2 = 2 beta^2 by eliminating ledger-per-DOF ell | Thm Closure; Lem DOF-Indifference | `0 ✓` | OK |
| `C3.2` | Closure is equivalent to the DOF ratio itself | Thm Closure | `0 ✓` | OK |
| `C3.3` | Spatial distance: r = R_s/kappa^2  <=>  kappa^2 = R_s/r | Thm Inverse-Distance Potential Amplitude | `0 ✓` | OK |
| `C3.4` | Closure factor delta = kappa^2/(2 beta^2) equals 1 exactly on closure | Def Closure Factor | `0 ✓` | OK |
| `C3.5` | Eccentricity e = 2 beta^2/kappa^2 - 1 vanishes for a closed circular state | Rem scope (ROM eccentricity) | `0 ✓` | OK |
| `C3.6` | No singularity: beta_max^2=1 -> kappa_max^2=2 -> r_min = R_s/2 | Sec no_singularities | `0 ✓` | OK |
| `C3.7` | Static bound kappa^2 <= 1 forces beta^2 <= 1/2 for closed static states | Thm Closure + S^2 additive closure | `0 ✓` | OK |
| `C3.8` | Channel independence: the 1/r channel and the factor-2 channel share only kappa | Box Structural Independence of the Force Law and Virial Coefficient | `0 ✓` | OK |
| `C3.9` | Virial: closure kappa^2=2beta^2 <=> |V| = 2T with T=m v^2/2, V=-GMm/r | Rem Geometric Origin of Physical Law | `0 ✓` | OK |

Notes:

- `C3.1` — beta^2 = 1*ell, kappa^2 = 2*ell -> kappa^2/beta^2 = 2 = dim S^2 / dim S^1.
- `C3.3` — r is DEFINED as inverse amplitude per DOF (1/kappa * 1/kappa); no metric input.
- `C3.5` — e = 1/delta - 1, so circularity and closure are the same statement.
- `C3.7` — Derived corollary: circular closure saturates at beta = 1/sqrt(2), i.e. r = R_s.
- `C3.8` — shared symbols = {kappa}; r absent from closure, beta absent from the distance law.
- `C3.9` — |V| = (kappa^2/2)E_0 and T = (beta^2/2)E_0, so the virial coefficient IS the DOF ratio.

### Layer 4 energy

| id | claim | source | residual | verdict |
|---|---|---|---|---|
| `C4.1` | Invariant internal projection: E_beta * beta_Y = E_0 | Thm Invariant Projection of Rest Energy | `0 ✓` | OK |
| `C4.2` | E_beta^2 = p_beta^2 + m^2 (c=1) with p_beta = E_beta*beta, m = E_0 | Cor Energy--Momentum Relation | `0 ✓` | OK |
| `C4.3` | Trigonometric form: E_beta^2 = (cot(th1) E_0)^2 + E_0^2 | Rem Geometric Forms | `0 ✓` | OK |
| `C4.4` | Restoring c: p_beta = gamma m v | Rem Units sanity check | `0 ✓` | OK |
| `C4.5` | Gravitational analogue: E_kappa^2 = (p_kappa c)^2 + (m c^2)^2 | Sec Gravitational Tangent Formulation | `0 ✓` | OK |
| `C4.6` | Geometric equivalence: radial free fall beta=kappa gives p_beta = p_kappa | Rem Ontological Status of p_kappa | `0 ✓` | OK |
| `C4.7` | Equivalence principle: m_g = m_i = E_0/c^2 (single rest invariant) | Lem Equivalence of Inertial and Gravitational Response | `0 ✓` | OK |
| `C4.8` | Composition independence: channel decomposition E_0 = sum E_0^(a) cancels | Rem Composition-Independence | `0 ✓` | OK |
| `C4.9` | Reciprocal duality at beta=0: E * E_kappa = E_0^2 | Sec energy quantities | `0 ✓` | OK |
| `C4.10` | Energy symmetry: Delta E_{A->B} + Delta E_{B->A} = 0 | Thm Energy Symmetry | `0 ✓` | OK |
| `C4.10b` | Control: the same antisymmetry holds for an ARBITRARY state function | Thm Energy Symmetry (scope probe) | `0 ✓` | OK |
| `C4.11` | Kinematic phase exhaustion beta_Y->0 gives E -> oo (speed of light) | Thm Universal Rate of Change and the Horizon of Causality | `0 ✓` | OK |
| `C4.12` | Potential phase exhaustion kappa_X->0 gives E -> 0 (event horizon) | Thm Universal Rate of Change and the Horizon of Causality | `0 ✓` | OK |

Notes:

- `C4.2` — Pure restatement of S^1 closure; mass enters only as the invariant E_0.
- `C4.7` — Both momenta are the SAME E_0 scaled by different phase ratios.
- `C4.8` — Every internal channel scales by the identical phase ratio kappa_X/beta_Y.
- `C4.10` — Antisymmetry of a state function difference: identically zero, no parameter.
- `C4.10b` — So the zero-sum law alone constrains nothing; all physical content sits in the specific form E = E_0 kappa_X/beta_Y (Lem Unified Relational Scaling).
- `C4.11` — limit = oo
- `C4.12` — limit = 0

### Layer 5 legacy

| id | claim | source | residual | verdict |
|---|---|---|---|---|
| `C5.1` | First-order phase ratio: kappa_X/beta_Y ~ 1 - kappa^2/2 + beta^2/2 | Sec linearized relational limit | `0 ✓` | OK |
| `C5.2` | Second order carries the cross term -kappa^2 beta^2/4 | Sec linearized relational limit | `0 ✓` | OK |
| `C5.3` | Linearized two-point law: (kappa_A^2-kappa_B^2)/2 + (beta_B^2-beta_A^2)/2 | Eq linearized_two_point | `0 ✓` | OK |
| `C5.4` | Newtonian Hamiltonian H = m v^2/2 - GMm/r as the single-point collapse | Sec Hamiltonian | `0 ✓` | OK |
| `C5.5` | Minkowski interval = S^1 closure x (posited c^2 dt^2) | Sec SR_interval | `0 ✓` | OK |
| `C5.6` | Schwarzschild g_tt = S^2 closure x (posited c^2 dt^2) | Sec GR_interval | `0 ✓` | OK |
| `C5.7` | GR dictionary: kappa_X = sqrt(-g_tt) for static spacetimes | Legacy Dictionary | `0 ✓` | OK |

Notes:

- `C5.1` — The classical factor 1/2 is the first Taylor coefficient -- not a postulate.
- `C5.2` — second-order coefficient = 3*beta**4/8 - beta**2*kappa**2/4 - kappa**4/8
- `C5.3` — The constant 1 cancels: only differences of squared amplitudes survive.
- `C5.4` — Requires the operationally impossible frame at infinity (kappa_A=beta_A=0).
- `C5.5` — Four posits (container, xyz, autonomous t, scale c^2dt^2) added to beta^2+beta_Y^2=1.
- `C5.6` — Same four posits; kappa^2 localized as R_s/r introduces r, G, M.
- `C5.7` — Pragmatic translation, not an ontological identity.

### Layer 6 field

| id | claim | source | residual | verdict |
|---|---|---|---|---|
| `C6.1` | Mass label from geometry: M = kappa^2 c^2 r /(2G) via R_s = 2GM/c^2 | Sec density | `0 ✓` | OK |
| `C6.2` | Normalised identity kappa^2 = rho/rho_max (G and M cancel) | Lem norm_id; Eq unified_field | `0 ✓` | OK |
| `C6.3` | Self-consistency forces n=3 and alpha=4pi in M = alpha r^n rho | Sec Self-Consistency Requirement | `0 ✓` | OK |
| `C6.4` | Closure of the loop: M = 4 pi r^3 rho reproduces M = kappa^2 c^2 r/(2G) | Sec Self-Consistency Requirement | `0 ✓` | OK |
| `C6.5` | Equation of state P = -rho c^2 from the radial balance relation | Sec pressure | `0 ✓` | OK |
| `C6.6` | Saturation: P_max = -c^4/(8 pi G r^2) at kappa^2 = 1 | Sec pressure | `0 ✓` | OK |
| `C6.7` | Vacuum field equation d(r kappa^2)/dr = 0 gives r kappa^2 = R_s | Sec Field Equation and Matter Sources | `0 ✓` | OK |
| `C6.8` | Matter source: d(r kappa^2)/dr = 8 pi G r^2 rho_matter/c^2 is dimensionally closed | Eq will_field_diff | `0 ✓` | OK |
| `C6.9` | Bounds: kappa^2 <= 2 implies rho <= 2 rho_max | Sec no_singularities | `0 ✓` | OK |

Notes:

- `C6.2` — S^2 surface normalisation 1/(4pi) applied to M/r^3; both G and M drop out.
- `C6.3` — n is fixed by r-independence of M; alpha then follows. Note 4pi, not Newton's 4pi/3.
- `C6.5` — d(kappa^2)/dr = -kappa^2/r drives the negative surface tension.
- `C6.7` — The 1/r law is the vacuum solution of the accumulation equation.
- `C6.8` — Substituting rho_matter = rho_field reduces the source term to kappa^2 itself.

### Layer 7 globes

| id | claim | source | residual | verdict |
|---|---|---|---|---|
| `C7.1` | Total phase of the closed pair: tau_AC^2 = (1-2 beta^2)(1-beta^2) | Sec Newton's Question Answered | `0 ✓` | OK |
| `C7.2` | Inversion beta^2 = (3 - sqrt(1+8 tau^2))/4 solves the closure quadratic | Eq globes-answer | `0 ✓` | OK |
| `C7.3` | At tau=0 the inversion saturates at beta^2 = 1/2 (r = R_s) | Eq globes-answer | `0 ✓` | OK |
| `C7.4` | Inversion of the two-station shift gives R_sA(Z_A, t_A, Delta t_A) | Eq globes-RsA | `0 ✓` | OK |
| `C7.5` | kappa_AC^2 = R_sA/a with a = c t_d/2: the speed of light cancels | Eq globes-kappaAC | `0 ✓` | OK |
| `C7.6` | Cord share: kappa_d^2 = 2 beta_AC^2 - kappa_AC^2 | Thm Restoring Closure | `0 ✓` | OK |
| `C7.7` | Fully operational closed form for kappa_d^2 (two shifts, three light-times) | Eq globes-kappad-closed | `0 ✓` | OK |
| `C7.8` | Classical tension is the cord's ledger share: T = E_0 kappa_d^2/d | Sec Reductio ad Absurdum of the Classical Tension | `0 ✓` | OK |
| `C7.9` | Optional period label: T = pi t_d / beta_AC, N = pi/beta_AC | Rem Optional period | `0 ✓` | OK |

Notes:

- `C7.1` — kappa_X,tot uses kappa_tot^2 = 2 beta^2 from closure.
- `C7.2` — Physical branch: the (3+sqrt) root gives beta^2=1 and is discarded.
- `C7.5` — c does not appear in the result: two shifts and three light-times suffice.
- `C7.6` — Quadratic additivity across channels is DOF-indifference, not an extra postulate.
- `C7.8` — d = 2a, so T = E_0 kappa_d^2 / d. Force is not a primitive here.

### Layer 8 invariant

| id | claim | source | residual | verdict |
|---|---|---|---|---|
| `C8.1` | W_ILL = E T/(M L) reduces to 2 beta^2/kappa^2 -- all constants cancel | Sec willinvariant | `0 ✓` | OK |
| `C8.2` | W_ILL = 1 is EXACTLY equivalent to the closure theorem kappa^2 = 2 beta^2 | Sec willinvariant | `0 ✓` | OK |
| `C8.3` | Phase-normalised W_ILL = E_0 t_o^2/(m_0 r_o^2) = 1 given E_0=m_0c^2, r_o=c t_o | Sec willinvariant (phase-normalised form) | `0 ✓` | OK |
| `C8.4` | Sector coupling E_o/M_o = L_o/T_o | Sec willinvariant | `0 ✓` | OK |

Notes:

- `C8.1` — reduced form = 2*beta**2/kappa**2; a, G, c, m_0 all cancel identically.
- `C8.2` — So W_ILL carries no content beyond closure: it is closure in dimensionful dress.
- `C8.3` — Phases cancel pairwise; the residual content is the light-time relation r = c t.

### Layer 9 gps

| id | claim | source | residual | verdict |
|---|---|---|---|---|
| `C9.1` | GR 1PN coefficient equals kappa_E^2/2 + beta_E^2/2 - 3 kappa_E^2 varrho/4 | Eq delta-GR | `0 ✓` | OK |
| `C9.2` | First-order Taylor coefficient of the exact RG ratio reproduces it exactly | Eq delta-RG-1 vs delta-GR | `0 ✓` | OK |
| `C9.3` | Second-order coefficient matches the published 6-term expression | Eq delta-RG-2 | `0 ✓` | OK |
| `C9.4` | The beta^2 kappa^2 cross term is absent from any additive GR rearrangement | Interpretation (iii) | `0 ✓` | OK |
| `C9.5` | Numerical: Delta t_RG - Delta t_GR equals the predicted second-order term | Results table (numerical) | `0 ✓` | OK |
| `C9.6` | Numerical: circular closure residual beta_GPS^2 - kappa_GPS^2/2 vanishes | Methodology, Part II | `0 ✓` | OK |

Notes:

- `C9.2` — delta_RG^(1) = beta_E2/2 - 3*kappa_E2*varrho/4 + kappa_E2/2
- `C9.3` — delta_RG^(2) = beta_E2**2/8 + 3*beta_E2*kappa_E2*varrho/8 - beta_E2*kappa_E2/4 - 19*kappa_E2**2*varrho**2/32 + 3*kappa_E2**2*varrho/8 + kappa_E2**2/8
- `C9.4` — delta_GR is linear in each amplitude; the cross term is purely multiplicative.
- `C9.5` — Delta t_RG = 38.5421472752 us/day, Delta t_GR = 38.5421472451 us/day, difference = 3.01678e-8, predicted = 3.01678e-8, relative agreement = 7.33e-10
- `C9.6` — closure residual = 0.0

## Assumption ledger

Places where the chain rests on a stipulation rather than a derivation. None of these is a fitted parameter, but each is a load-bearing choice that an auditor should see stated explicitly.

| tag | kind | location | item | status |
|---|---|---|---|---|
| `A1` | convention | Thm carriers | Ledger on each carrier normalised to unity (unit radius). | Verified as the unique parameter-free choice: any radius R != 1 leaves the residual 1-R^2 (negative control C1.5). |
| `A2` | stipulation | Lem DOF-Indifference; Thm Restoring Closure | Independent channels add in quadrature: kappa_tot^2 = sum_i kappa_i^2. | Asserted from isotropy + minimalism, not independently derived. Load-bearing for the factor 2 (C3.1) and for the cord's share (C7.6). |
| `A3` | translation | Box Cross-Cultural Invariants | beta = v/c and kappa = v_e/c = sqrt(R_s/r). | Presented as translation into legacy vocabulary rather than definition. Empirically anchored via z_beta, z_kappa (C2.1-C2.2). |
| `A4` | branch choice | Eq globes-answer | Root selection in beta^2 = (3 - sqrt(1+8 tau^2))/4. | The (3 + sqrt) root gives beta^2 = 1 and is discarded on physical grounds. Both roots solve the quadratic (C7.2). |
| `A5` | internal boundary | Sec no_singularities vs Sec potential | r_min = R_s/2 requires kappa_max^2 = 2, but additive S^2 closure caps kappa^2 <= 1. | Inside Part I the additive closure restricts CLOSED STATIC states to beta^2 <= 1/2, i.e. r >= R_s (C3.7). kappa^2 = 2 is reachable only after the promotion to the multiplicative phase tau^2 = beta_Y^2 kappa_X^2 (deferred to R.O.M. Kerr). r_min = R_s/2 is therefore NOT self-contained in Part I. |
| `A6` | asserted relation | Sec pressure | Radial balance P = (c^4/8 pi G)(1/r) d(kappa^2)/dr. | Stated without derivation in Part I. Given it, P = -rho c^2 follows identically (C6.5). |
| `A7` | translation | Sec density | 3D volumetric proxy r^3 plus 1/(4 pi) S^2 surface normalisation. | Explicitly declared as a legacy-translation interface. Self-consistency then forces n=3, alpha=4 pi (C6.3-C6.4). NOTE: M = 4 pi r^3 rho differs from Newton's M = (4 pi/3) r^3 rho by a factor 3, so 'rho' here is not numerically the Newtonian mass density; the identity kappa^2 = rho/rho_max is internally consistent but convention-dependent. |
| `A8` | no new content | Sec willinvariant | W_ILL = E T/(M L) = 1. | Reduces identically to 2 beta^2/kappa^2 (C8.1), so W_ILL = 1 IS the closure theorem in dimensionful dress. The phase-normalised form additionally needs r_o = c t_o (C8.3). No independent predictive content. |
| `A9` | scope | Sec earth-gps | GPS comparison target is the ADDITIVE 1PN formula. | Acknowledged in the paper. Not a comparison against full geodesic integration in exact Schwarzschild plus SR kinematics. |
| `A10` | no new content | Thm Energy Symmetry | Delta E_{A->B} + Delta E_{B->A} = 0. | Holds for an arbitrary state function (control C4.10b). The law alone is vacuous; its content is entirely in E = E_0 kappa_X/beta_Y. |

## Corollaries the formalization makes explicit

- Closed static states satisfy beta^2 <= 1/2, i.e. orbital speed <= c/sqrt(2) and r >= R_s (C3.7) -- a sharper bound than r >= R_s/2 within Part I's additive closure.
- The virial coefficient is not an independent fact: |V| = 2T is literally kappa^2 = 2 beta^2 rewritten in legacy units (C3.9).
- Eccentricity and the closure factor are the same quantity: e = 1/delta - 1 (C3.5).
- W_ILL = 1 and kappa^2 = 2 beta^2 are the same statement (C8.1, C8.2).
- The GR/RG difference is controlled by the multiplicative cross term -beta^2 kappa^2/4, which no rearrangement of an additive 1PN sum can produce (C5.2, C9.3, C9.4).

## Reproducing this

```
python build_report.py      # writes will_rg_core_checks.csv and this report
python will_rg_core.py     # prints pass/fail summary only
```

`will_rg_core.py` has no side effects on import: `run_all()` returns the result records, `audit_zero_parameters()` returns the symbol census, and `GPS` holds the numerical table. Adding a claim means adding one `record(...)` call.
