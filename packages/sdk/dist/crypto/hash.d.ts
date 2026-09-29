/**
 * Computes SHA-256 hash and returns hexadecimal string with 0x prefix
 */
export declare function sha256Hex(data: Uint8Array | string): string;
/**
 * Computes raw SHA-256 bytes
 */
export declare function sha256Bytes(data: Uint8Array | string): Uint8Array;
/**
 * Constant-time comparison to prevent timing attacks
 */
export declare function constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean;
/**
 * Overwrites memory buffer with zeroes for cryptographic hygiene
 */
export declare function zeroize(buffer: Uint8Array): void;
//# sourceMappingURL=hash.d.ts.map