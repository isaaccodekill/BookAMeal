"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _mealServices = _interopRequireDefault(require("../services/mealServices"));

var _meal = _interopRequireDefault(require("../middleware/meal"));

var _authorization = _interopRequireDefault(require("../auth/authorization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.route('/').get(_authorization.default.checkForToken, _authorization.default.verifyCaterer, _mealServices.default.getAllmeals).post(_authorization.default.checkForToken, _authorization.default.verifyCaterer, _meal.default.validateMealAddition, _mealServices.default.createAndSave);
router.route('/:id').get(_authorization.default.checkForToken, _authorization.default.verifyCaterer, _mealServices.default.findMealById).put(_authorization.default.checkForToken, _authorization.default.verifyCaterer, _meal.default.validateMealUpdate, _mealServices.default.findMealByIdAndUpdate).delete(_authorization.default.checkForToken, _authorization.default.verifyCaterer, _mealServices.default.findMealByIdAndDelete);
var _default = router;
exports.default = _default;