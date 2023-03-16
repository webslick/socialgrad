 
const DB = require('../db/index'); 
const UserDto = require('../dtos/user-dto');
const ProfileDto = require('../dtos/profile-dto');
const ApiErr = require('../exeptions/api-error');
const serviceFunction = require('../service_functions/index')
class UserService {
  
  // update(req, res) {
  //   return Profile
  //     .findById(req.params.id, {
  //       include: [{
  //         model: User,
  //         as: 'user'
  //       }],
  //     })
  //     .then(profile => {
  //       if (!profile) {
  //         return res.status(404).send({
  //           message: 'Profile Not Found',
  //         });
  //       }
  //       return profile
  //         .update({
  //           user_id: req.body.user_id || classroom.user_id,
  //           fullname: req.body.fullname || classroom.fullname,
  //           birthdate: req.body.birthdate || classroom.birthdate,
  //           gender: req.body.gender || classroom.gender,
  //           position: req.body.position || classroom.position,
  //         })
  //         .then(() => res.status(200).send(profile))
  //         .catch((error) => res.status(400).send(error));
  //     })
  //     .catch((error) => res.status(400).send(error));
  // },

  // delete(req, res) {
  //   return Profile
  //     .findById(req.params.id)
  //     .then(profile => {
  //       if (!profile) {
  //         return res.status(400).send({
  //           message: 'Profile Not Found',
  //         });
  //       }
  //       return profile
  //         .destroy()
  //         .then(() => res.status(204).send())
  //         .catch((error) => res.status(400).send(error));
  //     })
  //     .catch((error) => res.status(400).send(error));
  // },
 
  async list() {
    try {
      const profile_list = await DB.searchInTables('profile_list'); 
 
      if(!profile_list) {
        throw ApiErr.BadRequest(`Пользователи не найдены необходимо: `);
      } else {  
        const profilesDtos = [];   
        profile_list.map(item => {
          profilesDtos.push(new ProfileDto(item))
        } )   
        return { 
          allprofiles: profilesDtos 
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }

  async getById(id) {
    try {
      const profile_id = await DB.searchInTables('profile_id', id);  
      console.log(profile_id)
      if(!profile_id) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {    
        return { 
          profile_id: new ProfileDto(...profile_id) 
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async add({   
    role_name
  }) {
    try {
      const profileAdd = await DB.addInTables('profile', { 
        role_name
       });  
      if(!profileAdd) {
        throw ApiErr.BadRequest(`Профиль не создан: `);
      } else {   
        return { 
          profile_add: profileAdd 
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
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
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
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
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }  
  }
  
}

module.exports = new UserService();
