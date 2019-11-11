import {Dispatcher} from 'flux';

function bindDispatcher(action) {
  let dispatcher = new Dispatcher();
  dispatcher.dispatch({
    type: action.type,
    payload: action.payload,
  });
}

export {bindDispatcher};
