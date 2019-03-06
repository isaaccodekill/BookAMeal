import Sequelize from 'sequelize';
import { db } from './index';
// const order = (sequelize, DataTypes) => {
const Order = db.define('Order', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  method: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  cost: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  resolved: {
    type: Sequelize.BOOLEAN,
  },
});

export default Order;
