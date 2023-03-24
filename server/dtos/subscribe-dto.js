const moment = require('moment'); 
module.exports = class SubscribeDto {
  startSub;
  finishSub;  
  active;     

  constructor(model) {   
    this.startSub = moment(model?.startSub).format("YYYY-MM-DD HH:mm"); 
    this.finishSub = moment(model?.finishSub).format("YYYY-MM-DD HH:mm");    
    this.active = model?.active;        
  } 
}
