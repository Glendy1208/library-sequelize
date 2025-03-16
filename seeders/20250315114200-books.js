'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        description: 'The first book in the Harry Potter series.',
        publish_date: new Date('1997-06-26'),
        author_id: 1, // Author ID untuk J.K. Rowling
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Harry Potter and the Chamber of Secrets',
        description: 'The second book in the Harry Potter series.',
        publish_date: new Date('1998-07-02'),
        author_id: 1, // Author ID untuk J.K. Rowling
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Game of Thrones',
        description: 'The first book in the A Song of Ice and Fire series.',
        publish_date: new Date('1996-08-01'),
        author_id: 2, // Author ID untuk George R.R. Martin
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Clash of Kings',
        description: 'The second book in the A Song of Ice and Fire series.',
        publish_date: new Date('1998-11-16'),
        author_id: 2, // Author ID untuk George R.R. Martin
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null, {});
  }
};
