import React from 'react';
import './style.css'; 
import Status from '../Status'
export default function HeaderChatPanel(props) {
    const { name } = props;
    return (
      <div className='headerChatPanelContainer'>   
        <Status online={!false} fullname={name} />
      </div>
    );
} 