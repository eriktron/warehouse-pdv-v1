const boom = require('@hapi/boom');

//const getConnection = require('../libs/postgres');
const { models } = require ('../libs/sequelize');

class CustomerService {
  constructor() {}

  async find() {
    const rta = await models.Customer.findAll({
      include: ['user']
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.Customer.findByPk(id);
    if(!user){
      throw boom.notFound('Customer-Cliente no encontrado');
    }
    return user;
  }
  async create(data){
    //const newUser = await models.User.create(data.user); se elimina
    const newCustomer = await models.Customer.create(data, {
      include: ['user']
    });
    return newCustomer;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }
}

module.exports = CustomerService;
