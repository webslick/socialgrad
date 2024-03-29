import ActionTypes from '../constants';

const initialState = {
  user: {},
  users_home: [],
  isAuth: false,
};

export default function users(state = initialState, {type,payload}) {
  switch (type) {
    case ActionTypes.USERS_PUT_USER:
      return {
        ...state,
        user: payload,
      };
    case ActionTypes.USERS_PUT_USERS_HOME:
      return {
        ...state,
        users_home: payload,
      };
    case ActionTypes.USERS_PUT_ISAUTH:
      return {
        ...state,
        isAuth: payload,
      };
    default:
      return state;
  }
}