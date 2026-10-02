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
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF] transition-all duration-200 border-t-4 border-[#84CC16] ${
        scrolled
          ? 'shadow-sm border-b border-[#ECFCCB]'
          : 'border-b border-[#ECFCCB]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="/logos/bharosa-mark.png"
            alt="Bharosa Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-bold text-2xl tracking-tight text-[#1A2E05]">
            Bharosa
          </span>
        </Link>

        {/* Center Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-semibold transition-colors ${
                activeSection === item.id
                  ? 'text-[#65A30D] font-bold'
                  : 'text-[#1A2E05] hover:text-[#65A30D]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <Link
            to="/app"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#84CC16] hover:bg-[#72b510] text-[#1A2E05] font-bold text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Launch App
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center space-x-2">
          <Link
            to="/app"
            className="px-4 py-1.5 rounded-full bg-[#84CC16] text-[#1A2E05] font-bold text-xs uppercase"
          >
            App
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#1A2E05] hover:bg-[#ECFCCB] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#ECFCCB] px-5 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                activeSection === item.id
                  ? 'bg-[#ECFCCB] text-[#1A2E05]'
                  : 'text-[#1A2E05] hover:bg-[#F7FBEF]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <Link
              to="/app"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-full bg-[#84CC16] text-[#1A2E05] font-bold text-sm shadow-sm"
            >
              Launch App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default LandingNavbar;
