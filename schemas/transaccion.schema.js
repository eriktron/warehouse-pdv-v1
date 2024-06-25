const Joi = require('joi');

const id = Joi.number().integer();
const cantidad = Joi.number().integer();
const tipo = Joi.string().valid('in', 'out');
const createdAt = Joi.date();
const producto_id = Joi.number().integer();

const createTransaccionSchema = Joi.object({
  cantidad: cantidad.required(),
  tipo: tipo.required(),
  createdAt: createdAt,
  producto_id: producto_id.required()
});

const updateTransaccionSchema = Joi.object({
  cantidad: cantidad,
  tipo: tipo,
  createdAt: createdAt,
  producto_id: producto_id,
});

const getTransaccionSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTransaccionSchema, updateTransaccionSchema, getTransaccionSchema }
