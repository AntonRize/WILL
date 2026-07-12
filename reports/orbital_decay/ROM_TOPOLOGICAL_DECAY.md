# Topological Definition of Orbital Decay — Test and Exact Consequences

**Hypothesis (Anton, July 2026):** in a relationally closed dyad the contours of the kinematic projections self-intersect after one orbital phase cycle, $\beta_{Ao}(0) = \beta_{Ao}(2\pi)$; orbital decay is the failure of this closure on the $S^1$ carrier, an open boundary $\beta_{Ao}(0) < \beta_{Ao}(2\pi)$; the shed relational capacity per cycle is the discrete shift $\Delta\beta_{Ao}^2$ (or $\Delta\beta_{Ao}$); this mismatch is the direct algebraic measure of the closure defect $\langle\delta\rangle_{\text{cycle}} \neq 1$ and replaces continuous $dt$ evolution with an exact topological discontinuity.

**Sources:** `WILL DATABASE/WILL_RG_I.txt`, R.O.M. closed set (all phase functions as published), decay skeleton `ROM_RADIATIVE_DECAY.md` ($\varepsilon_W$, $\varepsilon_h$). GR quadrupole fluxes appear only as labeled comparison input.
**Verification:** `rom_topological_decay.py` — 38 symbolic + numeric checks, 38/38 pass in a single run (~40 s). The $N_{\text{ISCO}}$ integral was additionally confirmed standalone with doubled step count (agreement to 14 digits).

---

## 0. Status summary

Read this first; it is the honest boundary of the result.

**Confirmed:** the closed-cycle premise is an exact identity of the closed set; the per-cycle boundary mismatch is a well-posed, *exact*, first-order meter of openness, independent of how the loss is distributed within the cycle; the quadratic form $\Delta\beta_{Ao}^2$ (not $\Delta\beta_{Ao}$) is the ledger-native variable; the full mismatch function over one cycle carries exactly the two radiative channels — no more, no fewer.

**Corrected (two claims fail as literally stated, and the algebra supplies the repair):**
1. The strict inequality $\beta_{Ao}(0) < \beta_{Ao}(2\pi)$ is **not phase-universal**. At the perihelion reference it reverses sign for $e > e^{*}$, where $e^{*} = 0.5557305673$ is the unique root in $(0,1)$ of $37e^3 - 84e^2 + 208e - 96 = 0$. PSR B1913+16 ($e = 0.617$) sits *above* the threshold: its perihelion kinematic amplitude *decreases* per cycle while the binary decays. Sign-definite formulations exist and are given in §2.
2. The identification "mismatch = direct algebraic measure of $\langle\delta\rangle_{\text{cycle}} \neq 1$" runs **backwards**. The cycle-averaged closure factor is *blind at first order* to the decay (it is $O(\varepsilon^2)$ for any loss profile symmetric under $O \to 2\pi - O$, and at first order it meters the *asymmetry* of the within-cycle loss profile, not the loss totals). The boundary mismatch is the correct first-order meter. The topological definition does not measure the old defect — it **supersedes** it, and repairs a latent gap in cor:condition (§4).

**Unchanged:** Lemma 1 of the skeleton stands. The mismatch magnitudes are the two fluxes themselves; the closed algebra does not supply them (§6). The topological definition is the framework-native *definition and meter* of decay, not its *source law*.

---

## 1. Setting and the closed premise

All phase variables of the closed set are functions of $\cos O$, $\sin O$ with the true phase $O$; hence exactly $2\pi$-periodic (verified: $\beta_o$, $\kappa_o$, $\delta_o$, $Q_o$). The boundary match $\beta_{Ao}(0) = \beta_{Ao}(2\pi)$ is an identity, not a condition. Note the precession subtlety: the contour that closes lives on the phase carrier, not in coordinate space — the spatial ellipse precesses ($O = \Omega\,o$), yet the state contour in $(\beta_o, \kappa_o)$ self-intersects after $\Delta O = 2\pi$ exactly. One "cycle" is therefore the anomalistic (perihelion-to-perihelion) cycle, and precession does not contaminate the decay meter.

The open cycle is described by the two exact per-cycle jumps of the skeleton,

$$J_W \equiv \Delta\ln\beta^2, \qquad J_h \equiv -\Delta\ln h_W,$$

with the exact state map (at fixed $R_s$, from $h_W = \frac{R_s c\sqrt{1-e^2}}{2\beta}$):

$$\beta^2 \to \beta^2 e^{J_W}, \qquad (1 - e^2) \to (1 - e^2)\,e^{J_W - 2J_h}.$$

In the adiabatic reading $J_W = \varepsilon_W$, $J_h = \varepsilon_h$ per cycle, but every boxed statement below is exact at finite jumps unless marked first-order.

---

## 2. The mismatch dictionary (exact jump algebra)

The boundary mismatch of $\beta_{Ao}^2$ at a fixed reference phase $O^{*}$, taken between the cycle's endpoint states, is at first order

$$\Delta\beta_o^2(O^{*}) = \beta^2\left[g\,J_W + g_e\,\Delta e\right], \qquad g(e,O) = \frac{1+e^2+2e\cos O}{1-e^2}, \qquad g_e = \frac{2\left(2e + (1+e^2)\cos O\right)}{(1-e^2)^2},$$

with $\Delta e = \frac{1-e^2}{e}\left(J_h - \frac{J_W}{2}\right)$ (the decay-web line, re-derived here from the exact map). The channel content is completely resolved by distinguished readings:

| Reading | Result | Status |
| --- | --- | --- |
| apsidal product | $\Delta\ln(\beta_{p}^2\beta_{a}^2) = 2J_W$ | exact |
| shape channel | $\Delta\ln(1-e^2) = J_W - 2J_h$ | exact |
| vis-viva mismatch, any $O^{*}$ | $\Delta\left[\kappa_o^2 - \beta_o^2\right](O^{*}) = \Delta\beta^2$ | exact, phase-independent |
| balance point to balance point | $\beta_o^2(B_a) = \beta^2$, so successive balance-point values read $\Delta\beta^2$ directly | exact, non-perturbative |
| fixed old balance point $O^{*} = B_a = \arccos(-e)$ | $\Delta\beta_o^2 = 2\beta^2 J_h$ | first order, **pure $h$-channel** |
| $O^{*} = O_\dagger = \arccos\!\left(-\frac{2e}{1+e^2}\right)$ (where $g_e = 0$) | $\Delta\beta_o^2 = \beta^2\frac{1-e^2}{1+e^2}J_W$ | first order, **pure $W$-channel** |

Two structural theorems follow (both machine-verified):

**Completeness.** The reconstruction determinant for readings at two phases is $-\frac{2\beta^4}{e}(\cos O_1 - \cos O_2)$: mismatches at any two phases with $\cos O_1 \neq \cos O_2$ determine $(J_W, J_h)$ uniquely, and the mismatch function over one cycle spans exactly a 2-dimensional space. The unclosed contour carries the complete radiative state of the pair — precisely the two channels of the skeleton, nothing further. The topological definition and the two-flux skeleton are the same object in dual presentation.

**Channel diagonalization at the apsides.** The geometric mean of the apsidal kinematic amplitudes reads the energy channel, their ratio reads the shape channel: $\beta_p\beta_a = \beta^2$ and $\beta_p/\beta_a = e_X$ identically, so $\frac{1}{2}\Delta\ln(\beta_p^2\beta_a^2) = J_W$ and $\frac{1}{2}\Delta\ln(\beta_p^2/\beta_a^2) = \Delta\ln e_X$. The framework's Structural-Dynamical Equivalence chain ($e_X = \delta_a/\delta_p$) makes the second reading equivalently the per-cycle jump of the apsidal closure-factor contrast $\Delta\ln(\delta_a/\delta_p)$ — the closure factor enters the decay bookkeeping as an *apsidal ratio jump*, not as a cycle average.

The radiated ledger connects directly: inserting $\Delta\beta^2$ (the balance-point reading) into the skeleton's exact energy bridge,

$$-\frac{\Delta E}{E_0} = \frac{\Delta\beta^2/2}{(1-\beta^2)^{3/2}\sqrt{1-2\beta^2}},$$

so the "relational capacity shed per cycle" of the hypothesis is, in the weak field, $\frac{1}{2}\Delta\beta^2$ per unit $E_0$ — the topological mismatch *is* the shed binding energy, with the exact strong-field correction factor supplied by the bridge.

---

## 3. Sign structure: where the literal inequality holds and where it fails

With the GR-matching fluxes (comparison input), the relative perihelion mismatch is $\Delta\ln\beta_p^2 = J_W\,B(e)$ with $B(e) = 1 + \frac{2}{e}\left(\frac{\varepsilon_h}{\varepsilon_W} - \frac{1}{2}\right)$ and small-$e$ expansion $B(e) = 1 - \frac{19}{6}e + O(e^3)$ (symbolic). $B(e) = 0$ is equivalent to $f_W(e) = (1+e)f_h(e)$, i.e. the cubic

$$37e^3 - 84e^2 + 208e - 96 = 0, \qquad e^{*} = 0.5557305673,$$

verified independently by bisection on $B$ and by the polynomial root. The full sign field of $\Delta\beta_o^2(O^{*})$ is linear in $\cos O^{*}$, so a single critical curve $\cos O_c(e)$ separates negative (perihelion side) from positive (aphelion side) mismatch for $e > e^{*}$; sample values: $O_c(0.617) = 41.6^\circ$, $O_c(0.7) = 65.0^\circ$, $O_c(0.8) = 88.7^\circ$, $O_c(0.9) = 115.6^\circ$. For $e < e^{*}$ the mismatch is positive at every phase. The aphelion mismatch and both invariant readings ($\Delta\beta^2$, $\Delta\ln(\beta_p^2\beta_a^2)$) are positive for all $e \in (0,1)$ during decay.

Physical content: above $e^{*}$, circularization pulls the perihelion speed down faster than deepening pushes it up. The two known double neutron stars fall on opposite sides — a concrete internal contrast:

| System | $e$ | $\Delta\beta_p^2$ per cycle | $\Delta\beta_a^2$ | $\Delta\beta^2$ (invariant) |
| --- | --- | --- | --- | --- |
| PSR B1913+16 | $0.6171$ | $-2.34\times10^{-19}$ | $+1.64\times10^{-18}$ | $+3.43\times10^{-18}$ |
| PSR J0737$-$3039 | $0.0878$ | $+3.13\times10^{-18}$ | $+3.86\times10^{-18}$ | $+3.62\times10^{-18}$ |

**Consequence for the definition:** the open state must be defined by *mismatch*, $\beta_{Ao}(0) \neq \beta_{Ao}(2\pi)$ at generic reference phase — equivalently by the sign-definite invariant readings $J_W > 0$, $J_h > 0$ — not by the phase-pointwise inequality, which fails at perihelion for $e > e^{*}$.

---

## 4. Relation to the closure defect: the meter is superseded, not measured

The closure factor is a pure shape variable: $\delta_o = \frac{1+e\cos O}{1+e^2+2e\cos O}$ contains no $\beta^2$ at all (symbolic check D0). Per def:closure_factor the global amplitudes are the cycle averages of the local ones, so the cycle defect is $\langle\delta\rangle_{\text{cycle}} = \frac{\langle\kappa_o^2\rangle_t}{2\langle\beta_o^2\rangle_t}$, equal to $1$ exactly on every closed cycle for *every* admissible $(\beta^2, e)$. That universality is precisely what disarms it as a decay meter: a first-order drift along *any* state direction cannot move a quantity that equals $1$ identically on the state manifold. Machine results over one radiating cycle ($e_0 = 0.5$, $\beta_0^2 = 0.01$, per-cycle flux $\varepsilon = 10^{-3}$, RK4 in true phase with the loss distributed by a within-cycle profile $p(O)$):

| Loss profile | $\langle\delta\rangle_{\text{cycle}} - 1$ | $\Delta\beta_o^2(0)$ |
| --- | --- | --- |
| uniform (pure-$W$ flux) | $-2.6\times10^{-9}$ | $+3.0015\times10^{-5}$ |
| perihelion burst, symmetric (pure-$W$) | $-4.3\times10^{-10}$ | $+3.0015\times10^{-5}$ |
| burst at $O = \pi/2$, asymmetric (pure-$W$) | $-3.34\times10^{-5}$ | $+3.0015\times10^{-5}$ |
| same burst mirrored to $O = 3\pi/2$ | $+3.34\times10^{-5}$ | $+3.0015\times10^{-5}$ |

Fitted scaling orders in $\varepsilon$: defect $2.002$, boundary mismatch $0.992$. The pattern proves three statements at once. The averaged defect is second order for parity-symmetric profiles (and realistic emission is symmetric about perihelion at leading order); at first order it responds only to the *asymmetry* of the loss profile — it flips sign under mirror reflection of the profile while the totals and the boundary mismatch are unchanged; the boundary mismatch is identical across all profiles to $10^{-12}$ and equals the exact endpoint algebra of §2. For the circular radiating orbit the failure is complete: exact spiral kinematics give $\langle\delta\rangle - 1 = -\varepsilon_W^2/(4\pi^2)$ (verified at three flux values) while the boundary mismatch reads $\beta^2\varepsilon_W$ at first order — under cor:condition as written, a circular inspiral is "closed" to first order despite radiating.

**Refinement forced on the framework:** cor:condition's meter $\langle\delta\rangle_{\text{cycle}} \neq 1$ does not quantify the energy flow through unaccounted channels at leading order; the topological boundary mismatch does. The hypothesis's own construction is the repair. The correct statement of its third claim: *the discrete kinematic shift constitutes the direct algebraic measure of relational openness, replacing $\langle\delta\rangle_{\text{cycle}}$ as the first-order meter.*

The profile-independence is also what justifies calling the discontinuity *exact*: the mismatch depends only on the totals $(J_W, J_h)$, not on any within-cycle time resolution — no $dt$-level information survives in it, by construction and by machine check.

---

## 5. $\Delta\beta_{Ao}^2$ versus $\Delta\beta_{Ao}$

The quadratic form wins on three independent grounds. The Conservation theorem admits amplitudes into the ledger only in quadratic form ($\text{Amplitude}^2 + \text{Phase}^2 = 1$), and DOF weighting in the Closure theorem is per quadratic DOF, so $\beta_o^2$ is the ledger entry while $\beta_o$ is its square root with no independent ontological standing. The exact jump algebra of §2 is native to $\ln\beta_o^2$ (log-quadratic): the channel readings $2J_W$ and $J_W - 2J_h$ are exact at finite jumps only in this variable. The linear shift $\Delta\beta_o = \frac{\Delta\beta_o^2}{2\beta_o}$ carries the same zero set but distorts the channel weights by the phase-dependent factor $\frac{1}{2\beta_o(O^{*})}$ and breaks the direct energy-bridge reading. Recommended canonical form: the relative quadratic mismatch $\Delta\ln\beta_{Ao}^2$, which is additionally component-independent — with Energy-Symmetry share weighting $\beta_{Ao} = \frac{m_B}{M}\beta_o$, constant shares cancel in the log, so $\Delta\ln\beta_{Ao}^2 = \Delta\ln\beta_{Bo}^2 = \Delta\ln\beta_o^2$ (verified): both components register the same relative defect. The mismatch is a property of the relation, not of either component — reciprocity extends to the open state.

---

## 6. Discrete chronometry: the $dt$-replacement claim

The per-cycle map $\beta^2 \to \beta^2 e^{\varepsilon_W}$, $(1-e^2) \to (1-e^2)e^{\varepsilon_W - 2\varepsilon_h}$ iterated as a pure sequence (cycle count $N$, no time coordinate) was compared against the continuous flow: the cycle counts to the ISCO invariant $\beta^2 = \frac{1}{6}$ agree up to the Euler–Maclaurin offset $\approx \frac{1}{2}\ln\frac{\varepsilon_{\text{end}}}{\varepsilon_{\text{start}}} + O(1)$ — a flux-scale-independent handful of cycles (script: $+3.9$ and $+3.7$ at two flux scales against predicted $+2.7$; development runs over an eightfold flux range gave $+3.9 \to +3.4$, decreasing toward the prediction), so the relative difference vanishes as $\varepsilon \to 0$. For PSR B1913+16 the discrete endpoint exists and is finite: $N_{\text{ISCO}} = 7.79\times10^{11}$ cycles from the current state, with $e \to 2.6\times10^{-8}$ (circularized) at arrival. The $dt$-free formulation is well-posed, observationally equivalent to the continuous one at current precision (differences $O(\varepsilon) \sim 10^{-12}$ per cycle), and terminates at the framework's own marginal-stability invariant rather than at a coordinate singularity.

Consistency with observation, through the topological readout: extracting $\varepsilon_W$ from the apsidal-product jump and inserting it into the skeleton's forced line $\dot T = -\frac{3}{2}\varepsilon_W$ returns $\dot P_b = -2.4031\times10^{-12}$ for B1913+16 (literature GR $-2.40263\times10^{-12}$) and $-1.2483\times10^{-12}$ for J0737$-$3039 (literature $-1.24792\times10^{-12}$), within input-mass rounding. Nothing new is predicted here — the fluxes were imported — but the topological pipeline reproduces the observables without any $dt$-resolved intermediary.

---

## 7. What the topological definition does not do

Lemma 1 of `ROM_RADIATIVE_DECAY.md` survives untouched and the present construction makes it visible directly: the mismatch function's two coefficients *are* $(\varepsilon_W, \varepsilon_h)$. Defining decay as boundary mismatch determines the meter exactly, and determines the magnitudes not at all — every admissible $(\beta^2, e, R_s)$ is still realized by an exactly closed dyad with zero mismatch. The magnitudes remain the business of the propagating-channel program (`ROM_ABINITIO_ODDKERNEL.md`: scalar kernel falsified at the exact factor $6$; directed kernel pending). One speculative bridge, flagged as outside the present sources: if the Part II phase-closure argument (whole-number windings neither grow nor decay) could be made quantitative on the $S^1$ carrier, a winding-defect condition might constrain the admissible mismatch per cycle; nothing in the two source papers forces this, and it is recorded only as a candidate direction.

---

## 8. Suggested revision of the subsubsection

Changes from the draft: mismatch (not strict inequality) defines the open state, with the sign threshold stated; the quadratic log form is canonical; the closure-defect sentence is reversed to "supersedes"; the exactness claim is grounded in profile independence.

```latex
\subsubsection{Topological Definition of Orbital Decay}
\hypertarget{sec:topological_decay}{}\label{sec:topological_decay}
In a relationally closed dyad the geometric contours of the kinematic
projections self-intersect after one anomalistic phase cycle. For any
component $A$ the boundary states are identical as an algebraic identity
of the closed set:
\begin{equation}
\beta_{Ao}(O^{*}) = \beta_{Ao}(O^{*} + 2\pi) \quad \forall\, O^{*}.
\end{equation}
Orbital decay is geometrically defined as the failure of this
self-intersection on the $S^1$ carrier: the contour becomes an open
spiral, and the per-cycle mismatch
\begin{equation}
\Delta\ln\beta_{Ao}^2(O^{*}) \neq 0
\end{equation}
defines the open state. The mismatch is exact and topological: it depends
only on the per-cycle totals of the two radiative channels, not on the
within-cycle distribution of the loss. Its channel content is resolved by
two exact readings,
\begin{equation}
\tfrac{1}{2}\,\Delta\ln\!\big(\beta_{Ap}^2\,\beta_{Aa}^2\big)
  = \Delta\ln\beta^2 \equiv \varepsilon_W,
\qquad
\Delta\ln\!\big(1-e^2\big) = \varepsilon_W - 2\varepsilon_h,
\end{equation}
so the unclosed boundary carries the complete radiative state of the
dyad. The sign of the single-phase mismatch is phase dependent: for
$e > e^{*}$, with $e^{*}$ the root of $37e^3 - 84e^2 + 208e - 96 = 0$
($e^{*} \approx 0.5557$), the perihelion reading is negative while the
invariant readings remain positive throughout decay. The discrete
mismatch supersedes the cycle-averaged closure factor as the meter of
openness: $\langle\delta\rangle_{\text{cycle}} - 1$ is second order in
the per-cycle flux (and, at first order, responds only to the asymmetry
of the within-cycle loss profile), whereas $\Delta\ln\beta_{Ao}^2$ is
first order and profile independent. Continuous differential time
evolution ($dt$) is thereby replaced by an exact topological
discontinuity per cycle, with the cycle count $N$ as relational
chronometry.
```

---

## 9. Verification manifest

`rom_topological_decay.py` (this folder; requires sympy + numpy; ~1 min): Part A (4) closed-cycle periodicity identities; Part B (9) exact jump algebra — decay-web $\Delta e$, apsidal product/ratio, phase-independent vis-viva mismatch, general first-order mismatch formula, pure-channel readings at $B_a$ and $O_\dagger$, non-perturbative balance-point identity, 2D completeness determinant; Part C (7) sign structure under GR fluxes — circularization, $e^{*}$ by bisection and by the exact cubic, symbolic small-$e$ slope $-\frac{19}{6}$, aphelion positivity, critical-phase table, B1913+16 sign reversal; Part D (12) defect comparison — $\delta_o$ independence of $\beta^2$, circular spiral defect $-\varepsilon_W^2/(4\pi^2)$ at three fluxes, closed-cycle integrator sanity, profile independence of the mismatch vs profile dependence and $\varepsilon^2$ scaling of the averaged defect, mirror sign flip; Part E (1) component reciprocity; Part F (6) pulsar numbers, topological $\dot P_b$ readout, sign contrast B1913+16 vs J0737$-$3039, discrete-vs-continuous Euler–Maclaurin agreement, finite $N_{\text{ISCO}}$. During development the harness caught two genuine errors in my own first-pass analytics: the leading-order estimate $e^{*} \approx \frac{6}{19}$ (superseded by the exact cubic root $0.5557$) and an average-of-ratio misreading of $\langle\delta\rangle_{\text{cycle}}$ (corrected to the ratio-of-averages per def:closure_factor before any conclusion was drawn).

---

*Derived strictly from the two source papers and the prior skeleton; every claim above is a PASS line in the script; the two corrections to the hypothesis are stated as corrections, not reinterpretations; the undetermined element (flux magnitudes) remains undetermined, in agreement with Lemma 1.*
