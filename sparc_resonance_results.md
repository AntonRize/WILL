# Horizon Resonance vs SPARC -- full test

Prediction tested: `V_obs^2 = V_b^2 + sqrt(V_b^2 * a_kappa * r)`, equivalently `delta = 1 + x` with `delta = V_obs^2/V_b^2`, `x = sqrt(a_kappa*r)/V_b`. Zero free parameters.

| quantity | value |
|---|---|
| sample | 2681 points / 144 galaxies (of 3391 / 175) after Qual<3, i>30deg, e_Vobs/Vobs<0.10 |
| Upsilon_* | disk 0.5, bulge 0.7 (Lelli+2016), fixed globally, no per-galaxy tuning |
| a_kappa | 7.02530e-11 m/s^2  = c*H0/(3pi), H0=68.15 km/s/Mpc derived from T_CMB and alpha |
| median delta_obs/(1+x) | 0.9924   IQR [0.824, 1.193] |
| velocity MedAE / bias | 12.62 / -0.43 km/s     F10 41.7%   F20 68.2% |
| chi2/N (random errors only) | 70.5  -- excludes Upsilon*, inclination, distance systematics |
| free weighted fit | slope 1.1517 +/- 0.0016, intercept 0.7034 +/- 0.0018 (stat. only) |
| through-origin slope | 0.948 weighted / 1.049 unweighted  [V_obs^2-V_b^2 vs V_b*sqrt(a_k r)] |
| Upsilon* degeneracy broken | Ups=0.35 flattens trend (rho=+0.057) but median -> 1.216; Ups=0.5 centres median but rho=+0.298 |
| trend is within-galaxy | median per-galaxy spearman(x,ratio) = +0.327 (76/130 positive); vs V_flat: -0.049 |
| exponent p, all radii | 0.5863  (prediction 0.5) |
| exponent p, drop 2 inner | 0.5227 |
| exponent p, Qual=1 only | 0.5248 |
| exponent p, r>R_disk | 0.5245 |
| exponent p, r>2R_disk | 0.5065  <- geometric mean recovered |
| prefactor (all subsamples) | 0.9988 - 1.0001  -- a_kappa normalisation confirmed to <0.2% |
| outer sample r>2R_disk | n=1639 / 137 gal: median ratio 1.0339, MedAE 10.75 km/s, bias +1.85, F10 47.5%, F20 74.2% |
| UNRESOLVED | highest-x bin (x>5) sits at ratio ~1.26 in BOTH samples: prediction runs low in the deepest-deficit regime |

Data: Lelli, McGaugh & Schombert 2016, AJ 152, 157 (SPARC), tables 1 and 2.
V_b^2 = |V_gas|*V_gas + 0.5*V_disk^2 + 0.7*V_bulge^2 (sign of V_gas preserved).
