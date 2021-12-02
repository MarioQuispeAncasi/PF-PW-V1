const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const models = require("../models");
const bet = models.Apuesta;

const actualiza = async (id, amount) => {
  console.log("==> INicio de update");

  return bet
    .update(
      {
        monto: amount,
      },
      {
        where: {
          id: id,
        },
      }
    )
    .then((resultado) => {
      console.log("Registro actualizado");
      console.log(resultado);
    });

  console.log("==> Fin de update");
};

module.exports = actualiza;
