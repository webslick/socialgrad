import React, { useState } from 'react'; 
import Message from '../Message'
import orderBy from "lodash/orderBy";
import { Empty } from "antd";
import { nanoid } from 'nanoid';
import './style.css';    
 
export default function MessageTextArea(props) { 

    const { messages } = props; 
    
    return (
      <div className='messageTextAreaContainer'>  
        {messages.length ? (
          orderBy(messages, ["created_at"], ["desc"]).map(item => (
            <Message
            key={item.id+nanoid(5)}
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
            roomId = {item.roomId} 
          />
          ))
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Сообщений нет"
          />
        )} 
      </div>
    );
} 