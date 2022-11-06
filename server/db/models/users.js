'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    activationLink: DataTypes.STRING,
    isActivated: DataTypes.BOOLEAN,
    role:  DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  });

  return Users;
};