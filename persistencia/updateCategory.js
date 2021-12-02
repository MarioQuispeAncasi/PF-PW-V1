const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const models = require("../models");
const bet = models.Categoria;

const actualiza = async (id, name) => {
  console.log("==> INicio de update");

  return bet
    .update(
      {
        nombre: name,
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