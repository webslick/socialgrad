import React, { useState } from 'react';
import HeaderChatPanel from '../HeaderChatPanel'
import { useSpeechRecognition } from 'react-speech-kit';
import MessageTextArea from '../MessageTextArea'
import ChatInput from '../ChatInput' 
import { createRoomMessages } from '../../redux/actions/messages'
 import { nanoid } from 'nanoid';
import './style.css'; 
import { socket } from '../../socket';
import { useDispatch } from 'react-redux';

export default function ChatMonitorPanel(props) { 

  const { user, dialog, room } = props;
 

const dispatch = useDispatch();

  // const messages = [{ 
  //   user: {id: nanoid(8), fullname:'user' },
  //   text: 'Привет!', 
  //   date: new Date(),
  //   avatar:true,
  //   isMe: true,
  //   readed: false,
  //   attachments: [],
  //   isTyping: false,
  //   onRemoveMessage: ()=>{console.log('delete messages')},
  //   setPreviewImage: ()=>{},
  //   audio:'url'
  // }, { 
  //   user: {id: nanoid(8), fullname:'user' },
  //   text: 'Здорова!!', 
  //   date: new Date(),
  //   avatar:'url', 
  //   isMe: false,
  //   readed: true,
  //   attachments: [],
  //   isTyping: false,
  //   onRemoveMessage: ()=>{console.log('delete messages')},
  //   setPreviewImage: ()=>{},
  //   audio:'url' 
  // }, { 
  //   user: {id: nanoid(8), fullname:'user' },
  //   text: `
  //   Что делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много т
  //   Что делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много т
  //   Что делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много т
  //   Что делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много т
  //   Что делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много т
  //   `, 
  //   date: new Date(),
  //   avatar:'url',
  //   isMe: true,
  //   readed: false,
  //   attachments: [],
  //   isTyping: false,
  //   onRemoveMessage: ()=>{console.log('delete messages')},
  //   setPreviewImage: ()=>{},
  //   audio:'url' 
  // }, { 
  //   user: {id:  nanoid(8), fullname:'user' },
  //   text: 'Да конечно, проверяй! А я напишу тебе сообщение с одной буквой тогда))) ', 
  //   date: new Date(),
  //   avatar:'url',
  //   isMe: false,
  //   readed: true,
  //   attachments: [],
  //   isTyping: false,
  //   onRemoveMessage: ()=>{console.log('delete messages')},
  //   setPreviewImage: ()=>{},
  //   audio:'url' 
  // }, {  
  //   user: {id:  nanoid(8), fullname:'user' },
  //   text: 'Ок :grinning:', 
  //   date: new Date(),
  //   avatar:'url',
  //   isMe: true,
  //   readed: true,
  //   attachments: [],
  //   isTyping: false,
  //   onRemoveMessage: ()=>{console.log('delete messages')},
  //   setPreviewImage: ()=>{},
  //   audio:'url' 
  // }, {  
  //   user: {id: nanoid(8), fullname:'user' },
  //   text: '!', 
  //   date: new Date(),
  //   avatar:'url',
  //   isMe: false,
  //   readed: true,
  //   attachments: [],
  //   isTyping: false,
  //   onRemoveMessage: ()=>{console.log('delete messages')},
  //   setPreviewImage: ()=>{},
  //   audio:'url' 
  // }, {  
  //   user: {id:  nanoid(8), fullname:'user' },
  //   text: '!', 
  //   date: new Date(),
  //   avatar:'url',
  //   isMe: true,
  //   readed: true,
  //   attachments: [],
  //   isTyping: false,
  //   onRemoveMessage: ()=>{console.log('delete messages')},
  //   setPreviewImage: ()=>{},
  //   audio:'url' 
  // }, { 
  //   user: {id:  nanoid(8), fullname:'user' },
  //   text: '', 
  //   date: new Date(),
  //   avatar:'url',
  //   isMe: false,
  //   readed: true,
  //   attachments: [],
  //   isTyping: true,
  //   onRemoveMessage: ()=>{console.log('delete messages')},
  //   setPreviewImage: ()=>{},
  //   audio:'url'
  // }]
  let messages = []; 
 
  let userAvatar = '';

  const isMe = (myId,avtor) => myId === avtor;
  
   user.join_rooms.map(item => {
    if(item.roomId === room) {  
      if(item.messages !== undefined) { 
        item.messages.map(item_messages => {
  
          user.users_home.map(item => {
            if(item.id === user.id) {
              if(user.id === item_messages.userId) { userAvatar = user.avatar } else { userAvatar = item.avatar }
            }
          })

          item_messages.user.fullname = `${user.name} ${user.lastname}`;
          item_messages.user.avatar = userAvatar;
          item_messages.isMe = isMe(user.id,item_messages.userId); 
          messages.push(item_messages) 
        })
      } 
    }
   })






   
  const [valueMessages, setMessageInput] = useState('');
  const [typeMessages, setTypeMessages] = useState('text');
  const [pathAtach, setPathAtach] = useState('');
  const [emojiPickerVisible, toogleEmojiPickerVisible] = useState(false);
  const [onRecord, toogleRecord] = useState(false);
  const [isLoading, toogLoading] = useState(false);
  const [file, onSelectFiles] = useState([]);
 
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setMessageInput(result);
    },
  });
  
    return (
      <div className='chatMonitorPanelContainer'> 
        {dialog && <HeaderChatPanel name={`${user.users_home[0].name} ${user.users_home[0].lastname}`} />}
        <MessageTextArea messages={messages} />   
        <div className='chatInputContainer'>
          <ChatInput 
            emojiPickerVisible = {emojiPickerVisible}
            value = {valueMessages}
            addEmoji = {(e) => {toogleEmojiPickerVisible(!emojiPickerVisible);setMessageInput(valueMessages + ' ' + e.native + '  '); console.log(e)}}
            setValue = {(e) => {setMessageInput(e)}}
            handleSendMessage = {(e) => {
              if(e.code === 'Enter') {
                setMessageInput('')
                createRoomMessages({ userId: user.id , roomId: room, text: valueMessages, type: typeMessages, filename: pathAtach, readed: false }, dispatch)
        
                console.log('Отправка сообщения')
              }
            }}
            sendMessage = {() => {  
              setMessageInput('');
              createRoomMessages({ userId: user.id , roomId: room, text: valueMessages, type: typeMessages, filename: pathAtach, readed: false }, dispatch) 
            }}
            toggleEmojiPicker = {(e) => { toogleEmojiPickerVisible(!emojiPickerVisible); }} 
            onRecord = {(e) => { toogleRecord(!onRecord); }}  
            onHideRecording = {(e) => { toogleRecord(!onRecord); }} 
            isLoading = {isLoading}
            // attachments={[{
            //   filename: 'logo',
            //   url:'https://source.unsplash.com/100x100/?random=1&nature,water'
            // },{
            //   filename: 'logo',
            //   url:'https://source.unsplash.com/100x100/?random=2&nature,water'
            // }]}
            attachments={file}
            onSelectFiles={onSelectFiles}
            isRecording={onRecord}  
            removeAttachment={() => {}}  
            listening={listening}
            listen={listen}
            stop={stop}
          />
        </div>   
      </div>
    );
}
 
