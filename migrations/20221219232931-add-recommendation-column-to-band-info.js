'use strict';
const {Datatypes} = require('sequelize')

module.exports = {
  //async to await the method call
  async up (queryInterface, Datatypes) {
    //first argument:table, second argument: new column name, third: options object
    await queryInterface.addColumn('band_info','recommendation',
    {
      type: Datatypes.STRING
    })
  },

  //there has to be info in the down method before the migration will be
  //allowed to undo
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('band_info','recommendation')
  }
};
