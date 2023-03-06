'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DialogMessages extends Model { 
    static associate(models) {
      // define association here
    }
  }
  DialogMessages.init({
    dialog: DataTypes.INTEGER,
    dialog_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DialogMessages',
  });
  return DialogMessages;
};