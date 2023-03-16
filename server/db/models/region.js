'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Regions extends Model {  
    static associate(models) {   
    }
  }
  
  Regions.init({ 
    name: DataTypes.STRING(20),      
  }, {
    sequelize,
    modelName: 'Regions',
  });
  return Regions;
};

 