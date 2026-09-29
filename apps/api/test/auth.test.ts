import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';
import app from '../src/index';

describe('SIWE Authentication Flow', () => {
  const testWallet = ethers.Wallet.createRandom();
  let validNonce: string;
  let accessToken: string;
  let refreshToken: string;

  it('1. GET /v1/auth/nonce should return a cryptographically secure nonce', async () => {
    const res = await request(app).get('/v1/auth/nonce');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('nonce');
    expect(typeof res.body.nonce).toBe('string');
    expect(res.body.nonce.length).toBeGreaterThanOrEqual(8);
    validNonce = res.body.nonce;
  });

  it('2. POST /v1/auth/verify should authenticate a valid SIWE signature', async () => {
    const domain = 'localhost:3000';
    const origin = 'http://localhost:3000';

    const siweMessage = new SiweMessage({
      domain,
      address: testWallet.address,
      statement: 'Sign in with Ethereum to Bharosa Platform',
      uri: origin,
      version: '1',
      chainId: 31337,
      nonce: validNonce,
      issuedAt: new Date().toISOString(),
    });

    const preparedMessage = siweMessage.prepareMessage();
    const signature = await testWallet.signMessage(preparedMessage);

    const res = await request(app)
      .post('/v1/auth/verify')
      .send({
        message: preparedMessage,
        signature,
      });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.user.address).toBe(testWallet.address.toLowerCase());
    expect(res.body).toHaveProperty('accessToken');
    expect(res.body).toHaveProperty('refreshToken');

    accessToken = res.body.accessToken;
    refreshToken = res.body.refreshToken;
  });

  it('3. INVARIANT: Nonce is single-use only (replay attack must fail)', async () => {
    const domain = 'localhost:3000';
    const origin = 'http://localhost:3000';

    const siweMessage = new SiweMessage({
      domain,
      address: testWallet.address,
      statement: 'Replayed sign in attempt',
      uri: origin,
      version: '1',
      chainId: 31337,
      nonce: validNonce, // Reusing previously used nonce
      issuedAt: new Date().toISOString(),
    });

    const preparedMessage = siweMessage.prepareMessage();
    const signature = await testWallet.signMessage(preparedMessage);

    const res = await request(app)
      .post('/v1/auth/verify')
      .send({
        message: preparedMessage,
        signature,
      });

    expect(res.status).toBe(400);
    expect(res.body.code).toBe('INVALID_NONCE');
  });

  it('4. Tampered signature should be rejected', async () => {
    const nonceRes = await request(app).get('/v1/auth/nonce');
    const nonce = nonceRes.body.nonce;

    const domain = 'localhost:3000';
    const origin = 'http://localhost:3000';

    const siweMessage = new SiweMessage({
      domain,
      address: testWallet.address,
      statement: 'Tampered signature test',
      uri: origin,
      version: '1',
      chainId: 31337,
      nonce,
      issuedAt: new Date().toISOString(),
    });

    const preparedMessage = siweMessage.prepareMessage();
    const badSignature = '0x' + '1'.repeat(130);

    const res = await request(app)
      .post('/v1/auth/verify')
      .send({
        message: preparedMessage,
        signature: badSignature,
      });

    expect(res.status).toBe(400);
  });

  it('5. GET /v1/auth/me should return authenticated user profile', async () => {
    const res = await request(app)
      .get('/v1/auth/me')
      .set('Authorization', `Bearer ${accessToken}`);

    expect(res.status).toBe(200);
    expect(res.body.user.address).toBe(testWallet.address.toLowerCase());
    expect(res.body.did).toBe(`did:ethr:31337:${testWallet.address.toLowerCase()}`);
  });

  it('6. POST /v1/auth/refresh should rotate access and refresh tokens', async () => {
    const res = await request(app)
      .post('/v1/auth/refresh')
      .send({ refreshToken });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body).toHaveProperty('accessToken');
    expect(res.body).toHaveProperty('refreshToken');
  });

  it('7. POST /v1/auth/logout should clear cookies', async () => {
    const res = await request(app).post('/v1/auth/logout');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
