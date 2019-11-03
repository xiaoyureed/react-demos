import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import './PortalSample.css';

class PortalSample extends React.PureComponent {
  state = {
    visible: false,
  };

  renderPortal() {
    return (
      <div className="portal">
        <div>this is a portal</div>
        <Button type="primary" onClick={() => this.setState({ visible: false })}>
          close portal
        </Button>
      </div>
    );
  }

  render() {
    if (this.state.visible) {
      return ReactDOM.createPortal(
        this.renderPortal(),
        document.getElementById('portal-container')
      );
    }
    return (
      <Button type="primary" onClick={() => this.setState({ visible: true })}>
        open portal
      </Button>
    );
  }
}

export default PortalSample;
