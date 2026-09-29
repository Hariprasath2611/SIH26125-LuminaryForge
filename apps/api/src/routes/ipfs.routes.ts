import { Router } from 'express';
import {
  uploadCiphertext,
  getPinStatus,
  getClusterHealth,
  getCiphertextBlob,
} from '../controllers/ipfs.controller';

const router = Router();

router.post('/upload', uploadCiphertext);
router.get('/pin-status/:cid', getPinStatus);
router.get('/health', getClusterHealth);
router.get('/blob/:cid', getCiphertextBlob);

export default router;
