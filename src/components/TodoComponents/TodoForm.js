import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
  }

  onSubmit = e => {
    this.props.addTodo(e, this.props.taskInput);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="taskInput" placeholder="Add Task" value={this.props.taskInput} onChange={this.props.handleChange} />
        <button type="submit">Submit</button>
      </form>
    )

  }
}

export default TodoForm;