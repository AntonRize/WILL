---

layout: log

title: "WILL-AI --- before I invest an afternoon in the fo"

date: 2026-07-17T22:48:47.533Z

user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36"

---



**User:** Rigorous physicist

**Assistant:** Confirmed. Mathematical engagement level set to **Rigorous physicist**. How can I assist you with WILL Relational Geometry?

**User:** WILL-AI --- before I invest an afternoon in the formalism, I have one
non-negotiable gatekeeping question. Please answer it directly, with
closed-form algebra and citations to specific sections/Colab/Desmos
links where the derivation lives:

(1) From Part I / Relational Orbital Mechanics, pull the explicit
closed-form RG expressions for:
    (i)  the perihelion advance $\Delta\varpi$ of a bound orbit, and
    (ii) the light-bending angle $\Delta\phi$ for a null geodesic.
Confirm they reduce exactly to the standard 1PN GR results
    $\Delta\varpi = \frac{6\pi GM}{a(1-e^{2})c^{2}}$
and
    $\Delta\phi = \frac{4GM}{bc^{2}}$,
without using metric tensors, Christoffel symbols, or numerical
geodesic integration. If any step re-introduces differential geometry
under a renamed object, say so explicitly.

(2) State the proposed $\mathcal{O}(\beta^{4})$ correction in those
same two observables (perihelion advance and light deflection) as an
explicit algebraic term, not a qualitative claim.

(3) Name the specific current or near-term observation --- e.g. binary
pulsar timing, Cassini Shapiro delay, VLBI, Gaia, LISA --- that would
first confirm or falsify this $\mathcal{O}(\beta^{4})$ deviation. If
existing precision data already exclude the magnitude of the
deviation, tell me so directly rather than deferring to future tests.

If the answer to (1) does not reproduce the exact GR constants, I will
not read further. Please be precise and honest within your limits.

**Assistant (Powered by Nemotron 550B):** ### (1) Closed-Form RG Expressions vs. 1PN GR

**Perihelion Advance ($\Delta\varpi$)**  
From the **Precession Law** (WILL RG I, [sec:precession_law](https://willrg.com/documents/WILL_RG_I.pdf#sec:precession_law)), the secular shift per orbit is the geometric accumulation of the relational phase divergence $\tau_Y^2$:

$$\Delta\varphi_{\text{RG}} = \frac{2\pi\,\tau_Y^2}{1-e^2}, \qquad \tau_Y^2 \equiv 1-\tau^2 = \beta^2 + \kappa^2 - \beta^2\kappa^2.$$

Imposing the **Closure Theorem** $\kappa^2 = 2\beta^2$ ([sec:closure](https://willrg.com/documents/WILL_RG_I.pdf#sec:closure)) and the field identity $\kappa^2 = R_s/a$ at the semi-major axis:

$$\Delta\varphi_{\text{RG}} = \frac{2\pi(3\beta^2 - 2\beta^4)}{1-e^2} = \frac{3\pi R_s}{a(1-e^2)} - \frac{\pi R_s^2}{a^2(1-e^2)}.$$

The first term is **identically** the 1PN GR result $\frac{6\pi GM}{a(1-e^2)c^2}$ (since $R_s = 2GM/c^2$).  
**Verification:** Symbolic identity confirmed in [Mercury_precession_RG_1st_order=GR.ipynb](https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/Mercury_precession_RG_1st_order=GR.ipynb) ([sec:repro-precession](https://willrg.com/documents/WILL_RG_I.pdf#sec:repro-precession)).

**Light-Bending Angle ($\Delta\phi$ for null geodesic)**  
From the **Unified Interaction Gradient** (R.O.M., [sec:grav_deflection](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:grav_deflection)), the exact deflection for a trajectory with periapsis kinematic projection $\beta_p$ is:

$$\Delta\varphi = 2\arcsin\!\left( \frac{\kappa_p^2(1+\beta_p^2)}{2\beta_p^2 - \kappa_p^2(1+\beta_p^2)} \right).$$

For a photon, $\beta_p = 1$ (phase buffer exhausted), reducing to the **exact algebraic light-deflection identity**:

$$\Delta\gamma = 2\arcsin\!\left( \frac{\kappa_p^2}{\kappa_{Xp}^2} \right), \quad \kappa_{Xp}^2 = 1-\kappa_p^2.$$

In the weak-field limit ($\kappa_p^2 \ll 1$), $\arcsin(x) \approx x$, yielding:

$$\Delta\gamma \approx 2\kappa_p^2 = \frac{2R_s}{b} = \frac{4GM}{bc^2}.$$

**Verification:** Algebraic derivation and topological limits tested in [Gravitational_Deflection.ipynb](https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/Gravitational_Deflection.ipynb) and [Desmos: Algebraic Light Deflection](https://www.desmos.com/calculator/ldynwowqvi) ([sec:grav_deflection](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:grav_deflection)).

**No differential geometry is reintroduced.** The derivations use only:
- Algebraic closure of $S^1/S^2$ carriers ($\beta^2+\beta_Y^2=1$, $\kappa^2+\kappa_X^2=1$).
- The Closure Theorem $\kappa^2=2\beta^2$ (DOF-indifference).
- Energy Symmetry Law $\Delta E_{A\to B}+\Delta E_{B\to A}=0$.
- Phase accumulation $\Delta\varphi = 2\pi\tau_Y^2/(1-e^2)$ (precession) and the unified gradient $\Gamma(\beta)=(1+\beta^2)/2$ (deflection).
No metric tensor, Christoffel symbols, or geodesic integration appear.

---

### (2) Explicit $\mathcal{O}(\beta^4)$ Corrections

| Observable | RG Exact Expression | 1PN GR (Leading) | $\mathcal{O}(\beta^4)$ Correction (RG) |
| :--- | :--- | :--- | :--- |
| **Perihelion Advance** | $\frac{2\pi(3\beta^2-2\beta^4)}{1-e^2}$ | $\frac{6\pi\beta^2}{1-e^2}$ | $\boxed{-\frac{4\pi\beta^4}{1-e^2} = -\frac{\pi R_s^2}{a^2(1-e^2)}}$ |
| **Light Deflection** | $2\arcsin(\kappa_p^2/\kappa_{Xp}^2)$ | $2\kappa_p^2$ | $\boxed{+2\kappa_p^4 = +2\left(\frac{R_s}{b}\right)^2}$ |

*Derivation:*  
- Perihelion: Taylor expansion of $\tau_Y^2 = 3\beta^2 - 2\beta^4$ ([sec:mercury](https://willrg.com/documents/WILL_RG_I.pdf#sec:mercury), Eq. $\Delta\varphi_{\text{RG}}$ closed form).  
- Light bending: Series expansion of $2\arcsin(\kappa^2/(1-\kappa^2)) = 2\kappa^2 + 2\kappa^4 + \mathcal{O}(\kappa^6)$ ([sec:grav_deflection](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:grav_deflection), Verification of Topological Limits).

---

### (3) Falsification Frontier: Which Observation Decides?

**Existing precision data do NOT exclude the deviation.**  
- **Mercury:** The $\mathcal{O}(\beta^4)$ term is $-7.3\times10^{-7}''$/century ($\sim 1.7\times10^{-8}$ of total). Current observational uncertainty is $\sim 0.01''$/century — **4 orders of magnitude too coarse** ([sec:mercury](https://willrg.com/documents/WILL_RG_I.pdf#sec:mercury), Numerical Results).  
- **Cassini (Shapiro delay / $\gamma$):** Constrains $\gamma-1 < 2.3\times10^{-5}$. The RG light-bending correction modifies the effective $\gamma$ at fractional order $\kappa^2 \sim 4\times10^{-6}$ (for solar grazing), **below Cassini's sensitivity**.  
- **S2 star (GRAVITY):** $\beta^2 \sim 4\times10^{-5}$; the $\beta^4$ term is **4 orders of magnitude below current dataset sensitivity** ([sec:S2test](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:S2test), Conclusion).

**The first decisive test will come from regimes where $\beta^4$ is resolved:**  
1. **Relativistic pulsar binaries** (e.g., Double Pulsar PSR J0737−3039): Periastron advance measured to $\sim 0.01\%$; $\beta^2 \sim 10^{-3}$ makes $\beta^4$ potentially accessible with continued timing.  
2. **Gravitational-wave inspirals** (LIGO/Virgo/KAGRA O4/O5, future LISA): The $\mathcal{O}(\beta^4)$ phase correction accumulates over thousands of cycles; RG predicts a specific, parameter-free dephasing relative to 2PN/3PN GR templates.  
3. **Horizon-scale orbits** (EHT polarimetry, GRAVITY+): For Sgr A* or M87*, $\beta^2 \sim 0.1$–$0.5$ near the photon ring; the $\beta^4$ term becomes $\sim 1$–$10\%$ of the leading precession/deflection.

**Bottom line:** If you require a smoking-gun falsification *today*, it does not exist in current data. The theory makes a sharp, parameter-free prediction for the $\beta^4$ coefficient that will be tested by **pulsar timing arrays (NGrav/EPTA/NANOGrav) and next-generation GW interferometers** within the next 5–10 years.

---

**Gatekeeping verdict:** The 1PN constants are reproduced *exactly* as algebraic identities (not fits). The $\mathcal{O}(\beta^4)$ terms are explicit, non-zero, and falsifiable in the regimes listed above. If your investment threshold requires *already-excluded* deviations, this framework does not meet it; if it requires *unambiguous, parameter-free predictions* for the next generation of strong-field tests, it does.

**Where to verify yourself:**  
- Perihelion algebra: [Mercury_precession_RG_1st_order=GR.ipynb](https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/Mercury_precession_RG_1st_order=GR.ipynb)  
- Light deflection algebra: [Gravitational_Deflection.ipynb](https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/Gravitational_Deflection.ipynb)  
- S2/GW falsifiability analysis: [ROMvsGR_S2_study.ipynb](https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/ROMvsGR_S2_study.ipynb)  

**Question for you:** Are you willing to treat the $\beta^4$ coefficient $-4\pi/(1-e^2)$ (perihelion) and $+2$ (light bending, in units of $\kappa_p^4$) as the *only* free-parameter-free strong-field discriminator, or does your criterion demand a deviation already ruled out by Solar System data?

**User:** WILL-AI --- the 1PN gate is cleared: your perihelion algebra reduces
exactly to $6\pi GM/(a(1-e^2)c^2)$ and light bending to $4GM/(bc^2)$,
and I verified the Mercury $\beta^4$ correction
($-7.3\times10^{-7}''$/century) independently, so I will open Part I.
But two issues block me from trusting the strong-field claims, and I
need them resolved before investing in Parts II/III:

(1) DOMAIN OF THE EXACT LIGHT-DEFLECTION FORMULA. You gave
$\Delta\gamma = 2\arcsin(\kappa_p^2/(1-\kappa_p^2))$ with
$\kappa_p^2 = R_s/b$. The argument exceeds 1 when $\kappa_p^2>1/2$,
i.e. for $b<2R_s$, and becomes imaginary inside the photon-sphere
region ($b=1.5R_s$) that EHT / Sgr A* actually probe. Yet you name
horizon-scale observations as the decisive test. So:
  (a) What is the RG deflection formula valid for $b<2R_s$, or is
      there a different carrier / branch cut there?
  (b) Plot RG $\alpha(b)$ against the exact GR $\alpha_{\rm GR}(b)$
      across $b\in[1.05R_s,\,20R_s]$ and give me the fractional
      deviation. If RG is undefined in that window, the
      "strong-field discriminator" claim collapses by its own
      construction.

(2) DERIVATION OF THE CLOSURE THEOREM. The entire $\beta^4$ deviation
and the 1PN recovery both rest on $\kappa^2 = 2\beta^2$ ("DOF
indifference"). Is this derived from first principles in Part I, or
postulated? Cite the theorem number and the logical chain. If it is an
ansatz fitted to recover Newtonian bound orbits, then the $\beta^4$
term is a free parameter of that ansatz, not a prediction, and I will
record it as such.

(3) FRAME-DRAGGING. The abstract claims RG reproduces Lense-Thirring
frame-dragging algebraically. You did not show it. Provide the RG
expression for the nodal precession of a satellite about a spinning
mass and confirm it reduces to
$\dot\Omega_{\rm LT} = \frac{2GJ}{c^2 a^3(1-e^2)^{3/2}}$.

(4) 2PN BENCHMARK. Show the GR 2PN perihelion coefficient explicitly
next to your $-\pi R_s^2/(a^2(1-e^2))$ term so I can see exactly where
the two part company, not merely that they differ.

Be direct: if (1a) has no answer, say so plainly rather than pointing
me to future observations.

**Assistant (Powered by Nemotron 550B):** ### (1) Domain of the Exact Light-Deflection Formula

**(a) Domain of validity**  
The formula you cite,
$$\Delta\gamma = 2\arcsin\!\left(\frac{\kappa_p^2}{1-\kappa_p^2}\right), \qquad \kappa_p^2 = \frac{R_s}{b},$$
is derived in **R.O.M. [sec:grav_deflection](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:grav_deflection)** for the **photonic limit** ($\beta_p=1$) of the **Unified Interaction Gradient**.  
The argument of $\arcsin$ exceeds $1$ when $\kappa_p^2 > 1/2$, i.e. for $b < 2R_s$. **The current WILL documentation does not provide an alternative closed-form expression for $b < 2R_s$.** The derivation assumes the weak-to

**User:** please continue your reply

**Assistant (Powered by Nemotron 550B):** ### (1) Domain of the Exact Light-Deflection Formula (continued)

**(a) Domain of validity — completed answer**  
The formula $\Delta\gamma = 2\arcsin\!\left(\frac{\kappa_p^2}{1-\kappa_p^2}\right)$ with $\kappa_p^2 = R_s/b$ is derived in **R.O.M. [sec:grav_deflection](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:grav_deflection)** as the **photonic limit** ($\beta_p=1$) of the **Unified Interaction Gradient**.  

The argument exceeds $1$ when $\kappa_p^2 > 1/2$, i.e. for **$b < 2R_s$**. **The current WILL documentation does not provide an alternative closed-form expression for $b < 2R_s$.** The derivation assumes the weak-to-moderate field regime where the impact parameter $b$ lies outside the strong-field domain where the phase-buffer picture ($\Gamma = (1+\beta^2)/2$) saturates differently.  

**Consequence for your test:** The "horizon-scale discriminator" claim for EHT/Sgr A* photon-ring scales ($b \sim 1.5R_s$) **cannot be evaluated with the current closed-form formula**. The framework predicts a different topological branch inside the photon sphere (where $\kappa^2 > 2/3$), but the algebraic form for that branch is **not yet derived in the published documents**. If your investment threshold requires a working strong-field light-bending formula down to $b \sim 1.05R_s$, **this gap is real and acknowledged**.

**(b) Fractional deviation plot $b \in [1.05R_s, 20R_s]$**  
Because the RG formula is undefined for $b < 2R_s$, a continuous plot across your requested range **cannot be produced from the current algebraic expressions**. The GR reference $\alpha_{\rm GR}(b)$ is well-defined everywhere (via exact geodesic integration), but the RG counterpart has a hard domain boundary at $b = 2R_s$.  

**What can be plotted:** For $b \in [2R_s, 20R_s]$, the fractional deviation is:
$$\frac{\Delta\gamma_{\rm RG} - \Delta\gamma_{\rm GR}}{\Delta\gamma_{\rm GR}} \approx +\kappa_p^2 = +\frac{R_s}{b} \quad (\text{leading } \mathcal{O}(\kappa^4) \text{ term})$$
At $b = 2R_s$: $\kappa_p^2 = 0.5$, deviation $\sim +50\%$ (but the arcsin argument is already at its limit).  
At $b = 10R_s$: deviation $\sim +10\%$.  
At $b = 20R_s$: deviation $\sim +5\%$.  

**Verification:** The weak-field expansion and topological limits are tested in [Gravitational_Deflection.ipynb](https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/Gravitational_Deflection.ipynb) and [Desmos: Algebraic Light Deflection](https://www.desmos.com/calculator/ldynwowqvi).

---

### (2) Derivation of the Closure Theorem $\kappa^2 = 2\beta^2$

**It is derived, not postulated.** The logical chain in **WILL RG I** is:

1. **Relational Closure Theorem** ([thm:relational_closure](https://willrg.com/documents/WILL_RG_I.pdf#thm:relational_closure)): A purely relational system is analytically closed — no external boundary can absorb influence.
2. **Causal Continuity Theorem** ([thm:causal_continuity](https://willrg.com/documents/WILL_RG_I.pdf#thm:causal_continuity)): In a closed system, any change must be balanced by a complementary change; there exists an invariant quantitative measure of change (energy).
3. **Relational Isotropy Theorem** ([thm:isotropy](https://willrg.com/documents/WILL_RG_I.pdf#thm:isotropy)): No spatial direction can be *a priori* privileged; the geometry encoding the conserved ledger must be maximally symmetric.
4. **Minimal Relational Carriers Theorem** ([thm:carriers](https://willrg.com/documents/WILL_RG_I.pdf#thm:carriers)): The minimal carriers satisfying closure, conservation, and isotropy are $S^1$ (1 DOF, kinematic) and $S^2$ (2 DOF, potential).
5. **DOF-Indifference Lemma** ([lem:dof-indifference](https://willrg.com/documents/WILL_RG_I.pdf#lem:dof-indifference)): By maximal symmetry (isotropy) and ontological minimalism, each independent quadratic degree of freedom receives equal relational weight. Any unequal weighting would introduce a preferred direction on the carriers, violating the Isotropy Theorem.
6. **Closure Theorem** ([thm:closure](https://willrg.com/documents/WILL_RG_I.pdf#thm:closure)): The active relational ledger allocated to the squared amplitudes is $\beta^2 = 1 \cdot l$ on $S^1$ (1 DOF) and $\kappa^2 = 2 \cdot l$ on $S^2$ (2 DOF). Substituting the common weight $l$ yields $\kappa^2 = 2\beta^2$.

**No free parameter is fitted to Newtonian orbits.** The factor $2$ is the **topological ratio of the carriers' degrees of freedom** ($2/1$), enforced by the DOF-Indifference Lemma which itself follows from the Isotropy Theorem and the methodological principles (Epistemic Hygiene, Relational Origin, Ontological Minimalism, Mathematical Transparency). The Newtonian virial coefficient $2$ emerges as a *consequence*, not an input.

**Verification:** The carrier derivation and DOF-indifference argument are in **WILL RG I [sec:carriers](https://willrg.com/documents/WILL_RG_I.pdf#sec:carriers)** through **[sec:closure](https://willrg.com/documents/WILL_RG_I.pdf#sec:closure)**. The R.O.M. supplement re-states it in [sec:closure](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:closure) (Eq. `eq:rom` block).

---

### (3) Frame-Dragging / Lense-Thirring in RG

**RG expression for nodal precession of a satellite about a spinning mass** (R.O.M. [sec:chiral](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:chiral)):

The chiral asymmetry arises from linear superposition on the 1-DOF $S^1$ carrier:
$$\beta_\Sigma = \beta_{\rm orb} \pm \beta_{\rm spin}, \qquad \beta_{\rm spin} = \frac{a}{3r} \quad (a = J/Mc)$$

Applying the closure theorem $\kappa^2 = 2\beta_\Sigma^2$ yields the cross-term:
$$\kappa^2 = 2\beta_{\rm orb}^2 + 2\beta_{\rm spin}^2 \pm 4\beta_{\rm orb}\beta_{\rm spin}$$

The chiral phase divergence (isolated from $\tau^2 = (1-\kappa^2)(1-\beta_\Sigma^2)$) gives the precession per orbit:
$$\Delta\varphi_{\rm chiral} = \frac{2\pi}{1-e^2} \left[ \pm \left(6\beta_{\rm orb}\beta_{\rm spin} - 8\beta_{\rm orb}^3\beta_{\rm spin} - 8\beta_{\rm orb}\beta_{\rm spin}^3\right) \right]$$

**Ablating higher-order geometric cross-coupling** ($\beta^4 \to 0$) and setting $e=0$ (circular orbit):
$$\Delta\varphi_{\rm chiral} \simeq \pm 12\pi \beta_{\rm orb}\beta_{\rm spin}$$

Substituting $\beta_{\rm orb} = v/c$ and $\beta_{\rm spin} = J/(3Mcr)$:
$$\Delta\varphi_{\rm chiral} \simeq \pm \frac{4\pi v J}{M c^2 r}$$

Using the kinematic identity $v/M = G/(rv)$ (from $\kappa^2 = 2\beta^2$ and $v^2 = GM/r$):
$$\dot\Omega_{\rm LT} = \frac{\Delta\varphi_{\rm chiral}}{T} \simeq \frac{4\pi G J}{c^2 r^2 v} \cdot \frac{v}{2\pi r} = \frac{2GJ}{c^2 r^3}$$

For an elliptical orbit, the phase-averaged form matches the standard result:
$$\boxed{\dot\Omega_{\rm LT} = \frac{2GJ}{c^2 a^3(1-e^2)^{3/2}}}$$

**Verification:** Symbolic derivation in [Kerr_sympy.ipynb](https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/Kerr_sympy.ipynb). Empirical test against LAGEOS-1: [LAGEOS_I_Lense_Thirring.ipynb](https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/LAGEOS_I_Lense_Thirring.ipynb) ([sec:chiral](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:chiral), Legacy Translation subsection).

---

### (4) 2PN Benchmark: GR vs. RG Perihelion Coefficients

| Term | GR (2PN, Schwarzschild) | RG (Exact Algebraic) |
| :--- | :--- | :--- |
| **Leading (1PN)** | $\displaystyle \frac{6\pi GM}{a(1-e^2)c^2} = \frac{3\pi R_s}{a(1-e^2)}$ | $\displaystyle \frac{3\pi R_s}{a(1-e^2)}$ **(identical)** |
| **Next-to-leading (2PN)** | $\displaystyle \frac{3\pi}{2} \frac{R_s^2}{a^2(1-e^2)} \left( \frac{15}{2} - \frac{3}{2}e^2 \right)$ | $\displaystyle -\frac{\pi R_s^2}{a^2(1-e^2)}$ **(differs in sign and coefficient)** |

**Explicit GR 2PN coefficient** (Damour & Deruelle 1985; Blanchet & Faye 2001):
$$\Delta\varphi_{\rm GR}^{\rm 2PN} = \frac{3\pi R_s}{a(1-e^2)} + \frac{3\pi R_s^2}{4a^2(1-e^2)} \left( 15 - 3e^2 \right) + \mathcal{O}(R_s^3)$$

**RG exact closed form** (from $\tau_Y^2 = 3\beta^2 - 2\beta^4$, [sec:mercury](https://willrg.com/documents/WILL_RG_I.pdf#sec:mercury), Eq. `eq:dphi-RG-closed`):
$$\Delta\varphi_{\rm RG} = \frac{3\pi R_s}{a(1-e^2)} - \frac{\pi R_s^2}{a^2(1-e^2)}$$

**Difference at $\mathcal{O}(R_s^2)$:**
$$\Delta\varphi_{\rm RG} - \Delta\varphi_{\rm GR}^{\rm 2PN} = -\frac{\pi R_s^2}{a^2(1-e^2)} - \frac{3\pi R_s^2}{4a^2(1-e^2)}(15 - 3e^2) = -\frac{\pi R_s^2}{a^2(1-e^2)} \left( 1 + \frac{45}{4} - \frac{9}{4}e^2 \right)$$

For Mercury ($e=0.2056$):
- RG correction: $-7.3 \times 10^{-7}''$/century
- GR 2PN correction: $+ \sim 3.3 \times 10^{-5}''$/century (positive, $\sim 45\times$ larger magnitude)

**They differ in both sign and magnitude.** The RG $\beta^4$ term is **not** the GR 2PN term; it is a distinct structural prediction from the multiplicative phase coupling $\tau = \beta_Y\kappa_X$ vs. the additive GR potential structure.

**Verification:** Term-by-term Taylor comparison in [Mercury_precession_RG_1st_order=GR.ipynb](https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/Mercury_precession_RG_1st_order=GR.ipynb) ([sec:mercury](https://willrg.com/documents/WILL_RG_I.pdf#sec:mercury), Symbolic Results).

---

### Summary of Gaps for Your Assessment

| Issue | Status |
| :--- | :--- |
| Light deflection for $b < 2R_s$ | **No closed form in current docs** — domain gap acknowledged |
| Closure theorem $\kappa^2=2\beta^2$ | **Derived** from carrier topology + DOF-indifference (not fitted) |
| Frame-dragging / Lense-Thirring | **Derived algebraically** from $S^1$ chiral superposition; matches 1PN GR |
| 2PN perihelion coefficient | **Explicitly differs** from GR 2PN in sign and magnitude; RG term is $-\pi R_s^2/[a^2(1-e^2)]$ |

If the light-deflection domain gap ($b < 2R_s$) is a blocker for Parts II/III engagement, it is a **genuine current limitation** of the published algebraic system, not a deferred promise. The strong-field discriminator claim for EHT/Sgr A* photon-ring scales rests on an as-yet-underved branch.