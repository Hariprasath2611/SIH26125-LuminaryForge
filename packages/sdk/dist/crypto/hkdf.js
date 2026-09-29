"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveWrappingKeypairFromSignature = deriveWrappingKeypairFromSignature;
const hkdf_1 = require("@noble/hashes/hkdf");
const sha256_1 = require("@noble/hashes/sha256");
const secp256k1_1 = require("@noble/curves/secp256k1");
const utils_1 = require("@noble/curves/abstract/utils");
const DOMAIN_SALT = new TextEncoder().encode('BHAROSA_KEY_WRAPPING_SALT_V1');
/**
 * Derives a deterministic secp256k1 wrapping keypair from a wallet signature using domain-separated HKDF-SHA256
 */
function deriveWrappingKeypairFromSignature(signatureHex, version = 1) {
    const cleanSig = signatureHex.startsWith('0x') ? signatureHex.slice(2) : signatureHex;
    const signatureBytes = (0, utils_1.hexToBytes)(cleanSig);
    const info = new TextEncoder().encode(`bharosa:keywrap:v${version}`);
    // Extract-and-Expand 32 bytes using HKDF-SHA256
    const derivedKeyBytes = (0, hkdf_1.hkdf)(sha256_1.sha256, signatureBytes, DOMAIN_SALT, info, 32);
    // Ensure derived key is a valid secp256k1 scalar
    const privateKey = new Uint8Array(derivedKeyBytes);
    const publicKey = secp256k1_1.secp256k1.getPublicKey(privateKey, true); // 33-byte compressed
    return {
        privateKey,
        publicKey,
        privateKeyHex: `0x${(0, utils_1.bytesToHex)(privateKey)}`,
        publicKeyHex: `0x${(0, utils_1.bytesToHex)(publicKey)}`,
    };
}
//# sourceMappingURL=hkdf.js.map