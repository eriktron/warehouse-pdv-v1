const express = require('express');

const ClienteService = require('./../services/cliente.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
      createClienteSchema,
      updateClienteSchema,
      getClienteSchema
} = require('./../schemas/cliente.schema');

const router = express.Router();
const service = new ClienteService();

router.get('/', async (req, res, next) => {
  try {
    res.json(await service.find());
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getClienteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.findOne(id);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createClienteSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRta = await service.create(body);
      res.status(201).json(newRta);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getClienteSchema, 'params'),
  validatorHandler(updateClienteSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const rta = await service.update(id, body);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getClienteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
