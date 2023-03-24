const AdminService = require('../services/admin-service');  
// Для работы IO необходимы СТРЕЛОЧНЫЕ функции у класса!!
module.exports = class AdminController  {
  io; 

  constructor(io) { 
    this.io = io; 
  }
 
   
  registration = async (req,res,next) => {
    try {
      const {
        login, 
        password , 
        name, 
        lastname, 
        gender, 
        email, 
        region, 
        city, 
        district, 
        street, 
        number 
      } = req.body 
    
      const userData = await AdminService.registration(login, password , name, lastname, gender, email, region, city, district, street, number );
 
      return res.json(userData);
    } catch (e) {
      next(e)
    }
  }
 
  listUsers = async (req,res,next) => {
    try { 
      const user_list = await AdminService.listUsers();

     return res.json(user_list);
    } catch (e) {
      next(e);
    }
  }
 
  getUser = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const diaolog_id = await AdminService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }
   
  getAuthinfo = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const diaolog_id = await AdminService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }
 
  getSubscribe = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const diaolog_id = await AdminService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }
 
  getWallet = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const diaolog_id = await AdminService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }

  addUser = async (req,res,next) => {
    try {  
      const { 
        login,
        password,  
        refreshToken,  
        isActivated,  
        balance, 	 
        startSub,
        active,   
        name,  
        lastname,  
        birthdate,
        gender, 
        email,  
        telephone,  
        avatar,  
        last_seen,
        index,  
        number, 
        floors, 
        entrancesCount,  
        flatsCount,  
        region, 
        city, 
        district,
        street,
        role 
       } = req.body;
      const diaolog_add = await AdminService.add({
        login,
        password,  
        refreshToken,  
        isActivated,  
        balance, 	 
        startSub,
        active,   
        name,  
        lastname,  
        birthdate,
        gender, 
        email,  
        telephone,  
        avatar,  
        last_seen,
        index,  
        number, 
        floors, 
        entrancesCount,  
        flatsCount,  
        region, 
        city, 
        district,
        street,
        role   
       }); 
      return res.json(diaolog_add);
    } catch (e) {
      next(e);
    }
  }
  
  updateUser = async (req,res,next) => {
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

      const dialog = await AdminService.update(id,{ 
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
  
  updateSubscribe = async (req,res,next) => {
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

      const dialog = await AdminService.update(id,{ 
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
  
  updateReferalinfo = async (req,res,next) => {
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

      const dialog = await AdminService.update(id,{ 
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
  
  updateAuthinfo = async (req,res,next) => {
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

      const dialog = await AdminService.update(id,{ 
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
  
  updateWallet = async (req,res,next) => {
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

      const dialog = await AdminService.update(id,{ 
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
 
  deleteUser = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const diaolog_delete = await AdminService.delete(id); 
     return res.json(diaolog_delete);
    } catch (e) {
      next(e);
    }
  }
   
}
 