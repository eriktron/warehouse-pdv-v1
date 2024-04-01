const boom = require('@hapi/boom');

//const getConnection = require('../libs/postgres');
const { models } = require ('./../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    //const client = await getConnection();
    const rta = await models.User.findAll();
    // x const rta = await client.query('SELECT * FROM tasks');
   // return rta.rows;
    return rta;
  }

  async findOne(id) {
    return { id };
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

module.exports = UserService;
