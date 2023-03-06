const profileService = require('../services/profile-service');  

module.exports = class ProfileController  {
 
  async list(req,res,next) {
    
    try { 
      const profiles = await profileService.list(); 
     return res.json(profiles);
    } catch (e) {
      next(e);
    }
  }
 
  async getById(req,res,next) {
    try { 
      const { id } = req.params; 
      const users = await profileService.getById(id); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  async add(req,res,next) {
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
  
  async update(req,res,next) {
    try {  
      const { id } = req.params; 
      const users = await profileService.update(id,req.body); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
 
  async delete(req,res,next) {
    try { 
      const users = await profileService.delete(); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
    
}

 