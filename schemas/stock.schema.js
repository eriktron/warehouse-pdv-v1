const Joi = require('joi');

const id = Joi.number().integer();
const cantidad = Joi.number().integer();
const producto_id = Joi.number().integer();

const createStockSchema = Joi.object({
  cantidad: cantidad,
  producto_id: producto_id
});

const updateStockSchema = Joi.object({
  cantidad: cantidad
});

const getStockSchema = Joi.object({
  id: id.required(),
});

module.exports = { createStockSchema, updateStockSchema, getStockSchema }
