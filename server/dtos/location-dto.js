module.exports = class LocationDto {
  id;
  name;	 
 
  constructor(model) {   
    this.id = model?.id; 
    this.name = model?.name;   
  }
 
}
 