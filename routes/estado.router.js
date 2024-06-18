const express = require('express');

const EstadoService = require('./../services/estado.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
      createEstadoSchema,
      updateEstadoSchema,
      getEstadoSchema
} = require('./../schemas/estado.schema');

const router = express.Router();
const service = new EstadoService();

router.get('/', async (req, res, next) => {
  try {
    res.json(await service.find());
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getEstadoSchema, 'params'),
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
  validatorHandler(createEstadoSchema, 'body'),
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
  validatorHandler(getEstadoSchema, 'params'),
  validatorHandler(updateEstadoSchema, 'body'),
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
  validatorHandler(getEstadoSchema, 'params'),
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
