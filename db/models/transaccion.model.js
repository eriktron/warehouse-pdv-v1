const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const {PRODUCTO_TABLA} = require('./producto.model');

const TRANSACCION_TABLA = 'T_Transaccion';

const TransaccionSchema = {
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
  tipo: {
    type: DataTypes.ENUM('in', 'out'),
    allowNull: false,
  },
  createdAt:{
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
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

class Transaccion extends Model {

  static associate(models){
    //asociacion uno a muchos Producto(1) - Transaccion(*)
    this.belongsTo(models.Producto, {
      foreignKey: 'producto_id',
      as: 'rtranprod'
    });
  }

  static config(sequelize){
      return{
          sequelize,
          tableName: TRANSACCION_TABLA,
          modelName: 'Transaccion',  //es la forma de ingresar  a su modelo
          timestamps: false

      }
  }
}

module.exports = { Transaccion, TransaccionSchema , TRANSACCION_TABLA};
