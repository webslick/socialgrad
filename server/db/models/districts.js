'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Districts extends Model {  
    static associate(models) {   
    }
  }
  
  Districts.init({ 
    name: DataTypes.STRING(20),      
  }, {
    sequelize,
    modelName: 'Districts',
  });
  return Districts;
};

 