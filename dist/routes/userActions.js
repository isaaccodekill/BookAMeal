"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _userActionServices = _interopRequireDefault(require("../services/userActionServices"));

var _authorization = _interopRequireDefault(require("../auth/authorization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.route('/getAllCaterers').get(_authorization.default.checkForToken, _authorization.default.verifyUser, _userActionServices.default.getAllCaterers);
router.route('/saveCaterer').post(_authorization.default.checkForToken, _authorization.default.verifyUser, _userActionServices.default.saveCaterers);
router.route('/getSavedCaterers').get(_authorization.default.checkForToken, _authorization.default.verifyUser, _userActionServices.default.getSavedCaterers);
router.route('/getOrderHistory').get(_authorization.default.checkForToken, _authorization.default.verifyUser, _userActionServices.default.getOrderHistory);
router.route('/deleteSavedCaterer/:id').post(_authorization.default.checkForToken, _authorization.default.verifyUser, _userActionServices.default.deleteSavedCaterer); // here we will save the a caterer to the users saved caterer list
// here will delete a caterer from the saved caterer list

var _default = router;
exports.default = _default;