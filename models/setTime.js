'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    static associate({ Band, Event, Stage }) {
      //band
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
      //event
      SetTime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
      //stage
      SetTime.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }
  SetTime.init({
    set_time_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    set_time_start: {
      type: DataTypes.TIME,
      allowNull: false
    },
    set_time_end: {
      type: DataTypes.TIME,
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'set_times',
    timestamps: false
  });
  return SetTime;
};