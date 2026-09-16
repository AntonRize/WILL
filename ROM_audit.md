# R.O.M. — machine-checked audit of the closed algebraic system

Companion to the WILL RG Part I audit. Every identity of the R.O.M. equation set is re-expressed as a residual that must vanish, reduced to a single canonical parameterization in the three unitless degrees of freedom `(beta, e, O)` plus the scale anchor `R_s`, the unit labels `c, G`, and the observer angles `(i, omega_i, theta_sur)`.

## Result

- **224 checks, 224 with the expected verdict, 0 problems.**
- 195 closed symbolically; 29 verified at 50 digits on 24 independent random admissible draws each (the method used in `ROM_FULL_TEST.ipynb`).
- 8 of the checks are **negative controls** — identities that *must* fail. Each one localises a specific discrepancy in the document; they are listed in the assumption ledger below.
- No symbol in any verified identity falls outside the declared registers, and `c` and `G` cancel wherever the Factorization Theorem says they must (layer R6: every unit-full quantity divided by its class scale is free of both).

### Verification method

`simplify()` and `radsimp()` are deliberately **not** used. On expressions containing symbolic rational powers such as `((1+e)/(1-e))**(1/2)` — which pervade the apsidal block — `radsimp` attempts to rationalize the denominator and blows up (integer explosion → `MemoryError`). Each check is therefore screened on a *relative* residual (the absolute residual divided by the largest additive term, since these identities are dimensionful and a true cancellation to 50 significant digits still leaves an absolute residual proportional to the terms being cancelled), and only then passed through a terminating normal-form cascade for symbolic closure.

### Where every number in the system comes from

| constant | provenance |
|---|---|
| `1` | unit normalisation of the relational ledger on each carrier |
| `2` | dim S^2/dim S^1 = DOF count (Closure Theorem); also R_s = 2GM/c^2 |
| `1/2` | hat_M = 1/2 (mass IS the scale); also the static bound beta^2 <= 1/2 |
| `3` | appears only as 2+1: the coefficient of the balance quadratic R_s^2 - 3aR_s + ... and of 3 beta^2 in tau_Y^2. Also the 1/3 spin share from DOF-indifference across three rotational DOF (assumption S3). |
| `4, 8` | squares and cross-terms of the DOF ratio: 1+8tau^2 in the balance inversion, 4 eta in the wave mismatch, 8 pi^2 in Kepler III |
| `2/3` | photon-sphere root of 2 - 3 kappa_p^2 = 0; gives r = 1.5 R_s |
| `4*pi` | S^2 surface measure inherited from Part I (M = 4 pi rho a^3) |
| `8*pi` | 2 x 4pi: carrier surface measure times the R_s = 2GM/c^2 factor |
| `2*sqrt(2)*pi` | Universal Horizon Constant = pi/beta_sur^3 at beta_sur^2 = 1/2 |
| `6, 8 (chiral)` | binomial coefficients of (beta_orb +- beta_spin)^2 and ^4 after antisymmetrising -- derived, not fitted |
| `12*pi` | 2 pi x 6, the ablated chiral coefficient |

## Numerical reproductions (40-digit arithmetic)

### Mercury perihelion advance

| quantity | value |
|---|---|
| R_s of the Sun [m] | `2953.25008` |
| Δφ_RG, exact, per orbit [rad] | `5.01867565337e-7` |
| Δφ_GR, 1PN, per orbit [rad] | `5.01867573869e-7` |
| Δφ_RG − Δφ_GR per orbit [rad] | `-8.53143e-15` |
| −πR_s²/[a²(1−e²)] predicted [rad] | `-8.53143e-15` |
| residual of difference vs prediction | `1.29e-47` |
| Δφ_RG per century [arcsec] | `42.9807844914` |
| Δφ_GR per century [arcsec] | `42.980785222` |
| Δφ_RG − Δφ_GR per century [arcsec] | `-7.30646e-7` |
| omitted term / total precession | `1.7e-8` |

These reproduce the table in `Sec mercury` digit for digit.

### Sun–Earth L1 from observables only

| quantity | value |
|---|---|
| R_s(Sun) from θ_⊙, z_⊙, T_E [m] | `2954.79122` |
| R_s(Earth) from Moon's orbit [m] | `0.00895475` |
| Earth–Sun distance R_E [m] | `1.49622005e+11` |
| scale ratio μ = R_sE/R_s⊙ | `3.03059e-6` |
| R_L1 from the exact quintic [m] | `1.49625e+9` |
| R_L1 from the cube-root limit [m] | `1.501288e+9` |
| R_L1 from the classical CR3BP quintic [m] | `1.49624951e+9` |
| R.O.M. vs classical, relative | `3.322e-7` |
| cube-root approx vs exact root, relative | `0.00337` |
| value published in the paper [m] | `1.498e9` |

Neither `G` nor `M` enters anywhere in this chain.

## Checks by layer

### Layer R1 observables  (7 checks)

| id | claim | source | method | verdict |
|---|---|---|---|---|
| `R1.1` | kappa^2 = 1 - (1+z_kappa)^-2 inverts kappa_X = 1/(1+z_kappa) | Foundational Definitions | symbolic | OK |
| `R1.2` | beta^2 = 1 - (1+z_beta)^-2 inverts beta_Y = 1/(1+z_beta) | Foundational Definitions | symbolic | OK |
| `R1.3` | Z_sys = (1+z_kappa)(1+z_beta) = 1/tau | Observational Inputs | symbolic | OK |
| `R1.4` | tau = kappa_X beta_Y = sqrt((1-kappa^2)(1-beta^2)) | Observational Inputs | symbolic | OK |
| `R1.5` | tau_o = kappa_Xo beta_Yo = 1/Z_sys(O) | Phase Variables | numeric@50 | OK |
| `R1.6` | tau_Y^2 = kappa^2 + beta^2 - kappa^2 beta^2 = 3beta^2 - 2beta^4 | Global Unit-Free Parameters | symbolic | OK |
| `R1.7` | Q = sqrt(kappa^2+beta^2) = sqrt(3/2) kappa = sqrt(3) beta | Global Unit-Free Parameters | symbolic | OK |

Notes:

- `R1.1` — Gravitational redshift is the only input needed for the S^2 amplitude.
- `R1.7` — All three forms coincide only because of closure kappa^2 = 2 beta^2.

### Layer R10 optics  (12 checks)

| id | claim | source | method | verdict |
|---|---|---|---|---|
| `R10.1` | Symmetric phase buffer: Gamma(kappa_Xp) = 1 - kappa_p^2/2 | Thm Symmetric Phase Buffer Gradient | symbolic | OK |
| `R10.2` | Unified closure defect delta_phi = kappa_p^2(1+beta_p^2)/(beta_p^2(2-kappa_p^2)) | Eq closure defect | symbolic | OK |
| `R10.3` | e_phi = 1/delta_phi - 1 and the transit equation uses 1/e_phi | Eq e_phi | symbolic | OK |
| `R10.4` | Equation-list deflection denominator 2 beta_p^2 - kappa_p^2(1+beta_p^2) disagrees with the derivation (must fail) **(negative control)** | Global Unit-Free Parameters line vs Sec grav_deflection | symbolic | OK |
| `R10.5` | Weak-field limit at fixed beta_p: Delta_phi -> kappa_p^2(1+beta_p^2)/beta_p^2 | Verification of Topological Limits | symbolic | OK |
| `R10.5b` | It reduces to the document's kappa_p^2/beta_p^2 only for beta_p^2 << 1 | Verification of Topological Limits | symbolic | OK |
| `R10.6` | Photonic limit beta_p=1: e_gamma = (2-3kappa_p^2)/(2 kappa_p^2) | Verification of Topological Limits | symbolic | OK |
| `R10.7` | Photon sphere e_gamma = 0 gives kappa_p^2 = 2/3, r_p = 1.5 R_s | Verification of Topological Limits | symbolic | OK |
| `R10.8` | Capture shadow b = r_p/kappa_Xp = 1.5 sqrt(3) R_s ~ 2.598 R_s | Eq capture shadow | symbolic | OK |
| `R10.9` | Light-deflection entry 2 arcsin(kappa_p^2/kappa_Xp^2) is NOT the beta_p -> 1 limit of the boxed deflection (must fail) **(negative control)** | Global Unit-Free Parameters (light deflection) vs Eq deflection | symbolic | OK |
| `R10.10` | Both optics forms share the same weak-field limit 2 kappa_p^2 | Verification of Topological Limits | symbolic | OK |
| `R10.11` | Metric recovery: kappa_Xo^2 - kappa_Xo^2 beta_R^2 - kappa_Xo^2 beta_T^2 = tau_o^2 | Sec Schwarzschild Metric | numeric@50 | OK |

Notes:

- `R10.3` — Confirms the DERIVED deflection denominator beta_p^2(2-kappa_p^2)-...
- `R10.4` — NEGATIVE CONTROL / TRANSCRIPTION SLIP: the two printings of the deflection formula differ by the factor kappa_p^2 inside (2-kappa_p^2). The derivation via Gamma(kappa_Xp) supports the second form. residual does not vanish
- `R10.5` — Exact leading order in the field strength.
- `R10.5b` — The printed Rutherford limit silently also assumes beta_p^2 << 1; the exact leading coefficient carries the extra factor (1+beta_p^2).
- `R10.7` — Matches the GR photon sphere r = 3GM/c^2 exactly, with no metric.
- `R10.8` — Identical to the GR shadow radius 3 sqrt(3) GM/c^2.
- `R10.9` — NEGATIVE CONTROL: the two agree only at leading order 2 kappa_p^2 (the correct GR weak-field 4GM/(c^2 b)); they diverge at different radii (kappa_p^2 = 1/2 vs the photon sphere 2/3). The author already flags this section as approximate and under revision. residual does not vanish
- `R10.10` — So the disagreement is higher-order, not a weak-field error.
- `R10.11` — The four substantival posits (container, autonomous t, coordinate grid, scale c^2dt^2) are what turn this identity into a metric. cascade left 87 ops unresolved; verified numerically instead, max |residual| = 1.34e-51

### Layer R11 rotation  (15 checks)

| id | claim | source | method | verdict |
|---|---|---|---|---|
| `R11.1` | Kerr parameter a = beta GM/c^2 = beta R_s/2 given beta = a c^2/(GM) | Sec Kerr Without Metric | symbolic | OK |
| `R11.2` | a_max = R_s/2 = beta_max^2 r at r = R_s/(2 beta^2) | Eq invariant relationship | symbolic | OK |
| `R11.3` | r_+ = (R_s/2)(1+beta_Y) equals the standard Kerr outer horizon M + sqrt(M^2-a^2) | Sec Event Horizon | symbolic | OK |
| `R11.4` | r_- = (R_s/2)(1-beta_Y) equals the standard inner horizon | Sec Event Horizon | symbolic | OK |
| `R11.5` | Extremal beta=1: horizons merge at R_s/2 | Sec Event Horizon | symbolic | OK |
| `R11.6` | Ergosphere r_ergo = (R_s/2)(1+sqrt(1-beta^2 cos^2 theta)) equals the standard Kerr ergosurface | Sec Ergosphere | symbolic | OK |
| `R11.7` | At the equator r_ergo = R_s for any rotation parameter | Sec Ergosphere | symbolic | OK |
| `R11.8` | At the poles r_ergo coincides with the outer horizon | Sec Ergosphere | symbolic | OK |
| `R11.9` | r_min = R_s/kappa_max^2 = R_s/2 at kappa^2 = 2 (kinematically closed bound) | Sec Contextual Bounds | symbolic | OK |
| `R11.10` | Composite closure: kappa^2 = 2 beta_orb^2 + 2 beta_spin^2 + 4 beta_orb beta_spin | Eq symmetry breaker | symbolic | OK |
| `R11.11` | Chiral (spin-odd) part of tau_Y^2 = 6 b_o b_s - 8 b_o^3 b_s - 8 b_o b_s^3 | Eq chiral divergence | symbolic | OK |
| `R11.12` | Ablated (beta^4 -> 0, e = 0): Delta_phi = 12 pi b_o b_s | Eq ablated | symbolic | OK |
| `R11.13` | Legacy form: 12 pi (v/c)(J/(3Mcr)) = 4 pi v J/(M c^2 r) | Eq Lense-Thirring | symbolic | OK |
| `R11.14` | Applying v/M = G/(rv) gives 4 pi G J/(c^2 r^2 v), the standard per-orbit Lense-Thirring node precession | Eq Lense-Thirring | symbolic | OK |
| `R11.15` | The 'kinematic scaling identity' v/M = G/(rv) IS the circular orbit condition v^2 = GM/r | Eq Lense-Thirring | symbolic | OK |

Notes:

- `R11.3` — Exact agreement with the Kerr metric, derived without a metric.
- `R11.9` — Part I's additive S^2 closure capped kappa^2 <= 1; the ROTATING branch beta^2 = 1 is what licenses kappa^2 = 2. This is where the Part I internal boundary (A5) is resolved.
- `R11.11` — Isolated by antisymmetrising in beta_spin: matches the published polynomial term for term.
- `R11.14` — Matches Omega_dot T = [2GJ/(c^2 a^3)](2 pi a/v) for a circular orbit.
- `R11.15` — Not an independent relation: it is closure in legacy dress.

### Layer R12 waves (WIP)  (5 checks)

| id | claim | source | method | verdict |
|---|---|---|---|---|
| `R12.1` | Balance points B_a = arccos(-e), B_d = 2pi - arccos(-e) give four mean crossings per revolution for two active horizons | Lem Four Balance Points | symbolic | OK |
| `R12.2` | Strain h = kappa_obs^2/kappa_obs^2(theta) - 1 = -X/(1+X) | Thm Unitless Relational Wave | symbolic | OK |
| `R12.3` | Weak-relation limit h ~ -4 eta kappa_obs^2 beta_src^2 cos(2 theta) | Rem Weak relation | symbolic | OK |
| `R12.4` | Bound |X| <= 1/2 gives h in [-1/3, 1] | Rem Bound | symbolic | OK |
| `R12.5` | Correspondence: amplitude 8 G mu beta^2/(c^2 D) is exactly TWICE the standard quadrupole 4 G mu beta^2/(c^2 D) | Rem Correspondence | symbolic | OK |

Notes:

- `R12.1` — Both balance points satisfy r = a, so each horizon contributes two crossings; the source argument 2*theta follows by counting.
- `R12.4` — Uses 4 eta <= 1, kappa_obs^2 <= 1 and the STATIC bound beta_src^2 <= 1/2.
- `R12.5` — The author attributes the factor 2 to the historical R_s = 2GM/c^2 convention. It is a real factor-2 offset from the quadrupole formula, not an identity -- consistent with the WORK IN PROGRESS label.

### Layer R13 numerical  (10 checks)

| id | claim | source | method | verdict |
|---|---|---|---|---|
| `R13.1` | Mercury: Delta_phi_RG - Delta_phi_GR equals -pi R_s^2/(a^2(1-e^2)) | Sec mercury, Results table | symbolic | OK |
| `R13.2` | Mercury per century: 42.98 arcsec with a -7.3e-7 arcsec offset | Sec mercury, Results table | symbolic | OK |
| `R13.3` | L1: R_s(Sun) recovered from theta_sun, z_sun and T_Earth alone | Sec L1, Structural Parameters | symbolic | OK |
| `R13.4` | L1: Earth-Sun distance recovered as R_E = R_s(Sun)/kappa^2 | Sec L1, Structural Parameters | symbolic | OK |
| `R13.5` | L1: physical root of the quintic gives R_L1 ~ 1.5e9 m | Sec L1, Eq quintic | symbolic | OK |
| `R13.6` | The L1 quintic is exactly mu alpha^2 = (1-alpha)^3(1+alpha+alpha^2) | Sec L1, Eq quintic | symbolic | OK |
| `R13.7` | With alpha = 1-x: mu(1-x)^2 = x^3(3-3x+x^2), so mu -> 3x^3 and R_L1 = R_E (mu/3)^(1/3) | Sec L1, limit root | symbolic | OK |
| `R13.8` | Leading balance is exactly 3: lim_{x->0} x^3(3-3x+x^2)/x^3 = 3 | Sec L1, limit root | symbolic | OK |
| `R13.9` | The R.O.M. L1 quintic equals MINUS the classical CR3BP L1 quintic up to the single term mu gamma^3 (2-gamma) | Sec L1 vs classical restricted three-body problem | symbolic | OK |
| `R13.10` | Numerically the two L1 roots agree to ~3e-7 relative | Sec L1 vs classical restricted three-body problem | symbolic | OK |

Notes:

- `R13.1` — per orbit: RG = 5.01867565337e-7 rad, GR = 5.01867573869e-7 rad, difference = -8.53143e-15, predicted = -8.53143e-15, relative agreement = 1.51e-33
- `R13.2` — RG = 42.9807844914'' , GR = 42.980785222'' , difference = -7.30646e-7'' , omitted/total = 1.7e-8
- `R13.3` — from observables: 2954.79122 m vs 2GM/c^2 = 2953.25008 m (relative gap 0.000522); G and M never used.
- `R13.4` — R_E = 1.49622005e+11 m; mu = R_sE/R_sSun = 3.03059e-6
- `R13.5` — quintic root: 1.49625e+9 m; cube-root approximation: 1.501288e+9 m; published 1.498e9 m
- `R13.6` — Closed form not given in the paper: the quintic factors completely into a scale ratio against a cubic in the separation. Both sides are polynomials, so this is an exact identity in (alpha, mu).
- `R13.7` — The x and x^2 terms on the right are exactly the corrections the cube-root approximation drops; this is the relational analogue of the Hill-radius scaling.
- `R13.9` — Not claimed in the paper. The R.O.M. quintic is therefore the classical L1 quintic to O(mu gamma^3) ~ 1e-12 for the Sun-Earth system.
- `R13.10` — R.O.M. root = 1.49625e+9 m, classical CR3BP root = 1.49624951e+9 m, relative gap = 3.322e-7. The paper's 'better than 0.3%' claim is limited by the input observables, not by the quintic: the cube-root approximation (1.501288e+9 m) is itself 0.00337 away from the exact root.

### Layer R2 global chains  (47 checks)

| id | claim | source | method | verdict |
|---|---|---|---|---|
| `R2.1` | kappa = sqrt(R_s/a) | kappa chain | symbolic | OK |
| `R2.2` | kappa = (rho/rho_max)^(1/6) under the R.O.M. horizon-fixed rho_max | kappa chain vs rho_max entry | symbolic | OK |
| `R2.2b` | Printed chain entry kappa = sqrt(rho/rho_max) fails under the R.O.M. rho_max (must fail) **(negative control)** | kappa chain vs rho_max entry | symbolic | OK |
| `R2.2c` | With Part I's same-radius rho_max the printed form is exact | Part I Lem norm_id | symbolic | OK |
| `R2.3` | kappa = sqrt(kappa_p^2 (1-e)) | kappa chain | symbolic | OK |
| `R2.4` | kappa = sqrt(2(kappa_o^2 - beta_o^2)) | kappa chain | symbolic | OK |
| `R2.5` | kappa = sqrt(2 a g / c^2) | kappa chain | symbolic | OK |
| `R2.6` | kappa = kappa_sur sqrt(sin theta_sur) | kappa chain | symbolic | OK |
| `R2.7` | kappa = kappa_sur (tau_D/T)^(1/3) | kappa chain | numeric@50 | OK |
| `R2.8` | kappa = sqrt(kappa_o^2 eta_o) | kappa chain | symbolic | OK |
| `R2.9` | kappa^2 = (1/2)(3 - sqrt(1+8 tau_o(B_a)^2)) | kappa chain | numeric@50 | OK |
| `R2.10` | beta = kappa/sqrt(2) | beta chain | symbolic | OK |
| `R2.11` | beta = beta_p e_X^(-1/2) | beta chain | symbolic | OK |
| `R2.12` | beta = 2 pi a/(T c) | beta chain | symbolic | OK |
| `R2.13` | beta = (pi R_s/(T c))^(1/3) | beta chain | symbolic | OK |
| `R2.14` | beta = sqrt(kappa_p^2 (1-e)/2) | beta chain | symbolic | OK |
| `R2.15` | beta = beta_o sqrt(1-e^2)/sqrt(1+e^2+2e cos O) | beta chain | symbolic | OK |
| `R2.16` | beta^2 = R_s/(2a) (binding energy invariant) | beta^2 chain | symbolic | OK |
| `R2.17` | beta^2 = (pi R_s/(T c))^(2/3) | beta^2 chain | symbolic | OK |
| `R2.18` | beta^2 = kappa_o^2 - kappa_o^2/(2 delta_o) | beta^2 chain | symbolic | OK |
| `R2.19` | beta = sqrt(beta_sur^2 sin(theta_sur)) | beta chain | symbolic | OK |
| `R2.20` | R_s = beta^3 T c/pi | R_s chain | symbolic | OK |
| `R2.21` | R_s = beta_sur^3 tau_D c/pi | R_s chain | symbolic | OK |
| `R2.22` | R_s = kappa_o^2 r_o | R_s chain | symbolic | OK |
| `R2.23` | R_s = 8 pi^2 a^3/(T^2 c^2)  (Kepler III in scale form) | R_s chain | symbolic | OK |
| `R2.24` | R_s = (kappa^2/zeta) beta Delta_to c | R_s chain | symbolic | OK |
| `R2.25` | a = T beta c/(2 pi) | a chain | symbolic | OK |
| `R2.26` | a = Delta_to beta c/zeta | a chain | symbolic | OK |
| `R2.27` | a = (beta_o c/omega) sqrt(1-e^2)/sqrt(1+e^2+2e cos O) | a chain | symbolic | OK |
| `R2.27b` | Substituting the LOCAL omega_o instead breaks it (must fail) **(negative control)** | a chain, omega vs omega_o | symbolic | OK |
| `R2.28` | a = sqrt(1-e^2) K_i T c/(2 pi sin i) | a chain | symbolic | OK |
| `R2.29` | a = T c beta^3/(2 pi (K_i/sin i)^2 (1-e^2)) | a chain | symbolic | OK |
| `R2.30` | T = 2 pi sqrt(2) R_s/(kappa^3 c) | T chain | symbolic | OK |
| `R2.31` | T = 2 pi Delta_to/zeta | T chain | symbolic | OK |
| `R2.32` | omega = beta c/a | omega chain | symbolic | OK |
| `R2.33` | h = r_o beta_T c = r_o^2 omega_o (phase invariant) | h chain | symbolic | OK |
| `R2.34` | h = r_o^2 omega_o | h chain | symbolic | OK |
| `R2.35` | h = a beta c e_Y | h chain | symbolic | OK |
| `R2.36` | h = (kappa^2/kappa_o^2) beta_T a c | h chain | symbolic | OK |
| `R2.37` | M = beta^2 a c^2/G = R_s c^2/(2G) = 4 pi rho a^3 | M chain | symbolic | OK |
| `R2.38` | M = 4 pi rho a^3 | M chain | symbolic | OK |
| `R2.39` | M = beta^3 T c^3/(2 pi G) | M chain | symbolic | OK |
| `R2.40` | rho = kappa^2 c^2/(8 pi G a^2) | rho chain | symbolic | OK |
| `R2.40b` | g = kappa^4 c^2/(2 R_s) = kappa^2 c^2/(2a) = GM/a^2 | g chain | symbolic | OK |
| `R2.41` | R_sur = a sin(theta_sur) | R_sur chain | symbolic | OK |
| `R2.42` | t = a/c (temporal radius) | t chain | symbolic | OK |
| `R2.43` | E_beta = R_s c^4/(2 G beta_Y) and p_beta = beta E_beta/c | Global Unit-Full Parameters | symbolic | OK |

Notes:

- `R2.2` — R.O.M. fixes rho_max = c^2/(8 pi G R_s^2) AT THE HORIZON, so the ratio is kappa^6, not kappa^2. G and M still cancel.
- `R2.2b` — NEGATIVE CONTROL / NORMALISATION CLASH: the printed square-root form is Part I's, where rho_max = c^2/(8 pi G r^2) is evaluated at the SAME radius as rho. R.O.M. re-defines rho_max at the horizon instead, which turns the ratio into kappa^6. Either the chain entry needs the sixth root or rho_max needs Part I's same-radius definition. residual does not vanish
- `R2.2c` — Confirms the two conventions are each internally consistent; only the cross-document reuse of the symbol rho_max is not.
- `R2.4` — Holds at EVERY phase O: the vis-viva invariant.
- `R2.9` — At the balance point tau_o = tau, so one spectroscopic reading gives kappa^2. max |residual| over 24 random draws = 1.78e-51
- `R2.22` — True at every phase -- the field identity is phase-local.
- `R2.27` — The GLOBAL omega is required here, exactly as printed: the phase factors reduce beta_o back to beta.
- `R2.27b` — NEGATIVE CONTROL: confirms the printed omega is correct and the entry is not a typo for the phase-local omega_o. residual does not vanish
- `R2.38` — Carries the Part I 4pi (S^2 surface) normalisation, not Newton's 4pi/3.
- `R2.40b` — Three forms of the surface gravity label; G and M cancel in the first two.
- `R2.43` — Energy block is Part I's, rescaled by the anchor R_s instead of E_0.

### Layer R3 eccentricity  (24 checks)

| id | claim | source | method | verdict |
|---|---|---|---|---|
| `R3.1` | Projection balance at periapsis: 2 beta_p^2 = kappa_p^2 (1+e) | Thm Geometric Eccentricity, Eq proj-balance | symbolic | OK |
| `R3.2` | e = 1/delta_p - 1 = 2 beta_p^2/kappa_p^2 - 1 | Thm Geometric Eccentricity | symbolic | OK |
| `R3.3` | e = 1 - 2 beta_a^2/kappa_a^2 | Thm Geometric Eccentricity | symbolic | OK |
| `R3.4` | e = (r_a - r_p)/(r_a + r_p) | Eccentricity Relations | symbolic | OK |
| `R3.5` | e = 1 - eta_o(0) = eta_o(pi) - 1 | Eccentricity Relations | symbolic | OK |
| `R3.6` | e = eta_o(pi) - 1 | Eccentricity Relations | symbolic | OK |
| `R3.7` | e = sqrt(1 - beta_T^2 eta_o^2/beta^2) | Eccentricity Relations | symbolic | OK |
| `R3.8` | The quadratic e^2 + eta_o cos(O) e + (eta_o - 1) = 0 holds identically at every phase | Eccentricity Relations | symbolic | OK |
| `R3.8b` | Printed (+sqrt) root recovers e where cos(O) > 0 | Eccentricity Relations | numeric@50 | OK |
| `R3.8c` | Printed (+sqrt) root does NOT recover e near apoapsis, where cos(O) < -2e/(1+e^2) (must fail) **(negative control)** | Eccentricity Relations | numeric@50 | OK |
| `R3.8d` | The minus root recovers e where cos(O) < -2e/(1+e^2) | Eccentricity Relations | numeric@50 | OK |
| `R3.8e` | Branch switch is exactly the double root: the discriminant vanishes at cos(O) = -2e/(1+e^2) | Eccentricity Relations | symbolic | OK |
| `R3.8f` | The second root of the quadratic is (eta_o - 1)/e | Eccentricity Relations | numeric@50 | OK |
| `R3.9` | Shape factor chain e_X = r_a/r_p = delta_a/delta_p | Eccentricity Relations | symbolic | OK |
| `R3.10` | e_X = beta_p/beta_a = kappa_p^2/kappa_a^2 | Structural-Dynamical Equivalence | numeric@50 | OK |
| `R3.11` | e_X = kappa_a^2 beta_p^2/(kappa_p^2 beta_a^2) | Structural-Dynamical Equivalence | symbolic | OK |
| `R3.12` | delta_p = 1/(1+e), delta_a = 1/(1-e) | Perihelion/Aphelion Relations | symbolic | OK |
| `R3.13` | kappa_p = Q_p sqrt(2/(3+e)) | Perihelion Relations | symbolic | OK |
| `R3.14` | beta_p = kappa_p sqrt(1+e)/sqrt(2) | Perihelion Relations | symbolic | OK |
| `R3.15` | beta_p = r_p omega_o(0)/c | Perihelion Relations | numeric@50 | OK |
| `R3.16` | r_p = a(1-e), r_a = a(1+e) | Apsidal Relations | symbolic | OK |
| `R3.17` | B_a = arccos(-e) is where eta_o = 1 (r = a) | Relational Geometry (WILL) | symbolic | OK |
| `R3.18` | B_a = arccos(1 - 2 beta_p^2/kappa_p^2) = arccos(-e) | Relational Geometry (WILL) | symbolic | OK |
| `R3.19` | At B_a the closure condition kappa_o^2 = 2 beta_o^2 holds | Method B preamble | symbolic | OK |

Notes:

- `R3.7` — Equivalent to the phase invariant beta_T^2 eta_o^2 = beta^2(1-e^2).
- `R3.8` — This is the content of the inversion; the printed formula is its quadratic-formula root.
- `R3.8b` — Valid on the half of the orbit nearer periapsis. max |residual| over 24 random draws = 2e-51
- `R3.8c` — NEGATIVE CONTROL / BRANCH RESTRICTION: the second root is (eta_o-1)/e, also positive there, and e becomes the SMALLER of the two. The entry as printed needs a +- with a selection rule, like the ones already stated for Methods B and C. residual does not vanish
- `R3.8d` — Completes the branch structure the printed entry is missing. max |residual| over 24 random draws = 6.68e-51
- `R3.8e` — So the two roots coincide at O = arccos(-2e/(1+e^2)); the printed + sign is correct before that phase and the - sign after it.
- `R3.8f` — Identifies the spurious branch explicitly. max |residual| over 24 random draws = 6.95e-50
- `R3.10` — Structural (kappa on S^2) and dynamical (beta on S^1) ratios coincide. cascade left 31 ops unresolved; verified numerically instead, max |residual| = 4.46e-51
- `R3.17` — The balance point is defined by r = a, i.e. kappa_o = kappa.
- `R3.19` — So delta_o(B_a) = 1: the balance point is the local circular-equivalent state.

### Layer R4 phase  (18 checks)

| id | claim | source | method | verdict |
|---|---|---|---|---|
| `R4.1` | eta_o = kappa^2/kappa_o^2 = r_o/a | Phase Variables | symbolic | OK |
| `R4.2` | eta_o = 2 - 2 beta_o^2/kappa_o^2 | Phase Variables | symbolic | OK |
| `R4.3` | kappa_o = sqrt(R_s/r_o) | Phase Variables | symbolic | OK |
| `R4.4` | kappa_o = kappa eta_o^(-1/2) = kappa_p sqrt((1+e cos O)/(1+e)) | Phase Variables | numeric@50 | OK |
| `R4.5` | kappa_o = sqrt(beta^2 + beta_o^2) | Phase Variables | symbolic | OK |
| `R4.6` | kappa_o^2 = beta_R^2 + beta_T^2 + beta^2 (Orthogonal Signature) | Thm The Orthogonal Signature of the Orbit | numeric@50 | OK |
| `R4.7` | beta_o^2 = beta_R^2 + beta_T^2 | Phase Variables | numeric@50 | OK |
| `R4.8` | beta_o = kappa_o/sqrt(2 delta_o) | Phase Variables | numeric@50 | OK |
| `R4.9` | beta_o^2 = R_s/r_o - R_s/(2a) | Phase Variables | symbolic | OK |
| `R4.10` | beta_T = r_o omega_o/c | Phase Variables | symbolic | OK |
| `R4.11` | beta_T = kappa_o^2 sqrt(1-e^2)/(2 beta) | Phase Variables | symbolic | OK |
| `R4.12` | beta_T = R_s sqrt(1-e^2)/(2 beta r_o) | Phase Variables | symbolic | OK |
| `R4.13` | delta_o = kappa_o^2/(2 beta_o^2) | Phase Variables | symbolic | OK |
| `R4.14` | omega_o = a beta c e_Y/r_o^2 | Time-phase | symbolic | OK |
| `R4.15` | d(zeta)/dO = (1-e^2)^(3/2)/(1+e cos O)^2 (closed form = integral) | Time-phase | numeric@50 | OK |
| `R4.16` | zeta(0) = 0 (integration constant fixed) | Time-phase | symbolic | OK |
| `R4.17` | Delta_to = (T/2pi) zeta = zeta R_s/(2 beta^3 c) | Time-phase | symbolic | OK |
| `R4.18` | t_o = r_o/c | Phase Variables | symbolic | OK |

Notes:

- `R4.6` — Pythagorean replacement for vis-viva: no scalar potential subtraction. cascade left 20 ops unresolved; verified numerically instead, max |residual| = 8.35e-53
- `R4.15` — Verifies the closed form against the mean-anomaly integral by differentiating instead of integrating. cascade left 549 ops unresolved; verified numerically instead, max |residual| = 5.44e-51

### Layer R5 invariants  (15 checks)

| id | claim | source | method | verdict |
|---|---|---|---|---|
| `R5.1` | beta^2 = kappa_o^2 - beta_o^2 at every phase (vis-viva) | Prop Global Kinetic Amplitude | symbolic | OK |
| `R5.2` | beta^2 - beta_o^2 = kappa^2 - kappa_o^2 | Orbital Phase Invariants | symbolic | OK |
| `R5.3` | beta_T/kappa_o^2 = e_Y/(2 beta) | Orbital Phase Invariants | symbolic | OK |
| `R5.4` | beta_T^2 eta_o^2 = beta^2 (1-e^2) | Orbital Phase Invariants | symbolic | OK |
| `R5.5` | kappa_o^2/kappa^2 = a/r_o | Orbital Phase Invariants | symbolic | OK |
| `R5.6` | beta eta_o = 2 pi t_o/T | Orbital Phase Invariants | symbolic | OK |
| `R5.7` | (kappa_o^2/kappa^2) e_Y^2 = 1 + e cos O | Orbital Phase Invariants | symbolic | OK |
| `R5.8` | B_a - zeta(B_a) = zeta(B_d) - B_d | Orbital Phase Invariants | numeric@50 | OK |
| `R5.9` | Z_raw(O) tau(O) = 1 + K_i(cos(O+omega_i) + e cos omega_i) | Observer dependent | symbolic | OK |
| `R5.10` | Holographic Decryption Invariant = 2 (exactly) | Orbital Phase Invariants / Observer dependent | symbolic | OK |
| `R5.11` | Z_rawmax = Z_sys(-omega_i)(1 + K_i(1 + e cos omega_i)) | Observer dependent | symbolic | OK |
| `R5.12` | Z_rawmin = Z_sys(pi-omega_i)(1 + K_i(-1 + e cos omega_i)) | Observer dependent | symbolic | OK |
| `R5.13` | Closed form of Z_sys(-omega_i) matches the phase definition | Observer dependent | numeric@50 | OK |
| `R5.14` | Closed form of Z_sys(pi-omega_i) matches the phase definition | Observer dependent | numeric@50 | OK |
| `R5.15` | K_i = beta_int sin i | Observer dependent | symbolic | OK |

Notes:

- `R5.8` — Uses the descending branch zeta(>pi) = zeta_closed + 2pi. max |residual| over 24 random draws = 0
- `R5.9` — The line-of-sight factor is exactly what the phase product strips off.
- `R5.10` — Vanishes identically in e, omega_i, i and beta: the inclination and argument of periapsis cancel completely. Genuine invariant.

### Layer R6 factorization  (28 checks)

| id | claim | source | method | verdict |
|---|---|---|---|---|
| `R6.a` | a/S_X is free of c and G  (class: length) | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.a.hat` | closed form of the pure number hat_a | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.r_p` | r_p/S_X is free of c and G  (class: length) | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.r_p.hat` | closed form of the pure number hat_r_p | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.r_a` | r_a/S_X is free of c and G  (class: length) | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.r_a.hat` | closed form of the pure number hat_r_a | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.r_o` | r_o/S_X is free of c and G  (class: length) | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.r_o.hat` | closed form of the pure number hat_r_o | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.R_sur` | R_sur/S_X is free of c and G  (class: length) | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.R_sur.hat` | closed form of the pure number hat_R_sur | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.T` | T/S_X is free of c and G  (class: time) | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.T.hat` | closed form of the pure number hat_T | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.t` | t/S_X is free of c and G  (class: time) | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.t.hat` | closed form of the pure number hat_t | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.tau_D` | tau_D/S_X is free of c and G  (class: time) | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.tau_D.hat` | closed form of the pure number hat_tau_D | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.Delta_to` | Delta_to/S_X is free of c and G  (class: time) | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.omega` | omega/S_X is free of c and G  (class: frequency) | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.omega.hat` | closed form of the pure number hat_omega | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.h` | h/S_X is free of c and G  (class: specific angular momentum) | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.h.hat` | closed form of the pure number hat_h | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.M` | M/S_X is free of c and G  (class: mass) | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.M.hat` | closed form of the pure number hat_M | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.rho` | rho/S_X is free of c and G  (class: density) | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.rho.hat` | closed form of the pure number hat_rho | Thm Factorization of R.O.M. | symbolic | OK |
| `R6.Mhat` | Universal Geometric Mass: hat_M = 1/2 for EVERY bound system | Cor Universal Geometric Mass | symbolic | OK |
| `R6.tauDhat` | hat_tau_D(limit) = 2 sqrt(2) pi at kappa_sur -> 1 | Rem after Cor mass_half | symbolic | OK |
| `R6.rho.control` | Density class scale c^2/(G R_s) leaves a residual R_s (must fail) **(negative control)** | Thm Factorization table (second printing) | symbolic | OK |

Notes:

- `R6.a` — hat_a = 1/(2*beta**2)
- `R6.r_p` — hat_r_p = (1 - e)/(2*beta**2)
- `R6.r_a` — hat_r_a = (e + 1)/(2*beta**2)
- `R6.r_o` — hat_r_o = (1 - e**2)/(2*beta**2*(e*cos(O) + 1))
- `R6.R_sur` — hat_R_sur = sin(theta_sur)/(2*beta**2)
- `R6.T` — hat_T = pi/beta**3
- `R6.t` — hat_t = 1/(2*beta**2)
- `R6.tau_D` — hat_tau_D = pi*sin(theta_sur)**(3/2)/beta**3
- `R6.Delta_to` — hat_Delta_to = (-e*sqrt(1 - e**2)*sin(O)/2 + (e*cos(O) + 1)*atan(tan(O/2)/(sqrt(-1/(e - 1))*sqrt(e + 1))))/(beta**3*(e*cos(O) + 1))
- `R6.omega` — hat_omega = 2*beta**3
- `R6.h` — hat_h = sqrt(1 - e**2)/(2*beta)
- `R6.M` — hat_M = 1/2
- `R6.rho` — hat_rho = beta**6/pi
- `R6.Mhat` — Independent of beta, e, O: the mass label carries no relational information beyond the scale anchor R_s.
- `R6.tauDhat` — kappa_sur^2 = 1 means sin(theta_sur) = kappa^2 = 2 beta^2.
- `R6.rho.control` — NEGATIVE CONTROL: hat_rho would be beta**6/(pi*R_s), which still carries R_s. The first printing of the table (Historical Units Scale) gives c^2/(G R_s^2) and is the dimensionally correct one. residual does not vanish

### Layer R7 input channels  (12 checks)

| id | claim | source | method | verdict |
|---|---|---|---|---|
| `R7.E1` | e-channel E1: apparent angular speeds | Observational Input Channels | numeric@50 | OK |
| `R7.E2` | e-channel E2: apsidal Doppler pair | Observational Input Channels | symbolic | OK |
| `R7.E3` | e-channel E3: apsidal sky-angle ratio | Observational Input Channels | symbolic | OK |
| `R7.E4` | e-channel E4: balance-point phase e = -cos(B_a) | Observational Input Channels | symbolic | OK |
| `R7.E5` | e-channel E5: projections only | Observational Input Channels | symbolic | OK |
| `R7.B1` | beta-channel B1: transverse Doppler at a | Observational Input Channels | symbolic | OK |
| `R7.B2` | beta-channel B2: gravitational redshift at a | Observational Input Channels | symbolic | OK |
| `R7.B3` | beta-channel B3: combined shift at a balance point | Observational Input Channels | numeric@50 | OK |
| `R7.B4` | beta-channel B4: apsidal Doppler pair beta = sqrt(beta_p beta_a) | Observational Input Channels | symbolic | OK |
| `R7.B5` | beta-channel B5: two-point vis-viva | Observational Input Channels | symbolic | OK |
| `R7.B6` | beta-channel B6: surface channel | Observational Input Channels | symbolic | OK |
| `R7.indep` | Channel independence: the e-menu never constrains beta and vice versa | Rem after Cor mass_half | symbolic | OK |

Notes:

- `R7.E1` — Uses only a ratio of two angular speeds -- no length, no time unit. cascade left 14 ops unresolved; verified numerically instead, max |residual| = 1.34e-51
- `R7.B3` — This is exactly the Part I rotating-globes inversion beta^2 = (3-sqrt(1+8 tau^2))/4, re-derived here as an orbital channel. max |residual| over 24 random draws = 1.34e-51
- `R7.B5` — Independent of both r_1 and r_2: any two epochs give the same beta.
- `R7.indep` — E5 reduces to an identity in e alone with beta cancelling; the beta-menu is independent of e except through explicit e_X factors.

### Layer R8 horizon scale  (16 checks)

| id | claim | source | method | verdict |
|---|---|---|---|---|
| `R8.A` | Method A: R_s = r_1 r_2 (beta_1^2-beta_2^2)/(r_2-r_1) | Thm Two-Point Schwarzschild Scale | symbolic | OK |
| `R8.B` | Method B: R_s = (a/2)(3 - sqrt(1+8 tau(B_a)^2)) | Thm Balance Point Formula | numeric@50 | OK |
| `R8.B.pos` | Positive root of the balance quadratic gives R_s = 2a (kappa^2 = 2), outside the static bound (must fail as an R_s identity) **(negative control)** | Thm Balance Point Formula, root selection | numeric@50 | OK |
| `R8.B.quad` | The balance quadratic R_s^2 - 3 a R_s + 2a^2(1-tau^2) = 0 | Thm Balance Point Formula, Step 2 | numeric@50 | OK |
| `R8.C` | Method C: single-epoch formula at arbitrary phase | Thm Arbitrary Phase Formula | numeric@50 | OK |
| `R8.C.quad` | Method C quadratic (2a-r)R_s^2 - r(4a-r)R_s + 2ar^2(1-tau_o^2)=0 | Thm Arbitrary Phase Formula, Step 3 | symbolic | OK |
| `R8.C.reduce` | Method C reduces to Method B at the balance point r_o = a | Methods B and C consistency | numeric@50 | OK |
| `R8.D1` | tau_D = T sin(theta_sur)^(3/2) = 2 pi R_sur/(beta_sur c) | Thm Relational Density | numeric@50 | OK |
| `R8.D2` | tau_D = sqrt(pi/(G rho_sur)) | Thm Relational Density | numeric@50 | OK |
| `R8.D3` | R_s = (c/pi) tau_D beta_sur^3 | Thm Universal Horizon Constant | symbolic | OK |
| `R8.D4` | Universal Horizon Constant tau_D(limit) c/R_s = 2 pi sqrt(2) | Thm Universal Horizon Constant | symbolic | OK |
| `R8.D5` | rho_sur = kappa_sur^6 c^2/(8 pi G R_s^2) | rho_sur chain | symbolic | OK |
| `R8.D6` | rho_sur = pi/(G tau_D^2) | rho_sur chain | symbolic | OK |
| `R8.D7` | R_sur = cbrt(pi a^3/(G T^2 rho_sur)) | R_sur chain | numeric@50 | OK |
| `R8.D8` | cbrt(pi/(rho_sur G T^2)) = sin(theta_sur) | Observer dependent, theta_sur entry | numeric@50 | OK |
| `R8.D9` | Printed form theta_sur = cbrt(pi/(rho_sur G T^2)) (must fail) **(negative control)** | Observer dependent, theta_sur entry | symbolic | OK |

Notes:

- `R8.A` — Two astrometric radii plus two de-projected speeds. No period, no mass.
- `R8.B` — Negative root. One geometric scale plus one spectroscopic reading. max |residual| over 24 random draws = 4.74e-50
- `R8.B.pos` — NEGATIVE CONTROL: documents why the negative root is selected. residual does not vanish
- `R8.C` — Holds at every phase O, so a single epoch suffices when a is known. max |residual| over 24 random draws = 8.67e-49
- `R8.D2` — G cancels between rho_sur and the prefactor: tau_D is purely observational. cascade left 22 ops unresolved; verified numerically instead, max |residual| = 1.57e-51
- `R8.D4` — At kappa_sur^2 = 1 closure fixes beta_sur^2 = 1/2; G and M are absent.
- `R8.D6` — Density of the central body from period and angular radius alone.
- `R8.D8` — So the printed entry theta_sur = cbrt(pi/(rho G T^2)) is missing an arcsin; numerically harmless for small angular radii but formally a slip. cascade left 15 ops unresolved; verified numerically instead, max |residual| = 6.68e-52
- `R8.D9` — NEGATIVE CONTROL: the cube root returns sin(theta_sur), not theta_sur. residual does not vanish

### Layer R9 legacy laws  (15 checks)

| id | claim | source | method | verdict |
|---|---|---|---|---|
| `R9.1` | Gradient balance d(kappa_o^2)/dr = d(beta_o^2)/dr gives a_acc = -R_s c^2/(2r^2) = -GM/r^2 | Sec Classical Acceleration | symbolic | OK |
| `R9.2` | -R_s c^2/(2r^2) = -GM/r^2 under M = R_s c^2/(2G) | Sec Classical Acceleration | symbolic | OK |
| `R9.3` | Invariant ratio beta_T/kappa_o^2 = e_Y/(2 beta) is phase-free | Prop Invariant Ratio of Projections | symbolic | OK |
| `R9.4` | h = R_s c e_Y/(2 beta) is phase-independent | Thm Conservation of Angular Momentum | symbolic | OK |
| `R9.5` | Kepler III: a^3 = R_s c^2 T^2/(8 pi^2) | Sec Kepler's Third Law | symbolic | OK |
| `R9.6` | Kepler III in legacy form: a^3 = GM T^2/(4 pi^2) | Sec Kepler's Third Law | symbolic | OK |
| `R9.7` | Precession law: Delta_phi = 2 pi tau_Y^2/(1-e^2) | Thm Precession Law | symbolic | OK |
| `R9.8` | Closed form: Delta_phi = 3 pi R_s/(a(1-e^2)) - pi R_s^2/(a^2(1-e^2)) | Eq dphi-RG-closed | symbolic | OK |
| `R9.9` | Residual vs GR 1PN is exactly -2 pi beta^2 kappa^2/(1-e^2) | Eq dphi-residual | symbolic | OK |
| `R9.10` | First-order Taylor coefficient in R_s/a reproduces the GR 1PN formula 3 pi R_s/(a(1-e^2)) | Eq dphi-GR | symbolic | OK |
| `R9.11` | Second-order Taylor coefficient is exactly -pi R_s^2/(a^2(1-e^2)) | Eq dphi-residual | symbolic | OK |
| `R9.12` | The expansion TERMINATES: no third-order term exists | Eq dphi-RG-closed | symbolic | OK |
| `R9.13` | Dynamic horizon: at kappa^2=1 (beta^2=1/2) tau = 0 and tau_Y^2 = 1 | Sec Dynamic Event Horizon | symbolic | OK |
| `R9.14` | Dynamic horizon precession Delta_phi = 2 pi/(1-e^2) (a full extra revolution at e=0) | Sec Dynamic Event Horizon | symbolic | OK |
| `R9.15` | Omega = 1 - Delta_phi/(2 pi) closes the phase budget | Time-phase | symbolic | OK |

Notes:

- `R9.1` — Force is not introduced; dt enters only through the chain rule.
- `R9.3` — Its O-derivative vanishes identically -- that IS the conservation law.
- `R9.5` — Follows from substituting beta = 2pi a/(cT) and kappa^2 = R_s/a into closure; no mass and no G appear.
- `R9.8` — Exact, not expanded: substituting closure and kappa^2 = R_s/a suffices.
- `R9.9` — An algebraic identity in (R_s, a, e), not a numerical near-match.
- `R9.12` — Delta_phi is exactly quadratic in R_s/a, so 'GR 1PN as first-order RG' is the removal of ONE term, not the truncation of a series.

## Assumption ledger

Every place the chain rests on a stipulation rather than a derivation, plus every confirmed discrepancy. None of these is a fitted parameter.

| tag | kind | location | item | status |
|---|---|---|---|---|
| `S1` | inherited | Sec rom, preamble | Closure Theorem kappa^2 = 2 beta^2 and the field identity kappa^2 = R_s/r. | Imported from Part I, where both were audited (will_rg_core.py C3.1, C3.3). R.O.M. adds no new postulate here. |
| `S2` | stipulation | Thm Geometric Eccentricity, Step 1 | beta ~ 1/r from the angular invariant and kappa^2 ~ 1/r from the field identity, applied simultaneously at both apsides. | The two scalings have DIFFERENT powers (beta^2 ~ 1/r^2 vs kappa^2 ~ 1/r); that mismatch is exactly what produces e = 1/delta_p - 1. Load-bearing and not independently derived inside R.O.M. |
| `S3` | stipulation | Sec chiral, Eq beta_spin | beta_spin = a/(3r): a 3-DOF spin projected onto the 1-DOF orbital carrier gets exactly 1/3 of the amplitude. | Asserted from DOF-Indifference. It is the ONLY place the Lense-Thirring normalisation enters, and it is what makes R11.13-R11.14 land on the standard 4 pi G J/(c^2 r^2 v). Change the 1/3 and the agreement is lost, so this is a one-parameter-equivalent choice justified by a symmetry argument rather than derived. |
| `S4` | asserted relation | Thm Symmetric Phase Buffer Gradient | Gamma(beta_p) = (1+beta_p^2)/2 and Gamma(kappa_Xp) = (1+kappa_Xp^2)/2. | Stated as a symmetry requirement, not derived. Everything in the optics section rests on it, and the author flags the section as approximate (Rem after Thm Algebraic Einstein Ring). |
| `S5` | branch choice | Thms Balance Point / Arbitrary Phase | Negative root selected in both horizon-scale quadratics. | Verified: the positive root gives R_s = 2a, i.e. kappa^2 = 2, which is outside the static bound (control R8.B.pos). The selection is forced, not arbitrary. |
| `S6` | transcription slip | Global Unit-Free Parameters list | Deflection printed with denominator 2 beta_p^2 - kappa_p^2(1+beta_p^2); the derivation gives beta_p^2(2-kappa_p^2) - kappa_p^2(1+beta_p^2). | CONFIRMED DISCREPANCY (control R10.4). The derivation form is the correct one; the equation-list entry should be corrected. |
| `S7` | transcription slip | Thm Factorization, scale table | Density class scale printed as 1/R_s * c^2/G. | CONFIRMED DISCREPANCY (control R6.rho.control). Leaves a residual R_s in hat_rho. The earlier Historical Units Scale table prints c^2/(G R_s^2), which is the dimensionally correct entry. |
| `S8` | internal inconsistency | Light deflection entry | Delta_gamma = 2 arcsin(kappa_p^2/kappa_Xp^2) versus the beta_p -> 1 limit of the boxed deflection, 2 arcsin(2 kappa_p^2/(2-3kappa_p^2)). | CONFIRMED (control R10.9). They agree only at leading order and diverge at different radii. Consistent with the author's own 'only approximations' note. |
| `S9` | notation collision | Sec Kerr vs Sec rom | 'a' denotes the semi-major axis throughout R.O.M. but the Kerr rotation parameter J/(Mc) in Sec Kerr; 'h' denotes specific angular momentum but strain in Sec relational_waves. | No mathematical error found, but a_max = R_s/2 = beta_max^2 r reads as a statement about the semi-major axis unless the reader tracks the switch. Worth distinct glyphs. |
| `S10` | notation ambiguity | Phase Variables vs Sec angular_momentum | Phase formulae are written with cos(O) in one place and cos(o) in another, while Omega = O/o is explicitly NOT unity. | All phase identities verify when read consistently in O (layers R4, R5). Since o and O differ by the precession factor Omega, mixing the glyphs is a real ambiguity in the text. |
| `S13` | normalisation clash | kappa chain vs rho_max entry | kappa = sqrt(rho/rho_max) is printed in the kappa chain, but rho_max is defined at the HORIZON as c^2/(8 pi G R_s^2). | CONFIRMED DISCREPANCY (controls R2.2, R2.2b, R2.2c). Under R.O.M.'s own rho_max the ratio is kappa^6, so the entry needs a sixth root. The printed square root is Part I's identity, where rho_max is evaluated at the SAME radius as rho. Each convention is internally consistent; only the shared symbol is not. Note this also rescales Part I's bound 'kappa^2 <= 2 implies rho <= 2 rho_max'. |
| `S14` | branch choice | Eccentricity Relations | e = (-eta_o cos O + sqrt(eta_o^2 cos^2 O - 4(eta_o-1)))/2 is printed with a fixed + sign. | CONFIRMED RESTRICTION (controls R3.8b, R3.8c, R3.8d). Correct only where cos(O) > 0; for cos(O) < 0 both roots are positive and the physical one is the MINUS root. Needs a +- and a selection rule, as Methods B and C already carry. |
| `S15` | transcription slip | Observer dependent, theta_sur | theta_sur = cbrt(pi/(rho(R_sur) G T^2)). | CONFIRMED (controls R8.D8, R8.D9): the cube root evaluates to sin(theta_sur), so an arcsin is missing. Numerically indistinguishable for small angular radii (the Sun's 0.00465 rad), so it does not affect the L1 result. |
| `S11` | scope | Sec mercury, Sec S2test | Comparison targets are the ADDITIVE 1PN formulae. | Explicitly acknowledged by the author (Sec mercury, Interpretation). ROM_FULL_TEST.ipynb is stated to also compare against exact Schwarzschild geodesic integration; that comparison is not reproduced here. |
| `S12` | work in progress | Sec relational_waves | Relational wave amplitude is twice the standard quadrupole result. | CONFIRMED factor of 2 (control R12.5). The section is labelled WORK IN PROGRESS and the author states the offset explicitly. |

## Corollaries the formalization makes explicit

- The Part I internal boundary is resolved here: kappa^2 = 2 is reachable only on the KINEMATICALLY closed branch (beta^2 = 1), which is the rotating Kerr case. Part I's r_min = R_s/2 is therefore a Kerr statement, and the static bound remains r >= R_s (R11.9, Sec Contextual Bounds).
- The R.O.M. Kerr horizons and ergosurface are not approximations of the Kerr metric -- they are algebraically identical to it (R11.3, R11.4, R11.6), as are the photon sphere r = 1.5 R_s and shadow b = 1.5 sqrt(3) R_s (R10.7, R10.8).
- The precession expansion TERMINATES at second order (R9.12): Delta_phi is exactly quadratic in R_s/a. So 'GR 1PN as first-order RG' is not a truncation of an infinite series but the removal of one explicit term.
- The Holographic Decryption Invariant equals 2 identically in e, omega_i, i and beta (R5.10) -- inclination and argument of periapsis cancel completely. This is the one genuinely new closed-form invariant in R.O.M.
- Angular-momentum conservation is not a separate law: d/dO of beta_T/kappa_o^2 vanishes identically (R9.3), so h = R_s c e_Y/(2 beta) is a restatement of the phase parameterization.
- At the balance point B_a = arccos(-e) the measured tau equals the global tau, which is what makes Method B a single-reading determination of R_s (R3.17, R8.B) and reproduces Part I's rotating-globes inversion exactly (R7.B3).
- Eleven input channels (five for e, six for beta) all reduce to the same two numbers (layer R7), so the closed system really is basis-independent as claimed.
- The L1 quintic has an exact closed form not stated in the paper: mu alpha^2 = (1-alpha)^3 (1+alpha+alpha^2) (R13.6). Written as mu(1-x)^2 = x^3(3-3x+x^2) it differs from the CLASSICAL restricted three-body L1 quintic by exactly one term, mu x^3(2-x) (R13.9) -- so the two roots agree to 3e-7 relative (R13.10). The relational derivation reproduces the classical three-body result, not merely its Hill-radius leading order.

## Reproducing this

```
python build_rom_report.py   # writes will_rom_core_checks.csv and this report
python will_rom_core.py      # prints the pass/fail summary only
```

`will_rom_core.py` has no side effects on import. `run_all()` returns the records, `audit_zero_parameters()` returns the symbol and method census, `NUM` holds the numerical tables, and `CAN` is the canonical parameterization every check is reduced against. Adding a claim means adding one `eq(...)` call; set `VERBOSE = True` for per-check progress.
