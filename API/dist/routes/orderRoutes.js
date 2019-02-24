"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _orderService = _interopRequireDefault(require("../services/orderService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orderService = new _orderService.default();

var router = _express.default.Router();

router.get('/', function (req, res) {
  res.status(200).json(orderService.getOrders());
});
router.post('/', function (req, res) {
  res.json(orderService.createAndSaveOrder(req.body));
});
router.put('/:id', function (req, res) {
  res.json(orderService.findOrderByIdAndUpdate(req.params.id, req.body));
});
router.delete('/:id', function (req, res) {
  res.json(orderService.findOrderByIdAndDelete(req.params.id));
});
var _default = router;
exports.default = _default;