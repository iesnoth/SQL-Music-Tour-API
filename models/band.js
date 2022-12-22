'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate({ MeetGreet, SetTime }) {
      // meet and greets
      Band.hasMany(MeetGreet,{
        foreignKey: "band_id",
        as:"meet_greets"
      })
      // set times
      Band.hasMany(SetTime,{
        foreignKey:"band_id",
        as:"set_times"
      })
    }
  }
  Band.init({
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    band_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    band_members: {
      type: DataTypes.INTEGER,
      allowNull: false
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