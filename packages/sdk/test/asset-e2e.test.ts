import { describe, it, expect } from 'vitest';
import {
  generateAESKey,
  exportAESKey,
  importAESKey,
  encryptFile,
  decryptFile,
  sha256Hex,
} from '../src/crypto';
import { IPFSClient } from '../src/ipfs';

describe('End-to-End Encrypted Asset Lifecycle (Encrypt -> IPFS -> Fetch -> Decrypt -> Verify Integrity)', () => {
  const ipfs = new IPFSClient();

  it('completes the full lifecycle with a simulated PDF degree document', async () => {
    // 1. Simulate a PDF document buffer (starts with %PDF-1.5 header)
    const pdfHeader = '%PDF-1.5\n%\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
    const degreeBody = 'Delhi Technological University · Bachelor of Technology Degree · Roll No: 2022/CS/101 · Recipient: Alice Sharma · CGPA: 9.4';
    const fakePdfBytes = new TextEncoder().encode(pdfHeader + degreeBody);

    // 2. Compute Plaintext Content Hash (The on-chain immutable integrity anchor)
    const originalPlaintextHash = sha256Hex(fakePdfBytes);
    expect(originalPlaintextHash).toMatch(/^0x[a-f0-9]{64}$/);

    // 3. Generate AES-256-GCM symmetric key
    const aesKey = await generateAESKey();
    const rawKeyBytes = await exportAESKey(aesKey);
    expect(rawKeyBytes.length).toBe(32);

    // 4. Encrypt file with unique 96-bit IV and AAD bound to assetId
    const assetId = '0x' + 'a'.repeat(64);
    const encrypted = await encryptFile(fakePdfBytes, aesKey, assetId, 1);

    expect(encrypted.ciphertext).not.toEqual(fakePdfBytes);
    expect(encrypted.iv.length).toBe(12);
    expect(encrypted.aad).toBe(`${assetId}:v1`);
    expect(encrypted.plaintextHash).toBe(originalPlaintextHash);

    // 5. Upload encrypted ciphertext blob to IPFS
    const uploadResult = await ipfs.upload(encrypted.ciphertext, 'alice-degree.pdf.enc');
    expect(uploadResult.cid).toBeDefined();
    expect(uploadResult.cid.startsWith('bafkrei')).toBe(true);

    // 6. Fetch encrypted ciphertext blob from IPFS
    const fetchedCiphertext = await ipfs.fetch(uploadResult.cid);
    expect(fetchedCiphertext).toEqual(encrypted.ciphertext);

    // 7. Holder or Authorized Verifier imports key and decrypts
    const importedKey = await importAESKey(rawKeyBytes);
    const decryptedBytes = await decryptFile(
      fetchedCiphertext,
      importedKey,
      encrypted.iv,
      assetId,
      1
    );

    // 8. Verify Decrypted Content matches original
    expect(decryptedBytes).toEqual(fakePdfBytes);

    // 9. Recompute hash of decrypted bytes and verify on-chain integrity
    const decryptedHash = sha256Hex(decryptedBytes);
    expect(decryptedHash).toBe(originalPlaintextHash);

    // 10. Tamper Detection Invariant: Even a 1-bit alteration in ciphertext MUST throw
    const tamperedCiphertext = new Uint8Array(fetchedCiphertext);
    tamperedCiphertext[0] ^= 0x01; // flip 1 bit

    await expect(
      decryptFile(tamperedCiphertext, importedKey, encrypted.iv, assetId, 1)
    ).rejects.toThrow(/Authentication tag mismatch/i);

    // 11. Tamper Detection Invariant: Altering AAD (e.g. wrong assetId or version) MUST throw
    await expect(
      decryptFile(fetchedCiphertext, importedKey, encrypted.iv, '0x' + 'b'.repeat(64), 1)
    ).rejects.toThrow(/Authentication tag mismatch/i);
  });
});
