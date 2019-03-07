"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _caterer = _interopRequireDefault(require("../middleware/caterer"));

var _catererAuthController = _interopRequireDefault(require("../auth/catererAuthController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.route('/signup').post(_caterer.default.validateCatererSignUp, _catererAuthController.default.Register);
router.route('/login').post(_caterer.default.validateCatererLogin, _catererAuthController.default.Login);
var _default = router;
exports.default = _default;