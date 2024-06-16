'use strict';

/** @type {import('sequelize-cli').Migration} */

// const {UserSchema, USER_TABLE} = require ('./../models/user.model');
// const {CustomerSchema, CUSTOMER_TABLE} = require ('./../models/customer.model');
// const {CategorySchema, CATEGORY_TABLE} = require('./../models/category.model');
// const {ProductSchema, PRODUCT_TABLE} = require('./../models/product.model');
// const {OrderSchema, ORDER_TABLE} = require('./../models/order.model');
// const {OrderProductSchema, ORDER_PRODUCT_TABLE} = require('./../models/orderproduct.model');

const {CategoriaSchema, CATEGORIA_TABLA} = require ('./../models/categoria.model');

module.exports = {
  async up (queryInterface) {
      // await queryInterface.createTable(USER_TABLE, UserSchema);
      // await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
      // await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
      // await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
      // await queryInterface.createTable(ORDER_TABLE, OrderSchema);
      // await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
      await queryInterface.createTable(CATEGORIA_TABLA, CategoriaSchema);
  },

  async down (queryInterface) {
      // await queryInterface.dropTable(USER_TABLE);
      // await queryInterface.dropTable(CUSTOMER_TABLE);
      // await queryInterface.removeTable(CATEGORY_TABLE);
      // await queryInterface.dropTable(PRODUCT_TABLE);
      // await queryInterface.dropTable(ORDER_TABLE);
      // await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
      await queryInterface.dropTable(CATEGORIA_TABLA);
  }
};
