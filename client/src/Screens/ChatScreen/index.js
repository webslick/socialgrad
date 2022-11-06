import React, { useEffect } from 'react';  
import './style.css';
import { useDispatch } from 'react-redux'; 
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import images from '../../assets/images';
import Title from '../../components/Title'
import SubTitle from '../../components/SubTitle' 
import Avatar from '../../components/Avatar'
import Block from '../../components/Block'
import Button from '../../components/Button_'
import Message from '../../components/Message'
// import ChatInput from '../../components/ChatInput'
// import Dialogs from '../../components/Dialogs'
// import Status from '../../components/Status'


function ChatScreen (props) {
  
  const dispatch = useDispatch();
  const { scroll } = props;
  const {acc} = images
  return (
    <div className="chat_screen" >
      <div className={`chat_wrapper ${scroll > 659 ? 'chat_compinsation' : ''}`}>
        <Title title="Чат дома" /> 
        <SubTitle subtitle="обл. Новосибирская, г. Новосибирск, ул. Ватутина, д. 12/1" /> 
        {/* <Message isTyping user={{_id: '24',fullname:'user',avatar:images.vk}} text={'Это тестовое сообщение'} date={new Date()} />
        <Message isMe user={{_id: '24',fullname:'user',avatar:images.vk}} text={'Это тестовое сообщение'} date={new Date()} />
        <Message user={{_id: '24',fullname:'user',avatar:images.vk}} text={'Это тестовое сообщение'} date={new Date()} />
        <Message isMe user={{_id: '24',fullname:'user',avatar:images.vk}} text={'Это тестовое сообщение'} date={new Date()} />
        <Message user={{_id: '24',fullname:'user',avatar:images.vk}} text={'Это тестовое сообщение'} date={new Date()} /> */}
        {/* <Avatar user={{avatar:'acc',fullname: 'kflk'}} /> */}
        {/* <Block></Block> */}
        {/* <Button block={true} size='large' type='primary'>test</Button>  */}
        {/* <ChatInput /> */}
        {/* <Dialogs /> */}
        {/* <Status />  */}
      </div>
    </div>
  );
}

export default ChatScreen;