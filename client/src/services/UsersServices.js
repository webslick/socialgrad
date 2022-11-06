import api from "../http";

export default class UsersServices {

  static fetchUsers() {
      return api.main_api.get('/users')
  }

}
