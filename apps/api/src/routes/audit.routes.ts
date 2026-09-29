import { Router } from 'express';
import { AuditController } from '../controllers/audit.controller';

const router = Router();

router.get('/', AuditController.getAuditEvents);
router.get('/export', AuditController.exportAuditCSV);
router.get('/stats', AuditController.getPlatformStats);
router.get('/dids/:identifier', AuditController.getDid);

export default router;
