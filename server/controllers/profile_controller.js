const profileService = require('../services/profile-service');  
// Для работы IO необходимы СТРЕЛОЧНЫЕ функции у класса!!
module.exports = class ProfileController  {
  io; 

  constructor(io) { 
    this.io = io; 
  }
 
  listRoles = async (req,res,next) => {
    
    try { 
      const profiles = await profileService.list(); 
     return res.json(profiles);
    } catch (e) {
      next(e);
    }
  }
 
  getProfile = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const users = await profileService.getById(id); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
 
  getRole = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const users = await profileService.getById(id); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  addRole = async (req,res,next) => {
    try { 
      const { 
        role_name
      } = req.body;
      const users = await profileService.add({
        role_name
      }); 
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  addUsersRole = async (req,res,next) => {
    try { 
      const { 
        user_id,
        fio,
        birthdate,
        gender,
        email,
        confirmed,
        avatar,
        confirm_hash,
        last_seen 
      } = req.body;
      const users = await profileService.add({
        user_id,
        fio,
        birthdate,
        gender,
        email,
        confirmed,
        avatar,
        confirm_hash,
        last_seen
      }); 
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
  
  updateProfile = async (req,res,next) => {
    try {  
      const { id } = req.params; 
      const users = await profileService.update(id,req.body); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
  
  updateRole = async (req,res,next) => {
    try {  
      const { id } = req.params; 
      const users = await profileService.update(id,req.body); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
 
  deleteUsersRole = async (req,res,next) => {
    try { 
      const users = await profileService.delete(); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
 
  deleteRole = async (req,res,next) => {
    try { 
      const users = await profileService.delete(); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
    
 
}

 