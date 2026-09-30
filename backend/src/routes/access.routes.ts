import { Router } from 'express';
import {
  getRequests,
  createRequest,
  generateConsentReceipt,
  getConsentReceipt,
} from '../controllers/access.controller';

const router = Router();

router.get('/requests', getRequests);
router.post('/requests', createRequest);
router.post('/consent-receipt', generateConsentReceipt);
router.get('/consent-receipt/:consentId', getConsentReceipt);

export default router;
