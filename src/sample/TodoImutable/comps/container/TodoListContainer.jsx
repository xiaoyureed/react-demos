import { connect } from 'react-redux';
import { deleteTodo } from '../../actions';
import TodoList from "../ui/TodoList";
import {getIn} from "immutable";

export default connect(
    state => ({
      todos: getIn(state, ['todos'], []),
    }),
    dispatch => ({
      onDeleteTodo: index => () => (
          dispatch(deleteTodo({ index }))
      ),
    }),
)(TodoList);
