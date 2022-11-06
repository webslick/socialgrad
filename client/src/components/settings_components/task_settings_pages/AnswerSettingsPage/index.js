import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import MainTitle from '../../MainTitle';
import CountInput from '../../CountInput';
import TitleComponent from '../../TitleComponent';
import AccountSettingsCopy from '../../AccountSettingsCopy';
import TimeSetComponent from '../../TimeSetComponent';
import AddingComponent from '../../AddingComponent';
import CheckComponent from '../../CheckComponent';
import RadialBtnsComponent from '../../RadialBtnsComponent';
import RandomizeComponentArea from '../../RandomizeComponentArea';
import { appPutAccountsVK } from '../../../../redux/actions/api_vk';
import { 
  confirm_friends_settings_welcomeCount,
  confirm_friends_settings_delay,
  confirm_friends_settings_setLikeToWall,
  confirm_friends_settings_setLikeToProfile,
  confirm_friends_settings_conversationTypeEvent,
  confirm_friends_settings_addingMessages,
  confirm_friends_settings_photoFilesPath,
  confirm_friends_settings_audioFilesPath,
  uploadeActionSave
} from '../../../../redux/actions/confirm_friends';
import images  from '../../../../assets/images';
import InputFile from '../../InputFile';
import { confirm_friends } from '../../../../redux/selectors';

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

export default function AnswerSettingsPage (props) {

  const { accounts, id_acc, onClose, task_id,titleTask } = props;
  const { download } = images;
 
  const dispatch = useDispatch();

  const welcomeCount = useSelector(confirm_friends.welcomeCount);
  const messageSettings = useSelector(confirm_friends.messageSettings);
  const delay = useSelector(confirm_friends.delay);
  const setLikeToProfile = useSelector(confirm_friends.setLikeToProfile);
  const setLikeToWall = useSelector(confirm_friends.setLikeToWall);
  const addingMessages = useSelector(confirm_friends.addingMessages);
  const addToFriends = useSelector(confirm_friends.addToFriends);
  const photoOrVideoSettings = useSelector(confirm_friends.photoOrVideoSettings);
  const audioSettings = useSelector(confirm_friends.audioSettings);

  const account = accounts[id_acc];
  const { conversationTypeEvent } = messageSettings;
  const { photoFilesPath } = photoOrVideoSettings;
  const { audioFilesPath } = audioSettings;

  let counts = 0;

  addingMessages.text_areas.map(item => item.check ? counts++ : false)

  return (
    <div className="shedule_settings_page_wrapper" >
      <MainTitle title_acc={titleTask} text="Настройка задания:" />
      <MainTitle title_acc={`${account.main_settings.name}`} text="Аккаунт:" />
      <CountInput count={welcomeCount} setCount={(count) => {dispatch(confirm_friends_settings_welcomeCount(count))}} title="Количество друзей"/>
      <TimeSetComponent delay={delay} title="Случайная задержка между действиями (от : до) секунды" onChange={(del) => {dispatch(confirm_friends_settings_delay(del))}} />
      <TitleComponent title="Ставить лайк на стену"/>
      <CheckComponent 
        check_item={[setLikeToWall]} 
        Switching={
          check => { 
            dispatch(confirm_friends_settings_setLikeToWall({ ...setLikeToWall, check: check[0].check})) 
          }} 
      />
      <TitleComponent title="Ставить лайк на профиль"/>
      <CheckComponent 
        check_item={[setLikeToProfile]} 
        Switching={
          check => { 
            dispatch(confirm_friends_settings_setLikeToProfile({ ...setLikeToProfile, check: check[0].check})) 
          }} 
      />
      <TitleComponent title="Настройка отправки сообщений" />
      <RadialBtnsComponent 
        title={[
          "Писать сообщение, только если переписка полностью пустая",
          "Писать сообщение, когда переписка полностью пустая, а также когда нам написали и мы не ответили",
          "Писать в любом случае"
        ]}
        Switching={type => { dispatch(confirm_friends_settings_conversationTypeEvent(type)) }}
        checked={conversationTypeEvent}
      />
      <TitleComponent title="Загрузка фото" />
      < InputFile
        id="img__file"
        icon={download}
        onChange={ (event) => {
          if(event.target.files.length !== 0) {
            dispatch(confirm_friends_settings_photoFilesPath(event.target.files[0]))
          }
        }}
      />
      <TitleComponent title="Загрузка аудио" />
      < InputFile
        id="audio__file"
        icon={download}
        onChange={ (event) => {
          if(event.target.files.length !== 0) {
            dispatch(confirm_friends_settings_audioFilesPath(event.target.files[0]))
          }
        }}
      />
      <RandomizeComponentArea 
        textAreaMessages={addingMessages.text_areas} 
        title={`Введите текст для рандомизации`} 
        onFormText={message_area => { 
          dispatch(confirm_friends_settings_addingMessages({ 
            on:addingMessages.on , 
            random:addingMessages.random , 
            text_areas: message_area 
          })) 
          dispatch(confirm_friends_settings_addingMessages({ 
            on: { ...addingMessages.on, check: true}, 
            random:addingMessages.random , 
            text_areas: message_area 
          })) 
        }} 
      />
      <TitleComponent title={`Текст для приветствия: (Элементов: ${addingMessages.text_areas.length} Выделено: ${counts})`}/>
      <AddingComponent 
        addingMessages={addingMessages} 
        setAddingMessages={confirm_friends_settings_addingMessages} 
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
