const DB = require('../db/index');
const ApiErr = require('../exeptions/api-error');
const api = require('../http/index');

const UserDto = require('../dtos/user-dto');

class VKService {

  async registration_accounts (type_network, user_id, body, res) {
    try {
      const condidate = await DB.searchInTables(type_network,{ id: user_id });
      let temp_acc_parse = JSON.parse(condidate.dataValues.accounts);
      console.log(temp_acc_parse,'temp_acc_parse')
      console.log(body,'body')
      temp_acc_parse.push(body);
      const response = await DB.updateModelTables(condidate,{ accounts: JSON.stringify(temp_acc_parse)});
      return response;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }

  async save_accounts ( body ) {
    const { user_id, accounts } = body;
    try {
      const condidate = await DB.searchInTables('vk',{ id: user_id });
      const response = await DB.updateModelTables(condidate,{ accounts: JSON.stringify(accounts)});
      return response;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }

  async deleted_accounts ( body ) {
    const { user_id, accounts } = body;
    try {
      const condidate = await DB.searchInTables('vk',{ id: user_id });
      const response = await DB.updateModelTables(condidate,{accounts: JSON.stringify(accounts)});
      return response;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }

  async filterSuggestionsFriends (json, token, res) {
    const { count, suggestFriendsFilterType } = json;
    try {
      const friends = await api.post('/filterSuggestionsFriends',{ count, suggestFriendsFilterType }, { token });
      return friends.data;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }

  async addSuggestionsFriends (json, token, res) {
    const {
      acсountToken,
      delay,
      requestCount,
      welcomeMessage,
      setLikeToWall,
      setLikeToProfilePhoto
    } = json;
    try {
      const response = await api.post('/addSuggestionsFriends',
      {
        acсountToken,
        delay,
        requestCount,
        welcomeMessage,
        setLikeToWall,
        setLikeToProfilePhoto
      },
      { token });
      console.log(response.status,'response!@!')
      return response.status;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }

  async autoResponderFriends (json, token, res) {
    const {
      acountToken,
      delay,
      autoResponderEventType,
      welcomeCount,
      messageSettings,
      photoOrVideoSettings,
      audioSettings,
      userNamesOrIds,
      groupNamesOrIds,
      addToFriends,
      setLikeToWall,
      setLikeToProfile
    } = json;
    try {
      const response = await api.post('/autoResponderFriends',
      {
        acountToken,
        delay,
        autoResponderEventType,
        welcomeCount,
        messageSettings,
        photoOrVideoSettings,
        audioSettings,
        userNamesOrIds,
        groupNamesOrIds,
        addToFriends,
        setLikeToWall,
        setLikeToProfile 
      }, { token });
      return response;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }

  async autoLikingFriendsOrGroups (json, token, res) {
    const {
      acountToken,
      delay,
      requestCount,
      userIds,
      groupIds,
      setLikeToWall,
      setLikeToProfilePhoto
    } = json;
    try {
      const response = await api.post('/autoLikingFriendsOrGroups',
      { 
        acountToken,
        delay,
        requestCount,
        userIds,
        groupIds,
        setLikeToWall,
        setLikeToProfilePhoto 
      }, { token });
      console.log(response);
      return response.status;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }
}

module.exports = new VKService();
