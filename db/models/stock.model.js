const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const {PRODUCTO_TABLA} = require('./producto.model');

const STOCK_TABLA = 'T_Stock';

const StockSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'producto_id',
    unique: true,
    references:{
      model: PRODUCTO_TABLA,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
}

class Stock extends Model {

  static associate(models){
    //asociacion uno a uno Producto(1) - Stock(1)
    Stock.belongsTo(models.Producto, {
      foreignKey: 'producto_id',
      as: 'rstocprod'
    });
  }

  static config(sequelize){
      return{
          sequelize,
          tableName: STOCK_TABLA,
          modelName: 'Stock',  //es la forma de ingresar  a su modelo
          timestamps: false

      }
  }
}

module.exports = { Stock, StockSchema, STOCK_TABLA};
