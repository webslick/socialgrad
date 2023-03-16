 
const DB = require('../db/index'); 
const RegionDto = require('../dtos/region-dto');
const CityDto = require('../dtos/city-dto');
const StreetDto = require('../dtos/street-dto');
const DistrictDto = require('../dtos/district-dto'); 
const ApiErr = require('../exeptions/api-error');
const serviceFunction = require('../service_functions/index')
class LocationService {
 
  async listRegion() {
    try {
      const region_list = await DB.searchInTables('region_list'); 
     
      if(!region_list) {
        throw ApiErr.BadRequest(`Диалоги не найдены: `);
      } else {  
        const regionDtos = [];   
        region_list.map(item => {
          regionDtos.push(new RegionDto(item))
        } )   
        return { 
          allregions: regionDtos 
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
 
  async listCitys() {
    try {
      const city_list = await DB.searchInTables('city_list'); 

      if(!city_list) {
        throw ApiErr.BadRequest(`Диалоги не найдены: `);
      } else {  
        const cityDtos = [];   
        city_list.map(item => {
          cityDtos.push(new CityDto(item))
        } )   
        return { 
          allcitys: cityDtos 
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
 
  async listStreet() {
    try {
      const street_list = await DB.searchInTables('street_list'); 

      if(!street_list) {
        throw ApiErr.BadRequest(`Диалоги не найдены: `);
      } else {  
        const streetDtos = [];   
        street_list.map(item => {
          streetDtos.push(new StreetDto(item))
        } )   
        return { 
          allstreets: streetDtos 
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
 
  async listDistrict() {
    try {
      const district_list = await DB.searchInTables('district_list'); 

      if(!district_list) {
        throw ApiErr.BadRequest(`Диалоги не найдены: `);
      } else {  
        const districtDtos = [];   
        district_list.map(item => {
          districtDtos.push(new DialogDto(item))
        } )   
        return { 
          alldistricts: districtDtos 
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }

  async getRegion(id) {
    try {
      const regionId = await DB.searchInTables('regionId', id); 
      let regions = [];
      if(!regionId) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {   
        regionId.map((item) => {
          regions.push(new RegionDto(...regionId))
        })
        return {  
          regions,
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    } 
  }

  async getCity(id) {
    try {
      const cityId = await DB.searchInTables('cityId', id); 
      let citys = [];
      if(!dialogId) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {   
        cityId.map((item) => {
          citys.push(new CityDto(...cityId))
        })
        return {  
          citys,
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    } 
  }

  async getStreet(id) {
    try {
      const streetId = await DB.searchInTables('streetId', id); 
      let streets = [];
      if(!streetId) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {   
        streetId.map((item) => {
          streets.push(new StreetDto(...streetId))
        })
        return {  
          streets,
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    } 
  }

  async getDistrict(id) {
    try {
      const districtId = await DB.searchInTables('districtId', id); 
      let districts = [];
      if(!districtId) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {   
        districtId.map((item) => {
          districts.push(new DistrictDto(...districtId))
        })
        return {  
          districts,
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    } 
  }
  
  async addRegion({ name }) {
    try {
      const region_add = await DB.addInTables('region',{ name });  
 
      if(!region_add) {
        throw ApiErr.BadRequest(`Дом не создан: `);
      } else {   
        return { 
          region_add
        }
      }
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async addCity({ name }) {
    try {
      const city_add = await DB.addInTables('city',{ name });  
 
      if(!city_add) {
        throw ApiErr.BadRequest(`Дом не создан: `);
      } else {   
        return { 
          city_add
        }
      }
    } catch(e) { 
      throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async addStreet({ name }) {
    try {
      const street_add = await DB.addInTables('street',{ name });  
 
      if(!street_add) {
        throw ApiErr.BadRequest(`Дом не создан: `);
      } else {   
        return { 
          street_add
        }
      }
    } catch(e) {
      throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async addDistrict({ name }) {
    try {
      const district_add = await DB.addInTables('district',{ name });  
 
      if(!district_add) {
        throw ApiErr.BadRequest(`Дом не создан: `);
      } else {   
        return { 
          district_add
        }
      }
    } catch(e) {
      throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async updateRegion(regionId, obj) {
    try { 
      const region_update_id = await DB.searchInTables('regionId', regionId); 
      if(!region_update_id) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {    
        const regionUpdate = await DB.updateModelTables(region_update_id[0], obj);
        if(!regionUpdate) {
          throw ApiErr.BadRequest(`Ошибка обновления таблицы:`);
        } else {    
          return { 
            region: new RegionDto(regionUpdate) 
          }
        } 
      }    
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async updateCity(cityId, obj) {
    try { 
      const city_update_id = await DB.searchInTables('cityId', cityId); 
      if(!city_update_id) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {    
        const cityUpdate = await DB.updateModelTables(city_update_id[0], obj);
        if(!cityUpdate) {
          throw ApiErr.BadRequest(`Ошибка обновления таблицы:`);
        } else {    
          return { 
            city: new CityDto(cityUpdate) 
          }
        } 
      }    
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async updateStreet(streetId, obj) {
    try { 
      const street_update_id = await DB.searchInTables('streetId', streetId); 
      if(!street_update_id) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {    
        const streetUpdate = await DB.updateModelTables(street_update_id[0], obj);
        if(!streetUpdate) {
          throw ApiErr.BadRequest(`Ошибка обновления таблицы:`);
        } else {    
          return { 
            street: new StreetDto(streetUpdate) 
          }
        } 
      }    
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
  
  async updateDistrict(districtId, obj) {
    try { 
      const district_update_id = await DB.searchInTables('dialogId', districtId); 
      if(!district_update_id) {
        throw ApiErr.BadRequest(`Пользователь не найден необходимо: `);
      } else {    
        const districtUpdate = await DB.updateModelTables(district_update_id[0], obj);
        if(!districtUpdate) {
          throw ApiErr.BadRequest(`Ошибка обновления таблицы:`);
        } else {    
          return { 
            district: new DistrictDto(districtUpdate) 
          }
        } 
      }    
    } catch(e) {
       throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message)
    }

  }
 
  async deleteCity(cityId) {  
    try { 
      const city_delete_id = await DB.searchInTables('cityId', cityId);  
      if(!city_delete_id) {
        throw ApiErr.BadRequest(`Ошибка удаления диалога не существует: `);
      } else {    
        const cityDelete = await DB.removeInTables(city_delete_id[0],cityId);
        if(!cityDelete) {
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
 
  async deleteRegion(regionId) {  
    try { 
      const region_delete_id = await DB.searchInTables('regionId', regionId);  
      if(!region_delete_id) {
        throw ApiErr.BadRequest(`Ошибка удаления диалога не существует: `);
      } else {    
        const regionDelete = await DB.removeInTables(region_delete_id[0],regionId);
        if(!regionDelete) {
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
 
  async deleteStreet(streetId) {  
    try { 
      const street_delete_id = await DB.searchInTables('streetId', streetId);  
      if(!street_delete_id) {
        throw ApiErr.BadRequest(`Ошибка удаления диалога не существует: `);
      } else {    
        const streetDelete = await DB.removeInTables(street_delete_id[0],streetId);
        if(!streetDelete) {
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
 
  async deleteDistrict(districtId) {  
    try { 
      const district_delete_id = await DB.searchInTables('districtId', districtId);  
      if(!district_delete_id) {
        throw ApiErr.BadRequest(`Ошибка удаления диалога не существует: `);
      } else {    
        const districtDelete = await DB.removeInTables(district_delete_id[0],districtId);
        if(!districtDelete) {
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

module.exports = new LocationService();
