"""
R.O.M. Radiating Binary - Relational Decay Law: full verification script
=========================================================================
Verifies every algebraic step of the derivation, in R.O.M. notation.

Part A : closed-set inputs used (identities restated in comments)
Part B : time-averaged closure over one conservative cycle
         <kappa_o^2>_t = kappa^2 = 2 beta^2 ,  <beta_o^2>_t = beta^2
Part C : forced kinematic web (the decay-law skeleton) from
         eps_W = d ln(beta^2)/dN  and  eps_h = -d ln(h_W)/dN
Part D : exact energy bridge  E_loc/E_0 = kappa_X/beta_Y  and series
Part E : insufficiency demonstration (no closed-set state function
         can be the flux)
Part F : GR-consistency note (Peters fluxes in relational variables,
         circularity lock, eccentricity cross-check, PSR B1913+16)

Every check prints PASS/FAIL.  Requires only sympy + mpmath.
"""

import sympy as sp

PASS = []
def check(name, ok):
    PASS.append((name, bool(ok)))
    print(f"  [{'PASS' if ok else 'FAIL'}] {name}")

# ----------------------------------------------------------------------
# Symbols (R.O.M. notation; O_ph = true phase O)
# ----------------------------------------------------------------------
beta, kappa = sp.symbols('beta kappa', positive=True)
e = sp.Symbol('e', positive=True)                 # eccentricity, 0<e<1
O_ph = sp.Symbol('O_ph', real=True)               # true orbital phase
R_s, a, c, G = sp.symbols('R_s a c G', positive=True)
N = sp.Symbol('N', real=True)                     # cycle count (new symbol)
E_0 = sp.Symbol('E_0', positive=True)

print("=" * 70)
print("PART B: time-averaged closure over one conservative cycle")
print("=" * 70)
# Closed-set phase variables (R.O.M. equations, closure kappa^2=2beta^2):
kappa_o2 = 2*beta**2*(1 + e*sp.cos(O_ph))/(1 - e**2)
beta_o2  = beta**2*(1 + e**2 + 2*e*sp.cos(O_ph))/(1 - e**2)
omega_o  = (beta*c/a)*(1 + e*sp.cos(O_ph))**2/(1 - e**2)**sp.Rational(3, 2)

# Base Kepler integrals (standard closed forms), verified numerically at
# high precision for several eccentricities, then used symbolically:
#   I1 = int_0^{2pi} dO/(1+e cos O)   = 2 pi (1-e^2)^(-1/2)
#   I2 = int_0^{2pi} dO/(1+e cos O)^2 = 2 pi (1-e^2)^(-3/2)
import mpmath as mp
mp.mp.dps = 30
base_ok = True
for e_test in ['0.1', '0.3', '0.6171340', '0.9']:
    ev = mp.mpf(e_test)
    I1n = mp.quad(lambda t: 1/(1 + ev*mp.cos(t)), [0, mp.pi, 2*mp.pi])
    I2n = mp.quad(lambda t: 1/(1 + ev*mp.cos(t))**2, [0, mp.pi, 2*mp.pi])
    base_ok &= abs(I1n - 2*mp.pi/mp.sqrt(1 - ev**2)) < mp.mpf('1e-24')
    base_ok &= abs(I2n - 2*mp.pi*(1 - ev**2)**mp.mpf('-1.5')) < mp.mpf('1e-24')
check("base integrals I1, I2 (numeric, 30 digits, e = 0.1..0.9)", base_ok)

I1 = 2*sp.pi/sp.sqrt(1 - e**2)
I2 = 2*sp.pi*(1 - e**2)**sp.Rational(-3, 2)

# time weight dt = dO/omega_o.  1/omega_o = (a/(beta c))(1-e^2)^{3/2}(1+e cos O)^{-2}
pref = (a/(beta*c))*(1 - e**2)**sp.Rational(3, 2)
T_int = pref*I2                                   # period
T_rom = 2*sp.pi*a/(beta*c)
check("T = 2 pi a/(beta c) from time integral", sp.simplify(T_int - T_rom) == 0)

# <kappa_o^2>_t : kappa_o^2/omega_o = pref * 2 beta^2 (1-e^2)^{-1} (1+e cos O)^{-1}
k_avg = pref*(2*beta**2/(1 - e**2))*I1/T_int
# <beta_o^2>_t : integrand (1+e^2+2e cos O)(1+e cos O)^{-2}
#              = 2(1+e cos O)^{-1} - (1-e^2)(1+e cos O)^{-2}   (algebraic identity)
ident = sp.simplify((1 + e**2 + 2*e*sp.cos(O_ph))
                    - (2*(1 + e*sp.cos(O_ph)) - (1 - e**2)))
check("integrand identity 1+e^2+2e cosO = 2(1+e cosO)-(1-e^2)", ident == 0)
b_avg = pref*(beta**2/(1 - e**2))*(2*I1 - (1 - e**2)*I2)/T_int
check("<kappa_o^2>_t = 2 beta^2 = kappa^2", sp.simplify(k_avg - 2*beta**2) == 0)
check("<beta_o^2>_t  = beta^2",             sp.simplify(b_avg - beta**2) == 0)
check("<delta_o>-type closure: <kappa_o^2>-2<beta_o^2> = 0",
      sp.simplify(k_avg - 2*b_avg) == 0)

print()
print("=" * 70)
print("PART C: forced kinematic web (decay-law skeleton)")
print("=" * 70)
# State functions of cycle count N (adiabatic sequence, R_s fixed: A1,A2)
beta_N = sp.Function('beta')(N)
e_N    = sp.Function('e')(N)
eps_W  = sp.Symbol('varepsilon_W', real=True)     # per-cycle ledger flux (new)
eps_h  = sp.Symbol('varepsilon_h', real=True)     # per-cycle ang.mom. flux (new)

# Definitions of the two channel fluxes:
#   eps_W :=  d ln(beta^2)/dN      (energy-invariant deepening per cycle)
#   eps_h := -d ln(h_W)/dN         (angular-momentum loss per cycle)
defs = {sp.Derivative(beta_N, N): beta_N*eps_W/2}   # from d ln beta^2/dN = eps_W

# a = R_s/(2 beta^2)   (closed set: a = R_s/kappa^2, kappa^2 = 2 beta^2)
a_N = R_s/(2*beta_N**2)
dln_a = sp.simplify((sp.diff(a_N, N)/a_N).subs(defs))
check("d ln a/dN = -eps_W", sp.simplify(dln_a + eps_W) == 0)

# T = pi R_s/(beta^3 c)   (closed set)
T_N = sp.pi*R_s/(beta_N**3*c)
dln_T = sp.simplify((sp.diff(T_N, N)/T_N).subs(defs))
check("d ln T/dN = -(3/2) eps_W", sp.simplify(dln_T + sp.Rational(3, 2)*eps_W) == 0)
# Observer-clock form: dT/dt_obs = (dT/dN)/T = d ln T/dN  (dimensionless)
# => period drift  Tdot = -(3/2) eps_W          [pulsar Pb-dot observable]

# h_W = R_s c sqrt(1-e^2)/(2 beta)   (closed set)
h_N = R_s*c*sp.sqrt(1 - e_N**2)/(2*beta_N)
dln_h = sp.simplify((sp.diff(h_N, N)/h_N).subs(defs).doit())
# set dln_h = -eps_h and solve for de/dN
de_dN = sp.solve(sp.Eq(dln_h, -eps_h), sp.Derivative(e_N, N))[0]
de_dN = sp.simplify(de_dN)
de_dN_claim = ((1 - e_N**2)/e_N)*(eps_h - eps_W/2)
check("de/dN = ((1-e^2)/e)(eps_h - eps_W/2)",
      sp.simplify(de_dN - de_dN_claim) == 0)

# Precession drift (forced chain rule on Delta_phi = 2pi(3b^2-2b^4)/(1-e^2))
Dphi_N = 2*sp.pi*(3*beta_N**2 - 2*beta_N**4)/(1 - e_N**2)
dDphi = sp.diff(Dphi_N, N).subs(defs).doit()
dDphi = dDphi.subs(sp.Derivative(e_N, N), de_dN_claim)
b_, e_ = sp.symbols('b_ e_', positive=True)
dDphi_expr = sp.simplify(dDphi.subs({beta_N: b_, e_N: e_}))
dDphi_claim = (4*sp.pi*b_**2/(1 - e_**2))*(3*eps_h - b_**2*eps_W - 2*b_**2*eps_h)
check("d(Delta_phi)/dN = (4 pi beta^2/(1-e^2))(3 eps_h - beta^2 eps_W - 2 beta^2 eps_h)",
      sp.simplify(dDphi_expr - dDphi_claim) == 0)
print("  d(Delta_phi)/dN =", sp.simplify(sp.expand(dDphi_expr)))

print()
print("=" * 70)
print("PART D: exact energy bridge E_loc/E_0 = kappa_X/beta_Y (closure inserted)")
print("=" * 70)
E_of_beta = sp.sqrt(1 - 2*beta**2)/sp.sqrt(1 - beta**2)   # kappa_X/beta_Y, kappa^2=2beta^2
dE_dbeta = sp.simplify(sp.diff(E_of_beta, beta))
bridge_claim = -beta/((1 - beta**2)**sp.Rational(3, 2)*sp.sqrt(1 - 2*beta**2))
check("dE/dbeta = -beta (1-beta^2)^(-3/2) (1-2beta^2)^(-1/2)",
      sp.simplify(dE_dbeta - bridge_claim) == 0)

# per-cycle radiated ledger (per E_0):  -dE/dN = (beta^2 eps_W/2) * bridge factor
E_N = sp.sqrt(1 - 2*beta_N**2)/sp.sqrt(1 - beta_N**2)
dE_dN = sp.simplify(sp.diff(E_N, N).subs(defs).doit())
rad_claim = (beta_N**2*eps_W/2)/((1 - beta_N**2)**sp.Rational(3, 2)
                                 *sp.sqrt(1 - 2*beta_N**2))
check("-dE/dN = (beta^2 eps_W/2) (1-beta^2)^(-3/2)(1-2beta^2)^(-1/2)",
      sp.simplify(-dE_dN - rad_claim) == 0)

ser = sp.series(E_of_beta, beta, 0, 7)
print("  E_loc/E_0 series:", ser)
ser_rad = sp.series(-dE_dbeta*beta/2, beta, 0, 7)   # -dE/dln(beta^2)
print("  -dE/dln(beta^2) series (weak field -> beta^2/2):", ser_rad)

print()
print("=" * 70)
print("PART E: insufficiency - closed-set state functions are not fluxes")
print("=" * 70)
# On an exactly closed orbit every state function below is generically nonzero,
# while the radiated flux of a closed orbit is zero by definition of closure.
k_val = sp.Rational(1, 5); b_val = k_val/sp.sqrt(2); e_val = sp.Rational(1, 3)
tau_Y2 = 3*b_val**2 - 2*b_val**4
Delta_Q = (kappa_o2 + beta_o2 - 3*beta**2).subs(
    {beta: b_val, e: e_val, O_ph: sp.Rational(11, 10)})
delta_o_m1 = ((1 + e_val*sp.cos(sp.Rational(11, 10)))
              /(1 + e_val**2 + 2*e_val*sp.cos(sp.Rational(11, 10))) - 1)
print("  closed state (kappa=1/5, e=1/3):")
print(f"    tau_Y^2      = {sp.N(tau_Y2, 6)}   (nonzero; conservative, stored as precession)")
print(f"    Delta_Q(1.1) = {sp.N(Delta_Q, 6)}   (nonzero; oscillatory breathing)")
print(f"    delta_o-1    = {sp.N(delta_o_m1, 6)}   (nonzero on closed ellipse)")
check("closed-set invariants nonzero on closed orbits "
      "(none can equal the flux, which is 0 there)",
      all(v != 0 for v in [sp.N(tau_Y2), sp.N(Delta_Q), sp.N(delta_o_m1)]))

print()
print("=" * 70)
print("PART F: GR-consistency note (labelled; not part of the closed set)")
print("=" * 70)
m1, m2 = sp.symbols('m1 m2', positive=True)
M = m1 + m2
mu = m1*m2/M
eta = m1*m2/M**2
f1 = 1 + sp.Rational(73, 24)*e**2 + sp.Rational(37, 96)*e**4
f2 = 1 + sp.Rational(7, 8)*e**2

# Peters (1964) orbit-averaged fluxes:
adot = -sp.Rational(64, 5)*G**3*m1*m2*M/(c**5*a**3)*f1/(1 - e**2)**sp.Rational(7, 2)
edot = -sp.Rational(304, 15)*e*G**3*m1*m2*M/(c**5*a**4)*(1 + sp.Rational(121, 304)*e**2)/(1 - e**2)**sp.Rational(5, 2)
L_orb = mu*sp.sqrt(G*M*a*(1 - e**2))
Ldot = -sp.Rational(32, 5)*G**sp.Rational(7, 2)*m1**2*m2**2*sp.sqrt(M)/(c**5*a**sp.Rational(7, 2))*f2/(1 - e**2)**2

# Relational translation:  beta^2 = R_s/(2a) = G M/(a c^2);  T = 2 pi a/(beta c)
beta_sub = sp.sqrt(G*M/(a*c**2))
T_orb = 2*sp.pi*a/(beta_sub*c)

# eps_W^GR = T * d ln(beta^2)/dt = -T * d ln a/dt   (R_s fixed at this order)
epsW_GR = sp.simplify(-T_orb*adot/a)
epsW_claim = sp.Rational(128, 5)*sp.pi*eta*beta**5*f1/(1 - e**2)**sp.Rational(7, 2)
check("eps_W^GR = (128 pi/5) eta beta^5 (1+73e^2/24+37e^4/96)(1-e^2)^(-7/2)",
      sp.simplify(epsW_GR - epsW_claim.subs(beta, beta_sub)) == 0)

# eps_h^GR = -T * d ln h_W/dt ;  h_W = L/mu, mu constant at this order
epsh_GR = sp.simplify(-T_orb*Ldot/L_orb)
epsh_claim = sp.Rational(64, 5)*sp.pi*eta*beta**5*f2/(1 - e**2)**sp.Rational(5, 2)
check("eps_h^GR = (64 pi/5) eta beta^5 (1+7e^2/8)(1-e^2)^(-5/2)",
      sp.simplify(epsh_GR - epsh_claim.subs(beta, beta_sub)) == 0)

# Circularity lock: at e=0 the web forces de/dN=0  <=>  eps_h = eps_W/2
check("circularity lock at e=0: eps_h^GR = eps_W^GR/2",
      sp.simplify((epsh_GR - epsW_GR/2).subs(e, 0)) == 0)

# Cross-check: web  de/dN = ((1-e^2)/e)(eps_W/2 - eps_h)  must equal T*edot
de_dN_web = sp.simplify(((1 - e**2)/e)*(epsh_GR - epsW_GR/2))
de_dN_peters = sp.simplify(T_orb*edot)
check("web de/dN with GR fluxes == Peters T*de/dt (exact identity)",
      sp.simplify(de_dN_web - de_dN_peters) == 0)

# Period drift: Tdot = -(3/2) eps_W  == standard Pb-dot formula
Tdot_web = sp.simplify(-sp.Rational(3, 2)*epsW_GR)
Pb = sp.Symbol('P_b', positive=True)
Pbdot_std = (-sp.Rational(192, 5)*sp.pi*G**sp.Rational(5, 3)/c**5
             *(Pb/(2*sp.pi))**sp.Rational(-5, 3)
             *f1/(1 - e**2)**sp.Rational(7, 2)*m1*m2/M**sp.Rational(1, 3))
Pbdot_std_a = sp.simplify(Pbdot_std.subs(Pb, T_orb))
check("Tdot = -(3/2) eps_W^GR == standard GR Pb-dot formula",
      sp.simplify(Tdot_web - Pbdot_std_a) == 0)

# --- Numeric: PSR B1913+16 (Weisberg & Huang 2016 parameters) ---
mp.mp.dps = 30
GMsun = mp.mpf('1.32712440018e20')      # m^3 s^-2
c_num = mp.mpf('299792458')
m1n = mp.mpf('1.438')                   # solar masses (pulsar)
m2n = mp.mpf('1.390')                   # solar masses (companion)
e_n = mp.mpf('0.6171340')
Pb_n = mp.mpf('27906.9795865')          # s
GM = GMsun*(m1n + m2n)
a_n = (GM*(Pb_n/(2*mp.pi))**2)**(mp.mpf(1)/3)
beta_n = 2*mp.pi*a_n/(Pb_n*c_num)
eta_n = (m1n*m2n)/(m1n + m2n)**2
f1_n = 1 + mp.mpf(73)/24*e_n**2 + mp.mpf(37)/96*e_n**4
epsW_n = mp.mpf(128)/5*mp.pi*eta_n*beta_n**5*f1_n/(1 - e_n**2)**mp.mpf('3.5')
Tdot_n = -mp.mpf(3)/2*epsW_n
print(f"  PSR B1913+16:  beta = {mp.nstr(beta_n, 8)},  eta = {mp.nstr(eta_n, 8)}")
print(f"  relational web + GR flux:  Tdot = {mp.nstr(Tdot_n, 8)}")
print(f"  literature GR value:       Tdot = -2.40263e-12  (intrinsic)")
check("PSR B1913+16 period drift reproduced to <0.5%",
      abs(Tdot_n - mp.mpf('-2.40263e-12'))/mp.mpf('2.40263e-12') < 0.005)


# Structural remark (forced by closed set, independent of the flux):
# the exact energy bookkeeping differs from GR beyond leading order.
# GR circular-orbit energy (Schwarzschild): E/(mu c^2) = (1-2x)/sqrt(1-3x),
# x = GM/(r c^2) = beta^2.  RG: E_loc/E_0 = kappa_X/beta_Y at beta^2 = x.
x = sp.Symbol('x', positive=True)
E_GR_circ = (1 - 2*x)/sp.sqrt(1 - 3*x)
E_RG_circ = sp.sqrt(1 - 2*x)/sp.sqrt(1 - x)
sGR = sp.series(E_GR_circ, x, 0, 3).removeO()
sRG = sp.series(E_RG_circ, x, 0, 3).removeO()
c1_equal  = sp.simplify(sGR.coeff(x, 1) - sRG.coeff(x, 1)) == 0
c2_differ = sp.simplify(sGR.coeff(x, 2) - sRG.coeff(x, 2)) != 0
print(f"  energy series  GR: 1 + ({sGR.coeff(x,1)}) x + ({sGR.coeff(x,2)}) x^2 + ...")
print(f"  energy series  RG: 1 + ({sRG.coeff(x,1)}) x + ({sRG.coeff(x,2)}) x^2 + ...")
check("energy bridge: RG == GR at O(x), RG != GR at O(x^2) (falsifiable)",
      c1_equal and c2_differ)

print()
print("=" * 70)
n_fail = sum(1 for _, ok in PASS if not ok)
print(f"TOTAL: {len(PASS)} checks, {n_fail} failures")
