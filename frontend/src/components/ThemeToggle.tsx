import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Laptop, Check } from 'lucide-react';
import { useTheme, ThemeChoice } from '../providers/ThemeProvider';

interface ThemeToggleProps {
  className?: string;
  align?: 'left' | 'right';
}

const THEME_OPTIONS: { id: ThemeChoice; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'light', label: 'Light', icon: Sun },
  { id: 'dark', label: 'Dark', icon: Moon },
  { id: 'system', label: 'System', icon: Laptop },
];

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  align = 'right',
}) => {
  const { choice, resolved, setChoice } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('pointerdown', handleOutsideClick);
    }
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, [menuOpen]);

  // Keyboard navigation inside menu
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMenuOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const currentIdx = THEME_OPTIONS.findIndex((opt) => opt.id === choice);
      const nextIdx =
        e.key === 'ArrowDown'
          ? (currentIdx + 1) % THEME_OPTIONS.length
          : (currentIdx - 1 + THEME_OPTIONS.length) % THEME_OPTIONS.length;
      setChoice(THEME_OPTIONS[nextIdx].id);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center ${className}`}
      onKeyDown={handleKeyDown}
    >
      {/* Icon Button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={`Theme: ${choice} (currently ${resolved}). Click to change.`}
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        title={`Theme: ${choice} (Click to select)`}
        className="w-10 h-10 rounded-full border border-line bg-surface hover:bg-surface-2 text-fg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer shadow-xs"
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          {resolved === 'dark' ? (
            <Moon className="w-4 h-4 text-primary transition-all duration-200 transform rotate-0 scale-100 animate-in fade-in zoom-in-75" />
          ) : (
            <Sun className="w-4.5 h-4.5 text-primary-hover transition-all duration-200 transform rotate-0 scale-100 animate-in fade-in zoom-in-75" />
          )}
        </div>
      </button>

      {/* Dropdown Options Menu */}
      {menuOpen && (
        <div
          role="menu"
          aria-label="Select theme"
          className={`absolute top-full mt-2 z-50 w-36 rounded-2xl bg-surface-3 border border-line shadow-card-hover py-1.5 px-1 animate-in fade-in slide-in-from-top-2 duration-150 ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          {THEME_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            const isSelected = choice === opt.id;
            return (
              <button
                key={opt.id}
                role="menuitemradio"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => {
                  setChoice(opt.id);
                  setMenuOpen(false);
                  buttonRef.current?.focus();
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-surface-2 text-primary-hover'
                    : 'text-fg hover:bg-surface hover:text-fg'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5" />
                  <span>{opt.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-primary stroke-[2.5]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
