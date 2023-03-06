'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Rooms extends Model {  
    static associate(models) { 
      // Rooms.belongsToMany(models.Users, { foreignKey: 'roomId', through: 'userRooms', as: 'Users' });
    }
  }

  Rooms.init({
    roomName: DataTypes.STRING,
    roomId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Rooms',
  });
  return Rooms;
};

 