import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/index';

describe('Audit & Platform Stats API', { timeout: 15000 }, () => {
  it('GET /v1/audit should return paginated audit logs', async () => {
    const res = await request(app).get('/v1/audit?page=1&limit=10');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('events');
    expect(Array.isArray(res.body.events)).toBe(true);
    expect(res.body).toHaveProperty('pagination');
    expect(res.body.pagination.page).toBe(1);
    expect(res.body.pagination.limit).toBe(10);
  });

  it('GET /v1/audit/export should return downloadable CSV file', async () => {
    const res = await request(app).get('/v1/audit/export');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toContain('text/csv');
    expect(res.text).toContain('Timestamp,Event Type,Actor,Target,Transaction Hash,Block Number');
  });

  it('GET /v1/stats should return platform counts', async () => {
    const res = await request(app).get('/v1/stats');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('didsCount');
    expect(res.body).toHaveProperty('credentialsCount');
    expect(res.body).toHaveProperty('assetsCount');
    expect(res.body).toHaveProperty('activeGrantsCount');
    expect(res.body).toHaveProperty('pendingRequestsCount');
  });
});
