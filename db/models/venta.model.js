const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const {CLIENTE_TABLA} = require('./cliente.model');
const {USUARIO_TABLA} = require('./usuario.model');

const VENTA_TABLA = 'T_Venta';

const VentaSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },
  ventafecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  createdAt:{
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'cliente_id',
    references:{
      model: CLIENTE_TABLA,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'usuario_id',
    references:{
      model: USUARIO_TABLA,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
}

class Venta extends Model {

  static associate(models){
    //asociacion uno a muchos
    Venta.belongsTo(models.Cliente, {
      foreignKey: 'cliente_id',
      as: 'rventclie'
    });

    Venta.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      as: 'rventusua'
    });

  }

  static config(sequelize){
      return{
          sequelize,
          tableName: VENTA_TABLA,
          modelName: 'Venta',  //es la forma de ingresar  a su modelo
          timestamps: false

      }
  }
}

module.exports = { Venta, VentaSchema, VENTA_TABLA};
