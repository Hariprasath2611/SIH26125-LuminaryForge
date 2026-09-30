"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuickLockStatus = exports.triggerQuickLock = exports.getSecurityAlerts = void 0;
const pino_1 = __importDefault(require("pino"));
const logger = (0, pino_1.default)({ name: 'bharosa:security-controller' });
const INITIAL_ALERTS = [
    {
        id: 'alt-001',
        alertType: 'BURST_REQUESTS',
        severity: 'HIGH',
        targetAddress: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
        description: '14 rapid verification checks in 30 seconds detected from unfamiliar autonomous agent IP.',
        evidenceTxHash: '0x7a8b9c0d1e2f3a4b56c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9',
        recommendedAction: 'Verify verifier authenticity or temporarily pause affected asset grants.',
        timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
        resolved: false,
    },
    {
        id: 'alt-002',
        alertType: 'OFF_HOURS_ACCESS',
        severity: 'MEDIUM',
        targetAddress: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
        description: 'Access requested at 03:14 AM IST (outside normal business hours) for Degree Certificate.',
        evidenceTxHash: '0x9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b',
        recommendedAction: 'Review verification purpose under active consent agreement.',
        timestamp: new Date(Date.now() - 4 * 3600000).toISOString(),
        resolved: false,
    },
    {
        id: 'alt-003',
        alertType: 'UNBOUNDED_GRANT',
        severity: 'LOW',
        targetAddress: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
        description: 'Grant configured with > 30-day time window without explicit expiry date.',
        recommendedAction: 'Enforce time-bound expiration to satisfy DPDP 2023 purpose limitation.',
        timestamp: new Date(Date.now() - 24 * 3600000).toISOString(),
        resolved: false,
    },
];
let quickLockedAccounts = new Set();
const getSecurityAlerts = async (req, res) => {
    const { address } = req.query;
    let alerts = [...INITIAL_ALERTS];
    if (address) {
        alerts = alerts.filter((a) => a.targetAddress.toLowerCase() === address.toLowerCase());
    }
    return res.status(200).json({
        totalAlerts: alerts.length,
        criticalCount: alerts.filter((a) => a.severity === 'CRITICAL').length,
        highCount: alerts.filter((a) => a.severity === 'HIGH').length,
        mediumCount: alerts.filter((a) => a.severity === 'MEDIUM').length,
        lowCount: alerts.filter((a) => a.severity === 'LOW').length,
        alerts,
    });
};
exports.getSecurityAlerts = getSecurityAlerts;
const triggerQuickLock = async (req, res) => {
    const { accountAddress, reason } = req.body;
    if (!accountAddress) {
        return res.status(400).json({ error: 'Missing accountAddress' });
    }
    const normalized = accountAddress.toLowerCase();
    quickLockedAccounts.add(normalized);
    // Add critical alert
    INITIAL_ALERTS.unshift({
        id: `alt-lock-${Date.now()}`,
        alertType: 'ACTIVE_RECOVERY_ATTEMPT',
        severity: 'CRITICAL',
        targetAddress: normalized,
        description: `Emergency Quick-Lock activated by controller: ${reason || 'Suspected key compromise'}`,
        recommendedAction: 'Account is locked. Contact your 3 designated guardians to re-key your DID.',
        timestamp: new Date().toISOString(),
        resolved: false,
    });
    logger.warn({ accountAddress }, '[Security] Quick-Lock emergency freeze triggered');
    return res.status(200).json({
        success: true,
        account: normalized,
        status: 'LOCKED',
        message: 'Emergency freeze activated. All outgoing grants halted and guardians notified.',
        timestamp: new Date().toISOString(),
    });
};
exports.triggerQuickLock = triggerQuickLock;
const getQuickLockStatus = async (req, res) => {
    const { accountAddress } = req.params;
    const isLocked = quickLockedAccounts.has(accountAddress.toLowerCase());
    return res.status(200).json({
        account: accountAddress,
        isLocked,
        status: isLocked ? 'LOCKED' : 'NORMAL',
    });
};
exports.getQuickLockStatus = getQuickLockStatus;
