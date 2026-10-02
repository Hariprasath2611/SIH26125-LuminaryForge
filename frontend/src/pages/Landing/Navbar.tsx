import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Menu, X, ExternalLink } from 'lucide-react';

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-xs border-b border-[#ECFCCB]'
          : 'bg-[#FFFFFF] border-b border-[#ECFCCB]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#84CC16] flex items-center justify-center text-[#1A2E05] shadow-xs group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <span className="font-anton text-2xl tracking-wide text-[#1A2E05] uppercase">Bharosa</span>
            <span className="hidden sm:inline-block ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ECFCCB] text-[#4D6B2A] tracking-wider uppercase">
              Web3 Trust
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeSection === item.id
                  ? 'bg-[#ECFCCB] text-[#1A2E05] shadow-2xs'
                  : 'text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/public-verify"
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF] transition-colors"
          >
            Public Verifier
          </Link>
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          <Link
            to="/app"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-bold text-xs uppercase tracking-wider transition-all shadow-sm group"
          >
            <span>Launch App</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <Link
            to="/app"
            className="px-3 py-1.5 rounded-lg bg-[#84CC16] text-[#1A2E05] font-bold text-xs uppercase"
          >
            App
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#ECFCCB] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#ECFCCB] px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activeSection === item.id
                  ? 'bg-[#ECFCCB] text-[#1A2E05]'
                  : 'text-[#4D6B2A] hover:bg-[#F7FBEF] hover:text-[#1A2E05]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/public-verify"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-[#4D6B2A] hover:bg-[#F7FBEF]"
          >
            Public Verifier
          </Link>
          <div className="pt-2">
            <Link
              to="/app"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-xl bg-[#84CC16] text-[#1A2E05] font-bold text-sm uppercase tracking-wider"
            >
              Launch App <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
