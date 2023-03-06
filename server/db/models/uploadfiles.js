'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UploadFiles extends Model { 
    static associate(models) {
      // UploadFiles.belongsTo(models.Messages, { 
      //   as: 'messages',
      //   foreignKey: 'id'
      // }); 
    }
  }
  UploadFiles.init({
    messages_id: DataTypes.INTEGER,
    file_id: DataTypes.INTEGER,
    ext: DataTypes.STRING,
    filename: DataTypes.STRING,
    size: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UploadFiles',
  });
  return UploadFiles;
};