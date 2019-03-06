import Sequelize from 'sequelize';
import { db } from './index';

const Menu = db.define('Menu', {
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
  MenuItems: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
});


export default Menu;
