import { motion, type Variants } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowDown } from 'lucide-react';

const PDF_BASE = 'https://willrg.com/documents/WILL_RG_I.pdf#nameddest=';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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

export default function StageII() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative py-12 mt-8"
    >
      {/* Connecting arrow from Stage I */}
      <div className="flex justify-center mb-8">
        <ArrowDown className="w-8 h-8 text-will-cyan/50" />
      </div>

      {/* Stage Header */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
          <span className="text-will-blue font-mono text-sm">STAGE II</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Ontological Foundation</h2>
        <p className="text-slate-400 mt-2">Defining the unified entity</p>
      </motion.div>

      {/* Flow Chart */}
      <div className="relative max-w-4xl mx-auto">
        {/* Decision: Define Energy */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Define &quot;Energy&quot;</p>
          </div>
        </motion.div>

        {/* Energy Definition Branch */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-8">
          <a href={`${PDF_BASE}def:energy`} target="_blank" rel="noopener noreferrer" className="flex-1">
            <div className="node-will px-5 py-4 hover:ring-2 hover:ring-blue-400/50 transition-all cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-will-green" />
                <span className="text-will-green text-xs font-bold">T</span>
              </div>
              <p className="text-white font-semibold">Definition 1.6: Energy</p>
              <p className="text-slate-300 text-sm mt-1">Relational measure of difference between states (Bookkeeping)</p>
            </div>
          </a>
          <div className="node-fail px-4 py-3 max-w-[220px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm font-medium">Substantialism:</p>
            <p className="text-red-300/70 text-sm">&quot;Energy is a fluid/stuff inside objects&quot;</p>
            <p className="text-red-400/60 text-xs mt-2">Violates Relational Origin</p>
          </div>
        </motion.div>

        {/* Decision: Structure-Dynamics */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Relation between Structure & Dynamics</p>
          </div>
        </motion.div>

        {/* Structure-Dynamics Branch */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-8">
          <a href={`${PDF_BASE}pr:unifying`} target="_blank" rel="noopener noreferrer" className="flex-1">
            <div className="node-will px-5 py-4 hover:ring-2 hover:ring-blue-400/50 transition-all cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-will-green" />
                <span className="text-will-green text-xs font-bold">T</span>
              </div>
              <p className="text-white font-semibold">Principle 2.3: The Identity</p>
              <p className="text-will-cyan font-mono text-lg mt-2 font-medium">SPACETIME ≡ ENERGY</p>
              <p className="text-slate-300 text-sm mt-1">(Structure IS Dynamics)</p>
            </div>
          </a>
          <div className="node-fail px-4 py-3 max-w-[220px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm font-medium">The Split:</p>
            <p className="text-red-300/70 text-sm">Container (Metric) + Content (Fields)</p>
            <p className="text-red-300/70 text-sm font-mono mt-1">G<sub>μν</sub> = T<sub>μν</sub></p>
            <p className="text-red-400/60 text-xs mt-2">Violates Minimalism</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
