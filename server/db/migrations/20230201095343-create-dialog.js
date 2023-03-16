'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dialogs', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        // references: { model: 'Profiles', key: 'id' },
        // onDelete: 'CASCADE',
      },
      dialogId: { 
        type: Sequelize.INTEGER
      },
      collaborator: {
        type: Sequelize.INTEGER
      }, 
      lastMessage: {
        type: Sequelize.INTEGER
      },
      senderId: {
        type: Sequelize.INTEGER
      },
      numSender: {
        type: Sequelize.INTEGER
      },
      numRecipient: {
        type: Sequelize.INTEGER
      },
      participantes: {
        type: Sequelize.STRING
      },
      users: {
        type: Sequelize.STRING
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