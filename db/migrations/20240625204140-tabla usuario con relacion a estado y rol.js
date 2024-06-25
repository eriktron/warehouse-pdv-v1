'use strict';

/** @type {import('sequelize-cli').Migration} */

const {UsuarioSchema, USUARIO_TABLA} = require ('./../models/usuario.model');


module.exports = {
  async up (queryInterface) {

      await queryInterface.createTable(USUARIO_TABLA, UsuarioSchema);

  },

  async down (queryInterface) {

      await queryInterface.dropTable(USUARIO_TABLA);

  }
};
