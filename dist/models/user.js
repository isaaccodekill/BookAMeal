"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _index.db.define('User', {
  name: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  email: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  password: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
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
  savedCaterers: {
    type: _sequelize.default.ARRAY(_sequelize.default.INTEGER)
  }
});

var _default = User;
exports.default = _default;