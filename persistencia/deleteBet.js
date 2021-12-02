const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const models = require("../models");
const bt = models.Apuesta;

const deleteBet = async (llave) => {
  console.log("==> Inicio de delete");

  return bt
    .destroy({
      where: {
        id: llave,
      },
    })
    .then((resultado) => {
      console.log("Registro eliminado");
      console.log(resultado);
      return resultado;
    });

  console.log("==> Fin de delete");
};

module.exports = deleteBet;
