'use strict';
const { DataTypes } = require('sequelize');
const {PRODUCT_TABLE} = require('./../models/product.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(PRODUCT_TABLE, 'image', {
      allowNull: false,  //cambiar a false esta en true
      type: DataTypes.STRING
    });
  },

  down: async (queryInterface) => {
    //
  }
};
