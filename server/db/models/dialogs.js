'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dialogs extends Model { 
    static associate(models) {
      Dialogs.belongsTo(models.Profiles, { foreignKey: 'userId', as: 'Profiles' });
      Dialogs.hasMany(models.Messages, { foreignKey: 'userId', as: 'Messages' });  
    }
  }
  Dialogs.init({
    dialogId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER, 
    collaborator: DataTypes.INTEGER, 
    lastMessage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dialogs',
  });
  return Dialogs;
};
 