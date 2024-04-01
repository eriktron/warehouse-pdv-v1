const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
    id: {
        allowNull: false,   //que no es nulo
        autoIncrement: true, //es autoincremental
        primaryKey: true, // es un primary key
        type: DataTypes.INTEGER //tipo entero
    },
    email: {
        allowNull: false, 
        type: DataTypes.STRING, //que es string
        unique: true, //que es un campo unico
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING 
    },
    createdAt: { //aqui como lo manejaremos en javascript
        allowNull: false, 
        type: DataTypes.DATE,
        field: 'create_at', //aqui como quedara en la base de datos
        defaultValue: Sequelize.NOW
    }
}

//definimos una clase con nuestro modelo y extiende de MODEL
class User extends Model {
    static associate(){         //metodo estatico, quiere decir que no 
        //                      //necesito una declaracion para usar
    }                           //estos metodos

    static config(sequelize){   //creamos un estatico para la conexion
        return{
            sequelize,          //aqui es: cual es la conexion
            tableName: USER_TABLE, //aqui cual es el nombre de la tabla
            modelName: 'User',      //definimos el nombre del modelo
            timestamps: false       //son para crear campos por defecto
                                    //pero lo deshablitamos
        }
    }
}

module.exports = { USER_TABLE, UserSchema, User}

