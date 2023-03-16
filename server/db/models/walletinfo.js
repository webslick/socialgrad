'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Wallets extends Model {  
    static associate(models) {   
    }
  } 
  Wallets.init({
    walletId: DataTypes.INTEGER,
    balance: DataTypes.INTEGER,    
  }, {
    sequelize,
    modelName: 'Wallets',
  });
  return Wallets;
};