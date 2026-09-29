import { describe, it, expect } from 'vitest';
import { ethers } from 'ethers';
import {
  formatDID,
  parseDID,
  createDIDDocument,
  computeCredentialHash,
  signCredential,
  verifyCredentialSignature,
  VerifiableCredential,
} from '../src/did';

describe('SDK DID & VC Module', () => {
  const chainId = 31337;
  const issuerWallet = ethers.Wallet.createRandom();
  const studentWallet = ethers.Wallet.createRandom();

  describe('DID Utilities', () => {
    it('formats and parses did:ethr identifier correctly', () => {
      const did = formatDID(chainId, studentWallet.address);
      expect(did).toBe(`did:ethr:${chainId}:${studentWallet.address}`);

      const parsed = parseDID(did);
      expect(parsed.chainId).toBe(chainId);
      expect(parsed.address.toLowerCase()).toBe(studentWallet.address.toLowerCase());
    });

    it('generates compliant W3C DID document with verification methods and key agreements', () => {
      const doc = createDIDDocument(chainId, studentWallet.address, '0x02abcdef123456');
      expect(doc.id).toBe(`did:ethr:${chainId}:${studentWallet.address}`);
      expect(doc.controller).toBe(doc.id);
      expect(doc.verificationMethod.length).toBeGreaterThan(0);
      expect(doc.keyAgreement?.[0].publicKeyHex).toBe('0x02abcdef123456');
    });
  });

  describe('Verifiable Credentials', () => {
    it('signs and verifies W3C Verifiable Credential using EIP-712', async () => {
      const studentDID = formatDID(chainId, studentWallet.address);
      const issuerDID = formatDID(chainId, issuerWallet.address);

      const unsignedVC = {
        '@context': [
          'https://www.w3.org/2018/credentials/v1',
          'https://bharosa.app/contexts/v1',
        ],
        id: 'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
        type: ['VerifiableCredential', 'UniversityDegreeCredential'],
        issuer: {
          id: issuerDID,
          address: issuerWallet.address,
          name: 'Delhi Technological University',
        },
        issuanceDate: new Date().toISOString(),
        credentialSubject: {
          id: studentDID,
          degree: 'Bachelor of Technology',
          major: 'Computer Science and Engineering',
          cgpa: 9.2,
          graduationYear: 2026,
        },
      };

      // 1. Sign credential
      const signedVC: VerifiableCredential = await signCredential(unsignedVC, issuerWallet, chainId);
      expect(signedVC.proof).toBeDefined();
      expect(signedVC.proof.type).toBe('EthereumEip712Signature2021');
      expect(signedVC.proof.proofValue.startsWith('0x')).toBe(true);

      // 2. Verify signature
      const isValid = verifyCredentialSignature(signedVC, chainId);
      expect(isValid).toBe(true);

      // 3. Compute deterministic on-chain anchor hash
      const hash1 = computeCredentialHash(signedVC);
      const hash2 = computeCredentialHash(unsignedVC);
      expect(hash1).toBe(hash2);
      expect(hash1.startsWith('0x')).toBe(true);
      expect(hash1.length).toBe(66);
    });

    it('rejects tampered credential signature', async () => {
      const studentDID = formatDID(chainId, studentWallet.address);
      const issuerDID = formatDID(chainId, issuerWallet.address);

      const unsignedVC = {
        '@context': [
          'https://www.w3.org/2018/credentials/v1',
        ],
        id: 'urn:uuid:test-tamper',
        type: ['VerifiableCredential'],
        issuer: {
          id: issuerDID,
          address: issuerWallet.address,
        },
        issuanceDate: new Date().toISOString(),
        credentialSubject: {
          id: studentDID,
          cgpa: 7.0,
        },
      };

      const signedVC = await signCredential(unsignedVC, issuerWallet, chainId);

      // Maliciously tamper with CGPA after signing
      signedVC.credentialSubject.cgpa = 9.9;

      const isValid = verifyCredentialSignature(signedVC, chainId);
      expect(isValid).toBe(false);
    });
  });
});
