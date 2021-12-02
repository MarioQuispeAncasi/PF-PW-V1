'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Apuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Apuesta.init({
    idPartida: DataTypes.STRING,
    idUsuario: DataTypes.STRING,
    equipo: DataTypes.STRING,
    monto: DataTypes.INTEGER,
    factor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Apuesta',
  });
  return Apuesta;
};