import { describe, it, expect } from 'vitest';
import {
  sha256Hex,
  constantTimeEqual,
  zeroize,
  generateAESKey,
  exportAESKey,
  importAESKey,
  encryptFile,
  decryptFile,
  deriveWrappingKeypairFromSignature,
  wrapAESKey,
  unwrapAESKey,
} from '../src/lib/crypto';

describe('SDK Crypto Module', () => {
  describe('Hash & Hygiene', () => {
    it('computes expected SHA-256 hex string', () => {
      const hash = sha256Hex('hello bharosa');
      expect(hash.startsWith('0x')).toBe(true);
      expect(hash.length).toBe(66);
    });

    it('constantTimeEqual correctly compares byte arrays', () => {
      const a = new Uint8Array([1, 2, 3, 4]);
      const b = new Uint8Array([1, 2, 3, 4]);
      const c = new Uint8Array([1, 2, 3, 5]);
      expect(constantTimeEqual(a, b)).toBe(true);
      expect(constantTimeEqual(a, c)).toBe(false);
    });

    it('zeroize clears sensitive buffers in memory', () => {
      const secret = new Uint8Array([99, 88, 77, 66]);
      zeroize(secret);
      expect(Array.from(secret)).toEqual([0, 0, 0, 0]);
    });
  });

  describe('AES-256-GCM File Encryption', () => {
    it('encrypts and decrypts file data with unique IV and AAD', async () => {
      const key = await generateAESKey();
      const assetId = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
      const plaintext = new TextEncoder().encode('Confidential University Degree Certificate Data');

      const encrypted = await encryptFile(plaintext, key, assetId, 1);
      expect(encrypted.ciphertext.length).toBeGreaterThan(plaintext.length); // includes auth tag
      expect(encrypted.iv.length).toBe(12); // 96-bit IV
      expect(encrypted.aad).toBe(`${assetId}:v1`);

      const decrypted = await decryptFile(encrypted.ciphertext, key, encrypted.iv, assetId, 1);
      expect(new TextDecoder().decode(decrypted)).toBe('Confidential University Degree Certificate Data');
    });

    it('reverts decryption if ciphertext or AAD is tampered with', async () => {
      const key = await generateAESKey();
      const assetId = '0xAssetId123';
      const plaintext = new TextEncoder().encode('Sensitive Plaintext');

      const encrypted = await encryptFile(plaintext, key, assetId, 1);

      // Tampered ciphertext
      const tamperedCiphertext = new Uint8Array(encrypted.ciphertext);
      tamperedCiphertext[0] ^= 0xff;

      await expect(
        decryptFile(tamperedCiphertext, key, encrypted.iv, assetId, 1)
      ).rejects.toThrow('Decryption failed');

      // Tampered AAD (e.g. wrong version or wrong assetId)
      await expect(
        decryptFile(encrypted.ciphertext, key, encrypted.iv, assetId, 2)
      ).rejects.toThrow('Decryption failed');
    });
  });

  describe('HKDF Key Derivation', () => {
    it('derives deterministic secp256k1 keypair from wallet signature', () => {
      const mockSignature =
        '0x' +
        '1a2b3c4d5e6f708192a3b4c5d6e7f8091a2b3c4d5e6f708192a3b4c5d6e7f809' +
        '1a2b3c4d5e6f708192a3b4c5d6e7f8091a2b3c4d5e6f708192a3b4c5d6e7f809' +
        '1b';

      const keypair1 = deriveWrappingKeypairFromSignature(mockSignature, 1);
      const keypair2 = deriveWrappingKeypairFromSignature(mockSignature, 1);

      expect(keypair1.publicKeyHex).toBe(keypair2.publicKeyHex);
      expect(keypair1.privateKeyHex).toBe(keypair2.privateKeyHex);
      expect(keypair1.privateKey.length).toBe(32);
      expect(keypair1.publicKey.length).toBe(33); // compressed secp256k1
    });
  });

  describe('ECIES Key Wrapping & Unwrapping', () => {
    it('allows sender to wrap file key to recipient public key and recipient to unwrap', async () => {
      // Bob's keypair
      const mockSigBob = '0x' + '2b'.repeat(65);
      const bob = deriveWrappingKeypairFromSignature(mockSigBob, 1);

      // Random 32-byte AES file key
      const fileKeyBytes = new Uint8Array(32);
      globalThis.crypto.getRandomValues(fileKeyBytes);

      // Alice wraps file key to Bob's public key
      const envelope = await wrapAESKey(fileKeyBytes, bob.publicKeyHex);
      expect(envelope.version).toBe(1);
      expect(envelope.ephemeralPublicKeyHex.startsWith('0x')).toBe(true);

      // Bob unwraps file key with his private key
      const unwrappedKeyBytes = await unwrapAESKey(envelope, bob.privateKeyHex);
      expect(unwrappedKeyBytes).toEqual(fileKeyBytes);
    });

    it('reverts unwrap if attempted by unauthorized third party', async () => {
      const mockSigBob = '0x' + '2b'.repeat(65);
      const bob = deriveWrappingKeypairFromSignature(mockSigBob, 1);

      const mockSigMallory = '0x' + '3c'.repeat(65);
      const mallory = deriveWrappingKeypairFromSignature(mockSigMallory, 1);

      const fileKeyBytes = new Uint8Array(32);
      globalThis.crypto.getRandomValues(fileKeyBytes);

      const envelope = await wrapAESKey(fileKeyBytes, bob.publicKeyHex);

      // Mallory tries to unwrap with her private key
      await expect(unwrapAESKey(envelope, mallory.privateKeyHex)).rejects.toThrow(
        'Key unwrap failed'
      );
    });
  });
});
