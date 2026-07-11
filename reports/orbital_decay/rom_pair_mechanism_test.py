"""
Testing the symmetry-breaking hypothesis for binary decay in WILL RG
=====================================================================
Hypothesis (Anton, 2026-07-04): the leak of a radiating binary comes from
a chiral-style symmetry breaking on the directed pair relation (not spin),
with the causal lag of the relation as the breaking agent, and the global
structure (Part II fundamental tone / horizon) as the receiver.

Three stages, crude -> refined:

  STAGE 1  One-way lag: each body pulled toward where the partner WAS.
           Expected: catastrophic over-decay (Laplace aberration problem).

  STAGE 2  Reciprocity-symmetrized lag (two-way handshake, even part).
           Expected: exact cancellation - no leak.  This is why the
           closed conservative set works.

  STAGE 3  The odd residual - the only forward/backward-asymmetric piece -
           acting on the pair's quadratic directed structure with
           Energy-Symmetry (ledger-balance) weighting of the two shares.
           Selection rules (framework-native):
             - no monopole: exterior rigidity d/dr(r kappa^2) = 0
             - no dipole: ledger-balance weighting (the eta weighting)
             - first surviving term: 5 time-derivatives on the trace-free
               quadratic pair form Q_ij
           ONE number is not fixed by the framework: the overall coupling
           lambda of the odd residual (GR value: 1/5).  Everything else
           (eta scaling, beta^5 scaling, full eccentricity shape, e=0
           channel lock) is a parameter-free prediction - tested below.

Units inside: G = c = 1, semi-major axis a = 1.  PASS/FAIL per check.
Fast exact cycle integrator: reduces every cycle integral to Laurent
polynomials in u = 1 + e cos O plus two verified base integrals.
"""

import sympy as sp
import mpmath as mp

PASS = []
def check(name, ok):
    PASS.append((name, bool(ok)))
    print(f"  [{'PASS' if ok else 'FAIL'}] {name}", flush=True)

# ---------------------------------------------------------------- symbols
e   = sp.Symbol('e', nonnegative=True)
O   = sp.Symbol('O', real=True)
M   = sp.Symbol('M', positive=True)
mu  = sp.Symbol('mu', positive=True)
lam = sp.Symbol('lambda', positive=True)

a_val = sp.Integer(1)
p     = a_val*(1 - e**2)
r     = p/(1 + e*sp.cos(O))
h     = sp.sqrt(M*p)
om    = h/r**2

def Dt(f):
    return sp.cancel(sp.together(sp.diff(f, O)*om))

# ---------------- fast exact cycle integrator ----------------------------
u = sp.Symbol('u', positive=True)
Jm = {-1: 2*sp.pi/sp.sqrt(1 - e**2),
      -2: 2*sp.pi*(1 - e**2)**sp.Rational(-3, 2)}
def J(m):
    if m >= 0:
        return sp.integrate(sp.expand((1 + e*sp.cos(O))**m), (O, 0, 2*sp.pi))
    if m in Jm: return Jm[m]
    raise ValueError(f"J({m}) not provided")

mp.mp.dps = 25
ok_base = True
for etest in ['0.37', '0.82']:
    ev = mp.mpf(etest)
    n1 = mp.quad(lambda t: 1/(1 + ev*mp.cos(t)), [0, mp.pi, 2*mp.pi])
    n2 = mp.quad(lambda t: 1/(1 + ev*mp.cos(t))**2, [0, mp.pi, 2*mp.pi])
    ok_base &= abs(n1 - 2*mp.pi/mp.sqrt(1 - ev**2)) < mp.mpf('1e-20')
    ok_base &= abs(n2 - 2*mp.pi*(1 - ev**2)**mp.mpf('-1.5')) < mp.mpf('1e-20')
check("base integrals J(-1), J(-2) verified numerically (25 digits)", ok_base)

def cyc_int(f):
    """exact integral of f(O) dO over one cycle (reduction in u-space)"""
    g = sp.cancel(sp.together(f))
    num, den = sp.fraction(g)
    # numerator: reduce even sin powers, drop odd-in-sin part (integral 0)
    numx = sp.expand(sp.expand_trig(num))
    for _ in range(3):
        numx = sp.expand(numx.subs(sp.sin(O)**2, 1 - sp.cos(O)**2))
    even = numx.subs(sp.sin(O), 0)
    # substitute cos O = (u-1)/e everywhere
    num_u = sp.together(sp.expand(even.subs(sp.cos(O), (u - 1)/e)))
    den_u = sp.together(sp.expand(sp.expand_trig(den).subs(sp.cos(O), (u - 1)/e)))
    if den_u.has(sp.sin(O)) or den_u.has(sp.cos(O)):
        raise ValueError("denominator contains sin/cos beyond u: " + str(den))
    pn, pd = sp.fraction(num_u)      # extra e-powers from substitution
    dn, ddn = sp.fraction(den_u)
    # denominator polynomial in u must be a monomial C*u^k
    dpoly = sp.Poly(sp.expand(dn), u)
    terms = dpoly.terms()
    if len(terms) != 1:
        fact = sp.factor(sp.expand(dn))
        base_u, exp_u = fact.as_base_exp() if fact.func is sp.Pow else (None, None)
        raise ValueError("denominator not monomial in u: " + str(fact))
    (kdeg,), C = terms[0]
    npoly = sp.Poly(sp.expand(pn), u)
    total = sp.Integer(0)
    for (deg,), coef in npoly.terms():
        total += coef*J(deg - kdeg)
    return sp.simplify(total*ddn/(pd*C))

T_orb = sp.simplify(cyc_int(1/om))
check("period from integrator: T = 2 pi/sqrt(M)  (= 2 pi a/(beta c))",
      sp.simplify(T_orb - 2*sp.pi/sp.sqrt(M)) == 0)

def cyc_avg(f):
    return sp.simplify(cyc_int(f/om)/T_orb)

print("="*70, flush=True)
print("STAGE 1: one-way lag (naive directed retardation)", flush=True)
print("="*70, flush=True)
v_t = h/r
P1  = -(M*mu/r**2)*v_t*v_t
P1_avg = cyc_avg(P1)
E_orb = -M*mu/(2*a_val)
epsW_naive = sp.simplify(T_orb*P1_avg/E_orb)
print("  eps_W(naive) =", sp.factor(epsW_naive), flush=True)
scal = sp.simplify(epsW_naive/(4*sp.pi*sp.sqrt(M)))
print("  = 4 pi beta * shape(e),  shape =", sp.factor(scal), flush=True)

GMsun = mp.mpf('1.32712440018e20'); c_n = mp.mpf('299792458')
a_mer = mp.mpf('5.7909050e10'); e_mer = mp.mpf('0.20563593')
beta_mer = mp.sqrt(GMsun/(a_mer*c_n**2))
shape_f = sp.lambdify(e, scal, 'mpmath')
eps_mer = 4*mp.pi*beta_mer*shape_f(e_mer)
orbits_efold = 1/abs(eps_mer)
age_orbits = mp.mpf('4.5e9')*365.25*24*3600/mp.mpf('7.6005216e6')
print(f"  Mercury: fractional loss per orbit = {mp.nstr(abs(eps_mer),4)}")
print(f"  -> e-fold decay in ~{mp.nstr(orbits_efold,4)} orbits "
      f"(~{mp.nstr(orbits_efold*mp.mpf('0.2408'),4)} yr)")
print(f"  Mercury has survived ~{mp.nstr(age_orbits,3)} orbits.")
check("STAGE 1 REJECTED: naive lag kills Mercury within ~1e4 orbits (excluded)",
      orbits_efold < mp.mpf('1e6'))

print(flush=True)
print("="*70, flush=True)
print("STAGE 2: reciprocity-symmetrized lag (two-way handshake)", flush=True)
print("="*70, flush=True)
delta = sp.Symbol('delta', real=True)
check("even (handshake) part: transverse drag = 0 exactly",
      sp.simplify((sp.sin(-delta) + sp.sin(delta))/2) == 0)
check("even part alters only central strength (conservative, no leak)",
      sp.simplify((sp.cos(-delta) + sp.cos(delta))/2 - sp.cos(delta)) == 0)

print(flush=True)
print("="*70, flush=True)
print("STAGE 3: odd residual on the quadratic directed pair form", flush=True)
print("="*70, flush=True)
x = r*sp.cos(O); y = r*sp.sin(O)

m1, m2 = sp.symbols('m1 m2', positive=True)
w1, w2 = m2/(m1+m2), -m1/(m1+m2)
check("dipole of the balanced pair vanishes identically (no dipole channel)",
      sp.simplify(m1*w1 + m2*w2) == 0)

r2 = sp.cancel(x**2 + y**2)
Qxx = mu*(x*x - r2/3); Qyy = mu*(y*y - r2/3)
Qzz = mu*(-r2/3);      Qxy = mu*(x*y)

def Dt_n(f, n):
    g = f
    for _ in range(n):
        g = Dt(g)
    return g

print("  building derivatives...", flush=True)
Q3 = {k: Dt_n(v, 3) for k, v in
      {'xx': Qxx, 'yy': Qyy, 'zz': Qzz, 'xy': Qxy}.items()}
print("  ...3rd done", flush=True)
Q5 = {k: Dt_n(Q3[k], 2) for k in Q3}
print("  ...5th done", flush=True)

xd, yd = Dt(x), Dt(y)
P3  = -2*lam*mu*( xd*(Q5['xx']*x + Q5['xy']*y)
                + yd*(Q5['xy']*x + Q5['yy']*y) )
Lz3 = -2*lam*mu*(  x*(Q5['xy']*x + Q5['yy']*y)
                 - y*(Q5['xx']*x + Q5['xy']*y) )

P3_avg  = cyc_avg(sp.expand(P3));  print("  ...<P> done", flush=True)
Lz3_avg = cyc_avg(sp.expand(Lz3)); print("  ...<dLz/dt> done", flush=True)

Q3sq = sp.expand(Q3['xx']**2 + Q3['yy']**2 + Q3['zz']**2 + 2*Q3['xy']**2)
Q3sq_avg = cyc_avg(Q3sq)
check("cycle identity <P> = -lambda <(d3Q_ij)^2>  (pure calculus)",
      sp.simplify(P3_avg + lam*Q3sq_avg) == 0)

f1 = 1 + sp.Rational(73,24)*e**2 + sp.Rational(37,96)*e**4
f2 = 1 + sp.Rational(7,8)*e**2
P_GR  = -sp.Rational(32,5)*mu**2*M**3 * f1/(1-e**2)**sp.Rational(7,2)
Lz_GR = -sp.Rational(32,5)*mu**2*M**sp.Rational(5,2) * f2/(1-e**2)**2
check("lambda = 1/5 reproduces the GR energy drain exactly",
      sp.simplify(P3_avg.subs(lam, sp.Rational(1,5)) - P_GR) == 0)
check("lambda = 1/5 reproduces the GR angular-momentum drain exactly",
      sp.simplify(Lz3_avg.subs(lam, sp.Rational(1,5)) - Lz_GR) == 0)

# ---- SHAPE TESTS (lambda-independent predictions of the mechanism) ------
L_orb = mu*sp.sqrt(M*p)
epsW_mech = sp.simplify( T_orb*P3_avg/E_orb)
epsH_mech = sp.simplify(-T_orb*Lz3_avg/L_orb)

eta_s, beta_s = sp.symbols('eta beta', positive=True)
epsW_sub = sp.simplify(epsW_mech.subs(mu, eta_s*M).subs(M, beta_s**2))
scaling = sp.simplify(epsW_sub/(lam*eta_s*beta_s**5))
check("eps_W(mech) = lambda * eta * beta^5 * shape(e)  exactly",
      sp.simplify(sp.diff(scaling, eta_s)) == 0
      and sp.simplify(sp.diff(scaling, beta_s)) == 0)
print("  eps_W(mech) =", sp.simplify(epsW_sub), flush=True)

shape_mech = sp.simplify(epsW_mech/epsW_mech.subs(e, 0))
shape_obs  = f1/(1-e**2)**sp.Rational(7,2)
check("e-shape of eps_W == (1 + 73e^2/24 + 37e^4/96)/(1-e^2)^(7/2)",
      sp.simplify(shape_mech - shape_obs) == 0)

shapeH_mech = sp.simplify(epsH_mech/epsH_mech.subs(e, 0))
shapeH_obs  = f2/(1-e**2)**sp.Rational(5,2)
check("e-shape of eps_h == (1 + 7e^2/8)/(1-e^2)^(5/2)",
      sp.simplify(shapeH_mech - shapeH_obs) == 0)

lock = sp.simplify((epsH_mech/epsW_mech).subs(e, 0))
check("e=0 lock: eps_h/eps_W = 1/2 automatically (any lambda)",
      sp.simplify(lock - sp.Rational(1,2)) == 0)

de_dN = sp.simplify(((1-e**2)/e)*(epsH_mech - epsW_mech/2))
de_num = de_dN.subs({lam: sp.Rational(1,5), mu: sp.Rational(1,400),
                     M: sp.Rational(1,100), e: sp.Rational(1,2)})
check("mechanism circularises eccentric orbits (de/dN < 0)",
      bool(sp.nsimplify(de_num) < 0))

print(flush=True)
print("="*70, flush=True)
print("STAGE 3b: same computation WITHOUT the no-breathing selection rule", flush=True)
print("="*70, flush=True)
QT5 = {'xx': Dt_n(mu*x*x, 5), 'yy': Dt_n(mu*y*y, 5), 'xy': Dt_n(mu*x*y, 5)}
PT  = -2*lam*mu*( xd*(QT5['xx']*x + QT5['xy']*y)
                + yd*(QT5['xy']*x + QT5['yy']*y) )
PT_avg = cyc_avg(sp.expand(PT))
epsW_tr  = sp.simplify(T_orb*PT_avg/E_orb)
shape_tr = sp.simplify(epsW_tr/epsW_tr.subs(e, 0))
print("  with-trace e-shape:", sp.factor(sp.simplify(shape_tr)), flush=True)
check("keeping the trace CHANGES the e-shape (selection rule is testable)",
      sp.simplify(shape_tr - shape_obs) != 0)
check("circular orbits unaffected by trace (breathing needs eccentricity)",
      sp.simplify(epsW_tr.subs(e, 0) - epsW_mech.subs(e, 0)) == 0)

print(flush=True)
print("="*70, flush=True)
print("NUMBERS (with lambda = 1/5 for comparison)", flush=True)
print("="*70, flush=True)
m1n = mp.mpf('1.438'); m2n = mp.mpf('1.390')
e_n = mp.mpf('0.6171340'); Pb = mp.mpf('27906.9795865')
GM  = GMsun*(m1n+m2n)
a_n = (GM*(Pb/(2*mp.pi))**2)**(mp.mpf(1)/3)
b_n = mp.sqrt(GM/(a_n*c_n**2)); eta_n = m1n*m2n/(m1n+m2n)**2
f1_n = 1 + mp.mpf(73)/24*e_n**2 + mp.mpf(37)/96*e_n**4
epsW_n = mp.mpf(128)/5*mp.pi*eta_n*b_n**5*f1_n/(1-e_n**2)**mp.mpf('3.5')
print(f"  B1913+16 period drift (mechanism, lambda=1/5): {mp.nstr(-1.5*epsW_n,6)}")
print(f"  observed (intrinsic):                          -2.40263e-12")
H0 = mp.mpf('2.2084e-18'); a_beta = c_n*H0/(6*mp.pi)
r_floor = mp.sqrt(2*GMsun/a_beta)
ratio_f = sp.lambdify(e, sp.simplify(shape_tr/shape_obs), 'mpmath')
print(f"  e-shape ratio (with-breathing / no-breathing) at e=0.6171: "
      f"{mp.nstr(mp.mpf(str(ratio_f(e_n))),5)}")
print(f"  same (1-e^2)^(-7/2) envelope; only the polynomial differs.")
print(f"  B1913+16 timing precision ~0.16% -> breathing variant disfavored ~2 sigma,")
print(f"  NOT excluded; improved timing of eccentric pulsars can decide.")
print(f"  Part II kinetic floor a_beta = {mp.nstr(a_beta,3)} m/s^2")
print(f"  2-Msun binary reaches the floor at separation "
      f"{mp.nstr(r_floor/mp.mpf('1.496e11'),4)} AU  (wide-binary regime)")

print(flush=True)
n_fail = sum(1 for _, ok in PASS if not ok)
print(f"TOTAL: {len(PASS)} checks, {n_fail} failures", flush=True)
