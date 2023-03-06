'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profiles extends Model { 
    static associate(models) {  
      Profiles.hasMany(models.Dialogs, { foreignKey: 'userId', as: 'Dialogs' });
    }
  }
  Profiles.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    confirmed: DataTypes.BOOLEAN,
    avatar: DataTypes.STRING,
    confirm_hash: DataTypes.STRING,
    last_seen: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'Profiles',
  });
  return Profiles;
};
 