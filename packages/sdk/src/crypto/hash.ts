import { sha256 } from '@noble/hashes/sha256';
import { bytesToHex } from '@noble/curves/abstract/utils';

/**
 * Computes SHA-256 hash and returns hexadecimal string with 0x prefix
 */
export function sha256Hex(data: Uint8Array | string): string {
  const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : data;
  const hashBytes = sha256(bytes);
  return `0x${bytesToHex(hashBytes)}`;
}

/**
 * Computes raw SHA-256 bytes
 */
export function sha256Bytes(data: Uint8Array | string): Uint8Array {
  const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : data;
  return sha256(bytes);
}

/**
 * Constant-time comparison to prevent timing attacks
 */
export function constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let c = 0;
  for (let i = 0; i < a.length; i++) {
    c |= a[i] ^ b[i];
  }
  return c === 0;
}

/**
 * Overwrites memory buffer with zeroes for cryptographic hygiene
 */
export function zeroize(buffer: Uint8Array): void {
  buffer.fill(0);
}
