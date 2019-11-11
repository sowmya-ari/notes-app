'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    title: {
      type: DataTypes.STRING,
      unique: true
    },
    content: DataTypes.STRING
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
  };
  return Note;
};