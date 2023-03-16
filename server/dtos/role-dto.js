module.exports = class RoleDto { 
  id;
  role;  

  constructor(model) {    
    this.id = model?.id;    
    this.role = model?.role_name;    
  } 
}
 