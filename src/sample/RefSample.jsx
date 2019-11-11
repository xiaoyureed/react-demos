import React from 'react';

class RefSample extends React.PureComponent {

  componentDidMount() {
    const ref1 = this.refs.hello.innerText;// deprecated
    const ref2 = this.node.innerText;
    console.log(ref1);
    console.log(ref2);
  }

  render() {
    return (
      <div ref="root">
        <div ref="hello">hello ref</div>
        <div ref={node => this.node = node}>function ref</div>
      </div>
    );
  }
}

export default RefSample;
