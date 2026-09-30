import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/index';

describe('Security Center API (Threat Alerts & Quick-Lock Freeze)', () => {
  it('GET /v1/security/alerts returns threat intelligence alerts with severities', async () => {
    const res = await request(app).get('/v1/security/alerts');

    expect(res.status).toBe(200);
    expect(res.body.totalAlerts).toBeGreaterThan(0);
    expect(res.body.alerts[0].alertType).toBeDefined();
    expect(res.body.alerts[0].severity).toBeDefined();
    expect(res.body.alerts[0].recommendedAction).toBeDefined();
  });

  it('POST /v1/security/quick-lock triggers emergency account freeze', async () => {
    const targetAddress = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';

    const res = await request(app).post('/v1/security/quick-lock').send({
      accountAddress: targetAddress,
      reason: 'Unusual access request burst from suspicious ASN',
    });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.status).toBe('LOCKED');

    // Verify lock status endpoint
    const statusRes = await request(app).get(`/v1/security/quick-lock/${targetAddress}`);
    expect(statusRes.status).toBe(200);
    expect(statusRes.body.isLocked).toBe(true);
  });
});
