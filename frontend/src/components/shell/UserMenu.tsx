import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useDisconnect } from 'wagmi';
import { DEMO_USERS, DemoAccount } from '../../lib/demoAccounts';
import { resolveApiUrl } from '../../lib/api/client';
import { useTheme } from '../../providers/ThemeProvider';
import {
  User,
  Shield,
  KeyRound,
  LogOut,
  ChevronDown,
  Sparkles,
  RefreshCw,
  ShieldAlert,
  Wallet,
  Check,
  Sun,
  Moon,
  Laptop,
} from 'lucide-react';

export function UserMenu() {
  const navigate = useNavigate();
  const { user, account, signOut, isDemoUser, activeDemoAccount, signInWithDemo, refreshAccount } = useAuth();
  const { choice, setChoice } = useTheme();
  const { disconnect } = useDisconnect();
  const [open, setOpen] = useState<boolean>(false);
  const [showDemoSwitch, setShowDemoSwitch] = useState<boolean>(false);
  const [resetting, setResetting] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
        setShowDemoSwitch(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayName =
    activeDemoAccount?.name ||
    (user && 'displayName' in user && user.displayName) ||
    user?.email?.split('@')[0] ||
    'Bharosa User';

  const initials = displayName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'BU';

  const handleSignOut = async () => {
    setOpen(false);
    await signOut();
    navigate('/login', { replace: true });
  };

  const handleDisconnectWallet = () => {
    disconnect();
    setOpen(false);
  };

  const handleSwitchDemoUser = async (demoUser: DemoAccount) => {
    setOpen(false);
    setShowDemoSwitch(false);
    await signInWithDemo(demoUser.id);
    navigate('/dashboard', { replace: true });
  };

  const handleResetDemoData = async () => {
    setResetting(true);
    try {
      await fetch(resolveApiUrl('/demo/reset'), { method: 'POST' });
      await refreshAccount();
    } catch (e) {
      console.error('Demo reset failed:', e);
    } finally {
      setResetting(false);
    }
  };

  const isDemoMode = import.meta.env.VITE_DEMO_MODE !== 'false';

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center space-x-2 p-1 pl-1.5 rounded-full hover:bg-surface-2 transition-colors border border-transparent hover:border-line"
        aria-label="User profile menu"
      >
        <div className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center border-2 border-surface shadow-xs">
          {initials}
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-fg-muted mr-1 hidden sm:block" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-surface border border-line rounded-2xl shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100 transition-colors">
          {/* Header */}
          <div className="p-3 border-b border-line">
            <p className="text-xs font-bold text-fg truncate">{displayName}</p>
            <p className="text-[11px] text-fg-muted truncate mt-0.5">{user?.email}</p>
            <div className="flex items-center space-x-1.5 mt-2">
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary-soft text-primary uppercase tracking-wider">
                {account?.persona || 'HOLDER'}
              </span>
              {isDemoUser && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary text-on-primary font-bold">
                  Demo Signer
                </span>
              )}
            </div>
          </div>

          {/* Quick Demo Switcher Section */}
          {isDemoMode && (
            <div className="py-1 border-b border-line">
              <button
                onClick={() => setShowDemoSwitch(!showDemoSwitch)}
                className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-fg hover:bg-surface-2 rounded-xl transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-primary fill-primary" />
                  <span>Switch Demo User</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showDemoSwitch ? 'rotate-180' : ''}`} />
              </button>

              {showDemoSwitch && (
                <div className="mt-1 space-y-1 p-1 bg-surface-2 rounded-xl max-h-48 overflow-y-auto">
                  {DEMO_USERS.map((demo) => {
                    const isSelected = activeDemoAccount?.id === demo.id;
                    return (
                      <button
                        key={demo.id}
                        onClick={() => handleSwitchDemoUser(demo)}
                        className={`w-full text-left p-2 rounded-lg text-xs transition-colors flex items-center justify-between ${
                          isSelected ? 'bg-primary-soft font-bold text-fg' : 'hover:bg-surface text-fg-muted'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-xs truncate">{demo.name}</p>
                          <p className="text-[10px] opacity-75">{demo.role}</p>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-primary shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Admin Reset Button */}
              {isDemoUser && account?.persona === 'ADMIN' && (
                <button
                  onClick={handleResetDemoData}
                  disabled={resetting}
                  className="w-full mt-1 flex items-center px-3 py-1.5 text-[11px] font-semibold text-primary hover:bg-surface-2 rounded-xl transition-colors"
                >
                  <RefreshCw className={`w-3.5 h-3.5 mr-2 ${resetting ? 'animate-spin' : ''}`} />
                  {resetting ? 'Resetting Demo State…' : 'Reset Demo Data'}
                </button>
              )}
            </div>
          )}

          {/* Theme Selector inside User Menu */}
          <div className="py-2 px-3 border-b border-line">
            <span className="text-[10px] font-bold uppercase tracking-wider text-fg-subtle mb-1.5 block">
              Theme Preference
            </span>
            <div className="grid grid-cols-3 gap-1 bg-surface-2 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setChoice('light')}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all ${
                  choice === 'light'
                    ? 'bg-surface text-fg shadow-2xs'
                    : 'text-fg-muted hover:text-fg'
                }`}
                title="Light mode"
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Light</span>
              </button>
              <button
                type="button"
                onClick={() => setChoice('dark')}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all ${
                  choice === 'dark'
                    ? 'bg-surface text-fg shadow-2xs'
                    : 'text-fg-muted hover:text-fg'
                }`}
                title="Dark mode"
              >
                <Moon className="w-3.5 h-3.5 text-blue-400" />
                <span>Dark</span>
              </button>
              <button
                type="button"
                onClick={() => setChoice('system')}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all ${
                  choice === 'system'
                    ? 'bg-surface text-fg shadow-2xs'
                    : 'text-fg-muted hover:text-fg'
                }`}
                title="System mode"
              >
                <Laptop className="w-3.5 h-3.5 text-fg-muted" />
                <span>Auto</span>
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="py-1">
            <Link
              to="/identity"
              onClick={() => setOpen(false)}
              className="flex items-center px-3 py-2 text-xs text-fg hover:bg-surface-2 rounded-xl transition-colors"
            >
              <KeyRound className="w-4 h-4 mr-2.5 text-primary" />
              Identity & DID
            </Link>
            {!isDemoUser && (
              <Link
                to="/connect-wallet"
                onClick={() => setOpen(false)}
                className="flex items-center px-3 py-2 text-xs text-fg hover:bg-surface-2 rounded-xl transition-colors"
              >
                <Wallet className="w-4 h-4 mr-2.5 text-primary" />
                Manage Linked Key
              </Link>
            )}
            <Link
              to="/security"
              onClick={() => setOpen(false)}
              className="flex items-center px-3 py-2 text-xs text-fg hover:bg-surface-2 rounded-xl transition-colors"
            >
              <ShieldAlert className="w-4 h-4 mr-2.5 text-primary" />
              Security Center
            </Link>
          </div>

          {/* Actions */}
          <div className="pt-1 border-t border-line">
            {!isDemoUser && (
              <button
                onClick={handleDisconnectWallet}
                className="w-full flex items-center px-3 py-2 text-xs text-fg-muted hover:text-fg hover:bg-surface-2 rounded-xl transition-colors text-left"
              >
                <Wallet className="w-4 h-4 mr-2.5 text-fg-subtle" />
                Disconnect Wallet
              </button>
            )}
            <button
              onClick={handleSignOut}
              className="w-full flex items-center px-3 py-2 text-xs text-status-danger hover:bg-status-danger/10 rounded-xl transition-colors text-left font-medium"
            >
              <LogOut className="w-4 h-4 mr-2.5 text-status-danger" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
