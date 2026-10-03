import React from 'react';

/**
 * DinoChaseScene - A high-speed 60fps animated vector scene where a T-Rex chases
 * the DeLorean time machine at 88mph through a glowing temporal rift.
 * Rendered with hardware-accelerated SVG and CSS keyframes for crisp Retina scaling.
 */
export function DinoChaseScene() {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center justify-center relative select-none">
      {/* Dynamic inline styles for smooth keyframe animations */}
      <style>{`
        @keyframes carBounce {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-1.5px) rotate(-0.5deg); }
          50% { transform: translateY(1px) rotate(0.3deg); }
          75% { transform: translateY(-0.8px) rotate(-0.2deg); }
        }

        @keyframes wheelSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes portalVortex {
          0% { transform: rotate(0deg) scale(1); opacity: 0.9; }
          50% { transform: rotate(180deg) scale(1.06); opacity: 1; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.9; }
        }

        @keyframes portalPulse {
          0%, 100% { filter: drop-shadow(0 0 16px rgba(132, 204, 22, 0.7)); }
          50% { filter: drop-shadow(0 0 28px rgba(16, 185, 129, 0.95)); }
        }

        @keyframes dinoSprint {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-4px) rotate(-1.5deg); }
          50% { transform: translateY(1px) rotate(1deg); }
          75% { transform: translateY(-3px) rotate(-0.5deg); }
        }

        @keyframes dinoLegLeft {
          0% { transform: rotate(20deg); }
          50% { transform: rotate(-25deg); }
          100% { transform: rotate(20deg); }
        }

        @keyframes dinoLegRight {
          0% { transform: rotate(-25deg); }
          50% { transform: rotate(20deg); }
          100% { transform: rotate(-25deg); }
        }

        @keyframes dinoTail {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-6deg); }
        }

        @keyframes dinoJaw {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes speedLine {
          0% { transform: translateX(120px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 0.9; }
          100% { transform: translateX(-160px); opacity: 0; }
        }

        @keyframes fireTrail {
          0%, 100% { opacity: 0.8; transform: scaleX(1); }
          50% { opacity: 1; transform: scaleX(1.15); }
        }

        @keyframes sparkFlicker {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        .anim-car { animation: carBounce 0.18s infinite ease-in-out; }
        .anim-wheel { animation: wheelSpin 0.35s infinite linear; transform-origin: center; }
        .anim-portal-vortex { animation: portalVortex 4s infinite linear; transform-origin: 395px 145px; }
        .anim-portal-glow { animation: portalPulse 2s infinite ease-in-out; }
        .anim-dino { animation: dinoSprint 0.36s infinite ease-in-out; }
        .anim-dino-leg-l { animation: dinoLegLeft 0.36s infinite ease-in-out; transform-origin: 585px 180px; }
        .anim-dino-leg-r { animation: dinoLegRight 0.36s infinite ease-in-out; transform-origin: 615px 178px; }
        .anim-dino-tail { animation: dinoTail 0.72s infinite ease-in-out; transform-origin: 670px 140px; }
        .anim-dino-jaw { animation: dinoJaw 0.72s infinite ease-in-out; transform-origin: 535px 105px; }
        .anim-fire { animation: fireTrail 0.22s infinite ease-in-out; transform-origin: right center; }
        .anim-spark { animation: sparkFlicker 0.12s infinite alternate; }
        .anim-speed-1 { animation: speedLine 0.7s infinite linear; }
        .anim-speed-2 { animation: speedLine 0.5s infinite linear 0.18s; }
        .anim-speed-3 { animation: speedLine 0.85s infinite linear 0.35s; }
        .anim-speed-4 { animation: speedLine 0.6s infinite linear 0.5s; }
      `}</style>

      {/* SVG Animation Stage */}
      <svg
        viewBox="0 0 800 240"
        className="w-full h-auto max-h-[34vh] sm:max-h-[38vh] overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="portalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#84CC16" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ECFCCB" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="fireGrad" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#FBBF24" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#84CC16" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="dinoBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="60%" stopColor="#15803D" />
            <stop offset="100%" stopColor="#14532D" />
          </linearGradient>

          <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A7F3D0" />
            <stop offset="50%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>

        {/* ---------------- GROUND TRACK ---------------- */}
        <line x1="20" y1="210" x2="780" y2="210" stroke="#E2E8F0" strokeWidth="2.5" strokeDasharray="14 10" />

        {/* High Speed Wind Lines */}
        <g className="anim-speed-1" opacity="0.6">
          <line x1="320" y1="90" x2="220" y2="90" stroke="#84CC16" strokeWidth="2" strokeLinecap="round" />
          <line x1="500" y1="65" x2="430" y2="65" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <g className="anim-speed-2" opacity="0.5">
          <line x1="280" y1="125" x2="180" y2="125" stroke="#84CC16" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="680" y1="75" x2="590" y2="75" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <g className="anim-speed-3" opacity="0.7">
          <line x1="360" y1="170" x2="270" y2="170" stroke="#65A30D" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g className="anim-speed-4" opacity="0.4">
          <line x1="450" y1="195" x2="350" y2="195" stroke="#84CC16" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* ---------------- TIME PORTAL (CENTER) ---------------- */}
        <g className="anim-portal-glow">
          {/* Outer glowing aura rings */}
          <ellipse cx="395" cy="145" rx="58" ry="72" fill="#ECFCCB" fillOpacity="0.4" />
          <ellipse cx="395" cy="145" rx="46" ry="60" stroke="#A3E635" strokeWidth="3" opacity="0.6" strokeDasharray="12 6" />

          {/* Rotating temporal vortex spiral */}
          <g className="anim-portal-vortex">
            <ellipse cx="395" cy="145" rx="36" ry="50" stroke="url(#portalGrad)" strokeWidth="6" />
            <ellipse cx="395" cy="145" rx="24" ry="34" stroke="#10B981" strokeWidth="5" strokeDasharray="8 4" />
            <ellipse cx="395" cy="145" rx="14" ry="20" fill="#FFFFFF" fillOpacity="0.85" />
            {/* Swirling energy strands */}
            <path d="M395 110 Q425 145 395 180" stroke="#84CC16" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M375 145 Q395 125 415 145" stroke="#ECFCCB" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>

          {/* Temporal electricity arcs */}
          <path className="anim-spark" d="M360 120 L370 128 L362 135 L375 142" stroke="#6EE7B7" strokeWidth="2" fill="none" />
          <path className="anim-spark" d="M428 130 L420 138 L430 146 L422 154" stroke="#FDE047" strokeWidth="2" fill="none" />
        </g>

        {/* ---------------- DELOREAN TIME MACHINE (LEFT) ---------------- */}
        <g className="anim-car">
          {/* Flame trails behind tires (88 mph fire trail) */}
          <g className="anim-fire">
            <path d="M190 206 L280 207 Q310 207 330 208 L280 209 Z" fill="url(#fireGrad)" />
            <path d="M110 206 L175 207 Q200 207 220 208 L175 209 Z" fill="url(#fireGrad)" opacity="0.8" />
          </g>

          {/* Car chassis / shadow */}
          <ellipse cx="140" cy="208" rx="75" ry="5" fill="#CBD5E1" opacity="0.5" />

          {/* Car Lower Body */}
          <path
            d="M60 192 L75 168 L105 165 L125 142 L185 142 L205 165 L225 174 L225 192 L215 198 L68 198 Z"
            fill="url(#carBodyGrad)"
            stroke="#064E3B"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Hood slope & front bumper */}
          <path d="M60 192 L62 182 L75 174 L105 170" stroke="#047857" strokeWidth="2" fill="none" />

          {/* Front Bumper & Headlights (pointing forward / left) */}
          <rect x="56" y="180" width="8" height="14" rx="2" fill="#064E3B" />
          <rect x="58" y="182" width="4" height="4" rx="1" fill="#FEF08A" />
          {/* Headlight beam */}
          <polygon points="56,184 10,175 10,205 56,192" fill="#FEF08A" fillOpacity="0.25" />

          {/* Cabin Windshield and Windows */}
          <path
            d="M123 164 L138 145 L178 145 L198 164 Z"
            fill="#D1FAE5"
            stroke="#064E3B"
            strokeWidth="2"
          />
          <line x1="160" y1="145" x2="160" y2="164" stroke="#064E3B" strokeWidth="2" />

          {/* Flux Capacitor Vent & Nuclear Reactor on Back */}
          <rect x="186" y="134" width="12" height="10" rx="2" fill="#047857" stroke="#064E3B" strokeWidth="1.5" />
          <line x1="192" y1="134" x2="192" y2="126" stroke="#064E3B" strokeWidth="2" />
          <circle cx="192" cy="125" r="2.5" fill="#EF4444" className="anim-spark" />

          {/* Car Accent Stripes */}
          <line x1="72" y1="184" x2="220" y2="184" stroke="#064E3B" strokeWidth="2" />
          <line x1="74" y1="188" x2="218" y2="188" stroke="#84CC16" strokeWidth="2" />

          {/* Wheels (Spinning) */}
          {/* Front Wheel */}
          <g transform="translate(95, 196)">
            <circle cx="0" cy="0" r="14" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            <circle cx="0" cy="0" r="9" fill="#94A3B8" />
            <g className="anim-wheel">
              <circle cx="0" cy="0" r="5" fill="#475569" />
              <line x1="-8" y1="0" x2="8" y2="0" stroke="#0F172A" strokeWidth="2" />
              <line x1="0" y1="-8" x2="0" y2="8" stroke="#0F172A" strokeWidth="2" />
            </g>
          </g>

          {/* Rear Wheel */}
          <g transform="translate(190, 196)">
            <circle cx="0" cy="0" r="14" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            <circle cx="0" cy="0" r="9" fill="#94A3B8" />
            <g className="anim-wheel">
              <circle cx="0" cy="0" r="5" fill="#475569" />
              <line x1="-8" y1="0" x2="8" y2="0" stroke="#0F172A" strokeWidth="2" />
              <line x1="0" y1="-8" x2="0" y2="8" stroke="#0F172A" strokeWidth="2" />
            </g>
          </g>
        </g>

        {/* ---------------- T-REX DINOSAUR (RIGHT) ---------------- */}
        <g>
          {/* Dino Shadow */}
          <ellipse cx="600" cy="209" rx="65" ry="6" fill="#CBD5E1" opacity="0.5" />

          {/* Dino Animated Body Group */}
          <g className="anim-dino">
            {/* Tail (Swaying) */}
            <g className="anim-dino-tail">
              <path
                d="M660 145 Q710 135 750 115 Q730 145 680 162 Z"
                fill="url(#dinoBodyGrad)"
                stroke="#14532D"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </g>

            {/* Main Torso & Belly */}
            <path
              d="M560 120 Q600 110 655 125 Q675 145 665 175 Q635 190 585 185 Q550 175 545 145 Q545 130 560 120 Z"
              fill="url(#dinoBodyGrad)"
              stroke="#14532D"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Belly highlight */}
            <path
              d="M570 135 Q595 130 635 140 Q645 160 635 178 Q600 182 575 172 Z"
              fill="#86EFAC"
              opacity="0.35"
            />

            {/* Dino Head & Snout */}
            <path
              d="M560 125 L550 95 Q545 80 520 78 L495 82 Q480 86 480 100 L482 114 Q492 120 525 120 L545 135 Z"
              fill="url(#dinoBodyGrad)"
              stroke="#14532D"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Dino Teeth (Upper) */}
            <polygon points="488,114 492,120 496,114" fill="#FFFFFF" stroke="#14532D" strokeWidth="1" />
            <polygon points="498,114 502,120 506,114" fill="#FFFFFF" stroke="#14532D" strokeWidth="1" />
            <polygon points="508,114 512,120 516,114" fill="#FFFFFF" stroke="#14532D" strokeWidth="1" />

            {/* Animated Snapping Lower Jaw */}
            <g className="anim-dino-jaw">
              <path
                d="M525 120 L488 120 Q485 130 500 134 L532 130 Z"
                fill="#15803D"
                stroke="#14532D"
                strokeWidth="2"
              />
              {/* Lower Teeth */}
              <polygon points="492,120 495,115 498,120" fill="#FFFFFF" />
              <polygon points="502,120 505,115 508,120" fill="#FFFFFF" />
            </g>

            {/* Glowing Eye */}
            <circle cx="508" cy="94" r="5" fill="#FEF08A" stroke="#14532D" strokeWidth="1.5" />
            <circle cx="506.5" cy="94" r="2.5" fill="#14532D" />

            {/* Tiny T-Rex Arms (Chasing pose) */}
            <g>
              <path d="M548 145 Q532 148 528 156" stroke="#14532D" strokeWidth="5" strokeLinecap="round" />
              <path d="M528 156 L522 153" stroke="#14532D" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M528 156 L522 158" stroke="#14532D" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </g>

          {/* Left Leg (Animated Sprint Pivot) */}
          <g className="anim-dino-leg-l">
            <path
              d="M580 170 Q575 192 562 205 L550 205 Q565 200 580 170 Z"
              fill="#15803D"
              stroke="#14532D"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Left Foot & Claws */}
            <polygon points="550,205 540,207 554,203" fill="#14532D" />
            <polygon points="554,205 545,208 558,203" fill="#14532D" />
          </g>

          {/* Right Leg (Animated Sprint Pivot) */}
          <g className="anim-dino-leg-r">
            <path
              d="M625 170 Q628 194 645 204 L658 204 Q642 195 625 170 Z"
              fill="#14532D"
              stroke="#052E16"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Right Foot & Claws */}
            <polygon points="646,204 656,207 644,202" fill="#052E16" />
            <polygon points="650,204 660,208 648,202" fill="#052E16" />
          </g>

          {/* Dust clouds popping behind dinosaur feet */}
          <circle cx="658" cy="207" r="4" fill="#CBD5E1" className="anim-spark" opacity="0.6" />
          <circle cx="664" cy="205" r="3" fill="#CBD5E1" className="anim-spark" opacity="0.5" />
        </g>
      </svg>

      {/* Speed & Temporal Pursuit Indicator */}
      <div className="mt-1 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#4D6B2A] bg-[#ECFCCB]/80 px-3.5 py-1 rounded-full border border-[#D9F99D] shadow-2xs">
        <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-ping" />
        <span>88.0 MPH — Temporal Pursuit in Progress</span>
      </div>
    </div>
  );
}

export default DinoChaseScene;
