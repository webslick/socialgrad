'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Streets extends Model {  
    static associate(models) {   
    }
  }
  
  Streets.init({ 
    name: DataTypes.STRING(20),      
  }, {
    sequelize,
    modelName: 'Streets',
  });
  return Streets;
};

 