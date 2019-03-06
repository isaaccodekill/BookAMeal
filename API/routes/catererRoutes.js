import { Router } from 'express';
import catererValidation from '../middleware/caterer';
import catererAuthController from '../auth/catererAuthController';

const router = Router();
// register
// login
// logout

router.route('/register')
  .post();

router.route('/login')
  .post();

router.route('/logout')
  .post();


export default router;
