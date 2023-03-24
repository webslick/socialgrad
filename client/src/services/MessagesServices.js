import api from "../http";

export default class DialogsServices {

  static async getMessagesRoom(room) {
      return api.main_api.get(`/get_messages_room/${room}`)
  }

  static async createRoomMessages(obj) {
      return api.main_api.post(`/create_message_room`, obj)
  }
  
}
