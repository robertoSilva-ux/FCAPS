import { Router } from 'express';
import { AccountController } from '../controllers/accountController.js';

const router = Router();

router.get('/accounts', AccountController.getAccounts);

export default router;