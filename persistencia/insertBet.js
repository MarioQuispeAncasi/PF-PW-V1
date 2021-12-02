const models = require("../models");
const bt = models.Apuesta;

const insert = async (bet) => {
  return bt
    .create({
      ...bet,
    })
    .then((newBet) => {
      console.log("Registro Insertado" + newBet);
    });
};

// Invocar
module.exports = insert;
