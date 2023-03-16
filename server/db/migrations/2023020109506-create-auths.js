'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AuthInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      }, 
      authId: {
        type: Sequelize.INTEGER,
        // references: { model: 'Users', key: 'id' },
        // onDelete: 'CASCADE',
      }, 
      login: {
        type: Sequelize.STRING(25), 
        unique: true, 
        allowNull: false,
      },  
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },   
      refreshToken: {
        type: Sequelize.STRING(400),
        allowNull: false,
      },   
      accessToken: {
        type: Sequelize.STRING(400),
        allowNull: false,
      },   
      isActivated: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },   
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AuthInfos');
  }
};