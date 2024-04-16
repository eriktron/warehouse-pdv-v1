const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const {CUSTOMER_TABLE} = require('./customer.model');
const ORDER_TABLE = 'orders';

const OrderSchema = {
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
  customerId:{
    field: 'custormer_id',
    allow: false,
    type: DataTypes.INTEGER,
    references:{
      model: CUSTOMER_TABLE,
      key: 'id'
    }
  }
}

class Order extends Model {
  static associate(models){
      this.belongsTo(models.Customer, {
        as: 'customer'
      })
}

  static config(sequelize){
      return{
          sequelize,
          tableName: ORDER_TABLE,
          modelName: 'Order',
          timestamps: false

      }
  }
}

module.exports = { Order, OrderSchema, ORDER_TABLE};
