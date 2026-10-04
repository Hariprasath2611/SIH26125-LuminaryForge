import React, { useState, useEffect } from 'react';
import { PageMeta } from '../../components/PageMeta';
import { LandingNavbar } from './Navbar';
import { Hero } from './Hero';
import { Demo } from './Demo';
import { About } from './About';
import { WhyUs } from './WhyUs';
import { Features } from './Features';
import { CtaBanner } from './CtaBanner';
import { Footer } from './Footer';

export function LandingPage() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = ['home', 'demo', 'about', 'why', 'features', 'cta'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (id === 'demo') {
                setActiveSection('home');
              } else if (id === 'cta') {
                setActiveSection('features');
              } else {
                setActiveSection(id);
              }
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="w-full bg-[#FFFFFF] text-[#1A2E05] min-h-screen flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      <PageMeta
        title="Bharosa – Trust, owned by you"
        description="Own your identity, prove it instantly to anyone, and share documents with full control. No central database to breach, no certificate to forge."
      />

      {/* Sticky Header Navbar with Progress Bar */}
      <LandingNavbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <Demo />
        <About />
        <WhyUs />
        <Features />
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
