import ActionTypes from '../constants';

const initialState = {
  dialogs: [],
};

export default function dialogs(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.DIALOGS_SET_ITEMS:
      return {
        ...state,
        dialogs: payload,
      }; 
    default:
      return state;
  }
}