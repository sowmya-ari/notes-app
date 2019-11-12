'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mynotes = sequelize.define('Mynotes', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Mynotes.associate = function(models) {
    // associations can be defined here
  };
  return Mynotes;
};