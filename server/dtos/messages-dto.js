module.exports = class UserDto {
  id;
  messages_id;		
  createdAt;
  updatedAt; 
  text;
  read;
 
  constructor(model) {   
    this.id = model.id; 
    this.messages_id = model.messages_id; 
    this.text = model.text; 
    this.createdAt = model.createdAt; 
    this.updatedAt = model.updatedAt; 
    this.read = model.read;   
  }
 
}
 