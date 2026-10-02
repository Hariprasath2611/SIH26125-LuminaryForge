import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/index';

describe('IPFS Pinning & Health Checker API', () => {
  let uploadedCid: string;

  it('POST /v1/ipfs/upload should accept ciphertext and return pinned CID with 3 cluster replicas', async () => {
    const fakeCiphertextBase64 = Buffer.from('ENCRYPTED_TEST_CIPHERTEXT_BYTES').toString('base64');

    const res = await request(app)
      .post('/v1/ipfs/upload')
      .send({
        ciphertext: fakeCiphertextBase64,
        filename: 'degree.pdf.enc',
        metadata: { mimeType: 'application/pdf', version: 1 },
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.cid).toBeDefined();
    expect(res.body.cid.startsWith('bafkrei')).toBe(true);
    expect(res.body.replicaCount).toBe(3);
    expect(res.body.pinned).toBe(true);

    uploadedCid = res.body.cid;
  }, 15000);

  it('GET /v1/ipfs/pin-status/:cid should return replica breakdown and gateway latency', async () => {
    const res = await request(app).get(`/v1/ipfs/pin-status/${uploadedCid}`);

    expect(res.status).toBe(200);
    expect(res.body.cid).toBe(uploadedCid);
    expect(res.body.status).toBe('PINNED');
    expect(res.body.replicaCount).toBe(3);
    expect(res.body.replicas).toHaveLength(3);
    expect(res.body.replicas[0].status).toBe('ONLINE');
  });

  it('GET /v1/ipfs/health & GET /v1/assets/health should return cluster health status', async () => {
    const res = await request(app).get('/v1/assets/health');

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('HEALTHY');
    expect(res.body.clusterName).toBe('bharosa-ipfs-cluster-prod');
    expect(res.body.onlineNodes).toBe(3);
    expect(res.body.gatewayStatus).toBe('OPERATIONAL');
  });

  it('GET /v1/ipfs/blob/:cid should retrieve stored ciphertext', async () => {
    const res = await request(app).get(`/v1/ipfs/blob/${uploadedCid}`);

    expect(res.status).toBe(200);
    expect(res.body.cid).toBe(uploadedCid);
    expect(res.body.data).toBe(Buffer.from('ENCRYPTED_TEST_CIPHERTEXT_BYTES').toString('base64'));
  });
});
