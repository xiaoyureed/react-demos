import actionType from "../action/actionType";

/**
 * 逻辑处理, accept old [state] & action, return new [state]
 *
 * @param {Object} prevState
 * @param {Object} action
 */
const valueReducer = (prevState, action) => {
  if (action.type === actionType.CHANGE) {
    return {
      md: action.payload.value,
      html: prevState.html,
    };
  }
  if (action.type === actionType.CLICK) {
    return {
      md: prevState.value,
      html: action.payload.html,
    };
  }
  return prevState;
};

export default valueReducer;
