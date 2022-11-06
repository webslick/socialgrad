const jwt = require('jsonwebtoken');
const config = require('config');
const keys_access = config.get('Server.KEYS.JWT_SECRET_KEY_ACCESS');
const keys_refresh = config.get('Server.KEYS.JWT_SECRET_KEY_REFRESH');
const DB = require('../db/index');
const ApiErr = require('../exeptions/api-error');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, keys_access,{expiresIn: '30m'})
    const refreshToken = jwt.sign(payload, keys_refresh,{expiresIn: '30d'})
    return {
      accessToken,
      refreshToken
    }
  } 


  validateAccesToken(token) {
    try {
      const userData = jwt.verify(token,keys_access);
      return userData;
    } catch(e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token,keys_refresh);
      return userData;
    } catch(e) {
      return null;
    }
  }

  async saveToken(userId,refreshToken) {
    const tokens = await DB.searchInTables('tokens',{ userId });
    tokens ? await DB.updateModelTables(tokens,{ refreshToken }) : await DB.addInTables('tokens',{ userId, refreshToken });
  }

  async removeToken(refreshToken) {
    const tokenData = await DB.searchInTables('tokens',{ refreshToken });
    await DB.removeInTables(tokenData,refreshToken);
  }
}

module.exports = new TokenService();