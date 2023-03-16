import React from 'react';
import ChatMenuPanel from '../ChatMenuPanel'
import ChatGroupMessagePanel from '../ChatGroupMessagePanel'
import ChatMonitorPanel from '../ChatMonitorPanel'
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
 
