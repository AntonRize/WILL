import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { CheckCircle2, XCircle, Lightbulb, ExternalLink } from 'lucide-react';

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

type Principle = {
  id: string;
  title: string;
  subtitle: string;
  tag?: string;
  href: string;
};

function PrincipleCard({ id, title, subtitle, tag, href }: Principle) {
  const openLink = (e?: React.MouseEvent | React.KeyboardEvent) => {
    // a fallback mechanism to open links
    if (typeof window !== 'undefined') {
      window.open(href, '_blank', 'noopener');
    }
    e?.stopPropagation();
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 group"
      aria-label={`Open ${title} derivation in PDF`}
      onClick={(e) => {}}  // allow default anchor behavior
    >
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLink(e); }}
        onClick={(e) => { openLink(e); }}
        className="node-will px-5 py-4 transition-all rounded-lg cursor-pointer bg-gradient-to-r from-slate-800/60 to-slate-800/40 group-hover:shadow-lg border border-will-green/10 hover:border-will-green/40 flex items-start justify-between gap-4"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2"> 
            <CheckCircle2 className="w-4 h-4 text-will-green" />
            {tag && <span className="text-will-green text-xs font-bold">{tag}</span>}
          </div>

          <p className="text-white font-semibold text-lg">{title}</p>
          <p className="text-slate-300 text-sm mt-1">{subtitle}</p>
        </div>

        <div className="ml-4 flex-shrink-0 self-center">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); window.open(href, '_blank', 'noopener'); }}
            className="inline-flex items-center gap-2 bg-will-green/10 text-will-green px-3 py-1 rounded-full text-sm font-medium hover:bg-will-green/20"
            aria-label={`View ${title} PDF`}
          >
            View
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </a>
  );
}

export default function StageI() {
  const principles: Principle[] = [
    { id: 'pr:epistemic', title: 'Principle 1: Epistemic Hygiene', subtitle: '(No Hidden Assumptions)', tag: 'T (Generative)', href: `${PDF_BASE}pr:epistemic` },
    { id: 'pr:minimalism', title: 'Principle 2: Ontological Minimalism', subtitle: '(Fewest possible entities)', tag: 'T', href: `${PDF_BASE}pr:minimalism` },
    { id: 'pr:relational', title: 'Principle 3: Relational Origin', subtitle: '(No absolute magnitudes)', tag: 'T', href: `${PDF_BASE}pr:relational` },
    { id: 'pr:Mathematical', title: 'Principle 4: Math Transparency', subtitle: '(1 Symbol = 1 Physical Idea)', tag: 'T', href: `${PDF_BASE}pr:Mathematical` }
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="relative py-12"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
          <span className="text-will-blue font-mono text-sm">STAGE I</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Methodology Calibration</h2>
        <p className="text-slate-400 mt-2">Establishing the foundational principles</p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="node-axiom px-6 py-4 max-w-md text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-will-blue" />
              <span className="text-will-blue font-semibold">Axiom 0</span>
            </div>
            <p className="text-white font-medium">The Universe is comprehensible via Logic, Geometry, and Math</p>
          </div>
        </motion.div>

        <div className="relative space-y-6">
          {principles.map((p) => (
            <motion.div key={p.id} variants={itemVariants} className="flex items-start gap-4">
              <PrincipleCard {...p} />

              <div className="node-fail px-4 py-3 max-w-[200px] self-center">
                <div className="flex items-center gap-2 mb-1">
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 text-xs font-bold">F</span>
                </div>
                <p className="text-red-300/70 text-sm"></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}