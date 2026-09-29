import { hkdf } from '@noble/hashes/hkdf';
import { sha256 } from '@noble/hashes/sha256';
import { secp256k1 } from '@noble/curves/secp256k1';
import { bytesToHex, hexToBytes } from '@noble/curves/abstract/utils';

export interface DerivedKeypair {
  privateKey: Uint8Array;
  publicKey: Uint8Array;
  privateKeyHex: string;
  publicKeyHex: string;
}

const DOMAIN_SALT = new TextEncoder().encode('BHAROSA_KEY_WRAPPING_SALT_V1');

/**
 * Derives a deterministic secp256k1 wrapping keypair from a wallet signature using domain-separated HKDF-SHA256
 */
export function deriveWrappingKeypairFromSignature(
  signatureHex: string,
  version: number = 1
): DerivedKeypair {
  const cleanSig = signatureHex.startsWith('0x') ? signatureHex.slice(2) : signatureHex;
  const signatureBytes = hexToBytes(cleanSig);

  const info = new TextEncoder().encode(`bharosa:keywrap:v${version}`);

  // Extract-and-Expand 32 bytes using HKDF-SHA256
  const derivedKeyBytes = hkdf(sha256, signatureBytes, DOMAIN_SALT, info, 32);

  // Ensure derived key is a valid secp256k1 scalar
  const privateKey = new Uint8Array(derivedKeyBytes);
  const publicKey = secp256k1.getPublicKey(privateKey, true); // 33-byte compressed

  return {
    privateKey,
    publicKey,
    privateKeyHex: `0x${bytesToHex(privateKey)}`,
    publicKeyHex: `0x${bytesToHex(publicKey)}`,
  };
}
