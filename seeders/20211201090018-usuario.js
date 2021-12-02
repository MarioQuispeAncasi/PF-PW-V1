"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    
    
    await queryInterface.bulkInsert(
      "Usuarios",
      [
        {
          nombre: "admin",
          correo: "admin@gmail.com",
          clave: "123",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      [
        {
          nombre: "usuario-ulima",
          correo: "usuarioUlima@gmail.com",
          clave: "123",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
