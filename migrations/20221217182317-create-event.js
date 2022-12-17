'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      venue: {
        type: Sequelize.STRING,
        allowNull:false
      },
      city: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      date_start: {
        type: Sequelize.DATE,
        allowNull:false
      },
      date_end: {
        type: Sequelize.DATE,
        allowNull:false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('events');
  }
};