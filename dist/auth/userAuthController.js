"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

_dotenv.default.config(); // import User Model


var UserAuth =
/*#__PURE__*/
function () {
  function UserAuth() {
    _classCallCheck(this, UserAuth);
  }

  _createClass(UserAuth, null, [{
    key: "Register",
    // authentication functions
    value: function Register(req, res) {
      var hashedPassword = _bcryptjs.default.hashSync(req.body.password, 10);

      _user.default.create({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: hashedPassword
      }).then(function (user) {
        var token = _jsonwebtoken.default.sign({
          id: user.id,
          isUser: true
        }, process.env.SECRET, {
          expiresIn: 86400
        });

        return res.status(200).json({
          message: 'User Registered',
          token: token
        });
      }).catch(function (error) {
        return res.status(500).json({
          message: 'unsucessfull',
          error: error
        });
      });
    }
  }, {
    key: "Login",
    value: function Login(req, res) {
      _user.default.findOne({
        where: {
          email: req.body.email
        }
      }).then(function (user) {
        if (!user) {
          return res.status(500).json({
            essage: 'unsuccessfull',
            error: 'User not found'
          });
        }

        var passwordIsValid = _bcryptjs.default.compareSync(req.body.password, user.password);

        if (!passwordIsValid) {
          return res.status(401).json({
            message: 'Wrong password',
            token: null
          });
        }

        var token = _jsonwebtoken.default.sign({
          id: user.id
        }, process.env.SECRET, {
          expiresIn: 86400
        });

        return res.status(200).json({
          message: 'User Signed In',
          token: token
        });
      }).catch(function (error) {
        return res.status(500).json({
          message: 'unsuccessfull',
          error: error
        });
      });
    }
  }]);

  return UserAuth;
}();

var _default = UserAuth;
exports.default = _default;