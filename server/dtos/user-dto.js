module.exports = class UserDto {
  username;
  password;
  createdAt;
  updatedAt;
  profile;
  roles;
  dialogs;
  avtor;
  partner;
  id; 

  constructor(model) {   
    this.username = model.username; 
    this.password = model.password; 
    this.createdAt = model.createdAt; 
    this.updatedAt = model.updatedAt; 
    this.profile = model.profile;  
    this.roles = [...model.roles].length === 0 ? [] : [...model.roles][0]?.role_name; 
    this.dialogs = model.dialogs;   
    this.avtor = model.avtor; 
    this.partner = model.partner; 
    this.user_id = model.id;  
  }
 
}
 