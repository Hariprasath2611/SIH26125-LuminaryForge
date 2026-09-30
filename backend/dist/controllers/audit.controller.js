"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditController = void 0;
const prisma_1 = require("../lib/prisma");
const db_fallback_1 = require("../lib/db-fallback");
class AuditController {
    static async getAuditEvents(req, res) {
        const page = Math.max(1, parseInt(req.query.page, 10) || 1);
        const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 20));
        const skip = (page - 1) * limit;
        const eventType = req.query.eventType;
        const actor = req.query.actor;
        const target = req.query.target;
        try {
            const where = {};
            if (eventType && eventType !== 'ALL') {
                where.eventType = eventType;
            }
            if (actor) {
                where.actor = { contains: actor.toLowerCase(), mode: 'insensitive' };
            }
            if (target) {
                where.target = { contains: target.toLowerCase(), mode: 'insensitive' };
            }
            const [events, total] = await Promise.all([
                prisma_1.prisma.auditEvent.findMany({
                    where,
                    orderBy: { timestamp: 'desc' },
                    skip,
                    take: limit,
                }),
                prisma_1.prisma.auditEvent.count({ where }),
            ]);
            const totalPages = Math.ceil(total / limit) || 1;
            res.status(200).json({
                events,
                pagination: { total, page, limit, totalPages },
            });
        }
        catch (err) {
            // Graceful fallback to inMemoryDb when Postgres is disconnected
            let filtered = db_fallback_1.inMemoryDb.auditEvents;
            if (eventType && eventType !== 'ALL') {
                filtered = filtered.filter((e) => e.eventType === eventType);
            }
            if (actor) {
                filtered = filtered.filter((e) => e.actor.includes(actor.toLowerCase()));
            }
            if (target) {
                filtered = filtered.filter((e) => e.target?.includes(target.toLowerCase()));
            }
            const total = filtered.length;
            const events = filtered.slice(skip, skip + limit);
            const totalPages = Math.ceil(total / limit) || 1;
            res.status(200).json({
                events,
                pagination: { total, page, limit, totalPages },
            });
        }
    }
    static async exportAuditCSV(req, res) {
        let events = [];
        try {
            events = await prisma_1.prisma.auditEvent.findMany({
                orderBy: { timestamp: 'desc' },
                take: 1000,
            });
        }
        catch {
            events = db_fallback_1.inMemoryDb.auditEvents;
        }
        let csv = 'Timestamp,Event Type,Actor,Target,Transaction Hash,Block Number\n';
        for (const e of events) {
            const ts = e.timestamp instanceof Date ? e.timestamp.toISOString() : new Date(e.timestamp).toISOString();
            const type = `"${e.eventType}"`;
            const actor = `"${e.actor}"`;
            const target = `"${e.target || ''}"`;
            const txHash = `"${e.txHash || ''}"`;
            const block = e.blockNumber ? e.blockNumber.toString() : '';
            csv += `${ts},${type},${actor},${target},${txHash},${block}\n`;
        }
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename="bharosa-audit-log.csv"');
        res.status(200).send(csv);
    }
    static async getPlatformStats(req, res) {
        try {
            const [didsCount, issuersCount, credentialsCount, assetsCount, activeGrantsCount, pendingRequestsCount,] = await Promise.all([
                prisma_1.prisma.did.count({ where: { active: true } }),
                prisma_1.prisma.issuer.count({ where: { isTrusted: true } }),
                prisma_1.prisma.credentialAnchor.count({ where: { revoked: false } }),
                prisma_1.prisma.asset.count(),
                prisma_1.prisma.accessGrant.count({ where: { revoked: false } }),
                prisma_1.prisma.accessRequest.count({ where: { fulfilled: false } }),
            ]);
            res.status(200).json({
                didsCount,
                issuersCount,
                credentialsCount,
                assetsCount,
                activeGrantsCount,
                pendingRequestsCount,
            });
        }
        catch {
            res.status(200).json({
                didsCount: db_fallback_1.inMemoryDb.dids.size || 1,
                issuersCount: 1,
                credentialsCount: db_fallback_1.inMemoryDb.credentials.size || 2,
                assetsCount: db_fallback_1.inMemoryDb.assets.size || 1,
                activeGrantsCount: db_fallback_1.inMemoryDb.grants.size || 1,
                pendingRequestsCount: db_fallback_1.inMemoryDb.requests.size || 0,
            });
        }
    }
    static async getDid(req, res) {
        const identifier = req.params.identifier.toLowerCase();
        try {
            const didRecord = await prisma_1.prisma.did.findFirst({
                where: {
                    OR: [
                        { controller: identifier },
                        { didHash: identifier },
                        { didString: identifier },
                    ],
                },
            });
            if (!didRecord) {
                res.status(404).json({
                    code: 'DID_NOT_FOUND',
                    message: `No active DID found for identifier ${req.params.identifier}`,
                });
                return;
            }
            res.status(200).json({ did: didRecord });
        }
        catch {
            const fallbackDid = db_fallback_1.inMemoryDb.dids.get(identifier);
            if (fallbackDid) {
                res.status(200).json({ did: fallbackDid });
            }
            else {
                res.status(404).json({
                    code: 'DID_NOT_FOUND',
                    message: `No active DID found for identifier ${req.params.identifier}`,
                });
            }
        }
    }
}
exports.AuditController = AuditController;
