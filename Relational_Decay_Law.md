# Relational Decay Law for Radiating Binaries (R.O.M.)

**Sources:** `WILL DATABASE/WILL_RG_I.txt`, `WILL DATABASE/R.O.M..txt` (read in full; treated as ground hypothesis).
**Verification:** `rom_decay_verify.py` — 20/20 symbolic + numeric checks pass.

---

## 0. Status summary

Read this first; it is the honest boundary of the result.

**Forced by the closed system** (given assumptions A1–A3 below): the complete kinematic web of the inspiral — every decay rate (semi-major axis, period, eccentricity, precession, radiated ledger) is algebraically locked to exactly two per-cycle flux numbers; the exact energy bridge between period decay and radiated power; one exact constraint tying the two fluxes together at $e = 0$; the domain endpoint of the adiabatic law at the closed set's own marginal-stability invariant $Q^2 = 1/2$.

**Provably NOT determined by the closed system:** the two flux functions themselves — how much ledger leaves per cycle. Lemma 1 (§6) shows no function assembled from closed-set quantities can be the flux. This is not a defect of the derivation; it coincides with the framework's own statement (WILL_RG_I, sec:challenges): *"Gravitational waves and the full radiative two-body problem remain to be formulated... requires a relational description of propagating degrees of freedom on the carriers and remains an open technical task."*

Where the closed structure does not determine a step, this document states so and stops. The GR comparison appears only in §9.

---

## 1. Framework resources used

From the two source documents, exactly these elements are used:

Closed-set identities (R.O.M., section "Closed Algebraical System"): $\kappa^2 = 2\beta^2$ (Closure Theorem); $a = \frac{R_s}{\kappa^2} = \frac{R_s}{2\beta^2}$; $\beta^2 = \frac{R_s}{2a}$ (energy invariant / binding energy); $T = \frac{2\pi a}{\beta c} = \frac{\pi R_s}{\beta^3 c}$; $h_W = \frac{R_s c \sqrt{1-e^2}}{2\beta}$ (invariant angular momentum); $\Delta\phi = \frac{2\pi(3\beta^2 - 2\beta^4)}{1-e^2}$ (precession per orbit); $E_{\text{loc}} = E_0 \frac{\kappa_X}{\beta_Y}$ (Energy Symmetry Law scaling); the critical-state table (dynamic ISCO state: $\beta^2 = 1/6$, $\kappa^2 = 1/3$, $Q^2 = 1/2$, $r = 3R_s$).

Openness bookkeeping (WILL_RG_I, def:closure_factor and cor:condition): $\delta \equiv \frac{\kappa_o^2}{2\beta_o^2}$; closed systems satisfy $\langle\delta\rangle_{\text{cycle}} = 1$; *"Open systems display $\langle\delta\rangle_{\text{cycle}} \neq 1$, the magnitude of which quantifies the energy flow through unaccounted channels."* The Radiating Binary bullet: *"The closure defect $\delta$ quantifies the relational ledger lost to gravitational radiation. Including all channels restores closure."*

A point the documents leave implicit, made precise and verified here (script Part B): the cycle average in $\langle\delta\rangle_{\text{cycle}} = 1$ is the **time average**. Verified exactly: $\langle\kappa_o^2\rangle_t = 2\beta^2 = \kappa^2$ and $\langle\beta_o^2\rangle_t = \beta^2$ over one conservative cycle, for all $e \in (0,1)$. Phase-averaging does *not* close (it leaves a residue $-\frac{2\beta^2 e^2}{1-e^2}$); time-averaging closes identically. This fixes the measure in which the closure defect of a radiating binary is defined.

---

## 2. New symbols (all definitions, no physics added)

| Symbol | Definition | Meaning |
| --- | --- | --- |
| $N$ | cycle count | evolution parameter: number of completed orbital cycles. Chosen instead of an external time coordinate — cycle counting is relational chronometry, consistent with the framework's refusal of background time. |
| $\varepsilon_W$ | $\frac{d\ln(\beta^2)}{dN}$ | per-cycle fractional deepening of the energy invariant $\beta^2$. The energy-channel flux. Dimensionless. |
| $\varepsilon_h$ | $-\frac{d\ln(h_W)}{dN}$ | per-cycle fractional loss of the angular-momentum invariant $h_W$. The angular-momentum-channel flux. Dimensionless. |
| $\dot{T}$ | $\frac{dT}{dt_{\text{obs}}} = \frac{d\ln T}{dN}$ | dimensionless period drift (observer counts cycles with the drifting period: $dt_{\text{obs}} = T dN$). This is the binary-pulsar $\dot{P}_b$ observable. |
| $R_{s1}, R_{s2}$ | scales of the two bodies | needed only in §7/§9. $R_s \equiv R_{s1} + R_{s2}$. |
| $\eta$ | $\frac{R_{s1} R_{s2}}{(R_{s1}+R_{s2})^2}$ | symmetric scale ratio ($0 < \eta \leq 1/4$). Framework-compatible: the L1 section of R.O.M. already operates with two scales ($R_{sE}/R_{s\odot}$). |

---

## 3. Assumptions (complete list, each labeled)

* **A1 — Adiabatic representability** (assumption). The radiating binary is a sequence of closed R.O.M. states $(\beta(N), e(N))$ with per-cycle drifts $|\Delta\ln\beta^2|, |\Delta e| \ll 1$. The closed set classifies exact states only; representing an open system as a drifting sequence of closed states is an approximation the closed set does not itself supply. It is self-consistent wherever the resulting fluxes are small, and fails near marginal stability (see Step 5).
* **A2 — Scale constancy** (assumption, with stated error). $\frac{dR_s}{dN} = 0$ at leading order. The radiated ledger also drains the system scale, but by $\Delta\ln R_s \sim \eta \left(\frac{\beta^2}{2}\right) \varepsilon_W$ per cycle — suppressed by $\eta\beta^2$ relative to the orbital drift $\varepsilon_W$. Neglected terms are $\mathcal{O}(\eta\beta^2)$ of the terms kept.
* **A3 — Scope** (assumption). Planar, non-spinning two-body configuration; observer angles ($i, \omega_i$) constant; no spin channel. The Kerr/chiral sector of R.O.M. is not used.
* **A4 — Channel universality** (assumption; used only in §7). The fluxes are universal functions of the extended state: $\varepsilon_W = F_W(\beta, e, \eta)$, $\varepsilon_h = F_h(\beta, e, \eta)$.
* **A5 — Two-scale identification** (forced by consistency of the extension, not by the closed set; used only in §7/§9). For comparable scales the closed set's $R_s$ must be read as $R_{s1} + R_{s2}$, otherwise the Kepler identity $T = \frac{2\pi a}{\beta c}$ with $\beta^2 = \frac{R_s}{2a}$ fails for the relative orbit.

Given A1–A3, the following is **forced, not assumed**: the bound-sector state at fixed $R_s$ is the pair $(\beta, e)$. Therefore the entire radiative drift per cycle is exhausted by exactly two numbers — the drifts of the two invariants $\beta^2$ and $h_W$. Two channels, no more, no fewer (spin/orientation excluded by A3). This is the two-channel completeness property.

---

## 4. Derivation

**Step 1 — Object** [framework definition]. A radiating binary is a bound configuration whose orbital sector is relationally open (WILL_RG_I, Radiating Binary bullet). By cor:condition its per-cycle time-averaged closure defect measures the ledger leaving through the unaccounted channel. Under A1 it is a drifting sequence of closed states.

**Step 2 — Channels** [forced under A1–A3]. State = $(\beta, e)$ at fixed $R_s \Rightarrow$ the drift is fully specified by $\varepsilon_W$ and $\varepsilon_h$ (definitions in §2).

**Step 3 — Kinematic web** [forced; each line an exact identity of the closed set, differentiated at fixed $R_s$; verified symbolically]:

* From $a = \frac{R_s}{2\beta^2}$: **$\frac{d\ln a}{dN} = -\varepsilon_W$**
* From $T = \frac{\pi R_s}{\beta^3 c}$: **$\frac{d\ln T}{dN} = -\frac{3}{2}\varepsilon_W$**, hence the dimensionless period drift **$\dot{T} = -\frac{3}{2}\varepsilon_W$**
* From $h_W = \frac{R_s c \sqrt{1-e^2}}{2\beta}$: **$\frac{de}{dN} = \frac{1-e^2}{e} \left(\varepsilon_h - \frac{\varepsilon_W}{2}\right)$**
* From $\Delta\phi = \frac{2\pi(3\beta^2 - 2\beta^4)}{1-e^2}$ by chain rule: **$\frac{d(\Delta\phi)}{dN} = \frac{4\pi\beta^2}{1-e^2} (3\varepsilon_h - \beta^2\varepsilon_W - 2\beta^2\varepsilon_h)$**

Note what the last line says: to leading order the drift of the periastron advance is controlled by the angular-momentum channel ($\frac{12\pi\beta^2\varepsilon_h}{1-e^2}$), not the energy channel — an internal, testable structural statement.

**Step 4 — Energy bridge** [forced]. The framework's exact state energy is $E_{\text{loc}}/E_0 = \frac{\kappa_X}{\beta_Y}$; on the closure line $\kappa^2 = 2\beta^2$ this is $\frac{\sqrt{1-2\beta^2}}{\sqrt{1-\beta^2}}$. Differentiating:

* per-cycle radiated ledger, per unit $E_0$: **$-\frac{dE}{dN} = \left(\frac{\beta^2 \varepsilon_W}{2}\right) (1-\beta^2)^{-3/2} (1-2\beta^2)^{-1/2}$**
* weak field: $-\frac{dE}{dN} \to \frac{\beta^2}{2}\varepsilon_W \left(1 + \frac{5}{2}\beta^2 + \dots\right)$, recovering the Newtonian binding-energy rate with the classical 1/2 as the first Taylor coefficient, exactly as WILL_RG_I derives the classical limit.
* The Energy Symmetry Law ($\Delta E_{A\to B} + \Delta E_{B\to A} = 0$) forces this drained ledger to appear in the open channel — bookkeeping balance, not a rate.

The bridge diverges as $\beta^2 \to 1/2$ ($\kappa \to 1$, dynamic-horizon state): deepening the orbit costs unboundedly much ledger per unit of $\beta^2$. The decay drives the state along the closure line toward saturation.

**Step 5 — Domain and endpoint** [forced]. The closed set's own critical table places marginal orbital stability at the dynamic ISCO state $Q^2 = Q_Y^2 = 1/2$, i.e. $\beta^2 = 1/6$, $\kappa^2 = 1/3$, $a = 3R_s$. There A1 fails by the framework's own classification (marginal stability = no adiabatic neighbor states). The decay law's domain is **$0 < \beta^2 < 1/6$**; the adiabatic inspiral terminates at the framework's ISCO invariant.

**Step 6 — Circularity lock** [forced constraint on the *unknown* fluxes]. In the web, $\frac{de}{dN} = \frac{1-e^2}{e} \left(\varepsilon_h - \frac{\varepsilon_W}{2}\right)$. For any smooth flux law, finiteness of $\frac{de}{dN}$ at $e = 0$ forces

**$\varepsilon_h(\beta, 0, \eta) = \frac{\varepsilon_W(\beta, 0, \eta)}{2}$**

The closed structure thus fixes one exact relation between the two missing functions on the circular boundary, without knowing either. (Whether $e$ grows or decays at $e > 0$ — circularization — is *not* forced; it depends on the sign of $\varepsilon_h - \frac{\varepsilon_W}{2}$ away from $e = 0$.)

---

## 5. Result — the relational decay law (SymPy, R.O.M. notation)

```python
from sympy import symbols, Function, sqrt, pi, Rational

# --- evolution parameter and state (new symbols defined in section 2) ---
N          = symbols('N', real=True)            # cycle count
beta       = Function('beta')(N)                # global kinetic projection
e          = Function('e')(N)                   # eccentricity
R_s, c, E_0 = symbols('R_s c E_0', positive=True)
eps_W      = symbols('varepsilon_W', real=True) # := d ln(beta**2)/dN   (energy channel)
eps_h      = symbols('varepsilon_h', real=True) # := -d ln(h_W)/dN      (ang.-mom. channel)

# --- FORCED kinematic web (exact identities of the closed set, A1-A3) ---
dln_beta2_dN  = eps_W                                        # definition
dln_a_dN      = -eps_W                                       # a = R_s/(2 beta**2)
dln_T_dN      = -Rational(3, 2)*eps_W                        # T = pi R_s/(beta**3 c)
Tdot          = -Rational(3, 2)*eps_W                        # dT/dt_obs, dimensionless
de_dN         = ((1 - e**2)/e)*(eps_h - eps_W/2)             # h_W = R_s c sqrt(1-e**2)/(2 beta)
dDelta_phi_dN = (4*pi*beta**2/(1 - e**2)) \
                * (3*eps_h - beta**2*eps_W - 2*beta**2*eps_h)  # chain rule on Delta_phi

# --- FORCED energy bridge (Energy Symmetry Law, closure inserted) ---
P_cycle_over_E0 = (beta**2*eps_W/2) \
                  / ((1 - beta**2)**Rational(3, 2)*sqrt(1 - 2*beta**2))
# = radiated ledger per cycle per unit E_0;  weak field -> (beta**2/2) eps_W

# --- FORCED constraint on the unknown fluxes at the circular boundary ---
# eps_h(beta, 0, eta) == eps_W(beta, 0, eta)/2

# --- domain of validity (closed set's own critical table) ---
# 0 < beta**2 < 1/6      (terminates at dynamic ISCO invariant Q**2 = 1/2)

# --- NOT determined by the closed system (proof in section 6) ---
# eps_W = F_W(beta, e, eta),  eps_h = F_h(beta, e, eta):  functional forms unknown.

```

This is the complete decay law the closed structure supports: a two-flux skeleton in which every observable decay rate is algebraically locked, with the fluxes themselves left as the framework's acknowledged open element.

---

## 6. Insufficiency: proof that the closed system cannot supply the fluxes

**Lemma 1 (no internal flux function).** Every expression in the closed set is an identity among state quantities $(\beta, e, R_s)$ and their phase functions. Every admissible state $(\beta, e, R_s)$ is realized by an exactly closed conservative system — for which the leak is zero by cor:condition. If some function $F$ of closed-set quantities equaled the flux of a radiating binary, the same state would give $F = 0$ (closed realization) and $F \neq 0$ (radiating realization). Contradiction. Hence $\varepsilon_W, \varepsilon_h$ are not elements of the closed algebra; whether and how strongly a state leaks is not encoded in the state. ∎

Candidates examined and rejected (script Part E): $\tau_Y^2$ is nonzero on closed orbits — it is the *conservative* phase divergence, stored as precession, not dissipated; $\Delta_Q(O)$ and $\delta_o - 1$ are the closed ellipse's internal breathing, time-averaging to zero; $\langle\delta\rangle_{\text{cycle}} - 1$ is precisely the *meter* of the leak (it is defined by the flux), so using it as the source law is circular.

**Lemma 2 (missing parameter).** The empirical decay of binary pulsars depends on both masses separately (equivalently on $\eta$). The single-scale closed set has no such parameter: its state $(\beta, e, R_s)$ is invariant under exchanging the bodies' individual scales at fixed sum. Hence no flux law over the published closed set can even host the observed dependence. The minimal repair is the two-scale state $(\beta, e, R_s, \eta)$ — already implicit in R.O.M.'s L1 section, but not part of the closed system. ∎

**Conclusion.** The missing object is the coupling of the orbital sector to a propagating channel — in the framework's own words (WILL_RG_I, sec:challenges), "a relational description of propagating degrees of freedom on the carriers," which "remains an open technical task." The closed structure does not determine $\varepsilon_W$ and $\varepsilon_h$. **This derivation stops here.**

---

## 7. What the framework's principles force about the missing law

Under A4 + A5, the principles constrain — but do not fix — the fluxes:

* **C1 (Mathematical Transparency; zero free parameters).** The fluxes are dimensionless functions of dimensionless state: $F_W(\beta, e, \eta)$, $F_h(\beta, e, \eta)$. Any dimensionful radiated power may use $G$ and $c$ only as translation factors; the unique luminosity scale so constructed is $c^5/G$, hence $P = \frac{c^5}{G} p(\beta, e, \eta)$ with $p$ dimensionless.
* **C2 (Relational Reciprocity).** $Q_{A\to B} = Q_{B\to A}$ suggests symmetry under $R_{s1} \leftrightarrow R_{s2}$: dependence on the scales only through symmetric ratios; minimal choice $\eta$.
* **C3 (Circularity lock — forced by the web, §4 Step 6).** $F_h(\beta, 0, \eta) = \frac{F_W(\beta, 0, \eta)}{2}$.
* **C4 (Closure Condition).** $F \to 0$ in the exactly closed limit: a system with no open channel does not leak. In particular $F$ must vanish as the two-body relation is switched off.
* **C5 (Domain).** Defined on $0 < \beta^2 < 1/6$, $e \in [0,1)$, $0 < \eta \leq 1/4$.

The magnitude and the $(\beta, e, \eta)$-dependence remain undetermined by the closed structure. Stop.

---

## 8. Internal-consistency check

`rom_decay_verify.py` (repo root; requires sympy + mpmath; runtime ~1 min) verifies 20 checks, all passing:

* Part B (4): time-averaged closure over a conservative cycle — $\langle\kappa_o^2\rangle_t = 2\beta^2$, $\langle\beta_o^2\rangle_t = \beta^2$, defect zero; base Kepler integrals at 30 digits for $e = 0.1\text{--}0.9$.
* Part C (4): each line of the kinematic web is an exact identity (the $de/dN$ and $d(\Delta\phi)/dN$ forms were corrected *by* this check during derivation — the initial hand-derived sign of $de/dN$ was wrong; the script caught it).
* Part D (2): exact energy bridge and its weak-field series (classical 1/2 recovered).
* Part E (1): closed-set invariants nonzero on closed orbits (supports Lemma 1).
* Part F (9): GR-consistency computations of §9, including the exact reproduction of Peters' eccentricity decay by the web and the PSR B1913+16 number.

---

## 9. GR-consistency note (comparison only — nothing here is derived from WILL)

The unique flux pair that makes the relational web reproduce the general-relativistic quadrupole (Peters 1964) is, in R.O.M. variables:

```python
# GR-matching fluxes (imported for comparison, NOT derived from the framework)
eps_W_GR = Rational(128,5)*pi*eta*beta**5 \
           * (1 + Rational(73,24)*e**2 + Rational(37,96)*e**4) / (1 - e**2)**Rational(7,2)
eps_h_GR = Rational(64,5)*pi*eta*beta**5 \
           * (1 + Rational(7,8)*e**2) / (1 - e**2)**Rational(5,2)

```

Both satisfy every constraint C1–C5 (C3: 64 at $e = 0$). Inserted into the forced web they yield, as verified exact identities: Peters' $de/dt$; the standard $\dot{P}_b$ formula via $\dot{T} = -\frac{3}{2}\varepsilon_W$; and numerically for PSR B1913+16 ($m_1 = 1.438 M_\odot$, $m_2 = 1.390 M_\odot$, $e = 0.6171340$, $P_b = 27906.98\text{ s}$): **$\dot{T} = -2.4021 \times 10^{-12}$** against the literature GR value $-2.40263 \times 10^{-12}$ (0.02%, within the rounding of the input masses). The observed $\beta^5$ scaling ("$v^5$") and the $\eta$-dependence confirm Lemma 2: the flux lives outside the single-scale closed set.

One structural difference survives *independently of the flux choice*: the energy bookkeeping. Per unit orbiter rest energy, circular-orbit energy in $x = \beta^2$:

* GR (Schwarzschild): $1 - x/2 + \frac{3}{8}x^2 + \dots$
* RG ($\frac{\kappa_X}{\beta_Y}$): $1 - x/2 - \frac{5}{8}x^2 + \dots$

First order identical, second order different — the same 1st-order-agreement / 2nd-order-departure pattern the source documents establish for precession and time dilation. Consequence: even with identical fluxes, RG predicts a different relation between radiated power and period decay at $\mathcal{O}(\beta^4)$, i.e. in late inspiral. This is a falsifiable statement of the forced part of the law, requiring no knowledge of the missing flux functions.

---

*Derived strictly from `WILL_RG_I.txt` and `R.O.M..txt`; every forced step machine-verified; every assumption listed in §3; the undetermined element identified, proven undetermined (§6), and left open in agreement with the source framework's own assessment.*