module.exports = class UserDto {
  id;  
  createdAt; 

  constructor(model) {   
    this.id = model?.id;  
    this.createdAt = model?.createdAt;  
  }
 
}
 