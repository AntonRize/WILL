import { motion, type Variants } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowDown, Star } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function StageVII() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative py-12 mt-8"
    >
      {/* Connecting arrow */}
      <div className="flex justify-center mb-8">
        <ArrowDown className="w-8 h-8 text-will-cyan/50" />
      </div>

      {/* Stage Header */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
          <span className="text-will-blue font-mono text-sm">STAGE VII</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Orbital Mechanics</h2>
        <p className="text-slate-400 mt-2">Solving gravity through light algebra</p>
      </motion.div>

      {/* Flow Chart */}
      <div className="relative max-w-4xl mx-auto">
        {/* Input from Stage VI */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-axiom px-6 py-4 max-w-lg text-center">
            <p className="text-will-blue font-semibold text-sm mb-1">INPUT FROM STAGE VI</p>
            <p className="text-white">Energy Symmetry Law Established (ΔE<sub>A→B</sub> + ΔE<sub>B→A</sub> = 0)</p>
          </div>
        </motion.div>

        {/* Decision: Define Orbital Mechanics */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Define Orbital Mechanics</p>
          </div>
        </motion.div>

        {/* Orbital Mechanics Branch */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-8">
          <div className="flex-1 node-will px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-will-green" />
              <span className="text-will-green text-xs font-bold">T</span>
            </div>
            <p className="text-white font-semibold">Relational Orbital Mechanics (R.O.M.)</p>
            <p className="text-slate-300 text-sm mt-2">Inputs: Direct Optical Projections</p>
            <div className="mt-2 space-y-1">
              <p className="text-will-blue text-sm">1. <span className="font-mono">β</span> (Doppler Shift)</p>
              <p className="text-will-cyan text-sm">2. <span className="font-mono">κ</span> (Gravitational Redshift)</p>
            </div>
          </div>
          <div className="node-fail px-4 py-3 max-w-[240px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm">Input: Mass (M) & Constant (G)</p>
            <p className="text-red-300/70 text-sm">Mechanism: Forces or Metric Curvature</p>
            <p className="text-red-300/70 text-sm">Method: Differential Equations</p>
            <p className="text-red-400/60 text-xs mt-2">Violates Operationality. M and G are not direct observables.</p>
          </div>
        </motion.div>

        {/* Geometric Eccentricity */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-will px-6 py-4 max-w-xl text-center">
            <p className="text-will-green font-semibold mb-2">Theorem 16.2: Geometric Eccentricity</p>
            <p className="text-slate-300 text-sm mb-3">Eccentricity is the measure of &quot;Closure Defect&quot; (δ):</p>
            <p className="text-will-cyan font-mono text-xl font-bold border-2 border-will-cyan/40 rounded-lg px-4 py-2 inline-block">
              e = 1/δ<sub>p</sub>² - 1
            </p>
            <p className="text-slate-400 text-sm mt-2 italic">&quot;Eccentricity ≡ Energy Deviation&quot;</p>
          </div>
        </motion.div>

        {/* Decision: Derive Precession */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Derive Precession (Δφ)</p>
          </div>
        </motion.div>

        {/* Precession Branch - with verification info moved here */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-8">
          <div className="flex-1 node-will px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-will-green" />
              <span className="text-will-green text-xs font-bold">T</span>
            </div>
            <p className="text-white font-semibold">Sec 16.5: Universal Precession Law</p>
            <p className="text-slate-300 text-sm mt-2">Pure Algebra of light &quot;Red vs Blue&quot; at perihelium:</p>
            <p className="text-will-cyan font-mono text-xl font-bold mt-2 border-2 border-will-cyan/40 rounded-lg px-4 py-2 inline-block">
              Δφ = (3π/2) · (κ<sub>p</sub>⁴/β<sub>p</sub>²)
            </p>
            <p className="text-slate-400 text-sm mt-2">Ratio of Potential (Red) to Kinetic (Blue) at perihelium</p>
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-will-green/20">
              <Star className="w-4 h-4 text-yellow-400" />
              <p className="text-yellow-400/80 text-sm">Predictions verified (Mercury, S2, S4716)</p>
            </div>
          </div>
          <div className="node-fail px-4 py-3 max-w-[200px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm font-mono text-xs mb-1">d²x<sup>μ</sup>/dτ² + Γ<sup>μ</sup><sub>νλ</sub>... = 0</p>
            <p className="text-red-300/70 text-sm">Solve Geodesic Equation</p>
            <p className="text-red-400/60 text-xs mt-2">High Mathematical Inflation. Requires Metric Tensor.</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
