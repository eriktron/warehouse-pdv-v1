const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(1).max(15);
const codigo = Joi.string().min(1);
const cantidad = Joi.number().integer();
const precioVenta = Joi.number().integer();
const marca = Joi.string().min(1);
const categoria_id = Joi.number().integer();
const proveedor_id = Joi.number().integer();
const unidad_id = Joi.number().integer();
const estado_id = Joi.number().integer();

const createProductoSchema = Joi.object({
  nombre: nombre.required(),
  codigo: codigo,
  cantidad: cantidad,
  precioVenta: precioVenta,
  marca: marca,
  categoria_id: categoria_id.required(),
  proveedor_id: proveedor_id,
  unidad_id: unidad_id,
  estado_id: estado_id.required()
});

const updateProductoSchema = Joi.object({
  nombre: nombre,
  codigo: codigo,
  cantidad: cantidad,
  precioVenta: precioVenta,
  marca: marca,
  categoria_id: categoria_id,
  proveedor_id: proveedor_id,
  unidad_id: unidad_id,
  estado_id: estado_id
});

const getProductoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductoSchema, updateProductoSchema, getProductoSchema }
