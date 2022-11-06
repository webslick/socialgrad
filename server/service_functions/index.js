const Az = require('az');
const moment = require('moment');

async function noDubleElements(arr) {
  let arr_3 = arr.reduce((result, item) => {
    return result.includes(item) ? result : [... result, item];
}, []);
  return arr_3;
}

function onlyUnique(value, index, self) { // Оставляет уникальные слова (убирает повторы)
  return self.indexOf(value) === index;
}

function getTags(pureContent) {  // разбивает строку на слова
  const tokens = Az.Tokens(pureContent).done();
  const tags = tokens.filter(t => t.type.toString() === 'WORD')
  .map(t => t.toString().toLowerCase())
  .filter(t => t)
  .filter(onlyUnique);
  return tags;
}

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

const differentsTimeOff = (now,last) => { // разность времён
  return moment(last).diff(now);
}

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



module.exports = {
  getTime,
  searchInPosts,
  noDubleElements
} 
