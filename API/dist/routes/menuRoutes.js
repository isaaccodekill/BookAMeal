"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _menuServices = _interopRequireDefault(require("../services/menuServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuService = new _menuServices.default();

var router = _express.default.Router();

router.get('/', function (req, res) {
  res.status(200).json(menuService.getMenu());
});
router.post('/', function (req, res) {
  res.status(201).json(menuService.createAndSaveMenu(req.body));
});
router.put('/', function (req, res) {
  res.status(201).json(menuService.editMenu(req.body));
});
var _default = router;
exports.default = _default;