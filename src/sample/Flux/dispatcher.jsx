import {Dispatcher} from 'flux';

/**
 * customized dispatcher, 整个 app 中只有一个.
 */
class AppDispatcher extends Dispatcher {
  handleAction({type, payload}) {
    this.dispatch({
      type,
      payload,
    });
  }
}

export default new AppDispatcher();
