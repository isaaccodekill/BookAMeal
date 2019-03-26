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

var MealValidation =
/*#__PURE__*/
function () {
  function MealValidation() {
    _classCallCheck(this, MealValidation);
  }

  _createClass(MealValidation, null, [{
    key: "validateMealAddition",
    value: function validateMealAddition(req, res, next) {
      var schema = _joi.default.object().keys({
        name: _joi.default.string().required(),
        price: _joi.default.number().required(),
        calories: _joi.default.string().required(),
        description: _joi.default.string().required(),
        currency: _joi.default.string().required(),
        image: _joi.default.string().required(),
        CatererId: _joi.default.number()
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
    key: "validateMealUpdate",
    value: function validateMealUpdate(req, res, next) {
      var schema = _joi.default.object().keys({
        name: _joi.default.string().required(),
        price: _joi.default.number().required(),
        calories: _joi.default.string().required(),
        description: _joi.default.string().required(),
        currency: _joi.default.string().required(),
        image: _joi.default.string().required()
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

  return MealValidation;
}();

var _default = MealValidation;
exports.default = _default;