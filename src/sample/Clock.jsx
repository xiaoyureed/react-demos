import React from 'react';
import './Clock.css';

export default class Clock extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log("Clock constructed");
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    console.log("Clock did mount");
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    // 释放资源
    console.log("Clock will unmount");
    clearInterval(this.timer);
  }

  componentDidUpdate() {
    console.log("Clock did update");
  }

  render() {
    return (
      <div className="container">
        <p>生命周期方法</p>
        <p>定时器</p>
        <p>class 的 constructor 方法</p>
        <div className="content">
          <h1>Hello World.</h1>
          <h2>{this.state.date.toLocaleTimeString()}</h2>
        </div>
      </div>
    );
  }
}
