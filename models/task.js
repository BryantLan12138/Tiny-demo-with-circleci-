'use strict';
module.exports = (sequelize, DataTypes) => {
  var Taskss = sequelize.define('Tasks', {
    title: DataTypes.STRING
  });

  Tasks.associate = function (models) {
    models.Tasks.belongsTo(models.Users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Tasks;
};
