import { Router, Response } from 'express';
import { requireFirebaseAuth, FirebaseAuthenticatedRequest } from '../middleware/firebaseAuth';
import { chatRequestSchema, copilotService } from './copilot.service';
import { UserRole } from './guards/roleGuard';

const router = Router();

// POST /v1/copilot/chat - SSE streaming endpoint
router.post('/chat', requireFirebaseAuth, async (req: FirebaseAuthenticatedRequest, res: Response) => {
  const parsed = chatRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: 'INVALID_REQUEST',
      message: 'Invalid Copilot request body',
      issues: parsed.error.issues,
    });
  }

  const uid = req.firebaseUser?.uid || 'anon_user';
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
