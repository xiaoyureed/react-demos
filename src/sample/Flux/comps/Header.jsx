import React from "react";
import {addTodo} from "../actions/todoAction";

class Header extends React.Component {
  state = {
    input: '',
  };

  handleChange = ev => {
    this.setState({
      input: ev.target.value,
      warning: '',
    });
  };

  handleClick = ev => {
    if (this.state.input === '') {
      this.setState({
        input: this.state.input,
        warning: 'input cannot be empty...',
      });
      return;
    }
    // 希望改变store, 只能发出action, 这里传入text, 在内部封装为action
    addTodo(this.state.input);
    this.setState({
      input: '',
    });
  };

  render() {
    return (
        <div>
          <p>todo app (flux 版本)</p>
          <div>
            <input type="text" value={this.state.input}
                   placeholder="input sth pls..." onChange={this.handleChange}/>
            {' '}
            <button onClick={this.handleClick}>submit</button>
            {this.state.warning && (<span>{this.state.warning}</span>)}
          </div>
        </div>
    );
  }
}

export default Header;
