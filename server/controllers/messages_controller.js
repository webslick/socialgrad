const messagesService = require('../services/messages-service');  

module.exports = class MessagesController  {
   
  async list(req,res,next) {
    try { 
      const users = await userService.list();

     return res.json(users);
    } catch (e) {
      next(e);
    }
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
      const { username, password } = req.body;
      const users = await userService.add({ username, password }); 
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
      const users = await userService.delete(id); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
    
}
 