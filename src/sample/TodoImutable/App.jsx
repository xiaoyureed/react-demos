import React from "react";
import {Provider} from "react-redux";
import store from "./store";
import Main from "./comps/ui/Main";

const TodoImutable = () => (
    <Provider store={store}>
      {/* Stateless Component，负责所有 View 的进入点 */}
      <Main />
    </Provider>
);

export default TodoImutable;
