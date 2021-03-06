import React from "react";
import TodolistItem2 from "./TodolistItem2";

const Todolist2 = ({
  todo,
  onDeleteHandler,
  onCheckToggleHandler,
  onEditHandler,
}) => {
  return todo.map((todos, index) => (
    <div
      key={index}
      style={{
        width: 500,
        height: 65,
      }}
    >
      <TodolistItem2
        key={todos.id}
        todos={todos}
        onDeleteHandler={onDeleteHandler}
        onCheckToggleHandler={onCheckToggleHandler}
        onEditHandler={onEditHandler}
      />
    </div>
  ));
};

export default React.memo(Todolist2);
