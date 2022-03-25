'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Survey.init({
    completeName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    position: DataTypes.STRING,
    location: DataTypes.STRING,
    resumeName: DataTypes.STRING,
    employeeStatus: DataTypes.STRING,
    startDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Survey',
  });
  return Survey;
};