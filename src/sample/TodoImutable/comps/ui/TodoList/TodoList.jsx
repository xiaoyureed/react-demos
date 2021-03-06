import React from 'react';
import PropTypes from 'prop-types';
import css from './TodoList.module.css';

const TodoList = ({todos, onDeleteTodo}) => (
    <div className="panel panel-primary">
      <div align="center" className={`${css.title} panel-heading`}>
        todo
      </div>
      <div className={`${css.childCenter} panel-body`}>
        <ul>
          {
            todos.map((todo, index) => (
                <li key={index}>
                  <button className="btn btn-danger btn-sm" type="button" onClick={onDeleteTodo(index)}>
                    delete
                  </button>
                  <span className={css.todoText}>
                    {todo.get('text')}
                  </span>
                </li>
            )).toJS()
          }
        </ul>
      </div>
    </div>
);

TodoList.propTypes = {
  // todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
