"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _mealServices = _interopRequireDefault(require("../services/mealServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mealServices = new _mealServices.default();

var router = _express.default.Router();

router.get('/', function (req, res) {
  res.json(mealServices.getAllmeals(req.body));
});
router.get('/:id', function (req, res) {
  res.json(mealServices.findMealById(req.params.id));
});
router.post('/', function (req, res) {
  res.status(201).json(mealServices.createAndSave(req.body));
});
router.put('/:id', function (req, res) {
  res.json(mealServices.findMealByIdAndUpdate(req.params.id, req.body));
});
router.delete('/:id', function (req, res) {
  res.json(mealServices.findMealByIdAndDelete(req.params.id));
});
var _default = router;
exports.default = _default;