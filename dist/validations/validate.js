"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../models/order"));

var _meal = _interopRequireDefault(require("../models/meal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import Menu from '../models/menu';
var Validator =
/*#__PURE__*/
function () {
  function Validator() {
    _classCallCheck(this, Validator);
  }

  _createClass(Validator, null, [{
    key: "validateOrderCreator",
    value: function validateOrderCreator(req, res, next) {
      _order.default.findByPk(req.params.id).then(function (order) {
        if (order.UserId === req.user.id) {
          next();
        } else {
          throw new Error('Not authorized');
        }
      }).catch(function (error) {
        res.status(200).json({
          Message: 'Forbidden/UnAuthorized user',
          error: 'User not Authorized'
        });
      });
    } //   static validateMenuCreator(req, res, next) {
    //     Menu.findByPk(req.params.id)
    //         .then((order) => {
    //         if (order.UserId === req.user.id) {
    //             next();
    //         } else {
    //             throw Error;
    //         }
    //         })
    //         .catch((error) => {
    //         res.status(200).json({
    //             Message: 'Forbidden/UnAuthorized user',
    //             error: 'User not Authorized',
    //         });
    //         });
    //     }

  }, {
    key: "validateMealCreator",
    value: function validateMealCreator(req, res, next) {
      _meal.default.findByPk(req.params.id).then(function (meal) {
        console.log('caterer id', req.caterer.id);
        console.log('meal caterer id', meal);

        if (meal.CatererId === req.caterer.id) {
          next();
        } else {
          throw new Error('unauthorized caterer');
        }
      }).catch(function (error) {
        res.status(200).json({
          Message: 'Forbidden/UnAuthorized Caterer',
          error: error
        });
      });
    }
  }]);

  return Validator;
}();

var _default = Validator;
exports.default = _default;