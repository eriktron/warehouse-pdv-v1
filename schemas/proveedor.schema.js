const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(1).max(20);
const dir = Joi.string().min(1);

const createProveedorSchema = Joi.object({
  nombre: nombre.required(),
  dir: dir
});

const updateProveedorSchema = Joi.object({
  nombre: nombre,
  dir: dir
});

const getProveedorSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProveedorSchema, updateProveedorSchema, getProveedorSchema }
