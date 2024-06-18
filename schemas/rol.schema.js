const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(1).max(15);
const info = Joi.string().min(1);

const createRolSchema = Joi.object({
  nombre: nombre.required(),
  info: info
});

const updateRolSchema = Joi.object({
  nombre: nombre,
  info: info
});

const getRolSchema = Joi.object({
  id: id.required(),
});

module.exports = { createRolSchema, updateRolSchema, getRolSchema }
