const express = require('express');

const CustomerService = require('./../services/customer.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { 
    updateCustomerSchema,
    createCustomerSchema, 
    getCustomerSchema
} = require('./../schemas/customer.schema');  //aqui c16 pendie 3:54

const router = express.Router();
const service = new CustomerService();

router.get('/', async (req, res, next) => {
  try {
    //const categories = await service.find();
    res.json(await service.find());
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      res.status(201).json(await service.create(body));
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      res.status(201).json(await service.update(id, body));
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(201).json(await service.delete(id));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

