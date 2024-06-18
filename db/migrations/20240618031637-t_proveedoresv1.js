'use strict';

/** @type {import('sequelize-cli').Migration} */

const {ProveedorSchema, PROVEEDOR_TABLA} = require ('./../models/proveedor.model');

module.exports = {
  async up (queryInterface) {

      await queryInterface.createTable(PROVEEDOR_TABLA, ProveedorSchema);
  },

  async down (queryInterface) {

      await queryInterface.dropTable(PROVEEDOR_TABLA);
  }
};

