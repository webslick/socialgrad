 
const DB = require('../db/index'); 
const db = require('../db/models/index')
const multer = require('multer');
const UserDto = require('../dtos/user-dto');
const ApiErr = require('../exeptions/api-error');
const path = require('path');

const config = require('config'); 

const filePath = {
  imageFile: './uploads/images/',
  audioFile: './uploads/audio/'
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../' + filePath[file.fieldname]))
  },
  filename: function (req, file, cb) {
      let extention = '';
      switch (file.mimetype) {
        case 'image/jpeg':
         extention = 'upload_file.jpeg'
          break;
        case 'image/jpg':
         extention = 'upload_file.jpg'
          break;
        case 'image/png':
         extention = 'upload_file.png'
          break;
        case 'audio/mpeg':
         extention = 'upload_file.mp3'
          break;
        default:
          break;
      }
      cb(null, (extention))
  }
})

const uploader = multer({storage: storage}).any();

// const Remove = function (path) {
//   try {
//       fs.unlinkSync(path);
//       console.log('successfully deleted' + path);
//   } catch (err) {
//       console.log(err);
//   }
// }
 
// const random = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

class UserService {

  // async registration (email, password) {
  //   try {
  //     const condidate = await DB.searchInTables('users',{ email });
  //     if(condidate) {
  //       throw ApiErr.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
  //     } else {
  //       const hashPassword = await bcrypt.hash(password, random(1,10));
  //       const activationLink = uuid.v4();
  //       const user = await DB.addInTables('users',{ email, password : hashPassword, activationLink,isActivated: false,role: "user" });
  //       const userDto = new UserDto(user);
  //       const tokens = tokenService.generateToken({...userDto});
  //       await tokenService.saveToken(userDto.userId,tokens.refreshToken);
  //       // mailService.sendAcnivationMail(email,`${url_api}/api/activate/${activationLink}`);
  //       const response = await DB.addInTables("vk",{ user_id: userDto.userId, accounts:[] });
  //       return {
  //         ...tokens,
  //         user: userDto
  //       }
  //     }
  //   } catch(e) {
  //     throw ApiErr.BadRequest(e.message)
  //   }
  // }

  // async login(email, password) {
  //   try {
  //     const condidate = await DB.searchInTables('users',{ email }); 
  //     if(!condidate) {
  //       throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
  //     } else {
  //       const isPassEquals = await bcrypt.compare(password,condidate.password);
  //       if(!isPassEquals) {
  //         throw ApiErr.BadRequest(`Неверный пароль повторите ввод: `);
  //       }
  //       const userDto = new UserDto(condidate);
  //       const tokens = tokenService.generateToken({...userDto});
  //       await tokenService.saveToken(userDto.userId,tokens.refreshToken);
  //       return {
  //         ...tokens,
  //         user: userDto
  //       }
  //     }
  //   } catch(e) {
  //     throw ApiErr.BadRequest(e.message)
  //   }

  // }

  // async activate (activationLink) {
  //   const user = await DB.searchInTables('users',{ activationLink });
  //   if(!user) {
  //     throw ApiErr.BadRequest('Ссылка устарела, зарегистрируйтесь заново');
  //   }
  //   await DB.updateModelTables(user,{ isActivated: true });
  // }

  // async logout(refreshToken) {
  //   const token = await tokenService.removeToken(refreshToken);
  //   return token;
  // }

  // async refresh(refreshToken) {
  //   if(!refreshToken) {
  //     throw ApiErr.UnautorizaedError();
  //   }
  //   const userData = tokenService.validateRefreshToken(refreshToken);
  //   const tokenFromDB = await DB.searchInTables('tokens',{ refreshToken });
  //   if(!userData || !tokenFromDB) {
  //     throw ApiErr.UnautorizaedError();
  //   }
  //   const user = await DB.searchInTables('users', userData.id );
  //   const userDto = new UserDto(user);
  //   const tokens = tokenService.generateToken({...userDto});
  //   await tokenService.saveToken(userDto.userId,tokens.refreshToken);
  //   return {
  //     ...tokens,
  //     user: userDto
  //   }
  // }

  // async getProducts(categories) {
  //   const productData = await DB.searchInTables('categories',{ categories: categories });
  //   return productData;
  // }

  // async upload (body, res, next) {
  //   try {
  //     const response = await uploader(body, res, next);
  
  //     return response
  //   } catch(e) {
  //     console.log(e)
  //     if (err instanceof multer.MulterError) {
  //       throw ApiErr.BadRequest(e.message)
  //       // return res.status(500).json(err)
  //     } else if (err) {
  //       // return res.status(500).json(err)
  //       throw ApiErr.BadRequest(e.message)
  //     }
  //   }
  // }
 
  async list() {
    try {
      const results = await db.Users.findAll({ 
        attributes: ["login","password"],
        include: [  
          {
            model: db.Profiles,
            as: 'Profiles', 
            attributes: ["userId", "name", "lastname",
             "gender", "birthdate", "telephone",
              "email", "confirmed", "avatar",
              "confirm_hash", "last_seen", "createdAt",
            ],
            // include: [
            //   {
            //     model: db.Dialogs,
            //     as: 'Dialogs',  
            //     attributes: ["userId", "dialogId", "collaborator",
            //     "lastMessage", "createdAt" 
            //    ],
            //   },
            //   {
            //     model: db.Messages, 
            //     as: 'Messages', 
            //     attributes: ["dialog","text","read"]
            //   },  
            // ] 
          }, 
          {
            model: db.Roles,
            as: 'Roles', 
            attributes: ["role_name","userId"]
          } 
        ] 
      });

      return {
        success: true,
        results,
      };
    } catch (e) {
      console.log('error fetching posts:', e);
      return h.response(`Failed: ${e.message}`).code(500);
    }
    // try {
    //   const users_list = await DB.searchInTables('users_list');  
    //   if(!users_list) {
    //     throw ApiErr.BadRequest(`Пользователи не найдены необходимо: `);
    //   } else {  
    //     const usersDtos = [];   
    //     users_list.map(item => {  
    //       usersDtos.push(new UserDto(item)) 
    //     } )   
    //     return { 
    //       allusers: usersDtos 
    //     }
    //   }
    // } catch(e) {
    //   throw ApiErr.BadRequest(e.message)
    // } 
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
  
  async add({  
    password,
    login,
    name,
    lastname,
    gender,
    birthdate,
    telephone,
    email,
    confirmed,
    avatar,
    confirm_hash,
    last_seen,
    dialog_id,
    collaborator,
    creator,
    lastMessage,
    role_name
  }) { 
    try {  
      const results = await db.Users.create({
        password,
        login,
        Profiles: { 
          name,
          lastname,
          gender,
          birthdate,
          telephone,
          email,
          confirmed,
          avatar,
          confirm_hash,
          last_seen,
          Dialogs: {
            dialog_id,
            collaborator,
            creator,
            lastMessage
          }
        },
        Roles: [{ 
          role_name
        }] 
      }, {
        include: [{
          model: db.Profiles,
          as: 'Profiles',
          include: [ 
            {
              model: db.Dialogs, 
              as: 'Dialogs'
            } 
          ] 
        }, 
        {
          model: db.Roles,
          as: 'Roles',
        // }, 
        // {
        //   model: db.groups,
        //   as: 'groups',
        //   through: db.users_groups,
        // },  
        }],
      });  
      
      if(!results) {
        throw ApiErr.BadRequest(`Пользователь не создан: `);
      } else {   
        return {
          success: true,
          user_add: results,
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
 
  async delete(userId) {  
    try {
      const results = await db.Users.destroy({
        where: {
          id: userId,
        },
      });
      // const user_delete_id = await DB.searchInTables('user_id', id);  

      // if(!user_delete_id) {
      //   throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      // } else {    
      //   const usersDelete = await DB.removeInTables(user_delete_id,item,obj);
      //   if(!usersDelete) {
      //     throw ApiErr.BadRequest(`Ошибка удаления таблицы:`);
      //   } else {    
      //     return { 
      //       user_id: new UserDto(...usersDelete) 
      //     }
      //   } 
      // }  
    } catch(e) {
      throw ApiErr.BadRequest(e.message)
    }  
  }
  
}

module.exports = new UserService();
 