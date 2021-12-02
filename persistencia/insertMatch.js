const models = require("../models");
const ct = models.Partida;

const insert = async (cat) => {
  return ct
    .create({
      ...cat,
    })
    .then((newCat) => {
      console.log("Registro Insertado" + newCat);
    });
};

// Invocar
module.exports = insert;
