import React from 'react';
import { Button, Input } from 'semantic-ui-react';

class TodoForm extends React.Component {
  constructor() {
    super();
  }

  onSubmit = e => {
    this.props.addTodo(e, this.props.taskInput);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="add-task-container">
        <Input type="text" name="taskInput" placeholder="Add New Task" value={this.props.taskInput} onChange={this.props.handleChange} />
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={this.props.clearCompleted} className="clear-btn">Clear Completed</Button>
      </form>
    )

  }
}

export default TodoForm;