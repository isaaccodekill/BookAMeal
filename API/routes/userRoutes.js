import { Router } from 'express';
import UserValidation from '../middleware/user';
import UserAuthController from '../auth/userAuthController';

const router = Router();
// register
// login
// logout

router.route('/signup')
  .post(UserValidation.validateUserSignUp, UserAuthController.Register);

router.route('/login')
  .post(UserValidation.validateUserLogin, UserAuthController.Login);

export default router;
