import React, { useState } from 'react'; 
import Message from '../Message'
import './style.css';    
 
export default function MessageTextArea(props) { 

    const { messages } = props; 
    
    return (
      <div className='messageTextAreaContainer'>  
        {
          messages.map((item) => (<Message
            key={item.user._id}
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