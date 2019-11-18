import { handleActions } from 'redux-actions';
import todoState from '../consts/model';
import actionType from "../consts/actionType";


const actions = {};

actions[actionType.CREATE_TODO] = (state) => {
  const todos = state.get('todos').push(state.get('todo'));
  return state.set('todos', todos);
};
actions[actionType.DELETE_TODO] = (state, { payload }) => (
    state.set('todos', state.get('todos').splice(payload.index, 1))
);
actions[actionType.CHANGE_TEXT] = (state, { payload }) => (
    state.merge({ todo: payload })
);

/**
 * 传入 初始state, action, 返回新的state
 * https://www.jianshu.com/p/c6096d61ae1c 使用redux-actions
 */
const todoReducers = handleActions(actions, todoState);

export default todoReducers;
