import dotenv from 'dotenv';
import Sequelize from 'sequelize';


dotenv.config();

const db = new Sequelize(
  process.env.DATABASE_URL,
  {
    operatorsAliases: false,
  },
);
const Order = require('./order');
const User = require('./user');
const Caterer = require('./caterer');
const Meal = require('./meal');
const Menu = require('./menu');

const models = {
  Order, User, Caterer, Meal, Menu,
};

// Object.keys(models).forEach((key) => {
//   if ('associate' in models[key]) {
//     models[key].associate(models);
//   }
// });

export { db };

export default models;
