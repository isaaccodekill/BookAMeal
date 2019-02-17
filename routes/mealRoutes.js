import express from 'express';

import MealServices from '../services/mealServices';

const mealServices = new MealServices();

const router = express.Router();
router.get('/', (req, res) => {
  res.json(mealServices.getAllmeals(req.body));
});

router.get('/:id', (req, res) => {
  res.json(mealServices.findMealById(req.params.id));
});

router.post('/', (req, res) => {
  res.status(201).json(mealServices.createAndSave(req.body));
});

router.put('/:id', (req, res) => {
  res.json(mealServices.findMealByIdAndUpdate(req.params.id, req.body));
});

router.delete('/:id', (req, res) => {
  res.json(mealServices.findMealByIdAndDelete(req.params.id));
});

export default router;
