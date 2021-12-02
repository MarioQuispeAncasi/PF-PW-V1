'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Apuesta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPartida: {
        type: Sequelize.STRING
      },
      idUsuario: {
        type: Sequelize.STRING
      },
      equipo: {
        type: Sequelize.STRING
      },
      monto: {
        type: Sequelize.INTEGER
      },
      factor: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Apuesta');
  }
};