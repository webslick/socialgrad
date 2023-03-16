'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class AuthInfos extends Model {  
    static associate(models) {   
    }
  } 
  AuthInfos.init({
    authId: DataTypes.INTEGER,
    login: DataTypes.STRING(30),
    password: DataTypes.STRING(100),  
    refreshToken: DataTypes.STRING(400),
    accessToken: DataTypes.STRING(400),
    isActivated: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'AuthInfos',
  });
  return AuthInfos;
};

