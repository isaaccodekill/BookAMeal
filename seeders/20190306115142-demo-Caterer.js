'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  Promise.all([
    queryInterface.bulkInsert('Caterers', [{
      name: 'Felix',
      restaurant: 'God gives people food for free , we dont',
      email: 'isaacbello@gmail.com',
      password: 'imoleayo',
      phoneNumber: '09094841531',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])]),

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Caterers', null, {});
  },
};
