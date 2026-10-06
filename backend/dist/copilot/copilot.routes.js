"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const firebaseAuth_1 = require("../middleware/firebaseAuth");
const copilot_service_1 = require("./copilot.service");
const router = (0, express_1.Router)();
const auth_1 = require("firebase-admin/auth");
const prisma_1 = require("../lib/prisma");
const env_1 = require("../config/env");
async function optionalFirebaseAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        // Visitor on landing page or public route
        req.firebaseUser = {
            uid: 'visitor_landing',
            email: 'visitor@bharosa.network',
            email_verified: true,
            name: 'Visitor',
        };
        return next();
    }
    const token = authHeader.split('Bearer ')[1].trim();
    if (!token || token === 'demo_token' || token === 'public_visitor') {
        req.firebaseUser = {
            uid: 'visitor_landing',
            email: 'visitor@bharosa.network',
            email_verified: true,
            name: 'Visitor',
        };
        return next();
    }
    try {
        if (env_1.env.DEMO_MODE && token.startsWith('demo-jwt-')) {
            const parts = token.split(':');
            req.firebaseUser = {
                uid: parts[1] || 'demo-user-student',
                email: parts[2] || 'student@bharosa.demo',
                email_verified: true,
                name: parts[3] || 'Demo Student',
            };
        }
        else {
            const decoded = await (0, auth_1.getAuth)().verifyIdToken(token, true);
            req.firebaseUser = decoded;
        }
        if (req.firebaseUser?.uid) {
            const account = await prisma_1.prisma.account.findUnique({
                where: { uid: req.firebaseUser.uid },
            });
            req.account = account;
        }
    }
    catch (e) {
        // If token is invalid or expired, fallback gracefully to visitor mode
        req.firebaseUser = {
            uid: 'visitor_landing',
            email: 'visitor@bharosa.network',
            email_verified: true,
            name: 'Visitor',
        };
    }
    next();
}
// POST /v1/copilot/chat - SSE streaming endpoint (works for both logged in users and landing page visitors)
router.post('/chat', optionalFirebaseAuth, async (req, res) => {
    const parsed = copilot_service_1.chatRequestSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({
            error: 'INVALID_REQUEST',
            message: 'Invalid Copilot request body',
            issues: parsed.error.issues,
        });
    }
    const uid = req.firebaseUser?.uid || 'visitor_landing';
    const role = (req.account?.persona || req.body.context?.role || 'HOLDER').toUpperCase();
    const walletAddress = req.account?.walletAddress;
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
    // Support client disconnection / abort signal
    const ac = new AbortController();
    req.on('close', () => {
        ac.abort();
    });
    await copilot_service_1.copilotService.handleChatStream(parsed.data, { uid, role, walletAddress }, clientIp, res, ac.signal);
});
// POST /v1/copilot/feedback - Thumbs up/down feedback
router.post('/feedback', firebaseAuth_1.requireFirebaseAuth, async (req, res) => {
    const { messageId, vote, comment } = req.body;
    // Vote is "up" | "down"
    return res.status(200).json({
        status: 'ok',
        message: 'Feedback received. Thank you for improving Bharosa Copilot!',
        recorded: { messageId, vote, comment: comment || null },
    });
});
// GET /v1/copilot/health - Diagnostics endpoint
router.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        mode: process.env.COPILOT_MODE || 'auto',
        provider: process.env.COPILOT_PROVIDER || 'offline-kb',
        ragEnabled: true,
    });
});
exports.default = router;
