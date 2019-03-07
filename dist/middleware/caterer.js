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

var CatererAuthValidation =
/*#__PURE__*/
function () {
  function CatererAuthValidation() {
    _classCallCheck(this, CatererAuthValidation);
  }

  _createClass(CatererAuthValidation, null, [{
    key: "validateCatererSignUp",
    value: function validateCatererSignUp(req, res, next) {
      var schema = _joi.default.object().keys({
        name: _joi.default.string().required(),
        email: _joi.default.string().required(),
        phoneNumber: _joi.default.number().required().min(11),
        password: _joi.default.string().required().min(6),
        restaurant: _joi.default.string().required()
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
    key: "validateCatererLogin",
    value: function validateCatererLogin(req, res, next) {
      var schema = _joi.default.object().keys({
        email: _joi.default.string().required(),
        password: _joi.default.string().required()
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

  return CatererAuthValidation;
}();

var _default = CatererAuthValidation;
exports.default = _default;