"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapAESKey = wrapAESKey;
exports.unwrapAESKey = unwrapAESKey;
const secp256k1_1 = require("@noble/curves/secp256k1");
const hkdf_1 = require("@noble/hashes/hkdf");
const sha256_1 = require("@noble/hashes/sha256");
const utils_1 = require("@noble/curves/abstract/utils");
const ECIES_SALT = new TextEncoder().encode('BHAROSA_ECIES_WRAPPING_SALT_V1');
const ECIES_INFO = new TextEncoder().encode('bharosa:ecies:aes-key-wrap');
function getSubtleCrypto() {
    if (typeof globalThis !== 'undefined' && globalThis.crypto?.subtle) {
        return globalThis.crypto.subtle;
    }
    throw new Error('WebCrypto subtle is not available in the current environment');
}
/**
 * Wraps (encrypts) a 32-byte AES file key to a recipient's secp256k1 public key
 */
async function wrapAESKey(rawKeyToWrap, recipientPublicKeyHex) {
    if (rawKeyToWrap.length !== 32) {
        throw new Error(`File key must be 32 bytes, got ${rawKeyToWrap.length}`);
    }
    const cleanRecipientPub = recipientPublicKeyHex.startsWith('0x')
        ? recipientPublicKeyHex.slice(2)
        : recipientPublicKeyHex;
    const recipientPubBytes = (0, utils_1.hexToBytes)(cleanRecipientPub);
    // 1. Generate ephemeral secp256k1 keypair
    const ephemeralPriv = secp256k1_1.secp256k1.utils.randomPrivateKey();
    const ephemeralPub = secp256k1_1.secp256k1.getPublicKey(ephemeralPriv, true);
    // 2. Compute ECDH shared secret
    const sharedSecret = secp256k1_1.secp256k1.getSharedSecret(ephemeralPriv, recipientPubBytes);
    // 3. Derive 32-byte wrapping key using HKDF-SHA256
    const wrappingKeyBytes = (0, hkdf_1.hkdf)(sha256_1.sha256, sharedSecret, ECIES_SALT, ECIES_INFO, 32);
    // 4. Encrypt rawKeyToWrap with AES-256-GCM
    const subtle = getSubtleCrypto();
    const wrappingCryptoKey = await subtle.importKey('raw', wrappingKeyBytes, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
    const iv = new Uint8Array(12);
    globalThis.crypto.getRandomValues(iv);
    const encryptedBuffer = await subtle.encrypt({
        name: 'AES-GCM',
        iv,
        tagLength: 128,
    }, wrappingCryptoKey, rawKeyToWrap);
    return {
        version: 1,
        ephemeralPublicKeyHex: `0x${(0, utils_1.bytesToHex)(ephemeralPub)}`,
        ivHex: `0x${(0, utils_1.bytesToHex)(iv)}`,
        ciphertextHex: `0x${(0, utils_1.bytesToHex)(new Uint8Array(encryptedBuffer))}`,
    };
}
/**
 * Unwraps (decrypts) a wrapped AES file key using recipient's secp256k1 private key
 */
async function unwrapAESKey(envelope, recipientPrivateKeyHex) {
    const cleanPriv = recipientPrivateKeyHex.startsWith('0x')
        ? recipientPrivateKeyHex.slice(2)
        : recipientPrivateKeyHex;
    const recipientPrivBytes = (0, utils_1.hexToBytes)(cleanPriv);
    const cleanEphemeralPub = envelope.ephemeralPublicKeyHex.startsWith('0x')
        ? envelope.ephemeralPublicKeyHex.slice(2)
        : envelope.ephemeralPublicKeyHex;
    const ephemeralPubBytes = (0, utils_1.hexToBytes)(cleanEphemeralPub);
    // 1. Compute ECDH shared secret
    const sharedSecret = secp256k1_1.secp256k1.getSharedSecret(recipientPrivBytes, ephemeralPubBytes);
    // 2. Derive 32-byte wrapping key using HKDF-SHA256
    const wrappingKeyBytes = (0, hkdf_1.hkdf)(sha256_1.sha256, sharedSecret, ECIES_SALT, ECIES_INFO, 32);
    // 3. Decrypt ciphertext with AES-256-GCM
    const subtle = getSubtleCrypto();
    const wrappingCryptoKey = await subtle.importKey('raw', wrappingKeyBytes, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
    const iv = (0, utils_1.hexToBytes)(envelope.ivHex.startsWith('0x') ? envelope.ivHex.slice(2) : envelope.ivHex);
    const ciphertext = (0, utils_1.hexToBytes)(envelope.ciphertextHex.startsWith('0x') ? envelope.ciphertextHex.slice(2) : envelope.ciphertextHex);
    try {
        const decryptedBuffer = await subtle.decrypt({
            name: 'AES-GCM',
            iv,
            tagLength: 128,
        }, wrappingCryptoKey, ciphertext);
        return new Uint8Array(decryptedBuffer);
    }
    catch (err) {
        throw new Error('Key unwrap failed: Unauthorized private key or corrupted wrapped envelope');
    }
}
//# sourceMappingURL=ecies.js.map