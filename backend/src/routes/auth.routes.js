import { Router } from 'express';
import {
    authenticateAdmin,
    authenticateUser,
} from '../middleware/auth.middleware.js';
import {
    userLogout,
    userRegister,
    userLogin,
} from '../controllers/user.controller.js';

const router = Router();

router.get('/', authenticateUser);
router.get('/admin', authenticateAdmin);
router.post('/login', userLogin);
router.post('/register', userRegister);
router.post('/logout', userLogout);

export default router;
