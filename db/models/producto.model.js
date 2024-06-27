const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const {CATEGORIA_TABLA} = require('./categoria.model');
const {PROVEEDOR_TABLA} = require('./proveedor.model');
const {UNIDAD_TABLA} = require('./unidad.model');
const {ESTADO_TABLA} = require('./estado.model');
// const {DETALLEVENTA_TABLA} = require('./detalleventa.model');


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
      foreignKey: 'categoria_id',
      as: 'rprodcate' ////se le da un nombre, funciono tb quitandole
    });

    Producto.belongsTo(models.Proveedor, {
      foreignKey: 'proveedor_id',
      as: 'rprodprov'
    });

    Producto.belongsTo(models.Unidad, {
      foreignKey: 'unidad_id',
      as: 'rprodunid'
    });

    Producto.belongsTo(models.Estado, {
      foreignKey: 'estado_id',
      as: 'rprodesta'
    });
    //asociacion uno a uno Producto(1) - Stock(1)
    Producto.hasOne(models.Stock, {
      foreignKey: 'producto_id',
      as: 'rprodstoc'
    });
    //asociacion uno a muchos donde uno es producto y muchos es transaccion
    Producto.hasMany(models.Transaccion, {
      foreignKey: 'producto_id',
      as: 'rprodtran'
    });

    // esta relacion mucho a muchos con venta intermedio detalleventa no esta afectando si lo pongo o no
    // Producto.belongsToMany(models.Venta, {
    //   through: models.Detalleventa,
    //   foreignKey: 'producto_id',
    //   otherKey: 'venta_id',
    //   as: 'rmtmprodvent',
    // });
  }

  static config(sequelize){
      return{
          sequelize,
          tableName: PRODUCTO_TABLA,
          modelName: 'Producto',
          timestamps: false

      }
  }
}

module.exports = { Producto, ProductoSchema, PRODUCTO_TABLA};
