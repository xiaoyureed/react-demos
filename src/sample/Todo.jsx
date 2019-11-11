import React from 'react';
import withTimer from './withTimer';

const Todos = props => {
  return <ul>{props.todos.map(todo => <li>{todo}</li>)}</ul>;
};

export class Todo extends React.PureComponent {
  state = {
    todos: [],
    input: '',
  };

  handleInput = event => {
    this.setState({
      input: event.target.value,
    });
  };

  handleAdd = () => {
    const toAdd = this.state.input;
    if (!toAdd) {
      return;
    }
    this.setState({
      todos: [...this.state.todos, toAdd],
      input: '',
    });
  };

  render() {
    return (
      <div>
        <p>在 state component 中 state, 函数绑定的简单写法</p>
        <Todos todos={this.state.todos} />
        <div>
          <input value={this.state.input} onChange={this.handleInput}></input> {' '}
          <button onClick={this.handleAdd}>add</button>
        </div>
        <p>{this.props.time.toLocaleString()}</p>
      </div>
    );
  }
}

export default withTimer(Todo);
