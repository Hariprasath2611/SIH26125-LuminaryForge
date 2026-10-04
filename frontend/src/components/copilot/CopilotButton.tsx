import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './copilot-seal.css';

interface CopilotButtonProps {
  isOpen?: boolean;
  onClick?: () => void;
  unreadCount?: number;
}

type Corner = 'br' | 'bl' | 'tl' | 'tr';

const CORNERS: Corner[] = ['br', 'bl', 'tl', 'tr'];

const KB: [RegExp, string, { label: string; route: string } | null][] = [
  [
    /revoke|remove access|stop sharing|take back/i,
    'Open Access Control, find the grant under Active grants, and choose Revoke. Future access is blocked straight away. A copy someone already downloaded cannot be taken back, so re-encrypt sensitive files with a new key.',
    { label: 'Open Access Control', route: '/access' },
  ],
  [
    /verif|check.*credential|validate/i,
    "Open the Verifier Console and paste the credential link or scan its QR code. Bharosa checks four things: the issuer's signature, that the issuer is trusted on-chain, that the hash matches the on-chain record, and that it has not been revoked or expired.",
    { label: 'Open Verifier Console', route: '/verifier' },
  ],
  [
    /grant|access|share|employer|permission/i,
    "Go to Access Control, pick the asset, enter the person's address, choose a role and purpose, and set a start and end time. You review it and sign in your wallet. You can revoke it at any time.",
    { label: 'Open Access Control', route: '/access' },
  ],
  [
    /zk|zero|proof|prove|privacy|without showing/i,
    'A zero-knowledge proof lets you prove a fact, such as "my CGPA is above 8", without showing the document. Choose a credential and a claim, and your browser generates the proof. The verifier only learns that the statement is true.',
    { label: 'Open ZK Proofs', route: '/zk' },
  ],
  [
    /lost|recover|guardian|seed|private key|wallet/i,
    'Social recovery lets trusted guardians help you regain access. Set your guardians and threshold in Recovery. If you lose your wallet, guardians approve a new address, and a waiting period lets you cancel any attack. Never share your seed phrase with anyone, including me.',
    { label: 'Open Recovery', route: '/recovery' },
  ],
  [
    /encrypt|ipfs|upload|file|asset|document/i,
    'Files are encrypted in your browser with AES-256 before upload. The encrypted file goes to IPFS, and only its hash and address are recorded on the blockchain. Nobody can read the file without the key you share.',
    { label: 'Open Assets', route: '/assets' },
  ],
  [
    /security|alert|suspicious|attack/i,
    'The Security Center flags unusual activity, such as many access requests in a short time or very long grants, and suggests what to do next.',
    { label: 'Open Security Center', route: '/security' },
  ],
  [
    /what is|about|who are|bharosa|how does it work/i,
    'Bharosa lets you own your identity, prove it instantly, and share documents with full control, with no central database to breach and no certificate to forge.',
    null,
  ],
  [
    /^(hi|hello|hey|namaste|vanakkam)\b/i,
    'Hello! Ask me how to verify a credential, grant access, create a proof, or recover a wallet.',
    null,
  ],
];

interface ChatMsg {
  role: 'user' | 'bot';
  text: string;
  action?: { label: string; route: string } | null;
  feedback?: 'helpful' | 'unhelpful';
}

export const CopilotButton: React.FC<CopilotButtonProps> = ({
  isOpen: externalIsOpen,
  onClick: externalOnClick,
}) => {
  const navigate = useNavigate();
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const [corner, setCorner] = useState<Corner>(() => {
    try {
      const saved = localStorage.getItem('bharosa-ai-corner');
      if (saved && CORNERS.includes(saved as Corner)) return saved as Corner;
    } catch (_) {}
    return 'br';
  });

  const [state, setState] = useState<'idle' | 'thinking'>('idle');
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [nudgeText, setNudgeText] = useState<string | null>(null);
  const [toastText, setToastText] = useState<string | null>(null);
  const [isWiggling, setIsWiggling] = useState(false);
  const [isCalm, setIsCalm] = useState(true);

  // Chat state
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const msgsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragRef = useRef<{ sx: number; sy: number; ox: number; oy: number; id: number } | null>(null);
  const movedRef = useRef(false);
  const suppressClickRef = useRef(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const nudgeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastMouseRef = useRef<PointerEvent | MouseEvent | null>(null);

  // Calculate default corner coordinates
  const getCornerCoords = useCallback((c: Corner) => {
    const w = document.documentElement.clientWidth;
    const h = document.documentElement.clientHeight;
    const m = window.innerWidth <= 520 ? 12 : 20;
    return {
      x: c.charAt(1) === 'l' ? m : w - 96 - m,
      y: c.charAt(0) === 't' ? m : h - 96 - m,
    };
  }, []);

  // Update corner and save to localStorage
  const applyCorner = useCallback(
    (c: Corner) => {
      setCorner(c);
      const coords = getCornerCoords(c);
      setPosition(coords);
      try {
        localStorage.setItem('bharosa-ai-corner', c);
      } catch (_) {}
    },
    [getCornerCoords]
  );

  useEffect(() => {
    applyCorner(corner);
    const handleResize = () => applyCorner(corner);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [corner, applyCorner]);

  // Nudge tooltip helper
  const showNudge = useCallback((text: string, ms = 5500) => {
    if (isOpen || isDragging) return;
    setNudgeText(text);
    if (nudgeTimerRef.current) clearTimeout(nudgeTimerRef.current);
    nudgeTimerRef.current = setTimeout(() => {
      setNudgeText(null);
    }, ms);
  }, [isOpen, isDragging]);

  const hideNudge = useCallback(() => {
    setNudgeText(null);
  }, []);

  // Idle timer to trigger playful wiggle
  const resetIdle = useCallback(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      if (!isOpen) {
        setIsWiggling(true);
        setTimeout(() => setIsWiggling(false), 950);
      }
    }, 25000);
  }, [isOpen]);

  useEffect(() => {
    resetIdle();
    const handleActivity = () => resetIdle();
    window.addEventListener('pointerdown', handleActivity);
    window.addEventListener('keydown', handleActivity);
    return () => {
      window.removeEventListener('pointerdown', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [resetIdle]);

  // Initial welcome nudge
  useEffect(() => {
    const timer = setTimeout(() => {
      showNudge('Need a hand?');
    }, 1800);
    return () => clearTimeout(timer);
  }, [showNudge]);

  // Scroll observer for elements with [data-copilot-tip]
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const seen = new WeakSet();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && !seen.has(en.target)) {
            seen.add(en.target);
            const tip = en.target.getAttribute('data-copilot-tip');
            if (tip) showNudge(tip);
          }
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll('[data-copilot-tip]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [showNudge]);

  // Magnetic 3D tilt tracking
  const applyTilt = useCallback(() => {
    rafRef.current = null;
    const event = lastMouseRef.current;
    if (!event || isDragging || !btnRef.current || !tiltRef.current || !rootRef.current) return;

    const r = btnRef.current.getBoundingClientRect();
    const dx = event.clientX - (r.left + 48);
    const dy = event.clientY - (r.top + 48);
    const d = Math.hypot(dx, dy);

    const k = d < 240 ? (240 - d) / 240 : 0;
    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

    setIsCalm(false);
    tiltRef.current.style.setProperty('--mx', `${clamp(dx * 0.12, -10, 10) * k}px`);
    tiltRef.current.style.setProperty('--my', `${clamp(dy * 0.12, -10, 10) * k}px`);
    tiltRef.current.style.setProperty('--ry', `${d < 420 ? clamp(dx / 18, -16, 16) : 0}deg`);
    tiltRef.current.style.setProperty('--rx', `${d < 420 ? clamp(-dy / 18, -16, 16) : 0}deg`);
    rootRef.current.style.setProperty('--ex', `${clamp(dx / 28, -4, 4)}px`);
    rootRef.current.style.setProperty('--ey', `${clamp(dy / 28, -4, 4)}px`);
  }, [isDragging]);

  const relaxTilt = useCallback(() => {
    setIsCalm(true);
    if (tiltRef.current) {
      tiltRef.current.style.setProperty('--mx', '0px');
      tiltRef.current.style.setProperty('--my', '0px');
      tiltRef.current.style.setProperty('--rx', '0deg');
      tiltRef.current.style.setProperty('--ry', '0deg');
    }
    if (rootRef.current) {
      rootRef.current.style.setProperty('--ex', '0px');
      rootRef.current.style.setProperty('--ey', '0px');
    }
  }, []);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      lastMouseRef.current = e;
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(applyTilt);
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) relaxTilt();
    };

    window.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseout', handleMouseOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [applyTilt, relaxTilt]);

  // Click burst of mini hexagon particles
  const burstParticles = useCallback(() => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    const cx = r.left + 48;
    const cy = r.top + 48;

    for (let i = 0; i < 9; i++) {
      const p = document.createElement('i');
      p.className = 'ab-p';
      p.style.left = `${cx}px`;
      p.style.top = `${cy}px`;
      document.body.appendChild(p);

      const a = (i / 9) * Math.PI * 2 + Math.random() * 0.4;
      const dist = 50 + Math.random() * 40;

      const anim = p.animate(
        [
          { transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
          {
            transform: `translate(calc(-50% + ${Math.cos(a) * dist}px), calc(-50% + ${
              Math.sin(a) * dist
            }px)) scale(.2) rotate(120deg)`,
            opacity: 0,
          },
        ],
        { duration: 650 + Math.random() * 250, easing: 'cubic-bezier(.2,.8,.3,1)' }
      );
      anim.onfinish = () => p.remove();
    }
  }, []);

  // Dragging support
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    const r = rootRef.current?.getBoundingClientRect();
    if (!r) return;
    dragRef.current = { sx: e.clientX, sy: e.clientY, ox: r.left, oy: r.top, id: e.pointerId };
    movedRef.current = false;
    resetIdle();
  };

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (!dragRef.current) return;
      const dx = e.clientX - dragRef.current.sx;
      const dy = e.clientY - dragRef.current.sy;
      if (!movedRef.current && Math.hypot(dx, dy) > 6) {
        movedRef.current = true;
        setIsDragging(true);
        hideNudge();
      }
      if (movedRef.current) {
        const w = document.documentElement.clientWidth;
        const h = document.documentElement.clientHeight;
        const nx = Math.max(4, Math.min(w - 100, dragRef.current.ox + dx));
        const ny = Math.max(4, Math.min(h - 100, dragRef.current.oy + dy));
        setPosition({ x: nx, y: ny });
      }
    };

    const handleUp = () => {
      if (dragRef.current && movedRef.current && position) {
        const w = document.documentElement.clientWidth;
        const h = document.documentElement.clientHeight;
        const newCorner: Corner = `${position.y + 48 < h / 2 ? 't' : 'b'}${
          position.x + 48 < w / 2 ? 'l' : 'r'
        }` as Corner;
        applyCorner(newCorner);
        suppressClickRef.current = true;
        setTimeout(() => {
          suppressClickRef.current = false;
        }, 50);
      }
      setIsDragging(false);
      dragRef.current = null;
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
    };
  }, [position, applyCorner, hideNudge]);

  // Open / Close Toggle
  const togglePanel = useCallback(() => {
    if (suppressClickRef.current) return;
    burstParticles();
    hideNudge();
    if (externalOnClick) {
      externalOnClick();
    } else {
      setInternalIsOpen((prev) => !prev);
    }
  }, [burstParticles, hideNudge, externalOnClick]);

  const closePanel = useCallback(() => {
    if (externalOnClick && isOpen) {
      externalOnClick();
    } else {
      setInternalIsOpen(false);
    }
  }, [externalOnClick, isOpen]);

  // Keyboard shortcuts (Ctrl+K, /, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      resetIdle();
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase() || '';
      const isInput = tag === 'input' || tag === 'textarea' || (e.target as HTMLElement)?.isContentEditable;

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        togglePanel();
      } else if (e.key === '/' && !isInput) {
        e.preventDefault();
        if (!isOpen) togglePanel();
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        closePanel();
        btnRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, togglePanel, closePanel, resetIdle]);

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Toast notification
  const showToast = (text: string) => {
    setToastText(text);
    setTimeout(() => setToastText(null), 1800);
  };

  // Chat message sender
  const handleAsk = async (questionText: string) => {
    const q = questionText.trim();
    if (!q || isTyping) return;

    setMessages((prev) => [...prev, { role: 'user', text: q }]);
    setInputText('');
    setIsTyping(true);
    setState('thinking');

    // Simulate natural thinking delay & answer lookup
    setTimeout(() => {
      let matchedAnswer =
        'I only know a few demo topics. Try asking about verifying a credential, granting access, zero-knowledge proofs, or social recovery.';
      let matchedAction: { label: string; route: string } | null = null;

      for (const [pattern, answer, action] of KB) {
        if (pattern.test(q)) {
          matchedAnswer = answer;
          matchedAction = action;
          break;
        }
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: matchedAnswer, action: matchedAction },
      ]);
      setState('idle');

      setTimeout(() => {
        if (msgsRef.current) {
          msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
        }
      }, 50);
    }, 750);
  };

  // Cycle corner on move button click
  const handleCycleCorner = () => {
    const nextIdx = (CORNERS.indexOf(corner) + 1) % 4;
    applyCorner(CORNERS[nextIdx]);
  };

  return (
    <div
      ref={rootRef}
      id="ab"
      className={`ab ${isOpen ? 'open' : ''} ${isDragging ? 'dragging' : ''} ${isCalm ? 'calm' : ''} ${
        isWiggling ? 'wiggle' : ''
      }`}
      data-state={state}
      data-corner={corner}
      style={{
        left: position ? `${position.x}px` : undefined,
        top: position ? `${position.y}px` : undefined,
        right: position ? 'auto' : undefined,
        bottom: position ? 'auto' : undefined,
      }}
    >
      {/* Contextual Nudge Speech Bubble */}
      <div
        className={`ab-intro ${nudgeText ? 'show' : ''}`}
        aria-hidden="true"
      >
        {nudgeText}
      </div>

      {/* Copilot Chat Panel */}
      <section
        ref={panelRef}
        id="abPanel"
        className="ab-panel"
        role="dialog"
        aria-label="Bharosa Copilot"
        aria-hidden={!isOpen}
      >
        {/* Panel Header */}
        <header className="ab-ph">
          <svg className="ab-mini" viewBox="0 0 40 40" aria-hidden="true">
            <polygon
              points="20,3 34.7,11.5 34.7,28.5 20,37 5.3,28.5 5.3,11.5"
              fill="#1A2E05"
              stroke="#84CC16"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M20 11 22.2 17.8 29 20 22.2 22.2 20 29 17.8 22.2 11 20 17.8 17.8Z"
              fill="#BEF264"
            />
          </svg>
          <div className="ab-hd">
            <div className="ab-title">Bharosa Copilot</div>
            <div className="ab-sub">Sovereign Assistant · never sees your keys or files</div>
          </div>
          <button
            className="ab-ic"
            type="button"
            onClick={handleCycleCorner}
            aria-label="Move to next corner"
            title="Move to next corner"
          >
            <svg viewBox="0 0 24 24">
              <path d="M5 9V5h4M19 9V5h-4M5 15v4h4M19 15v4h-4" />
            </svg>
          </button>
          <button
            className="ab-ic"
            type="button"
            onClick={() => setMessages([])}
            aria-label="New chat"
            title="New chat"
          >
            <svg viewBox="0 0 24 24">
              <path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v4h4" />
            </svg>
          </button>
          <button
            className="ab-ic"
            type="button"
            onClick={closePanel}
            aria-label="Close"
            title="Close"
          >
            <svg viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        {/* Message Stream */}
        <div ref={msgsRef} className="ab-msgs" aria-live="polite">
          {messages.length === 0 ? (
            <div>
              <div className="ab-hi">
                Hi! I can explain Bharosa and walk you through sovereign credentials, zero-knowledge proofs, and access grants. Pick one or type below.
              </div>
              <button
                className="ab-chip"
                type="button"
                onClick={() => handleAsk('How do I verify a credential?')}
              >
                Verify a credential
              </button>
              <button
                className="ab-chip"
                type="button"
                onClick={() => handleAsk('How do I grant access to an employer?')}
              >
                Grant access to someone
              </button>
              <button
                className="ab-chip"
                type="button"
                onClick={() => handleAsk('How do zero-knowledge proofs work?')}
              >
                Prove something without showing it
              </button>
              <button
                className="ab-chip"
                type="button"
                onClick={() => handleAsk('I lost my wallet. What now?')}
              >
                I lost my wallet
              </button>
            </div>
          ) : (
            messages.map((m, idx) => (
              <div key={idx} className={`ab-msg ${m.role}`}>
                <div className="ab-bub">{m.text}</div>
                {m.action && (
                  <button
                    type="button"
                    className="ab-act"
                    onClick={() => {
                      navigate(m.action!.route);
                      showToast(`Navigated to ${m.action!.route}`);
                    }}
                  >
                    {m.action.label}
                  </button>
                )}
                {m.role === 'bot' && (
                  <div className="ab-tools">
                    <button
                      type="button"
                      aria-label="Helpful"
                      title="Helpful"
                      onClick={() => showToast('Feedback recorded')}
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M7 11v9H4v-9h3zm0 0 4-7a2 2 0 0 1 2 2v3h5a2 2 0 0 1 2 2l-1 6a2 2 0 0 1-2 2H7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="Not helpful"
                      title="Not helpful"
                      onClick={() => showToast('Feedback recorded')}
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M17 13V4h3v9h-3zm0 0-4 7a2 2 0 0 1-2-2v-3H6a2 2 0 0 1-2-2l1-6a2 2 0 0 1 2-2h12" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="Copy answer"
                      title="Copy answer"
                      onClick={() => {
                        try {
                          navigator.clipboard.writeText(m.text);
                          showToast('Copied to clipboard');
                        } catch (_) {
                          showToast('Copy unavailable');
                        }
                      }}
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M9 9h10v10H9zM5 15V5h10" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            ))
          )}

          {isTyping && (
            <div className="ab-msg bot">
              <div className="ab-bub ab-typing">
                <i />
                <i />
                <i />
              </div>
            </div>
          )}
        </div>

        {/* Action Toast */}
        <div className={`ab-toast ${toastText ? 'show' : ''}`} role="status">
          {toastText}
        </div>

        {/* Prompt Input Form */}
        <form
          className="ab-form"
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            handleAsk(inputText);
          }}
        >
          <input
            ref={inputRef}
            className="ab-in"
            type="text"
            maxLength={300}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask about credentials, access, proofs…"
            aria-label="Ask Bharosa"
          />
          <button className="ab-send" type="submit" aria-label="Send question">
            <svg viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>

        <div className="ab-foot">Ctrl + K to open · Esc to close · Never share keys or seed phrases</div>
      </section>

      {/* Floating Interactive AI Seal Button */}
      <button
        ref={btnRef}
        className="ab-btn"
        type="button"
        aria-label="Ask Bharosa, AI assistant"
        aria-expanded={isOpen}
        aria-controls="abPanel"
        title="Ask Bharosa (Ctrl+K). Drag to move."
        onClick={togglePanel}
        onPointerDown={handlePointerDown}
      >
        <div ref={tiltRef} className="ab-tilt">
          <svg className="ab-svg" viewBox="0 0 96 96" width="96" height="96" aria-hidden="true">
            <defs>
              <linearGradient id="abBody" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" className="s1" />
                <stop offset="1" className="s2" />
              </linearGradient>
              <linearGradient id="abScan" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" style={{ stopColor: 'var(--scan)', stopOpacity: 0 }} />
                <stop offset="0.5" style={{ stopColor: 'var(--scan)', stopOpacity: 0.8 }} />
                <stop offset="1" style={{ stopColor: 'var(--scan)', stopOpacity: 0 }} />
              </linearGradient>
              <clipPath id="abHex">
                <polygon points="48,18 74,33 74,63 48,78 22,63 22,33" />
              </clipPath>
            </defs>

            {/* Orbiting Dotted Ring with Satellite Dot */}
            <g className="ring">
              <circle
                cx="48"
                cy="48"
                r="44"
                fill="none"
                stroke="#84CC16"
                strokeWidth="1.5"
                strokeDasharray="2 7"
                strokeLinecap="round"
                opacity="0.8"
              />
              <circle cx="48" cy="4" r="3.2" fill="#84CC16" />
            </g>

            {/* Stamp Pulse Animation */}
            <polygon className="stamp" points="48,18 74,33 74,63 48,78 22,63 22,33" />

            {/* Hexagonal Seal Body */}
            <polygon
              className="body"
              points="48,18 74,33 74,63 48,78 22,63 22,33"
              fill="url(#abBody)"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />

            {/* Inner Outline */}
            <polygon className="inner" points="48,24 69,36 69,60 48,72 27,60 27,36" />

            {/* Animated Laser Scanning Beam */}
            <g clipPath="url(#abHex)">
              <rect className="scan" x="22" y="12" width="52" height="24" />
            </g>

            {/* Interactive Dynamic Icon Elements */}
            <g className="icon">
              <path className="chk" d="M37 49.5 45 57.5 60 40" />
              <path className="spk" d="M48 33 51.4 44.6 63 48 51.4 51.4 48 63 44.6 51.4 33 48 44.6 44.6Z" />
              <g className="dots">
                <circle cx="38" cy="49" r="3.2" />
                <circle cx="48" cy="49" r="3.2" />
                <circle cx="58" cy="49" r="3.2" />
              </g>
            </g>
          </svg>

          {/* AI Badge */}
          <span className="ab-badge" aria-hidden="true">
            AI
          </span>
        </div>
      </button>

      <span
        role="status"
        aria-live="polite"
        style={{ position: 'absolute', left: '-9999px' }}
      >
        {state === 'thinking' ? 'Bharosa is thinking' : ''}
      </span>
    </div>
  );
};

export default CopilotButton;
