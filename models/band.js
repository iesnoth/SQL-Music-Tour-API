'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Band.init({
    band_id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    band_name: {
        type:DataTypes.STRING,
        allowNull:false
    },
    genre: {
        type:DataTypes.TEXT,
        allowNull:false
    },
    band_members: {
        type:DataTypes.INTEGER,
        allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'band_info',
    //to undo the createdAt and updatedAt automatic columns
    timestamps: false
  });
  return Band;
};