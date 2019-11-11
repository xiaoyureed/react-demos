import React from "react";

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
            <button onClick={this.handleClick}/>
          </div>
        </div>
    );
  }
}

export default Header;
