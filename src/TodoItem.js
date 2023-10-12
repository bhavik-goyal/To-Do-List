// src/TodoItem.js
import React from "react";

function TodoItem({ index, todo, deleteTodo }) {
  return (
    <li>
      {todo.text}
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
