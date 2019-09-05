import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '',
      id: ''
    }
  }

  render() {
    return (
      <h3>TodoForm.js</h3>
    )

  }
}

export default TodoForm;