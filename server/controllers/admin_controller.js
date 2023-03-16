const AdminService = require('../services/admin-service');  

module.exports = class AdminController  {
  io; 

  constructor(io) { 
    this.io = io; 
  }
 
   
  async registration(req,res,next) {
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
    
      const userData = await AdminService.registration(login, password , name, lastname, gender, email, region, city, district, street, number , req.cookies);
      // res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly: true})
      return res.json(userData);
    } catch (e) {
      next(e)
    }
  }



  async listUsers(req,res,next) {
    try { 
      const user_list = await AdminService.listUsers();

     return res.json(user_list);
    } catch (e) {
      next(e);
    }
  }
 
  async getUser(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_id = await AdminService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }
   
  async getAuthinfo(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_id = await AdminService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }
 
  async getSubscribe(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_id = await AdminService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }
 
  async getWallet(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_id = await AdminService.getById(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }

  async addUser(req,res,next) {
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
  
  async updateUser(req,res,next) {
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
  
  async updateSubscribe(req,res,next) {
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
  
  async updateReferalinfo(req,res,next) {
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
  
  async updateAuthinfo(req,res,next) {
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
  
  async updateWallet(req,res,next) {
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
 
  async deleteUser(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_delete = await AdminService.delete(id); 
     return res.json(diaolog_delete);
    } catch (e) {
      next(e);
    }
  }
   
}
 