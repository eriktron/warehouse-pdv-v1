const Joi = require('joi');

const id = Joi.number().integer();
const login = Joi.string().min(1);
const password = Joi.string().min(4);
const nombrecompleto = Joi.string().min(1);
const ci = Joi.number().integer();
const rol_id = Joi.number().integer();
const estado_id = Joi.number().integer();

const createUsuarioSchema = Joi.object({
  login: login.required(),
  password: password.required(),
  nombrecompleto: nombrecompleto.required(),
  ci: ci,
  rol_id: rol_id.required(),
  estado_id: estado_id.required()
});

const updateUsuarioSchema = Joi.object({
  login: login,
  password: password,
  nombrecompleto: nombrecompleto,
  ci: ci,
  rol_id: rol_id,
  estado_id: estado_id
});

const getUsuarioSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUsuarioSchema, updateUsuarioSchema, getUsuarioSchema }
