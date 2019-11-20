import {fromJS} from 'immutable';
/**
 * 整个app的state
 */
const todoState = fromJS({
  todos: [],
  todo: {
    id: '',
    text: '',
    updatedAt: '',
    completed: false,
  },
});

export default todoState;
