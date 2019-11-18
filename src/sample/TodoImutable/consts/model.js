import Immutable from 'immutable';
/**
 * 整个app的state
 */
const todoState = Immutable.fromJS({
  todos: [],
  todo: {
    id: '',
    text: '',
    updatedAt: '',
    completed: false,
  },
});

export default todoState;
