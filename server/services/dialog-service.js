 
const DB = require('../db/index'); 
const DialogDto = require('../dtos/dialog-dto');
const ApiErr = require('../exeptions/api-error');
 
class DialogService {
 
  async list() {
    try {
      const dialog_list = await DB.searchInTables('dialog_list'); 

      if(!dialog_list) {
        throw ApiErr.BadRequest(`Диалоги не найдены: `);
      } else {  
        const dialogsDtos = [];   
        dialog_list.map(item => {
          dialogsDtos.push(new DialogDto(item))
        } )   
        return { 
          alldialogs: dialogsDtos 
        }
      }
    } catch(e) {
      throw ApiErr.BadRequest(e.message)
    }

  }

  async getById(id) {
    try {
      const dialog_id = await DB.searchInTables('dialog_id', id);  
      if(!dialog_id) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {    
        return { 
          author: new DialogDto(...dialog_id) 
        }
      }
    } catch(e) {
      throw ApiErr.BadRequest(e.message)
    }

  }
  
  async add({ 
    dialog_id,
    collaborator,
    creator,
    lastMessage
   }) {
    try {
      const dialogAdd = await DB.addInTables('dialog',{ 
        dialog_id,
        collaborator,
        creator,
        lastMessage
       });  
      if(!dialogAdd) {
        throw ApiErr.BadRequest(`Пользователь не создан: `);
      } else {   
        return { 
          dialog_add: dialogAdd 
        }
      }
    } catch(e) {
      throw ApiErr.BadRequest(e.message)
    }

  }
  
  async update(id, obj) {
    try {
      const user_update_id = await DB.searchInTables('user_id', id);  
      if(!user_update_id) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {    
        const userUpdate = await DB.updateModelTables(user_update_id, obj);
        // if(!userUpdate) {
        //   throw ApiErr.BadRequest(`Ошибка обновления таблицы:`);
        // } else {    
        //   return { 
        //     user_id: new UserDto(...userUpdate) 
        //   }
        // } 
      }  
    } catch(e) {
      throw ApiErr.BadRequest(e.message)
    }

  }
 
  async delete(id,item,obj) {  
    try {
      const user_delete_id = await DB.searchInTables('user_id', id);  
      if(!user_delete_id) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {    
        const usersDelete = await DB.removeInTables(user_delete_id,item,obj);
        if(!usersDelete) {
          throw ApiErr.BadRequest(`Ошибка удаления таблицы:`);
        } else {    
          return { 
            user_id: new UserDto(...usersDelete) 
          }
        } 
      }  
    } catch(e) {
      throw ApiErr.BadRequest(e.message)
    }  
  } 
}

module.exports = new DialogService();
