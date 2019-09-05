import React from 'react';

import './Todo.css'

class Todo extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div onClick={() => this.props.toggleComplete(this.props.todo.id)}>
        <span className={`todo${this.props.todo.completed ? ' completed' : ''}`}>{this.props.todo.task}</span>
      </div>
    )
  }
}

export default Todo;