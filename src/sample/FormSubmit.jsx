import React from 'react';

class FormSubmit extends React.PureComponent {
  state = {
    name: '',
    error: null,
  };

  handleSubmit = ev => {
    ev.preventDefault();
    if (!this.state.name) {
      this.setState({
        error: 'Name cannot be null',
      });
      return;
    }
    this.setState(
      {
        error: null,
      }, 
      // callback
      () => {
        console.log('submit data: ', this.state);
        
      },
    );
  };

  handleInput = ev => {
    const name = ev.target.value;
    // 不能加这个判断, 否则输入框内容没法删除干净
    // if (!name) {
    //   return;
    // }
    this.setState({
      name: name,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name: </label>
          <input onChange={this.handleInput} type="text" value={this.state.name} />
        </div>
        {this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
        <button>submit</button>
      </form>
    );
  }
}

export default FormSubmit;
