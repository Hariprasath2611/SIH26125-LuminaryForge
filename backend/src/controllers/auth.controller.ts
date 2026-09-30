import { Request, Response } from 'express';
import { generateNonce, SiweMessage } from 'siwe';
import { z } from 'zod';
import { cache } from '../lib/redis';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../lib/jwt';
import { AuthenticatedRequest } from '../middleware/auth';
import { env } from '../config/env';

const verifySchema = z.object({
  message: z.string().min(1, 'SIWE message string required'),
  signature: z.string().min(1, 'Signature required'),
});

const refreshSchema = z.object({
  refreshToken: z.string().optional(),
});

export class AuthController {
  static async getNonce(req: Request, res: Response): Promise<void> {
    try {
      const nonce = generateNonce();
      // Store in Redis with 5-minute TTL (300 seconds)
      await cache.set(`siwe:nonce:${nonce}`, '1', 'EX', 300);

      res.status(200).json({ nonce });
    } catch (err: any) {
      res.status(500).json({
        code: 'NONCE_GENERATION_FAILED',
        message: err.message,
        requestId: req.headers['x-request-id'] || 'req_none',
      });
    }
  }

  static async verify(req: Request, res: Response): Promise<void> {
    const parseResult = verifySchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({
        code: 'VALIDATION_ERROR',
        message: 'Invalid request body',
        details: parseResult.error.flatten(),
      });
      return;
    }

    const { message, signature } = parseResult.data;

    try {
      const siweMessage = new SiweMessage(message);

      // Verify that the nonce was previously issued and not yet used
      const storedNonce = await cache.get(`siwe:nonce:${siweMessage.nonce}`);
      if (!storedNonce) {
        res.status(400).json({
          code: 'INVALID_NONCE',
          message: 'Nonce has expired or was already used',
          requestId: req.headers['x-request-id'] || 'req_none',
        });
        return;
      }

      // Cryptographically verify signature against the message
      const verifyResult = await siweMessage.verify({
        signature,
        nonce: siweMessage.nonce,
        domain: env.SIWE_DOMAIN,
      });

      if (!verifyResult.success) {
        res.status(401).json({
          code: 'INVALID_SIGNATURE',
          message: 'SIWE cryptographic signature verification failed',
        });
        return;
      }

      // Delete nonce immediately to prevent replay attacks
      await cache.del(`siwe:nonce:${siweMessage.nonce}`);

      const userPayload = {
        address: siweMessage.address.toLowerCase(),
        chainId: siweMessage.chainId,
      };

      const accessToken = signAccessToken(userPayload);
      const refreshToken = signRefreshToken(userPayload);

      // Set HttpOnly, Secure, SameSite=Strict cookies
      res.cookie('access_token', accessToken, {
        httpOnly: true,
        secure: env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 15 * 60 * 1000, // 15 mins
      });

      res.cookie('refresh_token', refreshToken, {
        httpOnly: true,
        secure: env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.status(200).json({
        success: true,
        user: userPayload,
        accessToken,
        refreshToken,
      });
    } catch (err: any) {
      res.status(400).json({
        code: 'SIWE_VERIFY_ERROR',
        message: err.message || 'Verification error',
      });
    }
  }

  static async refresh(req: Request, res: Response): Promise<void> {
    const parseResult = refreshSchema.safeParse(req.body);
    let token = parseResult.success ? parseResult.data.refreshToken : undefined;

    if (!token && req.headers.cookie) {
      const cookies = Object.fromEntries(
        req.headers.cookie.split(';').map((c) => {
          const [k, ...v] = c.trim().split('=');
          return [k, v.join('=')];
        })
      );
      token = cookies['refresh_token'];
    }

    if (!token) {
      res.status(401).json({
        code: 'UNAUTHORIZED',
        message: 'Refresh token missing',
      });
      return;
    }

    try {
      const payload = verifyRefreshToken(token);
      const userPayload = { address: payload.address, chainId: payload.chainId };

      const newAccessToken = signAccessToken(userPayload);
      const newRefreshToken = signRefreshToken(userPayload);

      res.cookie('access_token', newAccessToken, {
        httpOnly: true,
        secure: env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 15 * 60 * 1000,
      });

      res.cookie('refresh_token', newRefreshToken, {
        httpOnly: true,
        secure: env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(200).json({
        success: true,
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
    } catch (err: any) {
      res.status(401).json({
        code: 'INVALID_REFRESH_TOKEN',
        message: err.message || 'Invalid or expired refresh token',
      });
    }
  }

  static async logout(req: Request, res: Response): Promise<void> {
    res.clearCookie('access_token');
    res.clearCookie('refresh_token');
    res.status(200).json({ success: true, message: 'Logged out successfully' });
  }

  static async me(req: AuthenticatedRequest, res: Response): Promise<void> {
    res.status(200).json({
      user: req.user,
      did: `did:ethr:${req.user?.chainId}:${req.user?.address}`,
    });
  }
}
