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

export default function StageIII() {
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
          <span className="text-will-blue font-mono text-sm">STAGE III</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Geometry Definition</h2>
        <p className="text-slate-400 mt-2">Deriving the mathematical structure</p>
      </motion.div>

      {/* Flow Chart */}
      <div className="relative max-w-4xl mx-auto">
        {/* Input from Stage II */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-axiom px-6 py-4 max-w-lg text-center">
            <p className="text-will-blue font-semibold text-sm mb-1">INPUT FROM STAGE II</p>
            <p className="text-white">Ontology: SPACETIME ≡ ENERGY (Unitary Relational Entity)</p>
          </div>
        </motion.div>

        {/* Derived Constraints */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-will px-6 py-4 max-w-xl">
            <p className="text-will-green font-semibold mb-3">Derived Constraints</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-will-navy/50 rounded-lg px-3 py-2">
                <p className="text-white text-sm">1. Closure (No leakage)</p>
                <p className="text-slate-400 text-xs">→ Lemma 3.1</p>
              </div>
              <div className="bg-will-navy/50 rounded-lg px-3 py-2">
                <p className="text-white text-sm">2. Conservation (Fixed Budget)</p>
                <p className="text-slate-400 text-xs">→ Lemma 3.2</p>
              </div>
              <div className="bg-will-navy/50 rounded-lg px-3 py-2">
                <p className="text-white text-sm">3. Isotropy (Max Symmetry)</p>
                <p className="text-slate-400 text-xs">→ Lemma 3.3</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decision: Derive Geometry */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Derive Geometry Satisfying Constraints</p>
          </div>
        </motion.div>

        {/* Minimal Relational Carriers */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-8">
          <div className="flex-1 node-will px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-will-green" />
              <span className="text-will-green text-xs font-bold">T</span>
            </div>
            <p className="text-white font-semibold mb-3">Minimal Relational Carriers (Theorem 3.4 Proof):</p>
            <div className="space-y-2 text-sm">
              <p className="text-slate-300">
                <span className="text-will-blue">1. Directional Relation (A→B):</span> Requires 1 DOF ⇒ Unique Constraint 1-Carrier: <span className="text-will-cyan font-mono font-bold">S¹</span>
              </p>
              <p className="text-slate-300">
                <span className="text-will-blue">2. Omnidirectional Relation (Center→Field):</span> Requires 2 DOF ⇒ Unique Constraint 2-Carrier: <span className="text-will-cyan font-mono font-bold">S²</span>
              </p>
            </div>
          </div>
          <div className="node-fail px-4 py-3 max-w-[180px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm">Open Manifolds (Infinite Flat Space)</p>
            <p className="text-red-400/60 text-xs mt-2">Violates Closure</p>
          </div>
        </motion.div>

        {/* Decision: Define State */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Define State on Carriers (S¹, S²)</p>
          </div>
        </motion.div>

        {/* State Definition Branch */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-8">
          <div className="flex-1 node-will px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-will-green" />
              <span className="text-will-green text-xs font-bold">T</span>
            </div>
            <p className="text-white font-semibold">Lemma 6.1: Duality of Evolution</p>
            <p className="text-slate-300 text-sm mt-2">State ≡ Superposition of Orthogonal Axes:</p>
            <div className="mt-2 space-y-1">
              <p className="text-will-blue text-sm">1. <span className="font-semibold">Amplitude</span> (External Interaction)</p>
              <p className="text-will-cyan text-sm">2. <span className="font-semibold">Phase</span> (Internal Existence)</p>
            </div>
          </div>
          <div className="node-fail px-4 py-3 max-w-[180px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm">Scalar Parameter (Energy as Substance)</p>
            <p className="text-red-400/60 text-xs mt-2">Impossible in relational model</p>
          </div>
        </motion.div>

        {/* Conservation Laws */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-will px-6 py-4 max-w-xl">
            <p className="text-will-green font-semibold mb-3">Thm 6.2 & 11.1: Orthogonal Conservation</p>
            <p className="text-slate-300 text-sm mb-3">Unitary Budget ⇒ Pythagorean Closure</p>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-will-blue bg-will-navy/50 rounded px-3 py-2">
                S¹ (Kinematics): <span className="text-white">β²</span> (Motion) + <span className="text-white">β<sub>Y</sub>²</span> (SpaceTime) = 1
              </p>
              <p className="text-will-cyan bg-will-navy/50 rounded px-3 py-2">
                S² (Gravity): <span className="text-white">κ²</span> (Potential) + <span className="text-white">κ<sub>X</sub>²</span> (TimeSpace) = 1
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decision: Exchange Rate */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Determine Exchange Rate between Active Amplitudes (κ², β²)</p>
          </div>
        </motion.div>

        {/* Energetic Closure */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-will px-6 py-4 max-w-md text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-will-green" />
              <span className="text-will-green text-xs font-bold">T</span>
            </div>
            <p className="text-white font-semibold mb-2">Theorem 10.2: Energetic Closure</p>
            <p className="text-slate-300 text-sm mb-2">R = d.o.f(S²) / d.o.f(S¹) = 2 / 1 = 2</p>
            <p className="text-will-cyan font-mono text-xl font-bold border-2 border-will-cyan/40 rounded-lg px-4 py-2 inline-block">
              κ² = 2β²
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
