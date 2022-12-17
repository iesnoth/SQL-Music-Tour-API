'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      set_time_start: {
        type: Sequelize.TIME,
        allowNull: false
      },
      set_time_end: {
        type: Sequelize.TIME,
        allowNull: false
      },
      band_id: {
        type: Sequelize.INTEGER,
        reference: "band_info",
        referenceKey: "band_id",
        allowNull: false
      },
      stage_id: {
        type: Sequelize.INTEGER,
        reference: "stages",
        referenceKey: "stage_id",
        allowNull: false
      },
      event_id: {
        type: Sequelize.INTEGER,
        reference: "events",
        referenceKey: "event_id",
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};