import React, { useState } from 'react';
import HeaderChatPanel from '../HeaderChatPanel'
import { useSpeechRecognition } from 'react-speech-kit';
import MessageTextArea from '../MessageTextArea'
import ChatInput from '../ChatInput' 

 
import './style.css'; 

export default function ChatMonitorPanel(props) { 
 
  const messages = [{ 
    user: {_id: '5721', fullname:'user' },
    text: 'Привет!', 
    date: new Date(),
    avatar:true,
    isMe: true,
    readed: false,
    attachments: [],
    isTyping: false,
    onRemoveMessage: ()=>{console.log('delete messages')},
    setPreviewImage: ()=>{},
    audio:'url'
  }, { 
    user: {_id: '81721', fullname:'user' },
    text: 'Здорова!!', 
    date: new Date(),
    avatar:'url', 
    isMe: false,
    readed: true,
    attachments: [],
    isTyping: false,
    onRemoveMessage: ()=>{console.log('delete messages')},
    setPreviewImage: ()=>{},
    audio:'url' 
  }, { 
    user: {_id: '1721', fullname:'user' },
    text: `
    Что делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много т
    Что делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много т
    Что делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много т
    Что делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много т
    Что делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много текста для того чтобы посмотреть как в целом открываеться окно сообщенийЧто делаешь,как твои дела? Это тестовое сообщение! Сейчас я напишу слишком много т
    `, 
    date: new Date(),
    avatar:'url',
    isMe: true,
    readed: false,
    attachments: [],
    isTyping: false,
    onRemoveMessage: ()=>{console.log('delete messages')},
    setPreviewImage: ()=>{},
    audio:'url' 
  }, { 
    user: {_id: '1745а21', fullname:'user' },
    text: 'Да конечно, проверяй! А я напишу тебе сообщение с одной буквой тогда))) ', 
    date: new Date(),
    avatar:'url',
    isMe: false,
    readed: true,
    attachments: [],
    isTyping: false,
    onRemoveMessage: ()=>{console.log('delete messages')},
    setPreviewImage: ()=>{},
    audio:'url' 
  }, {  
    user: {_id: '172сц1', fullname:'user' },
    text: 'Ок :grinning:', 
    date: new Date(),
    avatar:'url',
    isMe: true,
    readed: true,
    attachments: [],
    isTyping: false,
    onRemoveMessage: ()=>{console.log('delete messages')},
    setPreviewImage: ()=>{},
    audio:'url' 
  }, {  
    user: {_id: '17м33321', fullname:'user' },
    text: '!', 
    date: new Date(),
    avatar:'url',
    isMe: false,
    readed: true,
    attachments: [],
    isTyping: false,
    onRemoveMessage: ()=>{console.log('delete messages')},
    setPreviewImage: ()=>{},
    audio:'url' 
  }, {  
    user: {_id: '17йв21', fullname:'user' },
    text: '!', 
    date: new Date(),
    avatar:'url',
    isMe: true,
    readed: true,
    attachments: [],
    isTyping: false,
    onRemoveMessage: ()=>{console.log('delete messages')},
    setPreviewImage: ()=>{},
    audio:'url' 
  }, { 
    user: {_id: '17v52421', fullname:'user' },
    text: '', 
    date: new Date(),
    avatar:'url',
    isMe: false,
    readed: true,
    attachments: [],
    isTyping: true,
    onRemoveMessage: ()=>{console.log('delete messages')},
    setPreviewImage: ()=>{},
    audio:'url'
  }]

  const [valueMessages, setMessageInput] = useState('');
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
        <HeaderChatPanel name={'Генрих'} />
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
                console.log('Отправка сообщения')
              }
            }}
            sendMessage = {(e) => {console.log(e)}}
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
 
