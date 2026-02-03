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

export default function StageV() {
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
          <span className="text-will-blue font-mono text-sm">STAGE V</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Dynamics Definition</h2>
        <p className="text-slate-400 mt-2">The mechanism of interaction</p>
      </motion.div>

      {/* Flow Chart */}
      <div className="relative max-w-4xl mx-auto">
        {/* Input from Stage IV */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-axiom px-6 py-4 max-w-lg text-center">
            <p className="text-will-blue font-semibold text-sm mb-1">INPUT FROM STAGE IV</p>
            <p className="text-white">Physics Derived: Invariant Mass & Unified Scaling Established</p>
          </div>
        </motion.div>

        {/* Decision: Define Interaction Measure */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Define Interaction Measure (Distance/Difference)</p>
          </div>
        </motion.div>

        {/* Interaction Measure Branch */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-8">
          <div className="flex-1 node-will px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-will-green" />
              <span className="text-will-green text-xs font-bold">T</span>
            </div>
            <p className="text-white font-semibold">Sec 10: Relational Displacement</p>
            <p className="text-slate-300 text-sm mt-2">Self-Centering Reciprocity:</p>
            <p className="text-will-cyan font-mono text-lg font-bold mt-2 border-2 border-will-cyan/40 rounded-lg px-4 py-2 inline-block">
              Q² = β² + κ²
            </p>
            <p className="text-slate-400 text-sm mt-2">Norm of deviation from observer</p>
          </div>
          <div className="node-fail px-4 py-3 max-w-[200px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm">Spatial Distance (Metric ds² in background)</p>
            <p className="text-red-400/60 text-xs mt-2">Violates Relational Origin</p>
          </div>
        </motion.div>

        {/* Self-Centering Diagram */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="bg-slate-800/50 border border-slate-600/50 rounded-xl px-6 py-5">
            <p className="text-will-blue font-semibold text-center mb-4">Self-Centering Reciprocity</p>
            <svg viewBox="-0.5 -0.5 2.0 2.0" className="w-64 h-64 mx-auto">
              {/* Axes */}
              <line x1="-0.1" y1="0" x2="1.4" y2="0" stroke="#94a3b8" strokeWidth="0.015" markerEnd="url(#arrowhead-beta)" />
              <line x1="0" y1="-0.1" x2="0" y2="1.4" stroke="#94a3b8" strokeWidth="0.015" markerEnd="url(#arrowhead-kappa)" />
              
              {/* Axis labels */}
              <text x="1.45" y="0.05" fill="#000" fontSize="0.08" className="fill-slate-300">β (X)</text>
              <text x="0.05" y="1.45" fill="#000" fontSize="0.08" className="fill-slate-300">κ (Y)</text>
              
              {/* Arrow markers */}
              <defs>
                <marker id="arrowhead-beta" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                  <polygon points="0 0, 6 2, 0 4" fill="#94a3b8" />
                </marker>
                <marker id="arrowhead-kappa" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                  <polygon points="0 0, 6 2, 0 4" fill="#94a3b8" />
                </marker>
              </defs>
              
              {/* Observer A Circle (Blue) - centered at origin */}
              <circle cx="0" cy="0" r="1" fill="none" stroke="#3b82f6" strokeWidth="0.025" />
              <circle cx="0" cy="0" r="0.04" fill="#3b82f6" />
              <text x="-0.15" y="-0.08" fill="#3b82f6" fontSize="0.08" fontWeight="500">Obs A (0,0)</text>
              
              {/* Object B Circle (Red Dashed) - offset position */}
              <circle cx="0.7" cy="0.5" r="1" fill="none" stroke="#ef4444" strokeWidth="0.025" strokeDasharray="0.08,0.05" />
              <circle cx="0.7" cy="0.5" r="0.04" fill="#ef4444" />
              <text x="0.75" y="0.45" fill="#ef4444" fontSize="0.08" fontWeight="500">Obj B (0,0)</text>
              
              {/* Vector Q */}
              <line x1="0" y1="0" x2="0.7" y2="0.5" stroke="white" strokeWidth="0.025" markerEnd="url(#arrow-q)" />
              <defs>
                <marker id="arrow-q" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                  <polygon points="0 0, 6 2, 0 4" fill="white" />
                </marker>
              </defs>
              <text x="0.3" y="0.35" fill="white" fontSize="0.1" fontWeight="bold">Q</text>
              
              {/* Projection lines (dotted) */}
              <line x1="0.7" y1="0.5" x2="0.7" y2="0" stroke="#64748b" strokeWidth="0.015" strokeDasharray="0.03,0.03" />
              <line x1="0.7" y1="0.5" x2="0" y2="0.5" stroke="#64748b" strokeWidth="0.015" strokeDasharray="0.03,0.03" />
              
              {/* Projection labels */}
              <text x="0.7" y="-0.06" fill="#64748b" fontSize="0.07" textAnchor="middle">β</text>
              <text x="-0.06" y="0.52" fill="#64748b" fontSize="0.07" textAnchor="end">κ</text>
              
              {/* Causality label */}
              <text x="0.5" y="1.65" fill="#94a3b8" fontSize="0.08" textAnchor="middle">Causal Lock: Q &lt; 1</text>
            </svg>
          </div>
        </motion.div>

        {/* Decision: Define Interaction Mechanism */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Define Interaction Mechanism (Dynamics)</p>
          </div>
        </motion.div>

        {/* Interaction Mechanism Branch */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-8">
          <div className="flex-1 node-will px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-will-green" />
              <span className="text-will-green text-xs font-bold">T</span>
            </div>
            <p className="text-white font-semibold">Theorem 14.1: Energy-Symmetry Law</p>
            <p className="text-slate-300 text-sm mt-2">Causal Continuity:</p>
            <p className="text-will-cyan font-mono text-lg font-bold mt-2 border-2 border-will-cyan/40 rounded-lg px-4 py-2 inline-block">
              ΔE<sub>A→B</sub> + ΔE<sub>B→A</sub> = 0
            </p>
            <p className="text-slate-400 text-sm mt-2">Transfers must sum to zero</p>
          </div>
          <div className="node-fail px-4 py-3 max-w-[200px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm">Forces / Potentials (Newton, Lagrange, Hamiltonian)</p>
            <p className="text-red-400/60 text-xs mt-2">Ontologically &quot;dirty&quot; approximations</p>
          </div>
        </motion.div>

        {/* Decision: Zero Point */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Define &quot;Zero Point&quot; (Reference System)</p>
          </div>
        </motion.div>

        {/* Zero Point Branch */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-8">
          <div className="flex-1 node-will px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-will-green" />
              <span className="text-will-green text-xs font-bold">T</span>
            </div>
            <p className="text-white font-semibold">Self-Centering Principle</p>
            <p className="text-slate-300 text-sm mt-2">Zero is ALWAYS the state of a local relational frame (A or B)</p>
          </div>
          <div className="node-fail px-4 py-3 max-w-[200px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm">Hypothetical Observer at Infinity (∞)</p>
            <p className="text-red-400/60 text-xs mt-2">Idealized/Non-existent, leads to Gauge Ambiguities</p>
          </div>
        </motion.div>

        {/* Decision: Formalize Energy */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Formalize Energy Description</p>
          </div>
        </motion.div>

        {/* Energy Description Branch */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-8">
          <div className="flex-1 node-will px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-will-green" />
              <span className="text-will-green text-xs font-bold">T</span>
            </div>
            <p className="text-white font-semibold">Explicit Transition Cost</p>
            <p className="text-slate-300 text-sm mt-2">Energy as Work of Translation from State A to State B</p>
            <p className="text-will-cyan font-mono text-lg font-bold mt-2 border-2 border-will-cyan/40 rounded-lg px-4 py-2 inline-block">
              ΔE<sub>A→B</sub>
            </p>
          </div>
          <div className="node-fail px-4 py-3 max-w-[200px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm">Formalisms L, H - Energy as intrinsic scalar at a single point</p>
            <p className="text-red-400/60 text-xs mt-2">Ontologically &quot;murky&quot;, Mathematically inflated</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
