'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //up: will run when applying the migration
  async up(queryInterface, Sequelize) {
    //make sure to change the table name to match the table
    await queryInterface.createTable('band_info', {
      band_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      band_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genre: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      band_members: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  //down: will run when reverting the migration
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('band_info');
  }
};