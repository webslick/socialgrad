 
const DB = require('../db/index'); 
const UserDto = require('../dtos/user-dto');
const ApiErr = require('../exeptions/api-error');
const path = require('path');
 
class MessagesService {
 
  async list() {
    try {
      const users_list = await DB.searchInTables('users_list');  
      if(!users_list) {
        throw ApiErr.BadRequest(`Пользователи не найдены необходимо: `);
      } else {  
        const usersDtos = [];   
        users_list.map(item => { 
          usersDtos.push(new UserDto(item))
        } )   
        return { 
          allusers: usersDtos 
        }
      }
    } catch(e) {
      throw ApiErr.BadRequest(e.message)
    }

  }

  async getById(id) {
    try {
      const user_id = await DB.searchInTables('user_id', id);  
      if(!user_id) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {    
        return { 
          user_id: new UserDto(...user_id) 
        }
      }
    } catch(e) {
      throw ApiErr.BadRequest(e.message)
    }

  }
  
  async add({ username, password }) {
    try {
      const userAdd = await DB.addInTables('user',{ username, password });  
      if(!userAdd) {
        throw ApiErr.BadRequest(`Пользователь не создан: `);
      } else {   
        return { 
          user_add: userAdd 
        }
      }
    } catch(e) {
      throw ApiErr.BadRequest(e.message)
    }

  }
  
  async update(id, obj) {
    try {
      const user_update_id = await DB.searchInTables('user_id', id);  
      console.log(id, obj)
      console.log(user_update_id.update)
      if(!user_update_id) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {     
        const userUpdate = await user_update_id.upsert({ id, obj });
        // const userUpdate = await DB.updateModelTables(user_update_id, obj);
        if(!userUpdate) {
          throw ApiErr.BadRequest(`Ошибка обновления таблицы:`);
        } else {    
          return { 
            user_id: new UserDto(...userUpdate) 
          }
        } 
      }  
    } catch(e) {
      throw ApiErr.BadRequest(e.message)
    }

  }
 
  async delete(id,obj) {  
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

module.exports = new MessagesService();
