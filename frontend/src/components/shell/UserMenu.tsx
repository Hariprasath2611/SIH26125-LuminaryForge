import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useDisconnect } from 'wagmi';
import {
  User,
  Shield,
  KeyRound,
  LogOut,
  ChevronDown,
  ExternalLink,
  ShieldAlert,
  Wallet,
} from 'lucide-react';

export function UserMenu() {
  const navigate = useNavigate();
  const { user, account, signOut, isDemoUser } = useAuth();
  const { disconnect } = useDisconnect();
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayName =
    user && 'displayName' in user && user.displayName
      ? user.displayName
      : user?.email?.split('@')[0] || 'Bharosa User';

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

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center space-x-2 p-1 pl-1.5 rounded-full hover:bg-[#ECFCCB] transition-colors border border-transparent hover:border-[#D9F99D]"
        aria-label="User profile menu"
      >
        <div className="w-8 h-8 rounded-full bg-[#84CC16] text-[#1A2E05] font-bold text-xs flex items-center justify-center border-2 border-[#FFFFFF] shadow-xs">
          {initials}
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-[#4D6B2A] mr-1 hidden sm:block" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
          {/* Header */}
          <div className="p-3 border-b border-[#F7FBEF]">
            <p className="text-xs font-bold text-[#1A2E05] truncate">{displayName}</p>
            <p className="text-[11px] text-[#4D6B2A] truncate mt-0.5">{user?.email}</p>
            <div className="flex items-center space-x-1.5 mt-2">
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#ECFCCB] text-[#4D6B2A] uppercase tracking-wider">
                {account?.persona || 'HOLDER'}
              </span>
              {isDemoUser && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#84CC16] text-[#1A2E05]">
                  Demo
                </span>
              )}
            </div>
          </div>

          {/* Links */}
          <div className="py-1">
            <Link
              to="/identity"
              onClick={() => setOpen(false)}
              className="flex items-center px-3 py-2 text-xs text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors"
            >
              <KeyRound className="w-4 h-4 mr-2.5 text-[#65A30D]" />
              Identity & DID
            </Link>
            <Link
              to="/connect-wallet"
              onClick={() => setOpen(false)}
              className="flex items-center px-3 py-2 text-xs text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors"
            >
              <Wallet className="w-4 h-4 mr-2.5 text-[#65A30D]" />
              Manage Linked Key
            </Link>
            <Link
              to="/security"
              onClick={() => setOpen(false)}
              className="flex items-center px-3 py-2 text-xs text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors"
            >
              <ShieldAlert className="w-4 h-4 mr-2.5 text-[#65A30D]" />
              Security Center
            </Link>
          </div>

          {/* Actions */}
          <div className="pt-1 border-t border-[#F7FBEF]">
            <button
              onClick={handleDisconnectWallet}
              className="w-full flex items-center px-3 py-2 text-xs text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors text-left"
            >
              <Wallet className="w-4 h-4 mr-2.5 text-stone-400" />
              Disconnect Wallet
            </button>
            <button
              onClick={handleSignOut}
              className="w-full flex items-center px-3 py-2 text-xs text-red-600 hover:bg-red-50 rounded-xl transition-colors text-left font-medium"
            >
              <LogOut className="w-4 h-4 mr-2.5 text-red-500" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
