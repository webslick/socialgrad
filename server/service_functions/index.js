// const Az = require('az');
const moment = require('moment');  
const AdminDto = require('../dtos/admin-dto'); 
const GetIdLocationDto = require('../dtos/getidlocation-dto');
const HomeDto = require('../dtos/home-dto');
const LocationDto = require('../dtos/location-dto');
const ProfileDto = require('../dtos/profile-dto');
const RoleDto = require('../dtos/role-dto');
const RoomDto = require('../dtos/room-dto');  
const UsersRoomDto = require('../dtos/user_room-dto');  
const SubscribeDto = require('../dtos/subscribe-dto');
const WalletDto = require('../dtos/wallet-dto');
const AuthDto = require('../dtos/auth-dto');
const DialogDto = require('../dtos/dialog-dto');
const MessageDto = require('../dtos/messages-dto');
const ApiErr = require('../exeptions/api-error');
async function noDubleElements(arr) {
  let arr_3 = arr.reduce((result, item) => {
    return result.includes(item) ? result : [... result, item];
}, []);
  return arr_3;
}
 
// function onlyUnique(value, index, self) { // Оставляет уникальные слова (убирает повторы)
//   return self.indexOf(value) === index;
// }

// function getTags(pureContent) {  // разбивает строку на слова
//   const tokens = Az.Tokens(pureContent).done();
//   const tags = tokens.filter(t => t.type.toString() === 'WORD')
//   .map(t => t.toString().toLowerCase())
//   .filter(t => t)
//   .filter(onlyUnique);
//   return tags;
// }

function getTime (count, type) { if (type === 'm') { return count * 60000 }; if (type === 'h') { return count * 60000 * 60 } };

function isNotMatch(arr,id) { //
  let push = true;
  arr.forEach(element => {
    if(element.id === id) { push = false; }
  });
  return push;
}

const convertSeconds = (time) => { // Конвертирует секунды 
  const milliseconds = time%1000;
  const seconds     = parseInt(time=time/1000)%60;
  const minutes     = parseInt(time=time/60)%60;
  const hours       = parseInt(time=time/60)%24;
  const days        =  parseInt(time=time/24);
  return {
    seconds,
    minutes,
    hours,
    days,
  }
}

// const differentsTimeOff = (now,last) => { // разность времён
//   return moment(last).diff(now);
// }

function searchInPosts (words,content) {

  const tokens = getTags(content);
  if(Array.isArray(words)) {
    for (let index = 0; index < tokens.length; index++) {
      if(tokens[index].toString().toLowerCase() === words[0].toString().toLowerCase()) return true;
      if(tokens[index].toString().toLowerCase() === words[1].toString().toLowerCase()) return true;
    }
    return false;
  } else {
    for (let index = 0; index < tokens.length; index++) {
      if (tokens[index].toString().toLowerCase() === words.toString().toLowerCase()) {
        return true;
      }
    }
    return false;
  }
}

const getObjkey = (obj, objKey, innerKey) => {  // возвращает вложеную модель
 
  let result = false
  Object.keys(obj).map( item => {  
    if(innerKey) {
      if(item === objKey) {   
        Object.keys(obj[item]).map((item_inner_name) => {
          if(item_inner_name === innerKey) {   
            result = obj[item][item_inner_name]  
          } 
        })  
      } 
    } else {   
      if(item === objKey && obj[item] !== null && obj[item] !== undefined ) {  
        result = obj[item] 
      }
    }
  })   
  return result;
}


const removeEmpty = (obj,dto) => { //удаляет все undefined обьекты  
const ApiErr = require('../exeptions/api-error');
let objTmp = {}
  switch (dto) {
    case 'Users':
      objTmp = new AdminDto(obj)
      break;
    case 'Profiles':
      objTmp = new ProfileDto(obj)
      break;
    case 'Homes':
      objTmp = new HomeDto(obj)
      break;
    case 'Wallets': 
      objTmp = new WalletDto(obj)
      break;
    case 'Subscribes':
      objTmp = new SubscribeDto(obj)
      break;
    case 'AuthInfos':
      objTmp = new AuthDto(obj)
      break;
    case 'Roles': 
      objTmp = new RoleDto(obj)
      break;
    case 'Regions':
      objTmp = new LocationDto(obj)
      break;
    case 'Citys':
      objTmp = new LocationDto(obj)
      break;
    case 'Districts':
      objTmp = new LocationDto(obj)
      break;
    case 'Streets':
      objTmp = new LocationDto(obj)
      break;
    case 'RoomTypes':  
      objTmp = new RoomDto(obj)
      break;
    case 'UsersRooms':  
      objTmp = new UsersRoomDto(obj)
      break;
    case 'Dialogs': 
      objTmp = new DialogDto(obj)
      break;
    case 'Messages': 
      objTmp = new MessageDto(obj)
      break;
  
    default:
      break;
  }
 
  let newObj = {};

  Object.keys(objTmp).forEach((key) => {  
    if (objTmp[key] === Object(objTmp[key])) newObj[key] = removeEmpty(objTmp[key]);
    else if (objTmp[key] !== undefined) newObj[key] = objTmp[key];
  }); 
  return newObj;
};

const createLocationIfNot = async (objModel,item) => { 

  const model = await objModel.findAll({ where: { name: item }, attributes: [ "id" ] });

  if(model.length == 0) {  
    if (!model) {  throw ApiErr.BadRequest(e.parent ? e.parent.sqlMessage : e.message) } 
    return new GetIdLocationDto(await objModel.create({ name: item })).id 
  } else {  return new GetIdLocationDto(model[0]).id }
};
 
module.exports = {
  getTime,
  getObjkey,
  removeEmpty,
  searchInPosts,
  noDubleElements,
  createLocationIfNot
} 
