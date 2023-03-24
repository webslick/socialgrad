import ActionTypes from '../constants';

const initialState = {
  dialog_active: null,
};

export default function dialogs(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.DIALOGS_SET_ACTIVE:
      return {
        ...state,
        dialog_active: payload,
      }; 
    default:
      return state;
  }
}