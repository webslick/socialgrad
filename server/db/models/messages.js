'use strict';
const { Model } = require('sequelize'); 
module.exports = (sequelize, DataTypes) => {
  
  class Messages extends Model {
    static associate(models) {  
      // Messages.belongsTo(models.Dialogs,{
      //   foreignKey: 'dialogId',
      //   as : 'chat'
      // })
      // Messages.belongsTo(models.Users,{
      //   foreignKey: 'senderId',
      //   as : 'user'
      // })
      // Messages.belongsTo(models.Dialogs, { foreignKey: 'userId', as: 'Dialogs' });
    }
  }
 
  Messages.init({
    text: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    sender: DataTypes.STRING,
    filename: DataTypes.STRING,
    tipo: DataTypes.STRING,
    senderId: DataTypes.INTEGER,
    dialogId: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'Messages',
  });
   
  return Messages;
};
 
