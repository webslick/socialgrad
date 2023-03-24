'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersRooms extends Model { 
    static associate(models) { 
      UsersRooms.belongsTo(models.Users, { foreignKey: 'id', as: 'Users' });
      UsersRooms.belongsTo(models.RoomTypes, { foreignKey: 'id', as: 'UserJoin' });
      UsersRooms.hasMany(models.Dialogs, { foreignKey: 'roomId', as: 'Dialogs' });
      UsersRooms.belongsTo(models.RoomTypes, { foreignKey: 'id', as: 'RoomTypes'  });

      UsersRooms.belongsTo(models.Users, { foreignKey: 'userId',as:  'UsersRoomsType'  }); 

    }
  } 
  UsersRooms.init({
    roomId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsersRooms',
  });
  return UsersRooms;
};