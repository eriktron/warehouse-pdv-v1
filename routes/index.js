const express = require('express');

// const productsRouter = require('./products.router');
// const categoriesRouter = require('./categories.router');
// const usersRouter = require('./users.router');
// const orderRouter = require('./orders.router');
// const customersRouter = require('./customers.router');
const categoriasRouter = require('./categorias.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/w1', router);
  // router.use('/products', productsRouter);
  // router.use('/categories', categoriesRouter);
  // router.use('/users', usersRouter);
  // router.use('/orders', orderRouter);
  // router.use('/customers', customersRouter);
  router.use('/categorias', categoriasRouter);
}

module.exports = routerApi;
