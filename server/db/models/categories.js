'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {}
  Categories.init({
    name: DataTypes.STRING,
    products: DataTypes.STRING,
    info: DataTypes.STRING,  
  }, {
    sequelize,
    modelName: 'Categories',
  });

  return Categories;
};