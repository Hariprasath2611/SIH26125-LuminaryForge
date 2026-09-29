import { ethers } from 'ethers';
import pino from 'pino';
import { prisma } from '../lib/prisma';
import { env } from '../config/env';
import {
  IdentityRegistryABI,
  BharosaAccessControlABI,
  OwnershipRegistryABI,
  SocialRecoveryABI,
  AuditAnchorABI,
} from '@bharosa/sdk';

const logger = pino({ name: 'bharosa:indexer' });

export class BlockchainIndexer {
  private provider: ethers.JsonRpcProvider;
  private identityContract: ethers.Contract;
  private accessContract: ethers.Contract;
  private ownershipContract: ethers.Contract;
  private recoveryContract: ethers.Contract;
  private auditAnchorContract: ethers.Contract;

  constructor() {
    this.provider = new ethers.JsonRpcProvider(env.RPC_URL);

    const identityAddr = process.env.CONTRACT_IDENTITY_REGISTRY || '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const accessAddr = process.env.CONTRACT_ACCESS_CONTROL || '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
    const ownershipAddr = process.env.CONTRACT_OWNERSHIP_REGISTRY || '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
    const recoveryAddr = process.env.CONTRACT_SOCIAL_RECOVERY || '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
    const auditAnchorAddr = process.env.CONTRACT_AUDIT_ANCHOR || '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707';

    this.identityContract = new ethers.Contract(identityAddr, IdentityRegistryABI, this.provider);
    this.accessContract = new ethers.Contract(accessAddr, BharosaAccessControlABI, this.provider);
    this.ownershipContract = new ethers.Contract(ownershipAddr, OwnershipRegistryABI, this.provider);
    this.recoveryContract = new ethers.Contract(recoveryAddr, SocialRecoveryABI, this.provider);
    this.auditAnchorContract = new ethers.Contract(auditAnchorAddr, AuditAnchorABI, this.provider);
  }

  /**
   * Idempotent audit event logger
   */
  async recordAuditEvent(params: {
    eventType: string;
    actor: string;
    target?: string;
    txHash?: string;
    blockNumber?: number | bigint;
    payload: any;
    timestamp?: Date;
  }): Promise<void> {
    try {
      await prisma.auditEvent.create({
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
    } catch (err: any) {
      logger.warn({ err: err.message }, '[Indexer] Failed to record audit event');
    }
  }

  /**
   * Reindexes all historical events from block 0 to present
   */
  async reindexAll(fromBlock = 0): Promise<void> {
    logger.info({ fromBlock }, '[Indexer] Starting full historical reindex from chain...');

    try {
      const currentBlock = await this.provider.getBlockNumber();
      logger.info({ currentBlock }, '[Indexer] Latest chain block');

      // 1. IdentityRegistry events
      const didRegisteredEvents = await this.identityContract.queryFilter(
        this.identityContract.filters.DIDRegistered(),
        fromBlock,
        currentBlock
      );

      for (const event of didRegisteredEvents as ethers.EventLog[]) {
        const [didHash, controller, metadataCID, timestamp] = event.args;
        const didString = `did:ethr:${env.CHAIN_ID}:${controller.toLowerCase()}`;
        const regDate = new Date(Number(timestamp) * 1000);

        await prisma.did.upsert({
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
      const credEvents = await this.identityContract.queryFilter(
        this.identityContract.filters.CredentialAnchored(),
        fromBlock,
        currentBlock
      );

      for (const event of credEvents as ethers.EventLog[]) {
        const [credentialHash, issuer, subject, expiry, timestamp] = event.args;
        const issueDate = new Date(Number(timestamp) * 1000);
        const expiryDate = Number(expiry) > 0 ? new Date(Number(expiry) * 1000) : null;

        await prisma.credentialAnchor.upsert({
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
      const assetEvents = await this.ownershipContract.queryFilter(
        this.ownershipContract.filters.AssetRegistered(),
        fromBlock,
        currentBlock
      );

      for (const event of assetEvents as ethers.EventLog[]) {
        const [assetId, owner, cid, contentHash, metadataCID, isSoulbound, timestamp] = event.args;
        const regDate = new Date(Number(timestamp) * 1000);

        await prisma.asset.upsert({
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
      const grantEvents = await this.accessContract.queryFilter(
        this.accessContract.filters.AccessGranted(),
        fromBlock,
        currentBlock
      );

      for (const event of grantEvents as ethers.EventLog[]) {
        const [assetId, grantee, role, purpose, notBefore, expiresAt, wrappedKeyCID, timestamp] = event.args;
        const grantDate = new Date(Number(timestamp) * 1000);
        const nbDate = Number(notBefore) > 0 ? new Date(Number(notBefore) * 1000) : null;
        const expDate = Number(expiresAt) > 0 ? new Date(Number(expiresAt) * 1000) : null;

        await prisma.accessGrant.upsert({
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
    } catch (err: any) {
      logger.error({ err: err.message }, '[Indexer] Reindex encountered error (RPC may be offline in dev)');
    }
  }
}

// CLI runner for `pnpm reindex`
if (require.main === module || process.argv.includes('--reindex')) {
  const indexer = new BlockchainIndexer();
  indexer.reindexAll().then(() => {
    console.log('[Indexer CLI] Reindex execution finished.');
    process.exit(0);
  });
}
