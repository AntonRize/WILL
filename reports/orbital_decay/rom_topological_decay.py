"""
rom_topological_decay.py
========================
Test of the TOPOLOGICAL DEFINITION OF ORBITAL DECAY (hypothesis, July 2026):

    In a relationally closed dyad the contours of the kinematic phase
    projections self-intersect after one orbital phase cycle:
        beta_o(0) = beta_o(2*pi).
    Orbital decay is defined as the failure of this closure on the S^1
    carrier, quantified by the discrete per-cycle kinematic shift
        Delta beta_o^2 = beta_o^2(2*pi) - beta_o^2(0),
    claimed to be the direct algebraic measure of the closure defect
    <delta>_cycle != 1, replacing continuous dt evolution with an exact
    topological discontinuity.

Everything is built ONLY from the R.O.M. closed set (equations as published)
plus the two per-cycle jump numbers of the decay skeleton
(ROM_RADIATIVE_DECAY.md):  eps_W = d ln(beta^2)/dN,  eps_h = -d ln(h_W)/dN.
GR quadrupole fluxes enter ONLY in the parts labeled "GR fluxes" (sign
structure and pulsar numbers) as external comparison input, never as a
derivation.

Units inside all computations: G = c = 1 and R_s = 1, so that
    beta^2 = 1/(2a),   h_W = sqrt(1-e^2)/(2*beta).

Parts:
  A  Closed-cycle boundary identities (symbolic)
  B  Exact jump algebra of the open cycle (symbolic)
  C  Sign structure of the boundary mismatch under GR fluxes (numeric)
  D  Boundary mismatch vs cycle-averaged closure defect <delta> (ODE numeric)
  E  Two-component (dyad) reciprocity of the mismatch (symbolic)
  F  Pulsar numbers and the discrete map (numeric)

Every check prints PASS/FAIL.  Runtime: ~1 minute.
"""

import math
import numpy as np
import sympy as sp
from sympy import Rational, pi, sqrt, cos, sin, acos, exp, log, symbols, simplify

RESULTS = []          # collected (name, ok) pairs for the final tally


def check(name, ok, detail=""):
    """Print one PASS/FAIL line and remember it for the summary."""
    tag = "PASS" if ok else "FAIL"
    print(f"[{tag}] {name}" + (f"   {detail}" if detail else ""))
    RESULTS.append((name, bool(ok)))


# ----------------------------------------------------------------------
# Shared symbols and R.O.M. phase functions (exactly as in the papers)
# ----------------------------------------------------------------------
b2, e, O = symbols('beta2 e O', positive=True)      # beta^2, eccentricity, true phase
Jw, Jh = symbols('J_W J_h', real=True)              # per-cycle jumps: Jw = Delta ln beta^2, Jh = -Delta ln h_W

# g(e,O) : the phase factor of the kinematic projection,  beta_o^2 = beta^2 * g
g_expr = (1 + e**2 + 2*e*cos(O)) / (1 - e**2)

def beta_o2(b2v, ev, Ov):
    """R.O.M.: beta_o^2 = beta^2 (1+e^2+2e cos O)/(1-e^2)."""
    return b2v * (1 + ev**2 + 2*ev*cos(Ov)) / (1 - ev**2)

def kappa_o2(b2v, ev, Ov):
    """R.O.M. vis-viva: kappa_o^2 = beta^2 + beta_o^2."""
    return b2v + beta_o2(b2v, ev, Ov)

def delta_o(ev, Ov):
    """Closure factor delta_o = kappa_o^2/(2 beta_o^2) = (1+e cos O)/(1+e^2+2e cos O).
    NOTE: it depends only on (e, O) -- not on beta^2.  Verified in Part D0."""
    return (1 + ev*cos(Ov)) / (1 + ev**2 + 2*ev*cos(Ov))

# Exact state map over one radiating cycle (finite jumps, R_s = c = 1):
#   ln beta^2 -> ln beta^2 + Jw          (definition of Jw)
#   ln h_W    -> ln h_W    - Jh          (definition of Jh)
#   h_W = sqrt(1-e^2)/(2 beta)  =>  1 - e^2 = 4 h^2 beta^2
#   =>  1 - e2^2 = (1-e^2) * exp(Jw - 2*Jh)          (EXACT)
b2_new = b2 * exp(Jw)
e_new = sqrt(1 - (1 - e**2) * exp(Jw - 2*Jh))


# ======================================================================
print("=" * 72)
print("PART A -- closed-cycle boundary identities (conservative dyad)")
print("=" * 72)
# ======================================================================
# In the closed set the state (beta^2, e) does not drift, and every phase
# variable is built from cos O / sin O, hence exactly 2*pi periodic in the
# TRUE phase O.  The contour on the carrier closes even though the spatial
# ellipse precesses (precession lives in the map O = Omega * o, not in the
# phase functions themselves).  Boundary match is an identity:
for name, f in [("beta_o", beta_o2(b2, e, O)),
                ("kappa_o", kappa_o2(b2, e, O)),
                ("delta_o", delta_o(e, O)),
                ("Q_o", kappa_o2(b2, e, O) + beta_o2(b2, e, O))]:
    gap = simplify(f.subs(O, O + 2*pi) - f)
    check(f"A: {name}^2(O+2pi) - {name}^2(O) == 0 (closed cycle self-intersects)",
          gap == 0)


# ======================================================================
print()
print("=" * 72)
print("PART B -- exact jump algebra of the open cycle")
print("=" * 72)
# ======================================================================
def linearize(F):
    """First-order part of F(Jw, Jh) around (0,0):  F_Jw*Jw + F_Jh*Jh."""
    at0 = {Jw: 0, Jh: 0}
    return (simplify(sp.diff(F, Jw).subs(at0))*Jw
            + simplify(sp.diff(F, Jh).subs(at0))*Jh)

# B0. The exact eccentricity jump map, first order:
#     Delta e = (1-e^2)/e * (Jh - Jw/2)   -- must match the decay-web line.
de_lin = linearize(e_new - e)
target = (1 - e**2)/e * (Jh - Jw/2)
check("B0: first-order Delta e  ==  (1-e^2)/e * (J_h - J_W/2)  [decay web]",
      simplify(de_lin - target) == 0)

# B1. EXACT (finite jumps, not linearized): apsidal PRODUCT reads the
#     energy channel.  beta_p^2 * beta_a^2 = beta^4 identically, so
#     Delta ln(beta_p^2 beta_a^2) = 2 Jw.
bp2 = lambda b, ec: b * (1 + ec)/(1 - ec)     # beta_p^2 = beta^2 (1+e)/(1-e)
ba2 = lambda b, ec: b * (1 - ec)/(1 + ec)     # beta_a^2 = beta^2 (1-e)/(1+e)
lhs = sp.expand_log(log(bp2(b2_new, e_new) * ba2(b2_new, e_new))
                    - log(bp2(b2, e) * ba2(b2, e)), force=True)
check("B1 (EXACT): Delta ln(beta_p^2 * beta_a^2) == 2 J_W   [energy channel]",
      simplify(lhs - 2*Jw) == 0)

# B2. EXACT: apsidal RATIO reads the shape channel.
#     beta_p^2/beta_a^2 = e_X^2, and (1-e^2) maps exactly, so
#     Delta ln(beta_p^2/beta_a^2) = 2 Delta ln e_X, with
#     Delta ln(1-e^2) = Jw - 2 Jh exactly.
lhs2 = simplify(log((1 - e_new**2)) - log(1 - e**2) - (Jw - 2*Jh))
check("B2 (EXACT): Delta ln(1-e^2) == J_W - 2 J_h   [shape channel]",
      simplify(sp.expand_log(lhs2, force=True)) == 0)

# B3. EXACT, any reference phase O*: the vis-viva invariant's boundary
#     mismatch is phase independent and reads the energy channel:
#     Delta[kappa_o^2 - beta_o^2](O*) = Delta beta^2  for every O*.
Ostar = symbols('Ostar', positive=True)
lhs3 = simplify((kappa_o2(b2_new, e_new, Ostar) - beta_o2(b2_new, e_new, Ostar))
                - (kappa_o2(b2, e, Ostar) - beta_o2(b2, e, Ostar))
                - (b2_new - b2))
check("B3 (EXACT): Delta[kappa_o^2 - beta_o^2](O*) == Delta beta^2, all O*",
      lhs3 == 0)

# B4. First-order fixed-phase mismatch formula (the hypothesis's meter):
#     Delta beta_o^2(O*) = beta^2 [ g * Jw + g_e * Delta e ]
jump = beta_o2(b2_new, e_new, O) - beta_o2(b2, e, O)
jump_lin = sp.expand(linearize(jump))
g_e = sp.diff(g_expr, e)
predicted = b2 * (g_expr*Jw + g_e*((1 - e**2)/e*(Jh - Jw/2)))
check("B4: Delta beta_o^2(O*) == beta^2 [g J_W + g_e Delta e]  (1st order)",
      simplify(jump_lin - sp.expand(predicted)) == 0)

# B5. Channel separation at distinguished phases:
#     (a) at the OLD balance point  O* = B_a = arccos(-e):
#         Delta beta_o^2 = 2 beta^2 J_h        (pure angular-momentum channel)
at_Ba = simplify(jump_lin.subs(cos(O), -e))
check("B5a: fixed-phase mismatch at O* = B_a  ==  2 beta^2 J_h  [pure h-channel]",
      simplify(at_Ba - 2*b2*Jh) == 0)
#     (b) at O_dagger = arccos(-2e/(1+e^2)) the shape sensitivity g_e = 0:
#         Delta beta_o^2 = beta^2 (1-e^2)/(1+e^2) Jw  (pure energy channel)
at_Od = simplify(jump_lin.subs(cos(O), -2*e/(1 + e**2)))
check("B5b: mismatch at O* = O_dagger == beta^2 (1-e^2)/(1+e^2) J_W  [pure W-channel]",
      simplify(at_Od - b2*(1 - e**2)/(1 + e**2)*Jw) == 0)
#     (c) EXACT and non-perturbative: comparing balance point to balance
#         point (reference drifts with e), beta_o(B_a) = beta identically,
#         so the balance-to-balance mismatch IS Delta beta^2 exactly.
bo2_at_Ba = simplify(beta_o2(b2, e, O).subs(cos(O), -e))
check("B5c (EXACT): beta_o^2(B_a) == beta^2  =>  balance-to-balance mismatch == Delta beta^2",
      simplify(bo2_at_Ba - b2) == 0)

# B6. Completeness: mismatches at two reference phases O1, O2 determine
#     (Jw, Jh) uniquely iff cos O1 != cos O2.  The mismatch function over
#     one cycle spans EXACTLY a 2-dimensional space == the two channels.
O1, O2 = symbols('O1 O2', positive=True)
M11 = simplify(jump_lin.subs(O, O1).coeff(Jw)); M12 = simplify(jump_lin.subs(O, O1).coeff(Jh))
M21 = simplify(jump_lin.subs(O, O2).coeff(Jw)); M22 = simplify(jump_lin.subs(O, O2).coeff(Jh))
det = simplify(sp.factor(M11*M22 - M12*M21))
# det should be proportional to (cos O1 - cos O2) with an e-dependent nonzero factor
det_ratio = simplify(det / (cos(O1) - cos(O2)))
ok_B6 = (simplify(sp.expand(det_ratio - det_ratio.subs(O1, O2))) == 0) and det_ratio != 0
check("B6: reconstruction determinant  ==  C(e,beta) * (cos O1 - cos O2), C != 0",
      ok_B6, f"C = {sp.factor(det_ratio)}")


# ======================================================================
print()
print("=" * 72)
print("PART C -- sign structure of the mismatch under GR fluxes")
print("=" * 72)
# ======================================================================
# GR quadrupole fluxes in R.O.M. variables (COMPARISON INPUT ONLY):
#   eps_W = (128 pi/5) eta beta^5 f_W(e) (1-e^2)^{-7/2}
#   eps_h = ( 64 pi/5) eta beta^5 f_h(e) (1-e^2)^{-5/2}
fW = lambda ec: 1 + Rational(73, 24)*ec**2 + Rational(37, 96)*ec**4
fh = lambda ec: 1 + Rational(7, 8)*ec**2
# ratio x(e) = eps_h/eps_W  (eta, beta^5 cancel):
x_of_e = sp.lambdify(e, (fh(e)*(1 - e**2)) / (2*fW(e)), 'numpy')

# C1. Circularization: x(e) < 1/2 on (0,1)  (Delta e < 0)
eg = np.linspace(1e-4, 0.999, 4000)
check("C1: GR flux ratio x(e) < 1/2 for all e in (0,1)  (circularization)",
      bool(np.all(x_of_e(eg) < 0.5)))

# C2. Relative perihelion mismatch:  Delta ln beta_p^2 = Jw * B(e),
#     B(e) = 1 + (2/e)(x(e) - 1/2).  Root e* is where the perihelion
#     jump changes sign.
B_of_e = lambda ec: 1 + (2/ec)*(x_of_e(ec) - 0.5)

def bisect(f, lo, hi, tol=1e-14):
    """Plain bisection root finder (avoids the scipy dependency)."""
    flo = f(lo)
    for _ in range(200):
        mid = 0.5*(lo + hi)
        if f(mid)*flo > 0:
            lo = mid
        else:
            hi = mid
        if hi - lo < tol:
            break
    return 0.5*(lo + hi)

e_star = bisect(B_of_e, 0.05, 0.9)
check("C2a: perihelion mismatch sign flips at a unique e* in (0,1)",
      0 < e_star < 1 and B_of_e(e_star - 0.01) > 0 > B_of_e(e_star + 0.01),
      f"e* = {e_star:.10f}")
# small-e behaviour, symbolically:  B(e) = 1 - (19/6) e + O(e^3)
B_sym = 1 + Rational(2, 1)/e*((fh(e)*(1 - e**2))/(2*fW(e)) - Rational(1, 2))
B_ser = sp.series(B_sym, e, 0, 2).removeO()
check("C2b: small-e expansion  B(e) = 1 - (19/6) e + O(e^3)  [symbolic]",
      simplify(B_ser - (1 - Rational(19, 6)*e)) == 0, f"series = {B_ser}")

# C2c. Independent exact form of the threshold: B(e) = 0 is equivalent to
#      f_W(e) = (1+e) f_h(e), i.e. the root of the cubic
#      37 e^3 - 84 e^2 + 208 e - 96 = 0.  Verify the algebra and the root.
poly_id = simplify(sp.expand((fW(e) - (1 + e)*fh(e))*96 - e*(37*e**3 - 84*e**2 + 208*e - 96)/1))
# note: fW - (1+e) fh = e (37e^3 - 84e^2 + 208e - 96)/96
check("C2c: threshold condition == f_W(e) = (1+e) f_h(e) == cubic 37e^3-84e^2+208e-96 = 0",
      poly_id == 0 and abs(37*e_star**3 - 84*e_star**2 + 208*e_star - 96) < 1e-9,
      f"cubic(e*) = {37*e_star**3 - 84*e_star**2 + 208*e_star - 96:.2e}")

# C3. Aphelion mismatch positive for all e (both channels push up):
A_of_e = lambda ec: 1 - (2/ec)*(x_of_e(ec) - 0.5)
check("C3: aphelion mismatch Delta ln beta_a^2 > 0 for all e in (0,1)",
      bool(np.all(A_of_e(eg) > 0)))

# C4. Critical phase O_c(e): the mismatch Delta beta_o^2(O*) is linear in
#     cos O*, so it vanishes on a single curve.  Closed form:
#     cos O_c = -[ (1+e^2) + 4 D e/(1-e^2) ] / [ 2e + 2 D (1+e^2)/(1-e^2) ],
#     with D = Delta e/Jw = (1-e^2)/e (x - 1/2).
def cosOc(ec):
    D = (1 - ec**2)/ec * (x_of_e(ec) - 0.5)
    num = (1 + ec**2) + 4*D*ec/(1 - ec**2)
    den = 2*ec + 2*D*(1 + ec**2)/(1 - ec**2)
    return -num/den
print("      e      cos(O_c)    O_c [deg]   (mismatch < 0 for O closer to perihelion)")
for ec in [0.35, 0.45, 0.55, 0.617134, 0.7, 0.8, 0.9]:
    cc = cosOc(ec)
    if -1 <= cc <= 1:
        print(f"    {ec:5.3f}   {cc:+9.6f}   {np.degrees(np.arccos(cc)):8.3f}")
    else:
        print(f"    {ec:5.3f}   {cc:+9.6f}   (no crossing: single sign)")
# for e < e*: no crossing (positive everywhere); for e > e*: crossing exists
ok_C4 = (abs(cosOc(0.2)) > 1) and (abs(cosOc(0.6)) <= 1)
check("C4: crossing exists iff e > e*  (mismatch sign is phase dependent)", ok_C4)

# C5. Consequence for the hypothesis's strict inequality:
#     beta_o(0) < beta_o(2pi) at the PERIHELION reference fails for e > e*.
check("C5: literal inequality Delta beta_p^2 > 0 FAILS for e > e* (e.g. B1913+16)",
      B_of_e(0.617134) < 0, f"B(0.617134) = {B_of_e(0.617134):+.6f}")


# ======================================================================
print()
print("=" * 72)
print("PART D -- boundary mismatch vs cycle-averaged closure defect")
print("=" * 72)
# ======================================================================
# D0. Structural fact: the closure factor delta_o depends only on (e, O):
check("D0: d(delta_o)/d(beta^2) == 0  (delta_o blind to the depth variable)",
      sp.diff(delta_o(e, O), b2) == 0)

# D1. Circular radiating orbit (exact spiral kinematics, not the adiabatic
#     representation): r(phi) = r0 exp(-eps_W phi / 2pi) gives
#     beta_R/beta_T = eps_W/(2 pi)  and
#     delta = 1/(1 + (eps_W/2pi)^2)  =>  <delta> - 1 = -eps_W^2/4pi^2 + ...
#     SECOND order in the flux, while the boundary mismatch of beta_o^2 is
#     beta^2 eps_W: FIRST order.  The cycle-averaged defect under-reports
#     circular decay by one full order.
for epsW in [1e-2, 5e-3, 2.5e-3]:
    d = 1/(1 + (epsW/(2*np.pi))**2) - 1
    ratio = d / (-epsW**2/(4*np.pi**2))
    check(f"D1: circular defect = -eps_W^2/4pi^2 (eps_W={epsW:g})",
          abs(ratio - 1) < 1e-4, f"<delta>-1 = {d:.3e}  vs  jump = beta^2*{epsW:g}")

# D2/D3. Eccentric drifting cycle, integrated as an ODE in true phase O.
#   State: ln(beta^2), ln(h_W); e recovered EXACTLY from 1-e^2 = 4 h^2 beta^2.
#   Per-cycle loss is distributed with a within-cycle profile p(O),
#   integral_0^{2pi} p dO = 1:
#       d ln(beta^2)/dO = Jw p(O),    d ln(h_W)/dO = -Jh p(O).
#   Time weighting: dt = dO/omega_o,  omega_o = 2 beta^3 (1+e cos O)^2/(1-e^2)^{3/2}
#   (units R_s = c = 1, a = 1/(2 beta^2)).
#   The cycle-averaged closure defect follows def:closure_factor of WILL_RG_I,
#   where the GLOBAL amplitudes are the cycle averages of the local ones
#   (kappa^2 = <kappa_o^2>, beta^2 = <beta_o^2>), so
#       <delta>_cycle := <kappa_o^2>_t / (2 <beta_o^2>_t)
#   (ratio of time averages; equals 1 exactly on any closed cycle -- prior
#   report, script Part B).  We compute over ONE radiating cycle:
#     - the closure defect  <delta>_cycle - 1
#     - the boundary mismatch  Delta beta_o^2 at fixed reference phase O*=0.
def run_cycle(e0, b20, Jw_v, Jh_v, profile, n=6000):
    """RK4 integration of one radiating cycle O: 0 -> 2pi (plain floats).
    profile(O) is the within-cycle loss density (integrates to 1).
    Returns (<delta>_cycle - 1, boundary mismatch at O*=0, final e, final beta^2)."""
    y = [math.log(b20), math.log(math.sqrt(1 - e0**2)/(2*math.sqrt(b20))),
         0.0, 0.0, 0.0]   # [ln b2, ln h, I_kappa2, I_beta2, I_time]

    def rhs(Ov, yv):
        b2v = math.exp(yv[0])
        e2 = 1 - 4*math.exp(2*yv[1])*b2v
        ev = math.sqrt(e2) if e2 > 0 else 0.0
        cO = math.cos(Ov)
        om = 2*b2v**1.5*(1 + ev*cO)**2/(1 - ev**2)**1.5
        bo2v = b2v*(1 + ev**2 + 2*ev*cO)/(1 - ev**2)    # beta_o^2
        ko2v = b2v + bo2v                                # kappa_o^2 (vis-viva)
        p = profile(Ov)
        return (Jw_v*p, -Jh_v*p, ko2v/om, bo2v/om, 1.0/om)

    h = 2*math.pi/n
    Ov = 0.0
    for _ in range(n):
        k1 = rhs(Ov, y)
        k2 = rhs(Ov + h/2, [y[i] + h/2*k1[i] for i in range(5)])
        k3 = rhs(Ov + h/2, [y[i] + h/2*k2[i] for i in range(5)])
        k4 = rhs(Ov + h, [y[i] + h*k3[i] for i in range(5)])
        y = [y[i] + h/6*(k1[i] + 2*k2[i] + 2*k3[i] + k4[i]) for i in range(5)]
        Ov += h
    b2f = math.exp(y[0])
    ef2 = 1 - 4*math.exp(2*y[1])*b2f
    ef = math.sqrt(ef2) if ef2 > 0 else 0.0
    davg = y[2]/(2*y[3]) - 1.0          # <kappa_o^2>_t / (2 <beta_o^2>_t) - 1
    bo2 = lambda b, ec: b*(1 + ec)**2/(1 - ec**2)   # beta_o^2 at O*=0 (perihelion form)
    jump0 = bo2(b2f, ef) - bo2(b20, e0)
    return davg, jump0, ef, b2f

# Within-cycle profiles (normalized numerically):
Ogrid = np.linspace(0, 2*np.pi, 20001)
def make_profile(kind):
    if kind == "uniform":
        return lambda Ov: 1.0/(2*np.pi)
    if kind == "peri":            # symmetric burst centred on perihelion O=0
        raw = lambda Ov: np.exp(10*np.cos(Ov))
    else:                          # "asym": burst at O = pi/2 (breaks O -> 2pi-O symmetry)
        raw = lambda Ov: np.exp(10*np.cos(Ov - np.pi/2))
    Z = np.trapezoid(raw(Ogrid), Ogrid)
    return lambda Ov, r=raw, Z=Z: float(r(Ov))/Z

e0, b20 = 0.5, 0.01
eps = 1e-3

# D2-0. Integrator sanity: closed cycle (zero flux) must give defect = 0
#       exactly (this is the prior report's time-average closure).
davg0, jump00, _, _ = run_cycle(e0, b20, 0.0, 0.0, make_profile("uniform"))
check("D2-0: closed cycle: <delta>_cycle - 1 == 0 and boundary mismatch == 0",
      abs(davg0) < 1e-12 and abs(jump00) < 1e-14,
      f"defect {davg0:+.2e}, mismatch {jump00:+.2e}")

print(f"\n  drifting cycle at e0={e0}, beta0^2={b20}, per-cycle flux eps={eps:g}")
print("  flux mix           profile    <delta>_cyc - 1     Delta beta_o^2(0)")
rows = {}
mixes = [("pure-W (e frozen)", (eps, eps/2)),
         ("pure-e (shape)   ", (0.0, eps)),
         ("GR mix           ", (eps, eps*float(x_of_e(e0))))]
for mix, (jw_v, jh_v) in mixes:
    for prof in ["uniform", "peri", "asym"]:
        davg, jump0, ef, b2f = run_cycle(e0, b20, jw_v, jh_v, make_profile(prof))
        rows[(mix, prof)] = (davg, jump0)
        print(f"  {mix}  {prof:8s}  {davg:+.6e}     {jump0:+.6e}")

# D2a. Boundary mismatch is EXACTLY profile independent (endpoint states
#      depend only on the totals Jw, Jh):
ok = all(abs(rows[(m, 'uniform')][1] - rows[(m, p)][1]) < 1e-12
         for m, _ in mixes for p in ["peri", "asym"])
check("D2a: boundary mismatch identical across loss profiles (topological)", ok)

# D2b. Boundary mismatch matches the exact endpoint algebra:
b2f = b20*np.exp(eps)
ef = np.sqrt(1 - (1 - e0**2)*np.exp(eps - 2*eps*float(x_of_e(e0))))
pred = b2f*(1 + ef)/(1 - ef) - b20*(1 + e0)/(1 - e0)
check("D2b: mismatch == exact jump algebra of Part B",
      abs(rows[("GR mix           ", 'uniform')][1] - pred) < 1e-10,
      f"ODE {rows[('GR mix           ','uniform')][1]:+.6e} vs algebra {pred:+.6e}")

# D2c. The cycle-averaged closure defect is PROFILE DEPENDENT at first order:
#      symmetric profiles give a much smaller defect than the asymmetric one,
#      for identical totals (Jw, Jh).
d_uni = rows[("pure-W (e frozen)", 'uniform')][0]
d_asy = rows[("pure-W (e frozen)", 'asym')][0]
check("D2c: <delta>_cycle - 1 depends on the loss profile (not topological)",
      abs(d_asy) > 20*abs(d_uni),
      f"uniform {d_uni:+.3e} vs asym {d_asy:+.3e}")

# D2d. THE CENTRAL COMPARISON.  For O -> 2pi-O symmetric profiles the
#      first-order cycle-averaged defect cancels IDENTICALLY -- because the
#      closed-set closure <kappa_o^2>_t = 2<beta_o^2>_t holds for EVERY
#      (beta^2, e), a first-order drift along ANY state direction cannot
#      move the ratio.  So <delta>_cycle - 1 scales as eps^2 while the
#      boundary mismatch scales as eps.
print("\n  scaling in eps (uniform profile, GR mix):")
sc = []
for ee in [1e-3, 5e-4, 2.5e-4]:
    davg, jump0, _, _ = run_cycle(e0, b20, ee, ee*float(x_of_e(e0)), make_profile("uniform"))
    sc.append((ee, davg, jump0))
    print(f"    eps={ee:8.1e}   <delta>_cyc-1 = {davg:+.3e}   jump = {jump0:+.3e}")
p_defect = np.log(abs(sc[0][1]/sc[2][1]))/np.log(sc[0][0]/sc[2][0])
p_jump = np.log(abs(sc[0][2]/sc[2][2]))/np.log(sc[0][0]/sc[2][0])
check("D2d: defect order ~ eps^2 (blind at 1st order), mismatch order ~ eps^1",
      (p_defect > 1.8) and (abs(p_jump - 1) < 0.05),
      f"fitted orders: defect {p_defect:.3f}, mismatch {p_jump:.3f}")

# D2e. Same conclusion for the perihelion-centred (symmetric) profile with
#      pure shape flux -- the physically expected emission symmetry:
d_peri = rows[("pure-e (shape)   ", 'peri')][0]
j_peri = rows[("pure-e (shape)   ", 'peri')][1]
check("D2e: symmetric perihelion burst: defect << eps while mismatch ~ eps",
      abs(d_peri) < 0.01*eps and abs(j_peri) > 0.1*eps*b20,
      f"defect {d_peri:+.3e} vs mismatch {j_peri:+.3e}")

# D2f. The asymmetric-profile defect at first order measures the loss-profile
#      ASYMMETRY, not the loss totals: verify it flips sign when the burst
#      moves from O = pi/2 to O = 3pi/2 (mirror profile), totals unchanged.
_asym_prof = make_profile("asym")
mirror = lambda Ov: _asym_prof(2*np.pi - Ov)
d_mir, j_mir, _, _ = run_cycle(e0, b20, eps, eps/2, mirror)
check("D2f: mirrored burst flips the sign of the defect, mismatch unchanged",
      (d_mir*d_asy < 0) and abs(j_mir - rows[("pure-W (e frozen)", 'asym')][1]) < 1e-12,
      f"defect asym {d_asy:+.3e} vs mirrored {d_mir:+.3e}")


# ======================================================================
print()
print("=" * 72)
print("PART E -- dyad components: the mismatch is a property of the relation")
print("=" * 72)
# ======================================================================
# With the Energy-Symmetry share weighting each component carries
# beta_{Ao} = (m_B/M) beta_o and beta_{Bo} = (m_A/M) beta_o.  Constant
# weights (scale constancy A2) drop out of the LOG mismatch:
cA = symbols('c_A', positive=True)   # any constant component share
rel_jump_component = sp.expand_log(
    log(cA**2*beta_o2(b2_new, e_new, Ostar)) - log(cA**2*beta_o2(b2, e, Ostar)), force=True)
rel_jump_relation = sp.expand_log(
    log(beta_o2(b2_new, e_new, Ostar)) - log(beta_o2(b2, e, Ostar)), force=True)
check("E: Delta ln beta_Ao^2 == Delta ln beta_Bo^2 == Delta ln beta_o^2  (reciprocity)",
      simplify(rel_jump_component - rel_jump_relation) == 0)


# ======================================================================
print()
print("=" * 72)
print("PART F -- pulsar numbers, discrete map, ISCO endpoint")
print("=" * 72)
# ======================================================================
# Physical constants (SI) -- used ONLY as unit translation:
G = 6.67430e-11; c_SI = 2.99792458e8; Msun = 1.98892e30

def pulsar_numbers(name, m1, m2, Pb_s, ecc, Pbdot_lit):
    """Everything from (masses, period, e): beta, fluxes, jumps, Pb-dot."""
    M = (m1 + m2)*Msun
    eta = (m1*m2)/(m1 + m2)**2
    Rs = 2*G*M/c_SI**2
    beta = (np.pi*Rs/(Pb_s*c_SI))**(1/3)          # R.O.M.: beta = (pi R_s/(T c))^{1/3}
    b2v = beta**2
    envW = (1 + 73/24*ecc**2 + 37/96*ecc**4)/(1 - ecc**2)**3.5
    envh = (1 + 7/8*ecc**2)/(1 - ecc**2)**2.5
    epsW = 128*np.pi/5*eta*beta**5*envW
    epsh = 64*np.pi/5*eta*beta**5*envh
    Tdot = -1.5*epsW
    # topological readout: eps_W recovered from the apsidal product jump
    b2n = b2v*np.exp(epsW)
    en = np.sqrt(1 - (1 - ecc**2)*np.exp(epsW - 2*epsh))
    epsW_topo = 0.5*np.log((b2n**2)/(b2v**2))          # = 1/2 Delta ln(beta_p^2 beta_a^2)
    jump_peri = b2n*(1 + en)/(1 - en) - b2v*(1 + ecc)/(1 - ecc)
    jump_apo = b2n*(1 - en)/(1 + en) - b2v*(1 - ecc)/(1 + ecc)
    jump_Ba = 2*b2v*epsh                                # fixed old balance point
    print(f"\n  {name}:  beta^2 = {b2v:.6e},  e = {ecc},  eta = {eta:.6f}")
    print(f"    eps_W = {epsW:.4e}/cycle   eps_h = {epsh:.4e}/cycle")
    print(f"    Pb-dot = {Tdot:.5e}   (literature GR: {Pbdot_lit:.5e})")
    print(f"    per-cycle boundary mismatches:")
    print(f"      Delta beta^2 (balance-to-balance, EXACT) = {b2v*(np.exp(epsW)-1):+.4e}")
    print(f"      Delta beta_p^2 (perihelion ref)          = {jump_peri:+.4e}")
    print(f"      Delta beta_a^2 (aphelion ref)            = {jump_apo:+.4e}")
    print(f"      Delta beta_o^2 (old balance point ref)   = {jump_Ba:+.4e}")
    return b2v, ecc, epsW, Tdot, epsW_topo, jump_peri

b2_1913, e_1913, epsW_1913, Td_1913, epsW_topo_1913, jp_1913 = pulsar_numbers(
    "PSR B1913+16 ", 1.438, 1.390, 27906.98, 0.6171340, -2.40263e-12)
b2_0737, e_0737, epsW_0737, Td_0737, epsW_topo_0737, jp_0737 = pulsar_numbers(
    "PSR J0737-3039", 1.3381, 1.2489, 0.10225156248*86400, 0.0877775, -1.24792e-12)

check("F1: B1913+16 Pb-dot within 0.1% of literature GR value",
      abs(Td_1913/(-2.40263e-12) - 1) < 1e-3, f"{Td_1913:.5e}")
check("F2: J0737-3039 Pb-dot within 1% of literature GR value",
      abs(Td_0737/(-1.24792e-12) - 1) < 1e-2, f"{Td_0737:.5e}")
# (identity proven exactly in B1; here only float64 rounding limits agreement,
#  since eps_W ~ 1e-12 sits near the machine epsilon of the log/exp round trip)
check("F3: topological readout (apsidal product) returns eps_W (to float rounding)",
      abs(epsW_topo_1913/epsW_1913 - 1) < 1e-3)
check("F4: perihelion mismatch NEGATIVE for B1913+16 (e = 0.617 > e*), "
      "POSITIVE for J0737-3039 (e = 0.088 < e*)",
      (jp_1913 < 0) and (jp_0737 > 0))

# F5. Discrete map vs continuous flow.  The hypothesis replaces dt evolution
#     with per-cycle discontinuities.  Both must agree to O(eps) -- shown on
#     a toy system with GR-shaped flux, then the B1913+16 endpoint via the flow.
def fluxes(b2v, ev, eta, boost=1.0):
    bet = math.sqrt(b2v)
    eW = boost*128*math.pi/5*eta*bet**5*(1 + 73/24*ev**2 + 37/96*ev**4)/(1 - ev**2)**3.5
    eh = boost*64*math.pi/5*eta*bet**5*(1 + 7/8*ev**2)/(1 - ev**2)**2.5
    return eW, eh

def discrete_to_isco(b2v, ev, eta, boost):
    """Iterate the per-cycle topological map until the ISCO invariant."""
    N = 0
    while b2v < 1/6:
        eW, eh = fluxes(b2v, ev, eta, boost)
        b2v = b2v*math.exp(eW)
        ev = math.sqrt(max(1 - (1 - ev**2)*math.exp(eW - 2*eh), 0.0))
        N += 1
        if N > 10**7:
            break
    return N

def continuous_to_isco(b2v, ev, eta, boost, n=8000):
    """Integrate dN = d ln beta^2/eps_W with e co-evolving (RK4 in s = ln beta^2)."""
    s, s_end = math.log(b2v), math.log(1/6)
    h = (s_end - s)/n
    N = 0.0
    y = ev

    def rhs(sv, ev_):
        ev_ = min(max(ev_, 0.0), 0.999999)
        eW, eh = fluxes(math.exp(sv), ev_, eta, boost)
        dN_ds = 1.0/eW
        de_ds = (1 - ev_**2)/max(ev_, 1e-12)*(eh - eW/2)/eW
        return dN_ds, de_ds

    for _ in range(n):
        d1, k1 = rhs(s, y); d2, k2 = rhs(s + h/2, y + h/2*k1)
        d3, k3 = rhs(s + h/2, y + h/2*k2); d4, k4 = rhs(s + h, y + h*k3)
        N += h/6*(d1 + 2*d2 + 2*d3 + d4)
        y += h/6*(k1 + 2*k2 + 2*k3 + k4)
        s += h
    return N, y

# The discrete count exceeds the continuous integral by the Euler-Maclaurin
# offset  N_disc - N_cont ~= (1/2) ln(eps_end/eps_start) + O(1)  -- an
# ABSOLUTE handful of cycles, independent of the flux scale, so the RELATIVE
# difference vanishes as eps -> 0.  Verified at four flux scales:
print("\n  discrete map vs continuous flow (toy inspiral, GR-shaped flux):")
offsets, rels = [], []
for boost in [2.0, 0.5]:
    N_disc = discrete_to_isco(0.01, 0.5, 0.25, boost)
    N_cont, e_fin = continuous_to_isco(0.01, 0.5, 0.25, boost)
    em = 0.5*math.log(fluxes(1/6, e_fin, 0.25, boost)[0]
                      / fluxes(0.01, 0.5, 0.25, boost)[0])
    offsets.append(N_disc - N_cont); rels.append(abs(N_disc - N_cont)/N_cont)
    print(f"    flux x{boost:<5g} N_disc = {N_disc:6d}  N_cont = {N_cont:10.3f}"
          f"  offset = {N_disc - N_cont:+7.3f}  (E-M: {em:+.3f})")
check("F5: discrete map == continuous flow up to a bounded O(1)-cycle offset; "
      "relative difference shrinks with the flux",
      all(0 < off < 6 for off in offsets) and rels[-1] < rels[0] < 0.01,
      f"offsets {['%+.2f' % o for o in offsets]}")

# F6. B1913+16: cycle count to the framework ISCO endpoint (beta^2 = 1/6),
#     via the continuous flow (the discrete correction is O(eps) ~ 1e-12).
eta_1913 = (1.438*1.390)/(1.438 + 1.390)**2
N_1913, e_at_isco = continuous_to_isco(b2_1913, e_1913, eta_1913, 1.0)
print(f"\n  B1913+16 cycles to ISCO endpoint: N = {N_1913:.4e}  (e at ISCO = {e_at_isco:.2e})")
check("F6: finite cycle count to the ISCO invariant (discrete endpoint exists)",
      math.isfinite(N_1913) and N_1913 > 0)


# ======================================================================
print()
print("=" * 72)
n_pass = sum(1 for _, ok in RESULTS if ok)
print(f"SUMMARY: {n_pass}/{len(RESULTS)} checks passed")
for name, ok in RESULTS:
    if not ok:
        print(f"  FAILED: {name}")
print("=" * 72)
