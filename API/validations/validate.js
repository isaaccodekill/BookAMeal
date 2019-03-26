import Order from '../models/order';
import Meal from '../models/meal';
// import Menu from '../models/menu';

class Validator {
  static validateOrderCreator(req, res, next) {
    Order.findByPk(req.params.id)
      .then((order) => {
        if (order.UserId === req.user.id) {
          next();
        } else {
          throw new Error('Not authorized');
        }
      })
      .catch((error) => {
        res.status(200).json({
          Message: 'Forbidden/UnAuthorized user',
          error: 'User not Authorized',
        });
      });
  }

  //   static validateMenuCreator(req, res, next) {
  //     Menu.findByPk(req.params.id)
  //         .then((order) => {
  //         if (order.UserId === req.user.id) {
  //             next();
  //         } else {
  //             throw Error;
  //         }
  //         })
  //         .catch((error) => {
  //         res.status(200).json({
  //             Message: 'Forbidden/UnAuthorized user',
  //             error: 'User not Authorized',
  //         });
  //         });
  //     }

  static validateMealCreator(req, res, next) {
    Meal.findByPk(req.params.id)
      .then((meal) => {
        console.log('caterer id', req.caterer.id)
        console.log('meal caterer id', meal)
        if (meal.CatererId === req.caterer.id) {
          next();
        } else {
          throw new Error('unauthorized caterer');
        }
      })
      .catch((error) => {
        res.status(200).json({
          Message: 'Forbidden/UnAuthorized Caterer',
          error,
        });
      });
  }
}


export default Validator;
