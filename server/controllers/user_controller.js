const userService = require('../services/users-service'); 
// const config = require('config');
// const url_client = config.get('Server.URL.CLIENT'); 
 
module.exports = class UserController  { 
  io; 

  constructor(io) { 
    this.io = io; 
  }
 
  async list(req,res,next) {  
    const { userId } = req.params;
    try { 
     const post = await userService.list({  
      userId
     }); 
    return res.json(post);
  } catch (e) {
    next(e);
  }
    // try { 
    //   const users = await userService.list(); 
    //  return res.json(users);
    // } catch (e) {
    //   next(e);
    // }
  }
 
  async getById(req,res,next) {
    try { 
      const { id } = req.params;
      console.log()
      const users = await userService.getById(id); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  async add(req,res,next) {
    try { 
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
        dialog_id,
        collaborator,
        creator,
        lastMessage,
        role_name 
       } = req.body; 
 
      const users = await userService.add({  
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
       }); 
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
  
  async update(req,res,next) {
    try {  
      const { id } = req.params;  
      const { password } = req.query;  
      const users = await userService.update(id,{ password }); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
 
  async delete(req,res,next) {
    try { 
      const { id } = req.params;   
      console.log(id)
      const users = await userService.delete(id); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
 
} 