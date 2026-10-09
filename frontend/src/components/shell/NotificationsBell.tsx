import React, { useState, useRef, useEffect } from 'react';
import { Bell, CheckCircle2, ShieldCheck, Zap, X } from 'lucide-react';

interface NotificationItem {
  id: string;
  title: string;
  desc: string;
  time: string;
  type: 'success' | 'info' | 'relayer';
}

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: '1',
    title: 'Gasless Meta-Transactions Active',
    desc: 'Biconomy / EIP-2771 Relayer is online and sponsoring your identity calls.',
    time: '2m ago',
    type: 'relayer',
  },
  {
    id: '2',
    title: 'Cryptographic DID Online',
    desc: 'Your W3C DID document is synced to IPFS and pinned.',
    time: '1h ago',
    type: 'success',
  },
  {
    id: '3',
    title: 'Decentralized Audit Active',
    desc: 'All smart contract invocations are signed and verifiable on-chain.',
    time: '3h ago',
    type: 'info',
  },
];

export function NotificationsBell() {
  const [open, setOpen] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const bellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (bellRef.current && !bellRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = notifications.length;

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="relative" ref={bellRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-9 h-9 rounded-full border border-stone-200 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-700 relative shadow-2xs transition-colors cursor-pointer"
        aria-label="Notifications"
      >
        <Bell className="w-4 h-4" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#84CC16] text-[#1A2E05] font-extrabold text-[10px] flex items-center justify-center ring-2 ring-white">
          4
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl shadow-xl p-3 z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="flex items-center justify-between pb-2 border-b border-[#F7FBEF]">
            <div className="flex items-center space-x-1.5">
              <span className="text-xs font-bold text-[#1A2E05]">Activity & Alerts</span>
              {unreadCount > 0 && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#ECFCCB] text-[#65A30D]">
                  {unreadCount}
                </span>
              )}
            </div>
            {notifications.length > 0 && (
              <button
                onClick={clearAll}
                className="text-[11px] text-[#65A30D] hover:underline font-medium"
              >
                Clear
              </button>
            )}
          </div>

          <div className="max-h-72 overflow-y-auto py-2 divide-y divide-[#F7FBEF]">
            {notifications.length === 0 ? (
              <div className="text-center py-6 text-xs text-[#4D6B2A]">
                No new notifications
              </div>
            ) : (
              notifications.map((n) => (
                <div key={n.id} className="py-2.5 px-1 first:pt-1 last:pb-1">
                  <div className="flex items-start space-x-2.5">
                    {n.type === 'relayer' ? (
                      <div className="w-6 h-6 rounded-lg bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-3.5 h-3.5 fill-[#84CC16]" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-lg bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[#1A2E05] truncate">{n.title}</p>
                      <p className="text-[11px] text-[#4D6B2A] mt-0.5 leading-relaxed">{n.desc}</p>
                      <span className="text-[10px] text-stone-400 mt-1 block">{n.time}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
