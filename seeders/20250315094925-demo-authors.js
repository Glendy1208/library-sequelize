"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Authors",
      [
        {
          name: "J.K. Rowling",
          bio: "Penulis Harry Potter",
          birth_date: new Date("1965-07-31"),
        },
        {
          name: "George R.R. Martin",
          bio: "Penulis Game of Thrones",
          birth_date: new Date("1948-09-20"),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Authors', null, {});
  },
};
