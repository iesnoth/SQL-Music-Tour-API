'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      reference: "band_info",
      referenceKey: "band_id",
      allowNull: false
    },
    stage_id: {
      type: DataTypes.INTEGER,
      reference: "stages",
      referenceKey: "stage_id",
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      reference: "events",
      referenceKey: "event_id",
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