const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const ROL_TABLA = 'T_Rol';

const RolSchema = {
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

class Rol extends Model {
  static associate(models){
    //relacion uno a muchos donde Rol es (1)
    Rol.hasMany(models.Usuario, {
      foreignKey: 'rol_id',
      as: 'rrolusua'
    });
  }

  static config(sequelize){
      return{
          sequelize,
          tableName: ROL_TABLA,
          modelName: 'Rol',  //es la forma de ingresar  a su modelo
          timestamps: false

      }
  }
}

module.exports = { Rol, RolSchema, ROL_TABLA};
