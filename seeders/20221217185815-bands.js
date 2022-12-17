'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //will run when the seeder is applied
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
  },
//will run when the seeder is undone, although note that if run like the example
//is written currently it will delete everything inside the provided table
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
