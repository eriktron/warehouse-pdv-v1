const express = require('express');

const VentaService = require('./../services/venta.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
      createVentaSchema,
      updateVentaSchema,
      getVentaSchema,
      addItemSchema
} = require('./../schemas/venta.schema');

const router = express.Router();
const service = new VentaService();

router.get('/', async (req, res, next) => {
  try {
    res.json(await service.find());
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getVentaSchema, 'params'),
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
  validatorHandler(createVentaSchema, 'body'),
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

//se agrega esta funcion para que agregue a T_Detalleventa
router.post('/add-item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRta = await service.addItem(body);
      res.status(201).json(newRta);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getVentaSchema, 'params'),
  validatorHandler(updateVentaSchema, 'body'),
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
  validatorHandler(getVentaSchema, 'params'),
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
