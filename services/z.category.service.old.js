const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize');

class CategoryService {

  constructor(){
  }
  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const rta = await models.Category.findAll();
    return rta
  }

  async findOne(id) {
    const rta = await models.Category.findByPk(id, {
      include: ['products']
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

module.exports = CategoryService;