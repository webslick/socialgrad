'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Homes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },   
      regionId: {
        type: Sequelize.INTEGER, 
      },
      cityId: {
        type: Sequelize.INTEGER, 
      },
      districtId: {
        type: Sequelize.INTEGER,  
      },
      streetId: {
        type: Sequelize.INTEGER,  
      },
      number: {
        type: Sequelize.INTEGER,  
      }, 
      index: {
        type: Sequelize.INTEGER,  
      },  
      floors: {
        type: Sequelize.INTEGER,  
      },  
      entrancesCount: {
        type: Sequelize.INTEGER,  
      },  
      flatsCount: {
        type: Sequelize.INTEGER,  
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
    await queryInterface.dropTable('Homes');
  }
};
 