'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Partida.init({
    juego: DataTypes.STRING,
    fecha: DataTypes.STRING,
    horaInicio: DataTypes.STRING,
    duracion: DataTypes.STRING,
    estado: DataTypes.STRING,
    equipoA: DataTypes.STRING,
    equipoB: DataTypes.STRING,
    factorGanadorA: DataTypes.INTEGER,
    factorGanadorB: DataTypes.INTEGER,
    resultado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Partida',
  });
  return Partida;
};