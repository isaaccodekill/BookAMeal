"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

_dotenv.default.config(); // three step
// check if token exists
// verify if the person is a registered caterer or a registered usser


var AuthorizationFlow =
/*#__PURE__*/
function () {
  function AuthorizationFlow() {
    _classCallCheck(this, AuthorizationFlow);
  }

  _createClass(AuthorizationFlow, null, [{
    key: "checkForToken",
    value: function checkForToken(req, res, next) {
      var header = req.headers.authorization;

      if (typeof header !== 'undefined') {
        var token = header.split(' ')[1];
        req.token = token;
        next();
      } else {
        res.status(403).json({
          message: 'No Token found'
        });
      }
    }
  }, {
    key: "verifyCaterer",
    value: function verifyCaterer(req, res, next) {
      var decodedData = _jsonwebtoken.default.verify(req.token, process.env.SECRET);

      if (!decodedData.isCaterer) {
        res.status(403).json({
          message: 'forbidden/UnAuthorized',
          error: 'Not a caterer'
        });
      } else {
        req.caterer = decodedData.caterer;
        next();
      }
    }
  }, {
    key: "verifyUser",
    value: function verifyUser(req, res, next) {
      var decodedData = _jsonwebtoken.default.verify(req.token, process.env.SECRET);

      if (!decodedData.isUser) {
        res.status(403).json({
          message: 'forbidden/UnAuthorized',
          error: 'Not a valid user'
        });
      } else {
        req.user = decodedData.user;
        next();
      }
    }
  }]);

  return AuthorizationFlow;
}();

var _default = AuthorizationFlow;
exports.default = _default;