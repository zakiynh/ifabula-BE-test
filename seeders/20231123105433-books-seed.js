'use strict';
const books = require('./books.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    books.forEach(book => {
      book.createdAt = new Date();
      book.updatedAt = new Date();
    });
    await queryInterface.bulkInsert('Books', books, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
