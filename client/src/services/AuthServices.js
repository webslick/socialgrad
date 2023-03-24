import api from "../http";

export default class AuthServices {

  static async login(login,password) {
      return api.main_api.post('/login', { login, password })
  }

  static async registration(login, password, name, lastname, gender, email, region, city, district, street, number,) { 
      return api.main_api.post('/registration', { login, password, name, lastname, gender, email, region, city, district, street, number, })
  }

  static async logout() {
      return api.main_api.post('/logout')
  }

}
