"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meal = _index.db.define('Meal', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: _sequelize.default.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: _sequelize.default.DATE
  },
  updatedAt: {
    allowNull: false,
    type: _sequelize.default.DATE
  },
  name: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  price: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  calories: {
    type: _sequelize.default.STRING
  },
  description: {
    type: _sequelize.default.TEXT
  },
  image: {
    type: _sequelize.default.STRING
  },
  currency: {
    type: _sequelize.default.STRING
  }
});

var _default = Meal;
exports.default = _default;