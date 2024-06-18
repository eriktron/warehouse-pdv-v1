const Joi = require('joi');

const id = Joi.number().integer();
const sigla = Joi.string().min(1).max(5);
const info = Joi.string().min(1);

const createUnidadSchema = Joi.object({
  sigla: sigla.required(),
  info: info
});

const updateUnidadSchema = Joi.object({
  sigla: sigla,
  info: info
});

const getUnidadSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUnidadSchema, updateUnidadSchema, getUnidadSchema }
