import { sha256Hex } from './hash';

export interface EncryptedPayload {
  ciphertext: Uint8Array;
  iv: Uint8Array;
  aad: string;
  plaintextHash: string;
  ciphertextHash: string;
}

function getSubtleCrypto(): SubtleCrypto {
  if (typeof globalThis !== 'undefined' && globalThis.crypto?.subtle) {
    return globalThis.crypto.subtle;
  }
  throw new Error('WebCrypto subtle is not available in the current environment');
}

/**
 * Generates a random 256-bit AES-GCM key
 */
export async function generateAESKey(): Promise<CryptoKey> {
  const subtle = getSubtleCrypto();
  return subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt']
  );
}

/**
 * Exports raw 32-byte key material
 */
export async function exportAESKey(key: CryptoKey): Promise<Uint8Array> {
  const subtle = getSubtleCrypto();
  const raw = await subtle.exportKey('raw', key);
  return new Uint8Array(raw);
}

/**
 * Imports raw 32-byte key material into a CryptoKey
 */
export async function importAESKey(rawKey: Uint8Array): Promise<CryptoKey> {
  if (rawKey.length !== 32) {
    throw new Error(`Invalid AES-256 key length: expected 32 bytes, got ${rawKey.length}`);
  }
  const subtle = getSubtleCrypto();
  return subtle.importKey(
    'raw',
    rawKey,
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt']
  );
}

/**
 * Generates a random 96-bit (12 bytes) IV for AES-GCM
 */
export function generateIV(): Uint8Array {
  const iv = new Uint8Array(12);
  globalThis.crypto.getRandomValues(iv);
  return iv;
}

/**
 * Encrypts arbitrary file data with AES-256-GCM using unique 96-bit IV and AAD (assetId + version)
 */
export async function encryptFile(
  data: Uint8Array,
  key: CryptoKey,
  assetId: string,
  version: number = 1
): Promise<EncryptedPayload> {
  const subtle = getSubtleCrypto();
  const iv = generateIV();

  // Additional Authenticated Data (AAD) bound to assetId and version
  const aadString = `${assetId}:v${version}`;
  const aad = new TextEncoder().encode(aadString);

  const plaintextHash = sha256Hex(data);

  const encryptedBuffer = await subtle.encrypt(
    {
      name: 'AES-GCM',
      iv,
      additionalData: aad,
      tagLength: 128,
    },
    key,
    data
  );

  const ciphertext = new Uint8Array(encryptedBuffer);
  const ciphertextHash = sha256Hex(ciphertext);

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
export async function decryptFile(
  ciphertext: Uint8Array,
  key: CryptoKey,
  iv: Uint8Array,
  assetId: string,
  version: number = 1
): Promise<Uint8Array> {
  const subtle = getSubtleCrypto();
  const aadString = `${assetId}:v${version}`;
  const aad = new TextEncoder().encode(aadString);

  try {
    const decryptedBuffer = await subtle.decrypt(
      {
        name: 'AES-GCM',
        iv,
        additionalData: aad,
        tagLength: 128,
      },
      key,
      ciphertext
    );

    return new Uint8Array(decryptedBuffer);
  } catch (err: any) {
    throw new Error('Decryption failed: Authentication tag mismatch or corrupted ciphertext/AAD');
  }
}
