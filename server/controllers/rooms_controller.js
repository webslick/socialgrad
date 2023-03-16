const roomService = require('../services/room-service');  

module.exports = class RoomsController  {
  io; 

  constructor(io) { 
    this.io = io; 
  }
 
  async listRooms(req,res,next) {
    try { 
      const rooms_list = await roomService.list();

     return res.json(rooms_list);
    } catch (e) {
      next(e);
    }
  }
 
  async listMessages(req,res,next) {
    try { 
      const diaolog_list = await roomService.list();

     return res.json(diaolog_list);
    } catch (e) {
      next(e);
    }
  }
 
  async listDiologs(req,res,next) {
    try { 
      const diaolog_list = await roomService.list();

     return res.json(diaolog_list);
    } catch (e) {
      next(e);
    }
  }
 
  async getRoom(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_id = await roomService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }
 
  async getDialog(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_id = await roomService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }
 
  async getMessage(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_id = await roomService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }

  async addRoom(req,res,next) {
    try {   
      const { 
        typeName,
        roomName,
        creatorId 
       } = req.body;

      const room_add = await roomService.add({
        typeName,
        roomName,
        creatorId 
      }); 
      return res.json(room_add);
    } catch (e) {
      next(e);
    }
  }

  async addMessage(req,res,next) {
    try {  
      const { 
        dialogId,
        collaborator,
        userId,
        lastMessage,    
        participantes,    
        users,    
        status,    
        senderId,    
        numSender,    
        numRecipient  
       } = req.body;
      const diaolog_add = await roomService.add({
        dialogId,
        collaborator,
        userId,
        lastMessage,    
        participantes,    
        users,    
        status,    
        senderId,    
        numSender,    
        numRecipient 
       }); 
      return res.json(diaolog_add);
    } catch (e) {
      next(e);
    }
  }

  async addDialog(req,res,next) {
    try {  
      const { 
        dialogId,
        collaborator,
        userId,
        lastMessage,    
        participantes,    
        users,    
        status,    
        senderId,    
        numSender,    
        numRecipient  
       } = req.body;
      const diaolog_add = await roomService.add({
        dialogId,
        collaborator,
        userId,
        lastMessage,    
        participantes,    
        users,    
        status,    
        senderId,    
        numSender,    
        numRecipient 
       }); 
      return res.json(diaolog_add);
    } catch (e) {
      next(e);
    }
  }
  
  async updateRoom(req,res,next) {
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

      const dialog = await roomService.update(id,{ 
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
  
  async updateDialog(req,res,next) {
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

      const dialog = await roomService.update(id,{ 
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
  
  async updateMessage(req,res,next) {
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

      const dialog = await roomService.update(id,{ 
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
 
  async deleteDialog(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_delete = await roomService.delete(id); 
     return res.json(diaolog_delete);
    } catch (e) {
      next(e);
    }
  }
 
  async deleteRoom(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_delete = await roomService.delete(id); 
     return res.json(diaolog_delete);
    } catch (e) {
      next(e);
    }
  }
 
  async deleteMessage(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_delete = await roomService.delete(id); 
     return res.json(diaolog_delete);
    } catch (e) {
      next(e);
    }
  }
 
}
 