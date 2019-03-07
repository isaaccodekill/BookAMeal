"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("../middleware/user"));

var _userAuthController = _interopRequireDefault(require("../auth/userAuthController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)(); // register
// login
// logout

router.route('/signup').post(_user.default.validateUserSignUp, _userAuthController.default.Register);
router.route('/login').post(_user.default.validateUserLogin, _userAuthController.default.Login);
var _default = router;
exports.default = _default;