import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/index';

describe('Gasless Relayer Service (Meta-Transactions & Treasury)', () => {
  it('GET /v1/relayer/treasury returns relayer health, balance, and policy', async () => {
    const res = await request(app).get('/v1/relayer/treasury');

    expect(res.status).toBe(200);
    expect(res.body.relayerAddress).toMatch(/^0x[a-fA-F0-9]{40}$/);
    expect(res.body.status).toBe('OPERATIONAL');
    expect(res.body.balanceEth).toBeDefined();
    expect(res.body.sponsorPolicy.zeroGasUserFee).toBe(true);
  });

  it('POST /v1/relayer/sponsor sponsors a grantWithSig meta-transaction', async () => {
    const fakeSignature = '0x' + '12'.repeat(65);
    const deadline = Math.floor(Date.now() / 1000) + 3600;

    const payload = {
      type: 'GRANT_WITH_SIG',
      params: {
        owner: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
        assetId: '0x4f8a129d5b78e3c4a16298dbfc10398457291a0c84918239048a12837f4819a1',
        grantee: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
        role: 'VERIFIER',
        purpose: 'Gasless Background Check',
        notBefore: Math.floor(Date.now() / 1000),
        expiresAt: Math.floor(Date.now() / 1000) + 86400,
        wrappedKeyCID: 'bafkreiecieswrap1234567890abcdef',
        deadline,
        signature: fakeSignature,
      },
    };

    const res = await request(app).post('/v1/relayer/sponsor').send(payload);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.sponsored).toBe(true);
    expect(res.body.txHash).toMatch(/^0x[a-f0-9]{64}$/);
    expect(res.body.effectiveGasCostMatic).toBe('0.000000000000000000');
    expect(res.body.relayerAddress).toBeDefined();
  });

  it('POST /v1/relayer/sponsor rejects expired deadline', async () => {
    const expiredDeadline = Math.floor(Date.now() / 1000) - 100;

    const payload = {
      type: 'GRANT_WITH_SIG',
      params: {
        owner: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
        assetId: '0x4f8a129d5b78e3c4a16298dbfc10398457291a0c84918239048a12837f4819a1',
        grantee: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
        signature: '0x' + '12'.repeat(65),
        deadline: expiredDeadline,
      },
    };

    const res = await request(app).post('/v1/relayer/sponsor').send(payload);
    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/expired/i);
  });
});
