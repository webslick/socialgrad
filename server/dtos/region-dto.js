module.exports = class RegionDto {
  name;  

  constructor(model) {   
    this.name = model?.name;     
  } 
}
 