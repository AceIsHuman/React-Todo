import React from 'react';

class Todo extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <span>{this.props.todo.task}</span>
      </div>
    )
  }
}

export default Todo;