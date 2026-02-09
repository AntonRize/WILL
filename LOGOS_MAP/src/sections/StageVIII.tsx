import { motion, type Variants } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowDown } from 'lucide-react';

const PDF_BASE = 'https://willrg.com/documents/WILL_RG_I.pdf#nameddest=';

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

export default function StageVIII() {
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
          <span className="text-will-blue font-mono text-sm">STAGE VIII</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Matter Redefinition</h2>
        <p className="text-slate-400 mt-2">From substance to geometric intensity</p>
      </motion.div>

      {/* Flow Chart */}
      <div className="relative max-w-4xl mx-auto">
        {/* Input from Stage VII */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-axiom px-6 py-4 max-w-lg text-center">
            <p className="text-will-blue font-semibold text-sm mb-1">INPUT FROM STAGE VII</p>
            <p className="text-white">Dynamics is Geometric. Pure Algebra of Projections (&kappa;, &beta;)</p>
          </div>
        </motion.div>

        {/* Decision: Define Density */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-decision px-6 py-4">
            <p className="text-yellow-200 font-medium text-center">Define Density (&rho;)</p>
            <p className="text-yellow-200/70 text-sm text-center">Connect 2D Geometry to 3D Data</p>
          </div>
        </motion.div>

        {/* Density Branch */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-8">
          <a href={`${PDF_BASE}density`} target="_blank" rel="noopener noreferrer" className="flex-1">
            <div className="node-will px-5 py-4 hover:ring-2 hover:ring-blue-400/50 transition-all cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-will-green" />
                <span className="text-will-green text-xs font-bold">T</span>
              </div>
              <p className="text-white font-semibold">Sec 17.1: The Translation Interface</p>
              <p className="text-slate-300 text-sm mt-2">No new assumptions. Translate 2D Surface Data (S&sup2;) to 3D Proxy.</p>
              <p className="text-slate-400 text-sm mt-2">Normalization by sphere area (4&pi;):</p>
              <p className="text-will-blue font-mono text-sm mt-2">&rho; = (1/4&pi;) &middot; (&kappa;&sup2;c&sup2;/2Gr&sup2;)</p>
            </div>
          </a>
          <div className="node-fail px-4 py-3 max-w-[220px]">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold">F</span>
            </div>
            <p className="text-red-300/70 text-sm font-medium">&quot;The Cannonball Principle&quot;</p>
            <p className="text-red-300/70 text-sm">Assumption: Mass is &quot;stuff&quot; filling a 3D volume uniformly.</p>
            <p className="text-red-300/70 text-sm font-mono mt-1">&rho; = M/V</p>
            <p className="text-red-400/60 text-xs mt-2">Violates Minimalism. &quot;Cultural Artifact&quot; of Newton.</p>
          </div>
        </motion.div>

        {/* Density Identity */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <a href={`${PDF_BASE}density`} target="_blank" rel="noopener noreferrer">
            <div className="node-will px-6 py-4 max-w-xl text-center hover:ring-2 hover:ring-blue-400/50 transition-all cursor-pointer">
              <p className="text-will-green font-semibold mb-3">The Density Identity</p>
              <p className="text-slate-300 text-sm mb-3">Local Density &equiv; Relational Projection</p>
              <div className="space-y-2">
                <p className="text-will-cyan font-mono text-lg font-bold border-2 border-will-cyan/40 rounded-lg px-4 py-2 inline-block">
                  &rho; = &kappa;&sup2;c&sup2; / 8&pi;Gr&sup2;
                </p>
                <p className="text-will-blue font-mono text-lg font-bold border-2 border-will-blue/40 rounded-lg px-4 py-2 inline-block ml-2">
                  &kappa;&sup2; = &rho;/&rho;<sub>max</sub>
                </p>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Intrinsic Pressure */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <a href={`${PDF_BASE}density`} target="_blank" rel="noopener noreferrer">
            <div className="node-will px-6 py-4 max-w-xl text-center hover:ring-2 hover:ring-blue-400/50 transition-all cursor-pointer">
              <p className="text-will-green font-semibold mb-2">Sec 17.3: Intrinsic Pressure</p>
              <p className="text-slate-300 text-sm mb-3">If Density is Geometry (&kappa;&sup2;), then Pressure is Geometric Tension.</p>
              <p className="text-will-cyan font-mono text-xl font-bold border-2 border-will-cyan/40 rounded-lg px-4 py-2 inline-block">
                P = -&rho;c&sup2;
              </p>
              <p className="text-slate-400 text-sm mt-2">(Analogue to Surface Tension)</p>
            </div>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
