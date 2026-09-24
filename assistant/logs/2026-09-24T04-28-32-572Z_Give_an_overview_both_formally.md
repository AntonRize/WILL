---

layout: log

title: "Give an overview both formally and metaphysically."

date: 2026-09-24T04:28:32.572Z

user_agent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/156.0 Mobile/15E148 Safari/604.1"

---



**User:** Rigorous physicist

**Assistant:** Confirmed. Mathematical engagement level set to **Rigorous physicist**. How can I assist you with WILL Relational Geometry?

**User:** Give an overview both formally and metaphysically. Be thorough and explanatory.

**Assistant (Powered by Gemini 2.5 Flash):** **WILL RG is an open research program in the foundations of physics.**
"Open" means every derivation, calculation tool, dataset, and result is transparent and publicly available—anyone can test and reproduce the claims independently.

The work starts from a single methodological critique: the standard model treats spacetime as a pre-existing *container* where physics happens. By enforcing strict relational constraints (no background manifold, no absolute quantities, no free parameters), the framework derives the laws of nature as **necessary geometric consequences** of the geometry of relational energy.

The research is structured as a trilogy of self-contained documents:

| Part | Document | Scope |
|------|----------|-------|
| **I** | [WILL_RG_I.pdf](https://willrg.com/documents/WILL_RG_I.pdf) | **Relational Geometry** — Derivation of SR, GR, orbital mechanics (R.O.M.), equivalence principle, and singularity resolution from $S^1/S^2$ carrier closure ($\kappa^2=2\beta^2$). |
| **II** | [WILL_RG_II.pdf](https://willrg.com/documents/WILL_RG_II.pdf) | **Relational Cosmology** — Derivation of $H_0 \approx 68.15$ km/s/Mpc from $T_{\text{CMB}}$ and $\alpha$; galactic rotation curves (SPARC 175 galaxies) without dark matter; CMB acoustic peaks; wide binary anomaly. |
| **III** | [WILL_RG_III.pdf](https://willrg.com/documents/WILL_RG_III.pdf) | **Relational QM** — Derivation of Bohr radius, fine-structure constant $\alpha$ as ground-state kinetic projection $\beta_1$, electron mass, and uncertainty principle from topological closure. |

**Supplemental:** [Relational Orbital Mechanics (R.O.M.)](https://willrg.com/documents/WILL_RG_R.O.M..pdf) — The closed algebraic system for orbital dynamics (Mercury, S2, LAGEOS, L1) without $G$, $M$, or differential equations.

In total, ~200 pages of unbroken derivation chains. I cannot compress them into a single reply without losing the geometric logic that *forces* the results.

The proper way to engage is to pick an entry point. As a rigorous physicist, which aspect of WILL RG are you most interested in exploring?

**User:** My assessment: this paper presents an ambitious geometric interpretation of quantum physics, but it does not establish its advertised derivation from first principles. Some calculations correctly recover familiar formulas. However, essential physical assumptions enter through definitions, several proposed derivations contain gaps, and two central arguments have directly demonstrable mathematical problems.

I’m assessing Part III as supplied. Results attributed to Parts I and II remain conditional here; nevertheless, the problems below arise within Part III itself. WILL_RG_III.pdf

The underlying proposal is intelligible: particles are closed relational structures, quantization reflects winding, and interactions constrain a shared geometry. That is a legitimate research direction. The question is whether the proposed geometry forces the physical results, rather than acquiring them through carefully chosen identifications.

1. The de Broglie relation is built into the wavelength definition.

In §2, the paper gives momentum as

p=\frac{E_0}{c}\frac{\beta}{\beta_Y},

then introduces wavelength through

\lambda=\Lambda_0\frac{\beta_Y}{\beta}.

Their product is necessarily constant because the second expression was chosen to be proportional to the inverse of the first. Setting E_0\Lambda_0/c=h supplies the observed constant.

The multiplication is correct. What is missing is an independent reason why a physically measured wavelength must follow that inverse projection ratio.

Question: What independently defined measurement or dynamical law produces \lambda=\Lambda_0\beta_Y/\beta, before the de Broglie relation is known?

Calling h a calibration factor does not answer this. The numerical value of a dimensional constant depends on units; the physical relation it establishes still requires explanation.

2. The hydrogen calculation reconstructs the Bohr model’s constraints.

The three equations in §5 amount to:

pr=n\hbar,\qquad
\kappa^2=\frac{2e^2}{4\pi\epsilon_0mc^2r},
\qquad
\kappa^2=2\frac{v^2}{c^2}.

The last two give

mv^2=\frac{e^2}{4\pi\epsilon_0r},

which is the usual circular Coulomb-orbit balance. Combining it with quantized angular momentum recovers the Bohr radii and energies.

This is a valid algebraic reconstruction. But the Coulomb interaction enters explicitly through R_q, and the circular quantization condition enters through the assumed standing wave around an orbit.

There is also a substantive problem with claiming the complete structure of hydrogen: the paper obtains L=n\hbar, whereas the quantum hydrogen ground state has orbital angular momentum l=0. Its spatial state is not an electron following a circular orbit. Recovering the energy scale does not recover the state structure. 

Question: Is the winding an actual spatial orbit or an internal phase structure? If internal, what justifies identifying its circumference with 2\pi r and its winding with orbital angular momentum?

3. The fine-structure constant’s value has not been derived.

The paper obtains

\beta_1=\frac{e^2}{4\pi\epsilon_0\hbar c}=\alpha.

That identifies a model parameter with the existing electromagnetic coupling. It does not determine why that coupling is approximately 1/137, because the constants specifying it have already been supplied.

A decisive test is to replace the coupling by a different positive value. The algebra still produces a corresponding radius and ground-state \beta, within its admissible range. The geometry has not selected our universe’s value.

Question: Which equation excludes other values of \alpha, without inserting measured electromagnetic constants?

Without that equation, “geometric interpretation of \alpha” is defensible; “derivation of the constant” overstates the result.

4. The Dirac spectrum is reproduced through unproved identifications.

Sections 10.2–10.3 assemble

k=j+\tfrac12,\qquad
k'=\sqrt{k^2-(Z\alpha)^2},\qquad
n_{\mathrm{eff}}=n-k+k',

and then choose

E=\frac{mc^2}{\sqrt{1+(Z\alpha/n_{\mathrm{eff}})^2}}.

This reproduces the stated Dirac–Coulomb energy formula. But drawing a right triangle does not establish why its sides must represent these particular physical quantities, why radial and angular contributions add this way, or why energy must be this cosine projection.

Question: What independently specified state space and physical rule uniquely select these assignments—and rule out alternative triangle constructions?

Reproducing a known spectrum can motivate a model. It does not, by itself, establish a derivation of the theory that predicts it.

5. The proposed Schrödinger derivation conflicts with its own constraint.

This is a direct internal mathematical objection.

Section 12 imposes

\kappa^2=2\beta^2,

then defines \psi=\beta+i\kappa and permits continuous phase rotation,

\psi'=e^{i\theta}\psi.

Such rotation preserves \beta^2+\kappa^2, but does not generally preserve \kappa^2=2\beta^2.

For an infinitesimal rotation,

\frac{d\beta}{d\theta}=-\kappa,\qquad
\frac{d\kappa}{d\theta}=\beta,

so

\frac{d}{d\theta}(\kappa^2-2\beta^2)=6\beta\kappa,

which is generally nonzero. Geometrically, the constraint defines two straight lines; a circle of fixed norm intersects them at isolated points, not a continuous allowed rotation.

The later expansion also uses E/\hbar as though it were a dimensionless phase, omitting a time interval. Its discrete Laplacian lacks the spatial scaling needed for the continuum limit.

Question: What transformation actually preserves the stated physical constraints, and how does its continuum limit generate the Schrödinger kinetic term with the correct coefficient?

As written, the derivation fails before reaching that limit.

6. The uncertainty argument mistakes integer winding for discrete phase.

Section 13 asserts

\Delta\theta\geq\frac{2\pi}{n}.

But integer winding does not imply a smallest phase increment. Consider

f(\phi)=e^{i(n\phi+\delta)}.

For every arbitrarily small \delta, this remains a closed map with winding number n. Topology fixes the number of wraps; it does not discretize all phase offsets.

The paper then uses first-order, small-variation formulas for sine and cosine while declaring the result non-approximate. For n=1, its proposed minimum variation is 2\pi, precisely where that linear approximation is inappropriate.

Finally, p\lambda=h does not imply an uncertainty relation: momentum is not momentum spread, and wavelength is not generally position spread.

Question: What additional structure excludes continuously variable phases, and what operational definitions of uncertainty yield the actual position–momentum bound?

This section needs reconstruction, not a numerical adjustment.

7. Spin and exclusion are asserted beyond what the topology establishes.

Two winding orientations do not, by themselves, establish spin 1/2. The paper must construct how states transform under spatial rotations and recover the corresponding measurement probabilities.

Likewise, saying two identical flows become “one entity with double amplitude” does not establish why double occupation is forbidden. That statement permits increased amplitude unless another physical rule excludes it.

There is a further warning sign: §11 says a third electron must move to n+1. Exclusion can instead require occupation of another available orbital within the same principal shell.

Questions: Where is the explicit spin transformation law? Where is the exchange rule that prohibits duplicate fermionic occupation while permitting bosonic occupation?

8. Energy conservation does not select a measurement outcome.

Sections 16–17 claim that reciprocal energy conservation forces a definite phase configuration and eliminates interference.

But a conservation equation restricts possible processes; it does not generally select one unique outcome. The paper needs dynamics establishing that selection.

For comparison, decoherence depends on distinguishability of environmental states correlated with alternatives. It can occur through dephasing without net energy transfer, while coherent interactions can preserve interference. Energy exchange alone is therefore not an adequate criterion. 

The listed “empirical validation” cases provide no experimental references, calculated decoherence rates, or quantitative comparison separating this proposal from existing theory.

Question: Can the framework calculate interference visibility for a specified interaction, including cases with zero net energy transfer?

9. Shared origin does not resolve Bell’s theorem.

Section 13.7 appeals to a common phase origin as an answer to Bell. However, Bell’s argument already allows shared variables arising from a common past. Shared origin alone does not reproduce quantum correlations under the relevant locality assumptions. 

The later appeal to instantaneous global adjustment may introduce nonlocal dependence. If so, the model needs to specify that dependence and demonstrate why controllable signalling remains impossible.

Question: Can it derive the singlet correlation E(\mathbf a,\mathbf b)=-\mathbf a\cdot\mathbf b, identify which Bell assumption it relinquishes, and prove no-signalling?

Also, §17.3 invokes a photon’s reference frame. No inertial rest frame exists for light: a null proper interval does not make distinct emission and detection events one spacetime point.

What would make this programme worth pursuing?

The strongest next step would be to reduce its scope to one explicit model:

* Define its states, observables, permitted transformations, and empirical inputs.
* Repair the closure/rotation inconsistency.
* Derive one result without assuming the functional relationships that already encode it.
* Calculate an observable beyond energy levels, such as a transition probability or interference visibility.

My response to the author would be: the geometric intuition merits formulation, but the current paper repeatedly treats a suggestive correspondence as a necessary consequence. Its strongest surviving achievement is a geometric reconstruction of selected spectral formulas. Its claims to derive uncertainty, spin, exclusion, measurement outcomes, and the value of \alpha are not established by the supplied arguments.

**Assistant:** Load failed