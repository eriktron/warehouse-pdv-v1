// const { User, UserSchema } = require('./user.model');
// const { Customer, CustomerSchema } = require('./customer.model');
// const { Category, CategorySchema } = require('./category.model');
// const { Product, ProductSchema } = require('./product.model');
// const { Order, OrderSchema} = require('./order.model');
// const { OrderProduct, OrderProductSchema} = require('./orderproduct.model');
const { Categoria, CategoriaSchema } = require('./categoria.model');
const { Proveedor, ProveedorSchema} = require ('./proveedor.model');
const { Unidad, UnidadSchema} = require('./unidad.model');
const { Estado, EstadoSchema} = require('./estado.model');
const { Cliente, ClienteSchema} = require('./cliente.model');
const { Rol, RolSchema} = require('./rol.model');

function setupModels(sequelize){
    // User.init(UserSchema, User.config(sequelize));  //aqui iniciamos
    // Customer.init(CustomerSchema, Customer.config(sequelize));
    // Category.init(CategorySchema, Category.config(sequelize));
    // Product.init(ProductSchema, Product.config(sequelize));
    // Order.init(OrderSchema, Order.config(sequelize));
    // OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));
    Categoria.init(CategoriaSchema, Categoria.config(sequelize));
    Proveedor.init(ProveedorSchema, Proveedor.config(sequelize));
    Unidad.init(UnidadSchema, Unidad.config(sequelize));
    Estado.init(EstadoSchema, Estado.config(sequelize));
    Cliente.init(ClienteSchema, Cliente.config(sequelize));
    Rol.init(RolSchema, Rol.config(sequelize));

    // User.associate(sequelize.models); //aqui hacemos la incialización de las relaciones
    // Customer.associate(sequelize.models);
    // Category.associate(sequelize.models);
    // Product.associate(sequelize.models);
    // Order.associate(sequelize.models);
}

module.exports = setupModels;
