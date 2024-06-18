'use strict';

/** @type {import('sequelize-cli').Migration} */

const {UnidadSchema, UNIDAD_TABLA} = require ('./../models/unidad.model');
const {EstadoSchema, ESTADO_TABLA} = require ('./../models/estado.model');
const {ClienteSchema, CLIENTE_TABLA} = require ('./../models/cliente.model');
const {RolSchema, ROL_TABLA} = require ('./../models/rol.model');

module.exports = {
  async up (queryInterface) {

      await queryInterface.createTable(UNIDAD_TABLA, UnidadSchema);
      await queryInterface.createTable(ESTADO_TABLA, EstadoSchema);
      await queryInterface.createTable(CLIENTE_TABLA, ClienteSchema);
      await queryInterface.createTable(ROL_TABLA, RolSchema);
  },

  async down (queryInterface) {

      await queryInterface.dropTable(UNIDAD_TABLA);
      await queryInterface.dropTable(ESTADO_TABLA);
      await queryInterface.dropTable(CLIENTE_TABLA);
      await queryInterface.dropTable(ROL_TABLA);
  }
};
