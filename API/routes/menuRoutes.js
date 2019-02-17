import express from 'express';
import MenuServices from '../services/menuServices';

const menuService = new MenuServices();


const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(menuService.getMenu());
});

router.post('/', (req, res) => {
  res.status(201).json(menuService.createAndSaveMenu(req.body));
});

router.put('/', (req, res) => {
  res.status(201).json(menuService.editMenu(req.body));
});

export default router;
