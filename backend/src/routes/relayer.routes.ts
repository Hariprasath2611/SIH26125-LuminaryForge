import { Router } from 'express';
import { sponsorMetaTx, getTreasury } from '../controllers/relayer.controller';

const router = Router();

router.post('/sponsor', sponsorMetaTx);
router.get('/treasury', getTreasury);
router.get('/stats', getTreasury);

export default router;
