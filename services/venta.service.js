const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize');

class VentaService {

  constructor(){
    //
  }
  async create(data) {
    const rta = await models.Venta.create(data);
    return rta;
  }

  async find() {
    const rta = await models.Venta.findAll();
    return rta
  }

  async findOne(id) {
    const rta = await models.Venta.findByPk(id, {
      include: 'rmtmventprod'
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

  //esta funcion trabaja para crear en T_Detallevetna
  async addItem(data) {
    const rta = await models.Detalleventa.create(data);
    return rta;
  }


}

module.exports = VentaService;
