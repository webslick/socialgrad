module.exports = class DialogDto { 
  dialog_id;
  partner;
  avtor;
  lastMessage; 
  messages; 
  
  constructor(model) {   
    this.dialog_id = model.dialog_id; 
    this.partner = model.partner; 
    this.avtor = model.avtor;  
    this.messages = model.messages;  
    this.lastMessage = model.lastMessage;  
  } 
}
 