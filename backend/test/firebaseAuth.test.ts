import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import express from 'express';
import authRoutes from '../src/routes/auth.routes';
import { prisma } from '../src/lib/prisma';
import { cache } from '../src/lib/redis';
import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';

const app = express();
app.use(express.json());
app.use('/v1/auth', authRoutes);

describe('Firebase Auth & Wallet Linking API', () => {
  const testWallet = ethers.Wallet.createRandom();
  const demoToken = 'demo-jwt-:test-uid-123:tester@bharosa.demo:Test User';

  beforeEach(async () => {
    // Clean up test account if exists
    try {
      await prisma.account.deleteMany({
        where: { uid: 'test-uid-123' },
      });
      await prisma.account.deleteMany({
        where: { walletAddress: testWallet.address.toLowerCase() },
      });
    } catch {
      // ignore
    }
  });

  it('1. GET /v1/auth/me with Bearer Firebase ID token returns profile', async () => {
    const res = await request(app)
      .get('/v1/auth/me')
      .set('Authorization', `Bearer ${demoToken}`);

    expect(res.status).toBe(200);
    expect(res.body.uid).toBe('test-uid-123');
    expect(res.body.email).toBe('tester@bharosa.demo');
    expect(res.body.walletAddress).toBeNull();
  });

  it('2. POST /v1/auth/link-wallet links SIWE signature to Firebase account', async () => {
    // Request nonce
    const nonceRes = await request(app).get('/v1/auth/nonce');
    expect(nonceRes.status).toBe(200);
    const nonce = nonceRes.body.nonce;

    const siweMessage = new SiweMessage({
      domain: 'localhost:3000',
      address: testWallet.address,
      statement: 'Link wallet to Bharosa account',
      uri: 'http://localhost:3000',
      version: '1',
      chainId: 31337,
      nonce,
      issuedAt: new Date().toISOString(),
    });

    const preparedMessage = siweMessage.prepareMessage();
    const signature = await testWallet.signMessage(preparedMessage);

    const linkRes = await request(app)
      .post('/v1/auth/link-wallet')
      .set('Authorization', `Bearer ${demoToken}`)
      .send({
        message: preparedMessage,
        signature,
        persona: 'HOLDER',
      });

    expect(linkRes.status).toBe(200);
    expect(linkRes.body.success).toBe(true);
    expect(linkRes.body.account.walletAddress).toBe(testWallet.address.toLowerCase());

    // Profile check
    const meRes = await request(app)
      .get('/v1/auth/me')
      .set('Authorization', `Bearer ${demoToken}`);

    expect(meRes.status).toBe(200);
    expect(meRes.body.walletAddress).toBe(testWallet.address.toLowerCase());
  });

  it('3. Duplicate wallet link to another account should return 409 Conflict', async () => {
    // First link to test-uid-123
    await prisma.account.create({
      data: {
        uid: 'first-user-uid',
        email: 'first@bharosa.demo',
        walletAddress: testWallet.address.toLowerCase(),
      },
    });

    // Try linking to second user
    const nonceRes = await request(app).get('/v1/auth/nonce');
    const nonce = nonceRes.body.nonce;

    const siweMessage = new SiweMessage({
      domain: 'localhost:3000',
      address: testWallet.address,
      statement: 'Link wallet to Bharosa account',
      uri: 'http://localhost:3000',
      version: '1',
      chainId: 31337,
      nonce,
      issuedAt: new Date().toISOString(),
    });

    const preparedMessage = siweMessage.prepareMessage();
    const signature = await testWallet.signMessage(preparedMessage);

    const secondUserToken = 'demo-jwt-:second-user-uid:second@bharosa.demo:Second User';
    const linkRes = await request(app)
      .post('/v1/auth/link-wallet')
      .set('Authorization', `Bearer ${secondUserToken}`)
      .send({
        message: preparedMessage,
        signature,
      });

    expect(linkRes.status).toBe(409);
    expect(linkRes.body.code).toBe('WALLET_ALREADY_LINKED');
  });

  it('4. POST /v1/auth/unlink-wallet clears wallet link', async () => {
    // Pre-create linked account
    await prisma.account.create({
      data: {
        uid: 'test-uid-123',
        email: 'tester@bharosa.demo',
        walletAddress: testWallet.address.toLowerCase(),
      },
    });

    const unlinkRes = await request(app)
      .post('/v1/auth/unlink-wallet')
      .set('Authorization', `Bearer ${demoToken}`);

    expect(unlinkRes.status).toBe(200);
    expect(unlinkRes.body.success).toBe(true);

    const check = await prisma.account.findUnique({
      where: { uid: 'test-uid-123' },
    });
    expect(check?.walletAddress).toBeNull();
  });
});
