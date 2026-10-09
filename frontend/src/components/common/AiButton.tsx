import React from 'react';
import '../copilot/copilot-seal.css';

export interface AiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  expandPrompt?: string;
  badgeText?: string;
  state?: 'idle' | 'hover' | 'think';
  size?: 'default' | 'sm';
  showExpand?: boolean;
}

export const AiButton = React.forwardRef<HTMLButtonElement, AiButtonProps>(
  (
    {
      label = 'Ask Bharosa',
      expandPrompt = 'Ask me anything',
      badgeText = 'AI',
      state = 'idle',
      size = 'default',
      showExpand = true,
      className = '',
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(e);
      } else {
        // Dispatch global event so floating Copilot opens from any button
        window.dispatchEvent(new CustomEvent('open-bharosa-copilot'));
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        className={`ai ${size === 'sm' ? 'ai-sm' : ''} ${className}`}
        data-s={state}
        aria-label={props['aria-label'] || `${label}, AI assistant`}
        onClick={handleClick}
        {...props}
      >
        <span className="in">
          <span className="ic">
            <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
              <polygon className="pg" points="20,3 34.7,11.5 34.7,28.5 20,37 5.3,28.5 5.3,11.5" />
              <polygon className="pg pg2" points="20,3 34.7,11.5 34.7,28.5 20,37 5.3,28.5 5.3,11.5" />
              <polygon
                points="20,3 34.7,11.5 34.7,28.5 20,37 5.3,28.5 5.3,11.5"
                style={{ fill: '#1A2E05' }}
              />
              <path
                className="sp"
                d="M20 10.5 L22.4 17.6 L29.5 20 L22.4 22.4 L20 29.5 L17.6 22.4 L10.5 20 L17.6 17.6Z"
              />
              <path
                className="sp2"
                d="M30 8 L31 11 L34 12 L31 13 L30 16 L29 13 L26 12 L29 11Z"
                transform="translate(-4 -3) scale(.8)"
              />
            </svg>
          </span>
          <span className="lbl">{state === 'think' ? 'Thinking' : label}</span>
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          {showExpand && (
            <span className="more">
              {expandPrompt}
              <i className="cr" />
            </span>
          )}
          {badgeText && <span className="chip">{badgeText}</span>}
        </span>
      </button>
    );
  }
);

AiButton.displayName = 'AiButton';
export default AiButton;
