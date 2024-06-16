const express = require('express');

const OrderService = require('./../services/order.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  getOrderSchema,
  createOrderSchema,
  addItemSchema
} = require('./../schemas/order.schema');

const router = express.Router();
const service = new OrderService();

router.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
  try {
    const {id} = req.params;
    res.json(await service.findOne(id));
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next ) => {
    try {
      const body = req.body;
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/add-item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next ) => {
    try {
      const body = req.body;
      const rta = await service.addItem(body);
      res.status(201).json(rta);
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
