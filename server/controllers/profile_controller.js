const profileService = require('../services/profile-service');  

module.exports = class ProfileController  {
  io; 

  constructor(io) { 
    this.io = io; 
  }
 
  async listRoles(req,res,next) {
    
    try { 
      const profiles = await profileService.list(); 
     return res.json(profiles);
    } catch (e) {
      next(e);
    }
  }
 
  async getProfile(req,res,next) {
    try { 
      const { id } = req.params; 
      const users = await profileService.getById(id); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
 
  async getRole(req,res,next) {
    try { 
      const { id } = req.params; 
      const users = await profileService.getById(id); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  async addRole(req,res,next) {
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

  async addUsersRole(req,res,next) {
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
  
  async updateProfile(req,res,next) {
    try {  
      const { id } = req.params; 
      const users = await profileService.update(id,req.body); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
  
  async updateRole(req,res,next) {
    try {  
      const { id } = req.params; 
      const users = await profileService.update(id,req.body); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
 
  async deleteUsersRole(req,res,next) {
    try { 
      const users = await profileService.delete(); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
 
  async deleteRole(req,res,next) {
    try { 
      const users = await profileService.delete(); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
    
 
}

 