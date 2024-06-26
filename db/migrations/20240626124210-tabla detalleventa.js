'use strict';

/** @type {import('sequelize-cli').Migration} */

const {DetalleventaSchema, DETALLEVENTA_TABLA} = require ('./../models/detalleventa.model');


module.exports = {
  async up (queryInterface) {

      await queryInterface.createTable(DETALLEVENTA_TABLA, DetalleventaSchema);

  },

  async down (queryInterface) {

      await queryInterface.dropTable(DETALLEVENTA_TABLA);

  }
};
