'use strict';

/** @type {import('sequelize-cli').Migration} */

const {VentaSchema, VENTA_TABLA} = require ('./../models/venta.model');


module.exports = {
  async up (queryInterface) {

      await queryInterface.createTable(VENTA_TABLA, VentaSchema);

  },

  async down (queryInterface) {

      await queryInterface.dropTable(VENTA_TABLA);

  }
};
