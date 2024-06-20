const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const UNIDAD_TABLA = 'T_Unidad';

const UnidadSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: false,
    allowNull: false,
  },
  sigla: {
    type: DataTypes.STRING,
    primaryKey: false,
    autoIncrement: false,
    unique: true,
    allowNull: false,
  },
  info: {
    type: DataTypes.STRING,
    primaryKey: false,
    autoIncrement: false,
    unique: false,
    allowNull: true,
  }
}

class Unidad extends Model {
  static associate(models){
    //asociacion uno a muchos Unidad(1)--(*)Producto
    Unidad.hasMany(models.Producto, {
      foreignKey: 'unidad_id',
      as: 'runidprod'
    })
  }

  static config(sequelize){
      return{
          sequelize,
          tableName: UNIDAD_TABLA,
          modelName: 'Unidad',  //es la forma de ingresar  a su modelo
          timestamps: false

      }
  }
}

module.exports = { Unidad, UnidadSchema, UNIDAD_TABLA};
