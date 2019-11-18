import actionType from "./actionType";

const action = {
  changeContentAction: content => ({
    type: actionType.CHANGE,
    payload: {
      value: content,
    },
  }),
  clickButtonAction: html => ({
    type: actionType.CLICK,
    payload: {
      html,
    },
  }),
};

export default action;
