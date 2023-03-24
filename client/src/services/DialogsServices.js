import api from "../http";

export default class DialogsServices {

  static async getDialogsRoom(userId) {
      return api.main_api.get(`/get_dialogs_room/${userId}`)
  }

  static async createDialog(obj) {
      return api.main_api.post(`/create_dialog`, obj)
  }
 

}
