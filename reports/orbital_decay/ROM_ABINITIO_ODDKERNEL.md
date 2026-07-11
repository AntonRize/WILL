# Ab Initio Odd-Kernel Derivation for the Radiating Pair

**Method contract stated before computation; all cancellations are outputs; comparison with observation appears only in the final section, labeled.**
**Verification:** `rom_abinitio_oddkernel.py` (repo root). Companions: `ROM_RADIATIVE_DECAY.md` (decay skeleton), `ROM_PAIR_MECHANISM.md` (compatibility test; its Stage 3 was a GR-transplant check, *not* a derivation — this document is the derivation that replaces it).

---

## 1. Method contract

**Allowed inputs (framework only, cited):**

1. The closed-set ellipse and its in-plane parametric form $x = r\cos O$, $y = r\sin O$ (R.O.M., "Background Free Parametric Equations" — observables, used as bookkeeping).
2. The weak-field pair ledger $U_i = -\tfrac{1}{2} m_i c^2 \sum_j (R_{sj}/s)$, i.e. coupling $G\,m_i m_j$ — this is WILL_RG_I's own "first ontological collapse" (sec:LH), with $G$ a translation factor.
3. Response rule: force $=$ gradient of the local ledger entry (R.O.M. sec:acceleration).
4. Energy-Symmetry share weighting: $\vec x_1 = \tfrac{m_2}{M}\vec s$, $\vec x_2 = -\tfrac{m_1}{M}\vec s$ (ledger balance).
5. Scales $R_{s1}, R_{s2}$ constant (ledger conservation).
6. Part II Self-Interaction lemma: every propagated relation re-encounters its source — therefore **self-terms ($j=i$) are mandatory**, not optional.

**Hypothesis (the only new structure), two explicit rules:**

- **M0 — bare causal evaluation:** the ledger entry $1/s$ is evaluated on the light cone, implicit condition $\tau = g(t \mp \tau)/c$, nothing else.
- **M1 — pulse relation:** the relation is carried by sharp causal pulses both ways. Then, by Taylor's theorem alone (no wave equation, no field ontology), the odd residual of the two-way connection is
$$K_{odd} = -\sum_{k\ \mathrm{odd}} \frac{1}{k!\,c^k}\,\frac{d^k}{dt^k}\big[\,g^{\,k-1}\,\big],$$
with the time derivatives acting on the partner's configuration at fixed observation point, *before* evaluation at the observer (that ordering is the meaning of an incoming relation).

**Pre-registered outcomes:** a surviving odd term at $1/c$ or $1/c^3$ falsifies that rule (Mercury); a $1/c^5$ survivor is computed with no assumed form; shapes are compared with data only at the end; disagreement is a result.

---

## 2. Results

### M0 is falsified

The implicit light-cone expansion gives the $O(1/c)$ odd term $K_{odd}^{(1)} = \dot g/g$ (derived, machine-verified). Its cycle-averaged work on the balanced pair is **nonzero at order $1/c$**:
$$\langle P_{M0}\rangle = \frac{M\, m_1 m_2\,\big(2m_1m_2 - e^2(m_1^2+m_2^2)\big)}{c\,(1-e^2)^{3/2}\,(m_1+m_2)^2}\cdot\frac{1}{a^2}\Big|_{a=1} \neq 0 .$$
A per-orbit effect of order $\beta$ — excluded by roughly eight orders of magnitude by Mercury's persistence (and, notably, for near-circular orbits it *pumps* rather than drains, opposite to the naive drag intuition — hand-waved lag models are worthless here; only the systematic expansion decides). M0 also cannot represent the Self-Interaction lemma at all: its self-terms are singular. **M0 is dead.**

### M1: the low-order cancellations emerge as outputs

- $k=1$: vanishes because the scales are constant ($g^{0}=1$) — the framework's "no monopole drift."
- $k=3$: the force vanishes **identically on both bodies**, because the gradient-then-derivative structure produces $\partial_t^3 \sum_j R_{sj}\,\vec x_j$, which is zero by ledger balance *once the mandatory self-terms are included*. This is the framework-native "no dipole channel," derived — it requires Part II's Self-Interaction lemma, which is precisely the tone/absorber element of the hypothesis.

### M1: the surviving $k=5$ law (ab initio, no assumed form)

$$\langle P_{k5}\rangle = -\,\frac{\mu^2 M^3}{c^5 a^5}\;\frac{128 + 396\,e^2 + 51\,e^4}{120\,(1-e^2)^{7/2}}, \qquad \mu = \frac{m_1 m_2}{M},\ M = m_1+m_2 .$$

In the decay-skeleton variables ($\eta = \mu/M$, $\beta^2 = GM/(a c^2)$):

$$\boxed{\ \varepsilon_W^{\,ab} = \frac{64\pi}{15}\,\eta\,\beta^5\,\frac{1 + \tfrac{99}{32}e^2 + \tfrac{51}{128}e^4}{(1-e^2)^{7/2}}\ }$$

Properties that **emerge** (nothing imposed): the drain sign (energy leaves); the $\eta\,\beta^5$ scaling; the $(1-e^2)^{-7/2}$ envelope; and the circular-orbit channel lock $\varepsilon_h/\varepsilon_W = \tfrac{1}{2}$ at $e=0$ — exactly the constraint the closed set *forces* on any decay law (ROM_RADIATIVE_DECAY.md §4, Step 6), reproduced here by the mechanism as an output. The full-eccentricity $\varepsilon_h(e)$ computation is running and will be appended.

---

## 3. Comparison with observation (labeled; performed only now)

The observed decay (binary pulsars, matching the GR quadrupole to $\sim 0.2\%$) requires $\varepsilon_W^{obs} = \frac{128\pi}{5}\eta\beta^5\,\big(1+\tfrac{73}{24}e^2+\tfrac{37}{96}e^4\big)(1-e^2)^{-7/2}$.

- **Rate at $e=0$:** $\varepsilon_W^{ab}/\varepsilon_W^{obs} = \dfrac{64\pi/15}{384\pi/15} = \dfrac{1}{6}$ — an exact factor-6 deficit.
- **Eccentricity polynomial:** $1+\tfrac{99}{32}e^2+\tfrac{51}{128}e^4$ vs the observed $1+\tfrac{73}{24}e^2+\tfrac{37}{96}e^4$ — about $1\%$ apart at $e = 0.617$ (B1913+16).

**Verdict: the minimal *scalar* pulse relation is falsified by binary-pulsar data.** This is the pre-registered outcome (b)/(c): the rule survives every internal constraint but under-radiates by exactly $6$ and slightly misshapes the eccentricity dependence.

---

## 4. What this tells us (and the next well-posed task)

The scalar kernel treats the propagating relation as a bare magnitude pulse — it carries **no directional structure**. But the framework's kinematic carrier $S^1$ is *directed* ("opposite orientations are physically distinct"), and the original symmetry-breaking intuition was chiral from the start. The missing structure is now quantified precisely: whatever the directed relation adds must supply a factor of exactly $6$ at $e=0$ and shift the polynomial $\big(\tfrac{99}{32}, \tfrac{51}{128}\big) \to \big(\tfrac{73}{24}, \tfrac{37}{96}\big)$.

Observation to be tested, not asserted: $6 = 2\times(1+2)$ — the orientation doubling of the directed $S^1$ times the total amplitude DOF count of the two carriers. Whether this is the actual origin must be *derived* by repeating this calculation with a directed pulse kernel (the relation carrying the pair's orientation), under the same contract, zero free parameters. If the directed kernel produces $\tfrac{16}{15} \to \tfrac{32}{5}$ and the observed polynomial, the decay law closes ab initio. If it produces something else, that is the next result.

**Status of the two failure modes so far:** every internal constraint of the framework (balance, self-interaction, the $e=0$ lock, the decay-web compatibility) is satisfied by the mechanism class; the falsification is purely quantitative and localized to the *content carried by the propagating relation*. The question is no longer whether this mechanism family works, but which carrier structure the relation propagates on.

---

*All computations in `rom_abinitio_oddkernel.py` (PASS/FAIL per step; base integrals verified at 25 digits; runtime: minutes, the full-$e$ angular-momentum average longest). Method contract in the script header.*
