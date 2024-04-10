'use strict';
const {CategorySchema, CATEGORY_TABLE} = require('./../models/category.model')
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
  },

  down: async (queryInterface) => {
   await queryInterface.removeTable(CATEGORY_TABLE);
  }
};
