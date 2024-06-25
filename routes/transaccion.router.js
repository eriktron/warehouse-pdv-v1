const express = require('express');

const TransaccionService = require('./../services/transaccion.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
      createTransaccionSchema,
      updateTransaccionSchema,
      getTransaccionSchema
} = require('./../schemas/transaccion.schema');

const router = express.Router();
const service = new TransaccionService();

router.get('/', async (req, res, next) => {
  try {
    res.json(await service.find());
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getTransaccionSchema, 'params'),
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
  validatorHandler(createTransaccionSchema, 'body'),
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
  validatorHandler(getTransaccionSchema, 'params'),
  validatorHandler(updateTransaccionSchema, 'body'),
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
  validatorHandler(getTransaccionSchema, 'params'),
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
