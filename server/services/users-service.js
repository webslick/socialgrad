 
const DB = require('../db/index'); 
const db = require('../db/models/index')
const multer = require('multer');
const ApiErr = require('../exeptions/api-error');
const path = require('path');
const serviceFunction = require('../service_functions/index')
const config = require('config'); 
const adminService = require('../services/admin-service')
const userService = require('../services/users-service')
const jwt = require('jsonwebtoken'); 
const keys_access = config.get('Server.KEYS.JWT_SECRET_KEY_ACCESS');
const keys_refresh = config.get('Server.KEYS.JWT_SECRET_KEY_REFRESH');  
const bcrypt = require('bcrypt'); 

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
 
  async login(login, password) {
    try {
      const condidate = await DB.searchInTables('users_list_registration',login); 
      if(!condidate) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {
        
        const isPassEquals = await bcrypt.compare(password,serviceFunction.removeEmpty(condidate, 'AuthInfos').password);
        if(!isPassEquals) {
          throw ApiErr.BadRequest(`Неверный пароль повторите ввод: `);
        }
  
        let result = {};  
 
        const user = await DB.searchInTables('user_me', serviceFunction.removeEmpty(condidate, 'AuthInfos').id );  
    
        if(!user) {
          throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
        }
 
          result = { 
            ...serviceFunction.removeEmpty(user, 'User'),  
            ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes',false), 'Homes'), 
            ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Wallets',false),'Wallets'), 
            ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Subscribes',false), 'Subscribes'), 
            ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'AuthInfos',false), 'AuthInfos'), 
      
            ...serviceFunction.removeEmpty(user.Profiles,'Profile'),   
            ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Profiles','Roles'), 'Roles'),   
      
            region: { ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Regions'), 'Regions') },  
            city: { ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Citys'), 'Citys') },  
            district: { ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Districts'), 'Districts') }, 
            street: { ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Streets'), 'Streets') },  
          };  
 
          if(serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'AuthInfos',false), 'AuthInfos').refreshToken === '') {
            const tokens = adminService.generateToken({ login: serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'AuthInfos',false), 'AuthInfos').login, userId: serviceFunction.removeEmpty(user,'Users').id, role: serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Profiles','Roles'), 'Roles').role}) 
            
            const update_token = await DB.updateModelTables(serviceFunction.getObjkey(user,'AuthInfos',false),{
              id: serviceFunction.removeEmpty(condidate, 'AuthInfos').id,
              refreshToken: tokens.refreshToken,
              accessToken: tokens.accessToken
            })
 
            result.accessToken = update_token.accessToken
            result.refreshToken = update_token.refreshToken

            return { 
              user: result 
            }

          } else {
            return { 
              user: result 
            }
          }
       
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }

  async activate (activationLink) {
    const user = await DB.searchInTables('users',{ activationLink });
    if(!user) {
      throw ApiErr.BadRequest('Ссылка устарела, зарегистрируйтесь заново');
    }
    await DB.updateModelTables(user,{ isActivated: true });
  }

  async logout(refreshToken) {
  let success = false
    const user = await DB.searchInTables('user_token',refreshToken); 
    if(user !== null) {
      await DB.updateModelTables(user,{ refreshToken: null, accessToken: null });
      success = true
    }
    return {
      success: success
    }
  }

  async refresh(refreshToken) {
 
    if(refreshToken === undefined) {
      throw ApiErr.UnautorizaedError();
    }

    let result = {};  
     const userData = adminService.validateRefreshToken(refreshToken);  
     const tokenFromDB = await DB.searchInTables('user_token',refreshToken); 

    if(!userData || !tokenFromDB) { 
      throw ApiErr.UnautorizaedError();
    }
    
    const user = await DB.searchInTables('user_me', userData.userId );

    result = { 
      ...serviceFunction.removeEmpty(user, 'User'),  
      ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes',false), 'Homes'), 
      ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Wallets',false),'Wallets'), 
      ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Subscribes',false), 'Subscribes'), 
      ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'AuthInfos',false), 'AuthInfos'), 

      ...serviceFunction.removeEmpty(user.Profiles,'Profile'),   
      ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Profiles','Roles'), 'Roles'),   

      region: { ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Regions'), 'Regions') },  
      city: { ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Citys'), 'Citys') },  
      district: { ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Districts'), 'Districts') }, 
      street: { ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Streets'), 'Streets') },   
    };  
 
    if(serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'AuthInfos',false), 'AuthInfos').refreshToken === '') {
 
      const tokens = adminService.generateToken({ login: serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'AuthInfos',false), 'AuthInfos').login, userId: serviceFunction.removeEmpty(user,'Users').id, role: serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Profiles','Roles'), 'Roles').role}) 
      
      const update_token = await DB.updateModelTables(serviceFunction.getObjkey(user,'AuthInfos',false),{
        id: serviceFunction.removeEmpty(condidate, 'AuthInfos').id,
        refreshToken: tokens.refreshToken,
        accessToken: tokens.accessToken
      })

      result.accessToken = update_token.accessToken
      result.refreshToken = update_token.refreshToken

      return { 
        user: result 
      }

    } else {
      console.log("NOT UPDATE")
      return { 
        user: result 
      }
    }
    
  }

  async getMe(refreshToken) {  
    // try { 
 
    if(!refreshToken) {
      throw ApiErr.UnautorizaedError();
    } 

    const userData = adminService.validateRefreshToken(refreshToken);  
 
    if(!userData) {
      throw ApiErr.UnautorizaedError();
    } 

    const user = await DB.searchInTables('user_me', userData.userId );  

    let result = {};  
    let result_users_home = [];  
  
    if(!user) {
      throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
    }

    result = { 
      ...serviceFunction.removeEmpty(user, 'User'),  
      ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes',false), 'Homes'), 
      ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Wallets',false),'Wallets'), 
      ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Subscribes',false), 'Subscribes'), 
      ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'AuthInfos',false), 'AuthInfos'), 

      ...serviceFunction.removeEmpty(user.Profiles,'Profile'),   
      ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Profiles','Roles'), 'Roles'),   

      region: serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Regions'), 'Regions').name ,  
      city: serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Citys'), 'Citys').name ,  
      district: serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Districts'), 'Districts').name , 
      street: serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Streets'), 'Streets').name ,  
    };  
 
    const users_home_id = await DB.searchInTables('users_home_id', { city: serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Citys'), 'Citys').id, street: serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Streets'), 'Streets').id, number: serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes',false), 'Homes').number} );  //массив айдишников пользователей проживающих в одном доме  
    const userids = []
    users_home_id.map(model => { userids.push({ id: model.id }) })
  
    const users_home = await DB.searchInTables('users_home',userids );  //массив пользователей проживающих в одном доме  
 
    users_home.map((item_user) => { 
      result_users_home.push({
        ...serviceFunction.removeEmpty(item_user, 'Users'),  
        ...serviceFunction.removeEmpty(item_user.Profiles,'Profiles'), 
      }) 
    })

    result.users_home = result_users_home;

 console.log(result_users_home);
      // const tokens = tokenService.generateToken({...userDto});
      // await tokenService.saveToken(userDto.userId,tokens.refreshToken);
      // return {
      //   ...tokens,
      //   user: userDto
      // }
    return { 
      user: result 
    }
 
    // } catch(e) {
    //    throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    // } 
  
  }

  async getUsersFromHome(city, street, number,cookies) {  
   console.log(city, street, number,cookies);
    // if(!refreshToken) {
    //   throw ApiErr.UnautorizaedError();
    // } 

    // const userData = adminService.validateRefreshToken(refreshToken);  
 
    // if(!userData) {
    //   throw ApiErr.UnautorizaedError();
    // } 

    // const user = await DB.searchInTables('user_me', userData.userId );  

    // let result = {};  
  
    // if(!user) {
    //   throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
    // }

    // result = { 
    //   ...serviceFunction.removeEmpty(user, 'User'),  
    //   ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes',false), 'Homes'), 
    //   ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Wallets',false),'Wallets'), 
    //   ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Subscribes',false), 'Subscribes'), 
    //   ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'AuthInfos',false), 'AuthInfos'), 

    //   ...serviceFunction.removeEmpty(user.Profiles,'Profile'),   
    //   ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Profiles','Roles'), 'Roles'),   

    //   region: { ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Regions'), 'Regions') },  
    //   city: { ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Citys'), 'Citys') },  
    //   district: { ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Districts'), 'Districts') }, 
    //   street: { ...serviceFunction.removeEmpty(serviceFunction.getObjkey(user,'Homes','Streets'), 'Streets') },  
    // };  
 
    return { 
      user: result 
    }
 
  }

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
  //        throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
  //       // return res.status(500).json(err)
  //     } else if (err) {
  //       // return res.status(500).json(err)
  //        throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
  //     }
  //   }
  // }
 
  async listUsers() {
    try {
      const users_list = await DB.searchInTables('users_list');  
  
      if(!users_list) {
        throw ApiErr.BadRequest(`Пользователи не найдены необходимо: `);
      } else {   
        // let resultat = []
        // let Profiles = { Profiles: {} };
        // let Roles = [];
        // let Dialogs = []; 
        // let User = {};
        // let resultDto = {};  

        // users_list.map((item_user,key) => {   

        //   Dialogs = [];
        //   Roles = [];
        //   User = {};  

        //   if(getObjkey(item_user,'Profiles',false)) {  

        //     User = removeEmpty(new UserDto(item_user)); 

        //     Profiles.Profiles = removeEmpty(new ProfileDto(item_user.Profiles));  

        //     resultDto = Object.assign(User, Profiles);   

        //     getObjkey(item_user,'Profiles','Dialogs').map((item_inner) => {  
        //       Dialogs.push(removeEmpty(new DialogDto(item_inner))); 
        //     })

        //     getObjkey(item_user,'Profiles','Roles').map((item_inner_role) => {  
        //       Roles.push(removeEmpty(new RoleDto(item_inner_role)).role_name); 
        //     })

        //     resultDto.Dialogs = Dialogs;

        //     resultDto.Roles = Roles;

        //     resultat.push(resultDto); 
        //   }   
        // });  

 
        return { 
          allusers:  users_list
        }
      }

    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }  
  }

  async getById(userId) {
    try {
      const user_id = await DB.searchInTables('user_id', userId);  
      if(!user_id) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {    
        return { 
          user_id: new UserDto(user_id) 
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async add(obj) {   
    try {  
      const user = await DB.addInTables('user', obj);  
      const userDto = new UserDto(user);  
      return { user: userDto }  
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    } 
  }
  
  async update(userId, obj) {
    const {
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
      dialogId,
      collaborator,
      creator,
      lastMessage,
      role_name,
      position
    } = obj
    try { 
 
      const updateUsersObject = {
        login,
        password,
      }; // для юзера данные 
 
      const updateProfilesObject = {
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
        dialogId,
        collaborator,
        creator,
        lastMessage,
        role_name,
        position
      }; // для профиля данные 
 
      if( (login !== undefined || password !== undefined) && (
        name == undefined &&
        lastname == undefined &&
        gender == undefined &&
        birthdate == undefined &&
        telephone == undefined &&
        email == undefined &&
        confirmed == undefined &&
        avatar == undefined &&
        confirm_hash == undefined &&
        last_seen == undefined &&
        dialogId == undefined &&
        collaborator == undefined &&
        creator == undefined &&
        lastMessage == undefined &&
        role_name == undefined &&
        position == undefined 
       )) { 
        
        const user_update_id = await DB.searchInTables('user_id', userId);  

        if(!user_update_id) {
          throw ApiErr.BadRequest(`Пользователь не найден!`);
        } else {    
          const userUpdate = await DB.updateModelTables(user_update_id, updateUsersObject); 
          if(!userUpdate) {
            throw ApiErr.BadRequest(`Ошибка обновления таблицы пользователя:`);
          } else {      
            return { 
              user_id: new UserDto(userUpdate) 
            }  
          } 
        }  
      }
  
      if( (login === undefined && password === undefined) && (
        name !== undefined ||
        lastname !== undefined ||
        gender !== undefined ||
        birthdate !== undefined ||
        telephone !== undefined ||
        email !== undefined ||
        confirmed !== undefined ||
        avatar !== undefined ||
        confirm_hash !== undefined ||
        last_seen !== undefined ||
        dialogId !== undefined ||
        collaborator !== undefined ||
        creator !== undefined ||
        lastMessage !== undefined ||
        role_name !== undefined ||
        position !== undefined 
       )) { 
        const profile_update_id = await DB.searchInTables('profile_id', userId);  

        if(!profile_update_id) {
          throw ApiErr.BadRequest(`Пользователь не найден!`);
        } else {    
          const profileUpdate = await DB.updateModelTables(profile_update_id, updateProfilesObject); 
          if(!profileUpdate) {
            throw ApiErr.BadRequest(`Ошибка обновления таблицы пользователя:`);
          } else {      
            return { 
              user_id: new ProfileDto(profileUpdate) 
            }  
          } 
        }  
      }
      
 


      // const updatePromises = [];
      // const updateUsersPromise = db.Users.update(
      //   updateUsersObject,
      //   { where: { id: userId } },
      // );

      // updatePromises.push(updateUsersPromise);

      // const updateProfilesPromise = db.Profiles.update(
      //   updateProfilesObject,
      //   { where: { userId } },
      // );

      // updatePromises.push(updateProfilesPromise);

      // const updatePostsPromises = posts.map((p) => {
      //   const { postTitle, postId } = p;
      //   const updateObject = {
      //     title: postTitle,
      //   };
      //   const whereQuery = {
      //     userId,
      //     id: postId,
      //   };
      //   return db.posts.update(
      //     updateObject,
      //     { where: whereQuery },
      //   );
      // }); 
      // updatePromises.push(...updatePostsPromises);

      // await Promise.all(updatePromises);
      // return { 
      //   success: true,
      //   info: 'user records updates'
      // };
 
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
 
  async delete(userId) {  
    try {

    const user_delete_id = await DB.searchInTables('user_id', userId);  
      if(!user_delete_id) {
        throw ApiErr.BadRequest(`Ошибка удаления пользователя не существует: `);
      } else {    
        const usersDelete = await DB.removeInTables(user_delete_id,userId);
        if(!usersDelete) {
          throw ApiErr.BadRequest(`Ошибка удаления таблицы:`);
        } else {    
          return { 
            success: true,
            message: `Пользователь успешно удален!` 
          }
        } 
      }   
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }  
  } 
 
}

module.exports = new UserService();
 