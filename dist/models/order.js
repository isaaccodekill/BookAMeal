"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("./meal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var order = function order(id, quantity, method, address, cost) {
  _classCallCheck(this, order);

  this.id = id;
  this.meal = new _meal.default();
  this.quantity = quantity;
  this.method = method;
  this.address = address;
  this.cost = cost;
  this.time = Date.now();
};

var _default = order;
exports.default = _default;