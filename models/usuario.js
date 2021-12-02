'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuario.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.STRING,
    correo: DataTypes.STRING,
    clave: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    distrito: DataTypes.STRING,
    provincia: DataTypes.STRING,
    departamento: DataTypes.STRING,
    pep: DataTypes.BOOLEAN,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};