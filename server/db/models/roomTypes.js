'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class RoomTypes extends Model {  
    static associate(models) {  
    }
  }

  RoomTypes.init({
    typeName: DataTypes.STRING(20),    
    roomName: DataTypes.STRING(20),    
    creatorId: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'RoomTypes',
  });
  return RoomTypes;
};

 