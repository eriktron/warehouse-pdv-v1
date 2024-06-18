'use strict';

/** @type {import('sequelize-cli').Migration} */

const {ProductoSchema, PRODUCTO_TABLA} = require ('./../models/producto.model');


module.exports = {
  async up (queryInterface) {

      await queryInterface.createTable(PRODUCTO_TABLA, ProductoSchema);

  },

  async down (queryInterface) {

      await queryInterface.dropTable(PRODUCTO_TABLA);

  }
};
