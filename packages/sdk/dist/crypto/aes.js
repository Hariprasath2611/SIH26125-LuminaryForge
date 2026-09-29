"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAESKey = generateAESKey;
exports.exportAESKey = exportAESKey;
exports.importAESKey = importAESKey;
exports.generateIV = generateIV;
exports.encryptFile = encryptFile;
exports.decryptFile = decryptFile;
const hash_1 = require("./hash");
function getSubtleCrypto() {
    if (typeof globalThis !== 'undefined' && globalThis.crypto?.subtle) {
        return globalThis.crypto.subtle;
    }
    throw new Error('WebCrypto subtle is not available in the current environment');
}
/**
 * Generates a random 256-bit AES-GCM key
 */
async function generateAESKey() {
    const subtle = getSubtleCrypto();
    return subtle.generateKey({
        name: 'AES-GCM',
        length: 256,
    }, true, ['encrypt', 'decrypt']);
}
/**
 * Exports raw 32-byte key material
 */
async function exportAESKey(key) {
    const subtle = getSubtleCrypto();
    const raw = await subtle.exportKey('raw', key);
    return new Uint8Array(raw);
}
/**
 * Imports raw 32-byte key material into a CryptoKey
 */
async function importAESKey(rawKey) {
    if (rawKey.length !== 32) {
        throw new Error(`Invalid AES-256 key length: expected 32 bytes, got ${rawKey.length}`);
    }
    const subtle = getSubtleCrypto();
    return subtle.importKey('raw', rawKey, {
        name: 'AES-GCM',
        length: 256,
    }, true, ['encrypt', 'decrypt']);
}
/**
 * Generates a random 96-bit (12 bytes) IV for AES-GCM
 */
function generateIV() {
    const iv = new Uint8Array(12);
    globalThis.crypto.getRandomValues(iv);
    return iv;
}
/**
 * Encrypts arbitrary file data with AES-256-GCM using unique 96-bit IV and AAD (assetId + version)
 */
async function encryptFile(data, key, assetId, version = 1) {
    const subtle = getSubtleCrypto();
    const iv = generateIV();
    // Additional Authenticated Data (AAD) bound to assetId and version
    const aadString = `${assetId}:v${version}`;
    const aad = new TextEncoder().encode(aadString);
    const plaintextHash = (0, hash_1.sha256Hex)(data);
    const encryptedBuffer = await subtle.encrypt({
        name: 'AES-GCM',
        iv: iv,
        additionalData: aad,
        tagLength: 128,
    }, key, data);
    const ciphertext = new Uint8Array(encryptedBuffer);
    const ciphertextHash = (0, hash_1.sha256Hex)(ciphertext);
    return {
        ciphertext,
        iv,
        aad: aadString,
        plaintextHash,
        ciphertextHash,
    };
}
/**
 * Decrypts AES-256-GCM ciphertext and validates authentication tag & AAD
 */
async function decryptFile(ciphertext, key, iv, assetId, version = 1) {
    const subtle = getSubtleCrypto();
    const aadString = `${assetId}:v${version}`;
    const aad = new TextEncoder().encode(aadString);
    try {
        const decryptedBuffer = await subtle.decrypt({
            name: 'AES-GCM',
            iv: iv,
            additionalData: aad,
            tagLength: 128,
        }, key, ciphertext);
        return new Uint8Array(decryptedBuffer);
    }
    catch (err) {
        throw new Error('Decryption failed: Authentication tag mismatch or corrupted ciphertext/AAD');
    }
}
//# sourceMappingURL=aes.js.map