import React from 'react';
import PropTypes from 'prop-types';
import css from './InputUi.module.css';

/* class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = state;
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <textarea value={value} onChange={this.onChange} />
      </div>
    );
  }
} */

// 使用 functional component, 去掉了 state, 性能更高.
const InputUi = ({md, onChange}) => (
    // <textarea className={`${styles.input} form-control`} onChange={onChange} value={value} />

    <div className={css.input}>
      <p>markdown (redux + react-redux)</p>
      <textarea className={css.text} onChange={onChange} value={md}/>
    </div>
);

InputUi.propTypes = {
  md: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputUi;
