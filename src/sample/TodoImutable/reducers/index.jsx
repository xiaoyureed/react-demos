import { combineReducers } from 'redux';
import uiReducers from './uiReducer';// import routes from './routes';
import todo from './todoReducer';// import routes from './routes';

const rootReducer = combineReducers({
  // // combineReducers 可以帮助维护多个 state 进 store 中
  //     //这样 Store 中就有 两个节点了
  todo,
  // uiReducers,
});

export default rootReducer;
