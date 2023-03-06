module.exports = class RoleDto {
  id;
  role_name; 
  users; 

  constructor(model) {   
    this.user_id = model.id; 
    this.role_name = model.role_name; 
    this.users = model.users;  
  } 
}
 