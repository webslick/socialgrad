import ActionTypes from '../constants';

const initialState = {
  mobile: false,
  socket: {},
  work_data: false
};

export default function app(state = initialState, { type, payload }) {
 
  switch (type) {
    case ActionTypes.APP_MOBILE:
      return {
        ...state,
        mobile: payload
      };
       
    case ActionTypes.APP_SOCKET:
      return {
        ...state,
        socket: payload
      };
       
    case ActionTypes.APP_WORK_DATA:
      return {
        ...state,
        work_data: payload
      };
       
    default:
      return state;
  }
}