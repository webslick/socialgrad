module.exports = class SubscribeDto {
  startSub;
  finishSub;  
  active;     

  constructor(model) {   
    this.startSub = model?.startSub; 
    this.finishSub = model?.finishSub;    
    this.active = model?.active;        
  } 
}
