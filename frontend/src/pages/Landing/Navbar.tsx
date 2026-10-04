import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../../components/ThemeToggle';
import { Logo } from '../../components/common/Logo';

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
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-surface-3/95 backdrop-blur-md border-b border-line shadow-xs transition-colors duration-200">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-8 flex items-center justify-between h-[72px]">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 font-extrabold text-[26px] tracking-tight text-fg hover:opacity-90 transition-opacity cursor-pointer group"
        >
          <Logo size={38} showText={true} />
        </button>

        {/* Center Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-base text-fg">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`cursor-pointer transition-colors duration-150 py-1 ${
                activeSection === item.id
                  ? 'text-primary-hover border-b-2 border-primary'
                  : 'text-fg hover:text-primary-hover'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Controls: ThemeToggle + Launch App */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <Link to="/app" className="btn-landing-primary">
            Launch App
          </Link>
        </div>

        {/* Mobile Hamburger Button & ThemeToggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/app"
            className="px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-bold text-xs uppercase"
          >
            App
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-fg hover:bg-surface rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Top Scroll Indicator Progress Bar */}
      <div
        className="h-[3px] bg-primary transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-3 border-b border-line px-6 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150 shadow-md">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left py-2 font-bold text-lg cursor-pointer ${
                activeSection === item.id ? 'text-primary-hover' : 'text-fg'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link
              to="/app"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-landing-primary w-full text-center"
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
