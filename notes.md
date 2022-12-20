/controllers folder - Where we will house all our endpoint routes that interact with the database
/models folder - Where we will write out our tables and columns
server.js - Our entry file, where most server configuration is housed.
.env - Our environment variables; It is recommended that you add it into the .gitignore file.

Dependencies - Where we require all our packages
Configuration/Middleware - Where we configure those dependency packages
express.json() and express.urlencoded(...) - Configuration for body-parser, which parses request bodies that come in
Root - A GET for the root route ('/'), responding with a simple welcome message
Listen - Where we tell our app what port to listen for connections on

install sequelize with
"npm i sequelize"

install native Postgres drivers by running the following:
"npm i pg pg-hstore"

### CLI commands
to install: npm i -g sequelize-cli
sequelize init:config- makes a configuration json file
sequelize init:models- makes index.js in models folder
sequelize init:migrations- makes migrations folder
sequelize model:generate- makes models
    NOTE: do not put spaces between -- and the word after it
sequelize db:migrate- initialize after the model and migration are set up
sequelize seed:generate --name 'NAME'= creates a seeder folder with a new file in it
sequelize migration:generate --name <migration name>- creates a migration skeleton
sequelize db:migrate:undo- undoes last migration

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
