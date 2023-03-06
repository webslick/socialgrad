'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
 
    static associate(models) {
      // UserRole.belongsTo(models.Users, {
      //   through: 'UserRole',
      //   as: 'users',
      //   foreignKey: 'user_id'
      // }); 
      // UserRole.belongsTo(models.Roles, {
      //   through: 'UserRole',
      //   as: 'roles',
      //   foreignKey: 'role_id'
      // }); 
    }
  }
  UserRole.init({
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserRole',
  });
  return UserRole;
};