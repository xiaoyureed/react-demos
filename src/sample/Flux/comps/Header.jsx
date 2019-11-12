import React from "react";
import {addTodo} from "../actions/todoAction";

class Header extends React.Component {
  state = {
    input: '',
  };

  handleChange = ev => {
    this.setState({
      input: ev.target.value,
    });
  };

  handleClick = ev => {
    // 希望改变state, 只能发出action, 这里传入text, 在内部封装为action
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
          </div>
        </div>
    );
  }
}

export default Header;
