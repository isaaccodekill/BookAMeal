module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkInsert('Meals', [{
      name: 'eba and fish and juice',
      image: 'image url',
      price: 1700,
      calories: 'infinite x 2',
      description: 'ask nosa ionno',
      currency: 'naira',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])]),
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Meals', null);
  },
};
