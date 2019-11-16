import React from 'react';
import todoStore from "../stores/todoStore";
import {ADD_TODO, DELETE_TODO} from "../actions/actionType";
import {deleteTodo} from "../actions/todoAction";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    let todoToDelete = event.currentTarget.lastElementChild.textContent;
    console.log(todoToDelete);
    deleteTodo(todoToDelete);
  }

  componentDidMount() {
    // 组件 mount 后, 需要注册 listener, 碰到action, 更新state
    todoStore.addActionListener(ADD_TODO, () => (
        this.setState({
          todos: todoStore.getTodos(),
        })
    ));
    todoStore.addActionListener(DELETE_TODO, () => {
      this.setState({
        todos: todoStore.getTodos(),
      });
    });
  }

  render() {
    let {todos} = this.state;
    return (
        <div>
          <ul>
            {todos.map((todo, key) => (
                <li key={key} onClick={this.handleDelete}>
                  <span
                      style={{
                        cursor: 'pointer',
                      }}
                  >
                    [x]
                  </span>
                  <span>{todo}</span>
                </li>
            ))}
          </ul>
        </div>
    );
  }
}

export default List;
