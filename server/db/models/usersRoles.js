'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersRoles extends Model { 
    static associate(models) { 
      // UsersRoles.belongsTo(models.Users, { foreignKey: 'userId', as: 'Profiles' });
      // UsersRoles.belongsTo(models.Roles, { foreignKey: 'rolesId', as: 'Roles' });
    }
  } 
  UsersRoles.init({
    rolesId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsersRoles',
  });
  return UsersRoles;
};