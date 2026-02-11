import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Atom } from 'lucide-react';

const navLinks = [
  { label: 'LOGOS MAP', href: '#', current: true },
  { label: 'Relativistic Foundations', href: 'https://antonrize.github.io/WILL/relativistic-foundations/', current: false },
  { label: 'Documents & Results', href: 'https://antonrize.github.io/WILL/results/', current: false },
  { label: 'Predictions', href: 'https://antonrize.github.io/WILL/predictions/', current: false },
  { label: 'Relational Orbital Mechanics', href: 'https://antonrize.github.io/WILL/ROM/', current: false },
  { label: 'Galactic Dynamics', href: 'https://antonrize.github.io/WILL/calculator/', current: false },
  { label: 'Cosmology', href: 'https://antonrize.github.io/WILL/cosmology.html', current: false },
  { label: 'WILL AI', href: 'https://antonrize.github.io/WILL/WILL-AI/', current: false },
  { label: 'About', href: 'https://antonrize.github.io/WILL/about/', current: false },
  { label: 'Help This Research', href: 'https://antonrize.github.io/WILL/help/', current: false },
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
          ? 'bg-gray-900/80 backdrop-blur-sm border-b border-gray-800'
          : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 max-w-5xl">
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
              link.current ? (
                <span
                  key={link.label}
                  className="text-sm text-cyan-400 font-medium"
                >
                  {link.label}
                </span>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
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
              link.current ? (
                <span
                  key={link.label}
                  className="text-cyan-400 font-medium py-2 text-center"
                >
                  {link.label} (Current)
                </span>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
