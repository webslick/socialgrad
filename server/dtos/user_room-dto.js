const moment = require('moment'); 
module.exports = class UsersRoomDto {  
  roomId;
  typeName;
  roomName;
  homeId;
  creatorId;
  createdAt;
 
  constructor(model) {   
    this.roomId = model?.roomId;  
    this.typeName = model?.typeName; 
    this.roomName = model?.roomName;  
    this.homeId = model?.homeId;  
    this.creatorId = model?.creatorId;    
    this.createdAt = moment(model?.createdAt).format("YYYY-MM-DD HH:mm");  
  } 
}
 