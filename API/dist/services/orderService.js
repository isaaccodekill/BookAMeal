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

    this.orders = [];
  }

  _createClass(orderServices, [{
    key: "getOrders",
    value: function getOrders() {
      return this.orders;
    }
  }, {
    key: "createAndSaveOrder",
    value: function createAndSaveOrder(body) {
      var newMeal = new _meal.default();
      newMeal.id = body.meal.id;
      newMeal.name = body.meal.name;
      newMeal.price = body.meal.price;
      newMeal.description = body.meal.description;
      newMeal.currency = body.meal.currency;
      newMeal.calories = body.meal.calories;
      var newOrder = new _order.default();
      newOrder.id = body.id;
      newOrder.meal = newMeal;
      newOrder.quantity = body.quantity;
      newOrder.cost = newOrder.meal.price * newOrder.quantity;
      newOrder.method = body.method;
      newOrder.address = body.address;
      this.orders.push(newOrder);
      return {
        message: 'An order was created',
        newOrder: newOrder
      };
    }
  }, {
    key: "findOrderById",
    value: function findOrderById(id) {
      var index = this.orders.findIndex(function (order) {
        return order.id === id;
      });
      return this.orders[index];
    }
  }, {
    key: "findOrderByIdAndUpdate",
    value: function findOrderByIdAndUpdate(id, body) {
      var foundOrder = this.findOrderById(id);
      var newMeal = new _meal.default();
      newMeal.id = body.meal.id;
      newMeal.name = body.meal.name;
      newMeal.price = body.meal.price;
      newMeal.description = body.meal.description;
      newMeal.currency = body.meal.currency;
      newMeal.calories = body.meal.calories;
      var updatedOrder = new _order.default();
      updatedOrder.id = id;
      updatedOrder.meal = newMeal;
      updatedOrder.quantity = body.quantity;
      updatedOrder.cost = updatedOrder.meal.price * updatedOrder.quantity;
      updatedOrder.method = body.method;
      updatedOrder.address = body.address;
      var index = this.orders.findIndex(function (x) {
        return x.id === foundOrder.id;
      });
      this.orders[index] = updatedOrder;
      return {
        message: 'The order was updated',
        updatedOrder: updatedOrder
      };
    }
  }, {
    key: "findOrderByIdAndDelete",
    value: function findOrderByIdAndDelete(id) {
      var foundOrder = this.findOrderById(id);
      var index = this.orders.findIndex(function (x) {
        return x.id === foundOrder.id;
      });
      this.orders.splice(index, 1);
      return {
        message: 'An order was deleted'
      };
    }
  }]);

  return orderServices;
}(); // note for id let the id be the position in the array in wwhich they belong
// or make it a random number


var _default = orderServices;
exports.default = _default;