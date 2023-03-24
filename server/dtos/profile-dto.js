const moment = require('moment'); 
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
    this.birthdate = moment(model?.birthdate).format("YYYY-MM-DD HH:mm");  
    this.telephone = model?.telephone;  
    this.email = model?.email;  
    this.confirmed = model?.confirmed;  
    this.avatar = model?.avatar;  
    this.confirm_hash = model?.confirm_hash;  
    this.last_seen = moment(model?.last_seen).format("YYYY-MM-DD HH:mm");  
    this.position = model?.position;  
    this.createdAt = moment(model?.createdAt).format("YYYY-MM-DD HH:mm"); 
    this.updatedAt = moment(model?.updatedAt).format("YYYY-MM-DD HH:mm"); 
  } 
}
 