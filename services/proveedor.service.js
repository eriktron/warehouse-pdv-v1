const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize');

class ProveedorService {

  constructor(){
    //
  }
  async create(data) {
    const rta = await models.Proveedor.create(data);
    return rta;
  }

  async find() {
    const rta = await models.Proveedor.findAll();
    return rta
  }

  async findOne(id) {
    const rta = await models.Proveedor.findByPk(id, {
      include: ['rprovprod']
    });
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

module.exports = ProveedorService;
