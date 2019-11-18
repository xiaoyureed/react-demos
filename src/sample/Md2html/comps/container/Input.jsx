import { connect } from 'react-redux';
import InputUi from '../ui/InputUi';
import action from '../../action/action';

const Input = connect(
    // state 就是 store.getState()
    state => ({
      md: state.md,
    }),
    dispatch => ({
      onChange: event => dispatch(action.changeContentAction(event.target.value)),
    }),
)(InputUi);

export default Input;
