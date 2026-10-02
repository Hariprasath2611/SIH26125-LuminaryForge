import { Router } from 'express';
import { DemoController } from '../controllers/demo.controller';

const router = Router();

router.get('/users', DemoController.getDemoUsers);
router.post('/login', DemoController.demoLogin);
router.post('/reset', DemoController.demoReset);

export default router;
