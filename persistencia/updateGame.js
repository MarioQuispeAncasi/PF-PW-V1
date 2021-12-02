const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const models = require("../models");
const bet = models.Juego;

const actualiza = async (id, name, category) => {
  console.log("==> INicio de update");

  return bet
    .update(
      {
        nombre: name,
        categoria: category,
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