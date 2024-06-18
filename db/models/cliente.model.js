const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const CLIENTE_TABLA = 'T_Cliente';

const ClienteSchema = {
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
  tel: {
    type: DataTypes.INTEGER,
    primaryKey: false,
    autoIncrement: false,
    unique: false,
    allowNull: true,
  }
}

class Cliente extends Model {
  static associate(models){
    //
  }

  static config(sequelize){
      return{
          sequelize,
          tableName: CLIENTE_TABLA,
          modelName: 'Cliente',  //es la forma de ingresar  a su modelo
          timestamps: false

      }
  }
}

module.exports = { Cliente, ClienteSchema, CLIENTE_TABLA};
