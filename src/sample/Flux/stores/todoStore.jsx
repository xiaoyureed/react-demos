import { EventEmitter } from 'events';
import {ADD_TODO} from "../actions/actionType";
import appDispatcher from '../dispatcher';

const initialStore = {
  todos: [],
};

/**
 * 自定义的 todoStore, 管理 todos
 */
class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.store = initialStore;
  }

  // 设置 listener, ADD_TODO action发生时, call callback函数
  addChangeListener(callback) {
    this.on(ADD_TODO, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(ADD_TODO, callback);
  }

  getTodos() {
    return this.store.todos;
  }

}

let todoStore = new TodoStore();

/**
 * 注册处理 action 的函数
 */
appDispatcher.register(({type, payload}) => {
  switch (type) {
    case ADD_TODO:
      initialStore.todos.push(payload.text);
      // 发出事件
      todoStore.emit(ADD_TODO);
      break;
    default:
      return true;
  }
  return true;
});

export default todoStore;
