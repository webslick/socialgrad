'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER, 
      },
      dialogId: {
        type: Sequelize.STRING(50),  
      },
      roomId: {
        type: Sequelize.STRING(50),  
      },
      text: {
        type: Sequelize.STRING, 
      },
      type: {
        type: Sequelize.STRING, 
      },
      filename: {
        type: Sequelize.STRING, 
      },
      readed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('Messages');
  }
};
 