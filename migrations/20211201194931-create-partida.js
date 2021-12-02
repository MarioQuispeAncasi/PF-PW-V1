'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Partidas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      juego: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.STRING
      },
      horaInicio: {
        type: Sequelize.STRING
      },
      duracion: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      equipoA: {
        type: Sequelize.STRING
      },
      equipoB: {
        type: Sequelize.STRING
      },
      factorGanadorA: {
        type: Sequelize.INTEGER
      },
      factorGanadorB: {
        type: Sequelize.INTEGER
      },
      resultado: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Partidas');
  }
};