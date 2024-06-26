const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const {VENTA_TABLA} = require('./venta.model');
const {PRODUCTO_TABLA} = require('./producto.model');

const DETALLEVENTA_TABLA = 'T_Detalleventa';

const DetalleventaSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio:{
    type: DataTypes.DECIMAL(8,2),
    allowNull: false,
  },
  venta_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'venta_id',
    references:{
      model: VENTA_TABLA,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'producto_id',
    references:{
      model: PRODUCTO_TABLA,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
}

class Detalleventa extends Model {

  static associate(models){
    //asociacion uno a muchos


  }

  static config(sequelize){
      return{
          sequelize,
          tableName: DETALLEVENTA_TABLA,
          modelName: 'Detalleventa',  //es la forma de ingresar  a su modelo
          timestamps: false

      }
  }
}

module.exports = { Detalleventa, DetalleventaSchema, DETALLEVENTA_TABLA};
