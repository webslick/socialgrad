const { 
  AuthInfos,
  Citys, 
  Dialogs,
  Districts,
  Flats, 
  Tokens, 
  Homes,
  Profiles, 
  Regions,
  Roles,
  Rooms, 
  RoomTypes, 
  Streets,
  Subscribes,
  Users, 
  Wallets,
 } = require('../db/models');

const db = require('./models/index');
const { Op } = require("sequelize");
const serviceFunction = require("../service_functions")
const ApiErr = require('../exeptions/api-error');
const messages = require('./models/messages');
const RoleDto = require('../dtos/role-dto');

class DB {

  async addInTables(table, obj) { 

      switch (table) {
        case 'user':  
          const result = [];
          const {
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
          } = obj;  
  
          const user = await Users.create({
            AuthInfos: {
              login,
              password,  
              refreshToken,  
              isActivated,  
            },
            Wallets: {
              balance, 	 
            },
            Subscribes: {
              startSub,
              active,   
            },  
          },{
            include: [
              {
                model: AuthInfos,
                as: 'AuthInfos', 
              },
              {
                model: Wallets,
                as: 'Wallets', 
              },
              {
                model: Subscribes,
                as: 'Subscribes', 
              },  
            ], 
          });  
  
          if (!user) {
            throw ApiErr.BadRequest("Не получилось создать пользователя User add") 
          }
   
          const roles = await Roles.findOne({ where: { role_name: role } });
  
          if (!roles) { 
            throw ApiErr.BadRequest("Роли для пользователя не найдены создайте Roles") 
          }
         
          const mdoelRoleId = new RoleDto(roles).id;
  
          const profile = await Profiles.create({
            name,  
            lastname,  
            birthdate,
            gender, 
            email,  
            telephone,  
            avatar,  
            last_seen,
            role: mdoelRoleId  
          });
          
          if (!profile) {
            throw ApiErr.BadRequest("Не получилось создать профиль Profile add") 
          }
  
          const home = await Homes.create({ 
            regionId: await serviceFunction.createLocationIfNot(Regions,region),
            cityId: await serviceFunction.createLocationIfNot(Citys,city),
            streetId: await serviceFunction.createLocationIfNot(Districts,district),
            districtId: await serviceFunction.createLocationIfNot(Streets,street),
            index,  
            number, 
            floors, 
            entrancesCount,  
            flatsCount  
          });
          
          if (!home) {
            throw ApiErr.BadRequest("Не получилось создать дом Homes add") 
          }
  
          result.push(user)
          result.push(new RoleDto(roles))
          // result.push(profile)
          // result.push(home) 
  
          return result;   

        // case 'home': 
        //   const { 
        //     index,  
        //     number, 
        //     floors, 
        //     entrancesCount,  
        //     flatsCount,  
        //     region, 
        //     city, 
        //     district,
        //     street 
        //   } = obj;  
 




        //   const home = await Homes.create({ 
        //     regionId: await serviceFunction.createLocationIfNot(Regions,region),
        //     cityId: await serviceFunction.createLocationIfNot(Citys,city),
        //     streetId: await serviceFunction.createLocationIfNot(Districts,district),
        //     districtId: await serviceFunction.createLocationIfNot(Streets,street),
        //     index,  
        //     number, 
        //     floors, 
        //     entrancesCount,  
        //     flatsCount  
        //   }); 
 
        //   if (!home) {
        //      throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
        //   }
          
        //   return home;   
        case 'room': 
        const {
           typeName,
           roomName,
           creatorId
        } = obj; 
        
          const room = await Rooms.create({
            RoomTypes: { 
              typeName,
              roomName,
              creatorId
            },
          },{
            include: [
              {
                model: RoomTypes,
                as: 'RoomTypes', 
              } 
            ], 
          }); 


       
             
          if (!room) {  throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message) }
          // const roomType = await RoomTypes.create({
          //   typeName,
          //   roomName,
          //   creatorId
          // });  
          // if (!roomType) {  throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message) } 
          
          return room;   
        // case 'flat': 
        //   const { 
        //     connected, 
        //     startConnect,  
        //     stopConnect 
        //   } = obj;  
        //   const flat = await Flats.create({ 
        //     number: obj.number, 
        //     connected, 
        //     startConnect,  
        //     stopConnect 
        //   }); 

        //   if (!flat) {
        //      throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
        //   }
          
        //   return flat;   
        // case 'region':   
        // const region = await Regions.create({ name: obj.name }); 
        // console.log(region)

        //   if (!region) {
        //      throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
        //   }
          
        //   return region;   
        // case 'city':   
        //   const citys = await Citys.create({ name: obj.name }); 

        //   if (!citys) {
        //      throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
        //   }
          
        //   return citys;   
        // case 'street':   
        //   const street = await Streets.create({ name: obj.name }); 

        //   if (!street) {
        //      throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
        //   }
          
        //   return street;   
        // case 'district':   
        //   const district = await Districts.create({ name: obj.name }); 

        //   if (!district) {
        //      throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
        //   }
          
        //   return district;   

        // case 'role': 
        //   const roles = await Roles.create({ userId: obj.userId ,role_name: obj.role_name },{
        //     // include: [ 
        //     // {
        //     //   model: Roles,
        //     //   as: 'Roles', 
        //     // }],
        //   }); 
        //   if (!roles) {
        //      throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
        //   }
        //   return role_name;   
        case 'profile':
          const { 
            role_name 
          } = obj;  
          const profile_role = await Roles.create({
            role_name
          }); 
          if (!profile_role) {
             throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
          }
          return profile_role;   
        case 'token':
          const token = await Tokens.create(obj); 
          if (!token) {
             throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
          }
          return token;  

      }
  }
 
  async searchInTables(table, item) {
    const profileAttributes = ["role","birthdate","gender","email","confirmed","avatar","confirm_hash","last_seen","name","lastname","telephone"];
   
    switch (table) {
      case 'users_home_id':  
      const { city, street, number } = item 
      const users_home_id = await Homes.findAll({  
        where: {
          cityId: city,
          streetId: street,
          number: number,
        },
        attributes: [ "id"],
       
      }) 
 
      return users_home_id;
      case 'users_home':   
      const users_home = await Users.findAll({  
        where: {
          [Op.or]: item,
          [Op.not]: [{ id: 4 }],
        }, 
        attributes: [ "id","createdAt"],
        include: [    
          {
            model: Profiles,
            as: 'Profiles', 
             attributes: ["birthdate","gender","email","avatar","last_seen","name","lastname","telephone"] 
          },  
        ],
       
      }) 
 
      return users_home;
      case 'homes_list':  
      const homes_list = await Homes.findAll({  
        attributes: [ "index","floors","entrancesCount","flatsCount", "number"],
        include: [  
          {
            model: Citys,
            as: 'Citys', 
            attributes: homelocationAttributes,
          },  
          {
            model: Regions,
            as: 'Regions', 
            attributes: homelocationAttributes,
          },  
          {
            model: Districts,
            as: 'Districts', 
            attributes: homelocationAttributes,
          },  
          {
            model: Streets,
            as: 'Streets', 
            attributes: homelocationAttributes,
          } 
        ],
      }) 
 
      return homes_list;
      case 'rooms_list':  
      const rooms_list = await Rooms.findAll({  
        // attributes: [ "index","floors","entrancesCount","flatsCount", "number"],
        include: [  
          {
            model: RoomTypes,
            as: 'RoomTypes', 
            // attributes: homelocationAttributes,
          },   
        ],
      }) 
 
      return rooms_list;
      case 'user_me': 
    
      const user_me = await Users.findOne({ 
        where: { id: item }, 
        attributes: [ "id","createdAt"],
        include: [  
          {
            model: AuthInfos,
            as: 'AuthInfos', 
             attributes: ["login","password","refreshToken","accessToken","isActivated"], 
          },  
          {
            model: Homes,
            as: 'Homes', 
            attributes: ["number","index","floors","entrancesCount","flatsCount"], 
            include: [  
              {
                model: Citys,
                as: 'Citys',  
              }, 
              {
                model: Regions,
                as: 'Regions',  
              },  
              {
                model: Districts,
                as: 'Districts',  
              }, 
              {
                model: Streets,
                as: 'Streets',  
              },  
            ],
          },   
          {
            model: Wallets,
            as: 'Wallets', 
             attributes: [ "balance" ],
          },  
          {
            model: Subscribes,
            as: 'Subscribes', 
            attributes: ["active","startSub","finishSub"], 
          },   
          {
            model: Profiles,
            as: 'Profiles', 
             attributes: profileAttributes,
             include: [  
              {
                model: Roles,
                as: 'Roles', 
                // attributes: homelocationAttributes
              },  
            ],
          },  
        ],
        
      }) 
      
      return user_me;
      case 'user_token':  
      const usertoken = await AuthInfos.findOne({ 
          where: { refreshToken: item },  
      })  
 
      return usertoken;
      case 'users_list_registration':  
      const users_list_registration = await AuthInfos.findOne({ 
          where: { login: item }, 
          attributes: ["login","password","id"], 
      })  
 
      return users_list_registration;
      case 'token':  
      const token = await Tokens.findOne({ 
          where: { id: item }, 
          attributes: ["refreshToken"], 
      })  
 
      return token;
      case 'role':  
      const role = await Roles.findOne({ 
          where: { id: item }, 
          attributes: ["role_name"], 
      })  
 
      return role;
      case 'home':  
      const home = await Homes.findOne({ 
        where: { id: item }, 
        attributes: ["number","index","floors","entrancesCount","flatsCount"], 
        include: [  
          {
            model: Citys,
            as: 'Citys', 
            attributes: homelocationAttributes
          }, 
          {
            model: Regions,
            as: 'Regions', 
            attributes: homelocationAttributes
          },  
          {
            model: Districts,
            as: 'Districts', 
            attributes: homelocationAttributes
          }, 
          {
            model: Streets,
            as: 'Streets', 
            attributes: homelocationAttributes
          },  
        ],
      })  
 
      return home;
      case 'users_list':  
      const users_list = await AuthInfos.findOne({ 
          where: { login }, 
          attributes: ["login","password","id"],
          // include: [  
          //   {
          //     model: Profiles,
          //     as: 'Profiles', 
          //     attributes: [
          //       "userId", "name", "lastname", "gender", "birthdate", 
          //       "telephone", "email", "confirmed", "avatar",  "numTasks",
          //       "munMessages", "confirm_hash", "last_seen", "position", "createdAt"
          //     ],
          //     include: [  
          //       {
          //         model: Dialogs,
          //         as: 'Dialogs', 
          //         // attributes: ["role_name","userId"]
          //       }, 
          //       {
          //         model: Roles,
          //         as: 'Roles', 
          //         attributes: ["role_name"]
          //       }  
          //     ],
          //   },  
            
          // ] 
       
        // include: [  
        //   {
        //     model: AuthInfos,
        //     as: 'AuthInfos', 
        //      attributes: [ "userId","login","password"],
        //   },  
        //   {
        //     model: Homes,
        //     as: 'Homes', 
        //     //  attributes: [ "userId","login","password"],
        //   },  
        // ],
      }) 
 
      return users_list;
      
      case 'user_id':  
       const users_by_id = await Users.findAll({
        where: { id: item },  
        attributes: ["login","password"],
        include: [
          {
            model: Profiles,
            as: 'Profiles', 
            include: [ 
              // {
              //   model: Roles,
              //   as: 'Roles', 
              // }
            ],
          },  
          // {
          //   model: Roles,
          //   as: 'Roles', 
          // }
        ],
        
        // include: [  
        //   {
        //     model: Dialogs,
        //     as: 'dialogs', 
        //     attributes: ["lastMessage"],
        //     include: [
        //       {
        //         model: Profiles,
        //         as: 'author', 
        //         attributes: profileAttributes,
        //       } ,
        //       {
        //         model: Profiles,
        //         as: 'partner',  
        //         attributes: profileAttributes,
        //       },
        //       {
        //         model: Messages, 
        //         as: 'messages',
        //         through: {
        //           attributes: []
        //         },
        //         attributes: ["dialog","text","read"]
        //       }, 
        //     ] 
        //   }, 
        //   {
        //     model: Roles,
        //     as: 'roles',
        //     through: {
        //       attributes: []
        //     },
        //     attributes: ["role_name"]
        //   },  
        //   {
        //     model: Profile, 
        //     as: 'profile',
        //     attributes: profileAttributes,  
        //   }, 
        
        // ] 
      })  

      return users_by_id[0];

      case 'profile_id':  
      const profile_by_id = await Profiles.findAll({  
        where: {
          id: item
        } 
      })  
      return profile_by_id[0];

      case 'role_list': 
      const role_list = await Roles.findAll({
        include: [
          {
            model: Users, 
            as: 'users'
          } 
        ],
      }) 
      return role_list;
    
      case 'profile_list': 
        const profile_list = await Profiles.findAll({
          attributes: ["createdAt", ...profileAttributes],
          // include: [{
          //   model: Users,
          //   as: 'users'
          // }],
        })
        return profile_list;
      
      case 'role_name': 
      const role_name = await Roles.findAll({ 
        where: { role_name: item }, 
        include: [ 
          {
            model: Users,
            as: 'users',  
          } , 
        ] 
      }) 
      return role_name;
       
      case 'dialog_list': 
        const dialog_list = await Dialogs.findAll({
          // include: [   
          //   {
          //     model: Messages,
          //     as: 'messages', 
          //   }  
          // ] 
        })
        return dialog_list;
    
      case 'dialogId':  
        const dialog = await Dialogs.findAll({ 
          where: {
            dialogId: item
          },
          // include: [ 
          //   {
          //     model: Messages,
          //     as: 'messages', 
          //   }  
          // ],
        })  
 
        return dialog
    } 
  }
  
  async removeInTables(model,userId) {
    const mod = await model.destroy({
      where: userId 
    });
    return mod;
  }

  async updateModelTables(model,obj) {   
    const mod = await model.update(obj);
    return mod;
  }

  async resetIncrementTables() {
    await db.sequelize.query("ALTER TABLE Users AUTO_INCREMENT = 0;");
    await db.sequelize.query("ALTER TABLE Tokens AUTO_INCREMENT = 0;"); 
    await db.sequelize.query("ALTER TABLE Dialogs AUTO_INCREMENT = 0;"); 
    await db.sequelize.query("ALTER TABLE Users AUTO_INCREMENT = 1;");
    await db.sequelize.query("ALTER TABLE Tokens AUTO_INCREMENT = 1;"); 
    await db.sequelize.query("ALTER TABLE Dialogs AUTO_INCREMENT = 1;"); 
    await db.sequelize.query("ALTER TABLE Users AUTO_INCREMENT = 0;");
    await db.sequelize.query("ALTER TABLE Tokens AUTO_INCREMENT = 0;"); 
    await db.sequelize.query("ALTER TABLE Dialogs AUTO_INCREMENT = 0;"); 
  }

}

module.exports = new DB();





// $2b$04$IDIODeV2jKOVRpABf2LV6OoyCBLXN3miZeSggQp4VY8126LuK428a eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwidXNlcklkIjoxLCJpc0FjdGl2YXRlZCI6dHJ1ZSwicm9sZSI6InVzZXIiLCJpYXQiOjE2NTEyNDIxMjEsImV4cCI6MTY1MzgzNDEyMX0.OSUTp8l6WM6VoNgB9_4rnomW8S8x5yHuG7S8dKGHFWc



