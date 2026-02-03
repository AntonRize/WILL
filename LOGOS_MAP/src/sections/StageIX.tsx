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

export default function StageIX() {
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
          <span className="text-will-blue font-mono text-sm">STAGE IX</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Field Completion</h2>
        <p className="text-slate-400 mt-2">Natural bounds and saturation</p>
      </motion.div>

      {/* Flow Chart */}
      <div className="relative max-w-4xl mx-auto">
        {/* Unified Geometric Field Equation */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-will px-6 py-4 max-w-xl text-center">
            <p className="text-will-green font-semibold mb-3">Sec 18: Unified Geometric Field Equation</p>
            <p className="text-slate-300 text-sm mb-3">Combine Geometry (R<sub>s</sub>/r) and Density Ratio:</p>
            <p className="text-will-cyan font-mono text-xl font-bold border-2 border-will-cyan/40 rounded-lg px-4 py-2 inline-block">
              κ² = R<sub>s</sub>/r = ρ/ρ<sub>max</sub>
            </p>
            <p className="text-slate-400 text-sm mt-3">Geometry ≡ Energy State</p>
          </div>
        </motion.div>

        {/* Decision: Limit Behavior */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Determine Behavior at Limits</p>
            <p className="text-yellow-200/70 text-sm text-center">(High Energy/Small Radius)</p>
          </div>
        </motion.div>

        {/* Limit Behavior Branch */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-8">
          <div className="flex-1 node-will px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-will-green" />
              <span className="text-will-green text-xs font-bold">T</span>
            </div>
            <p className="text-white font-semibold">Sec 19: Natural Bounds</p>
            <p className="text-slate-300 text-sm mt-2">Geometry is closed (S²).</p>
            <p className="text-will-blue text-sm mt-2">κ² ≤ 1 (Horizon Limit) ⇒ ρ ≤ ρ<sub>max</sub></p>
            <p className="text-will-cyan font-mono text-sm mt-2">ρ<sub>max</sub> = c² / 8πGr²</p>
            <p className="text-will-green text-sm mt-2 font-medium">No Singularities, only Saturation</p>
          </div>
          <div className="node-fail px-4 py-3 max-w-[200px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm font-medium">Mathematical Singularity</p>
            <p className="text-red-300/70 text-sm font-mono text-xs">r → 0 ⇒ ρ → ∞</p>
            <p className="text-red-300/70 text-sm">Breakdown of Theory</p>
            <p className="text-red-400/60 text-xs mt-2">Artifact of coordinate systems. &quot;Bad Philosophy&quot; result.</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
