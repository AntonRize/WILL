---

layout: log

title: "Rigorous physicist"

date: 2026-03-17T18-28-00-284Z_Hi_WILL_AI_Anton_Rize_here_L

user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36"

---



**User:** Rigorous physicist

**Assistant:** Confirmed. Mathematical engagement level set to **Rigorous physicist**. How can I assist you with WILL Relational Geometry?

**User:** Hi WILL-AI! Anton Rize here. Lets think together - can we get rid of the mass and G in my Earth - GPS calculations as elegant as we did for Mercury - Sun system?

Here's my current desmos set up for  Earth - GPS calculations:


settings @{
  product: "geometry-calculator",
  randomSeed: "d42ee8d6409f2fc143826e4bc9ed0b00",
  viewport: @{
    xmin: -5.715304690921283,
    xmax: 16.862820309079442,
    ymin: -17.207645391226784,
    ymax: 14.068588058352509,
  },
  xAxisMinorSubdivisions: 1,
  yAxisMinorSubdivisions: 1,
  xAxisNumbers: false,
  yAxisNumbers: false,
  polarNumbers: false,
}

folder"geometry"{

}@{id:"**dcg_geo_folder**",secret:true}

"WILL=1. Energy-Symmetry of Earth-GPS system, Earth-GPS time shift\nhttps://willrg.com/documents/WILL_RG_I.pdf#sec:geometric_composition\nhttps://willrg.com/documents/WILL_RG_R.O.M..pdf#eq:rom\nhttps://willrg.com/documents/WILL_RG_I.pdf#sec:energy-symmetry\nhttps://willrg.com/documents/WILL_RG_I.pdf#sec:willinvariant"

folder"RESULTS"{
  "Distance to GPS stellate. Feel free to play around with it to discover invariant parameters. Real distance is r_GPS = 26571000 m"

  r_GPS=26571000@{color:"#c74440",slider:@{min:0,max:26571000}}

  "One minus Ratio of multiplied orthogonal projections  gives us   the precise time correction used in atomic clocks on board GPS satellites in microseconds per day. "

  T_imedif=(1-tau_Earth/tau_GPS)*86400*10^6@{color:"#6042a6"}

  "Real world system calculation confirms the WILL invariant:"

  W_ILLGPS=(E_GPS*T_GPS)/(M_GPS*L_GPS)@{color:"#2d70b3"}

  "Real world system calculation confirms the Energy Symmetry Law:"

  E_SYMETRY=E_gEarth2GPS+E_gGPS2Earth@{color:"#6042a6"}

  "Conformation of nontriviality of Energy Symmetry Law. Unitless geometrically derived energy E_{gEarth2GPS} is  =  to E_{totnorm}.\nE_{totnorm} is a classical full energy (E_{tot})  normalized by its rest energy (E_{0GPS}):"

  E_totnorm/E_gEarth2GPS@{color:"#2d70b3"}

  "Remarkably, satellite mass m_{GPS} does not appear anywhere in the computation of the geometric energy E_{gEarth2GPS}. Yet, when the total physical energy E_{tot} (the sum of kinetic and potential energies, which does depend on m_{GPS} is normalized by the satellite’s rest energy E_{0GPS} = m_{GPS} c^2 the ratio exactly matches the unitless geometric value as shown above. This confirms that E_{gEarth2GPS} precisely encodes the relationship between the system’s real energy and the satellite’s own rest energy, entirely independent of its absolute mass.\nIn other words, the geometric projection captures the physical “share” of energy - purely as a relational quantity - regardless of the object's individual mass."

  E_gGPS2Earth=(1/2)*(kappa_GPS^2-kappa_Earth^2+(beta_Earth^2-beta_GPS^2))@{
    color:"#2d70b3",
  }

  E_gEarth2GPS=(1/2)*(kappa_Earth^2-kappa_GPS^2+(beta_GPS^2-beta_Earth^2))@{
    color:"#388c46",
  }

  "Lets calculate standard protentional and kinetic energy's "

  E_pGPS=-((G*M_Earth*m_GPS)/r_GPS)--((G*M_Earth*m_GPS)/R_Earth)@{
    color:"#c74440",
  }

  E_kGPS=(1/2)*m_GPS(v_GPS^2-v_Earthspin^2)@{color:"#000000"}

  "Lets combine them to derive total energy"

  E_tot=E_pGPS+E_kGPS@{color:"#c74440"}

  "Lets make it unitless by normalizing over rest energy"

  E_totnorm=E_tot/E_0GPS@{color:"#c74440"}

  "Lets compare classical and relational energies"

  E_totnorm/E_gEarth2GPS@{color:"#388c46"}
}

folder"GPS"{
  2.6571 cross 10^7=r_GPS@{color:"#c74440"}

  m_GPS=600@{color:"#6042a6",hidden:true}

  E_0GPS=m_GPS*c^2@{color:"#2d70b3"}

  v_GPS=sqrt((G*M_Earth)/r_GPS)@{color:"#2d70b3"}

  beta_GPS=sqrt((G*M_Earth)/(c^2*r_GPS))@{color:"#388c46"}

  kappa_GPS=sqrt((2*G*M_Earth)/(c^2*r_GPS))@{color:"#6042a6"}

  kappa_XGPS=sqrt(1-kappa_GPS^2)@{color:"#c74440"}

  beta_YGPS=sqrt(1-beta_GPS^2)@{color:"#2d70b3"}

  tau_GPS=kappa_XGPS*beta_YGPS@{color:"#388c46"}

  Q_GPS=sqrt(beta_GPS^2+kappa_GPS^2)@{color:"#000000"}

  Q_tGPS=sqrt(1-Q_GPS^2)@{color:"#c74440"}
}@{collapsed:true}

folder"WILL GPS"{
  M_GPS=(beta_GPS^2/beta_YGPS)*c^2*(r_GPS/G)@{color:"#2d70b3"}

  E_GPS=(kappa_GPS^2/kappa_XGPS)*((c^4*r_GPS)/(2*G))@{color:"#6042a6"}

  T_GPS=kappa_XGPS((2*G*M_Earth)/(kappa_GPS^2*c^3))^2@{color:"#388c46"}

  L_GPS=beta_YGPS((G*M_Earth)/(beta_GPS^2*c^2))^2@{color:"#c74440"}
}@{collapsed:true}

folder"Earth"{
  M_Earth=5.972 cross 10^24@{color:"#6042a6"}

  R_Earth=6.37 cross 10^6@{color:"#000000"}

  v_Earthspin=465@{color:"#c74440",slider:@{min:465,max:465,step:465}}

  kappa_Earth=sqrt((2*G*M_Earth)/(c^2*R_Earth))@{color:"#000000"}

  beta_Earth=v_Earthspin/c@{color:"#c74440",slider:@{min:0}}

  beta_YEarth=sqrt(1-beta_Earth^2)@{color:"#000000"}

  kappa_XEarth=sqrt(1-kappa_Earth^2)@{color:"#6042a6"}

  tau_Earth=kappa_XEarth*beta_YEarth@{color:"#c74440"}

  Q_Earth=sqrt(beta_Earth^2+kappa_Earth^2)@{color:"#2d70b3"}

  Q_tEarth=sqrt(1-Q_Earth^2)@{color:"#388c46"}
}@{collapsed:true}

folder"Constants"{
  G=6.6743 cross 10^-11@{color:"#2d70b3"}

  c=2.99792458 cross 10^8@{color:"#388c46"}

  D_aySeconds=86400@{color:"#000000",slider:@{min:86400,max:86400}}

  M_icro=10^6@{color:"#c74440"}
}@{collapsed:true}

**Assistant:** Your request is very complex and the AI took too long to think. You can try asking the same question again or try simplifying it a little or even better - you can ask Anton Rize antonrize@willrg.com. Sometimes a good question is better than any answer...