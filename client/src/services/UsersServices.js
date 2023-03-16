import api from "../http";

export default class UsersServices {

  static getUsersFromHome(city, street, number) {
      return api.main_api.post('/users/home',{city, street, number})
  }

}
