'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dialogs extends Model { 

 
    static associate(models) { 
      Dialogs.belongsTo(models.RoomTypes,{ foreignKey: 'roomId', as: 'RoomTypes' });  
      Dialogs.belongsTo(models.UsersRooms,{ foreignKey: 'roomId', as: 'UsersRooms' });  
      Dialogs.hasMany(models.Messages, { foreignKey: 'dialogId', as: 'Messages' });  
    }
  }
  Dialogs.init({ 
    userId: DataTypes.INTEGER,  
    collaborator: DataTypes.INTEGER, 
    lastMessage: DataTypes.INTEGER, 
    status: DataTypes.BOOLEAN,  
  }, {
    sequelize,
    modelName: 'Dialogs',
  });
  return Dialogs;
};
 