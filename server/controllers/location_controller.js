const LocationService = require('../services/location-service');  

module.exports = class LocationController  {
  io; 

  constructor(io) { 
    this.io = io; 
  }
 
  async listRegion(req,res,next) {
    try { 
      const region_list = await LocationService.listRegion();

     return res.json(region_list);
    } catch (e) {
      next(e);
    }
  }
 
  async listCitys(req,res,next) {
    try { 
      const city_list = await LocationService.listCitys();

     return res.json(city_list);
    } catch (e) {
      next(e);
    }
  }
 
  async listStreet(req,res,next) {
    try { 
      const street_list = await LocationService.listStreet();

     return res.json(street_list);
    } catch (e) {
      next(e);
    }
  }
 
  async listDistrict(req,res,next) {
    try { 
      const district_list = await LocationService.listDistrict();

     return res.json(district_list);
    } catch (e) {
      next(e);
    }
  }
 
  async getRegion(req,res,next) {
    try { 
      const { id } = req.params; 
      const region_id = await LocationService.getRegion(id); 
     return res.json(region_id);
    } catch (e) {
      next(e);
    }
  }
 
  async getCity(req,res,next) {
    try { 
      const { id } = req.params; 
      const city_id = await LocationService.getCity(id); 
     return res.json(city_id);
    } catch (e) {
      next(e);
    }
  }
 
  async getDistrict(req,res,next) {
    try { 
      const { id } = req.params; 
      const district_id = await LocationService.getDistrict(id); 
     return res.json(district_id);
    } catch (e) {
      next(e);
    }
  }
 
  async getStreet(req,res,next) {
    try { 
      const { id } = req.params; 
      const diaolog_id = await LocationService.getStreet(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }

  async addRegion(req,res,next) {
    try {  
      const { name } = req.body;
      const region_add = await LocationService.addRegion({ name }); 
      return res.json(region_add);
    } catch (e) {
      next(e);
    }
  }

  async addCity(req,res,next) {
    try {  
      const { name } = req.body;
      const city_add = await LocationService.addCity({ name }); 
      return res.json(city_add);
    } catch (e) {
      next(e);
    }
  } 

  async addDistrict(req,res,next) {
    try {  
      const { name } = req.body;
      const district_add = await LocationService.addDistrict({ name }); 
      return res.json(district_add);
    } catch (e) {
      next(e);
    }
  } 

  async addStreet(req,res,next) {
    try {  
      const { name } = req.body;
      const street_add = await LocationService.addStreet({ name }); 
      return res.json(street_add);
    } catch (e) {
      next(e);
    }
  }
  
  async updateRegion(req,res,next) {
    try {  
      const { id } = req.params;  
      const { name } = req.body;   

      const region = await LocationService.updateRegion(id,{ name }); 

      return res.json(region);
    } catch (e) {
      next(e);
    }
  }
  
  async updateCity(req,res,next) {
    try {  
      const { id } = req.params;  
      const { name } = req.body;   

      const city = await LocationService.updateCity(id,{ name }); 

      return res.json(city);
    } catch (e) {
      next(e);
    }
  }
  
  async updateStreet(req,res,next) {
    try {  
      const { id } = req.params;  
      const { name } = req.body;   

      const street = await LocationService.updateStreet(id,{ name }); 

      return res.json(street);
    } catch (e) {
      next(e);
    }
  }
  
  async updateDistrict(req,res,next) {
    try {  
      const { id } = req.params;  
      const { name } = req.body;   

      const district = await LocationService.updateDistrict(id,{ name }); 

      return res.json(district);
    } catch (e) {
      next(e);
    }
  }
 
  async deleteCity(req,res,next) {
    try { 
      const { id } = req.params; 
      const city_delete = await LocationService.deleteCity(id); 
     return res.json(city_delete);
    } catch (e) {
      next(e);
    }
  }
 
  async deleteRegion(req,res,next) {
    try { 
      const { id } = req.params; 
      const region_delete = await LocationService.deleteRegion(id); 
     return res.json(region_delete);
    } catch (e) {
      next(e);
    }
  }
 
  async deleteStreet(req,res,next) {
    try { 
      const { id } = req.params; 
      const street_delete = await LocationService.deleteStreet(id); 
     return res.json(street_delete);
    } catch (e) {
      next(e);
    }
  }
 
  async deleteDistrict(req,res,next) {
    try { 
      const { id } = req.params; 
      const district_delete = await LocationService.deleteDistrict(id); 
     return res.json(district_delete);
    } catch (e) {
      next(e);
    }
  }
     
}
 