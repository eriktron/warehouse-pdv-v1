const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize');

class ProductoService {

  constructor(){
    //
  }
  async create(data) {
    const rta = await models.Producto.create(data);
    return rta;
  }

  async find() {
    const rta = await models.Producto.findAll({
      include: ['rprodcate', 'rprodprov', 'rprodesta', 'rprodunid', 'rprodstoc', 'rprodtran']

    });
    return rta
  }

  async findOne(id) {
    const rta = await models.Producto.findByPk(id);
    return rta;
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

module.exports = ProductoService;
