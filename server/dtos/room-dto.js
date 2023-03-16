module.exports = class RoomDto { 
  roomId;
  typeName;
  roomName;
  creatorId;
  createdAt;
   
   
  constructor(model) {   
    this.roomId = model?.id;  
    this.typeName = model?.typeName; 
    this.roomName = model?.roomName;  
    this.creatorId = model?.creatorId;    
    this.createdAt = model?.createdAt;  
  } 
}
 