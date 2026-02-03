import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Atom } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: 'https://antonrize.github.io/WILL/' },
  { label: 'Relativistic Foundations', href: 'https://antonrize.github.io/WILL/relativistic-foundations/' },
  { label: 'Documents', href: 'https://antonrize.github.io/WILL/results/' },
  { label: 'Predictions', href: 'https://antonrize.github.io/WILL/predictions/' },
  { label: 'ROM', href: 'https://antonrize.github.io/WILL/ROM/' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-will-navy/95 backdrop-blur-md border-b border-slate-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="https://antonrize.github.io/WILL/" 
            className="flex items-center gap-2 text-white font-semibold"
          >
            <Atom className="w-6 h-6 text-will-blue" />
            <span className="hidden sm:inline">WILL Relational Geometry</span>
            <span className="sm:hidden">WILL RG</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <span className="text-will-blue font-medium text-sm">Logos Map</span>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-will-navy/98 backdrop-blur-md border-b border-slate-800"
        >
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-white py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <span className="text-will-blue font-medium py-2">Logos Map (Current)</span>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
