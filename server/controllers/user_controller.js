const { validationResult } = require ('express-validator');
const userService = require('../services/users-service');
const VKService = require('../services/vk-servise');
const config = require('config');
const url_client = config.get('Server.URL.CLIENT');
const  ApiErr = require('../exeptions/api-error');
const axios = require('axios');

class UserController  {
  
  async getCategoriesProducts(req,res,next) {
    try {
      const { categories } = req.body
      const productsData = await userService.getProducts(categories,res); 
      return res.json(productsData);
    } catch (e) {
      next(e)
    }
  }
  
  async registration(req,res,next) {
    try {
      const { email ,password } = req.body
      const userData = await userService.registration(email, password,res);
      res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly: true})
      return res.json(userData);
    } catch (e) {
      next(e)
    }
  }
 
  async login(req,res,next) {
    try {
      const { email ,password } = req.body; 
      const userData = await userService.login(email, password,res);
      console.log(userData,'userData')
      // res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly: true})
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async activate(req,res,next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(url_client)
    } catch (e) {
      next(e);
    }
  }

  async refresh(req,res,next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie('refreshToken',userData.refreshToken,{ maxAge:30*24*60*60*1000, httpOnly: true })
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
 
  
  async logout(req,res,next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
     return res.json(token);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();