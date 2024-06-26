const Joi = require('joi');

const maxDecimalValue = 999999.99;
const minDecimalValue = -999999.99;

const id = Joi.number().integer();
const ventafecha = Joi.date();
const createdAt = Joi.date();
const cliente_id = Joi.number().integer();
const usuario_id = Joi.number().integer();
//agregando la relacion manyTomany (tabla Detalleventa)
const cantidad = Joi.number().integer();
const precio = Joi.number().precision(2).max(maxDecimalValue).min(minDecimalValue)
const venta_id = Joi.number().integer();
const producto_id = Joi.number().integer();

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

//se crea este, para la T_Detalleventa
const addItemSchema = Joi.object({
  cantidad: cantidad,
  precio : precio,
  venta_id : venta_id.required(),
  producto_id : producto_id.required(),
});


module.exports = { createVentaSchema, updateVentaSchema, getVentaSchema, addItemSchema }
