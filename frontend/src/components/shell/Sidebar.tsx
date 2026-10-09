import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { DEMO_USERS, DemoAccount } from '../../lib/demoAccounts';
import {
  LayoutDashboard,
  UserCheck,
  Award,
  FileText,
  KeyRound,
  Eye,
  RotateCcw,
  FileClock,
  Shield,
  ShieldCheck,
  School,
  Building2,
  Settings,
  ChevronLeft,
  ChevronRight,
  ArrowLeftRight,
  Check,
  Sparkles,
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

interface NavItem {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const NAV_SECTIONS: NavSection[] = [
  {
    title: 'OVERVIEW',
    items: [{ to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard }],
  },
  {
    title: 'MY IDENTITY',
    items: [
      { to: '/identity', label: 'Identity', icon: UserCheck },
      { to: '/credentials', label: 'Credentials', icon: Award },
      { to: '/assets', label: 'Assets', icon: FileText },
      { to: '/access', label: 'Access control', icon: KeyRound, badge: 1 },
      { to: '/zk', label: 'ZK proofs', icon: Eye },
      { to: '/recovery', label: 'Recovery', icon: RotateCcw },
    ],
  },
  {
    title: 'TRUST & SAFETY',
    items: [
      { to: '/audit', label: 'Audit log', icon: FileClock },
      { to: '/security', label: 'Security Center', icon: Shield },
    ],
  },
];

const PORTAL_ITEMS: NavItem[] = [
  { to: '/issuer', label: 'Issuer Portal', icon: School },
  { to: '/verifier', label: 'Verifier Portal', icon: Building2 },
  { to: '/admin', label: 'Admin Console', icon: Settings },
];

export function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }: SidebarProps) {
  const location = useLocation();
  const { user, account, activeDemoAccount, signInWithDemo, isDemoUser } = useAuth();
  const [showDemoModal, setShowDemoModal] = useState<boolean>(false);
  const demoModalRef = useRef<HTMLDivElement>(null);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, setMobileOpen]);

  // Handle outside click for demo switch dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (demoModalRef.current && !demoModalRef.current.contains(e.target as Node)) {
        setShowDemoModal(false);
      }
    }
    if (showDemoModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDemoModal]);

  const userDisplayName =
    activeDemoAccount?.name ||
    (user && 'displayName' in user && user.displayName ? user.displayName : 'Priya Sharma');

  const userSubtitle =
    activeDemoAccount?.badge
      ? `${activeDemoAccount.badge} · Demo wallet`
      : 'Student · Demo wallet';

  const initials =
    userDisplayName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'PS';

  const handleSwitchUser = async (demo: DemoAccount) => {
    try {
      await signInWithDemo(demo.id);
      setShowDemoModal(false);
    } catch (err) {
      console.error('Failed to switch demo user:', err);
    }
  };

  const navContent = (
    <div className="flex flex-col h-full justify-between bg-white border-r border-[#E5E7EB] select-none text-[#1A2E05]">
      {/* Top Header & Navigation */}
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-6">
        {/* Brand Header */}
        <div className="flex items-center justify-between px-2 h-10">
          <div className="flex items-center gap-2.5 overflow-hidden">
            {/* Hexagonal Shield Logo Mark */}
            <div className="w-8 h-8 rounded-lg bg-[#84CC16]/20 border border-[#84CC16]/40 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 100" className="w-5 h-5 text-[#65A30D]" fill="currentColor">
                <polygon points="50,5 93,27 93,73 50,95 7,73 7,27" fill="#84CC16" />
                <path
                  d="M38 52 L48 62 L66 40"
                  fill="none"
                  stroke="#1A2E05"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {!collapsed && (
              <span className="font-extrabold text-2xl text-[#1A2E05] tracking-tight">
                Bharosa
              </span>
            )}
          </div>

          {/* Desktop collapse toggle */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex items-center justify-center w-7 h-7 rounded-lg text-stone-400 hover:text-[#1A2E05] hover:bg-stone-100 transition-colors"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Sections */}
        <div className="space-y-5">
          {NAV_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-1">
              {!collapsed && (
                <div className="px-3 text-[11px] font-bold text-stone-400 tracking-wider">
                  {section.title}
                </div>
              )}
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all group relative ${
                          isActive
                            ? 'bg-[#ECFCCB] text-[#1A2E05]'
                            : 'text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]'
                        }`
                      }
                      title={collapsed ? item.label : undefined}
                    >
                      {({ isActive }) => (
                        <>
                          <Icon
                            className={`w-4 h-4 shrink-0 transition-transform ${
                              isActive ? 'text-[#1A2E05]' : 'text-stone-500 group-hover:text-[#1A2E05]'
                            } ${collapsed ? 'mx-auto' : 'mr-3'}`}
                          />
                          {!collapsed && (
                            <span className="flex-1 truncate">{item.label}</span>
                          )}
                          {!collapsed && item.badge !== undefined && (
                            <span className="w-5 h-5 rounded-full bg-[#84CC16] text-[#1A2E05] text-[11px] font-extrabold flex items-center justify-center shrink-0">
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Optional Portals for Admin / Issuer testing */}
          {(account?.persona === 'ADMIN' || account?.persona === 'ISSUER' || isDemoUser) && (
            <div className="space-y-1 pt-2 border-t border-stone-100">
              {!collapsed && (
                <div className="px-3 text-[11px] font-bold text-stone-400 tracking-wider">
                  PORTALS
                </div>
              )}
              <div className="space-y-1">
                {PORTAL_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center px-3.5 py-2 rounded-xl text-xs font-semibold transition-all group ${
                          isActive
                            ? 'bg-[#ECFCCB] text-[#1A2E05]'
                            : 'text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]'
                        }`
                      }
                      title={collapsed ? item.label : undefined}
                    >
                      <Icon className="w-4 h-4 shrink-0 mr-3 text-stone-400 group-hover:text-[#1A2E05]" />
                      {!collapsed && <span className="truncate">{item.label}</span>}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom User Area & Public Verifier */}
      <div className="p-3 border-t border-[#F2F4F7] space-y-2 relative" ref={demoModalRef}>
        {/* Public verify item */}
        <NavLink
          to="/public-verify"
          className={({ isActive }) =>
            `flex items-center px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
              isActive
                ? 'bg-[#ECFCCB] text-[#1A2E05]'
                : 'text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]'
            }`
          }
          title={collapsed ? 'Public verify' : undefined}
        >
          <ShieldCheck className="w-4 h-4 shrink-0 mr-3 text-stone-500" />
          {!collapsed && <span>Public verify</span>}
        </NavLink>

        {/* User Profile Card */}
        {!collapsed ? (
          <div className="p-3 rounded-2xl bg-[#F7FBEF] border border-[#D9EBB5] flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#84CC16] text-[#1A2E05] font-extrabold text-xs flex items-center justify-center shrink-0">
              {initials}
            </div>
            <div className="overflow-hidden min-w-0 flex-1">
              <p className="text-sm font-bold text-[#1A2E05] truncate">{userDisplayName}</p>
              <p className="text-xs text-stone-500 truncate">{userSubtitle}</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center py-2" title={userDisplayName}>
            <div className="w-9 h-9 rounded-full bg-[#84CC16] text-[#1A2E05] font-extrabold text-xs flex items-center justify-center">
              {initials}
            </div>
          </div>
        )}

        {/* Switch demo user Button */}
        {!collapsed && (
          <button
            type="button"
            onClick={() => setShowDemoModal(!showDemoModal)}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeftRight className="w-3.5 h-3.5 text-[#65A30D]" />
            <span>Switch demo user</span>
          </button>
        )}

        {/* Demo User Switcher Dropdown */}
        {showDemoModal && (
          <div className="absolute bottom-16 left-3 right-3 bg-white border border-[#D9EBB5] rounded-2xl shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-2 py-1.5 border-b border-[#F2F4F7] flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-[#1A2E05]">Choose Demo Persona</span>
              <Sparkles className="w-3.5 h-3.5 text-[#65A30D]" />
            </div>
            <div className="space-y-1">
              {DEMO_USERS.map((demo) => {
                const isSelected = activeDemoAccount?.id === demo.id;
                return (
                  <button
                    key={demo.id}
                    onClick={() => handleSwitchUser(demo)}
                    className={`w-full text-left p-2 rounded-xl text-xs transition-colors flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#ECFCCB] font-bold text-[#1A2E05]'
                        : 'hover:bg-[#F7FBEF] text-[#4D6B2A]'
                    }`}
                  >
                    <div>
                      <div className="font-bold">{demo.name}</div>
                      <div className="text-[10px] text-stone-500">{demo.role}</div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#65A30D] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside
        className={`hidden md:block sticky top-0 h-[calc(100vh-32px)] transition-all duration-300 z-30 shrink-0 ${
          collapsed ? 'w-20' : 'w-64'
        }`}
      >
        {navContent}
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-[#1A2E05]/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-64 max-w-[80vw] h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {navContent}
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
