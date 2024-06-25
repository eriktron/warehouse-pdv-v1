const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const {ROL_TABLA} = require('./rol.model');
const {ESTADO_TABLA} = require('./estado.model');

const USUARIO_TABLA = 'T_Usuario';

const UsuarioSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombrecompleto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ci: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  rol_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'rol_id',
    references:{
      model: ROL_TABLA,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  estado_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'estado_id',
    references:{
      model: ESTADO_TABLA,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
}

class Usuario extends Model {
  static associate(models){
    //Relacion uno a muchos rol(1) - usuario(*)
    this.belongsTo(models.Rol, {
      foreignKey: 'rol_id',
      as: 'rusuarol'
    });

    this.belongsTo(models.Estado, {
      foreignKey: 'estado_id',
      as: 'rusuaesta'
    });
  }

  static config(sequelize){
      return{
          sequelize,
          tableName: USUARIO_TABLA,
          modelName: 'Usuario',
          timestamps: false

      }
  }
}

module.exports = { Usuario, UsuarioSchema, USUARIO_TABLA};
