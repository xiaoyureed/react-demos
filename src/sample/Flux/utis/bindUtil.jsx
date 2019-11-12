function bindDispatcherAction(action, dispatcher) {
  function bind() {
    dispatcher.handleAction({
      type: action.type,
      payload: action.payload,
    });
  }
  return bind;
}

export {bindDispatcherAction};
