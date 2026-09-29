import { secp256k1 } from '@noble/curves/secp256k1';
import { hkdf } from '@noble/hashes/hkdf';
import { sha256 } from '@noble/hashes/sha256';
import { bytesToHex, hexToBytes } from '@noble/curves/abstract/utils';
import { importAESKey, exportAESKey } from './aes';

export interface WrappedKeyEnvelope {
  version: number;
  ephemeralPublicKeyHex: string;
  ivHex: string;
  ciphertextHex: string; // contains ciphertext + auth tag
}

const ECIES_SALT = new TextEncoder().encode('BHAROSA_ECIES_WRAPPING_SALT_V1');
const ECIES_INFO = new TextEncoder().encode('bharosa:ecies:aes-key-wrap');

function getSubtleCrypto(): SubtleCrypto {
  if (typeof globalThis !== 'undefined' && globalThis.crypto?.subtle) {
    return globalThis.crypto.subtle;
  }
  throw new Error('WebCrypto subtle is not available in the current environment');
}

/**
 * Wraps (encrypts) a 32-byte AES file key to a recipient's secp256k1 public key
 */
export async function wrapAESKey(
  rawKeyToWrap: Uint8Array,
  recipientPublicKeyHex: string
): Promise<WrappedKeyEnvelope> {
  if (rawKeyToWrap.length !== 32) {
    throw new Error(`File key must be 32 bytes, got ${rawKeyToWrap.length}`);
  }

  const cleanRecipientPub = recipientPublicKeyHex.startsWith('0x')
    ? recipientPublicKeyHex.slice(2)
    : recipientPublicKeyHex;
  const recipientPubBytes = hexToBytes(cleanRecipientPub);

  // 1. Generate ephemeral secp256k1 keypair
  const ephemeralPriv = secp256k1.utils.randomPrivateKey();
  const ephemeralPub = secp256k1.getPublicKey(ephemeralPriv, true);

  // 2. Compute ECDH shared secret
  const sharedSecret = secp256k1.getSharedSecret(ephemeralPriv, recipientPubBytes);

  // 3. Derive 32-byte wrapping key using HKDF-SHA256
  const wrappingKeyBytes = hkdf(sha256, sharedSecret, ECIES_SALT, ECIES_INFO, 32);

  // 4. Encrypt rawKeyToWrap with AES-256-GCM
  const subtle = getSubtleCrypto();
  const wrappingCryptoKey = await subtle.importKey(
    'raw',
    wrappingKeyBytes,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt']
  );

  const iv = new Uint8Array(12);
  globalThis.crypto.getRandomValues(iv);

  const encryptedBuffer = await subtle.encrypt(
    {
      name: 'AES-GCM',
      iv,
      tagLength: 128,
    },
    wrappingCryptoKey,
    rawKeyToWrap
  );

  return {
    version: 1,
    ephemeralPublicKeyHex: `0x${bytesToHex(ephemeralPub)}`,
    ivHex: `0x${bytesToHex(iv)}`,
    ciphertextHex: `0x${bytesToHex(new Uint8Array(encryptedBuffer))}`,
  };
}

/**
 * Unwraps (decrypts) a wrapped AES file key using recipient's secp256k1 private key
 */
export async function unwrapAESKey(
  envelope: WrappedKeyEnvelope,
  recipientPrivateKeyHex: string
): Promise<Uint8Array> {
  const cleanPriv = recipientPrivateKeyHex.startsWith('0x')
    ? recipientPrivateKeyHex.slice(2)
    : recipientPrivateKeyHex;
  const recipientPrivBytes = hexToBytes(cleanPriv);

  const cleanEphemeralPub = envelope.ephemeralPublicKeyHex.startsWith('0x')
    ? envelope.ephemeralPublicKeyHex.slice(2)
    : envelope.ephemeralPublicKeyHex;
  const ephemeralPubBytes = hexToBytes(cleanEphemeralPub);

  // 1. Compute ECDH shared secret
  const sharedSecret = secp256k1.getSharedSecret(recipientPrivBytes, ephemeralPubBytes);

  // 2. Derive 32-byte wrapping key using HKDF-SHA256
  const wrappingKeyBytes = hkdf(sha256, sharedSecret, ECIES_SALT, ECIES_INFO, 32);

  // 3. Decrypt ciphertext with AES-256-GCM
  const subtle = getSubtleCrypto();
  const wrappingCryptoKey = await subtle.importKey(
    'raw',
    wrappingKeyBytes,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  );

  const iv = hexToBytes(envelope.ivHex.startsWith('0x') ? envelope.ivHex.slice(2) : envelope.ivHex);
  const ciphertext = hexToBytes(
    envelope.ciphertextHex.startsWith('0x') ? envelope.ciphertextHex.slice(2) : envelope.ciphertextHex
  );

  try {
    const decryptedBuffer = await subtle.decrypt(
      {
        name: 'AES-GCM',
        iv,
        tagLength: 128,
      },
      wrappingCryptoKey,
      ciphertext
    );

    return new Uint8Array(decryptedBuffer);
  } catch (err: any) {
    throw new Error('Key unwrap failed: Unauthorized private key or corrupted wrapped envelope');
  }
}
