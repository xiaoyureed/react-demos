import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import { createLogger } from 'redux-logger';
import valueReducer from "./reducers/valueReducer";

const initialState = {
  md: '在这里输入 *markdown* ...',
  html: '',
};

const store = createStore(
    // reducer or combined reducers
    valueReducer,
    // pre loaded state
    initialState,
    // middleware
    applyMiddleware(logger),
);

export default store;
