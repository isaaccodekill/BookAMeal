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

var UserAuthValidation =
/*#__PURE__*/
function () {
  function UserAuthValidation() {
    _classCallCheck(this, UserAuthValidation);
  }

  _createClass(UserAuthValidation, null, [{
    key: "validateUserSignUp",
    value: function validateUserSignUp(req, res, next) {
      var schema = _joi.default.object().keys({
        name: _joi.default.string().required(),
        email: _joi.default.string().required(),
        phoneNumber: _joi.default.number().required().min(11),
        password: _joi.default.string().required().min(6)
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
    key: "validateUserLogin",
    value: function validateUserLogin(req, res, next) {
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

  return UserAuthValidation;
}();

var _default = UserAuthValidation;
exports.default = _default;