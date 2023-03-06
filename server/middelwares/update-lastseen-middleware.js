module.exports = async function (req,id,next) {
  const { Profiles } = require('../db/models');
  try {
    const profile = await Profiles.findAll({
      where: { id: id }
    })    
    if(!profile) {
      throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
    } else { 
      await profile.update({ last_seen: new Date() }, {
        where: {
          last_seen: id
        }
      });
    }
    next();
  } catch (e) {
    next(ApiErr.BadRequest(e.message));
  }
}
 
