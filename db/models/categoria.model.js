const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORIA_TABLA = 'T_Categoria';

const CategoriaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}

class Categoria extends Model {

  static associate(models){
    //asociacion uno a muchos Categoria(1)--(*)Producto
    Categoria.hasMany(models.Producto, {
      foreignKey: 'categoria_id'
      // as: 'produ' //se le da un nombre, funciono tb quitandole
    })
  }

  static config(sequelize){
      return{
          sequelize,
          tableName: CATEGORIA_TABLA,
          modelName: 'Categoria',  //es la forma de ingresar  a su modelo
          timestamps: false

      }
  }
}

module.exports = { Categoria, CategoriaSchema, CATEGORIA_TABLA};
