import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type ThemeChoice = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  choice: ThemeChoice;
  resolved: ResolvedTheme;
  setChoice: (choice: ThemeChoice) => void;
}

const STORAGE_KEY = 'bharosa-theme';

const ThemeContext = createContext<ThemeContextType | null>(null);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [choice, setChoiceState] = useState<ThemeChoice>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeChoice | null;
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        return stored;
      }
    } catch (_) {}
    return 'system';
  });

  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);

  // Compute resolved theme
  const resolved: ResolvedTheme = choice === 'system' ? systemTheme : choice;

  // Listen to OS prefers-color-scheme live changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Sync choice across tabs via storage event
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        if (e.newValue === 'light' || e.newValue === 'dark' || e.newValue === 'system') {
          setChoiceState(e.newValue as ThemeChoice);
        }
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Apply data-theme and meta theme-color to DOM
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = resolved;
    root.style.colorScheme = resolved;

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', resolved === 'dark' ? '#0B1207' : '#FFFFFF');
    }
  }, [resolved]);

  // Set user choice with smooth 200ms transition attribute
  const setChoice = useCallback((newChoice: ThemeChoice) => {
    // Add temporary transition attribute for smooth color changes
    const root = document.documentElement;
    root.setAttribute('data-theme-transition', 'true');
    setTimeout(() => {
      root.removeAttribute('data-theme-transition');
    }, 220);

    setChoiceState(newChoice);
    try {
      localStorage.setItem(STORAGE_KEY, newChoice);
    } catch (_) {}
  }, []);

  return (
    <ThemeContext.Provider value={{ choice, resolved, setChoice }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeProvider;
