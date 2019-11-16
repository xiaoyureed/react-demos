import { EventEmitter } from 'events';
import {ADD_TODO, DELETE_TODO} from "../actions/actionType";
import appDispatcher from '../dispatcher';

const store = {
  todos: [],
};

/**
 * 自定义的 todoStore, 管理 todos
 */
class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.store = store;
  }

  /**
   * 设置 listener, 一个 action 对应一个 callback 函
   * 数 (用于更新具体组件自己的 state)
   * @param {string} todoAction
   * @param {function} callback
   */
  addActionListener(todoAction, callback) {
    this.on(todoAction, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(ADD_TODO, callback);
  }

  /**
   * store 仅仅提供getter aip, setter aip 只允许 发送 action
   * @returns {[]}
   */
  getTodos() {
    return this.store.todos;
  }

}

let todoStore = new TodoStore();

/**
 * 注册处理 action 的 handler
 */
appDispatcher.register(({type, payload}) => {
  switch (type) {
    case ADD_TODO:
      store.todos.push(payload.text);
      // 发出事件
      todoStore.emit(ADD_TODO);
      break;
    case DELETE_TODO:
      store.todos = store.todos.filter(todo => {
        return todo !== payload.text;
      });
      todoStore.emit(DELETE_TODO);
      break;
    default:
      return true;
  }
  return true;
});

export default todoStore;
