"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const siwe_1 = require("siwe");
const zod_1 = require("zod");
const redis_1 = require("../lib/redis");
const jwt_1 = require("../lib/jwt");
const env_1 = require("../config/env");
const verifySchema = zod_1.z.object({
    message: zod_1.z.string().min(1, 'SIWE message string required'),
    signature: zod_1.z.string().min(1, 'Signature required'),
});
const refreshSchema = zod_1.z.object({
    refreshToken: zod_1.z.string().optional(),
});
class AuthController {
    static async getNonce(req, res) {
        try {
            const nonce = (0, siwe_1.generateNonce)();
            // Store in Redis with 5-minute TTL (300 seconds)
            await redis_1.cache.set(`siwe:nonce:${nonce}`, '1', 'EX', 300);
            res.status(200).json({ nonce });
        }
        catch (err) {
            res.status(500).json({
                code: 'NONCE_GENERATION_FAILED',
                message: err.message,
                requestId: req.headers['x-request-id'] || 'req_none',
            });
        }
    }
    static async verify(req, res) {
        const parseResult = verifySchema.safeParse(req.body);
        if (!parseResult.success) {
            res.status(400).json({
                code: 'VALIDATION_ERROR',
                message: 'Invalid request body',
                details: parseResult.error.flatten(),
            });
            return;
        }
        const { message, signature } = parseResult.data;
        try {
            const siweMessage = new siwe_1.SiweMessage(message);
            // Verify that the nonce was previously issued and not yet used
            const storedNonce = await redis_1.cache.get(`siwe:nonce:${siweMessage.nonce}`);
            if (!storedNonce) {
                res.status(400).json({
                    code: 'INVALID_NONCE',
                    message: 'Nonce has expired or was already used',
                    requestId: req.headers['x-request-id'] || 'req_none',
                });
                return;
            }
            // Cryptographically verify signature against the message
            const verifyResult = await siweMessage.verify({
                signature,
                nonce: siweMessage.nonce,
                domain: env_1.env.SIWE_DOMAIN,
            });
            if (!verifyResult.success) {
                res.status(401).json({
                    code: 'INVALID_SIGNATURE',
                    message: 'SIWE cryptographic signature verification failed',
                });
                return;
            }
            // Delete nonce immediately to prevent replay attacks
            await redis_1.cache.del(`siwe:nonce:${siweMessage.nonce}`);
            const userPayload = {
                address: siweMessage.address.toLowerCase(),
                chainId: siweMessage.chainId,
            };
            const accessToken = (0, jwt_1.signAccessToken)(userPayload);
            const refreshToken = (0, jwt_1.signRefreshToken)(userPayload);
            // Set HttpOnly, Secure, SameSite=Strict cookies
            res.cookie('access_token', accessToken, {
                httpOnly: true,
                secure: env_1.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 15 * 60 * 1000, // 15 mins
            });
            res.cookie('refresh_token', refreshToken, {
                httpOnly: true,
                secure: env_1.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });
            res.status(200).json({
                success: true,
                user: userPayload,
                accessToken,
                refreshToken,
            });
        }
        catch (err) {
            res.status(400).json({
                code: 'SIWE_VERIFY_ERROR',
                message: err.message || 'Verification error',
            });
        }
    }
    static async refresh(req, res) {
        const parseResult = refreshSchema.safeParse(req.body);
        let token = parseResult.success ? parseResult.data.refreshToken : undefined;
        if (!token && req.headers.cookie) {
            const cookies = Object.fromEntries(req.headers.cookie.split(';').map((c) => {
                const [k, ...v] = c.trim().split('=');
                return [k, v.join('=')];
            }));
            token = cookies['refresh_token'];
        }
        if (!token) {
            res.status(401).json({
                code: 'UNAUTHORIZED',
                message: 'Refresh token missing',
            });
            return;
        }
        try {
            const payload = (0, jwt_1.verifyRefreshToken)(token);
            const userPayload = { address: payload.address, chainId: payload.chainId };
            const newAccessToken = (0, jwt_1.signAccessToken)(userPayload);
            const newRefreshToken = (0, jwt_1.signRefreshToken)(userPayload);
            res.cookie('access_token', newAccessToken, {
                httpOnly: true,
                secure: env_1.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 15 * 60 * 1000,
            });
            res.cookie('refresh_token', newRefreshToken, {
                httpOnly: true,
                secure: env_1.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });
            res.status(200).json({
                success: true,
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            });
        }
        catch (err) {
            res.status(401).json({
                code: 'INVALID_REFRESH_TOKEN',
                message: err.message || 'Invalid or expired refresh token',
            });
        }
    }
    static async logout(req, res) {
        res.clearCookie('access_token');
        res.clearCookie('refresh_token');
        res.status(200).json({ success: true, message: 'Logged out successfully' });
    }
    static async me(req, res) {
        res.status(200).json({
            user: req.user,
            did: `did:ethr:${req.user?.chainId}:${req.user?.address}`,
        });
    }
}
exports.AuthController = AuthController;
