'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class MENU extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  };
  MENU.init({
    ITEM_NAME: DataTypes.STRING,
    DESCRIPCION: DataTypes.STRING,
    TIPO_COMIDA: DataTypes.BOOLEAN,
    PRECIO: DataTypes.REAL,
    FOTO_URL:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MENU'
  })
  return MENU
};