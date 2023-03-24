import ActionTypes from '../constants';

const initialState = {
  room_active: null,
};

export default function rooms(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.ROOMS_SET_ACTIVE:
      return {
        ...state,
        room_active: payload,
      }; 
    default:
      return state;
  }
}