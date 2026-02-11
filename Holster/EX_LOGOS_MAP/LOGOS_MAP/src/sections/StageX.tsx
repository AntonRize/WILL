import { motion, type Variants } from 'framer-motion';
import { ArrowDown, Infinity, RotateCcw } from 'lucide-react';

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

export default function StageX() {
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
          <span className="text-will-blue font-mono text-sm">STAGE X</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Unity Validation</h2>
        <p className="text-slate-400 mt-2">Closing the logical loop</p>
      </motion.div>

      {/* Flow Chart */}
      <div className="relative max-w-4xl mx-auto">
        {/* Input from Stage IX */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-axiom px-6 py-4 max-w-lg text-center">
            <p className="text-will-blue font-semibold text-sm mb-1">INPUT FROM STAGE IX</p>
            <p className="text-white">Field is Consistent & Bounded</p>
          </div>
        </motion.div>

        {/* WILL Invariant */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <a href={`${PDF_BASE}sec:willinvariant`} target="_blank" rel="noopener noreferrer">
            <div className="node-will px-6 py-4 max-w-xl text-center hover:ring-2 hover:ring-blue-400/50 transition-all cursor-pointer">
              <p className="text-will-green font-semibold mb-3">Sec 21: W<sub>ILL</sub> Invariant</p>
              <p className="text-slate-300 text-sm mb-3">Check consistency of all sectors: Energy (E), Time (T), Mass (M), Length (L)</p>
              <p className="text-will-cyan font-mono text-2xl font-bold border-2 border-will-cyan/40 rounded-lg px-6 py-3 inline-block">
                W<sub>ILL</sub> = ET/ML = 1
              </p>
              <p className="text-slate-400 text-sm mt-3">Unity of Relational Structure</p>
            </div>
          </a>
        </motion.div>

        {/* Theoretical Ouroboros */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <a href={`${PDF_BASE}def:will`} target="_blank" rel="noopener noreferrer">
            <div className="node-will px-6 py-4 max-w-xl text-center hover:ring-2 hover:ring-blue-400/50 transition-all cursor-pointer">
              <div className="flex items-center justify-center gap-2 mb-3">
                <RotateCcw className="w-5 h-5 text-will-green" />
                <p className="text-will-green font-semibold">Sec 20: Theoretical Ouroboros</p>
              </div>
              <p className="text-slate-300 text-sm">The Principle (Spacetime &equiv; Energy) generated the Field Equation.</p>
              <p className="text-slate-300 text-sm mt-1">The Field Equation validates the Principle.</p>
              <p className="text-will-cyan text-sm mt-2 font-medium">Logical loop is closed.</p>
            </div>
          </a>
        </motion.div>

        {/* Final Node */}
        <motion.div variants={itemVariants} className="flex justify-center mb-12">
          <a href={`${PDF_BASE}def:will`} target="_blank" rel="noopener noreferrer">
            <div className="node-final px-10 py-8 text-center hover:ring-2 hover:ring-blue-400/50 transition-all cursor-pointer">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Infinity className="w-6 h-6 text-will-blue" />
              </div>
              <p className="text-will-blue font-bold text-xl mb-1">LOGOS &equiv; WILL &equiv; COSMOS</p>
              <p className="text-white font-mono text-2xl font-bold mt-3">SPACETIME &equiv; ENERGY</p>
            </div>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
