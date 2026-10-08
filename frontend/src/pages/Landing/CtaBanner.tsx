import React from 'react';
import { Link } from 'react-router-dom';

export function CtaBanner() {
  return (
    <section id="cta" className="pb-28 pt-6">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
        <div className="bg-[#84CC16] rounded-[32px] py-16 sm:py-20 px-8 sm:px-12 text-center relative overflow-hidden isolate shadow-lg">
          {/* Decorative Wireframe Hexagons */}
          <svg
            viewBox="0 0 100 100"
            width="220"
            height="220"
            aria-hidden="true"
            className="absolute -left-[50px] -top-[60px] -z-10 pointer-events-none select-none opacity-60"
          >
            <polygon
              points="50,4 93,27 93,73 50,96 7,73 7,27"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="4"
            />
          </svg>

          <svg
            viewBox="0 0 100 100"
            width="180"
            height="180"
            aria-hidden="true"
            className="absolute -right-[30px] -bottom-[50px] -z-10 pointer-events-none select-none opacity-70"
          >
            <polygon
              points="50,4 93,27 93,73 50,96 7,73 7,27"
              fill="#A3E635"
              stroke="#FFFFFF"
              strokeWidth="4"
            />
          </svg>

          {/* Banner Content */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.22] sm:leading-[1.26] tracking-[0.04em] [word-spacing:0.08em] font-extrabold text-[#1A2E05] mb-5">
            Ready to own your identity?
          </h2>
          <p className="text-lg sm:text-[19px] text-[#1A2E05]/90 mb-8 max-w-xl mx-auto font-medium">
            Create your Bharosa ID in minutes. Your keys, your credentials, your rules.
          </p>
          <Link
            to="/app"
            className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full font-bold text-base bg-[#1A2E05] hover:bg-black text-[#FFFFFF] shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Launch App
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
