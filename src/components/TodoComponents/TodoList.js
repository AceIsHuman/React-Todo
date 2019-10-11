import React from 'react';
import { Grid } from 'semantic-ui-react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        {this.props.todoList.map(todo => {
          return <Todo key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} />
        })}
      </div>
    )
  }
}

export default TodoList;