const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');

const {CATEGORY_TABLE} = require('./category.model')
const PRODUCT_TABLE = 'products';

const ProductSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING,
        unique: false //cambiar a false, esta en true ok
    },
    price:{
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    image:{
        allowNull: false,  //cambiar a false esta en true ok
        type: DataTypes.STRING
    },
   description:{   //agregar
       type: DataTypes.TEXT,
       allowNull: false,
   },
    createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
    categoryId:{
      field: 'category_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      //unique: , se quita el campo unique ya que necesitamos que haya muchos productos
      references:{
          model: CATEGORY_TABLE,
          key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
  }
}

class Product extends Model{
    static associate(models){
        this.belongsTo(models.Category, {as: 'category'});
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product}
