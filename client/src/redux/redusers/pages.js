import ActionTypes from '../constants';

const initialState = {
  page: 'main',
  subpage: 'myhome',
  header_visible: true,
  active: false
};

export default function pages(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.APP_PAGES_SCREEN:
      return {
        ...state,
        page: payload,
      };
    case ActionTypes.APP_SUBPAGES_SCREEN:
      return {
        ...state,
        subpage: payload,
      };
    case ActionTypes.APP_HEADER_HIDDEN_CHANGE:
      return {
        ...state,
        header_visible: payload,
      };
    case ActionTypes.APP_HEADER_ACTIVE_CHANGE:
      return {
        ...state,
        active: payload,
      };
    default:
      return state;
  }
}