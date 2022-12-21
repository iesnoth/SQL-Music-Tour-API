'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band }) {
      //band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
    }
  }
  MeetGreet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    time_start: {
      type: DataTypes.TIME,
      allowNull: false
    },
    time_end: {
      type: DataTypes.TIME,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      reference: "events",
      referenceKey: "event_id",
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      reference: "band_info",
      referenceKey: "band_id",
      allowNull: false
    },
    stage_id: {
      type: DataTypes.INTEGER,
      reference: "stages",
      referenceKey: "stage_id",
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MeetGreet',
    tableName: "meet_greets",
    timestamps: false
  });
  return MeetGreet;
};