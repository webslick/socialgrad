 
const DB = require('../db/index'); 
const AdminDto = require('../dtos/admin-dto');
const ApiErr = require('../exeptions/api-error');
const jwt = require('jsonwebtoken');
const config = require('config');
const keys_access = config.get('Server.KEYS.JWT_SECRET_KEY_ACCESS');
const keys_refresh = config.get('Server.KEYS.JWT_SECRET_KEY_REFRESH');  
const bcrypt = require('bcrypt');
const serviceFunction = require('../service_functions/index')
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
 
class AdminService {
  async listUsers() {
 
    try {
      const users_list = await DB.searchInTables('users_list'); 

      if(!users_list) {
        throw ApiErr.BadRequest(`Диалоги не найдены: `);
      } else {  
        const usersDtos = [];   
        users_list.map(item => {
          usersDtos.push(new AdminDto(item))
        } )   
        return { 
          allusers: usersDtos 
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
    login,
    password,  
    refreshToken,  
    isActivated,  
    balance, 	 
    startSub,
    active,   
    name,  
    lastname,  
    birthdate,
    gender, 
    email,  
    telephone,  
    avatar,  
    last_seen,
    index,  
    number, 
    floors, 
    entrancesCount,  
    flatsCount,  
    region, 
    city, 
    district,
    street,
    role  
   }) {
    try {
      const dialogAdd = await DB.addInTables('user',{ 
        login,
        password,  
        refreshToken,  
        isActivated,  
        balance, 	 
        startSub,
        active,   
        name,  
        lastname,  
        birthdate,
        gender, 
        email,  
        telephone,  
        avatar,  
        last_seen,
        index,  
        number, 
        floors, 
        entrancesCount,  
        flatsCount,  
        region, 
        city, 
        district,
        street,
        role  
       });  
 
      if(!dialogAdd) {
        throw ApiErr.BadRequest(`Пользователь не создан: `);
      } else {   
        return { 
          dialog_add: dialogAdd 
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

  generateToken(payload) { 
    const accessToken = jwt.sign(payload, keys_access,{ expiresIn: '15s' })
    const refreshToken = jwt.sign(payload, keys_refresh,{ expiresIn: '30d' })
    return {
      accessToken,
      refreshToken
    }
  }  

  validateAccesToken(token) {
    try {
      const userData = jwt.verify(token,keys_access);
      return userData;
    } catch(e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token,keys_refresh);
      return userData;
    } catch(e) {
      return null;
    }
  }
 
  async saveToken(userDto) {  
  
    const tokenData = await DB.searchInTables('tokens',{ id: userDto.id });
    const tokens = this.generateToken({ login: userDto.login, userId: userDto.id, role: userDto.role }) 

    if(tokenData) {
      await DB.updateModelTables(tokenData,{ refreshToken: tokens.refreshToken });  
    } else {
      await DB.addInTables('token',{ userId: userDto.id, refreshToken: tokens.refreshToken });
    }  
 
    return { user: userDto }
  }

  async removeToken(refreshToken) {
    const tokenData = await DB.searchInTables('tokens',{ refreshToken });
    await DB.removeInTables(tokenData,refreshToken);
  }

  async registration (login, password , name, lastname, gender, email, region, city, district, street, number ) {
    try {
     
      const condidate = await DB.searchInTables('users_list_registration', login);
    
      if(condidate) {
        throw ApiErr.BadRequest(`Пользователь с логином ${login} уже существует`);
      } else {
        const hashPassword = await bcrypt.hash(password, random(1,10));   
        const user = await DB.addInTables('user',{  
          login,
          password: hashPassword,   
          isActivated: true,   
          balance: 0,  
          startSub:"2023-03-12T16:13:57.861Z",
          active: false, 
          name,  
          lastname,  
          birthdate: "1991-02-17T16:13:57.861Z",
          role: "user", 
          gender, 
          email,  
          telephone: "+7-999-999-00-00",  
          avatar: "https://img1.goodfon.ru/original/1366x768/1/d6/leopard-usy-vnimanie.jpg",  
          region,
          city,
          district,
          street,
          number,
          index: 1231231,
          floors: 5,
          entrancesCount: 2,
          flatsCount: 122 
        });  
 
        const tokens = this.generateToken({ login: serviceFunction.removeEmpty(serviceFunction.getObjkey(user[0],'AuthInfos',false), 'AuthInfos').login, userId: serviceFunction.removeEmpty(user[0], 'Users').id, role: user[1].role }) 
     
        await DB.updateModelTables(serviceFunction.getObjkey(user[0],'AuthInfos',false),{ refreshToken: tokens.refreshToken, accessToken: tokens.accessToken }); 
   
        return {
          user: { login: serviceFunction.removeEmpty(serviceFunction.getObjkey(user[0],'AuthInfos',false), 'AuthInfos').login },
          success: true
        }   
      //  const result = {
      //   ...serviceFunction.removeEmpty(user[0], 'User'),    
      //   ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user[0],'AuthInfos',false), 'AuthInfos'), 
      //   role: user[1].role
      //  }
 
      //   const data = await this.saveToken(result);  
      //   return {
      //     ...data
      //   }   
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }
  }

}

module.exports = new AdminService();
