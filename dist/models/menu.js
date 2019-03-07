"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = _index.db.define('Menu', {
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
  MenuItems: {
    type: _sequelize.default.ARRAY(_sequelize.default.INTEGER)
  }
});

var _default = Menu;
exports.default = _default;