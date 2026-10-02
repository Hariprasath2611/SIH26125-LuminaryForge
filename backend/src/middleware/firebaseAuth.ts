import { Request, Response, NextFunction } from 'express';
import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getAuth, DecodedIdToken } from 'firebase-admin/auth';
import { env } from '../config/env';
import { prisma } from '../lib/prisma';

// Configure Firebase Admin
if (env.FIREBASE_AUTH_EMULATOR_HOST) {
  process.env.FIREBASE_AUTH_EMULATOR_HOST = env.FIREBASE_AUTH_EMULATOR_HOST;
}

if (!getApps().length) {
  if (env.FIREBASE_CLIENT_EMAIL && env.FIREBASE_PRIVATE_KEY) {
    initializeApp({
      credential: cert({
        projectId: env.FIREBASE_PROJECT_ID,
        clientEmail: env.FIREBASE_CLIENT_EMAIL,
        privateKey: env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      }),
    });
  } else {
    // Emulator or default demo project
    initializeApp({
      projectId: env.FIREBASE_PROJECT_ID,
    });
  }
}

export interface FirebaseAuthenticatedRequest extends Request {
  firebaseUser?: DecodedIdToken | {
    uid: string;
    email: string;
    email_verified?: boolean;
    name?: string;
  };
  account?: any;
}

export async function requireFirebaseAuth(
  req: FirebaseAuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({
      code: 'UNAUTHORIZED',
      message: 'Missing or malformed Authorization header. Expected Bearer <Firebase ID token>',
      requestId: req.headers['x-request-id'] || 'req_unauth',
    });
    return;
  }

  const token = authHeader.split('Bearer ')[1].trim();
  if (!token) {
    res.status(401).json({
      code: 'UNAUTHORIZED',
      message: 'Empty Firebase ID token provided',
    });
    return;
  }

  try {
    let decodedToken: any;

    // Support instant zero-setup demo mode tokens if DEMO_MODE is true and token has demo prefix
    if (env.DEMO_MODE && token.startsWith('demo-jwt-')) {
      const parts = token.split(':');
      const uid = parts[1] || 'demo-user-student';
      const email = parts[2] || 'student@bharosa.demo';
      decodedToken = {
        uid,
        email,
        email_verified: true,
        name: parts[3] || 'Demo Student',
      };
    } else {
      decodedToken = await getAuth().verifyIdToken(token, true);
    }

    // Require email verification for password accounts
    if (decodedToken.firebase?.sign_in_provider === 'password' && !decodedToken.email_verified) {
      res.status(403).json({
        code: 'EMAIL_NOT_VERIFIED',
        message: 'Email must be verified before accessing the application',
      });
      return;
    }

    req.firebaseUser = decodedToken;

    // Attach or upsert database account
    const account = await prisma.account.findUnique({
      where: { uid: decodedToken.uid },
    });
    req.account = account;

    next();
  } catch (err: any) {
    res.status(401).json({
      code: 'INVALID_TOKEN',
      message: err.message || 'Firebase ID token verification failed',
      requestId: req.headers['x-request-id'] || 'req_err',
    });
  }
}
