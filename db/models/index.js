const { Categoria, CategoriaSchema } = require('./categoria.model');
const { Proveedor, ProveedorSchema} = require ('./proveedor.model');
const { Unidad, UnidadSchema} = require('./unidad.model');
const { Estado, EstadoSchema} = require('./estado.model');
const { Cliente, ClienteSchema} = require('./cliente.model');
const { Rol, RolSchema} = require('./rol.model');
const { Producto, ProductoSchema} = require('./producto.model');
const { Stock, StockSchema} = require('./stock.model');
const { Transaccion, TransaccionSchema} = require('./transaccion.model');
const { Usuario, UsuarioSchema} = require('./usuario.model');
const { Venta, VentaSchema} = require('./venta.model');

function setupModels(sequelize){
    Categoria.init(CategoriaSchema, Categoria.config(sequelize)); //aqui iniciamos
    Proveedor.init(ProveedorSchema, Proveedor.config(sequelize));
    Unidad.init(UnidadSchema, Unidad.config(sequelize));
    Estado.init(EstadoSchema, Estado.config(sequelize));
    Cliente.init(ClienteSchema, Cliente.config(sequelize));
    Rol.init(RolSchema, Rol.config(sequelize));
    Producto.init(ProductoSchema, Producto.config(sequelize));
    Stock.init(StockSchema, Stock.config(sequelize));
    Transaccion.init(TransaccionSchema, Transaccion.config(sequelize));
    Usuario.init(UsuarioSchema, Usuario.config(sequelize));
    Venta.init(VentaSchema, Venta.config(sequelize));

    Producto.associate(sequelize.models); //aqui hacemos la incialización de las relaciones
    Categoria.associate(sequelize.models);
    Proveedor.associate(sequelize.models);
    Unidad.associate(sequelize.models);
    Estado.associate(sequelize.models);
    Stock.associate(sequelize.models);
    Usuario.associate(sequelize.models);
    Venta.associate(sequelize.models);

}

module.exports = setupModels;
