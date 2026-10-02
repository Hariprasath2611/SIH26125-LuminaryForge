import React, { useState, useEffect } from 'react';
import { PageMeta } from '../../components/PageMeta';
import { LandingNavbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { WhyUs } from './WhyUs';
import { Features } from './Features';
import { Faq } from './Faq';
import { CtaBanner } from './CtaBanner';
import { Footer } from './Footer';

export function LandingPage() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'why-us', 'features', 'faq'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
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
    <div className="w-full bg-[#FFFFFF] text-[#1A2E05] min-h-screen flex flex-col">
      <PageMeta
        title="Bharosa | Trust, Owned by You"
        description="Decentralized Identity (DID), Client-Side AES-256-GCM Encrypted IPFS Custody, and Mathematical Groth16 Zero-Knowledge Verification on Polygon."
      />

      {/* Fixed Header Navbar */}
      <LandingNavbar activeSection={activeSection} />

      {/* Main Section Content */}
      <main className="flex-1">
        <Hero />
        <About />
        <WhyUs />
        <Features />
        <Faq />
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
