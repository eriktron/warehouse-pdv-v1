const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const {CATEGORIA_TABLA} = require('./categoria.model')
const {PROVEEDOR_TABLA} = require('./proveedor.model')
const {UNIDAD_TABLA} = require('./unidad.model')
const {ESTADO_TABLA} = require('./estado.model')

const PRODUCTO_TABLA = 'T_Producto';

const ProductoSchema = {
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
  codigo: {
    type: DataTypes.STRING,
    primaryKey: false,
    autoIncrement: false,
    unique: false,
    allowNull: true,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    primaryKey: false,
    autoIncrement: false,
    unique: false,
    allowNull: true,
  },
  precioVenta: {
    type: DataTypes.DECIMAL(8,2),
    primaryKey: false,
    autoIncrement: false,
    unique: false,
    allowNull: true,
  },
  marca: {
    type: DataTypes.STRING,
    primaryKey: false,
    autoIncrement: false,
    unique: false,
    allowNull: true,
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'categoria_id',
    references:{
      model: CATEGORIA_TABLA,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  proveedor_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'proveedor_id',
    references:{
      model: PROVEEDOR_TABLA,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  unidad_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'unidad_id',
    references:{
      model: UNIDAD_TABLA,
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

class Producto extends Model {

  static associate(models){
    //asociacion uno a muchos Categoria(1)--(*)Producto
    Producto.belongsTo(models.Categoria, {
      foreignKey: 'categoria_id'
      // as: 'categ' ////se le da un nombre, funciono tb quitandole
    });
  }

  static config(sequelize){
      return{
          sequelize,
          tableName: PRODUCTO_TABLA,
          modelName: 'Producto',  //es la forma de ingresar  a su modelo
          timestamps: false

      }
  }
}

module.exports = { Producto, ProductoSchema, PRODUCTO_TABLA};
