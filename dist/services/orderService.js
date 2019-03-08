"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../models/meal"));

var _order = _interopRequireDefault(require("../models/order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var orderServices =
/*#__PURE__*/
function () {
  function orderServices() {
    _classCallCheck(this, orderServices);
  }

  _createClass(orderServices, null, [{
    key: "getOrders",
    value: function getOrders(req, res, next) {
      return _order.default.findAll({
        include: [_meal.default]
      }).then(function (Orders) {
        res.status(200).json({
          status: 'successful',
          Orders: Orders
        });
      }).catch(function (error) {
        res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
        next();
      });
    }
  }, {
    key: "createAndSaveOrder",
    value: function createAndSaveOrder(req, res, next) {
      return _order.default.create({
        quantity: req.body.quantity,
        cost: req.body.cost,
        address: req.body.address,
        resolved: req.body.resolved,
        method: req.body.method,
        MealId: req.body.MealId // UserId: req.user.id,

      }).then(function (newOrder) {
        res.status(200).json({
          status: 'successful',
          newOrder: newOrder
        });
      }).catch(function (error) {
        res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
        next();
      });
    }
  }, {
    key: "findOrderById",
    value: function findOrderById(req, res, next) {
      return _order.default.findByPk(req.params.id).then(function (foundOrder) {
        if (!foundOrder) {
          res.status(500).json({
            status: 'un-succesful',
            message: 'order Not found'
          });
        }

        res.status(200).json({
          status: 'successful',
          foundOrder: foundOrder
        });
      }).catch(function (error) {
        res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
        next();
      });
    }
  }, {
    key: "findOrderByIdAndUpdate",
    value: function findOrderByIdAndUpdate(req, res, next) {
      return _order.default.update({
        quantity: req.body.quantity,
        cost: req.body.cost,
        address: req.body.address,
        resolved: req.body.resolved,
        method: req.body.method,
        MealId: req.body.MealId
      }, {
        where: {
          id: req.params.id
        }
      }).then(function (updatedOrder) {
        res.status(200).json({
          status: 'successful',
          updatedOrder: updatedOrder
        });
      }).catch(function (error) {
        res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
        next();
      });
    }
  }, {
    key: "findOrderByIdAndDelete",
    value: function findOrderByIdAndDelete(req, res, next) {
      return _order.default.destroy({
        where: {
          id: req.params.id
        }
      }).then(function (deletedOrder) {
        res.status(200).json({
          status: 'successful',
          deletedOrder: deletedOrder
        });
      }).catch(function (error) {
        res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
        next();
      });
    }
  }]);

  return orderServices;
}(); // note for id let the id be the position in the array in wwhich they belong
// or make it a random number


var _default = orderServices;
exports.default = _default;