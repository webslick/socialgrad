const roleService = require('../services/role-service');  

module.exports = class RoleController  {
  
  async list(req,res,next) {
    try { 
      const roles = await roleService.list();

     return res.json(roles);
    } catch (e) {
      next(e);
    }
  }
 
  async getByName(req,res,next) {
    try { 
      const { name } = req.params; 
      const roles = await roleService.getByName(name); 
     return res.json(roles);
    } catch (e) {
      next(e);
    }
  }

  async add(req,res,next) {
    try { 
      const { role_name } = req.body;
      const roles = await roleService.add({ role_name }); 
      return res.json(roles);
    } catch (e) {
      next(e);
    }
  }
  
  async update(req,res,next) {
    try { 
      const users = await roleService.update(); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
 
  async delete(req,res,next) {
    try { 
      const users = await roleService.delete(); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
    
}
 