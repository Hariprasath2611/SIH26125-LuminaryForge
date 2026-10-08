import React from 'react';
import { Link } from 'react-router-dom';

const TRUST_TAGS = [
  'W3C DIDs',
  'Verifiable Credentials',
  'Zero-Knowledge Proofs',
  'IPFS Storage',
  'Layer-2 Blockchain',
  'On-chain ABAC',
  'Polygon',
  'Arbitrum',
  'Solidity',
  'Veramo',
  'EIP-4337',
];

export function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="pt-[74px] sm:pt-[78px] pb-0 bg-gradient-to-b from-[#FFFFFF] to-[#F7FBEF] relative overflow-hidden isolate min-h-screen flex flex-col justify-between"
    >
      {/* Background Decorative Layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none select-none"
      >
        {/* Subtle Dots Pattern with Fade */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: 'radial-gradient(#CFE6A0 1.6px, transparent 1.7px)',
            backgroundSize: '30px 30px',
            WebkitMaskImage: 'linear-gradient(#000, transparent 80%)',
            maskImage: 'linear-gradient(#000, transparent 80%)',
          }}
        />

        {/* Ambient Gradient Glows */}
        <div
          className="absolute w-[520px] h-[520px] rounded-full -left-[180px] top-[60px] opacity-80"
          style={{
            background: 'radial-gradient(#D9F99D, rgba(217,249,157,0) 70%)',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full -right-[180px] top-[100px] opacity-50"
          style={{
            background: 'radial-gradient(#BEF264, rgba(190,242,100,0) 70%)',
          }}
        />

        {/* Floating Wireframe & Solid Decorative Hexagons */}
        <svg
          className="fh"
          viewBox="0 0 100 100"
          width="56"
          height="56"
          style={{ left: '5%', top: '170px' }}
        >
          <polygon
            points="50,4 93,27 93,73 50,96 7,73 7,27"
            fill="none"
            stroke="#A3E635"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="fh"
          viewBox="0 0 100 100"
          width="84"
          height="84"
          style={{ right: '6%', top: '110px', animationDelay: '1.5s' }}
        >
          <polygon
            points="50,4 93,27 93,73 50,96 7,73 7,27"
            fill="#D9F99D"
            stroke="#A3E635"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="fh"
          viewBox="0 0 100 100"
          width="40"
          height="40"
          style={{ left: '46%', top: '520px', animationDelay: '3s' }}
        >
          <polygon
            points="50,4 93,27 93,73 50,96 7,73 7,27"
            fill="none"
            stroke="#84CC16"
            strokeWidth="6"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="fh"
          viewBox="0 0 100 100"
          width="64"
          height="64"
          style={{ left: '30%', top: '70px', animationDelay: '2.2s' }}
        >
          <polygon
            points="50,4 93,27 93,73 50,96 7,73 7,27"
            fill="#ECFCCB"
            stroke="#D9EBB5"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Main Content Container - Centered Vertically */}
      <div className="flex-1 flex items-center max-w-[1160px] w-full mx-auto px-6 sm:px-8 py-3 sm:py-5">
        <div className="w-full flex flex-wrap items-center justify-between gap-8 lg:gap-12">
          {/* Left Column: Headlines & Actions */}
          <div className="flex-[1_1_460px] max-w-[620px]">
            {/* Eyebrow Pill */}
            <div className="in-anim inline-block bg-[#ECFCCB] border border-[#D9EBB5] rounded-full px-5 py-1.5 font-bold text-xs sm:text-sm text-[#1A2E05] mb-4 sm:mb-5 shadow-2xs">
              BHAROSA
            </div>

            {/* Main Title with spacious, comfortable word and letter spacing */}
            <h1
              className="in-anim font-extrabold text-[38px] sm:text-[50px] lg:text-[62px] leading-[1.14] sm:leading-[1.18] tracking-[0.05em] [word-spacing:0.12em] text-[#1A2E05] mb-5 sm:mb-6"
              style={{ animationDelay: '0.12s' }}
            >
              <span className="block mb-2 sm:mb-2.5 tracking-[0.05em] [word-spacing:0.12em]">Trust, owned</span>
              <span className="inline-flex items-center justify-center bg-[#84CC16] text-[#1A2E05] px-5 sm:px-7 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-2xl sm:rounded-3xl text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold tracking-wide shadow-sm leading-none">
                by&nbsp;you.
              </span>
            </h1>

            {/* Description with readable line-height and relaxed spacing */}
            <p
              className="in-anim text-base sm:text-lg text-[#3F5A1E] leading-relaxed mb-6 sm:mb-7 max-w-xl font-medium tracking-normal"
              style={{ animationDelay: '0.26s' }}
            >
              Own your identity, prove it instantly to anyone, and share documents with full control.
              No central database to breach, no certificate to forge.
            </p>

            {/* Action Buttons */}
            <div
              className="in-anim flex flex-wrap items-center gap-4 mb-6 sm:mb-7"
              style={{ animationDelay: '0.4s' }}
            >
              <Link to="/app" className="btn-landing-primary">
                Launch App
              </Link>
              <button
                type="button"
                onClick={scrollToAbout}
                className="btn-landing-outline cursor-pointer"
              >
                See how it works
              </button>
            </div>

            {/* Built for Pills */}
            <div
              className="in-anim flex flex-wrap items-center gap-3"
              style={{ animationDelay: '0.52s' }}
            >
              <span className="font-bold text-xs sm:text-sm text-[#4D6B2A] mr-1">Built for</span>
              <span className="pill-tag text-[#1A2E05]">Students</span>
              <span className="pill-tag text-[#1A2E05]">Universities</span>
              <span className="pill-tag text-[#1A2E05]">Employers</span>
            </div>
          </div>

          {/* Right Column: Hero Graphic with spinning ring & floating chips */}
          <div
            className="in-anim relative flex-initial w-[320px] sm:w-[380px] lg:w-[410px] max-w-full h-[330px] sm:h-[390px] lg:h-[420px] mx-auto lg:mx-0"
            style={{ animationDelay: '0.3s' }}
          >
            {/* Inner Light Circle */}
            <div className="absolute inset-5 rounded-full bg-[#ECFCCB]" />

            {/* Outer Dashed Ring with Spin Animation */}
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#A3E635]"
              style={{ animation: 'spin 40s linear infinite' }}
            />

            {/* Center Hexagonal Shield Emblem */}
            <svg
              viewBox="0 0 120 120"
              width="260"
              height="260"
              role="img"
              aria-label="Verified seal"
              className="absolute left-[30px] sm:left-[60px] top-[35px] sm:top-[65px]"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            >
              <polygon
                points="60,8 105,34 105,86 60,112 15,86 15,34"
                fill="none"
                stroke="#65A30D"
                strokeWidth="3"
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

            {/* Floating Chip 1: Credential verified */}
            <div className="chip top-5 -left-3 sm:-left-4">
              <i className="dt" />
              <span>Credential verified</span>
            </div>

            {/* Floating Chip 2: Hash matches on-chain */}
            <div
              className="chip top-[160px] sm:top-[175px] -right-3 sm:-right-5"
              style={{ animationDelay: '1.2s' }}
            >
              <i className="dt" />
              <span>Hash matches on-chain</span>
            </div>

            {/* Floating Chip 3: Access expires in 7 days */}
            <div
              className="chip bottom-5 sm:bottom-6 left-1 sm:left-2"
              style={{ animationDelay: '2.1s' }}
            >
              <i className="dt" />
              <span>Access expires in 7 days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track - Visible on screen without scrolling */}
      <div className="mq flex-shrink-0 w-full py-3.5 bg-white border-t border-b border-[#D9EBB5]" aria-label="Technologies">
        <div className="trk">
          {TRUST_TAGS.map((t, idx) => (
            <span key={`trk-1-${idx}`}>{t}</span>
          ))}
          {TRUST_TAGS.map((t, idx) => (
            <span key={`trk-2-${idx}`}>{t}</span>
          ))}
        </div>
      </div>
    </section>

);
}

export default Hero;
