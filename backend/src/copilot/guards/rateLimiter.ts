import { prisma } from '../../lib/prisma';

interface RateWindow {
  count: number;
  resetAt: number;
  secretViolations: number;
}

const userWindows = new Map<string, RateWindow>();
const ipWindows = new Map<string, RateWindow>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_MINUTE = 20;

export function checkRateLimit(key: { uid?: string; ip?: string }): { allowed: boolean; remaining: number; retryAfterSec?: number } {
  const now = Date.now();

  const check = (map: Map<string, RateWindow>, identifier: string): { allowed: boolean; remaining: number; retryAfterSec?: number } => {
    let window = map.get(identifier);
    if (!window || now > window.resetAt) {
      window = { count: 1, resetAt: now + WINDOW_MS, secretViolations: 0 };
      map.set(identifier, window);
      return { allowed: true, remaining: MAX_REQUESTS_PER_MINUTE - 1 };
    }

    if (window.count >= MAX_REQUESTS_PER_MINUTE) {
      const retryAfterSec = Math.ceil((window.resetAt - now) / 1000);
      return { allowed: false, remaining: 0, retryAfterSec };
    }

    window.count += 1;
    return { allowed: true, remaining: MAX_REQUESTS_PER_MINUTE - window.count };
  };

  if (key.uid) {
    const res = check(userWindows, key.uid);
    if (!res.allowed) return res;
  }

  if (key.ip) {
    const res = check(ipWindows, key.ip);
    if (!res.allowed) return res;
  }

  return { allowed: true, remaining: MAX_REQUESTS_PER_MINUTE };
}

export async function reportSecretViolation(uid: string, targetAddress?: string): Promise<void> {
  let window = userWindows.get(uid);
  if (!window) {
    window = { count: 1, resetAt: Date.now() + WINDOW_MS, secretViolations: 1 };
    userWindows.set(uid, window);
  } else {
    window.secretViolations += 1;
  }

  // If repeated violations, create a SecurityAlert in database for Admin review
  if (window.secretViolations >= 2) {
    try {
      await prisma.securityAlert.create({
        data: {
          alertType: 'BURST_REQUESTS',
          severity: 'HIGH',
          targetAddress: targetAddress || `uid:${uid}`,
          description: `Copilot repeated secret transmission attempt by user ${uid} (blocked)`,
          recommendedFix: 'Review user account activity. Ensure user wallet is uncompromised.',
        },
      });
    } catch (e) {
      console.error('[RateLimiter] Error logging security alert:', e);
    }
  }
}
