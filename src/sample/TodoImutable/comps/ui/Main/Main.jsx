import React from 'react';
import css from './Main.module.css';
import TodoHeaderContainer from "../../container/TodoHeaderContainer";
import TodoListContainer from "../../container/TodoListContainer";
/**
 * Stateless Component，负责所有 View 的进入点
 */
const Main = () => (
    <div className={`${css.container}`}>
      <TodoHeaderContainer />
      <TodoListContainer />
    </div>
);

export default Main;
