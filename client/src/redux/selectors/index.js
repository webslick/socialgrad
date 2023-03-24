export const users = {
  user:(state) => state.users.user,
  isAuth:(state) => state.users.isAuth,
}

export const popup_login = {
  popup_visible:(state) => state.popup_login.popup_visible,
  enter:(state) => state.popup_login.enter,
}
 
export const app = {
  mobile: (state) => state.app.mobile,
  socket: (state) => state.app.socket,
  work_data: (state) => state.app.work_data
}
 
export const pages = {
  page:(state) => state.pages.page,
  subpage:(state) => state.pages.subpage, 
  active:(state) => state.pages.active,
}
 
export const loader = {
  loading:(state) => state.loader.loading,
}
 
export const dialogs = {
  dialog_active:(state) => state.dialogs.dialog_active,
}
 
export const rooms = {
  room_active:(state) => state.rooms.room_active,
}
 