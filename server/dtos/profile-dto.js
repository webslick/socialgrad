module.exports = class RoleDto { 
  user_id;
  fio;
  birthdate;
  gender;
  email;
  confirmed;
  avatar;
  confirm_hash;
  last_seen;
  createdAt;
  updatedAt;
  users;

  constructor(model) {   
    this.user_id = model.user_id; 
    this.fio = model.fio; 
    this.birthdate = model.birthdate;  
    this.gender = model.gender; 
    this.email = model.email; 
    this.confirmed = model.confirmed;  
    this.avatar = model.avatar; 
    this.confirm_hash = model.confirm_hash; 
    this.createdAt = model.createdAt;  
    this.updatedAt = model.updatedAt; 
    this.users = model.users; 
    this.last_seen = model.last_seen;  
  } 
}
 