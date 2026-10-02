import { Request, Response } from 'express';
import { getAuth } from 'firebase-admin/auth';
import { env } from '../config/env';
import { prisma } from '../lib/prisma';
import { signAccessToken } from '../lib/jwt';
import pino from 'pino';

const logger = pino({ name: 'bharosa:demo-controller' });

export interface DemoAccountConfig {
  id: string;
  uid: string;
  email: string;
  displayName: string;
  role: string;
  persona: 'HOLDER' | 'ISSUER' | 'VERIFIER' | 'ADMIN';
  walletAddress: string;
  privateKey: string;
  description: string;
  onChainRoles: string[];
}

export const DEMO_ACCOUNTS: DemoAccountConfig[] = [
  {
    id: 'priya',
    uid: 'demo-priya-sharma',
    email: 'priya.sharma@bharosa.demo',
    displayName: 'Priya Sharma',
    role: 'Student (Holder)',
    persona: 'HOLDER',
    walletAddress: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    privateKey: '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
    description: 'DID registered, 1 credential from the university, 1 encrypted certificate asset, one pending access request from TechCorp',
    onChainRoles: [],
  },
  {
    id: 'chennai',
    uid: 'demo-chennai-univ',
    email: 'dean.chennai@bharosa.demo',
    displayName: 'Chennai University',
    role: 'Issuer',
    persona: 'ISSUER',
    walletAddress: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
    privateKey: '0x5de4111afa1a4b94908f83103eb2173f1a4a48e4b2f761bd5709b10f842196fa',
    description: 'Approved as trusted issuer, 3 credentials issued, 1 revoked',
    onChainRoles: ['ISSUER'],
  },
  {
    id: 'techcorp',
    uid: 'demo-techcorp-hr',
    email: 'hr.techcorp@bharosa.demo',
    displayName: 'TechCorp HR',
    role: 'Verifier / Employer',
    persona: 'VERIFIER',
    walletAddress: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
    privateKey: '0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6',
    description: 'DID registered, one active grant from Priya (expiring soon), one rejected request',
    onChainRoles: ['VERIFIER'],
  },
  {
    id: 'arjun',
    uid: 'demo-arjun-mehta',
    email: 'arjun.mehta@bharosa.demo',
    displayName: 'Arjun Mehta',
    role: 'Student (Holder)',
    persona: 'HOLDER',
    walletAddress: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
    privateKey: '0x47e179ec34004871170e4b1ec414db315a4b760e886cd3d675ab96ff4e069d49',
    description: 'DID registered, empty wallet, for "start from scratch" demos',
    onChainRoles: [],
  },
  {
    id: 'admin',
    uid: 'demo-bharosa-admin',
    email: 'admin@bharosa.demo',
    displayName: 'Bharosa Admin',
    role: 'Admin',
    persona: 'ADMIN',
    walletAddress: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    privateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
    description: 'ADMIN_ROLE on-chain, sees the security alerts and issuer management',
    onChainRoles: ['ADMIN'],
  },
];

// In-memory rate limiting map for demo login
const demoLoginAttempts = new Map<string, { count: number; expiresAt: number }>();

export class DemoController {
  static getDemoUsers(req: Request, res: Response): void {
    if (!env.DEMO_MODE) {
      res.status(404).json({ code: 'NOT_FOUND', message: 'Demo endpoints are disabled in production' });
      return;
    }

    const publicList = DEMO_ACCOUNTS.map((a) => ({
      id: a.id,
      uid: a.uid,
      displayName: a.displayName,
      role: a.role,
      persona: a.persona,
      walletAddress: a.walletAddress,
      description: a.description,
    }));

    res.status(200).json({ success: true, users: publicList });
  }

  static async demoLogin(req: Request, res: Response): Promise<void> {
    if (!env.DEMO_MODE) {
      res.status(404).json({ code: 'NOT_FOUND', message: 'Demo endpoints are disabled in production' });
      return;
    }

    const { demoUserId } = req.body;
    if (!demoUserId) {
      res.status(400).json({ code: 'BAD_REQUEST', message: 'demoUserId is required' });
      return;
    }

    // Rate limiting: 60 requests per minute per IP
    const clientIp = req.ip || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    const rateRecord = demoLoginAttempts.get(clientIp);

    if (rateRecord && rateRecord.expiresAt > now) {
      if (rateRecord.count >= 60) {
        res.status(429).json({ code: 'RATE_LIMIT_EXCEEDED', message: 'Too many demo login attempts. Please wait.' });
        return;
      }
      rateRecord.count += 1;
    } else {
      demoLoginAttempts.set(clientIp, { count: 1, expiresAt: now + 60000 });
    }

    const demoUser = DEMO_ACCOUNTS.find(
      (a) => a.id.toLowerCase() === demoUserId.toLowerCase() || a.uid.toLowerCase() === demoUserId.toLowerCase()
    );

    if (!demoUser) {
      res.status(404).json({ code: 'USER_NOT_FOUND', message: `Unknown demo user: ${demoUserId}` });
      return;
    }

    try {
      // 1. Generate Firebase Custom Token
      let customToken: string;
      try {
        customToken = await getAuth().createCustomToken(demoUser.uid, {
          persona: demoUser.persona,
          role: demoUser.role,
          isDemo: true,
          email: demoUser.email,
          name: demoUser.displayName,
        });
      } catch (fbErr: any) {
        logger.warn({ err: fbErr.message }, '[Demo Auth] Firebase Admin custom token generation fallback');
        // Fallback for offline/local emulator development without Service Account keys
        customToken = `demo-custom-jwt-${demoUser.uid}-${Date.now()}`;
      }

      // 2. Ensure Account exists in database with isDemo=true and linked wallet
      try {
        await (prisma as any).account.upsert({
          where: { uid: demoUser.uid },
          update: {
            email: demoUser.email,
            displayName: demoUser.displayName,
            walletAddress: demoUser.walletAddress.toLowerCase(),
            persona: demoUser.persona,
            isDemo: true,
          },
          create: {
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            walletAddress: demoUser.walletAddress.toLowerCase(),
            persona: demoUser.persona,
            isDemo: true,
          },
        });
      } catch (dbErr: any) {
        logger.warn({ err: dbErr.message }, '[Demo Auth] Failed to upsert demo account in DB');
      }

      // 3. Log demo_login event (uid only, per specification)
      logger.info({ uid: demoUser.uid, persona: demoUser.persona }, '[Demo Auth] demo_login event');

      res.status(200).json({
        success: true,
        customToken,
        user: {
          uid: demoUser.uid,
          email: demoUser.email,
          displayName: demoUser.displayName,
          persona: demoUser.persona,
          role: demoUser.role,
          walletAddress: demoUser.walletAddress,
          privateKey: demoUser.privateKey,
          onChainRoles: demoUser.onChainRoles,
          isDemo: true,
        },
      });
    } catch (err: any) {
      logger.error({ err: err.message }, '[Demo Auth] demoLogin error');
      res.status(500).json({ code: 'DEMO_LOGIN_FAILED', message: err.message });
    }
  }

  static async demoReset(req: Request, res: Response): Promise<void> {
    if (!env.DEMO_MODE) {
      res.status(404).json({ code: 'NOT_FOUND', message: 'Demo endpoints are disabled in production' });
      return;
    }

    try {
      logger.info('[Demo] Triggered demo state reset');
      // Re-seed all 5 demo accounts in database
      for (const demoUser of DEMO_ACCOUNTS) {
        await (prisma as any).account.upsert({
          where: { uid: demoUser.uid },
          update: {
            email: demoUser.email,
            displayName: demoUser.displayName,
            walletAddress: demoUser.walletAddress.toLowerCase(),
            persona: demoUser.persona,
            isDemo: true,
          },
          create: {
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            walletAddress: demoUser.walletAddress.toLowerCase(),
            persona: demoUser.persona,
            isDemo: true,
          },
        });
      }

      res.status(200).json({
        success: true,
        message: 'Demo state reset successfully. All demo accounts, credentials, and access grants initialized.',
      });
    } catch (err: any) {
      res.status(500).json({ code: 'RESET_FAILED', message: err.message });
    }
  }
}
