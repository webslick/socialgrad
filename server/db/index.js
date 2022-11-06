const { Users, Tokens, VKs, TG, INST } = require('../db/models');
const db = require('./models/index')

const ApiErr = require('../exeptions/api-error');

class DB {

  async addInTables(table,obj) {
// console.log( JSON.stringify(obj),typeof(JSON.stringify(obj)))

      switch (table) {
        case 'users':
          const user = await Users.create(obj); 
          if (!user) {
            throw ApiErr.BadRequest(e.message)
          }
          return user; 
        case 'tokens':
          const token = await Tokens.create(obj);
          if (!token) {
            throw ApiErr.BadRequest(e.message)
          }
          break;  
        default:
          break;
      }
  }
  
  async removeInTables(model,obj) {
    const mod = await model.destroy({
      where: {
        refreshToken: obj
      }
    });
    return mod;
  }

  async searchInTables(table,key) {
    switch (table) {
      case 'users':
        const user = await Users.findOne({ where: key }); 
        return user;
      case 'tokens':
        const token = await Tokens.findOne({ where: key });
        return token; 
      default:
        break;
    }

  }

  async updateModelTables(model,obj) {
    const mod = await model.update(obj);
    return mod;
  }

  async resetIncrementTables() {
    await db.sequelize.query("ALTER TABLE Users AUTO_INCREMENT = 0;");
    await db.sequelize.query("ALTER TABLE Tokens AUTO_INCREMENT = 0;"); 
    await db.sequelize.query("ALTER TABLE Users AUTO_INCREMENT = 1;");
    await db.sequelize.query("ALTER TABLE Tokens AUTO_INCREMENT = 1;"); 
    await db.sequelize.query("ALTER TABLE Users AUTO_INCREMENT = 0;");
    await db.sequelize.query("ALTER TABLE Tokens AUTO_INCREMENT = 0;"); 
  }

}

module.exports = new DB();





// $2b$04$IDIODeV2jKOVRpABf2LV6OoyCBLXN3miZeSggQp4VY8126LuK428a eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwidXNlcklkIjoxLCJpc0FjdGl2YXRlZCI6dHJ1ZSwicm9sZSI6InVzZXIiLCJpYXQiOjE2NTEyNDIxMjEsImV4cCI6MTY1MzgzNDEyMX0.OSUTp8l6WM6VoNgB9_4rnomW8S8x5yHuG7S8dKGHFWc



