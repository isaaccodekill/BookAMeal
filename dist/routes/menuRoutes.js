"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _menuServices = _interopRequireDefault(require("../services/menuServices"));

var _menu = _interopRequireDefault(require("../middleware/menu"));

var _authorization = _interopRequireDefault(require("../auth/authorization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.route('/:chefId').get(_authorization.default.checkForToken, _authorization.default.verifyUser, _menuServices.default.getMenu);
router.route('/').post(_authorization.default.checkForToken, _authorization.default.verifyCaterer, _menu.default.validateMenuCreate, _menuServices.default.createAndSaveMenu).put(_authorization.default.checkForToken, _authorization.default.verifyCaterer, _menu.default.validateMenuEdit, _menuServices.default.editMenu);
var _default = router;
exports.default = _default;