const HomeService = require('../services/home-service');  

module.exports = class HomeController  {
  io; 

  constructor(io) { 
    this.io = io; 
  }
 
  async listHomes(req,res,next) {
    try { 
      const homes_list = await HomeService.listHomes(); 
     return res.json(homes_list);
    } catch (e) {
      next(e);
    }
  }
 
  async listFlats(req,res,next) {
    try { 
      const diaolog_list = await HomeService.list();

     return res.json(diaolog_list);
    } catch (e) {
      next(e);
    }
  }
 
  async getHome(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_id = await HomeService.getHome(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }
 
  async getFlat(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_id = await HomeService.getFlat(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }

  async addHome(req,res,next) {
    try {  
      const {  
        index,  
        number, 
        floors, 
        entrancesCount,  
        flatsCount,  
        region, 
        city, 
        district,
        street  
       } = req.body;
      const home_add = await HomeService.addHome({ 
        index,  
        number, 
        floors, 
        entrancesCount,  
        flatsCount,  
        region, 
        city, 
        district,
        street  
       }); 
      return res.json(home_add);
    } catch (e) {
      next(e);
    }
  }

  async addFlat(req,res,next) {
    try {  
      const {    
        number, 
        connected, 
        startConnect,  
        stopConnect 
       } = req.body;
      const flat_add = await HomeService.addFlat({
        number, 
        connected, 
        startConnect,  
        stopConnect 
       }); 
      return res.json(flat_add);
    } catch (e) {
      next(e);
    }
  }
  
  async updateHome(req,res,next) {
    try {  
      const { id } = req.params;  
      const {  
        collaborator, 
        lastMessage,
        participantes,
        status,
        users,
        senderId,
        userId,
        numSender,
        numRecipient  
       } = req.body;   

      const dialog = await HomeService.update(id,{ 
        collaborator, 
        lastMessage,
        participantes,
        status,
        users,
        senderId,
        userId,
        numSender,
        numRecipient  
       }); 

      return res.json(dialog);
    } catch (e) {
      next(e);
    }
  }
  
  async updateFlat(req,res,next) {
    try {  
      const { id } = req.params;  
      const {  
        collaborator, 
        lastMessage,
        participantes,
        status,
        users,
        senderId,
        userId,
        numSender,
        numRecipient  
       } = req.body;   

      const dialog = await HomeService.update(id,{ 
        collaborator, 
        lastMessage,
        participantes,
        status,
        users,
        senderId,
        userId,
        numSender,
        numRecipient  
       }); 

      return res.json(dialog);
    } catch (e) {
      next(e);
    }
  }
 
  async deleteHome(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_delete = await HomeService.delete(id); 
     return res.json(diaolog_delete);
    } catch (e) {
      next(e);
    }
  }
 
  async deleteFlat(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_delete = await HomeService.delete(id); 
     return res.json(diaolog_delete);
    } catch (e) {
      next(e);
    }
  }
       



}
 