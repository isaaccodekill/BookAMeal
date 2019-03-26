"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../models/menu"));

var _caterer = _interopRequireDefault(require("../models/caterer"));

var _meal = _interopRequireDefault(require("../models/meal"));

var _populate = _interopRequireDefault(require("../Extras/populate"));

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
    value: function getMenu(req, res) {
      var currentMenu = null;

      _menu.default.findAll({
        where: {
          CatererId: req.params.chefId
        }
      }, {
        include: [_caterer.default]
      }).then(function (menu) {
        //
        currentMenu = menu;
      }).then(function () {
        return (0, _populate.default)(_meal.default, currentMenu[0].MenuItems, 'name,price,id');
      }) // .then(items => console.log('Items", items))
      .then(function (menuItems) {
        return res.status(200).json({
          status: 'successful',
          menu: currentMenu[0],
          meals: menuItems
        });
      }).catch(function (error) {
        return res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
      });
    }
  }, {
    key: "createAndSaveMenu",
    value: function createAndSaveMenu(req, res) {
      _menu.default.create({
        CatererId: req.caterer.id,
        MenuItems: req.body.MenuItems
      }, {
        include: [{
          model: _caterer.default
        }]
      }).then(function (menu) {
        return res.status(200).json({
          status: 'successful',
          menu: menu
        });
      }).catch(function (error) {
        return res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
      });
    }
  }, {
    key: "editMenu",
    value: function editMenu(req, res) {
      _menu.default.update({
        MenuItems: req.body.MenuItems
      }, {
        where: {
          CatererId: req.caterer.id
        }
      }).then(function (menu) {
        return res.status(200).json({
          status: 'successful',
          message: 'menu was edited',
          menu: menu
        });
      }).catch(function (error) {
        return res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
      });
    }
  }]);

  return menuService;
}();

var _default = menuService;
exports.default = _default;