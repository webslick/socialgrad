'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomesRooms extends Model { 
    static associate(models) { 
      HomesRooms.belongsTo(models.Homes, { foreignKey: 'id', as: 'Homes' });
      HomesRooms.belongsTo(models.RoomTypes, { foreignKey: 'id', as: 'RoomTypes'  });
    }
  } 
  HomesRooms.init({
    roomId: DataTypes.STRING(20),
    homeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HomesRooms',
  });
  return HomesRooms;
};