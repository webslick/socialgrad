'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Users extends Model {  
    static associate(models) {  
      Users.hasOne(models.Profiles, { foreignKey: 'userId', as: 'Profiles' });
      Users.hasMany(models.Roles, { foreignKey: 'userId', as: 'Roles' }); 
      // Users.belongsToMany(models.Rooms, { foreignKey: 'userId', through: 'userRooms', as: 'Rooms' }); 
    }
  }
  
  Users.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};

 