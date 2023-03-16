 
const DB = require('../db/index'); 
const HomeDto = require('../dtos/home-dto');
const CityDto = require('../dtos/city-dto');
const RegionDto = require('../dtos/region-dto');
const DistrictDto = require('../dtos/district-dto');
const StreetDto = require('../dtos/street-dto');
const ApiErr = require('../exeptions/api-error');
const serviceFunction = require('../service_functions/index')


class HomeService {
 
  async listHomes() {
    try {
      const homes_list = await DB.searchInTables('homes_list'); 

      if(!homes_list) {
        throw ApiErr.BadRequest(`Диалоги не найдены: `);
      } else {    

        let resultat = [];
        let Home = {};  
        let City = { city: null };  
        let Region = { region: null };  
        let District = { district: null };  
        let Street = { street: null };   
        let resultDto = {};  

        homes_list.map(item_home => {   
          Home = serviceFunction.removeEmpty(new HomeDto(item_home));  
    
          City.city = serviceFunction.removeEmpty(new CityDto(item_home.Citys)).name;  
          Region.region = serviceFunction.removeEmpty(new RegionDto(item_home.Regions)).name;  
          District.district = serviceFunction.removeEmpty(new DistrictDto(item_home.Districts)).name; 
          Street.street = serviceFunction.removeEmpty(new StreetDto(item_home.Streets)).name;  

          resultDto = Object.assign(Home, City, Region, District, Street); 

          resultat.push(resultDto);    
        })   

        return { 
          allhomes: resultat 
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
 
  async listFlats() {
    try {
      const dialog_list = await DB.searchInTables('dialog_list'); 

      if(!dialog_list) {
        throw ApiErr.BadRequest(`Диалоги не найдены: `);
      } else {  
        const dialogsDtos = [];   
        dialog_list.map(item => {
          dialogsDtos.push(new DialogDto(item))
        } )   
        return { 
          alldialogs: dialogsDtos 
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }

  async getHome(id) {
    try {
      const dialogId = await DB.searchInTables('dialogId', id); 
      let dialogs = [];
      if(!dialogId) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {   
        dialogId.map((item) => {
          dialogs.push(new DialogDto(...dialogId))
        })
        return { 
          userId: Number(id),
          dialogs,
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    } 
  }

  async getFlat(id) {
    try {
      const dialogId = await DB.searchInTables('dialogId', id); 
      let dialogs = [];
      if(!dialogId) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {   
        dialogId.map((item) => {
          dialogs.push(new DialogDto(...dialogId))
        })
        return { 
          userId: Number(id),
          dialogs,
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    } 
  }
  
  async addHome({  
    index,  
    number, 
    floors, 
    entrancesCount,  
    flatsCount,  
    region, 
    city, 
    district,
    street  
   }) {
    try {
      const home_add = await DB.addInTables('home',{  
        index,  
        number, 
        floors, 
        entrancesCount,  
        flatsCount,  
        region, 
        city, 
        district,
        street  
       });  
 
      if(!home_add) {
        throw ApiErr.BadRequest(`Дом не создан: `);
      } else {   
        return { 
          home_add
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async addFlat({ 
    number, 
    connected, 
    startConnect,  
    stopConnect 
   }) {
    try {
      const home_add = await DB.addInTables('flat',{ 
        number, 
        connected, 
        startConnect,  
        stopConnect 
       });  
 
      if(!home_add) {
        throw ApiErr.BadRequest(`Дом не создан: `);
      } else {   
        return { 
          home_add
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async update(dialogId, obj) {
    try {
      // const {
        // collaborator, 
        // lastMessage,
        // participantes,
        // status,
        // users,
        // senderId,
        // userId,
        // numSender,
        // numRecipient 
      // } = obj 
      const dialog_update_id = await DB.searchInTables('dialogId', dialogId); 
      if(!dialog_update_id) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {    
        const dialogUpdate = await DB.updateModelTables(dialog_update_id[0], obj);
        if(!dialogUpdate) {
          throw ApiErr.BadRequest(`Ошибка обновления таблицы:`);
        } else {    
          return { 
            dialog: new DialogDto(dialogUpdate) 
          }
        } 
      }    
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
 
  async delete(dialogId) {  
    try { 
      const dialog_delete_id = await DB.searchInTables('dialogId', dialogId);  
      if(!dialog_delete_id) {
        throw ApiErr.BadRequest(`Ошибка удаления диалога не существует: `);
      } else {    
        const dialogDelete = await DB.removeInTables(dialog_delete_id[0],dialogId);
        if(!dialogDelete) {
          throw ApiErr.BadRequest(`Ошибка удаления таблицы:`);
        } else {    
          return { 
            success: true,
            message: `Диалог успешно удален!` 
          }
        } 
      }  
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }  
  } 
}

module.exports = new HomeService();
