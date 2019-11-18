import { handleActions } from 'redux-actions';
import todoState from "../consts/model";

const uiReducers = handleActions({
  SHOW: (state, { payload }) => (
      state.set('todos', payload.todo)
  ),
}, todoState);

export default uiReducers;
