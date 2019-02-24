"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var menu = function menu(date, chef, mealOptions) {
  _classCallCheck(this, menu);

  this.date = Date.now();
  this.chef = chef;
  this.mealOptions = mealOptions;
};

var _default = menu;
exports.default = _default;