import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useChainId, useBlockNumber } from 'wagmi';
import {
  ShieldCheck,
  User,
  Award,
  Lock,
  Sparkles,
  Key,
  UserCheck,
  FileClock,
  AlertTriangle,
  School,
  Building2,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  ExternalLink,
  Zap,
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

const PRIMARY_LINKS = [
  { to: '/dashboard', label: 'Dashboard', icon: ShieldCheck },
  { to: '/identity', label: 'Identity & DID', icon: User },
  { to: '/credentials', label: 'Credentials', icon: Award },
  { to: '/assets', label: 'Asset Vault', icon: Lock },
  { to: '/zk', label: 'ZK Proofs', icon: Sparkles },
  { to: '/access', label: 'Access Control', icon: Key },
  { to: '/recovery', label: 'Social Recovery', icon: UserCheck },
  { to: '/audit', label: 'Audit Trail', icon: FileClock },
  { to: '/security', label: 'Security Center', icon: AlertTriangle },
];

const PORTAL_LINKS = [
  { to: '/issuer', label: 'Issuer Portal', icon: School, role: 'ISSUER' },
  { to: '/verifier', label: 'Verifier Portal', icon: Building2, role: 'VERIFIER' },
  { to: '/admin', label: 'Admin Console', icon: Settings, role: 'ADMIN' },
  { to: '/public-verify', label: 'Public Verifier', icon: ShieldCheck, role: null },
];

export function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }: SidebarProps) {
  const location = useLocation();
  const { user, account, signOut, isDemoUser } = useAuth();
  const chainId = useChainId();
  const { data: blockNumber } = useBlockNumber({ watch: true });

  const persona = account?.persona || 'HOLDER';
  const roles = (account?.onChainRoles || []).map((r) => r.toUpperCase());

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, setMobileOpen]);

  const userDisplayName =
    user && 'displayName' in user && user.displayName
      ? user.displayName
      : user?.email?.split('@')[0] || 'User';

  const initials = userDisplayName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'BU';

  const isRoleVisible = (reqRole: string | null) => {
    if (!reqRole) return true;
    if (isDemoUser) return true; // show portals in demo mode for full reviewer experience
    if (persona === reqRole) return true;
    if (roles.includes(reqRole)) return true;
    return false;
  };

  const navContent = (
    <div className="flex flex-col h-full justify-between bg-[#FFFFFF] border-r border-[#ECFCCB] select-none">
      {/* Top Section */}
      <div>
        {/* Brand Header */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-[#F7FBEF]">
          <div className="flex items-center space-x-3 overflow-hidden">
            <img
              src="/logos/bharosa-mark.png"
              alt="Bharosa Logo"
              className="w-8 h-8 object-contain shrink-0"
            />
            {!collapsed && (
              <div className="overflow-hidden">
                <div className="flex items-center space-x-1.5">
                  <span className="font-anton text-xl tracking-wider text-[#1A2E05] uppercase">Bharosa</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#ECFCCB] text-[#4D6B2A] uppercase tracking-wider">
                    {persona}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Desktop collapse toggle */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex items-center justify-center w-7 h-7 rounded-lg text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF] transition-colors"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation list */}
        <nav className="p-2 space-y-1 overflow-y-auto max-h-[calc(100vh-14rem)]">
          {PRIMARY_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-xl text-xs font-semibold transition-all group relative ${
                    isActive
                      ? 'bg-[#ECFCCB] text-[#1A2E05] shadow-xs'
                      : 'text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]'
                  }`
                }
                title={collapsed ? item.label : undefined}
              >
                {({ isActive }) => (
                  <>
                    {/* Active left indicator bar */}
                    {isActive && (
                      <span className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#84CC16] rounded-r-full" />
                    )}
                    <Icon
                      className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                        isActive ? 'text-[#65A30D]' : 'text-[#8BA868]'
                      } ${collapsed ? 'mx-auto' : 'mr-3'}`}
                    />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                  </>
                )}
              </NavLink>
            );
          })}

          {/* Portals divider */}
          <div className="pt-3 pb-1">
            {!collapsed ? (
              <p className="px-3 text-[10px] font-bold text-[#8BA868] uppercase tracking-wider">
                Portals & Ecosystem
              </p>
            ) : (
              <hr className="border-[#ECFCCB] my-2 mx-2" />
            )}
          </div>

          {PORTAL_LINKS.filter((p) => isRoleVisible(p.role)).map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-xl text-xs font-semibold transition-all group relative ${
                    isActive
                      ? 'bg-[#ECFCCB] text-[#1A2E05] shadow-xs'
                      : 'text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]'
                  }`
                }
                title={collapsed ? item.label : undefined}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#84CC16] rounded-r-full" />
                    )}
                    <Icon
                      className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                        isActive ? 'text-[#65A30D]' : 'text-[#8BA868]'
                      } ${collapsed ? 'mx-auto' : 'mr-3'}`}
                    />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Area */}
      <div className="p-3 border-t border-[#F7FBEF] space-y-2">
        {/* Network status badge */}
        {!collapsed ? (
          <div className="px-2.5 py-1.5 rounded-xl bg-[#F7FBEF] border border-[#ECFCCB] flex items-center justify-between text-[11px] text-[#4D6B2A]">
            <div className="flex items-center space-x-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#65A30D]"></span>
              </span>
              <span className="font-semibold text-[#1A2E05]">
                {chainId === 31337 ? 'Hardhat Node' : 'Polygon Amoy'}
              </span>
            </div>
            {Boolean(blockNumber) ? (
              <span className="font-mono text-[10px] text-[#65A30D]">#{blockNumber!.toString()}</span>
            ) : null}
          </div>
        ) : (
          <div className="flex justify-center" title="Network Online">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#65A30D]"></span>
            </span>
          </div>
        )}

        {/* User Card */}
        <div className="flex items-center justify-between p-2 rounded-xl bg-[#FFFFFF] border border-[#ECFCCB]">
          <div className="flex items-center space-x-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-[#84CC16] text-[#1A2E05] font-bold text-xs flex items-center justify-center shrink-0">
              {initials}
            </div>
            {!collapsed && (
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-[#1A2E05] truncate">{userDisplayName}</p>
                <p className="text-[10px] text-[#4D6B2A] truncate font-mono">
                  {account?.walletAddress
                    ? `${account.walletAddress.slice(0, 6)}...${account.walletAddress.slice(-4)}`
                    : user?.email}
                </p>
              </div>
            )}
          </div>

          {!collapsed && (
            <button
              onClick={() => signOut()}
              className="p-1.5 text-[#4D6B2A] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside
        className={`hidden md:block sticky top-0 h-screen transition-all duration-300 z-30 shrink-0 ${
          collapsed ? 'w-20' : 'w-64'
        }`}
      >
        {navContent}
      </aside>

      {/* Mobile Drawer with Backdrop */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#1A2E05]/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-72 max-w-[85vw] h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {navContent}
          </div>
        </div>
      )}
    </>
  );
}
