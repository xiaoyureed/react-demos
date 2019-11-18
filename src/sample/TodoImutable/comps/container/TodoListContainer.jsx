import { connect } from 'react-redux';
import { deleteTodo } from '../../actions';
import TodoList from "../ui/TodoList";

export default connect(
    state => ({
      todos: state.getIn(['todo', 'todos']),
    }),
    dispatch => ({
      onDeleteTodo: index => () => (
          dispatch(deleteTodo({ index }))
      ),
    }),
)(TodoList);
