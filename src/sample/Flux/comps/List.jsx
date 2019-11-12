import React from 'react';
import todoStore from "../stores/todoStore";

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    // 组件 mount 后, 需要注册一个  listener, 碰到action, 更新state
    todoStore.addChangeListener(() => (
        this.setState({
          todos: todoStore.getTodos(),
        })
    ));
  }

  render() {
    let {todos} = this.state;
    return (
        <div>
          <ul>
            {todos.map((todo, key) => (<li key={key}>{todo}</li>))}
          </ul>
        </div>
    );
  }
}

export default List;
