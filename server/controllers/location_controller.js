const LocationService = require('../services/location-service');  

module.exports = class LocationController  {
  io; 
// Для работы IO необходимы СТРЕЛОЧНЫЕ функции у класса!!
  constructor(io) { 
    this.io = io; 
  }
 
  listRegion = async (req,res,next) => {
    try { 
      const region_list = await LocationService.listRegion();

     return res.json(region_list);
    } catch (e) {
      next(e);
    }
  }
 
  listCitys = async (req,res,next) => {
    try { 
      const city_list = await LocationService.listCitys();

     return res.json(city_list);
    } catch (e) {
      next(e);
    }
  }
 
  listStreet = async (req,res,next) => {
    try { 
      const street_list = await LocationService.listStreet();

     return res.json(street_list);
    } catch (e) {
      next(e);
    }
  }
 
  listDistrict = async (req,res,next) => {
    try { 
      const district_list = await LocationService.listDistrict();

     return res.json(district_list);
    } catch (e) {
      next(e);
    }
  }
 
  getRegion = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const region_id = await LocationService.getRegion(id); 
     return res.json(region_id);
    } catch (e) {
      next(e);
    }
  }
 
  getCity = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const city_id = await LocationService.getCity(id); 
     return res.json(city_id);
    } catch (e) {
      next(e);
    }
  }
 
  getDistrict = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const district_id = await LocationService.getDistrict(id); 
     return res.json(district_id);
    } catch (e) {
      next(e);
    }
  }
 
  getStreet = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const diaolog_id = await LocationService.getStreet(id); 
     return res.json(diaolog_id);
    } catch (e) {
      next(e);
    }
  }

  addRegion = async (req,res,next) => {
    try {  
      const { name } = req.body;
      const region_add = await LocationService.addRegion({ name }); 
      return res.json(region_add);
    } catch (e) {
      next(e);
    }
  }

  addCity = async (req,res,next) => {
    try {  
      const { name } = req.body;
      const city_add = await LocationService.addCity({ name }); 
      return res.json(city_add);
    } catch (e) {
      next(e);
    }
  } 

  addDistrict = async (req,res,next) => {
    try {  
      const { name } = req.body;
      const district_add = await LocationService.addDistrict({ name }); 
      return res.json(district_add);
    } catch (e) {
      next(e);
    }
  } 

  addStreet = async (req,res,next) => {
    try {  
      const { name } = req.body;
      const street_add = await LocationService.addStreet({ name }); 
      return res.json(street_add);
    } catch (e) {
      next(e);
    }
  }
  
  updateRegion = async (req,res,next) => {
    try {  
      const { id } = req.params;  
      const { name } = req.body;   

      const region = await LocationService.updateRegion(id,{ name }); 

      return res.json(region);
    } catch (e) {
      next(e);
    }
  }
  
  updateCity = async (req,res,next) => {
    try {  
      const { id } = req.params;  
      const { name } = req.body;   

      const city = await LocationService.updateCity(id,{ name }); 

      return res.json(city);
    } catch (e) {
      next(e);
    }
  }
  
  updateStreet = async (req,res,next) => {
    try {  
      const { id } = req.params;  
      const { name } = req.body;   

      const street = await LocationService.updateStreet(id,{ name }); 

      return res.json(street);
    } catch (e) {
      next(e);
    }
  }
  
  updateDistrict = async (req,res,next) => {
    try {  
      const { id } = req.params;  
      const { name } = req.body;   

      const district = await LocationService.updateDistrict(id,{ name }); 

      return res.json(district);
    } catch (e) {
      next(e);
    }
  }
 
  deleteCity = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const city_delete = await LocationService.deleteCity(id); 
     return res.json(city_delete);
    } catch (e) {
      next(e);
    }
  }
 
  deleteRegion = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const region_delete = await LocationService.deleteRegion(id); 
     return res.json(region_delete);
    } catch (e) {
      next(e);
    }
  }
 
  deleteStreet = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const street_delete = await LocationService.deleteStreet(id); 
     return res.json(street_delete);
    } catch (e) {
      next(e);
    }
  }
 
  deleteDistrict = async (req,res,next) => {
    try { 
      const { id } = req.params; 
      const district_delete = await LocationService.deleteDistrict(id); 
     return res.json(district_delete);
    } catch (e) {
      next(e);
    }
  }
     
}
 