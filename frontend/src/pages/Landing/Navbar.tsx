import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Menu, X } from 'lucide-react';

interface LandingNavbarProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'features', label: 'Features' },
  { id: 'faq', label: 'FAQ' },
];

export function LandingNavbar({ activeSection }: LandingNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-card border-b border-[#ECFCCB]'
          : 'bg-[#FFFFFF] border-b border-[#ECFCCB]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-3.5 group">
          <div className="w-11 h-11 rounded-2xl bg-[#84CC16] flex items-center justify-center text-[#1A2E05] shadow-sm group-hover:scale-105 group-hover:shadow-lime-glow transition-all duration-200">
            <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-anton text-2xl tracking-wide text-[#1A2E05] uppercase">
              Bharosa
            </span>
            <span className="hidden sm:inline-block text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#ECFCCB] text-[#1A2E05] border border-[#84CC16] tracking-wider uppercase">
              Sovereign Identity
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-1.5 lg:space-x-2 bg-[#F7FBEF] px-3 py-1.5 rounded-full border border-[#ECFCCB]">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-150 ${
                activeSection === item.id
                  ? 'bg-[#84CC16] text-[#1A2E05] shadow-xs'
                  : 'text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#ECFCCB]/60'
              }`}
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/public-verify"
            className="px-4 py-2 rounded-full text-xs font-bold text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#ECFCCB]/60 transition-colors"
          >
            Public Verifier
          </Link>
        </div>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <Link
            to="/app"
            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-lime-glow hover:-translate-y-0.5 group"
          >
            <span>Launch App</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center space-x-2">
          <Link
            to="/app"
            className="px-3.5 py-2 rounded-xl bg-[#84CC16] text-[#1A2E05] font-extrabold text-xs uppercase"
          >
            App
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#ECFCCB] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#ECFCCB] px-5 pt-3 pb-7 space-y-2 shadow-card animate-in slide-in-from-top-2 duration-200">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                activeSection === item.id
                  ? 'bg-[#84CC16] text-[#1A2E05]'
                  : 'text-[#4D6B2A] hover:bg-[#F7FBEF] hover:text-[#1A2E05]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/public-verify"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 rounded-xl text-sm font-bold text-[#4D6B2A] hover:bg-[#F7FBEF]"
          >
            Public Verifier
          </Link>
          <div className="pt-3">
            <Link
              to="/app"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3.5 rounded-2xl bg-[#84CC16] text-[#1A2E05] font-extrabold text-sm uppercase tracking-wider shadow-sm"
            >
              Launch App <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default LandingNavbar;
