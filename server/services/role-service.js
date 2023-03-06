const DB = require('../db/index'); 
const UserDto = require('../dtos/user-dto');
const RoleDto = require('../dtos/role-dto');
const ApiErr = require('../exeptions/api-error');  
 
class RoleService {
 
  async list() {
    try {
      const role_list = await DB.searchInTables('role_list'); 
 
      if(!role_list) {
        throw ApiErr.BadRequest(`Пользователи не найдены необходимо: `);
      } else {  
        const usersDtos = [];   
        role_list.map(item => {
          usersDtos.push(new RoleDto(item))
        } )   
        return { 
          allusers: usersDtos 
        }
      }
    } catch(e) {
      throw ApiErr.BadRequest(e.message)
    }

  }

  async getByName(name) {
    try {
      const role_name = await DB.searchInTables('role_name', name);  
      // console.log(role_name)
      if(!role_name) {
        throw ApiErr.BadRequest(`Пользователь с ролью не найден: `);
      } else {    
        const usersDtos = [];   
        role_name.map(item => { 
          usersDtos.push(new RoleDto(item))
        } )   
        return { 
          role_by_user: usersDtos 
        }
      }
    } catch(e) {
      throw ApiErr.BadRequest(e.message)
    }

  }
  
  async add({ role_name }) {
    try {
      const roleAdd = await DB.addInTables('roles',{ role_name });  
      if(!roleAdd) {
        throw ApiErr.BadRequest(`Пользователь не создан: `);
      } else {   
        return { 
          role_add: roleAdd 
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

module.exports = new RoleService();
