import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
  textSize?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 38,
  showText = true,
  className = '',
  textSize = 'text-[26px]',
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        role="img"
        aria-label="Bharosa logo"
        className="shrink-0 transition-transform group-hover:scale-105 duration-200"
      >
        {/* Outer Hexagon Outline */}
        <polygon
          points="60,8 105,34 105,86 60,112 15,86 15,34"
          fill="none"
          stroke="rgb(var(--primary-hover))"
          strokeWidth="4"
        />
        {/* Inner Solid Lime Hexagon */}
        <polygon
          points="60,20 94.6,40 94.6,80 60,100 25.4,80 25.4,40"
          fill="rgb(var(--primary))"
        />
        {/* Dark Checkmark on Lime */}
        <path
          d="M41 61 L55 75 L81 46"
          fill="none"
          stroke="rgb(var(--on-primary))"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showText && (
        <span className={`font-extrabold tracking-tight text-fg transition-colors ${textSize}`}>
          Bharosa
        </span>
      )}
    </div>
  );
};

export default Logo;
