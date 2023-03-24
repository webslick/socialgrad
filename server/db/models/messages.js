'use strict';
const { Model } = require('sequelize'); 
module.exports = (sequelize, DataTypes) => {
  
  class Messages extends Model {
    static associate(models) {   
      Messages.belongsTo(models.Dialogs, { foreignKey: 'dialogId', as: 'Dialogs' }); 

      // Messages.belongsTo(models.RoomTypes, { foreignKey: 'id', as: 'RoomTypes' }); 
      Messages.belongsTo(models.RoomTypes, { foreignKey: 'roomId', as: 'RoomTypes' });
    }
  }
 
  Messages.init({
    userId: DataTypes.INTEGER,
    dialogId: DataTypes.STRING, 
    roomId: DataTypes.STRING, 
    text: DataTypes.STRING,
    type: DataTypes.STRING,
    filename: DataTypes.STRING,
    readed: DataTypes.BOOLEAN, 
  }, {
    sequelize,
    modelName: 'Messages',
  });
   
  return Messages;
};
 
 