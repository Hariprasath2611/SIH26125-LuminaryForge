import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { ethers } from 'ethers';
import { formatDID, signCredential } from '@bharosa/sdk';
import app from '../src/index';

describe('Public Verification API', () => {
  const chainId = 31337;
  const issuerWallet = ethers.Wallet.createRandom();
  const studentWallet = ethers.Wallet.createRandom();

  it('POST /v1/verify/credential verifies authentic credential', async () => {
    const studentDID = formatDID(chainId, studentWallet.address);
    const issuerDID = formatDID(chainId, issuerWallet.address);

    const unsignedVC = {
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      id: 'urn:uuid:test-verify-1',
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
        cgpa: 9.4,
      },
    };

    const signedVC = await signCredential(unsignedVC, issuerWallet, chainId);

    const res = await request(app)
      .post('/v1/verify/credential')
      .send(signedVC);

    expect(res.status).toBe(200);
    expect(res.body.checks.signatureValid).toBe(true);
    expect(res.body.checks.notExpired).toBe(true);
    expect(res.body.checks.subjectMatches).toBe(true);
    expect(res.body.credentialHash.startsWith('0x')).toBe(true);
  });

  it('POST /v1/verify/credential rejects tampered credential', async () => {
    const studentDID = formatDID(chainId, studentWallet.address);
    const issuerDID = formatDID(chainId, issuerWallet.address);

    const unsignedVC = {
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      id: 'urn:uuid:test-tamper-1',
      type: ['VerifiableCredential'],
      issuer: {
        id: issuerDID,
        address: issuerWallet.address,
      },
      issuanceDate: new Date().toISOString(),
      credentialSubject: {
        id: studentDID,
        cgpa: 8.0,
      },
    };

    const signedVC = await signCredential(unsignedVC, issuerWallet, chainId);

    // Tamper with data
    signedVC.credentialSubject.cgpa = 10.0;

    const res = await request(app)
      .post('/v1/verify/credential')
      .send(signedVC);

    expect(res.status).toBe(200);
    expect(res.body.valid).toBe(false);
    expect(res.body.checks.signatureValid).toBe(false);
    expect(res.body.errors.length).toBeGreaterThan(0);
  });
});
