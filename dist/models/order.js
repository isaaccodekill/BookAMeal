"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const order = (sequelize, DataTypes) => {
var Order = _index.db.define('Order', {
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
  quantity: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  method: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  address: {
    type: _sequelize.default.TEXT,
    allowNull: false
  },
  cost: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  resolved: {
    type: _sequelize.default.BOOLEAN
  }
});

var _default = Order;
exports.default = _default;