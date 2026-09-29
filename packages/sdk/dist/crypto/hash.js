"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sha256Hex = sha256Hex;
exports.sha256Bytes = sha256Bytes;
exports.constantTimeEqual = constantTimeEqual;
exports.zeroize = zeroize;
const sha256_1 = require("@noble/hashes/sha256");
const utils_1 = require("@noble/curves/abstract/utils");
/**
 * Computes SHA-256 hash and returns hexadecimal string with 0x prefix
 */
function sha256Hex(data) {
    const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : data;
    const hashBytes = (0, sha256_1.sha256)(bytes);
    return `0x${(0, utils_1.bytesToHex)(hashBytes)}`;
}
/**
 * Computes raw SHA-256 bytes
 */
function sha256Bytes(data) {
    const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : data;
    return (0, sha256_1.sha256)(bytes);
}
/**
 * Constant-time comparison to prevent timing attacks
 */
function constantTimeEqual(a, b) {
    if (a.length !== b.length)
        return false;
    let c = 0;
    for (let i = 0; i < a.length; i++) {
        c |= a[i] ^ b[i];
    }
    return c === 0;
}
/**
 * Overwrites memory buffer with zeroes for cryptographic hygiene
 */
function zeroize(buffer) {
    buffer.fill(0);
}
//# sourceMappingURL=hash.js.map