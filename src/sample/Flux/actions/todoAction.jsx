import {bindDispatcherAction} from "../utis/bindUtil";
import {ADD_TODO} from "./actionType";
import appDispatcher from '../dispatcher';

/**
 * add todos
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

