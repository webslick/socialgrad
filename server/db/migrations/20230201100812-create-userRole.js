

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UsersRoles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
      // references: { model: 'Profiles', key: 'userId' },
      // onDelete: 'CASCADE',
    },
    rolesId: {
      type: Sequelize.INTEGER,
      // references: { model: 'Roles', key: 'id' },
      // onDelete: 'CASCADE',
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('UsersRoles'),
};