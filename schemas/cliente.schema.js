const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(1).max(50);
const tel = Joi.number().integer();

const createClienteSchema = Joi.object({
  nombre: nombre.required(),
  tel: tel
});

const updateClienteSchema = Joi.object({
  nombre: nombre,
  tel: tel
});

const getClienteSchema = Joi.object({
  id: id.required(),
});

module.exports = { createClienteSchema, updateClienteSchema, getClienteSchema }
