module.exports = class HomeDto {
  region;
  city;
  street;
  district;
  index;  
  number; 
  floors; 
  entrancesCount;  
  flatsCount;

  constructor(model) {   
    this.region = model?.region; 
    this.city = model?.city; 
    this.street = model?.street; 
    this.district = model?.district; 
    this.index = model?.index; 
    this.number = model?.number; 
    this.floors = model?.floors; 
    this.entrancesCount = model?.entrancesCount; 
    this.flatsCount = model?.flatsCount; 
  }
 
}
 