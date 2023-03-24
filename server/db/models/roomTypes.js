'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class RoomTypes extends Model {  
    static associate(models) {  
      RoomTypes.belongsToMany(models.Users, { foreignKey: 'roomId', through: 'UsersRooms', as: 'Users' }); 

      RoomTypes.belongsToMany(models.Homes, { foreignKey: 'roomId', through: 'HomesRooms', as: 'Homes' }); 

      RoomTypes.hasOne(models.HomesRooms, { foreignKey: 'roomId', as: 'HomesRooms' });  
      
      RoomTypes.hasOne(models.UsersRooms, { foreignKey: 'roomId', as: 'UsersRoomsType' });  

      // RoomTypes.hasMany(models.Dialogs,{ foreignKey: 'roomId', as: 'Dialogs' });

      RoomTypes.hasMany(models.Messages,{ foreignKey: 'roomId', as: 'Messages'  })
 

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

 