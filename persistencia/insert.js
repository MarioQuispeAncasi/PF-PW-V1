const models = require("../models");
const usr = models.Usuario;

const insert = async (user) => {
  return usr
    .create({
      ...user,
    })
    .then((newUsr) => {
      console.log("Registro Insertado" + newUsr);
    });
};

// Invocar
module.exports = insert;
