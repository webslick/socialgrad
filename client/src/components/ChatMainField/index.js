import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ChatMenuPanel from '../ChatMenuPanel'
import ChatGroupMessagePanel from '../ChatGroupMessagePanel'
import ChatMonitorPanel from '../ChatMonitorPanel'
import { getMessagesRoom } from '../../redux/actions/messages'; 
import './style.css';  

export default function ChatMainField({ user, room, dialog }) {  
  const dispatch = useDispatch();    
  
  useEffect(() => { 
    async function fetchData() { 
     await getMessagesRoom(room, user, dispatch);  
    }
    fetchData();
  }, []); 
  
  return (
    <div className='chatMainFieldContainer'>
      <ChatMenuPanel />
      <ChatGroupMessagePanel user={user} room={room} dialog={dialog} />
      <ChatMonitorPanel user={user} dialog={dialog} room={room} />
    </div>
  );
}
 
