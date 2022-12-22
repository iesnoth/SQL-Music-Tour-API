'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate({ Event, StageEvent, SetTime }) {
      // to events
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: StageEvent
      })
      //set times
      Stage.hasMany(SetTime, {
        foreignKey: "stage_id",
        as: "set_times"
      })
    }
  }
  Stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_hands: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    }
  },
    {
      sequelize,
      modelName: 'Stage',
      tableName: 'stages',
      timestamps: false
    });
  return Stage;
};