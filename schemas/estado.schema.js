const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(1).max(15);
const info = Joi.string().min(1);

const createEstadoSchema = Joi.object({
  nombre: nombre.required(),
  info: info
});

const updateEstadoSchema = Joi.object({
  nombre: nombre,
  info: info
});

const getEstadoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createEstadoSchema, updateEstadoSchema, getEstadoSchema }
