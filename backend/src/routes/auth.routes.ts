import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { requireAuth } from '../middleware/auth';
import { requireFirebaseAuth } from '../middleware/firebaseAuth';

const router = Router();

router.get('/nonce', AuthController.getNonce);
router.post('/verify', AuthController.verify);
router.post('/refresh', AuthController.refresh);
router.post('/logout', AuthController.logout);

// Firebase Auth Protected Endpoints
router.post('/link-wallet', requireFirebaseAuth, AuthController.linkWallet);
router.post('/unlink-wallet', requireFirebaseAuth, AuthController.unlinkWallet);
router.get('/me', (req, res, next) => {
  if (req.headers.authorization?.startsWith('Bearer ')) {
    return requireFirebaseAuth(req, res, () => AuthController.me(req, res));
  }
  return requireAuth(req, res, () => AuthController.me(req, res));
});

export default router;

