import { Router } from 'express';
import {
  getSecurityAlerts,
  triggerQuickLock,
  getQuickLockStatus,
} from '../controllers/security.controller';

const router = Router();

router.get('/alerts', getSecurityAlerts);
router.post('/quick-lock', triggerQuickLock);
router.get('/quick-lock/:accountAddress', getQuickLockStatus);

export default router;
