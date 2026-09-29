import { Router } from 'express';
import { VerifyController } from '../controllers/verify.controller';

const router = Router();

router.post('/credential', VerifyController.verifyCredential);

export default router;
