import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface LandingNavbarProps {
  activeSection?: string;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'why', label: 'Why us' },
  { id: 'features', label: 'Features' },
];

export function LandingNavbar({ activeSection = '' }: LandingNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        const navOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        return;
      }
    }
    // Navigate from other pages (e.g. /login) back to landing page section
    navigate(id === 'home' ? '/' : `/#${id}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#D9EBB5] shadow-xs">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-8 flex items-center justify-between h-[72px]">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 font-extrabold text-[26px] tracking-wide text-[#1A2E05] hover:opacity-90 transition-opacity cursor-pointer"
        >
          <svg
            viewBox="0 0 120 120"
            width="38"
            height="38"
            role="img"
            aria-label="Bharosa logo"
            className="shrink-0"
          >
            <polygon
              points="60,8 105,34 105,86 60,112 15,86 15,34"
              fill="none"
              stroke="#65A30D"
              strokeWidth="4"
            />
            <polygon
              points="60,20 94.6,40 94.6,80 60,100 25.4,80 25.4,40"
              fill="#84CC16"
            />
            <path
              d="M41 61 L55 75 L81 46"
              fill="none"
              stroke="#1A2E05"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-extrabold tracking-wide">Bharosa</span>
        </button>

        {/* Center Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-base text-[#1A2E05]">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`cursor-pointer transition-colors duration-150 py-1 ${
                activeSection === item.id
                  ? 'text-[#4D7C0F] border-b-2 border-[#84CC16]'
                  : 'text-[#1A2E05] hover:text-[#4D7C0F]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center">
          <Link to="/login" className="btn-landing-primary">
            Launch App
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            to="/login"
            className="px-4 py-1.5 rounded-full bg-[#84CC16] text-[#1A2E05] font-bold text-xs uppercase"
          >
            App
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1A2E05] hover:bg-[#F7FBEF] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Top Scroll Indicator Progress Bar */}
      <div
        className="h-[3px] bg-[#84CC16] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#D9EBB5] px-6 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150 shadow-md">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left py-2 font-bold text-lg cursor-pointer ${
                activeSection === item.id ? 'text-[#4D7C0F]' : 'text-[#1A2E05]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-landing-primary w-full"
            >
              Launch App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default LandingNavbar;
