import React from 'react';
import { Card } from 'semantic-ui-react';
import './Todo.css'

class Todo extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <Card 
        onClick={() => this.props.toggleComplete(this.props.todo.id)} 
        className={`todo${this.props.todo.completed ? ' completed' : ''}`} 
        header={this.props.todo.task}
        fluid
      />
    )
  }
}

export default Todo;