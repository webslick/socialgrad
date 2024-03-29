const userService = require('../services/users-service');  
// Для работы IO необходимы СТРЕЛОЧНЫЕ функции у класса!!
module.exports = class UserController  { 
  
  constructor(io) { 
    this.io = io; 
  }
 
  listUsers = async (req,res,next) => {   
    try { 
     const users = await userService.listUsers(); 
    return res.json(users);
  } catch (e) {
    next(e);
  } 
  }
 
  getById = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const users = await userService.getById(id); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  add = async (req,res,next) => {
    try { 
      const { 
        user_id, 
        // login,  
        // password,  
        // region,
        // city,
        // street,
        // number,
        // startSub, 
        // finishSub,
        // balance,
        // flat,
        // active
       } = req.body; 

      const users = await userService.add({  
        user_id, 
        // login,  
        // password,  
        // region,
        // city,
        // street,
        // number,
        // startSub, 
        // finishSub,
        // balance,
        // flat,
        // active
       }); 
      // const { 
      //   password,
      //   login,
      //   name,
      //   lastname,
      //   gender,
      //   birthdate,
      //   telephone,
      //   email,
      //   confirmed,
      //   avatar,
      //   confirm_hash,
      //   last_seen,  
      //   role_name,
      //   position,
      //   numTasks,
      //   munMessages 
      //  } = req.body; 

      // const users = await userService.add({  
      //   password,
      //   login,
      //   name,
      //   lastname,
      //   gender,
      //   birthdate,
      //   telephone,
      //   email,
      //   confirmed,
      //   avatar,
      //   confirm_hash,
      //   last_seen,  
      //   role_name,
      //   position,
      //   numTasks,
      //   munMessages 
      //  }); 
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
  
  update = async (req,res,next) => {
    try {  
      const { id } = req.params;  
      const { 
        password,
        login,
        name,
        lastname,
        gender,
        birthdate,
        telephone,
        email,
        confirmed,
        avatar,
        confirm_hash,
        last_seen,
        dialogId,
        collaborator,
        creator,
        lastMessage,
        role_name,
        position
       } = req.body;   

      const users = await userService.update(id,{ 
        password,
        login,
        name,
        lastname,
        gender,
        birthdate,
        telephone,
        email,
        confirmed,
        avatar,
        confirm_hash,
        last_seen,
        dialogId,
        collaborator,
        creator,
        lastMessage,
        role_name,
        position
       }); 

      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
 
  delete = async (req,res,next) => {
    try { 
      const { id } = req.params;    
      const users = await userService.delete(id); 
     return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  getMe = async (req,res,next) => { 
    try { 
 
      const { refreshToken } = req.cookies;  
      const userData = await userService.getMe(refreshToken);  
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
   
  registration = async (req,res,next) => {
    try {
      const { email ,password } = req.body 
      const userData = await userService.registration(email, password, req.cookies);
      // res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly: true})
      return res.json(userData);
    } catch (e) {
      next(e)
    }
  }
    
  login = async (req,res,next) => { 
    try {
      const { login ,password } = req.body;
      const userData = await userService.login(login, password,req.cookies); 
      res.cookie('refreshToken',userData.user.refreshToken,{ maxAge:30*24*60*60*1000, httpOnly: true })
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  } 
  
  refresh = async (req,res,next) => {  
    try {
      const { refreshToken } = req.cookies;  
      const userData = await userService.refresh(refreshToken);  
      res.cookie('refreshToken',userData.user.refreshToken,{ maxAge:30*24*60*60*1000, httpOnly: true })
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  logout = async (req,res,next) => {  
    try {
      const { refreshToken } = req.cookies;  
      const userData = await userService.logout(refreshToken);  
      res.clearCookie("refreshToken"); 
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
 
} 