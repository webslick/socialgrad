import React, { useEffect } from 'react';  
import { useSelector, useDispatch } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { pages, users } from '../../redux/selectors';
import { getUsersFromHome } from '../../redux/actions/users';
import './style.css';

import Title from '../../components/Title'
import ChatMainField from '../../components/ChatMainField'
import SubTitle from '../../components/SubTitle'  

function ChatScreen (props) {
  
  const dispatch = useDispatch();
  const { scroll } = props;
 
  const user = useSelector(users.user); 

  useEffect(() => {    
    console.log(user);
    // dispatch(getUsersFromHome(1,2,3));  
    // dispatch(getUsersFromHome(user?.city?.name,user?.street,user?.number));  
  },[]);  

  return (
    <div className="chat_screen" >
      <div className={`chat_wrapper ${scroll > 659 ? 'chat_compinsation' : ''}`}>
        <Title title="Чат дома" /> 
        <SubTitle subtitle={`обл.${user?.region?.name}, г.${user?.city?.name}, ул.${user?.street?.name}, д.${user?.number}`} /> 
        <ChatMainField /> 
      </div>
    </div>
  );
}

export default ChatScreen;