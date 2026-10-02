import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { requireAuth } from '../middleware/auth';
import { requireFirebaseAuth } from '../middleware/firebaseAuth';
import { verifyAccessToken } from '../lib/jwt';

const router = Router();

router.get('/nonce', AuthController.getNonce);
router.post('/verify', AuthController.verify);
router.post('/refresh', AuthController.refresh);
router.post('/logout', AuthController.logout);

// Firebase & SIWE Protected Endpoints
router.post('/link-wallet', requireFirebaseAuth, AuthController.linkWallet);
router.post('/unlink-wallet', requireFirebaseAuth, AuthController.unlinkWallet);
router.get('/me', (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.split('Bearer ')[1].trim();
    try {
      const payload = verifyAccessToken(token);
      if (payload && payload.address) {
        req.user = payload;
        return AuthController.me(req, res);
      }
    } catch {
      // Continue to Firebase Auth
    }
    return requireFirebaseAuth(req, res, () => AuthController.me(req, res));
  }
  return requireAuth(req, res, () => AuthController.me(req, res));
});

export default router;

