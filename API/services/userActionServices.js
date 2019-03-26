import Caterer from '../models/caterer';
import extractParams from '../Extras/extractParams';
import User from '../models/user';
import populate from '../Extras/populate';
import Order from '../models/order';

class UserActions {
  static getAllCaterers(req, res) {
    extractParams(Caterer.findAll(), 'id,name,restaurant')
      .then((arr) => {
        res.status(200).json({
          status: 'successfull',
          Caterers: arr,
        });
      })
      .catch((err) => {
        res.status(200).json({
          status: 'Unsuccessfull',
          err,
        });
      });
  }

  static saveCaterers(req, res) {
    User.findByPk(req.user.id)
      .then((user) => {
        let ExistingArray = null;
        if (user.saveCaterers == null) {
          ExistingArray = [];
          ExistingArray.push(req.body.savedCaterers);
        } else {
          ExistingArray = user.savedCaterers;
          ExistingArray.push(req.body.savedCaterers);
        }
        User.update({ savedCaterers: ExistingArray }, { where: { id: req.user.id } })
          .then(() => {
            res.status(200).json({
              status: 'successful',
              message: 'caterer saved',
            });
          });
      });
  }

  static getSavedCaterers(req, res) {
    let catererList = null;
    User.findByPk(req.user.id)
      .then((user) => {
        catererList = user.savedCaterers;
      })
      .then(() => {
        return populate(Caterer, catererList, 'id,restaurant,name');
      })
      .then((populatedCaterers) => {
        res.status(200).json({
          status: 'successfull',
          savedCaterers: populatedCaterers,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: 'unsuccesful',
          error,
        });
      });
  }

  static getOrderHistory(req, res) {
    Order.findAll({ where: { UserId: req.user.id } })
      .then((orders) => {
        res.status(200).json({
          status: 'successfull',
          orders,
        });
      })
      .catch(() => {
        res.status(400).json({
          status: 'unsuccesfull',
          message: 'Could not retreive order history'
        });
      });
  }

  static deleteSavedCaterer(req, res) {
    User.findByPk(req.user.id)
      .then((user) => {
        let ExistingArray = null;
        let newArr = null;
        if (user.saveCaterers == null) {
          ExistingArray = [];
          newArr = [];
        } else {
          ExistingArray = user.savedCaterers;
          newArr = ExistingArray.filter(id => id !== req.params.id);
        }
        User.update({ savedCaterers: newArr }, { where: { id: req.user.id } })
          .then(() => {
            res.status(200).json({
              status: 'successful',
              message: 'caterer deleted',
            });
          });
      });
  }
}

export default UserActions;
