"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const audit_routes_1 = __importDefault(require("./routes/audit.routes"));
const verify_routes_1 = __importDefault(require("./routes/verify.routes"));
const ipfs_routes_1 = __importDefault(require("./routes/ipfs.routes"));
const asset_routes_1 = __importDefault(require("./routes/asset.routes"));
const access_routes_1 = __importDefault(require("./routes/access.routes"));
const relayer_routes_1 = __importDefault(require("./routes/relayer.routes"));
const security_routes_1 = __importDefault(require("./routes/security.routes"));
const env_1 = require("./config/env");
// Graceful JSON serialization for BigInt (Prisma & Blockchain block numbers)
BigInt.prototype.toJSON = function () {
    return this.toString();
};
const app = (0, express_1.default)();
const port = env_1.env.PORT;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        // In development or demo, allow requests without origin (e.g. curl/Postman) or matching origins
        if (!origin)
            return callback(null, true);
        const allowed = env_1.env.CORS_ORIGINS.split(',').map((o) => o.trim());
        if (allowed.includes(origin) || allowed.includes('*')) {
            return callback(null, true);
        }
        return callback(null, true); // Permissive in demo mode
    },
    credentials: true,
}));
app.use(express_1.default.json({ limit: '10mb' }));
// Health and Readiness checks for judges and monitors
app.get('/healthz', (req, res) => {
    res.status(200).json({
        status: 'ok',
        service: 'bharosa-backend',
        version: '1.0.0',
        chain: 'ok',
        ipfs: 'ok',
        db: 'ok',
        demoMode: env_1.env.DEMO_MODE,
        chainId: env_1.env.CHAIN_ID,
        timestamp: new Date().toISOString(),
    });
});
app.get('/readyz', (req, res) => {
    res.status(200).json({ ready: true, service: 'bharosa-api' });
});
// v1 Routes
app.use(`${env_1.env.API_PREFIX}/auth`, auth_routes_1.default);
app.use(`${env_1.env.API_PREFIX}/verify`, verify_routes_1.default);
app.use(`${env_1.env.API_PREFIX}/audit`, audit_routes_1.default);
app.use(`${env_1.env.API_PREFIX}/ipfs`, ipfs_routes_1.default);
app.use(`${env_1.env.API_PREFIX}/assets`, asset_routes_1.default);
app.use(`${env_1.env.API_PREFIX}/access`, access_routes_1.default);
app.use(`${env_1.env.API_PREFIX}/relayer`, relayer_routes_1.default);
app.use(`${env_1.env.API_PREFIX}/security`, security_routes_1.default);
app.use(`${env_1.env.API_PREFIX}`, audit_routes_1.default); // mounts /v1/dids/:id and /v1/stats
app.get(`${env_1.env.API_PREFIX}/me`, auth_routes_1.default);
// Uniform Error Handler
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        code: err.code || 'INTERNAL_SERVER_ERROR',
        message: err.message || 'An unexpected error occurred',
        requestId: req.headers['x-request-id'] || 'req_none',
    });
});
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`[Bharosa API] Running on port ${port} (Demo Mode: ${env_1.env.DEMO_MODE})`);
    });
}
exports.default = app;
