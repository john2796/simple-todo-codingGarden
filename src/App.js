import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello Coding Doraemon!",
      newTodo: "",
      todos: [
        {
          title: "Learn React",
          done: false
        },
        {
          title: "Learn JSX",
          done: false
        }
      ]
    };
  }

  formSubmitted = event => {
    event.preventDefault();
    const newTodo = this.state.newTodo;
    if (newTodo === "") {
      return null;
    }
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    });
  };

  newTodoChanged = event => {
    this.setState({ newTodo: event.target.value });
  };

  toggleTodoDone = (event, index) => {
    // console.log(event.target.checked);
    const todos = [...this.state.todos]; // copy the array
    todos[index] = { ...todos[index] }; // copy the todo
    todos[index].done = event.target.checked; // update done property on copied todo
    this.setState({
      todos
    });
  };

  removeTodo = index => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({ todos });
  };

  allDone = () => {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });

    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={this.formSubmitted}>
          <label htmlFor="newTodo">New Todo</label>
          <input
            name="newTodo"
            id="newTodo"
            value={this.state.newTodo}
            onChange={this.newTodoChanged}
          />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={() => this.allDone()}>All Done !</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={todo.title}>
                <span
                  style={{
                    textDecoration: todo.done ? "line-through" : "inherit"
                  }}
                >
                  {todo.title}
                </span>
                <button onClick={() => this.removeTodo(index)}>Remove</button>
                {/* <span className={todo.done ? "done" : ""}>{todo.title}</span> */}
                <input
                  type="checkbox"
                  onChange={event => this.toggleTodoDone(event, index)}
                  checked={todo.done}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
