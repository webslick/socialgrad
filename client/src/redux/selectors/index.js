export const users = {
  user:(state) => state.users.user,
  isAuth:(state) => state.users.isAuth,
}

export const popup_login = {
  popup_visible:(state) => state.popup_login.popup_visible,
  enter:(state) => state.popup_login.enter,
}
 
export const app = {
  mobile: (state) => state.app.mobile
}
 
export const pages = {
  page:(state) => state.pages.page,
  subpage:(state) => state.pages.subpage, 
  active:(state) => state.pages.active,
}
 
export const loader = {
  loading:(state) => state.loader.loading,
}
 