import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        {this.props.todoList.map(todo => {
          return <Todo key={todo.id} todo={todo} />
        })}
      </div>
    )
  }
}

export default TodoList;