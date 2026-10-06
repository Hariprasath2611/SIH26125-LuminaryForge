"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const siwe_1 = require("siwe");
const zod_1 = require("zod");
const redis_1 = require("../lib/redis");
const jwt_1 = require("../lib/jwt");
const env_1 = require("../config/env");
const prisma_1 = require("../lib/prisma");
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
    static async linkWallet(req, res) {
        const firebaseUser = req.firebaseUser;
        if (!firebaseUser) {
            res.status(401).json({ code: 'UNAUTHORIZED', message: 'Firebase authentication required' });
            return;
        }
        const { message, signature, persona } = req.body;
        if (!message || !signature) {
            res.status(400).json({ code: 'MISSING_FIELDS', message: 'SIWE message and signature required' });
            return;
        }
        try {
            const siweMessage = new siwe_1.SiweMessage(message);
            // Verify that nonce was issued and not yet used
            const storedNonce = await redis_1.cache.get(`siwe:nonce:${siweMessage.nonce}`);
            if (!storedNonce) {
                res.status(400).json({
                    code: 'INVALID_NONCE',
                    message: 'Nonce has expired or was already used',
                    requestId: req.headers['x-request-id'] || 'req_nonce_err',
                });
                return;
            }
            // Cryptographically verify signature
            const verifyResult = await siweMessage.verify({
                signature,
                nonce: siweMessage.nonce,
                domain: env_1.env.SIWE_DOMAIN,
            });
            if (!verifyResult.success) {
                res.status(401).json({
                    code: 'INVALID_SIGNATURE',
                    message: 'Cryptographic signature verification failed',
                });
                return;
            }
            // Delete nonce immediately to prevent replay
            await redis_1.cache.del(`siwe:nonce:${siweMessage.nonce}`);
            const recoveredAddress = siweMessage.address.toLowerCase();
            // Check if wallet is linked to another account
            const existingAddressAccount = await prisma_1.prisma.account.findUnique({
                where: { walletAddress: recoveredAddress },
            });
            if (existingAddressAccount && existingAddressAccount.uid !== firebaseUser.uid) {
                res.status(409).json({
                    code: 'WALLET_ALREADY_LINKED',
                    message: 'This wallet address is already linked to another Bharosa account',
                });
                return;
            }
            // Check if this account already has a different wallet linked
            const currentAccount = await prisma_1.prisma.account.findUnique({
                where: { uid: firebaseUser.uid },
            });
            if (currentAccount &&
                currentAccount.walletAddress &&
                currentAccount.walletAddress.toLowerCase() !== recoveredAddress) {
                res.status(400).json({
                    code: 'ACCOUNT_HAS_DIFFERENT_WALLET',
                    message: `Account is already linked to wallet ${currentAccount.walletAddress}. Please unlink it first.`,
                });
                return;
            }
            // Upsert account with linked wallet
            const validPersona = ['HOLDER', 'ISSUER', 'VERIFIER'].includes(persona?.toUpperCase())
                ? persona.toUpperCase()
                : 'HOLDER';
            const updatedAccount = await prisma_1.prisma.account.upsert({
                where: { uid: firebaseUser.uid },
                update: {
                    walletAddress: recoveredAddress,
                    persona: validPersona,
                    email: firebaseUser.email,
                },
                create: {
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    displayName: firebaseUser.name || firebaseUser.email.split('@')[0],
                    walletAddress: recoveredAddress,
                    persona: validPersona,
                },
            });
            // Audit log event (no sensitive credentials/signatures stored)
            await prisma_1.prisma.auditEvent.create({
                data: {
                    eventType: 'WALLET_LINKED',
                    actor: firebaseUser.uid,
                    target: recoveredAddress,
                    payload: {
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                        walletAddress: recoveredAddress,
                        timestamp: new Date().toISOString(),
                    },
                },
            });
            res.status(200).json({
                success: true,
                message: 'Wallet linked successfully to account',
                account: updatedAccount,
            });
        }
        catch (err) {
            res.status(400).json({
                code: 'LINK_WALLET_ERROR',
                message: err.message || 'Failed to link wallet',
            });
        }
    }
    static async unlinkWallet(req, res) {
        const firebaseUser = req.firebaseUser;
        if (!firebaseUser) {
            res.status(401).json({ code: 'UNAUTHORIZED', message: 'Firebase authentication required' });
            return;
        }
        try {
            const currentAccount = await prisma_1.prisma.account.findUnique({
                where: { uid: firebaseUser.uid },
            });
            if (!currentAccount || !currentAccount.walletAddress) {
                res.status(400).json({ code: 'NO_WALLET_LINKED', message: 'No wallet is linked to this account' });
                return;
            }
            const prevAddress = currentAccount.walletAddress;
            await prisma_1.prisma.account.update({
                where: { uid: firebaseUser.uid },
                data: { walletAddress: null },
            });
            await prisma_1.prisma.auditEvent.create({
                data: {
                    eventType: 'WALLET_UNLINKED',
                    actor: firebaseUser.uid,
                    target: prevAddress,
                    payload: {
                        uid: firebaseUser.uid,
                        unlinkedAddress: prevAddress,
                        timestamp: new Date().toISOString(),
                    },
                },
            });
            res.status(200).json({ success: true, message: 'Wallet unlinked successfully' });
        }
        catch (err) {
            res.status(500).json({ code: 'UNLINK_ERROR', message: err.message });
        }
    }
    static async me(req, res) {
        const firebaseUser = req.firebaseUser;
        if (!firebaseUser) {
            // Fallback for cookie/session auth if accessed that way
            if (req.user) {
                res.status(200).json({
                    user: req.user,
                    did: `did:ethr:${req.user?.chainId}:${req.user?.address}`,
                });
                return;
            }
            res.status(401).json({ code: 'UNAUTHORIZED', message: 'Authentication required' });
            return;
        }
        try {
            let account = await prisma_1.prisma.account.findUnique({
                where: { uid: firebaseUser.uid },
            });
            if (!account) {
                account = await prisma_1.prisma.account.create({
                    data: {
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                        displayName: firebaseUser.name || firebaseUser.email.split('@')[0],
                        persona: 'HOLDER',
                    },
                });
            }
            let didRegistered = false;
            const onChainRoles = ['HOLDER'];
            if (account.walletAddress) {
                const normalizedAddress = account.walletAddress.toLowerCase();
                // Check if DID is anchored
                const didRecord = await prisma_1.prisma.did.findFirst({
                    where: { controller: normalizedAddress },
                });
                didRegistered = !!didRecord;
                // Check on-chain roles via registry mirror or admin
                const issuerRecord = await prisma_1.prisma.issuer.findUnique({
                    where: { address: normalizedAddress },
                });
                if (issuerRecord && issuerRecord.isTrusted) {
                    onChainRoles.push('ISSUER');
                }
                // Hardhat deployer or admin wallet
                if (normalizedAddress === '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266' ||
                    normalizedAddress === '0x70997970c51812dc3a010c7d01b50e0d17dc79c8') {
                    onChainRoles.push('ADMIN');
                    if (!onChainRoles.includes('ISSUER'))
                        onChainRoles.push('ISSUER');
                }
            }
            res.status(200).json({
                uid: account.uid,
                email: account.email,
                displayName: account.displayName,
                persona: account.persona,
                walletAddress: account.walletAddress,
                onChainRoles,
                didRegistered,
            });
        }
        catch (err) {
            res.status(500).json({ code: 'GET_ME_ERROR', message: err.message });
        }
    }
}
exports.AuthController = AuthController;
