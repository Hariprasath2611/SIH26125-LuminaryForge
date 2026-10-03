import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';

export function NotFoundPage() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay policy gracefully
      });
    }
  }, []);

  return (
    <>
      <PageMeta
        title="404 - Sector Not Found | Bharosa Protocol"
        description="The cryptographic route or resource you are looking for has been lost in prehistoric time."
      />

      <main className="relative h-screen h-[100dvh] w-full overflow-hidden flex flex-col justify-between items-center text-white px-4 py-6 sm:py-8 font-sans select-none bg-black selection:bg-[#84CC16] selection:text-[#1A2E05]">
        {/* ================= REALISTIC BACKGROUND VIDEO (Z-0) ================= */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/dino-chase-realistic.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/dino-chase.webm" type="video/webm" />
          <source src="/videos/dino-chase.mp4" type="video/mp4" />
        </video>

        {/* ================= CINEMATIC VIGNETTE OVERLAYS (Z-10) ================= */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/75 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)] z-10 pointer-events-none" />

        {/* ================= TOP HEADER: BRAND LOGO (Z-20) ================= */}
        <header className="relative z-20 shrink-0 pt-1">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <img
              src="/logos/bharosa-mark.png"
              alt="Bharosa Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(132,204,22,0.8)]"
            />
            <span className="font-anton text-2xl sm:text-3xl tracking-wider text-white uppercase group-hover:text-[#84CC16] transition-colors drop-shadow-lg">
              Bharosa
            </span>
          </Link>
        </header>

        {/* ================= CENTER: 404 & WARNING MESSAGE (Z-20) ================= */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-2xl mx-auto shrink-0 my-auto px-4">
          {/* Warning Telemetry Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-500/50 text-red-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 backdrop-blur-md shadow-xl shadow-red-950/60">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>Hazard Alert: Sector 404 Breach</span>
          </div>

          {/* Massive 404 Headline */}
          <h1 className="font-anton text-8xl sm:text-9xl md:text-[10.5rem] text-white tracking-tight leading-none select-none drop-shadow-[0_15px_45px_rgba(0,0,0,0.95)]">
            404
          </h1>

          {/* Movie Quote / Warning Headline */}
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-[#A3E635] tracking-wide uppercase mt-1 mb-2 drop-shadow-lg">
            Objects in mirror are closer than they appear!
          </h2>

          {/* Description Subtitle */}
          <p className="text-xs sm:text-sm text-neutral-200 max-w-lg mx-auto mb-7 leading-relaxed font-normal drop-shadow-md">
            You accelerated straight into the restricted Jurassic perimeter. The page you are
            hunting for has either been devoured or vanished into prehistoric territory.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 sm:px-9 py-3 rounded-full bg-[#84CC16] hover:bg-[#72b510] text-[#1A2E05] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#84CC16]/30 hover:shadow-[#84CC16]/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Floor It (Home)
            </Link>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center px-8 sm:px-9 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider border border-white/30 hover:border-white/50 backdrop-blur-md shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Reverse (Previous)
            </button>
          </div>
        </div>

        {/* ================= BOTTOM STATUS FOOTER (Z-20) ================= */}
        <footer className="relative z-20 w-full max-w-xl shrink-0 flex items-center justify-between text-[10px] sm:text-xs text-neutral-300 border-t border-white/15 pt-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            <span>REALISTIC CHASE CAM • ACTIVE</span>
          </div>

          <div className="font-mono tracking-wider text-[#A3E635] font-bold">
            SPEED: 140 MPH
          </div>
        </footer>
      </main>
    </>
  );
}

export default NotFoundPage;
