import React, { useMemo } from 'react';
import './loading-page.css';

export interface LoadingPageProps {
  title?: string;
  subtitle?: string;
  note?: string;
  compact?: boolean;
  className?: string;
  steps?: string[];
}

const DEFAULT_STEPS = [
  'Connecting to Polygon Amoy',
  'Resolving your decentralized ID',
  'Checking credentials on-chain',
  'Securing your encryption keys',
];

const FLOATING_PARTICLES = [
  { left: '10%', delay: '0s' },
  { left: '24%', delay: '2.5s' },
  { left: '38%', delay: '5s' },
  { left: '62%', delay: '1.2s' },
  { left: '78%', delay: '3.8s' },
  { left: '90%', delay: '6.4s' },
];

export function LoadingPage({
  title = 'Bharosa',
  subtitle = 'Trust, owned by you.',
  note = 'Your keys never leave your wallet.',
  compact = false,
  className = '',
  steps = DEFAULT_STEPS,
}: LoadingPageProps) {
  // Pre-calculate hexagonal grid cells (memoized once)
  const cells = useMemo(() => {
    const N = 9;
    const s = 44;
    const W = Math.sqrt(3) * s;
    const list: Array<{ style: React.CSSProperties }> = [];

    for (let q = -N; q <= N; q++) {
      for (let r = -N; r <= N; r++) {
        if (Math.max(Math.abs(q), Math.abs(r), Math.abs(-q - r)) > N) continue;
        const x = W * (q + r / 2);
        const y = 1.5 * s * r;
        if (Math.abs(x) > 720 || Math.abs(y) > 640) continue;
        const k = Math.min(1, Math.hypot(x, y) / 760);
        list.push({
          style: {
            left: `${(x - W / 2).toFixed(1)}px`,
            top: `${(y - s).toFixed(1)}px`,
            ['--d' as string]: `${(k * 1.8).toFixed(2)}s`,
            opacity: (1 - k * 0.55).toFixed(2),
          },
        });
      }
    }
    return list;
  }, []);

  return (
    <div
      className={`bharosa-loading ${compact ? 'compact' : ''} ${className}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className="b-sr">Loading {title}. {subtitle}</span>

      {/* Floating background particles */}
      {FLOATING_PARTICLES.map((p, idx) => (
        <i
          key={idx}
          className="b-fp"
          style={{
            left: p.left,
            ['--w' as string]: p.delay,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Center Shield Seal Animation */}
      <div className="b-seal">
        {/* Hexagonal Background Matrix */}
        <div className="b-hc" aria-hidden="true">
          {cells.map((c, i) => (
            <svg
              key={i}
              className="b-hx"
              style={c.style}
              viewBox="0 0 76.2 88"
              width="76.2"
              height="88"
            >
              <polygon points="38.1,1 75.2,22.5 75.2,65.5 38.1,87 1,65.5 1,22.5" />
            </svg>
          ))}
        </div>

        {/* Radial Glow */}
        <div className="b-glow" aria-hidden="true" />

        {/* SVG Holographic Bharosa Shield */}
        <svg
          className="b-sv"
          viewBox="0 0 240 240"
          width="240"
          height="240"
          role="img"
          aria-label="Bharosa seal assembling"
        >
          <defs>
            <linearGradient id="b-ldg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#BEF264" />
              <stop offset="1" stopColor="#65A30D" />
            </linearGradient>
            <linearGradient id="b-lds" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <clipPath id="b-ldc">
              <polygon points="120,48 182.4,84 182.4,156 120,192 57.6,156 57.6,84" />
            </clipPath>
          </defs>

          {/* Orbiting dashed perimeter */}
          <circle
            className="b-orb"
            cx="120"
            cy="120"
            r="112"
            fill="none"
            stroke="#84CC16"
            strokeWidth="1.5"
            strokeDasharray="2 9"
            strokeLinecap="round"
          />

          {/* Pulse wave polygon */}
          <polygon
            className="b-pls"
            points="120,30 197.9,75 197.9,165 120,210 42.1,165 42.1,75"
            fill="none"
            stroke="#84CC16"
            strokeWidth="2"
          />

          {/* Drawing outer contour polygon */}
          <polygon
            className="b-out"
            points="120,30 197.9,75 197.9,165 120,210 42.1,165 42.1,75"
            fill="none"
            stroke="#65A30D"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeDasharray="540"
          />

          {/* Inner holographic faceted shield with scan beam */}
          <g className="b-sf">
            <polygon
              points="120,48 182.4,84 182.4,156 120,192 57.6,156 57.6,84"
              fill="url(#b-ldg)"
            />
            <g clipPath="url(#b-ldc)">
              <rect
                className="b-scn"
                x="57"
                y="40"
                width="126"
                height="60"
                fill="url(#b-lds)"
              />
            </g>
          </g>

          {/* Drawn Checkmark */}
          <path
            className="b-ck"
            d="M88 122 L110 144 L152 98"
            fill="none"
            stroke="#1A2E05"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="95"
          />

          {/* Corner anchor nodes */}
          <circle className="b-nd" cx="120" cy="30" r="6" style={{ animationDelay: '0s' }} />
          <circle className="b-nd" cx="197.9" cy="75" r="6" style={{ animationDelay: '0.08s' }} />
          <circle className="b-nd" cx="197.9" cy="165" r="6" style={{ animationDelay: '0.16s' }} />
          <circle className="b-nd" cx="120" cy="210" r="6" style={{ animationDelay: '0.24s' }} />
          <circle className="b-nd" cx="42.1" cy="165" r="6" style={{ animationDelay: '0.32s' }} />
          <circle className="b-nd" cx="42.1" cy="75" r="6" style={{ animationDelay: '0.4s' }} />
        </svg>
      </div>

      {/* Typography */}
      <div className="b-wm">{title}</div>
      <div className="b-tg">{subtitle}</div>

      {/* Verification Sequence Steps */}
      <div className="b-steps">
        {steps.map((step, idx) => {
          const stepNum = (idx % 4) + 1;
          const spinVar = `b-s${stepNum}`;
          const checkVar = `b-c${stepNum}`;

          return (
            <div key={idx} className="b-row">
              <span className="b-ico">
                <i
                  className="b-spin"
                  style={{ ['--sn' as string]: spinVar }}
                />
                <i
                  className="b-dn"
                  style={{ ['--cn' as string]: checkVar }}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </i>
              </span>
              <span>{step}</span>
            </div>
          );
        })}
      </div>

      {/* Shimmering Progress Bar */}
      <div className="b-bar" aria-hidden="true">
        <i />
      </div>

      {/* Security Reassurance Note */}
      <div className="b-note">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
        </svg>
        <span>{note}</span>
      </div>
    </div>
  );
}

export default LoadingPage;
