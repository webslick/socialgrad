module.exports = class ProfileDto { 
  role; 
  name;
  lastname;
  gender;
  birthdate;
  telephone;
  email;
  confirmed;
  avatar;
  confirm_hash;
  last_seen;
  dialogId;
  collaborator;
  creator;
  lastMessage;
  role_name;
  position;
  createdAt;
  updatedAt; 

  constructor(model) {    
    this.role = model?.role;  
    this.name = model?.name;  
    this.lastname = model?.lastname;  
    this.gender = model?.gender;  
    this.birthdate = model?.birthdate;  
    this.telephone = model?.telephone;  
    this.email = model?.email;  
    this.confirmed = model?.confirmed;  
    this.avatar = model?.avatar;  
    this.confirm_hash = model?.confirm_hash;  
    this.last_seen = model?.last_seen;  
    this.position = model?.position;  
    this.createdAt = model?.createdAt; 
    this.updatedAt = model?.updatedAt; 
  } 
}
 