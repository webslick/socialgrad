import React, { useEffect } from 'react';  
import './style.css';
import { useDispatch } from 'react-redux'; 
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

import Title from '../../components/Title'
import ChatMainField from '../../components/ChatMainField'
import SubTitle from '../../components/SubTitle'  

function ChatScreen (props) {
  
  const dispatch = useDispatch();
  const { scroll } = props;
 
  return (
    <div className="chat_screen" >
      <div className={`chat_wrapper ${scroll > 659 ? 'chat_compinsation' : ''}`}>
        <Title title="Чат дома" /> 
        <SubTitle subtitle="обл. Новосибирская, г. Новосибирск, ул. Ватутина, д. 12/1" /> 
        <ChatMainField /> 
      </div>
    </div>
  );
}

export default ChatScreen;