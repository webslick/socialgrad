'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dialogs extends Model { 

 
    static associate(models) {
      // Dialogs.belongsTo(models.Profiles, { foreignKey: 'userId', as: 'Profiles' });
      // Dialogs.belongsTo(models.Profiles, { foreignKey: 'senderId', as: 'Sender' });
      // Dialogs.hasMany(models.Messages, { foreignKey: 'userId', as: 'Messages' });  
    }
  }
  Dialogs.init({
    dialogId: DataTypes.INTEGER, 
    collaborator: DataTypes.INTEGER, 
    lastMessage: DataTypes.INTEGER,
    participantes: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    users: DataTypes.STRING,
    senderId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    numSender: DataTypes.INTEGER,
    numRecipient: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'Dialogs',
  });
  return Dialogs;
};
 