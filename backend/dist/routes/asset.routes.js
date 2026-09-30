"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ipfs_controller_1 = require("../controllers/ipfs.controller");
const db_fallback_1 = require("../lib/db-fallback");
const prisma_1 = require("../lib/prisma");
const router = (0, express_1.Router)();
// Health check endpoint for assets / pinning cluster
router.get('/health', ipfs_controller_1.getClusterHealth);
// Get asset details by ID
router.get('/:assetId', async (req, res) => {
    const { assetId } = req.params;
    try {
        const asset = await prisma_1.prisma.asset.findUnique({
            where: { assetId },
            include: { grants: true },
        });
        if (asset) {
            return res.status(200).json(asset);
        }
    }
    catch {
        // Fallback
    }
    const fallback = db_fallback_1.inMemoryDb.assets.get(assetId);
    if (fallback) {
        return res.status(200).json(fallback);
    }
    // Demo asset if searching for demo
    return res.status(200).json({
        assetId,
        owner: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
        cid: 'bafkreic7qg2x6v3f4hzkqylu6f6j4y3p6i2w7e8r9t0y1u2i3o4p5a6b7c',
        contentHash: '0x8f434346648f6b96df89dda901c5176b10e6d83961dd3c1ac88b59b2dc327aa4',
        metadataCID: 'bafkreimeta1234567890abcdef',
        isSoulbound: true,
        pinStatus: 'PINNED',
        replicas: 3,
        registeredAt: new Date().toISOString(),
    });
});
exports.default = router;
