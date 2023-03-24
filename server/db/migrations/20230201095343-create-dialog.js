'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dialogs', { 
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING(50), 
      },
      userId: {
        type: Sequelize.INTEGER, 
      },  
      collaborator: {
        type: Sequelize.INTEGER
      }, 
      lastMessage: {
        type: Sequelize.INTEGER
      }, 
      status: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Dialogs');
  }
};