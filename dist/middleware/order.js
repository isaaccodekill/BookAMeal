"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var orderValidation =
/*#__PURE__*/
function () {
  function orderValidation() {
    _classCallCheck(this, orderValidation);
  }

  _createClass(orderValidation, null, [{
    key: "validateorderAddition",
    value: function validateorderAddition(req, res, next) {
      var schema = _joi.default.object().keys({
        MealId: _joi.default.number().required(),
        UserId: _joi.default.number(),
        address: _joi.default.string().required(),
        method: _joi.default.string().required(),
        quantity: _joi.default.number().required(),
        cost: _joi.default.number().required(),
        resolved: _joi.default.boolean().required()
      });

      _joi.default.validate(req.body, schema, function (error, value) {
        if (error !== null) {
          res.status(400).json({
            error: error.message || error.details[0].message
          });
        }
      });

      next();
    }
  }, {
    key: "validateOrderUpdate",
    value: function validateOrderUpdate(req, res, next) {
      var schema = _joi.default.object().keys({
        MealId: _joi.default.number().required(),
        UserId: _joi.default.number().required(),
        address: _joi.default.string().required(),
        method: _joi.default.string().required(),
        quantity: _joi.default.number().required(),
        cost: _joi.default.number().required(),
        resolved: _joi.default.boolean().required()
      });

      _joi.default.validate(req.body, schema, function (error, value) {
        if (error !== null) {
          res.status(400).json({
            error: error.message || error.details[0].message
          });
        }
      });

      next();
    }
  }]);

  return orderValidation;
}();

var _default = orderValidation;
exports.default = _default;