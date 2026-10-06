"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRateLimit = checkRateLimit;
exports.reportSecretViolation = reportSecretViolation;
const prisma_1 = require("../../lib/prisma");
const userWindows = new Map();
const ipWindows = new Map();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_MINUTE = 20;
function checkRateLimit(key) {
    const now = Date.now();
    const check = (map, identifier) => {
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
        if (!res.allowed)
            return res;
    }
    if (key.ip) {
        const res = check(ipWindows, key.ip);
        if (!res.allowed)
            return res;
    }
    return { allowed: true, remaining: MAX_REQUESTS_PER_MINUTE };
}
async function reportSecretViolation(uid, targetAddress) {
    let window = userWindows.get(uid);
    if (!window) {
        window = { count: 1, resetAt: Date.now() + WINDOW_MS, secretViolations: 1 };
        userWindows.set(uid, window);
    }
    else {
        window.secretViolations += 1;
    }
    // If repeated violations, create a SecurityAlert in database for Admin review
    if (window.secretViolations >= 2) {
        try {
            await prisma_1.prisma.securityAlert.create({
                data: {
                    alertType: 'BURST_REQUESTS',
                    severity: 'HIGH',
                    targetAddress: targetAddress || `uid:${uid}`,
                    description: `Copilot repeated secret transmission attempt by user ${uid} (blocked)`,
                    recommendedFix: 'Review user account activity. Ensure user wallet is uncompromised.',
                },
            });
        }
        catch (e) {
            console.error('[RateLimiter] Error logging security alert:', e);
        }
    }
}
