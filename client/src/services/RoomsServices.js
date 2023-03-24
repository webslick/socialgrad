import api from "../http";

export default class RoomsServices { 

  static async createRoom({ id, typeName }) { 
    return api.main_api.post('/create_room', { id, typeName })
  } 

  static async deleteRoom({ roomId }) { 
    return api.main_api.post('/delete_room', { roomId })
  } 

}

 