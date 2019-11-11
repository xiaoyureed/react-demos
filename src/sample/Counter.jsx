import React from "react";
import { bindActionCreators, createStore } from "redux";
import { Provider, connect } from "react-redux";

// Store initial state
const initialState = { count: 0 };

// reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS_ONE":
      return { count: state.count + 1 };
    case "MINUS_ONE":
      return { count: state.count - 1 };
    case "CUSTOM_COUNT":
      return { count: state.count + action.payload.count };
    default:
      break;
  }
  return state;
};

// Create store
const store = createStore(counter);

// Action creator
function plusOne() {
  // action
  return { type: "PLUS_ONE" };
}

function minusOne() {
  return { type: "MINUS_ONE" };
}

export class Counter extends React.Component {
  render() {
    // 在这里通过 props 可以拿到 state 中我们关心的数据 和 actions
    const { count, plusOne, minusOne } = this.props;
    return (
      <div className="counter">
        <p>redux + react-redux 合用 (主要用到了后者的 Provider 和 connect)</p>
        <button onClick={minusOne}>-</button>
        <span style={{ display: "inline-block", margin: "0 10px" }}>
          {count}
        </span>
        <button onClick={plusOne}>+</button>
      </div>
    );
  }
}

/**
 * bind state data of which we take care to props
 * 绑定state中我们关心的数据到 props (不能整个 store 绑定
 * 到 props, 因为 state 中和当前组件无关的数据更新无需出发组件重绘)
 * 
 * 在组件中可以通过 props 拿到 这里绑定的数据
 * 
 * @param {object} state store.getState()
 */
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

/**
 * 绑定 action 到 props
 * @param dispatch 
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ plusOne, minusOne }, dispatch);
}

// 连接
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default class CounterSample extends React.Component {
  render() {
    return (
      // 根节点通过 Provider 提供 store, 子组件就可以随时访问 store 中的数据
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    );
  }
}
