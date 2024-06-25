const express = require('express');

const categoriaRouter = require('./categoria.router');
const proveedorRouter = require('./proveedor.router');
const unidadRouter = require('./unidad.router');
const estadoRouter = require('./estado.router');
const clienteRouter = require('./cliente.router');
const rolRouter = require('./rol.router');
const productoRouter = require('./producto.router');
const stockRouter = require('./stock.router');
const transaccionRouter = require('./transaccion.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/w1', router);
  router.use('/categoria', categoriaRouter);
  router.use('/proveedor', proveedorRouter);
  router.use('/unidad', unidadRouter);
  router.use('/estado', estadoRouter);
  router.use('/cliente', clienteRouter);
  router.use('/rol', rolRouter);
  router.use('/producto', productoRouter);
  router.use('/stock', stockRouter);
  router.use('/transaccion', transaccionRouter);
}

module.exports = routerApi;
