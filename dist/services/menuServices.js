"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../models/menu"));

var _meal = _interopRequireDefault(require("../models/meal"));

var _caterer = _interopRequireDefault(require("../models/caterer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var menuService =
/*#__PURE__*/
function () {
  function menuService() {
    _classCallCheck(this, menuService);
  }

  _createClass(menuService, null, [{
    key: "getMenu",
    value: function getMenu(req, res, next) {
      _menu.default.findAll().then(function (menu) {
        res.status(200).json({
          status: 'successful',
          menu: menu[0]
        });
      }).catch(function (error) {
        res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
        next();
      });
    }
  }, {
    key: "createAndSaveMenu",
    value: function createAndSaveMenu(req, res, next) {
      return _menu.default.create({
        // chefId: req.user.id,
        MenuItems: req.body.MenuItems
      }, {
        include: [{
          model: _caterer.default
        }]
      }).then(function (menu) {
        res.status(200).json({
          status: 'successful',
          menu: menu
        });
      }).catch(function (error) {
        res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
        next();
      });
    }
  }, {
    key: "editMenu",
    value: function editMenu(req, res, next) {
      return _menu.default.Update({
        // chefId: req.user.id,
        MenuItems: req.body.MenuItems
      }, {
        where: {
          id: 1
        }
      }).then(function (menu) {
        res.status(200).json({
          status: 'successful',
          menu: menu
        });
      }).catch(function (error) {
        res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
        next();
      });
    }
  }]);

  return menuService;
}();

var _default = menuService;
exports.default = _default;