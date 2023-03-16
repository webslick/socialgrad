'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Subscribes extends Model {  
    static associate(models) {    
    }
  } 
  Subscribes.init({
    subId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN, 
    startSub: {
      type: DataTypes.DATE, 
    },  
    finishSub: {
      type: DataTypes.DATE,
      // defaultValue: new Date() 
      defaultValue: DataTypes.NOW,
    },  
  }, {
    sequelize,
    modelName: 'Subscribes',
  });
  return Subscribes;
};

 