const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const models = require("../models");
const bet = models.Partida;

const actualiza = async (
  id,
  game,
  start,
  span,
  state,
  teamA,
  teamB,
  factorA,
  factorB,
  result
) => {
  console.log("==> INicio de update");

  return bet
    .update(
      {
        juego: game,
        horaInicio: start,
        duracion: span,
        estado: state,
        equipoA: teamA,
        equipoB: teamB,
        factorGanadorA: factorA,
        factorGanadorB: factorB,
        resultado: result,
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
