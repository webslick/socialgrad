const ApiErr = require('../exeptions/api-error');
const adminService = require('../services/admin-service');
module.exports = function (err,req,res,next) {
  try {
    console.log( req.headers)
    const autorizationHeader = req.headers.authorization;
    if(!autorizationHeader) {
      return next(ApiErr.UnautorizaedError());
    }
    const accessToken = autorizationHeader.split(' ')[1];
    if(!accessToken) {
      return next(ApiErr.UnautorizaedError());
    }
    const userData = adminService.validateAccesToken(accessToken);
    if(!userData) {
      return next(ApiErr.UnautorizaedError());
    }

    req.user = userData;
    next();
  } catch (e) {
    next(ApiErr.UnautorizaedError());
  }
}