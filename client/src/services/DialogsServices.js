import api from "../http";

export default class DialogsServices {

  static async getAllDialogs(id) {
      return api.main_api.post('/getalldialogs', { id })
  }
 

}
