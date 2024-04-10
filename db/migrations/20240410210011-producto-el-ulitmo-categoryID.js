'use strict';
const {PRODUCT_TABLE, ProductSchema} = require('./../models/product.model')
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(PRODUCT_TABLE, 'categoryId', ProductSchema.categoryId);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'categoryId');
  }
};
