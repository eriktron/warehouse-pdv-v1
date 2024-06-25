'use strict';

/** @type {import('sequelize-cli').Migration} */

const {TransaccionSchema, TRANSACCION_TABLA} = require ('./../models/transaccion.model');


module.exports = {
  async up (queryInterface) {

      await queryInterface.createTable(TRANSACCION_TABLA, TransaccionSchema);

  },

  async down (queryInterface) {

      await queryInterface.dropTable(TRANSACCION_TABLA);

  }
};
