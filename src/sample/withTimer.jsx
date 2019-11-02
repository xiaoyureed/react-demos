import React from "react";

export default function withTimer(WrappedComponent) {
  return class extends React.Component {
    state = { time: new Date() };
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        time: new Date()
      });
    }
    render() {
      // props 原封未动
      // 增加了一个 time 属性
      return <WrappedComponent time={this.state.time} {...this.props} />;
    }
  };
}
