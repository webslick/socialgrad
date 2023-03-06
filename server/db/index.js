const { Users, Profiles, Roles, Messages, UploadFiles } = require('../db/models');

const db = require('./models/index')

const ApiErr = require('../exeptions/api-error');
const messages = require('./models/messages');

class DB {

  async addInTables(table, obj) { 
      switch (table) {
        case 'user': 
        console.log(obj, "user")
          // const user = await Users.create(obj, {
          //   include: [{
          //     model: Profile,
          //     as: 'profile',
          //   }, {
          //     model: Roles,
          //     as: 'roles',
          //   }],
          // }); 
          // if (!user) {
          //   throw ApiErr.BadRequest(e.message)
          // }
          return 'user';   
        case 'roles':
          console.log(obj, "roles")
          const role_name = await Roles.create(obj); 
          if (!role_name) {
            throw ApiErr.BadRequest(e.message)
          }
          return role_name;   
        case 'profile':
          const profile = await Profiles.create(obj); 
          if (!profile) {
            throw ApiErr.BadRequest(e.message)
          }
          return profile;   
        case 'dialog':
          // const dialog = await Dialogs.create(obj); 
          if (!dialog) {
            throw ApiErr.BadRequest(e.message)
          }
          return dialog;   
      }
  }
 
  async searchInTables(table, item) {
    const profileAttributes = ["user_id","fio","birthdate","gender","email","confirmed","avatar","confirm_hash","last_seen"];
    switch (table) {
      case 'users_list': 
      const users_list = await Users.findAll({
        attributes: ["id","username","password"],
        include: [  
          {
            model: Dialogs,
            as: 'dialogs', 
            attributes: ["lastMessage","dialog_id"],
            include: [
              {
                model: Profile,
                as: 'author', 
                attributes: profileAttributes,
              } ,
              // {
              //   model: Profile,
              //   as: 'partner',  
              //   attributes: profileAttributes,
              // },  
              {
                model: Messages, 
                as: 'messages',
                through: {
                  attributes: []
                },
                attributes: ["dialog","text","read"]
              },  
            ] 
          }, 
          {
            model: Roles,
            as: 'roles',
            through: {
              attributes: []
            },
            attributes: ["role_name"]
          },  
          // {
          //   model: Profile, 
          //   as: 'profile',
          //   attributes: profileAttributes,  
          // } 
        ] 
      }) 
      return users_list;
      
      case 'user_id':  
       const users_by_id = await Users.findAll({
        where: { id: item }, 
        attributes: ["username","password"],
        include: [  
          {
            model: Dialogs,
            as: 'dialogs', 
            attributes: ["lastMessage"],
            include: [
              {
                model: Profiles,
                as: 'author', 
                attributes: profileAttributes,
              } ,
              {
                model: Profiles,
                as: 'partner',  
                attributes: profileAttributes,
              },
              {
                model: Messages, 
                as: 'messages',
                through: {
                  attributes: []
                },
                attributes: ["dialog","text","read"]
              }, 
            ] 
          }, 
          {
            model: Roles,
            as: 'roles',
            through: {
              attributes: []
            },
            attributes: ["role_name"]
          },  
          {
            model: Profile, 
            as: 'profile',
            attributes: profileAttributes,  
          }, 
        
        ] 
      })  

      return users_by_id;
      
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
            // through: {
            //   attributes: []
            // }, 
           
          } ,
          // include: [ 
            // {
            //   model: Profile, 
            //   as: 'profile'
            // } 
          // ] 
        ] 
      }) 
      return role_name;
      
      case 'profile_id':  
      return await Profiles.findAll({ 
        attributes: ["createdAt", ...profileAttributes],
        where: {
          id: item
        } 
      })  

      case 'dialog_list': 
        const dialog_list = await Dialogs.findAll({
          include: [  
            {
              model: Profiles,
              as: 'partner', 
            }, 
            {
              model: Messages,
              as: 'messages', 
            }  
          ] 
        })
        return dialog_list;
    
      case 'dialog_id':  
      return await Dialogs.findAll({
       
        where: {
          creator: item
        },
        include: [
          {
            model: Profiles,
            as: 'partner', 
          }, 
          {
            model: Messages,
            as: 'messages', 
          }  
        ],
      })  
    } 
  }
  
  async removeInTables(model,item,obj) {
    const mod = await model.destroy({
      where: obj 
    });
    return mod;
  }

  async updateModelTables(model,obj) {  
    console.log(obj)
    const mod = await model.update( );
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



