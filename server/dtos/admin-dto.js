const moment = require('moment'); 
module.exports = class AdminDto {
   
  login;
  password;  
  name;  
  lastname;  
  gender; 
  email;  
  region; 
  city; 
  district;
  street;
  number; 
  refreshToken;  
  isActivated;  
  balance; 	 
  startSub;
  active;   
  birthdate;
  telephone;  
  avatar;  
  last_seen;
  index;  
  floors; 
  entrancesCount;  
  flatsCount;  
  role; 
  id;
 
  constructor(model) {   
    this.id = model?.id; 
    this.login = model?.login; 
    this.password = model?.password; 
    this.name = model?.name; 
    this.lastname = model?.lastname; 
    this.gender = model?.gender; 
    this.email = model?.email; 
    this.region = model?.region; 
    this.city = model?.city; 
    this.district = model?.district; 
    this.street = model?.street; 
    this.number = model?.number;
    this.refreshToken = model?.refreshToken;  
    this.isActivated = model?.isActivated;  
    this.balance = model?.balance; 	 
    this.startSub = moment(model?.startSub).format("YYYY-MM-DD HH:mm");
    this.active = model?.active;   
    this.birthdate = moment(model?.birthdate).format("YYYY-MM-DD HH:mm");
    this.telephone = model?.telephone;  
    this.avatar = model?.avatar;  
    this.last_seen = moment(model?.last_seen).format("YYYY-MM-DD HH:mm");
    this.index = model?.index;  
    this.floors = model?.floors; 
    this.entrancesCount = model?.entrancesCount;  
    this.flatsCount = model?.flatsCount;  
    this.role = model?.role;     
  } 
}
 