"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _orderService = _interopRequireDefault(require("../services/orderService"));

var _order = _interopRequireDefault(require("../middleware/order"));

var _authorization = _interopRequireDefault(require("../auth/authorization"));

var _validate = _interopRequireDefault(require("../validations/validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.route('/').get(_authorization.default.checkForToken, _authorization.default.verifyCaterer, _orderService.default.getOrders).post(_authorization.default.checkForToken, _authorization.default.verifyUser, _order.default.validateorderAddition, _orderService.default.createAndSaveOrder);
router.route('/:id').get(_orderService.default.findOrderById).put(_authorization.default.checkForToken, _authorization.default.verifyUser, _validate.default.validateOrderCreator, _order.default.validateOrderUpdate, _orderService.default.findOrderByIdAndUpdate).delete(_authorization.default.checkForToken, _authorization.default.verifyUser, _validate.default.validateOrderCreator, _orderService.default.findOrderByIdAndDelete);
var _default = router;
exports.default = _default;