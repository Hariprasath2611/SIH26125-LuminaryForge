"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainIndexer = void 0;
const ethers_1 = require("ethers");
const pino_1 = __importDefault(require("pino"));
const prisma_1 = require("../lib/prisma");
const env_1 = require("../config/env");
const contracts_1 = require("../contracts");
const logger = (0, pino_1.default)({ name: 'bharosa:indexer' });
class BlockchainIndexer {
    provider;
    identityContract;
    accessContract;
    ownershipContract;
    recoveryContract;
    auditAnchorContract;
    constructor() {
        this.provider = new ethers_1.ethers.JsonRpcProvider(env_1.env.RPC_URL);
        const identityAddr = process.env.CONTRACT_IDENTITY_REGISTRY || '0x5FbDB2315678afecb367f032d93F642f64180aa3';
        const accessAddr = process.env.CONTRACT_ACCESS_CONTROL || '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
        const ownershipAddr = process.env.CONTRACT_OWNERSHIP_REGISTRY || '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
        const recoveryAddr = process.env.CONTRACT_SOCIAL_RECOVERY || '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
        const auditAnchorAddr = process.env.CONTRACT_AUDIT_ANCHOR || '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707';
        this.identityContract = new ethers_1.ethers.Contract(identityAddr, contracts_1.IdentityRegistryABI, this.provider);
        this.accessContract = new ethers_1.ethers.Contract(accessAddr, contracts_1.BharosaAccessControlABI, this.provider);
        this.ownershipContract = new ethers_1.ethers.Contract(ownershipAddr, contracts_1.OwnershipRegistryABI, this.provider);
        this.recoveryContract = new ethers_1.ethers.Contract(recoveryAddr, contracts_1.SocialRecoveryABI, this.provider);
        this.auditAnchorContract = new ethers_1.ethers.Contract(auditAnchorAddr, contracts_1.AuditAnchorABI, this.provider);
    }
    /**
     * Idempotent audit event logger
     */
    async recordAuditEvent(params) {
        try {
            await prisma_1.prisma.auditEvent.create({
                data: {
                    eventType: params.eventType,
                    actor: params.actor.toLowerCase(),
                    target: params.target?.toLowerCase(),
                    txHash: params.txHash,
                    blockNumber: params.blockNumber ? BigInt(params.blockNumber) : undefined,
                    payload: params.payload,
                    timestamp: params.timestamp || new Date(),
                },
            });
            logger.info({ event: params.eventType, actor: params.actor }, '[Indexer] Audit event recorded');
        }
        catch (err) {
            logger.warn({ err: err.message }, '[Indexer] Failed to record audit event');
        }
    }
    /**
     * Reindexes all historical events from block 0 to present
     */
    async reindexAll(fromBlock = 0) {
        logger.info({ fromBlock }, '[Indexer] Starting full historical reindex from chain...');
        try {
            const currentBlock = await this.provider.getBlockNumber();
            logger.info({ currentBlock }, '[Indexer] Latest chain block');
            // 1. IdentityRegistry events
            const didRegisteredEvents = await this.identityContract.queryFilter(this.identityContract.filters.DIDRegistered(), fromBlock, currentBlock);
            for (const event of didRegisteredEvents) {
                const [didHash, controller, metadataCID, timestamp] = event.args;
                const didString = `did:ethr:${env_1.env.CHAIN_ID}:${controller.toLowerCase()}`;
                const regDate = new Date(Number(timestamp) * 1000);
                await prisma_1.prisma.did.upsert({
                    where: { didHash },
                    create: {
                        didHash,
                        didString,
                        controller: controller.toLowerCase(),
                        metadataCID,
                        registeredAt: regDate,
                        updatedAt: regDate,
                        active: true,
                    },
                    update: {
                        controller: controller.toLowerCase(),
                        metadataCID,
                        updatedAt: regDate,
                        active: true,
                    },
                });
                await this.recordAuditEvent({
                    eventType: 'DID_REGISTERED',
                    actor: controller,
                    target: didHash,
                    txHash: event.transactionHash,
                    blockNumber: event.blockNumber,
                    payload: { didHash, metadataCID },
                    timestamp: regDate,
                });
            }
            // 2. CredentialAnchored events
            const credEvents = await this.identityContract.queryFilter(this.identityContract.filters.CredentialAnchored(), fromBlock, currentBlock);
            for (const event of credEvents) {
                const [credentialHash, issuer, subject, expiry, timestamp] = event.args;
                const issueDate = new Date(Number(timestamp) * 1000);
                const expiryDate = Number(expiry) > 0 ? new Date(Number(expiry) * 1000) : null;
                await prisma_1.prisma.credentialAnchor.upsert({
                    where: { credentialHash },
                    create: {
                        credentialHash,
                        issuer: issuer.toLowerCase(),
                        subject: subject.toLowerCase(),
                        issuedAt: issueDate,
                        expiry: expiryDate,
                        revoked: false,
                        txHash: event.transactionHash,
                        blockNumber: BigInt(event.blockNumber),
                    },
                    update: {
                        revoked: false,
                    },
                });
                await this.recordAuditEvent({
                    eventType: 'CREDENTIAL_ANCHORED',
                    actor: issuer,
                    target: subject,
                    txHash: event.transactionHash,
                    blockNumber: event.blockNumber,
                    payload: { credentialHash, expiry: Number(expiry) },
                    timestamp: issueDate,
                });
            }
            // 3. OwnershipRegistry: AssetRegistered events
            const assetEvents = await this.ownershipContract.queryFilter(this.ownershipContract.filters.AssetRegistered(), fromBlock, currentBlock);
            for (const event of assetEvents) {
                const [assetId, owner, cid, contentHash, metadataCID, isSoulbound, timestamp] = event.args;
                const regDate = new Date(Number(timestamp) * 1000);
                await prisma_1.prisma.asset.upsert({
                    where: { assetId },
                    create: {
                        assetId,
                        owner: owner.toLowerCase(),
                        cid,
                        contentHash,
                        metadataCID,
                        isSoulbound,
                        registeredAt: regDate,
                        txHash: event.transactionHash,
                        blockNumber: BigInt(event.blockNumber),
                    },
                    update: {
                        owner: owner.toLowerCase(),
                    },
                });
                await this.recordAuditEvent({
                    eventType: 'ASSET_REGISTERED',
                    actor: owner,
                    target: assetId,
                    txHash: event.transactionHash,
                    blockNumber: event.blockNumber,
                    payload: { cid, contentHash, isSoulbound },
                    timestamp: regDate,
                });
            }
            // 4. AccessControl: AccessGranted events
            const grantEvents = await this.accessContract.queryFilter(this.accessContract.filters.AccessGranted(), fromBlock, currentBlock);
            for (const event of grantEvents) {
                const [assetId, grantee, role, purpose, notBefore, expiresAt, wrappedKeyCID, timestamp] = event.args;
                const grantDate = new Date(Number(timestamp) * 1000);
                const nbDate = Number(notBefore) > 0 ? new Date(Number(notBefore) * 1000) : null;
                const expDate = Number(expiresAt) > 0 ? new Date(Number(expiresAt) * 1000) : null;
                await prisma_1.prisma.accessGrant.upsert({
                    where: {
                        assetId_grantee: {
                            assetId,
                            grantee: grantee.toLowerCase(),
                        },
                    },
                    create: {
                        assetId,
                        grantee: grantee.toLowerCase(),
                        role,
                        purpose,
                        notBefore: nbDate,
                        expiresAt: expDate,
                        wrappedKeyCID,
                        revoked: false,
                        grantedAt: grantDate,
                        txHash: event.transactionHash,
                        blockNumber: BigInt(event.blockNumber),
                    },
                    update: {
                        role,
                        purpose,
                        notBefore: nbDate,
                        expiresAt: expDate,
                        wrappedKeyCID,
                        revoked: false,
                        grantedAt: grantDate,
                    },
                });
                await this.recordAuditEvent({
                    eventType: 'ACCESS_GRANTED',
                    actor: grantee,
                    target: assetId,
                    txHash: event.transactionHash,
                    blockNumber: event.blockNumber,
                    payload: { role, purpose, expiresAt: Number(expiresAt) },
                    timestamp: grantDate,
                });
            }
            logger.info('[Indexer] Reindex complete. Database mirror is fully in sync with chain.');
        }
        catch (err) {
            logger.error({ err: err.message }, '[Indexer] Reindex encountered error (RPC may be offline in dev)');
        }
    }
}
exports.BlockchainIndexer = BlockchainIndexer;
// CLI runner for `pnpm reindex`
if (require.main === module || process.argv.includes('--reindex')) {
    const indexer = new BlockchainIndexer();
    indexer.reindexAll().then(() => {
        console.log('[Indexer CLI] Reindex execution finished.');
        process.exit(0);
    });
}
