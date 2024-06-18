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
    this.hasMany(models.Producto, {
      as: 'T_Producto',
      foreignKey: 'proveedor_id'
    })
  }

  static config(sequelize){
      return{
          sequelize,
          tableName: PROVEEDOR_TABLA,
          modelName: 'Proveedor',  //es la forma de ingresar  a su modelo
          timestamps: false

      }
  }
}

module.exports = { Proveedor, ProveedorSchema, PROVEEDOR_TABLA};
