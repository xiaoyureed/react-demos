import React from "react";
import {
  createStore,
  combineReducers,
  bindActionCreators
} from "redux";

function run() {
  // Store initial state
  const initialState = { count: 0 };

  // reducer
  // 代表 state 的处理逻辑
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "PLUS_ONE":
        return { count: state.count + 1 };
      case "MINUS_ONE":
        return { count: state.count - 1 };
      case "CUSTOM_COUNT":
        return {
          count: state.count + action.payload.count
        };
      default:
        break;
    }
    return state;
  };

  const todosReducer = (state = {}) => state; // 待添加到 Store 中的新节点

  // Create store
  const store = createStore(
    // combineReducers 可以帮助维护多个 state 进 store 中
    //这样 Store 中就有 两个节点了
    combineReducers({
      todos: todosReducer,
      counter: counterReducer
    })
  );

  // Action creator
  function plusOne() {
    // action
    return { type: "PLUS_ONE" };
  }

  function minusOne() {
    return { type: "MINUS_ONE" };
  }

  function customCount(count) {
    return { type: "CUSTOM_COUNT", payload: { count } };
  }

  // bindActionCreators 是 redux 提供的工具函数, 将 dispatcher 绑定到 action 内部
  // 省掉了手动 dispatch 这直接调用action 即可
  const plusOneWithDispatcher = bindActionCreators(plusOne, store.dispatch);

  store.subscribe(() => console.log(store.getState()));

  // store.dispatch(plusOne());
  plusOneWithDispatcher();

  store.dispatch(minusOne());
  store.dispatch(customCount(5));
}
export default () => (
  <div>
    <p>纯 redux, 没有用 connect</p>
    <button onClick={run}>Run</button>
  </div>
);
