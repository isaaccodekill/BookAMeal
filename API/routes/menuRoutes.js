import express from 'express';
import MenuServices from '../services/menuServices';
import MenuValidation from '../middleware/menu';
import Authorization from '../auth/authorization';

const router = express.Router();

router.route('/:chefId')
  .get(Authorization.checkForToken, Authorization.verifyUser, MenuServices.getMenu);

router.route('/')
  .post(Authorization.checkForToken, Authorization.verifyCaterer, MenuValidation.validateMenuCreate,
    MenuServices.createAndSaveMenu)
  .put(Authorization.checkForToken, Authorization.verifyCaterer, MenuValidation.validateMenuEdit,
    MenuServices.editMenu);

export default router;
