"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _caterer = _interopRequireDefault(require("../models/caterer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

_dotenv.default.config(); // import Caterer  Model


var CatererAuth =
/*#__PURE__*/
function () {
  function CatererAuth() {
    _classCallCheck(this, CatererAuth);
  }

  _createClass(CatererAuth, null, [{
    key: "Register",
    // authentication functions
    value: function Register(req, res) {
      _caterer.default.findOne({
        where: {
          email: req.body.email
        }
      }).then(function (existingCaterer) {
        if (existingCaterer) {
          res.status(203).json({
            message: 'Registeration error',
            error: 'A caterer with that email already exists in db'
          });
        } else {
          var hashedPassword = _bcryptjs.default.hashSync(req.body.password, 10);

          _caterer.default.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            phoneNumber: req.body.phoneNumber,
            restaurant: req.body.restaurant
          }).then(function (caterer) {
            var token = _jsonwebtoken.default.sign({
              id: caterer.id,
              isCaterer: true
            }, process.env.SECRET, {
              expiresIn: 86400
            });

            return res.status(200).json({
              message: 'successfull',
              token: token
            });
          }).catch(function (error) {
            return res.status(500).json({
              message: 'unsucessfull',
              error: error
            });
          });
        }
      });
    }
  }, {
    key: "Login",
    value: function Login(req, res) {
      _caterer.default.findOne({
        where: {
          email: req.body.email
        }
      }).then(function (caterer) {
        if (!caterer) {
          return res.status(500).json({
            essage: 'unsuccessfull',
            error: 'User not found'
          });
        }

        var passwordIsValid = _bcryptjs.default.compareSync(req.body.password, caterer.password);

        if (!passwordIsValid) {
          return res.status(401).json({
            message: 'unsuccessfull',
            token: null
          });
        }

        var token = _jsonwebtoken.default.sign({
          id: caterer.id,
          isCaterer: true
        }, process.env.SECRET, {
          expiresIn: 86400
        });

        req.catererId = caterer.id;
        return res.status(200).json({
          message: 'successfull',
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

  return CatererAuth;
}();

var _default = CatererAuth;
exports.default = _default;