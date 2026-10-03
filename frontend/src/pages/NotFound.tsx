import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { DinoChaseScene } from '../components/404/DinoChaseScene';

export function NotFoundPage() {
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <>
      <PageMeta
        title="404 - Page Not Found | Bharosa Protocol"
        description="The cryptographic resource or interface path you are navigating to could not be found."
      />

      <main className="h-screen h-[100dvh] w-full bg-white text-[#1A2E05] overflow-hidden flex flex-col justify-between items-center px-4 py-4 sm:py-6 relative font-sans selection:bg-[#84CC16] selection:text-[#1A2E05]">
        {/* Subtle decorative pterodactyls in the sky */}
        <svg
          className="absolute top-6 left-8 sm:left-16 w-8 h-8 text-[#84CC16]/25 pointer-events-none select-none"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2.5 7.5C5 6 8 8 10 9c2-1 5-3 7.5-1.5-.5 1.5-2 2-3.5 2 2 .5 3.5 1.5 4.5 3-2-.5-4-1-6-1-1.5 2-3 4-4.5 6 .5-2 1-4 1.5-6-2.5 0-4.5.5-6.5-1.5z" />
        </svg>
        <svg
          className="absolute top-10 right-8 sm:right-20 w-7 h-7 text-[#84CC16]/25 pointer-events-none select-none"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2.5 7.5C5 6 8 8 10 9c2-1 5-3 7.5-1.5-.5 1.5-2 2-3.5 2 2 .5 3.5 1.5 4.5 3-2-.5-4-1-6-1-1.5 2-3 4-4.5 6 .5-2 1-4 1.5-6-2.5 0-4.5.5-6.5-1.5z" />
        </svg>

        {/* Top Brand Logo */}
        <header className="shrink-0 pt-1">
          <Link to="/" className="inline-flex items-center gap-2.5 group">
            <img
              src="/logos/bharosa-mark.png"
              alt="Bharosa Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-anton text-xl sm:text-2xl tracking-wide text-[#1A2E05] uppercase">
              Bharosa
            </span>
          </Link>
        </header>

        {/* Center Content: Headline, Description & Actions */}
        <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto shrink-0 my-auto px-2">
          {/* Large 404 Headline */}
          <h1 className="font-anton text-7xl sm:text-8xl md:text-9xl text-[#1A2E05] tracking-tight leading-none select-none">
            404
          </h1>

          {/* Humorous Time-Travel Subtitle */}
          <p className="text-xs sm:text-sm text-[#4D6B2A] max-w-md mx-auto mt-2 mb-6 leading-relaxed font-medium">
            It looks like you were traveling the decentralized web at exactly 88mph. While we work
            on powering your browser back to 1.21 Gigawatts, please visit the buttons below...
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 z-10">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#84CC16] hover:bg-[#72b510] text-[#1A2E05] font-extrabold text-xs uppercase tracking-wider shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Go to Home
            </Link>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center px-7 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white hover:bg-[#F7FBEF] text-[#1A2E05] font-extrabold text-xs uppercase tracking-wider border border-[#D9F99D] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Previous Page
            </button>
          </div>
        </div>

        {/* Bottom DeLorean, Time Portal & Dinosaur Animated Chase */}
        <div className="w-full flex items-end justify-center shrink min-h-0 pb-1">
          {!videoError && (
            <video
              src="/videos/dino-chase.mp4"
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => setVideoError(true)}
              className={`max-h-[32vh] sm:max-h-[38vh] w-auto object-contain select-none pointer-events-none rounded-xl ${
                videoLoaded ? 'block' : 'hidden'
              }`}
            />
          )}

          {/* High-speed vector animated chase scene (active when no video file is provided) */}
          {!videoLoaded && <DinoChaseScene />}
        </div>
      </main>
    </>
  );
}

export default NotFoundPage;
