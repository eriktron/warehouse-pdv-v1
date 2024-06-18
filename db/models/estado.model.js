const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const ESTADO_TABLA = 'T_Estado';

const EstadoSchema = {
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

class Estado extends Model {
  static associate(models){
    this.hasMany(models.Producto, {
      as: 'T_Producto',
      foreignKey: 'estado_id'
    })
  }

  static config(sequelize){
      return{
          sequelize,
          tableName: ESTADO_TABLA,
          modelName: 'Estado',  //es la forma de ingresar  a su modelo
          timestamps: false

      }
  }
}

module.exports = { Estado, EstadoSchema, ESTADO_TABLA};
