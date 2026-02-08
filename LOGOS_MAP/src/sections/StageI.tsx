import { motion, type Variants } from 'framer-motion';
import { CheckCircle2, XCircle, Lightbulb } from 'lucide-react';

const PDF_BASE = 'https://willrg.com/documents/WILL_RG_I.pdf#nameddest=';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
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

export default function StageI() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative py-12"
    >
      {/* Stage Header */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
          <span className="text-will-blue font-mono text-sm">STAGE I</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Methodology Calibration</h2>
        <p className="text-slate-400 mt-2">Establishing the foundational principles</p>
      </motion.div>

      {/* Flow Chart */}
      <div className="relative max-w-4xl mx-auto">
        {/* Axiom 0 */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-axiom px-6 py-4 max-w-md text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-will-blue" />
              <span className="text-will-blue font-semibold">Axiom 0</span>
            </div>
            <p className="text-white font-medium">The Universe is comprehensible via Logic, Geometry, and Math</p>
          </div>
        </motion.div>

        {/* F - Dead End - Now on the right side */}
        <motion.div variants={itemVariants} className="flex justify-end mb-4">
          <div className="node-fail px-4 py-3 max-w-[200px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm font-medium">Dead End: Logical Agnosticism</p>
          </div>
        </motion.div>

        {/* Decision: Methodology */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Define Methodology</p>
          </div>
        </motion.div>

        {/* Continue to Principles - All red blocks on the right */}
        <div className="relative space-y-6">
          {/* Principle 1 */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <a href={`${PDF_BASE}pr:epistemic`} target="_blank" rel="noopener noreferrer" className="flex-1">
              <div className="node-will px-5 py-4 hover:ring-2 hover:ring-blue-400/50 transition-all cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-will-green" />
                  <span className="text-will-green text-xs font-bold">T (Generative)</span>
                </div>
                <p className="text-white font-semibold">Principle 1: Epistemic Hygiene</p>
                <p className="text-slate-300 text-sm mt-1">(No Hidden Assumptions)</p>
              </div>
            </a>
            <div className="node-fail px-4 py-3 max-w-[200px] self-center">
              <div className="flex items-center gap-2 mb-1">
                <XCircle className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-xs font-bold">F (Descriptive)</span>
              </div>
              <p className="text-red-300/70 text-sm">Importing external backgrounds/constants</p>
            </div>
          </motion.div>

          {/* Principle 2 */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <a href={`${PDF_BASE}pr:minimalism`} target="_blank" rel="noopener noreferrer" className="flex-1">
              <div className="node-will px-5 py-4 hover:ring-2 hover:ring-blue-400/50 transition-all cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-will-green" />
                  <span className="text-will-green text-xs font-bold">T</span>
                </div>
                <p className="text-white font-semibold">Principle 2: Ontological Minimalism</p>
                <p className="text-slate-300 text-sm mt-1">(Fewest possible entities)</p>
              </div>
            </a>
            <div className="node-fail px-4 py-3 max-w-[200px] self-center">
              <div className="flex items-center gap-2 mb-1">
                <XCircle className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-xs font-bold">F</span>
              </div>
              <p className="text-red-300/70 text-sm">Entity Inflation (Fields, Particles, Dark Sector)</p>
            </div>
          </motion.div>

          {/* Principle 3 */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <a href={`${PDF_BASE}pr:relational`} target="_blank" rel="noopener noreferrer" className="flex-1">
              <div className="node-will px-5 py-4 hover:ring-2 hover:ring-blue-400/50 transition-all cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-will-green" />
                  <span className="text-will-green text-xs font-bold">T</span>
                </div>
                <p className="text-white font-semibold">Principle 3: Relational Origin</p>
                <p className="text-slate-300 text-sm mt-1">(No absolute magnitudes)</p>
              </div>
            </a>
            <div className="node-fail px-4 py-3 max-w-[200px] self-center">
              <div className="flex items-center gap-2 mb-1">
                <XCircle className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-xs font-bold">F</span>
              </div>
              <p className="text-red-300/70 text-sm">Absolute/Container Space & Time</p>
            </div>
          </motion.div>

          {/* Principle 4 */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <a href={`${PDF_BASE}pr:Mathematical`} target="_blank" rel="noopener noreferrer" className="flex-1">
              <div className="node-will px-5 py-4 hover:ring-2 hover:ring-blue-400/50 transition-all cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-will-green" />
                  <span className="text-will-green text-xs font-bold">T</span>
                </div>
                <p className="text-white font-semibold">Principle 4: Math Transparency</p>
                <p className="text-slate-300 text-sm mt-1">(1 Symbol = 1 Physical Idea)</p>
              </div>
            </a>
            <div className="node-fail px-4 py-3 max-w-[200px] self-center">
              <div className="flex items-center gap-2 mb-1">
                <XCircle className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-xs font-bold">F</span>
              </div>
              <p className="text-red-300/70 text-sm">Semantic Inflation (Abstract Formalism)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
