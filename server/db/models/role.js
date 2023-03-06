'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
 
    static associate(models) {
      Roles.belongsTo(models.Users, { foreignKey: 'userId', as: 'Users' });
    }
  }
  Roles.init({
    role_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Roles',
  });
  return Roles;
};