const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const {ORDER_TABLE} = require('./order.model');
const {PRODUCT_TABLE} = require('./product.model');

const ORDER_PRODUCT_TABLE = 'orders_products';

const OrderProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  orderId:{
    field: 'order_id',
    allow: false,
    type: DataTypes.INTEGER,
    references:{
      model: ORDER_TABLE,
      key: 'id'
    },
    onUpdate: 'cascade',
    ondDelete: 'SET NULL'
  },
  productId:{
    field: 'product_id', //estaba con cproduct_id
    allow: false,
    type: DataTypes.INTEGER,
    references:{
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'cascade',
    ondDelete: 'SET NULL'
  },
  amount:{
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

class OrderProduct extends Model {
  static associate(models){
    //
  }

  static config(sequelize){
      return{
          sequelize,
          tableName: ORDER_PRODUCT_TABLE,
          modelName: 'OrderProduct', //estaba en Orders_Products
          timestamps: false

      }
  }
}

module.exports = {ORDER_PRODUCT_TABLE ,OrderProductSchema ,OrderProduct };
