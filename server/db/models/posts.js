'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class posts extends Model {  
    static associate(models) { 
      // posts.belongsTo(models.users, { foreignKey: 'userId', as: 'users' });
    }
  }
  
  posts.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
}; 
