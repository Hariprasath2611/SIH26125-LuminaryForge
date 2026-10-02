import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/index';

describe('Quick Demo Login & State Reset API', () => {
  it('1. GET /v1/demo/users returns all 5 seeded demo accounts', async () => {
    const res = await request(app).get('/v1/demo/users');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.users).toHaveLength(5);

    const names = res.body.users.map((u: any) => u.displayName);
    expect(names).toContain('Priya Sharma');
    expect(names).toContain('Chennai University');
    expect(names).toContain('TechCorp HR');
    expect(names).toContain('Arjun Mehta');
    expect(names).toContain('Bharosa Admin');
  });

  it('2. POST /v1/demo/login for Priya Sharma returns customToken and student account', async () => {
    const res = await request(app)
      .post('/v1/demo/login')
      .send({ demoUserId: 'priya' });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.customToken).toBeDefined();
    expect(res.body.user.uid).toBe('demo-priya-sharma');
    expect(res.body.user.persona).toBe('HOLDER');
    expect(res.body.user.walletAddress.toLowerCase()).toBe('0x70997970c51812dc3a010c7d01b50e0d17dc79c8');
    expect(res.body.user.isDemo).toBe(true);
  });

  it('3. POST /v1/demo/login for unknown user returns 404', async () => {
    const res = await request(app)
      .post('/v1/demo/login')
      .send({ demoUserId: 'non_existent_user' });

    expect(res.status).toBe(404);
    expect(res.body.code).toBe('USER_NOT_FOUND');
  });

  it('4. POST /v1/demo/reset re-syncs all demo accounts', async () => {
    const res = await request(app).post('/v1/demo/reset').send();
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toContain('Demo state reset successfully');
  });
});
