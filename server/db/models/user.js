'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Users extends Model {  
    static associate(models) {     
      Users.hasOne(models.AuthInfos, { foreignKey: 'authId', as: 'AuthInfos' }); 
      Users.hasOne(models.Homes, { foreignKey: 'id', as: 'Homes' }); 
      Users.hasOne(models.Wallets, { foreignKey: 'walletId', as: 'Wallets' }); 
      Users.hasOne(models.Subscribes, { foreignKey: 'subId', as: 'Subscribes' }); 
      Users.hasOne(models.Profiles, { foreignKey: 'id', as: 'Profiles' });    
      Users.belongsToMany(models.RoomTypes, { foreignKey: 'userId', through: 'UsersRooms' });  
    }
  }
  
  Users.init({}, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};

 