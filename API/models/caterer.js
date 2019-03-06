import Sequelize from 'sequelize';
import { db } from './index';

const Caterer = db.define('Caterer', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  restaurant: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
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
});


export default Caterer;

// meal has a chef id
// when a user makes an order the order is sent to the  chef wose id is the
//  same and the chefd in the meal
// add a resolved option to every prder an only a chef can amake the order resolved
