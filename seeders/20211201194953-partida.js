"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Partidas",
      [
        {
          juego: "Carreras",
          fecha: "10/10/2021",
          horaInicio: "10:00:00",
          duracion: "60",
          estado: "finalizado",
          equipoA: "Equipo rojo",
          equipoB: "Equipo azul",
          factorGanadorA: 3,
          factorGanadorB: 1,
          resultado: "Equipo azul",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          juego: "Football",
          fecha: "15/10/2021",
          horaInicio: "12:00:00",
          duracion: "90",
          estado: "iniciado",
          equipoA: "Equipo Verde",
          equipoB: "Equipo Amarillo",
          factorGanadorA: 2,
          factorGanadorB: 4,
          resultado: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          juego: "Basketball",
          fecha: "09/10/2021",
          horaInicio: "08:00:00",
          duracion: "100",
          estado: "finalizado",
          equipoA: "Equipo naranja",
          equipoB: "Equipo celeste",
          factorGanadorA: 3,
          factorGanadorB: 1,
          resultado: "empate",
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
