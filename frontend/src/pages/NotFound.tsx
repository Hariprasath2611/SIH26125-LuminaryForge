import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';

export function NotFoundPage() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  return (
    <>
      <PageMeta
        title="404 - Sector Not Found | Bharosa Protocol"
        description="The cryptographic route or resource you are looking for has been lost in time."
      />

      <main className="relative h-screen h-[100dvh] w-full overflow-hidden flex flex-col justify-between items-center text-white px-4 py-6 sm:py-8 font-sans select-none selection:bg-[#84CC16] selection:text-[#1A2E05]">
        {/* Dynamic Keyframes for Cinematic Motion */}
        <style>{`
          @keyframes cinematicMotion {
            0% { transform: scale(1.05) translate(0, 0); }
            25% { transform: scale(1.08) translate(-6px, -3px); }
            50% { transform: scale(1.06) translate(4px, -1px); }
            75% { transform: scale(1.09) translate(-3px, 2px); }
            100% { transform: scale(1.05) translate(0, 0); }
          }
          .anim-cinematic {
            animation: cinematicMotion 18s ease-in-out infinite alternate;
          }
          @keyframes rainStreak {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          .anim-rain {
            background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 100%);
            animation: rainStreak 0.8s linear infinite;
          }
        `}</style>

        {/* ================= REALISTIC BACKGROUND VIDEO ================= */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover -z-30 transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src="/videos/dino-chase.mp4" type="video/mp4" />
            <source src="/videos/dino-chase.webm" type="video/webm" />
          </video>
        )}

        {/* ================= REALISTIC CINEMATIC POSTER / VISUAL ================= */}
        {!videoLoaded && (
          <div className="absolute inset-0 w-full h-full overflow-hidden -z-30">
            <img
              src="/images/dino-chase-realistic.jpg"
              alt="Realistic giant T-Rex chasing car on wet highway at night"
              className="w-full h-full object-cover anim-cinematic"
            />
          </div>
        )}

        {/* Rain / Atmosphere Layer */}
        <div className="absolute inset-0 opacity-25 pointer-events-none -z-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Cinematic Film Vignette & Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/90 -z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)] -z-10 pointer-events-none" />

        {/* ================= TOP HEADER: BRAND LOGO ================= */}
        <header className="shrink-0 pt-2 z-10">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <img
              src="/logos/bharosa-mark.png"
              alt="Bharosa Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(132,204,22,0.6)]"
            />
            <span className="font-anton text-2xl sm:text-3xl tracking-wider text-white uppercase group-hover:text-[#84CC16] transition-colors drop-shadow-md">
              Bharosa
            </span>
          </Link>
        </header>

        {/* ================= CENTER: 404 & WARNING MESSAGE ================= */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto shrink-0 my-auto px-4 z-10">
          {/* Warning Telemetry Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/40 text-red-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 backdrop-blur-md shadow-lg shadow-red-950/50">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>Hazard Alert: Sector 404 Breach</span>
          </div>

          {/* Massive 404 Headline */}
          <h1 className="font-anton text-8xl sm:text-9xl md:text-[10.5rem] text-white tracking-tight leading-none select-none drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)]">
            404
          </h1>

          {/* Movie Quote / Warning Headline */}
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-[#A3E635] tracking-wide uppercase mt-1 mb-2 drop-shadow-md">
            Objects in mirror are closer than they appear!
          </h2>

          {/* Description Subtitle */}
          <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto mb-7 leading-relaxed font-normal drop-shadow-md">
            You accelerated straight into the restricted Jurassic perimeter. The page you are
            hunting for has either been devoured or vanished into prehistoric territory.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 z-20">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 sm:px-9 py-3 rounded-full bg-[#84CC16] hover:bg-[#72b510] text-[#1A2E05] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#84CC16]/30 hover:shadow-[#84CC16]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Floor It (Home)
            </Link>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center px-8 sm:px-9 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider border border-white/25 hover:border-white/40 backdrop-blur-md shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Reverse (Previous)
            </button>
          </div>
        </div>

        {/* ================= BOTTOM STATUS FOOTER ================= */}
        <footer className="w-full max-w-xl shrink-0 flex items-center justify-between text-[10px] sm:text-xs text-neutral-400 border-t border-white/10 pt-3 z-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
            <span>TEMPORAL DRIFT DETECTED</span>
          </div>

          <div className="font-mono tracking-wider text-[#A3E635]">
            SPEED: 124 MPH
          </div>
        </footer>
      </main>
    </>
  );
}

export default NotFoundPage;
