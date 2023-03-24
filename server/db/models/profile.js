'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profiles extends Model { 
    static associate(models) {   
      Profiles.belongsTo(models.Roles, { foreignKey: 'role', as: 'Roles' }) 
    }
  }
  Profiles.init({
    role: DataTypes.INTEGER,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    confirmed: DataTypes.BOOLEAN,
    avatar: DataTypes.STRING,
    confirm_hash: DataTypes.STRING,
    position: DataTypes.STRING,
    numTasks: DataTypes.INTEGER,
    munMessages: DataTypes.INTEGER,
    last_seen: {
      type: DataTypes.DATE,
      // defaultValue: new Date() 
      defaultValue: DataTypes.NOW,
    }
  }, {
    sequelize,
    modelName: 'Profiles',
  });
  return Profiles;
};
 