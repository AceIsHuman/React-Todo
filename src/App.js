import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      taskInput: ''
    }
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      taskInput: e.target.value
    })
  }

  addTodo = (e, task) => {
    e.preventDefault();
    const todo = { task: task, id: Date.now(), completed: false };
    this.setState({
      todoList: [...this.state.todoList, todo],
      taskInput: ''
    })
  }

  toggleComplete = id => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed}
        } return todo
      }),
      taskInput: this.state.taskInput
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm taskInput={this.state.taskInput} handleChange={this.handleChange} addTodo={this.addTodo} />
        <TodoList todoList={this.state.todoList} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
