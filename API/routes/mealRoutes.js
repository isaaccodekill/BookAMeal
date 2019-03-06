import express from 'express';

import MealServices from '../services/mealServices';

import MealValidation from '../middleware/meal';

const router = express.Router();
router.route('/')
  .get(MealServices.getAllmeals)
  .post(MealValidation.validateMealAddition, MealServices.createAndSave);

router.route('/:id')
  .get(MealServices.findMealById)
  .put(MealValidation.validateMealUpdate, MealServices.findMealByIdAndUpdate)
  .delete(MealServices.findMealByIdAndDelete);

export default router;
