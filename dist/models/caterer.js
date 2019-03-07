"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Caterer = _index.db.define('Caterer', {
  name: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  restaurant: {
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
  }
});

var _default = Caterer; // meal has a chef id
// when a user makes an order the order is sent to the  chef wose id is the
//  same and the chefd in the meal
// add a resolved option to every prder an only a chef can amake the order resolved

exports.default = _default;