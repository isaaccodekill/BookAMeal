import express from 'express';
import OrderServices from '../services/orderService';

const orderService = new OrderServices();

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).json(orderService.getOrders());
});

router.post('/', (req, res) => {
  res.json(orderService.createAndSaveOrder(req.body));
});

router.put('/:id', (req, res) => {
  res.json(orderService.findOrderByIdAndUpdate(req.params.id, req.body));
});

router.delete('/:id', (req, res) => {
  res.json(orderService.findOrderByIdAndDelete(req.params.id));
});

export default router;
