

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('HomesRooms', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    homeId: {
      type: Sequelize.INTEGER, 
    },
    roomId: {
      type: Sequelize.STRING(50),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('HomesRooms'),
};