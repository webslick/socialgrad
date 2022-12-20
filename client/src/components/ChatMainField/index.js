import React from 'react';
import ChatMenuPanel from '../../components/ChatMenuPanel'
import ChatGroupMessagePanel from '../../components/ChatGroupMessagePanel'
import ChatMonitorPanel from '../../components/ChatMonitorPanel'
import './style.css';
 
export default function ChatMainField(props) { 
    return (
      <div className='chatMainFieldContainer'>
        <ChatMenuPanel />
        <ChatGroupMessagePanel />
        <ChatMonitorPanel />
      </div>
    );
}
 
