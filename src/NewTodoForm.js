import React from "react";

const NewTodoForm = props => {
  return (
    <form onSubmit={props.formSubmitted}>
      <label htmlFor="newTodo">New Todo</label>
      <input
        name="newTodo"
        id="newTodo"
        value={props.newTodo}
        onChange={props.newTodoChanged}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
