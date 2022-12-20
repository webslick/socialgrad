import React, { useState } from 'react';
import { Button, Menu } from 'antd'; 
import images from '../../assets/images';

import Message from '../Message'
import './style.css';    
 
export default function MessageTextArea(props) { 

    const { messages } = props; 
    
    return (
      <div className='messageTextAreaContainer'>  
        {
          messages.map((item) => (<Message
            user = {item.user}
            text = {item.text} 
            date = {item.date}
            avatar = {item.avatar}
            isMe = {item.isMe}
            readed = {item.readed}
            attachments = {item.attachments}
            isTyping = {item.isTyping}
            onRemoveMessage = {item.onRemoveMessage}
            setPreviewImage = {item.setPreviewImage}
            audio = {item.audio}
          />))
        }   
      </div>
    );
} 