import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageMeta
        title="404 - Page Not Found | Bharosa Protocol"
        description="The cryptographic resource or interface path you are navigating to could not be found."
      />

      <div className="min-h-screen w-full bg-gradient-to-br from-[#A3E635]/25 via-[#ECFCCB]/45 to-[#10B981]/20 flex items-center justify-center p-4 sm:p-6 lg:p-10 font-sans selection:bg-[#84CC16] selection:text-[#1A2E05]">
        {/* Floating White Card */}
        <div className="max-w-4xl w-full bg-[#FFFFFF] rounded-3xl sm:rounded-[36px] shadow-2xl shadow-[#84CC16]/15 border border-white/80 p-6 sm:p-10 lg:p-12 text-center relative overflow-hidden flex flex-col items-center justify-between animate-in fade-in zoom-in-95 duration-300">
          {/* Subtle Background Decorative Birds / Pterodactyls in Corners */}
          <svg
            className="absolute top-8 left-8 w-12 h-12 text-[#84CC16]/20 pointer-events-none select-none"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2.5 7.5C5 6 8 8 10 9c2-1 5-3 7.5-1.5-.5 1.5-2 2-3.5 2 2 .5 3.5 1.5 4.5 3-2-.5-4-1-6-1-1.5 2-3 4-4.5 6 .5-2 1-4 1.5-6-2.5 0-4.5.5-6.5-1.5z" />
          </svg>
          <svg
            className="absolute top-12 right-10 w-10 h-10 text-[#84CC16]/20 pointer-events-none select-none"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2.5 7.5C5 6 8 8 10 9c2-1 5-3 7.5-1.5-.5 1.5-2 2-3.5 2 2 .5 3.5 1.5 4.5 3-2-.5-4-1-6-1-1.5 2-3 4-4.5 6 .5-2 1-4 1.5-6-2.5 0-4.5.5-6.5-1.5z" />
          </svg>

          {/* Top Brand Logo */}
          <Link to="/" className="inline-flex items-center gap-2.5 group mb-3">
            <img
              src="/logos/bharosa-mark.png"
              alt="Bharosa Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-anton text-xl sm:text-2xl tracking-wide text-[#1A2E05] uppercase">
              Bharosa
            </span>
          </Link>

          {/* Large 404 Headline using Anton SC brand font */}
          <h1 className="font-anton text-7xl sm:text-8xl lg:text-9xl text-[#1A2E05] tracking-tight leading-none my-1 select-none">
            404
          </h1>

          {/* Humorous / Time-Travel Subtitle */}
          <p className="text-xs sm:text-sm text-[#4D6B2A] max-w-lg mx-auto mb-7 leading-relaxed font-medium">
            It looks like you were traveling the decentralized web at exactly 88mph. While we work
            on powering your browser back to 1.21 Gigawatts, please visit the buttons below...
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 z-10">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#84CC16] hover:bg-[#72b510] text-[#1A2E05] font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Go to Home
            </Link>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white hover:bg-neutral-50 text-[#1A2E05] font-extrabold text-xs uppercase tracking-wider border border-neutral-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Previous Page
            </button>
          </div>

          {/* DeLorean, Time Portal & Dinosaur Illustration */}
          <div className="w-full max-w-2xl mt-4 flex items-center justify-center">
            <img
              src="/images/404-time-travel.jpg"
              alt="404 Time Travel DeLorean and Dinosaur"
              className="w-full h-auto object-contain select-none pointer-events-none rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
