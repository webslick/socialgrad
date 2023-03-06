'use strict';
const { Model } = require('sequelize'); 
module.exports = (sequelize, DataTypes) => {
  
  class Messages extends Model {
    static associate(models) {  
      Messages.belongsTo(models.Dialogs, { foreignKey: 'userId', as: 'Dialogs' });
    }
  }
 
  Messages.init({
    dialog:DataTypes.INTEGER,
    text: DataTypes.STRING,
    read: DataTypes.BOOLEAN,   
  }, {
    sequelize,
    modelName: 'Messages',
  });
   
  return Messages;
};
 
