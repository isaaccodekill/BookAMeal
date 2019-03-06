module.exports = {
  up: (queryInterface, Sequelize) =>  Promise.all([
    queryInterface.bulkInsert('Users', [{
      name: 'zik',
      email: 'isaacbello@gmail.com',
      password: 'imoleayo',
      phoneNumber: '09094841531',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])]),

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', null);
  },
};
