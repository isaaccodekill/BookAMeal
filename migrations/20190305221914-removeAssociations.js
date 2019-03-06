module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Menus', 'MenuItems', {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    }),
  ]),
  down: (queryInterface, Sequelize) => [
    queryInterface.removeColumn('Menus', 'MenuItems'),
  ],
};
