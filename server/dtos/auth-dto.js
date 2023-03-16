module.exports = class AuthDto {
  id;  
  createdAt; 
  refreshToken; 
  accessToken; 
  isActivated;   
  login; 
  password; 
   
  constructor(model) {   
    this.id = model?.id; 
    this.login = model?.login; 
    this.password = model?.password; 
    this.createdAt = model?.createdAt; 
    this.refreshToken = model?.refreshToken; 
    this.accessToken = model?.accessToken; 
    this.isActivated = model?.isActivated; 
  }
 
}
 