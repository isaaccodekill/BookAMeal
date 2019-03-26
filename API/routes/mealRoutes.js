import express from 'express';

import MealServices from '../services/mealServices';

import MealValidation from '../middleware/meal';

import Authorization from '../auth/authorization';

import Validation from '../validations/validate';

const router = express.Router();

router.route('/')
  .get(Authorization.checkForToken, Authorization.verifyCaterer, MealServices.getAllmeals)
  .post(Authorization.checkForToken, Authorization.verifyCaterer,
    MealValidation.validateMealAddition, MealServices.createAndSave);

router.route('/:id')
  .get(Authorization.checkForToken, Authorization.verifyCaterer, MealServices.findMealById)
  .put(Authorization.checkForToken, Authorization.verifyCaterer, Validation.validateMealCreator,
    MealValidation.validateMealUpdate, MealServices.findMealByIdAndUpdate)
  .delete(Authorization.checkForToken, Authorization.verifyCaterer, Validation.validateMealCreator,
    MealServices.findMealByIdAndDelete);

export default router;
