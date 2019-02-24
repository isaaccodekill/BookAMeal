"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../models/menu"));

var _meal = _interopRequireDefault(require("../models/meal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var menuService =
/*#__PURE__*/
function () {
  function menuService(chef) {
    _classCallCheck(this, menuService);

    this.menu = new _menu.default();
    this.menu.chef = chef;
    this.menu.date = new Date().toLocaleDateString();
    this.menu.mealOptions = [];
  }

  _createClass(menuService, [{
    key: "getMenu",
    value: function getMenu() {
      var availableMenu = this.menu;
      return availableMenu;
    }
  }, {
    key: "createAndSaveMenu",
    value: function createAndSaveMenu(body) {
      if (!body.mealOptions || body.mealOptions.length === 0) {
        return 'Cannot create an empty menu';
      }

      var newMeals = body.mealOptions.map(function (meal) {
        var newMeal = new _meal.default();
        newMeal.id = meal.id;
        newMeal.price = meal.price;
        newMeal.description = meal.description;
        newMeal.name = meal.name;
        newMeal.image = meal.image;
        newMeal.currency = meal.currency;
        return newMeal;
      });
      this.menu.mealOptions = newMeals;
      this.menu.chef = body.chef;
      this.menu.date = new Date().toLocaleDateString();
      return {
        message: 'menu succesfully created'
      };
    }
  }, {
    key: "editMenu",
    value: function editMenu(body) {
      var newMeals = body.mealOptions.map(function (meal) {
        var newMeal = new _meal.default();
        newMeal.id = meal.id;
        newMeal.price = meal.price;
        newMeal.description = meal.description;
        newMeal.name = meal.name;
        newMeal.image = newMeal.image;
        newMeal.currency = meal.currency;
        return newMeal;
      });
      this.menu.mealOptions = newMeals;
      return 'The menu was edited';
    }
  }]);

  return menuService;
}();

var _default = menuService;
exports.default = _default;