import Meal from '../models/meal';
import Order from '../models/order';

class orderServices {
  static getOrders(req, res, next) {
    return Order.findAll({ include: [Meal] })
      .then((Orders) => {
        const orderList = Orders.filter(order => order.Meal.CatererId === req.caterer.id);
        res.status(200).json({
          status: 'successful',
          orderList,
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

  static createAndSaveOrder(req, res) {
    req.body.userId = req.user.id;
    return Order.create({
      quantity: req.body.quantity,
      cost: req.body.cost,
      address: req.body.address,
      resolved: req.body.resolved,
      method: req.body.method,
      MealId: req.body.MealId,
      UserId: req.body.userId,
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
      });
  }

  static findOrderById(req, res) {
    return Order.findByPk(req.params.id)
      .then((foundOrder) => {
        if (!foundOrder) {
          res.status(500).json({
            status: 'un-succesful',
            message: 'order Not found',
          });
        } else {
          res.status(200).json({
            status: 'successful',
            foundOrder,
          });
        }
      })
      .catch((error) => {
        res.status(400).json({
          status: 'unsuccesful',
          error,
        });
      });
  }

  static findOrderByIdAndUpdate(req, res) {
    console.log("order Body", req.body)
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
      });
  }

  static findOrderByIdAndDelete(req, res) {
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
      });
  }
}


// note for id let the id be the position in the array in wwhich they belong
// or make it a random number

export default orderServices;
