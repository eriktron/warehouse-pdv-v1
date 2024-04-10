'use strict';
const { DataTypes } = require('sequelize');
const {PRODUCT_TABLE} = require('./../models/product.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(PRODUCT_TABLE, 'name', {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false
    });
    //await queryInterface.changeColumn(PRODUCT_TABLE, 'image', {allowNull: false});
  },

  down: async (queryInterface) => {
    //
  }
};
