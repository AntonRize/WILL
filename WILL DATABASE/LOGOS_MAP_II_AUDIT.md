# WILL RG II — Logos Map Audit

Findings from reading `WILL_RG_II.txt` end to end in order to build the derivation chain map.
Draft map: `LOGOS_MAP_II.tex`.

## Verification status. Read this first.

**VERIFIED.** Checked by script against the named destinations inside the PDFs, or by reading the
source and the extracted PDF text directly. No interpretation involved. These will not turn out to be
my misreading.

- All of section 2
- Section 4.2, 4.3, 4.4, 4.5, 4.6
- All of section 5
- Section 6.1 (the destination genuinely does not exist)

**JUDGEMENT.** My reading of where the chain closes. Each of these can be wrong in the way 3.4 was
wrong, and each needs your check before you act on it.

- All of section 3
- Section 4.1, 4.7
- Section 2.8 (a naming question, not a mechanical one)

**WITHDRAWN 2026-08-02.** Section 3.4. See the note in place.

---

---

## 1. Shape of the chain

Part II has a different topology from Part I. Part I is a single spine. Part II is a **spine with two
fans**:

- One new definition is added to the Part I algebra: the **Relational Weights**
  $\Omega_{pot} = \kappa^2/Q^2 = 2/3$ and $\Omega_{kin} = \beta^2/Q^2 = 1/3$ (`def:rel_weight`).
  Almost every downstream result is this one ratio applied in a new place.
- One number is derived: $H_0 = \sqrt{8\pi G \rho_{\max}} \approx 68.15$ km/s/Mpc from $T_0$ and
  $\alpha$.
- **Stage I fan**: $H_0 \to f_0 \to a_{Mach} \to (a_\kappa, a_\beta) \to$ Resonant Bridge $\to$
  {BTFR, RAR, escape threshold, topological ruler, lensing}.
- **Stage II fan**: precession law $\to \omega_{shift}(o) = 3\alpha^2 o \to o_{\max} \to$ cooling law
  $\to$ decoupling; and separately $\Omega$ weights $\to$ WILL–Friedmann $\to$ {Pantheon+, acoustic
  peaks, quadrupole}; then vacuum sector $\to$ dark matter dissolution; then $\Gamma \to m_e$.

The Ouroboros closes differently from Part I. Part I closes an *identity* ($\text{SPACETIME} \equiv
\text{ENERGY}$ recovered as a field equation). Part II closes a *scale loop*
($\alpha \to H_0 \to m_e$). Worth deciding whether you want that parallel made explicit.

---

## 2. Mechanical defects — verified

### 2.1 Broken external anchors

Checked every `willrg.com/documents/*.pdf#tag` link in the source against the named destinations
actually present in the PDFs. Six do not exist:

| Link in `WILL_RG_II.txt` | Problem | Correct target |
|---|---|---|
| `WILL_RG_I.pdf#thm:topological_closure` (2 uses) | no such destination | `thm:relational_closure` |
| `WILL_RG_I.pdf#thm:relational_invariance` (2 uses) | no such destination | unclear — see §6 |
| `WILL_RG_I.pdf#lem:isotropy` | no such destination | `thm:isotropy` |
| `WILL_RG_I.pdf#subsec:pressure` | no such destination | `sec:pressure` |
| `WILL_RG_I.pdf#sec:precession_law` | destination is in **R.O.M.**, not Part I | `WILL_RG_R.O.M..pdf#sec:precession_law` |
| `WILL_RG_II.pdf#lem:norm_id` | self-link; Part II's Normalization Identity has no label at all | add `\hypertarget{lem:norm_id}` in Part II, or point to `WILL_RG_I.pdf#lem:norm_id` |

The precession-law one also carries a **wrong attribution in prose**: the text says *"In WILL RG I
(Section 16.5), we derived the universal precession law"*. The Precession Law theorem is in R.O.M.
(`sec:precession_law`), not in Part I. This matters because
$\Delta_{\phi} = 2\pi Q^2/(1-e^2)$ is the load-bearing input for all of Stage II.

### 2.2 Undefined internal reference

`\ref{thm:resonance}` (in the WILL–Friedmann section, "Global Phase-Closure Constraint
(Theorem~\ref{thm:resonance})") has **no matching `\label`** anywhere in the document. The theorem
you mean is labelled `thm:phase-closure`. This currently prints as `??`.

### 2.3 Duplicate label

`\label{eq:redshift_phase}` is defined twice, in the topological-tautology subsection and again in
the cooling-law subsection.

### 2.4 Literal `arrow` printed in the published PDF

In the low-quadrupole calculation, both scenarios contain `\quad arrow \quad` where `\rightarrow`
was intended. I confirmed this renders in `WILL_RG_II.pdf` as
`≈0.394arrow P` and `≈0.566arrow P`.

### 2.5 Input-parameter table is corrupted in the published PDF

Two problems in Table 2 (Core inputs):

1. The Stefan–Boltzmann row is missing its terminating `\\` before `\hline`.
2. `\SI{...}{...}` and `\num{...}` are used, but **siunitx is not in the preamble** (packages loaded:
   fontenc, inputenc, babel, textcomp, geometry, amsmath, amssymb, amsthm, graphicx, xcolor,
   booktabs, tabularx, enumitem, float, fancyhdr, hyperref, natbib, tikz, tcolorbox).

The published PDF shows the consequence: no units on any row, the Stefan–Boltzmann value rendered as
`5.67037e-84`, and the stray word `height` leaking into the caption area. Every input value in the
paper's only input table is therefore unitless or wrong on the page.

### 2.6 Malformed hypertargets near the summary tables

`\hypertarget{tab:sensitivity}` is emitted twice for the same table, and
`\hypertarget{\label{tab:cosmology_comparison}}` nests a `\label` inside a `\hypertarget`, which will
not produce a usable anchor.

### 2.7 Duplicated proof text

The proof of `lem:self-interaction` is word-for-word identical to the two sentences immediately
preceding the lemma statement.

### 2.8 Recap box conflates two Part I theorems

The Logical Chain Summary at the top lists the Part I core as
**Closure + Conservation + Isotropy**. In Part I the core triple is
**Relational Closure + Causal Continuity + Isotropy** (`thm:relational_closure`,
`thm:causal_continuity`, `thm:isotropy`); *Conservation* is a separate, later theorem
(`thm:conservation`, $\text{Amplitude}^2 + \text{Phase}^2 = 1$). The recap uses the same word for
both. This propagates: the same conflation appears in the arrow text
*"by Closure $+$ Conservation $+$ Isotropy Theorems derive primal relational carriers"*.

---

## 3. Where the chain does not close

These are the rows marked $\dagger$ in the draft map. Each is presented in the paper as a derivation
but does not follow from the Part I core. Listing them is not a claim that they are wrong — it is a
claim that they are **inputs**, and a logos map has to show them as such or it misrepresents the
theory's ontological weight.

### 3.1 The Resonant Bridge — the single largest gap

Two consecutive steps carry the whole of Stage I:

1. $\dfrac{E_{loc}}{E_{res}} = \dfrac{E_{res}}{E_{glob}}$, justified by *"the relational projection of
   the local capacity onto the resonant shift must exactly mirror the projection of the resonant
   shift onto the global capacity"*.
2. $v_{obs}^2 = E_{loc} + E_{res}$, justified by *"Because the system is fully resonant
   ($\Delta_\phi = 2\pi n$), the total observed relational shift is the direct sum"*.

Step 1 selects the geometric mean out of the family of possible couplings; step 2 selects addition
over any other composition. Neither is forced by Closure, Causal Continuity, Isotropy, or the
Conservation Theorem. Everything in Stage I — BTFR, RAR, the escape threshold, the topological ruler,
the lensing theorem — is a corollary of these two lines.

In Part I, the analogous load-bearing step (the Closure Theorem $\kappa^2 = 2\beta^2$) is proved from
the DOF-Indifference Lemma. Stage I has no equivalent. If you want Part II to meet Part I's standard,
this is the derivation to attempt.

### 3.2 $a_{Mach} = f_0 c$

$f_0 = H_0/2\pi$ has units of $\mathrm{s}^{-1}$; multiplying by $c$ produces an acceleration. The
statement *"this frequency establishes the minimal energy floor for any interaction in the cosmos"*
is the physical content, and it is asserted. Dimensional consistency is not a derivation.

### 3.3 Assignment of $\Omega$ to system type

The DOF-Indifference Lemma states that each independent degree of freedom carries equal relational
weight. It does **not** state that a galaxy is a 2-DOF link and a wide binary is a 1-DOF link. That
assignment is made by physical analogy (*"a galaxy is physically realized as an omnidirectional
network of relational links"*) and then attributed to the lemma. It is the step that produces the
factor-of-two split between $a_\kappa = cH_0/3\pi$ and $a_\beta = cH_0/6\pi$, and therefore the step
that produces the paper's best result against MOND. It deserves its own theorem or an explicit
admission that it is a classification rule.

### 3.4 $\beta \equiv \alpha$ for the photon gas — WITHDRAWN

**This item was wrong.** $\beta_1 = \alpha$ is a theorem of Part III, not an assumption, and the
paper already cites it. The forward dependency on Part III is real but it is stated openly in the
"Prerequisite" subsection, so it is not a hidden step. Nothing below required a change to the paper.

The original text is kept for the record:

Used twice, for two different objects: the photon gas in the $H_0$ derivation, and the cosmological
vacuum ground state in the phase-divergence derivation ($\beta_{vac} \equiv \alpha$). Both are
imported from Part III. Two consequences:

- **Forward dependency.** Part II's headline result depends on Part III. The trilogy therefore does
  not read I $\to$ II $\to$ III as a derivation order. The paper acknowledges this with the
  "Prerequisite (Summary of Part III)" subsection, but the map has to show the arrow.
- Whether the same identification is legitimate for a photon gas *and* for the vacuum ground state is
  not argued. They are different systems.

### 3.5 Unit Phase Condition $o_{crit} = 1$

*"A system behaves as a coherent, coupled medium only as long as the accumulated phase $o$ satisfies
the small-angle regime $\sin(o) \approx o$"*, with the breakdown placed at exactly $1$ radian. The
geometric gloss ($S = R\,o$, so $S = R$ at $o = 1$) is exact, but the identification of *that*
condition with optical decoupling is a physical postulate. It sets $z_{dec}$ and $T_{dec}$ entirely.

### 3.6 $\ell_{vac} = \alpha^{-1}(1 + \Omega_{pot})$

The factor $(1 + \Omega_{pot})$ is introduced as *"the total geometric impedance"* with no
derivation. It is the difference between $137.0$ and $228.4$, i.e. between failure and a
$-0.02\%$ match on the first acoustic peak. Of everything in Part II this is the step whose
unexplained status is most exposed, because the resulting agreement is the paper's strongest single
number.

### 3.7 $K_{rare}$ counter-loading

The paper says *"We model this as a Counter-Loading effect"* — explicitly a model, not a derivation,
and correctly labelled as such in the text. The map should carry that label too.

### 3.8 $\Gamma_T = D/C = 1/\pi$ and the exponent $\Gamma^3$

The unrolling ratio *diameter over circumference* is asserted. And $\Gamma^3$ is justified after the
fact: $m_e^3$ appears from the algebra, and the cube on $\Gamma$ is then explained by *"the holographic
operator must be applied to all three internal spatial degrees of freedom"*. The order of reasoning in
the text runs from the algebraic outcome to the geometric justification. That is the pattern
`pr:epistemic` is meant to forbid.

---

## 4. Internal tensions

### 4.1 $\Omega_{kin} = 1/3$ versus $\Omega_b \approx 0.048$ — highest priority

Two statements sit side by side:

- **WILL–Friedmann sector**: the kinetic sector is $\rho_{kin,0} = \tfrac13 \rho_{\max,0}$ and dilutes
  as $\rho_{kin} \propto (1+z)^3$, justified by *"topological conservation of closed relational
  configurations (baryon number invariance)"*. That justification treats $\Omega_{kin}$ as
  **particle content**.
- **Acoustic sector**: the oscillator is loaded with $\Omega_b \approx 0.048$ only, and the
  sensitivity table shows that loading $0.308$ instead moves the first peak to $\ell \approx 189$,
  a $-14.4\%$ failure. That treats $\Omega_{kin}$ as **not inertial matter**.

So $\Omega_{kin} = 1/3$ dilutes like matter in the expansion history but does not load the acoustic
oscillator like matter. The recombination section leans the second way — *"Dark Matter acts as a
mathematical proxy; it artificially compensates for the missing kinetic capacity of the relational
geometry"* — which implies $\Omega_{kin}$ is geometric capacity, not substance. But then the
$(1+z)^3$ dilution needs an argument that is not baryon number conservation, because baryons are only
$0.048$.

**This is the question a reader hostile to the framework will ask first.** As the map stands I cannot
resolve it from the text.

### 4.2 The low-quadrupole "corridor" rests on a distinction that the algebra does not support

The two scenarios are labelled:

- Scenario A, *the Structural Limit*, $Q^2 = \tfrac{3}{2}\kappa^2$, coupling factor $1.5$;
- Scenario B, *the Kinetic Limit*, $Q^2 = 3\beta^2$, coupling factor $3.0$.

Under the closure condition $\kappa^2 = 2\beta^2$ these two expressions are **identically equal**:
$\tfrac{3}{2}\kappa^2 = \tfrac{3}{2}(2\beta^2) = 3\beta^2$. They are one quantity written in two
variables, not two physical limits. The numbers $1.5$ and $3.0$ are the coefficients standing in
front of $\kappa^2$ and $\beta^2$ respectively; they multiply *different* bases, so dividing the same
$\mathcal{R}_{base} = 13.82$ by each is comparing coefficients across incompatible normalisations.

The corridor $0.156$–$0.320$ therefore has no stated derivation, and the observed $0.20$ falls inside
a range whose width comes from this step. I do not know what physical distinction was intended, so I
cannot propose the fix — see §6.

### 4.3 $\Omega_\Lambda$ used as both a density parameter and a scaling exponent

In the cooling-law subsection: $a(o) \propto o^{\,\Omega_\Lambda}$ with $\Omega_\Lambda = 2/3$. In the
supernova section: $\Omega_\Lambda \equiv \Omega_{pot} = 2/3$ as a density fraction. The two are
numerically equal by construction but are different kinds of object. Using one symbol hides whether
this is one fact or two independent facts that happen to agree. The scaling-exponent subsection
elsewhere calls the same exponent $\Omega_{pot}$, so the document is inconsistent with itself.

### 4.4 The scaling exponent $2/3$ is derived twice

Once in *Derivation of the Scaling Exponent* and again, in nearly identical words, in
*The Geometric Cooling Law*. The second derivation renames the exponent as in §4.3. One of the two
should go, or the second should cite the first.

### 4.5 Self-referential lensing derivation

*"By substituting the enhanced resonant projection into the exact algebraic Einstein Ring equation
(derived in Section \ref{sec:lensing})"* — `sec:lensing` **is** the current section. The exact
algebraic Einstein Ring equation is never derived in Part II. R.O.M. has `sec:grav_lens`,
`sec:grav_optics` and `sec:grav_deflection`; the reference presumably belongs to one of those.

### 4.6 Chronological age reported as a derived result

Summary table row 9 gives the recombination epoch as $\approx 364{,}860$ years versus
$\approx 378{,}000$ years, $\approx 3.5\%$. But the text's own remark says the conversion
$t = T_H/o_{\max}$ *"is not fundamental to the derivation; it serves only as an interface with
conventional cosmological notation"*. The table promotes a disclaimed quantity into the list of ten
zero-fit predictions. The defensible entries are $z_{dec} \approx 1156$ and
$T_{dec} \approx 3150$ K.

### 4.7 "Theorem" applied to a rescaling

*Theorem (Geometric Mean of Lensing Projections)* is proved by multiplying
$g_{obs} = g_{bar} + \sqrt{g_{bar}a_\kappa}$ through by $2r/c^2$. That is a change of variables, and
it inherits exactly the epistemic status of the Resonant Bridge (§3.1). Calling it a theorem while
the thing it rescales is a postulate overstates the result.

---

## 5. Anchors the web map will need

Part II currently has 40 hypertargets, but most load-bearing results have none. To build the
interactive map every node needs one. Missing, in chain order:

| Node | Proposed anchor |
|---|---|
| Relational Weights $\Omega_{pot}, \Omega_{kin}$ | exists — `def:rel_weight` |
| Radiation density $\rho_\gamma$ | `eq:rho_gamma` |
| Saturation density $\rho_{\max} = \rho_\gamma/3\alpha^2$ | `eq:rho_max` |
| Hubble parameter result | `eq:H0` |
| Fundamental Tone, $a_{Mach}$ | `eq:a_mach` |
| Bifurcation $a_\kappa$, $a_\beta$ | `eq:a_kappa`, `eq:a_beta` |
| Resonant Bridge | `eq:resonance` — **a `\label{eq:resonance}` exists but with no `\hypertarget`, and it sits after the equation rather than before it** |
| BTFR | exists — `sec:Tully-Fisher` |
| RAR | `eq:RAR` |
| Escape threshold identity | exists — `sec:baryonic_escape` |
| Topological ruler | exists — `sec:galactic-ruler` |
| Lensing theorem | `thm:lensing_mean` |
| $\kappa_{phantom}^2 = 2V_{flat}^2/c^2$ | `eq:phantom` |
| Phase horizon $o_{\max}$ | `def:o_max` |
| Cooling law | exists — `sec:cooling-law` |
| Unit Phase Condition | `def:unit_phase` |
| Decoupling prediction | `eq:z_dec` |
| $\Omega_m = 1/3$, $\Omega_\Lambda = 2/3$ | exists — `sec:tension` |
| WILL–Friedmann | exists — `sec:will-friedmann` |
| $\ell_{vac}$, $\ell_1$ | `eq:l_vac`, `eq:l_1` |
| Vacuum Energy Partition theorem | `thm:vacuum_partition` |
| $\Lambda(r) = 2/3r^2$ | `eq:lambda_r` |
| Vacuum–Dynamic Equivalence | `thm:vacuum_dynamic` |
| Holographic operator $\Gamma$ | exists — `sec:gamma_operator` |
| Geometric Mach Equation | exists — `eq:mach_geo` |
| Electron mass result | `eq:m_e` |
| Independence $\partial H_0/\partial \ell_{peak} = 0$ | `thm:independence` |

---

## 6. What I could not resolve

1. **`thm:relational_invariance`.** Referenced twice in Part II as a Part I theorem and used in the
   proof of `thm:phase-closure` (*"the relational measure is conserved, so a closing $n$-winding
   configuration neither grows nor decays"*). No such destination exists in `WILL_RG_I.pdf`. The
   nearest candidates are `thm:conservation` and `cor:energy`, but they say different things and I am
   not confident which you intended. This one is load-bearing: without it the Phase Closure proof has
   a hole.

2. **The intended distinction in §4.2.** I can state that the two scenarios are algebraically the same
   expression; I cannot guess what two genuinely different couplings you had in mind, so I cannot
   propose a corrected corridor.

3. **Whether $\Omega_{kin}$ is substance or capacity (§4.1).** The text supports both readings in
   different sections. This is a physics decision, not an editorial one.

4. **The origin of $(1 + \Omega_{pot})$ in $\ell_{vac}$ (§3.6).** I found no derivation anywhere in
   the document.

I have not attempted to verify any numerical result in the paper. Every number in the draft map is
transcribed from the source, not recomputed.
