import express from 'express';
import OrderServices from '../services/orderService';
import OrderMiddleware from '../middleware/order';
import Authorization from '../auth/authorization';
import Validation from '../validations/validate';

const router = express.Router();
router.route('/')
  .get(Authorization.checkForToken, Authorization.verifyCaterer, OrderServices.getOrders)
  .post(Authorization.checkForToken, Authorization.verifyUser,
    OrderMiddleware.validateorderAddition, OrderServices.createAndSaveOrder);


router.route('/:id')
  .get(OrderServices.findOrderById)
  .put(Authorization.checkForToken, Authorization.verifyUser, Validation.validateOrderCreator,
    OrderMiddleware.validateOrderUpdate, OrderServices.findOrderByIdAndUpdate)
  .delete(Authorization.checkForToken, Authorization.verifyUser, Validation.validateOrderCreator,
    OrderServices.findOrderByIdAndDelete);

export default router;
