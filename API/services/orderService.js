import Meal from '../models/meal';
import Order from '../models/order';

class orderServices {
  static getOrders(req, res, next) {
    return Order.findAll({ include: [Meal] })
      .then((Orders) => {
        res.status(200).json({
          status: 'successful',
          Orders,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 'unsuccesful',
          error,
        });
        next();
      });
  }

  static createAndSaveOrder(req, res, next) {
    return Order.create({
      quantity: req.body.quantity,
      cost: req.body.cost,
      address: req.body.address,
      resolved: req.body.resolved,
      method: req.body.method,
      MealId: req.body.MealId,
      // UserId: req.user.id,
    })
      .then((newOrder) => {
        res.status(200).json({
          status: 'successful',
          newOrder,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 'unsuccesful',
          error,
        });
        next();
      });
  }

  static findOrderById(req, res, next) {
    return Order.findByPk(req.params.id)
      .then((foundOrder) => {
        res.status(200).json({
          status: 'successful',
          foundOrder,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 'unsuccesful',
          error,
        });
        next();
      });
  }

  static findOrderByIdAndUpdate(req, res, next) {
    return Order.update({
      quantity: req.body.quantity,
      cost: req.body.cost,
      address: req.body.address,
      resolved: req.body.resolved,
      method: req.body.method,
      MealId: req.body.MealId,
    }, { where: { id: req.params.id } })
      .then((updatedOrder) => {
        res.status(200).json({
          status: 'successful',
          updatedOrder,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 'unsuccesful',
          error,
        });
        next();
      });
  }

  static findOrderByIdAndDelete(req, res, next) {
    return Order.destroy({ where: { id: req.params.id } })
      .then((deletedOrder) => {
        res.status(200).json({
          status: 'successful',
          deletedOrder,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 'unsuccesful',
          error,
        });
        next();
      });
  }
}


// note for id let the id be the position in the array in wwhich they belong
// or make it a random number

export default orderServices;
