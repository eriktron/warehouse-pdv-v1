const Joi = require('joi');

const maxDecimalValue = 999999.99;
const minDecimalValue = -999999.99;

const id = Joi.number().integer();
const cantidad = Joi.number().integer();
const precio = Joi.number().precision(2).max(maxDecimalValue).min(minDecimalValue)
const venta_id = Joi.number().integer();
const producto_id = Joi.number().integer();

const createProductoSchema = Joi.object({
  cantidad: cantidad,
  precio: precio,
  venta_id: venta_id,
  producto_id: producto_id
});

const updateProductoSchema = Joi.object({
  cantidad: cantidad,
  precio: precio,
  venta_id: venta_id,
  producto_id: producto_id
});

const getProductoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductoSchema, updateProductoSchema, getProductoSchema }
