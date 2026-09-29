import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/index';

describe('Access Control API (Requests, Grants, and Consent Receipts)', () => {
  it('GET /v1/access/requests should return list of pending requests', async () => {
    const res = await request(app).get('/v1/access/requests');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].role).toBeDefined();
    expect(res.body[0].purpose).toBeDefined();
  });

  it('POST /v1/access/requests should register a new access request', async () => {
    const newReq = {
      assetId: '0x4f8a129d5b78e3c4a16298dbfc10398457291a0c84918239048a12837f4819a1',
      assetName: 'B.Tech Degree Certificate (Alice Sharma)',
      requester: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
      role: 'EMPLOYER',
      purpose: 'Technical interview verification',
      requestedDurationHours: 48,
    };

    const res = await request(app).post('/v1/access/requests').send(newReq);

    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.status).toBe('PENDING');
    expect(res.body.requester).toBe(newReq.requester.toLowerCase());
  });

  it('POST /v1/access/consent-receipt generates cryptographic consent receipt', async () => {
    const payload = {
      ownerAddress: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
      granteeAddress: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
      assetId: '0x4f8a129d5b78e3c4a16298dbfc10398457291a0c84918239048a12837f4819a1',
      assetName: 'B.Tech Degree Certificate',
      role: 'VERIFIER',
      purpose: 'Background check for employment',
      notBefore: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 86400000).toISOString(),
    };

    const res = await request(app).post('/v1/access/consent-receipt').send(payload);

    expect(res.status).toBe(201);
    expect(res.body.consentId).toBeDefined();
    expect(res.body.jurisdiction).toBe('IN-DPDP-Act-2023');
    expect(res.body.signature).toMatch(/^0x[a-f0-9]{64}$/);
    expect(res.body.policy.revocable).toBe(true);

    const consentId = res.body.consentId;

    // Fetch the receipt back
    const getRes = await request(app).get(`/v1/access/consent-receipt/${consentId}`);
    expect(getRes.status).toBe(200);
    expect(getRes.body.consentId).toBe(consentId);
  });
});
