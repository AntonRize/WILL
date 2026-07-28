# Keyword map for willrg.com

Built from the actual section headings on `/predictions/`, the trilogy structure and the gateway abstract. Nothing here is invented. Terms are grouped by the search intent behind them, because that is what decides which page should carry them.

Search engines rank **pages**, not sites. A term belongs in the description of the page that actually contains it. Putting all of these on the homepage would not work: Google discards descriptions that read as keyword lists, and a page cannot rank for a term it does not discuss.

---

## 1. Philosophy and foundations

The framing terms. Low search volume, high relevance, and the audience most likely to engage seriously.

relationalism, substantivalism, substantialism versus relationalism, background independence, foundations of physics, philosophy of physics, ontology of spacetime, what is spacetime made of, is spacetime physical, is spacetime emergent, relational spacetime, absolute versus relative space, first principles physics, ontological minimalism, epistemic hygiene, independent research, open research, self-taught physicist

**Belongs on:** `/about/`, `/` (homepage), `/RGvsGR/`

---

## 2. Special and general relativity, gravitation

special relativity, general relativity, gravitational time dilation, GPS time dilation, equivalence principle, energy momentum relation, Minkowski interval, Schwarzschild metric, Schwarzschild radius, gravitational singularity, black hole horizon, event horizon, geodesic equation, Einstein field equations, first post-Newtonian limit, 1PN, light deflection, gravitational deflection of light, vacuum equation of state, unified field equation

**Belongs on:** `/relativistic-foundations/`, `/predictions/`, `/RGvsGR/`

---

## 3. Orbital and celestial mechanics

Kepler's third law, vis-viva equation, orbital precession, perihelion precession, Mercury perihelion precession, apsidal precession, eccentricity, angular momentum conservation, binary pulsar, orbital decay, Hulse-Taylor, S2 star, S-star orbits, Sagittarius A*, Sgr A*, galactic centre black hole, Kerr geometry, frame dragging, Lense-Thirring effect, LAGEOS, gravitational lensing, Einstein ring, Lagrange point, L1 point, spectroscopic redshift, transverse Doppler shift, gravitational redshift, orbital elements from observables

**Belongs on:** `/rom/`, `/predictions/`, `/decoder/`

---

## 4. Cosmology and the dark sector

Hubble constant, H0, Hubble tension, CMB, cosmic microwave background, CMB acoustic peaks, acoustic spectrum, recombination, low quadrupole anomaly, axis of evil, dark energy, dark energy alternative, cosmological constant, vacuum energy, vacuum density, cosmic acceleration, expansion of the universe, Type Ia supernovae, Pantheon+, supernova distance modulus, Planck 2018, LambdaCDM, alternative to LambdaCDM

**Belongs on:** `/predictions/`, `/results/`

---

## 5. Galactic dynamics and dark matter

dark matter, dark matter alternative, alternative to dark matter, galaxy rotation curves, flat rotation curves, missing mass problem, SPARC database, SPARC 175 galaxies, baryonic Tully-Fisher relation, BTFR, radial acceleration relation, RAR, MOND, modified gravity, modified Newtonian dynamics, wide binary anomaly, Gaia DR3 wide binaries, baryonic escape threshold, solar system test, galactic scale, dwarf galaxies, NFW halo

**Belongs on:** `/galactic_dynamics/`, `/predictions/`

---

## 6. Quantum mechanics and atomic structure

de Broglie relation, matter waves, quantization, topological quantization, angular momentum quantization, Bohr radius, atomic structure, hydrogen atom, fine structure constant, alpha, Rydberg formula, spectral lines, energy levels, Sommerfeld-Dirac formula, spin, Pauli exclusion principle, Schrodinger equation, wavefunction collapse, uncertainty principle, Heisenberg uncertainty, decoherence, quantum entanglement, delayed choice quantum eraser, interaction-free measurement, Elitzur-Vaidman bomb tester, hidden variables, Bell's theorem, electron mass derivation

**Belongs on:** `/predictions/`, `/results/`

---

## 7. Method and open science

zero free parameters, no free parameters, no fitted constants, parameter-free, falsifiable predictions, testable predictions, reproducible research, open science, runnable notebooks, Colab notebooks, raw data published, derivation chain, peer review alternative, preprint, Zenodo DOI

**Belongs on:** every page. These are qualifiers rather than topics, and work best attached to a topic term.

---

## 8. Datasets named in the work

SPARC, Planck 2018, Pantheon+, Gaia DR3, LAGEOS, GRAVITY collaboration, Keck, VLT, NANOGrav

Naming a dataset is a strong signal. Anyone searching for a dataset by name is a serious reader.

---

## How this is deployed

| Field | Carries | Why |
|---|---|---|
| Homepage `description` | Groups 1, 4, 5, plus the domain names from 2, 3 and 6 | It is the entry point, so it spans everything rather than going deep |
| `/predictions/` `description` | Named results from 2 to 6 | Those sixty results are literally on that page |
| `/galactic_dynamics/` `description` | Group 5 | Already in place |
| `/rom/` `description` | Group 3 | Already in place |
| JSON-LD `knowsAbout` | 29 topic labels spanning all groups | A machine-readable list, so it is not judged as prose and cannot read as keyword stuffing |

The last row is the one that does the heavy lifting for breadth. It is a defined schema.org property whose whole purpose is to state what a person or work covers, so a long list there is correct usage rather than stuffing.
