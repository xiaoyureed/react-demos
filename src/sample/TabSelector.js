import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './TabSelector.css';
import withTimer from './withTimer';

class TabSelector extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    options: [],
    onChange: () => {
    }
  };

  render() {
    const {options, value, onChange} = this.props;
    return (
        <div className="tab-selector">
          <ul>
            {options.map(opt => (
                <li key={opt.value}
                    className={`tab-item ${opt.value === this.props.value ? 'selected' : ''}`}
                    onClick={() => onChange(opt.value)}
                >
                  {opt.name}
                </li>
            ))}
          </ul>
        </div>
    );
  }
}

const options = [
  {name: "Red", value: "red"},
  {name: "Blue", value: "blue"},
  {name: "Orange", value: "orange"}
];

export class TabSelectorSample extends PureComponent {
  state = {
    color: null
  };

  render() {
    return (
        <div>
          <p>props参数校验</p>
          <p>state 在 class 中的简单写法</p>
          <p>高阶组件</p>
          Select color:{" "}
          <TabSelector
              options={options}
              value={this.state.color}
              onChange={c => this.setState({color: c})}
          />
          <p>{this.props.time.toLocaleTimeString()}</p>
        </div>
    );
  }
}

export default withTimer(TabSelectorSample);
