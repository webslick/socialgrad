const moment = require('moment'); 
module.exports = class MessageDto {
   
  id; 
  userId; 
  dialogId; 
  text; 
  type; 
  filename; 
  readed; 
  roomId; 
  createdAt; 
  updatedAt; 
    
  constructor(model) {   
    this.id = model?.id; 
    this.userId = model?.userId; 
    this.dialogId = model?.dialogId; 
    this.roomId = model?.roomId; 
    this.text = model?.text; 
    this.type = model?.type; 
    this.filename = model?.filename; 
    this.readed = model?.readed; 
    this.createdAt = moment(model?.createdAt).format("YYYY-MM-DD HH:mm"); 
    this.updatedAt = moment(model?.updatedAt).format("YYYY-MM-DD HH:mm");  
  } 
}
 