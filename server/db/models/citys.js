'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Citys extends Model {  
    static associate(models) {   
    }
  }
  
  Citys.init({ 
    name: DataTypes.STRING(20),   
  }, {
    sequelize,
    modelName: 'Citys',
  });
  return Citys;
};

 