'use strict';
const { Datatypes } = require('sequelize')

module.exports = {
  //async to await the method call
  async up(queryInterface, Datatypes) {
    //first argument:table, second argument: new column name, third: options object
    await queryInterface.addColumn('stages', 'stage_hands',
      {
        type: Datatypes.INTEGER
      })
  },

  //there has to be info in the down method before the migration will be
  //allowed to undo
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('stages', 'stage_hands')
  }
};
