import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <input type="text" name="taskInput" placeholder="Add Task" value={this.props.taskInput} onChange={this.props.handleChange} />
        <button type="submit">Submit</button>
      </form>
    )

  }
}

export default TodoForm;