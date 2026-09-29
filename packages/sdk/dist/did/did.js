"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDID = formatDID;
exports.parseDID = parseDID;
exports.createDIDDocument = createDIDDocument;
const ethers_1 = require("ethers");
/**
 * Formats a did:ethr identifier
 */
function formatDID(chainId, address) {
    if (!(0, ethers_1.isAddress)(address)) {
        throw new Error(`Invalid Ethereum address: ${address}`);
    }
    const checksummed = (0, ethers_1.getAddress)(address);
    return `did:ethr:${chainId}:${checksummed}`;
}
/**
 * Parses a did:ethr identifier
 */
function parseDID(did) {
    const parts = did.split(':');
    if (parts.length < 4 || parts[0] !== 'did' || parts[1] !== 'ethr') {
        throw new Error(`Invalid did:ethr identifier format: ${did}`);
    }
    const chainId = parseInt(parts[2], 10);
    const address = (0, ethers_1.getAddress)(parts[3]);
    return { chainId, address };
}
/**
 * Constructs a W3C-compliant DID Document with key-wrapping agreement keys
 */
function createDIDDocument(chainId, address, keyWrappingPublicKeyHex) {
    const did = formatDID(chainId, address);
    const vmId = `${did}#controller`;
    const doc = {
        '@context': [
            'https://www.w3.org/ns/did/v1',
            'https://w3id.org/security/suites/ed25519-2020/v1',
        ],
        id: did,
        controller: did,
        verificationMethod: [
            {
                id: vmId,
                type: 'EcdsaSecp256k1RecoveryMethod2020',
                controller: did,
                blockchainAccountId: `eip155:${chainId}:${address}`,
            },
        ],
        authentication: [vmId],
        assertionMethod: [vmId],
    };
    if (keyWrappingPublicKeyHex) {
        const wrapId = `${did}#key-wrap-1`;
        doc.keyAgreement = [
            {
                id: wrapId,
                type: 'JsonWebKey2020',
                controller: did,
                publicKeyHex: keyWrappingPublicKeyHex,
            },
        ];
    }
    return doc;
}
//# sourceMappingURL=did.js.map