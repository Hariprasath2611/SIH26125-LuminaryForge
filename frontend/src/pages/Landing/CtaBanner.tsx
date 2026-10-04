import React from 'react';
import { Link } from 'react-router-dom';

export function CtaBanner() {
  return (
    <section id="cta" className="pb-28 pt-6 transition-colors">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
        <div className="bg-primary rounded-[32px] py-16 sm:py-20 px-8 sm:px-12 text-center relative overflow-hidden isolate shadow-lg">
          {/* Decorative Wireframe Hexagons */}
          <svg
            viewBox="0 0 100 100"
            width="220"
            height="220"
            aria-hidden="true"
            className="absolute -left-[50px] -top-[60px] -z-10 pointer-events-none select-none opacity-40"
          >
            <polygon
              points="50,4 93,27 93,73 50,96 7,73 7,27"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-on-primary"
            />
          </svg>

          <svg
            viewBox="0 0 100 100"
            width="180"
            height="180"
            aria-hidden="true"
            className="absolute -right-[30px] -bottom-[50px] -z-10 pointer-events-none select-none opacity-30"
          >
            <polygon
              points="50,4 93,27 93,73 50,96 7,73 7,27"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="4"
              className="text-primary-hover"
            />
          </svg>

          {/* Banner Content */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] tracking-tight font-extrabold text-on-primary mb-4">
            Ready to own your identity?
          </h2>
          <p className="text-lg sm:text-[19px] text-on-primary/90 mb-8 max-w-xl mx-auto font-medium">
            Create your Bharosa ID in minutes. Your keys, your credentials, your rules.
          </p>
          <Link
            to="/app"
            className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full font-bold text-base bg-[#1A2E05] hover:bg-[#0B1207] text-[#FFFFFF] shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Launch App
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
