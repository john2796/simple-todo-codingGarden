import React from "react";

const TodoItem = props => {
  const { todo, index } = props;
  return (
    <li>
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "inherit"
        }}
      >
        {todo.title}
      </span>
      <button onClick={() => props.removeTodo(index)}>Remove</button>
      {/* <span className={todo.done ? "done" : ""}>{todo.title}</span> */}
      <input
        type="checkbox"
        onChange={event => props.toggleTodoDone(event, index)}
        checked={todo.done}
      />
    </li>
  );
};

export default TodoItem;
