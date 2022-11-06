import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainTitle from '../../MainTitle';
import CountInput from '../../CountInput';
import TitleComponent from '../../TitleComponent';
import AccountSettingsCopy from '../../AccountSettingsCopy';
import TimeSetComponent from '../../TimeSetComponent';
import AddingComponent from '../../AddingComponent';
import CheckComponent from '../../CheckComponent';
import RadialBtnsComponent from '../../RadialBtnsComponent';
import RandomizeComponentArea from '../../RandomizeComponentArea';
import InputFile from '../../InputFile';
import { appPutAccountsVK } from '../../../../redux/actions/api_vk';
import { 
  incoming_friends_settings_addingMessages,
  incoming_friends_settings_audioFilesPath,
  incoming_friends_settings_conversationTypeEvent,
  incoming_friends_settings_delay,
  incoming_friends_settings_setLikeToProfile,
  incoming_friends_settings_setLikeToWall,
  incoming_friends_settings_photoFilesPath,
  incoming_friends_settings_welcomeCount 
} from '../../../../redux/actions/incoming_friends_settings';
import { 
  uploadeActionSave
} from '../../../../redux/actions/confirm_friends';
import images  from '../../../../assets/images';
import { incoming_friends_settings } from '../../../../redux/selectors';

import './style.css';
async function onSave( welcomeCount, conversationTypeEvent, delay, setLikeToProfile, setLikeToWall, addToFriends, addingMessages, photoFilesPath, audioFilesPath, accounts, id_acc, task_id, dispatch, onClose ) {
 
    if (photoFilesPath.length !== 0) {
      let formDataImg = new FormData();
      formDataImg.append('imageFile', photoFilesPath);
      await uploadeActionSave(formDataImg);
    }
  
    if (audioFilesPath.length !== 0)  {
      let formDataAudio = new FormData();
      formDataAudio.append('audioFile', audioFilesPath);
      await uploadeActionSave(formDataAudio);
    }
    
  accounts[id_acc].task_settings.tasks[task_id-1].welcomeCount = welcomeCount;
  accounts[id_acc].task_settings.tasks[task_id-1].delay = delay;
  accounts[id_acc].task_settings.tasks[task_id-1].messageSettings.conversationTypeEvent = conversationTypeEvent + 1;
  accounts[id_acc].task_settings.tasks[task_id-1].setLikeToWall = setLikeToWall;
  accounts[id_acc].task_settings.tasks[task_id-1].setLikeToProfile = setLikeToProfile;
  accounts[id_acc].task_settings.tasks[task_id-1].addToFriends = addToFriends;


  if (photoFilesPath.length !== 0) {
    let extention = '';
  
    switch (photoFilesPath.type) {
      case 'image/jpeg':
        extention = 'upload_file.jpeg' 
         break;
       case 'image/jpg':
        extention = 'upload_file.jpg'
         break;
       case 'image/png':
        extention = 'upload_file.png'
        break;
      default:
        break;
    }
 
    accounts[id_acc].task_settings.tasks[task_id-1].photoOrVideoSettings.photoFilesPath = `/home/inbox/webapps/botinviter.ru/server/uploads/images/${extention}` ;
  }

  if (audioFilesPath.length !== 0)  {
    accounts[id_acc].task_settings.tasks[task_id-1].audioSettings.audioFilesPath = `/home/inbox/webapps/botinviter.ru/server/uploads/audio/upload_file.mp3`;
  }

 
  if(addingMessages.on.check && addingMessages.text_areas.length !== 0 && !addingMessages.random.check) {
    for (let idx = 0; idx < addingMessages.text_areas.length; idx++) {
        if(addingMessages.text_areas[idx].check) {
          accounts[id_acc].task_settings.tasks[task_id-1].messageSettings.textMessages = [addingMessages.text_areas[idx].text];
          break ;
        }  
    }
  } else if(addingMessages.on.check && addingMessages.text_areas.length !== 0 && addingMessages.random.check) {
    let arr = [];
    for (let idx = 0; idx < addingMessages.text_areas.length; idx++) {
      if(addingMessages.text_areas[idx].check) {
        arr.push(addingMessages.text_areas[idx].text); 
      }  
    }
    let ran =  Math.floor(Math.random() * (arr.length - 0 + 1) ) + 0;
      if(ran === 0) { ran = 1 }
    accounts[id_acc].task_settings.tasks[task_id-1].messageSettings.textMessages = arr[ran-1];
  }
  dispatch(appPutAccountsVK(accounts));
  onClose(false);

}

export default function AnswerInFriendsSettingsPage (props) {
 
  const { accounts, id_acc, onClose, task_id,titleTask } = props; 

  const dispatch = useDispatch(); 

  const welcomeCount = useSelector(incoming_friends_settings.welcomeCount);
  const messageSettings = useSelector(incoming_friends_settings.messageSettings);
  const delay = useSelector(incoming_friends_settings.delay);
  const setLikeToProfile = useSelector(incoming_friends_settings.setLikeToProfile);
  const setLikeToWall = useSelector(incoming_friends_settings.setLikeToWall);
  const addingMessages = useSelector(incoming_friends_settings.addingMessages);
  const addToFriends = useSelector(incoming_friends_settings.addToFriends);
  const photoOrVideoSettings = useSelector(incoming_friends_settings.photoOrVideoSettings);
  const audioSettings = useSelector(incoming_friends_settings.audioSettings);

  const account = accounts[id_acc];
  const { conversationTypeEvent } = messageSettings;
  const { download } = images;
  const { photoFilesPath } = photoOrVideoSettings;
  const { audioFilesPath } = audioSettings;
  let counts = 0;

  addingMessages.text_areas.map(item => item.check ? counts++ : false)

  return (
    <div className="shedule_settings_page_wrapper" >
      <MainTitle title_acc={titleTask} text="Настройка задания:" />
      <MainTitle title_acc={`${account.main_settings.name}`} text="Аккаунт:" />
      <CountInput count={welcomeCount} setCount={(count) => {dispatch(incoming_friends_settings_welcomeCount(count))}} title="Количество входящих друзей"/>
      <TimeSetComponent delay={delay} title="Случайная задержка между действиями (от : до) секунды" onChange={(del) => {dispatch(incoming_friends_settings_delay(del))}} />
      <TitleComponent title="Ставить лайк на стену"/>
      <CheckComponent 
        check_item={[setLikeToWall]} 
        Switching={
          check => { 
            dispatch(incoming_friends_settings_setLikeToWall({ ...setLikeToWall, check: check[0].check})) 
          }} 
      />
      <TitleComponent title="Ставить лайк на профиль"/>
      <CheckComponent 
        check_item={[setLikeToProfile]} 
        Switching={
          check => { 
            dispatch(incoming_friends_settings_setLikeToProfile({ ...setLikeToProfile, check: check[0].check})) 
          }} 
      />
      <TitleComponent title="Добавлять в друзья"/>
        <CheckComponent 
          check_item={[addToFriends]} 
          Switching={
          check => { 
          dispatch(incoming_friends_settings_setLikeToProfile({ ...addToFriends, check: check[0].check})) 
          }} 
        />
              <TitleComponent title="Загрузка фото" />
      < InputFile
        id="img__file"
        icon={download}
        onChange={ (event) => {
          if(event.target.files.length !== 0) {
            dispatch(incoming_friends_settings_photoFilesPath(event.target.files[0]))
          }
        }}
      />
      <TitleComponent title="Загрузка аудио" />
      < InputFile
        id="audio__file"
        icon={download}
        onChange={ (event) => {
          if(event.target.files.length !== 0) {
            dispatch(incoming_friends_settings_audioFilesPath(event.target.files[0]))
          }
        }}
      />
      <TitleComponent title="Настройка отправки сообщений" />
      <RadialBtnsComponent 
        title={[
          "Писать сообщение, только если переписка полностью пустая",
          "Писать сообщение, когда переписка полностью пустая, а также когда нам написали и мы не ответили",
          "Писать в любом случае"
        ]}
        Switching={type => { dispatch(incoming_friends_settings_conversationTypeEvent(type)) }}
        checked={conversationTypeEvent}
      />
      <RandomizeComponentArea 
        textAreaMessages={addingMessages.text_areas} 
        title={`Введите текст для рандомизации`} 
        onFormText={message_area => { 
          dispatch(incoming_friends_settings_addingMessages({ 
            on:addingMessages.on , 
            random:addingMessages.random , 
            text_areas: message_area 
          })) 
          dispatch(incoming_friends_settings_addingMessages({ 
            on: { ...addingMessages.on, check: true}, 
            random:addingMessages.random , 
            text_areas: message_area 
          })) 
        }} 
      />
      <TitleComponent title={`Текст для приветствия: (Элементов: ${addingMessages.text_areas.length} Выделено: ${counts})`}/>
      <AddingComponent 
        addingMessages={addingMessages} 
        setAddingMessages={incoming_friends_settings_addingMessages} 
        dispatch={dispatch}
      />
      <AccountSettingsCopy 
        onClose={onClose} 
        styles={{ marginTop:'30px' }} 
        onSave={() => onSave( welcomeCount, conversationTypeEvent, delay, setLikeToProfile, setLikeToWall, addToFriends, addingMessages, photoFilesPath, audioFilesPath, accounts, id_acc, task_id, dispatch, onClose ) }
      >  
        {/* {
          accounts.map((item,key) => {
            return <ItemDisplayComponent 
              check_all={check_all}
              checked={item.id === key ? true : false} 
              key={key} 
              name={`${item.main_settings.name}`} 
              id={key} 
              onClick={(id) => { 
              let lock = false;
              if( id_check.length === 0 ) {
                id_check.push(id)x
                setIdCheck(id_check) 
              } else {
          
                id_check.map(item => {
                  if (item === id) {
                    lock = true
                  } 
                  return false
                })
                if(!lock) {
                  id_check.push(id)
                  setIdCheck(id_check) 
                } 
              }
                console.log(id_check)
              }} 
            />
          })
        } */}
      </AccountSettingsCopy>
    </div>
  );
}
