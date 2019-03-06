import express from 'express';
import OrderServices from '../services/orderService';
import OrderMiddleware from '../middleware/order';
import Authorization from '../auth/authorization';

const router = express.Router();
router.route('/')
  .get(Authorization.checkForToken, Authorization.verifyCaterer, OrderServices.getOrders)
  .post(OrderMiddleware.validateorderAddition, OrderServices.createAndSaveOrder);


router.route('/:id')
  .get(OrderServices.findOrderById)
  .put(OrderMiddleware.validateOrderUpdate, OrderServices.findOrderByIdAndUpdate)
  .delete(OrderServices.findOrderByIdAndDelete);

export default router;
