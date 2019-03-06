import express from 'express';
import MenuServices from '../services/menuServices';
import MenuValidation from '../middleware/menu';


const router = express.Router();

router.route('/')
  .get(MenuServices.getMenu)
  .post(MenuValidation.validateMenuCreate, MenuServices.createAndSaveMenu)
  .put(MenuValidation.validateMenuEdit, MenuServices.editMenu);

export default router;
