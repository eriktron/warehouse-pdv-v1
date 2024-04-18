const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');

class OrderService {

  constructor(){
  }

  async create(data) {
    const rta = await models.Order.create(data);
    return rta;
  }

  async find() {
    return [];
  }
//Aqui extendiendo el anidamiento:
  async findOne(id) {
    const rta = await models.Order.findByPk(id, {
      include:[
        {
          association: 'customer',
          include: ['user']
        }
      ]
    });
    return rta;
  }


  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = OrderService;
