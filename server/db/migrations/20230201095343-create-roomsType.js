'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoomTypes', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },  
      typeId: {
        type: Sequelize.INTEGER,  
      },  
      typeName: {
        type: Sequelize.STRING(50), 
      }, 
      roomName: {
        type: Sequelize.STRING(50), 
      }, 
      creatorId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('RoomTypes');
  }
};