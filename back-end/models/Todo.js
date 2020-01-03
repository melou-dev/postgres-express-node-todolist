"use strict";
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Todo.associate = function(models) {
    // associations can be defined here
    TodoItem.belongsTo(models.Todo, {
      foreignKey: "todoId",
      onDelete: "CASCADE"
      // tells Postgres that if we delete a todo, it's associated todo items should
      // be deleted as well (cascade the delete action).
    });
  };

  return TodoItem;
};
