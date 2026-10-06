"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_1 = require("../middleware/auth");
const firebaseAuth_1 = require("../middleware/firebaseAuth");
const jwt_1 = require("../lib/jwt");
const router = (0, express_1.Router)();
router.get('/nonce', auth_controller_1.AuthController.getNonce);
router.post('/verify', auth_controller_1.AuthController.verify);
router.post('/refresh', auth_controller_1.AuthController.refresh);
router.post('/logout', auth_controller_1.AuthController.logout);
// Firebase & SIWE Protected Endpoints
router.post('/link-wallet', firebaseAuth_1.requireFirebaseAuth, auth_controller_1.AuthController.linkWallet);
router.post('/unlink-wallet', firebaseAuth_1.requireFirebaseAuth, auth_controller_1.AuthController.unlinkWallet);
router.get('/me', (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith('Bearer ')) {
        const token = authHeader.split('Bearer ')[1].trim();
        try {
            const payload = (0, jwt_1.verifyAccessToken)(token);
            if (payload && payload.address) {
                req.user = payload;
                return auth_controller_1.AuthController.me(req, res);
            }
        }
        catch {
            // Continue to Firebase Auth
        }
        return (0, firebaseAuth_1.requireFirebaseAuth)(req, res, () => auth_controller_1.AuthController.me(req, res));
    }
    return (0, auth_1.requireAuth)(req, res, () => auth_controller_1.AuthController.me(req, res));
});
exports.default = router;
