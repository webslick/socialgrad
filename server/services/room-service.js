 
const DB = require('../db/index');  
const RoomDto = require('../dtos/room-dto');
const ApiErr = require('../exeptions/api-error');
const serviceFunction = require('../service_functions/index')

class RoomService {
 
  async list() {
    try {
      const rooms_list = await DB.searchInTables('rooms_list'); 

      if(!rooms_list) {
        throw ApiErr.BadRequest(`Комнаты не найдены: `);
      } else {  

        let resultat = []
        let RoomType = { RoomType: {} }; 
        let Room = {};
        let resultDto = {};  

        rooms_list.map((item_room,key) => {   
 
          Room = {};  
          if(serviceFunction.getObjkey(item_room,'RoomTypes',false)) {  
             
            RoomType.RoomType = serviceFunction.removeEmpty(new RoomDto(serviceFunction.getObjkey(item_room,'RoomTypes',false)));  
            
            resultDto = Object.assign(Room, RoomType);    

            resultat.push(resultDto); 
          }   
        });  
 
        return { 
          allrooms: resultat 
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }

  async getById(id) {
    try {
      const dialogId = await DB.searchInTables('dialogId', id); 
      let dialogs = [];
      if(!dialogId) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {   
        dialogId.map((item) => {
          dialogs.push(new DialogDto(...dialogId))
        })
        return { 
          userId: Number(id),
          dialogs,
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    } 
  }
  
  async add({
    typeName,
    roomName,
    creatorId 
  }) {
    try {
      const roomAdd = await DB.addInTables('room', {
        typeName,
        roomName,
        creatorId 
      });  
 
      if(!roomAdd) {
        throw ApiErr.BadRequest(`Пользователь не создан: `);
      } else {   
        return { 
          room_add: roomAdd 
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async update(dialogId, obj) {
    try {
      // const {
        // collaborator, 
        // lastMessage,
        // participantes,
        // status,
        // users,
        // senderId,
        // userId,
        // numSender,
        // numRecipient 
      // } = obj 
      const dialog_update_id = await DB.searchInTables('dialogId', dialogId); 
      if(!dialog_update_id) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {    
        const dialogUpdate = await DB.updateModelTables(dialog_update_id[0], obj);
        if(!dialogUpdate) {
          throw ApiErr.BadRequest(`Ошибка обновления таблицы:`);
        } else {    
          return { 
            dialog: new DialogDto(dialogUpdate) 
          }
        } 
      }    
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
 
  async delete(dialogId) {  
    try { 
      const dialog_delete_id = await DB.searchInTables('dialogId', dialogId);  
      if(!dialog_delete_id) {
        throw ApiErr.BadRequest(`Ошибка удаления диалога не существует: `);
      } else {    
        const dialogDelete = await DB.removeInTables(dialog_delete_id[0],dialogId);
        if(!dialogDelete) {
          throw ApiErr.BadRequest(`Ошибка удаления таблицы:`);
        } else {    
          return { 
            success: true,
            message: `Диалог успешно удален!` 
          }
        } 
      }  
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }  
  } 
}

module.exports = new RoomService();
