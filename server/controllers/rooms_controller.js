const roomService = require('../services/room-service');  
const { nanoid } = require('nanoid');
// Для работы IO необходимы СТРЕЛОЧНЫЕ функции у класса!!
module.exports = class RoomsController  {
  io; 

  constructor(io) { 
    this.io = io; 
  }
 
  listRooms = async (req,res,next) => {
    try { 
      const rooms_list = await roomService.list();

     return res.json(rooms_list);
    } catch (e) {
      next(e);
    }
  }
 
  listMessagesRoom = async (req,res,next) => {
    const { roomId } = req.params; 
    try { 
 
      const messages_list = await roomService.getMessageRoom(roomId);

     return res.json(messages_list);
    } catch (e) {
      next(e);
    }
  }
 
  listDiologsRoom = async (req,res,next) => {
    const { userId } = req.params; 
    try { 
      const diaolog_list = await roomService.listDiologsRoom(userId); 
      return res.json(diaolog_list);
    } catch (e) {
      next(e);
    }
  }
 
  getRoom = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const diaolog_id = await roomService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }
 
  getDialog = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const diaolog_id = await roomService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }
 
  getMessage = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const diaolog_id = await roomService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }

  addRoom = async (req,res,next) => {
    try {   
      const {  
        city, 
        street, 
        number, 
        roomName  
       } = req.body; 
       
      const room_add = await roomService.addRoom({
        id: nanoid(5),
        city, 
        street, 
        number, 
        roomName, 
        typeName: "joint",
        creatorId: 0 
      }); 
      return res.json(room_add);
    } catch (e) {
      next(e);
    }
  }

  joinRoom = async (req,res,next) => {
    try {   
      const { 
        userId, 
        roomId 
       } = req.body;

      const joinRoom = await roomService.joinRoom({
        userId, 
        roomId 
      }); 
      return res.json(joinRoom);
    } catch (e) {
      next(e);
    }
  }

  addMessageRoom = async (req,res,next) => {
    try {  
      const { 
        userId, 
        dialogId, 
        roomId, 
        text, 
        type, 
        filename, 
        readed  
       } = req.body; 
      const messages_add = await roomService.addMessageRoom({
        userId, 
        dialogId, 
        roomId, 
        text, 
        type, 
        filename, 
        readed  
       }); 
  
       this.io.to(roomId).emit('SERVER: MESSAGES_ACCEPT', 'SUCCESS'); 
      return res.json(messages_add);
    } catch (e) {
      next(e);
    }
  }

  addDialog = async (req,res,next) => {
    try {  
      const {  
        userId, 
        roomId, 
        collaborator,  
        lastMessage, 
        status
       } = req.body; 
      const diaolog_add = await roomService.addDialog({ 
        userId, 
        roomId, 
        collaborator,  
        lastMessage, 
        status
       }); 
      return res.json(diaolog_add);
    } catch (e) {
      next(e);
    }
  }
  
  updateRoom = async (req,res,next) => {
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
  
  updateDialog = async (req,res,next) => {
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
  
  updateMessage = async (req,res,next) => {
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
 
  deleteDialog = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const diaolog_delete = await roomService.delete(id); 
     return res.json(diaolog_delete);
    } catch (e) {
      next(e);
    }
  }
 
  liaveRoom = async (req,res,next) => {
    try { 
      const { roomId, userId } = req.body; 
      const room_liave = await roomService.liaveRoom({ roomId, userId }); 
      console.log(room_liave);
     return res.json(room_liave);
    } catch (e) {
      next(e);
    }
  }
 
  deleteRoom = async (req,res,next) => {
    try { 
      const { roomId } = req.body; 
      const room_deleted = await roomService.deleteRoom({ roomId }); 
      console.log(room_deleted);
     return res.json(room_deleted);
    } catch (e) {
      next(e);
    }
  }
 
  deleteMessage = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const diaolog_delete = await roomService.delete(id); 
     return res.json(diaolog_delete);
    } catch (e) {
      next(e);
    }
  }
 
}
 