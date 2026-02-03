import { motion, type Variants } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowDown } from 'lucide-react';

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

export default function StageIV() {
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
          <span className="text-will-blue font-mono text-sm">STAGE IV</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Physics Derivation</h2>
        <p className="text-slate-400 mt-2">From geometry to physical laws</p>
      </motion.div>

      {/* Flow Chart */}
      <div className="relative max-w-4xl mx-auto">
        {/* Decision: Define Mass */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Define Physical Meaning of Vertical Projection (β<sub>Y</sub>)</p>
          </div>
        </motion.div>

        {/* Mass Definition Branch */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-8">
          <div className="flex-1 node-will px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-will-green" />
              <span className="text-will-green text-xs font-bold">T</span>
            </div>
            <p className="text-white font-semibold">Def 7.1 & Thm 7.2: Self-relation (Motion=0) → Invariant Mass</p>
            <p className="text-slate-300 text-sm mt-2">Vertical Projection ≡ Rest Existence</p>
            <div className="mt-2 font-mono text-sm space-y-1">
              <p className="text-will-blue">E · β<sub>Y</sub> = E<sub>0</sub> ≡ m</p>
              <p className="text-will-cyan">γ = 1/β<sub>Y</sub></p>
            </div>
          </div>
          <div className="node-fail px-4 py-3 max-w-[200px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm">Independent Parameter (Mass as intrinsic substance)</p>
            <p className="text-red-400/60 text-xs mt-2">Ontologically redundant</p>
          </div>
        </motion.div>

        {/* Energy-Momentum */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-will px-6 py-4 max-w-xl">
            <p className="text-will-green font-semibold mb-2">Corollary 7.3: Energy-Momentum</p>
            <p className="text-slate-300 text-sm mb-3">Apply Pythagoras to S¹ Closure:</p>
            <p className="font-mono text-will-blue text-sm mb-2">(Eβ)² + (Eβ<sub>Y</sub>)² = E²</p>
            <p className="text-slate-300 text-sm mb-2">Identify p ≡ Eβ, m ≡ Eβ<sub>Y</sub></p>
            <p className="text-will-cyan font-mono text-xl font-bold border-2 border-will-cyan/40 rounded-lg px-4 py-2 inline-block">
              E² = p² + m²
            </p>
          </div>
        </motion.div>

        {/* Decision: Equivalence Principle */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Explain m<sub>i</sub> = m<sub>g</sub></p>
          </div>
        </motion.div>

        {/* Equivalence Branch */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-8">
          <div className="flex-1 node-will px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-will-green" />
              <span className="text-will-green text-xs font-bold">T</span>
            </div>
            <p className="text-white font-semibold">Theorem 12.2: Unified Scaling</p>
            <p className="text-slate-300 text-sm mt-2">Kinematics (S¹) and Gravity (S²) act on the SAME invariant E<sub>0</sub></p>
            <p className="text-will-cyan font-mono text-lg font-bold mt-2 border-2 border-will-cyan/40 rounded-lg px-4 py-2 inline-block">
              m<sub>i</sub> ≡ m<sub>g</sub> ≡ E<sub>0</sub>
            </p>
          </div>
          <div className="node-fail px-4 py-3 max-w-[200px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm font-medium">Weak Equivalence Principle</p>
            <p className="text-red-300/70 text-sm">(Postulated as Axiom)</p>
            <p className="text-red-400/60 text-xs mt-2">Descriptive physics (Coincidence)</p>
          </div>
        </motion.div>

        {/* Reference Table */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="bg-slate-800/50 border border-slate-600/50 rounded-xl px-6 py-5 max-w-2xl">
            <p className="text-will-blue font-semibold text-center mb-4">Reference: Algebraic ↔ Trigonometric Forms</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <p className="text-slate-400 mb-2">Algebraic Form</p>
                <div className="space-y-1 font-mono text-slate-200">
                  <p>β = v/c</p>
                  <p>κ = √(R<sub>s</sub>/r)</p>
                  <p>β<sub>Y</sub> = √(1-β²)</p>
                  <p>κ<sub>X</sub> = √(1-κ²)</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-slate-400 mb-2">Trigonometric Form</p>
                <div className="space-y-1 font-mono text-slate-200">
                  <p>β = cos(θ₁)</p>
                  <p>κ = sin(θ₂)</p>
                  <p>β<sub>Y</sub> = sin(θ₁)</p>
                  <p>κ<sub>X</sub> = cos(θ₂)</p>
                </div>
              </div>
            </div>
            <p className="text-center text-slate-400 text-xs mt-4 font-mono">
              θ₁ = arccos(β), θ₂ = arcsin(κ), κ² = 2β² (Closure)
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
