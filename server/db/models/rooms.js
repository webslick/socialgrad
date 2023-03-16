'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Rooms extends Model {  
    static associate(models) {  
      Rooms.hasOne(models.RoomTypes, { foreignKey: 'typeId', as: 'RoomTypes' });
    }
  }

  Rooms.init({}, {
    sequelize,
    modelName: 'Rooms',
  });
  return Rooms;
};

 