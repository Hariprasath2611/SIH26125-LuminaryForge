"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConsentReceipt = exports.generateConsentReceipt = exports.createRequest = exports.getRequests = void 0;
const crypto_1 = __importDefault(require("crypto"));
const pino_1 = __importDefault(require("pino"));
const logger = (0, pino_1.default)({ name: 'bharosa:access-controller' });
// In-memory store for consent receipts
const consentStore = new Map();
// Sample initial requests
const initialRequests = [
    {
        id: 'req-001',
        assetId: '0x4f8a129d5b78e3c4a16298dbfc10398457291a0c84918239048a12837f4819a1',
        assetName: 'B.Tech Degree Certificate (Alice Sharma)',
        requester: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
        requesterName: 'Infosys Talent Acquisition',
        requesterPubkey: '0x02c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5',
        role: 'VERIFIER',
        purpose: 'Background Verification - Senior Systems Engineer Role',
        requestedDurationHours: 72,
        requestedAt: new Date(Date.now() - 3600000).toISOString(),
        status: 'PENDING',
    },
    {
        id: 'req-002',
        assetId: '0x910283746519283746501928374650192837465019283746501928374650192b',
        assetName: 'LuminaryForge SIH Patent Draft',
        requester: '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc',
        requesterName: 'National Research Council Reviewer',
        requesterPubkey: '0x03a34b99f22c790c4e36b2b3c2c35a36db06226e41c692fc82b8b56df1c519a924',
        role: 'AUDITOR',
        purpose: 'SIH 2026 Grand Finale Innovation Assessment',
        requestedDurationHours: 168,
        requestedAt: new Date(Date.now() - 7200000).toISOString(),
        status: 'PENDING',
    },
];
const getRequests = async (req, res) => {
    const { assetId, requester } = req.query;
    let results = [...initialRequests];
    if (assetId) {
        results = results.filter((r) => r.assetId.toLowerCase() === assetId.toLowerCase());
    }
    if (requester) {
        results = results.filter((r) => r.requester.toLowerCase() === requester.toLowerCase());
    }
    return res.status(200).json(results);
};
exports.getRequests = getRequests;
const createRequest = async (req, res) => {
    const { assetId, assetName, requester, role, purpose, requestedDurationHours, requesterPubkey } = req.body;
    if (!assetId || !requester || !role || !purpose) {
        return res.status(400).json({ error: 'Missing required request parameters' });
    }
    const newReq = {
        id: `req-${Date.now()}`,
        assetId,
        assetName: assetName || 'Protected Document',
        requester: requester.toLowerCase(),
        requesterName: requester,
        requesterPubkey: requesterPubkey || '0x02c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5',
        role,
        purpose,
        requestedDurationHours: requestedDurationHours || 24,
        requestedAt: new Date().toISOString(),
        status: 'PENDING',
    };
    initialRequests.unshift(newReq);
    logger.info({ requestId: newReq.id, assetId, requester }, '[Access] New access request filed');
    return res.status(201).json(newReq);
};
exports.createRequest = createRequest;
const generateConsentReceipt = async (req, res) => {
    const { ownerAddress, granteeAddress, assetId, assetName, contentHash, role, purpose, notBefore, expiresAt, } = req.body;
    if (!ownerAddress || !granteeAddress || !assetId || !purpose) {
        return res.status(400).json({ error: 'Missing parameters for consent receipt generation' });
    }
    const consentId = `consent-${crypto_1.default.randomUUID()}`;
    const nbDate = notBefore ? new Date(notBefore).toISOString() : new Date().toISOString();
    const expDate = expiresAt ? new Date(expiresAt).toISOString() : new Date(Date.now() + 86400000).toISOString();
    const durationHours = Math.round((new Date(expDate).getTime() - new Date(nbDate).getTime()) / 3600000);
    // Digital signature over the canonical consent payload
    const digest = crypto_1.default
        .createHash('sha256')
        .update(`${consentId}:${ownerAddress}:${granteeAddress}:${assetId}:${purpose}:${expDate}`)
        .digest('hex');
    const receipt = {
        consentId,
        version: '1.0-ISO27560',
        jurisdiction: 'IN-DPDP-Act-2023',
        timestamp: new Date().toISOString(),
        dataPrincipal: {
            address: ownerAddress.toLowerCase(),
            did: `did:ethr:31337:${ownerAddress.toLowerCase()}`,
        },
        dataFiduciary: {
            address: granteeAddress.toLowerCase(),
            role: role || 'VERIFIER',
            name: granteeAddress,
        },
        asset: {
            assetId,
            name: assetName || 'Verified Asset',
            contentHash: contentHash || '0x' + crypto_1.default.randomBytes(32).toString('hex'),
        },
        purpose,
        timeWindow: {
            notBefore: nbDate,
            expiresAt: expDate,
            durationHours,
        },
        policy: {
            revocable: true,
            autoExpires: true,
            commercialUse: false,
        },
        signature: `0x${digest}`,
    };
    consentStore.set(consentId, receipt);
    logger.info({ consentId, owner: ownerAddress, grantee: granteeAddress }, '[Access] Consent receipt created');
    return res.status(201).json(receipt);
};
exports.generateConsentReceipt = generateConsentReceipt;
const getConsentReceipt = async (req, res) => {
    const { consentId } = req.params;
    const receipt = consentStore.get(consentId);
    if (!receipt) {
        return res.status(404).json({ error: `Consent receipt not found: ${consentId}` });
    }
    return res.status(200).json(receipt);
};
exports.getConsentReceipt = getConsentReceipt;
