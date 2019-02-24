"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var meal = function meal(id, name, image, price, calories, description, currency) {
  _classCallCheck(this, meal);

  this.id = id;
  this.name = name;
  this.image = image;
  this.price = price;
  this.calories = calories;
  this.description = description;
  this.currency = currency;
};

var _default = meal;
exports.default = _default;