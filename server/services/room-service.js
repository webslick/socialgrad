 
const DB = require('../db/index');  
const RoomDto = require('../dtos/room-dto');
const DialogDto = require('../dtos/dialog-dto');
const MessageDto = require('../dtos/messages-dto');
const ApiErr = require('../exeptions/api-error');
const serviceFunction = require('../service_functions/index');
const socket = require('../socket'); 

class RoomService {
 
  async listDiologsRoom(userId) {
    try {
      const rooms_list = await DB.searchInTables('rooms_list',userId); 

      if(!rooms_list) {
        throw ApiErr.BadRequest(`Комнаты не найдены: `);
      } else {   
        let join_rooms = []    
        rooms_list.map((item_room,key) => {      
          join_rooms.push({ 
            ...serviceFunction.removeEmpty(item_room,'RoomTypes'), 
            dialogs: serviceFunction.getObjkey(item_room,'Dialogs').map(item_dialogs => {
              return { 
                ...serviceFunction.removeEmpty(item_dialogs, 'Dialogs'),
                // messages: serviceFunction.getObjkey(item_dialogs,'Messages').map(item_message => {
                //   return serviceFunction.removeEmpty(item_message, 'Messages');
                // }) 
              } 
            })  
          })     
        });   
        return { 
          join_rooms: join_rooms 
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
  
  async addRoom({  
    id, 
    city, 
    street, 
    number, 
    roomName, 
    typeName, 
    creatorId 
  }) {
    try {

   
    
      
      const users_home_id = await DB.searchInTables('users_home_id', {
        city, 
        street, 
        number, 
      })

      if(!users_home_id) {
        throw ApiErr.BadRequest(`Такого дома не существует`);
      }

      const userids = []
      users_home_id.map(model => { userids.push({ id: model.id }) })
     
      console.log(userids);
      const roomAdd = await DB.addInTables('room', {  
        id, 
        homeIds: userids,
        typeName, 
        roomName,
        creatorId 
      });  
 
      if(!roomAdd) {
        throw ApiErr.BadRequest(`Комната не создана: `);
      } else {    
        return { 
          roomAdd: roomAdd
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async joinRoom({ 
    userId, 
    roomId 
  }) {
    try {
      const joinRoom = await DB.addInTables('joinroom', { 
        userId, 
        roomId 
      });   
      if(!joinRoom) {
        throw ApiErr.BadRequest(`Комната не создана: `);
      } else {    
        return { 
          joinRoom: joinRoom
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async addDialog({  
    userId, 
    roomId, 
    collaborator,  
    lastMessage, 
    status
  }) {
    try {
      const dialogAdd = await DB.addInTables('dialog', {  
        userId, 
        roomId, 
        collaborator,  
        lastMessage, 
        status
      });  
 
      if(!dialogAdd) {
        throw ApiErr.BadRequest(`Диалог не создан: `);
      } else {    
        return { 
          dialogAdd: new DialogDto(dialogAdd)
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async addMessageRoom({ 
    userId, 
    dialogId, 
    roomId, 
    text, 
    type, 
    filename, 
    readed  
  }) {
    try { 
      const messagesAdd = await DB.addInTables('messages', { 
        userId, 
        dialogId, 
        roomId, 
        text, 
        type, 
        filename, 
        readed  
      });  
 
      if(!messagesAdd) {
        throw ApiErr.BadRequest(`Сообщение не создано: `);
      } else {  
 
        return { 
          ...new MessageDto(messagesAdd)
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async getMessageRoom( roomId ) {
    try {  
      const messages_search = await DB.searchInTables('messages', { roomId });  
      
      let messagesModelArr = [];
      let messages = [];

      messages_search.map(item => {
        messagesModelArr.push(...serviceFunction.getObjkey(item,'Messages'))
      })
 
      messagesModelArr.map(item => { 
        messages.push({
            user: {id: serviceFunction.removeEmpty(item,'Messages').userId, fullname:'' },
            text: serviceFunction.removeEmpty(item,'Messages').text, 
            date: new Date(),
            userId: serviceFunction.removeEmpty(item,'Messages').userId,
            avatar:'',
            isMe: false,
            readed: serviceFunction.removeEmpty(item,'Messages').readed,
            attachments: [],
            isTyping: false,
            onRemoveMessage: ()=>{console.log('delete messages')},
            setPreviewImage: ()=>{console.log('prewiew messages')},
            audio: 'url',
            roomId: serviceFunction.removeEmpty(item,'Messages').roomId,
            createdAt: serviceFunction.removeEmpty(item,'Messages').createdAt
        });
      })
  

      if(!messages_search) {
        throw ApiErr.BadRequest(`Сообщение не создано: `);
      } else {    
        return { 
          messages
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
 
  async liaveRoom(obj) {  
    try { 
      const {
        roomId, userId
      } = obj

 
      const room_liave = await DB.searchInTables('roomlive', userId);  

      if(!room_liave) {
        throw ApiErr.BadRequest(`Ошибка удаления комнаты не существует: `);
      } else { 

        for (let i in room_liave) {
          if (Object.hasOwnProperty.call(room_liave, i)) {
            const element = room_liave[i];
            if(element.roomId === roomId) {
              const roomIdDelete = await DB.removeInTables(element,roomId); 
              if(!roomIdDelete) {
                throw ApiErr.BadRequest(`Ошибка удаления таблицы:`);
              } else {    
                return { 
                  success: true,
                  message: `комната покинута!` 
                }
              } 
            }
          }
        }
 
      }  
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }  
  } 
 
  async deleteRoom(obj) {  
    try { 
      const {
        roomId
      } = obj

 
      const room_deleted = await DB.searchInTables('roomdelete', roomId);  

      if(!room_deleted) {
        throw ApiErr.BadRequest(`Ошибка удаления комнаты не существует: `);
      } else { 
 
        // for (let i in room_liave) {
        //   if (Object.hasOwnProperty.call(room_liave, i)) {
        //     const element = room_liave[i];
        //     if(element.roomId === roomId) {
        //       const roomIdDelete = await DB.removeInTables(element,roomId); 
        //       if(!roomIdDelete) {
        //         throw ApiErr.BadRequest(`Ошибка удаления таблицы:`);
        //       } else {    
        //         return { 
        //           success: true,
        //           message: `комната покинута!` 
        //         }
        //       } 
        //     }
        //   }
        // }
 
      }  
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }  
  } 
}

module.exports = new RoomService();
