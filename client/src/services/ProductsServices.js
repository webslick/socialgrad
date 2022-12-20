import api from "../http";

export default class AuthServices {

  static async getProducts(categories) {
      return api.main_api.post('/categories', { categories })
  }
  
}
