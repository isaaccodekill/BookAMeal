"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    value: function () {
      var _verifyCaterer = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res, next) {
        var decodedData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _jsonwebtoken.default.verify(req.token, process.env.SECRET);

              case 3:
                decodedData = _context.sent;

                if (!decodedData.isCaterer) {
                  res.status(403).json({
                    message: 'forbidden/UnAuthorized',
                    error: 'Not a caterer'
                  });
                } else {
                  req.caterer = decodedData;
                  next();
                }

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                if (_context.t0.name === 'TokenExpiredError') {
                  res.status(403).json({
                    message: 'forbidden/UnAuthorized',
                    error: 'Token expired'
                  });
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function verifyCaterer(_x, _x2, _x3) {
        return _verifyCaterer.apply(this, arguments);
      }

      return verifyCaterer;
    }()
  }, {
    key: "verifyUser",
    value: function () {
      var _verifyUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res, next) {
        var decodedData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _jsonwebtoken.default.verify(req.token, process.env.SECRET);

              case 3:
                decodedData = _context2.sent;
                console.log(decodedData);

                if (!decodedData.isUser) {
                  res.status(403).json({
                    message: 'forbidden/UnAuthorized',
                    error: 'Not a valid user'
                  });
                } else {
                  req.user = decodedData;
                  next();
                }

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);

                if (_context2.t0.name === 'TokenExpiredError') {
                  res.status(403).json({
                    message: 'forbidden/UnAuthorized',
                    error: 'Token expired'
                  });
                }

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function verifyUser(_x4, _x5, _x6) {
        return _verifyUser.apply(this, arguments);
      }

      return verifyUser;
    }()
  }]);

  return AuthorizationFlow;
}();

var _default = AuthorizationFlow;
exports.default = _default;