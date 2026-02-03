import { motion } from 'framer-motion';
import { GitBranch } from 'lucide-react';
import StageI from './sections/StageI';
import StageII from './sections/StageII';
import StageIII from './sections/StageIII';
import StageIV from './sections/StageIV';
import StageV from './sections/StageV';
import StageVI from './sections/StageVI';
import StageVII from './sections/StageVII';
import StageVIII from './sections/StageVIII';
import StageIX from './sections/StageIX';
import StageX from './sections/StageX';
import Navigation from './sections/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-will-navy text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <GitBranch className="w-8 h-8 text-will-blue" />
              <span className="text-will-blue font-mono text-sm tracking-wider uppercase">Logical Structure</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-gradient">LOGOS MAP</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-4">
              The Logical Structure of WILL Relational Geometry
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A visual journey through the nine stages of deriving physics from first principles — 
              from Axiom 0 to the unified field equation.
            </p>
          </motion.div>
          
          {/* Legend */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-500/20 border border-blue-500/40" />
              <span className="text-slate-400">Axiom / Input</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-yellow-500/20 border border-yellow-500/40" />
              <span className="text-slate-400">Decision</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500/20 border border-green-500/40" />
              <span className="text-slate-400">WILL Principle</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-500/10 border border-dashed border-red-500/40" />
              <span className="text-slate-400">Rejected Path</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-cyan-500/20 border-2 border-cyan-500/50" />
              <span className="text-slate-400">Stage Complete</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flow Map Container */}
      <main className="relative px-4 sm:px-6 lg:px-8 pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-cyan-500/30 to-green-500/30 hidden lg:block" style={{ transform: 'translateX(-50%)' }} />
          
          <StageI />
          <StageII />
          <StageIII />
          <StageIV />
          <StageV />
          <StageVI />
          <StageVII />
          <StageVIII />
          <StageIX />
          <StageX />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            © 2026 Anton Rize. All materials available for scientific use.
          </p>
          <p className="text-slate-600 text-xs mt-2">
            WILL Relational Geometry — Spacetime ≡ Energy
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
