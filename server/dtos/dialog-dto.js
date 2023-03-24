const moment = require('moment'); 
module.exports = class DialogDto {
   
  id; 
  userId; 
  roomId; 
  collaborator;  
  lastMessage; 
  status;
  createdAt;
  updatedAt; 
 
  constructor(model) {   
    this.id = model?.id; 
    this.userId = model?.userId; 
    this.roomId = model?.roomId; 
    this.collaborator = model?.collaborator; 
    this.lastMessage = model?.lastMessage; 
    this.status = model?.status; 
    this.createdAt = moment(model?.createdAt).format("YYYY-MM-DD HH:mm"); 
    this.updatedAt = moment(model?.updatedAt).format("YYYY-MM-DD HH:mm");  
  } 
}
 