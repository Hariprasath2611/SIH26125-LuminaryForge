"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
const jwt_1 = require("../lib/jwt");
function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    let token;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substring(7);
    }
    else if (req.headers.cookie) {
        // Parse cookie
        const cookies = Object.fromEntries(req.headers.cookie.split(';').map((c) => {
            const [k, ...v] = c.trim().split('=');
            return [k, v.join('=')];
        }));
        token = cookies['access_token'];
    }
    if (!token) {
        res.status(401).json({
            code: 'UNAUTHORIZED',
            message: 'Authentication token missing or invalid',
            requestId: req.headers['x-request-id'] || 'req_none',
        });
        return;
    }
    try {
        const payload = (0, jwt_1.verifyAccessToken)(token);
        req.user = payload;
        next();
    }
    catch (err) {
        res.status(401).json({
            code: 'TOKEN_EXPIRED_OR_INVALID',
            message: err.message || 'Token verification failed',
            requestId: req.headers['x-request-id'] || 'req_none',
        });
    }
}
