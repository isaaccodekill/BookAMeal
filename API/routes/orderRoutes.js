import express from 'express';
import OrderServices from '../services/orderService';
import OrderMiddleware from '../middleware/order';


const router = express.Router();
router.route('/')
  .get(OrderServices.getOrders)
  .post(OrderMiddleware.validateorderAddition, OrderServices.createAndSaveOrder);


router.route('/:id')
  .get(OrderServices.findOrderById)
  .put(OrderMiddleware.validateOrderUpdate, OrderServices.findOrderByIdAndUpdate)
  .delete(OrderServices.findOrderByIdAndDelete);

export default router;
