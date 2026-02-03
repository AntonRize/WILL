import { motion, type Variants } from 'framer-motion';
import { ArrowDown, AlertTriangle, CheckCircle2, Sparkles } from 'lucide-react';

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

export default function StageVI() {
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
          <span className="text-will-blue font-mono text-sm">STAGE VI</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Philosophy Comparison</h2>
        <p className="text-slate-400 mt-2">The consequences of methodological choices</p>
      </motion.div>

      {/* Flow Chart */}
      <div className="relative max-w-4xl mx-auto">
        {/* Comparison */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Bad Philosophy */}
          <div className="node-fail px-6 py-5">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-semibold">If Method F was chosen</span>
            </div>
            <h3 className="text-red-300 font-bold text-lg mb-4">EFFECTS OF BAD PHILOSOPHY</h3>
            <p className="text-red-400/60 text-sm mb-4">(Descriptive Physics)</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">1.</span>
                <span className="text-red-200/70 text-sm"><strong>Inflated Formalism:</strong> Equations multiply to hide ontological errors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">2.</span>
                <span className="text-red-200/70 text-sm"><strong>Loss of Transparency:</strong> Meaning hidden behind coordinates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">3.</span>
                <span className="text-red-200/70 text-sm"><strong>Fragmentation:</strong> Separate constants for every domain</span>
              </li>
            </ul>
          </div>

          {/* Good Philosophy */}
          <div className="node-will px-6 py-5">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-will-green" />
              <span className="text-will-green font-semibold">Result of Method T</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-4">EFFECTS OF GOOD PHILOSOPHY</h3>
            <p className="text-will-green/60 text-sm mb-4">(Epistemic Hygiene)</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-will-green font-bold">1.</span>
                <span className="text-slate-300 text-sm"><strong>Simplicity:</strong> Complexity collapses into geometry</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-will-green font-bold">2.</span>
                <span className="text-slate-300 text-sm"><strong>Transparency:</strong> 1 Symbol = 1 Idea</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-will-green font-bold">3.</span>
                <span className="text-slate-300 text-sm"><strong>Unity:</strong> Scale invariance from Quantum to Cosmic</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="bg-gradient-to-r from-will-navy-light via-slate-800 to-will-navy-light border border-will-cyan/30 rounded-xl px-8 py-6 max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-will-cyan" />
              <span className="text-will-cyan font-bold">GENERAL CONCLUSION</span>
            </div>
            <blockquote className="text-xl text-white font-medium italic mb-3">
              &quot;Mathematical complexity is the symptom of philosophical negligence.&quot;
            </blockquote>
            <p className="text-slate-400 text-sm">
              Once ontological symmetry is restored, Nature&apos;s laws reduce to algebraic self-consistency.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
