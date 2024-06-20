const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const PROVEEDOR_TABLA = 'T_Proveedor';

const ProveedorSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: false,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    primaryKey: false,
    autoIncrement: false,
    unique: false,
    allowNull: false,
  },
  dir: {
    type: DataTypes.TEXT,
    primaryKey: false,
    autoIncrement: false,
    unique: false,
    allowNull: true,
  }
}

class Proveedor extends Model {
  static associate(models){
    //asociacion uno a muchos Proveedor(1)--(*)Producto
    Proveedor.hasMany(models.Producto, {
      foreignKey: 'proveedor_id',
      as: 'rprovprod'
    })
  }

  static config(sequelize){
      return{
          sequelize,
          tableName: PROVEEDOR_TABLA,
          modelName: 'Proveedor',
          timestamps: false

      }
  }
}

module.exports = { Proveedor, ProveedorSchema, PROVEEDOR_TABLA};
