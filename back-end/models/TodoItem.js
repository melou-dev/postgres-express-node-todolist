"use strict";
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define("TodoItem", {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  TodoItem.associate = function(models) {
    // associations bas been defined here
    Todo.hasMany(models.TodoItem, {
      foreignKey: "todoId",
      as: "todoItems"
    });
  };

  return Todo;
};
