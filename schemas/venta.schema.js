const Joi = require('joi');

const id = Joi.number().integer();
const ventafecha = Joi.date();
const createdAt = Joi.date();
const cliente_id = Joi.number().integer();
const usuario_id = Joi.number().integer();

const createVentaSchema = Joi.object({
  ventafecha: ventafecha,
  createdAt: createdAt,
  cliente_id: cliente_id,
  usuario_id: usuario_id.required(),
});

const updateVentaSchema = Joi.object({
  ventafecha: ventafecha,
  createdAt: createdAt,
  cliente_id: cliente_id,
  usuario_id: usuario_id
});

const getVentaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createVentaSchema, updateVentaSchema, getVentaSchema }
