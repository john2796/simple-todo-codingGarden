import React, { Component } from "react";

import "./App.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

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
    todos[index] = { ...todos[index] }; // copy the todo can also use Object.assign
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
        title: todo.title, // can also do ...todo spread operator
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
        <NewTodoForm
          formSubmitted={this.formSubmitted}
          newTodo={this.state.newTodo}
          newTodoChanged={this.newTodoChanged}
        />
        <button onClick={() => this.allDone()}>All Done !</button>
        <TodoList
          removeTodo={this.removeTodo}
          toggleTodoDone={this.toggleTodoDone}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
