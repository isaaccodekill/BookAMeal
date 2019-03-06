import { Router } from 'express';
import CatererValidation from '../middleware/caterer';
import CatererAuthController from '../auth/catererAuthController';

const router = Router();

router.route('/signup')
  .post(CatererValidation.validateCatererSignUp, CatererAuthController.Register);

router.route('/login')
  .post(CatererValidation.validateCatererLogin, CatererAuthController.Login);


export default router;
