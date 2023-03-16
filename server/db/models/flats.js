'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Flats extends Model {  
    static associate(models) {   
    }
  }
  
  Flats.init({ 
    number: DataTypes.INTEGER,  
    connected: DataTypes.BOOLEAN,  
    startConnect: DataTypes.DATE,  
    stopConnect: DataTypes.DATE,    
  }, {
    sequelize,
    modelName: 'Flats',
  });
  return Flats;
};

 