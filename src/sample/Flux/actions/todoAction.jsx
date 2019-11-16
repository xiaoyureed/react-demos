import {bindDispatcherAction} from "../utis/bindUtil";
import {ADD_TODO, DELETE_TODO} from "./actionType";
import appDispatcher from '../dispatcher';

/**
 * add todoCreators
 * @param {string} text
 */
export const addTodo = text => {
  bindDispatcherAction({
    type: ADD_TODO,
    payload: {
      text: text,
    },
  }, appDispatcher)();
};

export const deleteTodo = text => {
  bindDispatcherAction({
    type: DELETE_TODO,
    payload: {
      text: text,
    }
  }, appDispatcher)();
};
