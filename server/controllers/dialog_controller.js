const dialogService = require('../services/dialog-service');  

module.exports = class DialogController  {
 
  async list(req,res,next) {
    try { 
      const diaolog_list = await dialogService.list();

     return res.json(diaolog_list);
    } catch (e) {
      next(e);
    }
  }
 
  async getById(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_id = await dialogService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }

  async add(req,res,next) {
    try {  
      const { 
        dialog_id,
        collaborator,
        creator,
        lastMessage
       } = req.body;
      const diaolog_add = await dialogService.add({
        dialog_id,
        collaborator,
        creator,
        lastMessage
       }); 
      return res.json(diaolog_add);
    } catch (e) {
      next(e);
    }
  }
  
  async update(req,res,next) {
    try {  
      const { id } = req.params; 
      const diaolog_update = await dialogService.update(id,req.body); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
 
  async delete(req,res,next) {
    try { 
      const diaolog_delete = await dialogService.delete(); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }
    
}
 