"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.db = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var db = new _sequelize.default(process.env.DATABASE_URL, {
  operatorsAliases: false
});
exports.db = db;

var Order = require('./order');

var User = require('./user');

var Caterer = require('./caterer');

var Meal = require('./meal');

var Menu = require('./menu');

var models = {
  Order: Order,
  User: User,
  Caterer: Caterer,
  Meal: Meal,
  Menu: Menu
}; // Object.keys(models).forEach((key) => {
//   if ('associate' in models[key]) {
//     models[key].associate(models);
//   }
// });

var _default = models;
exports.default = _default;