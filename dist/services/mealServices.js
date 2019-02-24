"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../models/meal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mealServices =
/*#__PURE__*/
function () {
  function mealServices() {
    _classCallCheck(this, mealServices);

    this.meals = [];
  }

  _createClass(mealServices, [{
    key: "getAllmeals",
    value: function getAllmeals() {
      return this.meals;
    }
  }, {
    key: "createAndSave",
    value: function createAndSave(body) {
      if (this.meals.findIndex(function (x) {
        return x.id === body.id || x.name === body.name;
      }) > -1) {
        return 'Meal already exists in database';
      }

      var newMeal = new _meal.default();
      newMeal.id = body.id;
      newMeal.name = body.name;
      newMeal.image = body.image;
      newMeal.price = body.price;
      newMeal.currency = body.currency;
      newMeal.calories = body.calories;
      newMeal.description = body.description;
      this.meals.push(newMeal);
      return newMeal;
    }
  }, {
    key: "findMealById",
    value: function findMealById(id) {
      var index = this.meals.findIndex(function (mealItem) {
        return mealItem.id === id;
      });
      return this.meals[index];
    }
  }, {
    key: "findMealByIdAndUpdate",
    value: function findMealByIdAndUpdate(id, body) {
      var foundmealItem = this.findMealById(id);
      var updatedMealItem = new _meal.default();
      updatedMealItem.id = body.id;
      updatedMealItem.name = body.name;
      updatedMealItem.image = body.image;
      updatedMealItem.price = body.price;
      updatedMealItem.currency = body.currency;
      updatedMealItem.calories = body.calories;
      updatedMealItem.description = body.description;
      var index = this.meals.findIndex(function (x) {
        return x.id === foundmealItem.id;
      });
      this.meals[index] = updatedMealItem;
      return {
        message: 'Meal item updated',
        updatedMealItem: updatedMealItem
      };
    }
  }, {
    key: "findMealByIdAndDelete",
    value: function findMealByIdAndDelete(id) {
      var foundmealItem = this.findMealById(id);
      var index = this.meals.findIndex(function (x) {
        return x.id === id;
      });
      this.meals.splice(index, 1);
      return {
        message: 'Meal item succefully deleted',
        foundmealItem: foundmealItem
      };
    }
  }]);

  return mealServices;
}();

var _default = mealServices;
exports.default = _default;