"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireFirebaseAuth = requireFirebaseAuth;
const app_1 = require("firebase-admin/app");
const auth_1 = require("firebase-admin/auth");
const env_1 = require("../config/env");
const prisma_1 = require("../lib/prisma");
// Configure Firebase Admin
if (env_1.env.FIREBASE_AUTH_EMULATOR_HOST) {
    process.env.FIREBASE_AUTH_EMULATOR_HOST = env_1.env.FIREBASE_AUTH_EMULATOR_HOST;
}
if (!(0, app_1.getApps)().length) {
    if (env_1.env.FIREBASE_CLIENT_EMAIL && env_1.env.FIREBASE_PRIVATE_KEY) {
        (0, app_1.initializeApp)({
            credential: (0, app_1.cert)({
                projectId: env_1.env.FIREBASE_PROJECT_ID,
                clientEmail: env_1.env.FIREBASE_CLIENT_EMAIL,
                privateKey: env_1.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            }),
        });
    }
    else {
        // Emulator or default demo project
        (0, app_1.initializeApp)({
            projectId: env_1.env.FIREBASE_PROJECT_ID,
        });
    }
}
async function requireFirebaseAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({
            code: 'UNAUTHORIZED',
            message: 'Missing or malformed Authorization header. Expected Bearer <Firebase ID token>',
            requestId: req.headers['x-request-id'] || 'req_unauth',
        });
        return;
    }
    const token = authHeader.split('Bearer ')[1].trim();
    if (!token) {
        res.status(401).json({
            code: 'UNAUTHORIZED',
            message: 'Empty Firebase ID token provided',
        });
        return;
    }
    try {
        let decodedToken;
        // Support instant zero-setup demo mode tokens if DEMO_MODE is true and token has demo prefix
        if (env_1.env.DEMO_MODE && token.startsWith('demo-jwt-')) {
            const parts = token.split(':');
            const uid = parts[1] || 'demo-user-student';
            const email = parts[2] || 'student@bharosa.demo';
            decodedToken = {
                uid,
                email,
                email_verified: true,
                name: parts[3] || 'Demo Student',
            };
        }
        else {
            decodedToken = await (0, auth_1.getAuth)().verifyIdToken(token, true);
        }
        // Require email verification for password accounts
        if (decodedToken.firebase?.sign_in_provider === 'password' && !decodedToken.email_verified) {
            res.status(403).json({
                code: 'EMAIL_NOT_VERIFIED',
                message: 'Email must be verified before accessing the application',
            });
            return;
        }
        req.firebaseUser = decodedToken;
        // Attach or upsert database account
        const account = await prisma_1.prisma.account.findUnique({
            where: { uid: decodedToken.uid },
        });
        req.account = account;
        next();
    }
    catch (err) {
        res.status(401).json({
            code: 'INVALID_TOKEN',
            message: err.message || 'Firebase ID token verification failed',
            requestId: req.headers['x-request-id'] || 'req_err',
        });
    }
}
