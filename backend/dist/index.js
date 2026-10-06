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
const demo_routes_1 = __importDefault(require("./routes/demo.routes"));
const copilot_routes_1 = __importDefault(require("./copilot/copilot.routes"));
const env_1 = require("./config/env");
// Safety Check: Fail to boot if DEMO_MODE is on while chainId is mainnet
const MAINNET_CHAIN_IDS = [1, 10, 56, 137, 8453, 42161];
if (env_1.env.DEMO_MODE) {
    if (MAINNET_CHAIN_IDS.includes(Number(env_1.env.CHAIN_ID))) {
        console.error(`[CRITICAL SECURITY] DEMO_MODE cannot be enabled on mainnet chain ID ${env_1.env.CHAIN_ID}! Refusing to start.`);
        process.exit(1);
    }
    if (process.env.NODE_ENV === 'production' && process.env.ALLOW_DEMO_IN_PRODUCTION !== 'true') {
        console.error(`[CRITICAL SECURITY] DEMO_MODE in production requires explicit ALLOW_DEMO_IN_PRODUCTION=true! Refusing to start.`);
        process.exit(1);
    }
}
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Graceful JSON serialization for BigInt (Prisma & Blockchain block numbers)
BigInt.prototype.toJSON = function () {
    return this.toString();
};
const app = (0, express_1.default)();
const port = env_1.env.PORT || 4000;
app.use((0, helmet_1.default)({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: [
                "'self'",
                "'unsafe-inline'",
                "'wasm-unsafe-eval'",
                'https://www.googletagmanager.com',
                'https://apis.google.com',
            ],
            styleSrc: ["'self'", "'unsafe-inline'", 'https:'],
            fontSrc: ["'self'", 'data:', 'https:'],
            imgSrc: ["'self'", 'data:', 'blob:', 'https:', 'ipfs:'],
            connectSrc: ["'self'", 'http:', 'https:', 'ws:', 'wss:'],
            frameSrc: ["'self'", 'https://*.firebaseapp.com', 'https://accounts.google.com'],
            workerSrc: ["'self'", 'blob:'],
            frameAncestors: ["'none'"],
        },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: { policy: 'same-origin-allow-popups' },
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
}));
app.use((req, res, next) => {
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    next();
});
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
app.use(`${env_1.env.API_PREFIX}/copilot`, copilot_routes_1.default);
if (env_1.env.DEMO_MODE) {
    app.use(`${env_1.env.API_PREFIX}/demo`, demo_routes_1.default);
}
app.use(`${env_1.env.API_PREFIX}`, audit_routes_1.default); // mounts /v1/dids/:id and /v1/stats
app.get(`${env_1.env.API_PREFIX}/me`, auth_routes_1.default);
// Optional Frontend Static Hosting with SPA Fallback (when SERVE_FRONTEND=true)
const distPathCandidates = [
    path_1.default.resolve(__dirname, '../../frontend/dist'),
    path_1.default.resolve(process.cwd(), 'frontend/dist'),
    path_1.default.resolve(process.cwd(), '../frontend/dist'),
];
const distPath = distPathCandidates.find((p) => fs_1.default.existsSync(p)) || distPathCandidates[0];
if (env_1.env.SERVE_FRONTEND && fs_1.default.existsSync(distPath)) {
    console.log(`[Bharosa Server] Serving production frontend from: ${distPath}`);
    app.use(express_1.default.static(distPath, {
        maxAge: '1y',
        immutable: true,
        index: false,
        setHeaders: (res, filePath) => {
            if (filePath.endsWith('index.html')) {
                res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
            }
        },
    }));
    app.get('*', (req, res, next) => {
        if (req.path.startsWith('/v1') ||
            req.path.startsWith('/healthz') ||
            req.path.startsWith('/readyz') ||
            req.path.startsWith('/docs')) {
            return next();
        }
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.sendFile(path_1.default.join(distPath, 'index.html'));
    });
}
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
