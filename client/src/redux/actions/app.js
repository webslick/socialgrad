import ActionTypes from '../constants';

export function loader_switch(state) {
  return {
    type: ActionTypes.APP_LOADING,
    payload: state
  }
}
 
export function setMobileMod(mode) {
  return {
    type: ActionTypes.APP_MOBILE,
    payload: mode
  }
}

export function change_page(page) { 
  return {
    type: ActionTypes.APP_PAGES_SCREEN,
    payload: page
  }
}

export function change_subpage(subpage) { 
  return {
    type: ActionTypes.APP_SUBPAGES_SCREEN,
    payload: subpage
  }
}
  