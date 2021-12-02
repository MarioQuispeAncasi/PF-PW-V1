/*
Consulta sin filtros
*/
const models = require("../models");
const bet = models.Apuesta;

const query = async () => {
  console.log("==> Inicio de query");

  return bet
    .findAll()
    .then((listado) => {
      // Mostrar los datos
      listado.forEach((elem) => {
        jsonObject = elem.get({ raw: true });
      });
      return listado;
    })

    .catch((error) => {
      console.log("Error en el acceso a BD");
    });

  console.log("==> Final de query");
};

module.exports = query;
