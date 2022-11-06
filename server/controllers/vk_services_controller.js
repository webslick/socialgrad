const VKService = require('../services/vk-servise');
const config = require('config');
const url_client = config.get('Server.URL.CLIENT');
const  ApiErr = require('../exeptions/api-error');

class VKServicesController  {
 
  async addSuggestionsFriends(req,res,next) {

    try {
      const { json, token } = req.body; 
      const responseData = await VKService.addSuggestionsFriends(json, token, res);
      return res.json(responseData.statusCode);
    } catch (e) {
      next(e);
    }
  }

  async autoResponderFriends(req,res,next) {
    try {
      const { json, token } = req.body; 
      const responseData = await VKService.autoResponderFriends(json, token, res);
      return res.json(responseData.statusCode);
    } catch (e) {
      next(e);
    }
  }

  async filterSuggestionsFriends(req,res,next) {
    try {
      const { json, token } = req.body; 
      const friendsData = await VKService.filterSuggestionsFriends(json, token, res);
      return res.json(friendsData);
    } catch (e) {
      next(e);
    }
  }

  async autoLikingFriendsOrGroups(req,res,next) {
    try {
      const { json, token } = req.body; 
      const responseData = await VKService.autoLikingFriendsOrGroups(json, token, res);
      return res.json(responseData);
    } catch (e) {
      next(e);
    }
  }

}

module.exports = new VKServicesController();