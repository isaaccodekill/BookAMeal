import { Router } from 'express';
import UserActions from '../services/userActionServices';
import Authorization from '../auth/authorization';

const router = Router();

router.route('/getAllCaterers')
  .get(Authorization.checkForToken, Authorization.verifyUser, UserActions.getAllCaterers);

router.route('/saveCaterer')
  .post(Authorization.checkForToken, Authorization.verifyUser, UserActions.saveCaterers);

router.route('/getSavedCaterers')
  .get(Authorization.checkForToken, Authorization.verifyUser, UserActions.getSavedCaterers);

router.route('/getOrderHistory')
  .get(Authorization.checkForToken, Authorization.verifyUser, UserActions.getOrderHistory);

router.route('/deleteSavedCaterer/:id')
  .post(Authorization.checkForToken, Authorization.verifyUser, UserActions.deleteSavedCaterer);
// here we will save the a caterer to the users saved caterer list
// here will delete a caterer from the saved caterer list

export default router;
