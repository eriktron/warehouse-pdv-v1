'use strict';
const {ProductSchema, PRODUCT_TABLE} = require ('./../models/product.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(PRODUCT_TABLE, 'description', ProductSchema.description);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'description');
  }
};
