'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Homes extends Model {  
    static associate(models) {  
      // вытаскиваем из модели Homes строку id=1 значение модели City которое находится там под ключом cityId=1
      Homes.belongsTo(models.Citys, { foreignKey: 'cityId', as: 'Citys' })
      Homes.belongsTo(models.Regions, { foreignKey: 'regionId', as: 'Regions' })
      Homes.belongsTo(models.Districts, { foreignKey: 'districtId', as: 'Districts' })
      Homes.belongsTo(models.Streets, { foreignKey: 'streetId', as: 'Streets' }) 
    }
  }
  
  Homes.init({
    regionId: DataTypes.STRING,
    cityId: DataTypes.STRING,
    districtId: DataTypes.STRING,
    streetId: DataTypes.STRING,
    number: DataTypes.INTEGER,  
    index: DataTypes.INTEGER,  
    floors: DataTypes.INTEGER,  
    entrancesCount: DataTypes.INTEGER,  
    flatsCount: DataTypes.INTEGER,  
  }, {
    sequelize,
    modelName: 'Homes',
  });
  return Homes;
};

 