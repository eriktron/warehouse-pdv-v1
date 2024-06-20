'use strict';

/** @type {import('sequelize-cli').Migration} */

const {StockSchema, STOCK_TABLA} = require ('./../models/stock.model');


module.exports = {
  async up (queryInterface) {

      await queryInterface.createTable(STOCK_TABLA, StockSchema);

  },

  async down (queryInterface) {

      await queryInterface.dropTable(STOCK_TABLA);

  }
};
