'use strict';
const users = require('./users.json');
const { hashPassword } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    users.forEach(user => {
      user.createdAt = new Date();
      user.updatedAt = new Date();
      user.password = hashPassword(user.password);
    });
    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
