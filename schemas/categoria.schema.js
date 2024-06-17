const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(1).max(20);
const descripcion = Joi.string().min(1);

const createCategoriaSchema = Joi.object({
  nombre: nombre.required(),
  descripcion: descripcion
});

const updateCategoriaSchema = Joi.object({
  nombre: nombre,
  descripcion: descripcion
});

const getCategoriaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategoriaSchema, updateCategoriaSchema, getCategoriaSchema }
