import ActionTypes from '../constants';

const initialState = {
  popup_visible: false,
  enter: true
};

export default function popup_login(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.POPUP_LOGIN_VISIBLE:
      return {
        ...state,
        popup_visible: payload,
      }; 
    case ActionTypes.POPUP_LOGIN_ENTER:
      return {
        ...state,
        enter: payload,
      }; 
    default:
      return state;
  }
}