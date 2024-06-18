const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const {CUSTOMER_TABLE} = require('./customer.model');
const {PRODUCT_TABLE} = require('./product.model');
//const {ORDER_PRODUCT_TABLE} = require('./orderproduct.model');

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
  // total:{
  //   type:DataTypes.VIRTUAL,
  //   get(){
  //     if(this.items.length > 0){
  //       return this.items.reduce((total, item) => {
  //         return total + (item.price * item.OrderProduct.amount);
  //       }, 0);
  //     }
  //     return 0;
  //   }
  // }
}

class Order extends Model {
  static associate(models){
      this.belongsTo(models.Customer, {
        as: 'customer'
      }),
      this.belongsToMany(models.Product, {
        as: 'items',
        through: models.OrderProduct,
        foreignKey: 'orderId',
        otherKey: 'productId'
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

module.exports = { ORDER_TABLE , OrderSchema, Order};