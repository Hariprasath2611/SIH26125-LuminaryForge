import { Router, Response } from 'express';
import { requireFirebaseAuth, FirebaseAuthenticatedRequest } from '../middleware/firebaseAuth';
import { chatRequestSchema, copilotService } from './copilot.service';
import { UserRole } from './guards/roleGuard';

const router = Router();

import { getAuth } from 'firebase-admin/auth';
import { prisma } from '../lib/prisma';
import { env } from '../config/env';

async function optionalFirebaseAuth(
  req: FirebaseAuthenticatedRequest,
  res: Response,
  next: () => void
): Promise<void> {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // Visitor on landing page or public route
    req.firebaseUser = {
      uid: 'visitor_landing',
      email: 'visitor@bharosa.network',
      email_verified: true,
      name: 'Visitor',
    } as any;
    return next();
  }

  const token = authHeader.split('Bearer ')[1].trim();
  if (!token || token === 'demo_token' || token === 'public_visitor') {
    req.firebaseUser = {
      uid: 'visitor_landing',
      email: 'visitor@bharosa.network',
      email_verified: true,
      name: 'Visitor',
    } as any;
    return next();
  }

  try {
    if (env.DEMO_MODE && token.startsWith('demo-jwt-')) {
      const parts = token.split(':');
      req.firebaseUser = {
        uid: parts[1] || 'demo-user-student',
        email: parts[2] || 'student@bharosa.demo',
        email_verified: true,
        name: parts[3] || 'Demo Student',
      } as any;
    } else {
      const decoded = await getAuth().verifyIdToken(token, true);
      req.firebaseUser = decoded;
    }

    if (req.firebaseUser?.uid) {
      const account = await prisma.account.findUnique({
        where: { uid: req.firebaseUser.uid },
      });
      req.account = account;
    }
  } catch (e) {
    // If token is invalid or expired, fallback gracefully to visitor mode
    req.firebaseUser = {
      uid: 'visitor_landing',
      email: 'visitor@bharosa.network',
      email_verified: true,
      name: 'Visitor',
    } as any;
  }

  next();
}

// POST /v1/copilot/chat - SSE streaming endpoint (works for both logged in users and landing page visitors)
router.post('/chat', optionalFirebaseAuth, async (req: FirebaseAuthenticatedRequest, res: Response) => {
  const parsed = chatRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: 'INVALID_REQUEST',
      message: 'Invalid Copilot request body',
      issues: parsed.error.issues,
    });
  }

  const uid = req.firebaseUser?.uid || 'visitor_landing';
  const role = (req.account?.persona || req.body.context?.role || 'HOLDER').toUpperCase() as UserRole;
  const walletAddress = req.account?.walletAddress;
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '127.0.0.1';

  // Support client disconnection / abort signal
  const ac = new AbortController();
  req.on('close', () => {
    ac.abort();
  });

  await copilotService.handleChatStream(
    parsed.data,
    { uid, role, walletAddress },
    clientIp,
    res,
    ac.signal
  );
});

// POST /v1/copilot/feedback - Thumbs up/down feedback
router.post('/feedback', requireFirebaseAuth, async (req: FirebaseAuthenticatedRequest, res: Response) => {
  const { messageId, vote, comment } = req.body;
  // Vote is "up" | "down"
  return res.status(200).json({
    status: 'ok',
    message: 'Feedback received. Thank you for improving Bharosa Copilot!',
    recorded: { messageId, vote, comment: comment || null },
  });
});

// GET /v1/copilot/health - Diagnostics endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    mode: process.env.COPILOT_MODE || 'auto',
    provider: process.env.COPILOT_PROVIDER || 'offline-kb',
    ragEnabled: true,
  });
});

export default router;
