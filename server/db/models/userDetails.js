'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class userDetails extends Model {  
    static associate(models) {  
    }
  }
  
  userDetails.init({
    userId: DataTypes.INTEGER,
    mobileNum: DataTypes.STRING,
    address: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'userDetails',
  });
  return userDetails;
};  