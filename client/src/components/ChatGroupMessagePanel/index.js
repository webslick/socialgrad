import React, { useState } from 'react';
import './style.css'; 
import { Input } from 'antd';
import ChatMenuGroup from '../ChatMenuGroup';
 import Dialogs from '../Dialogs';

function ChatGroupMessagePanel(props) { 
  const { Search } = Input;
  const [activeItem, setActiveItem] = useState(0);
  // const [serchDialogValue, onSearch] = useState('');

//  console.log(serchDialogValue)
    return (
      <div className='chatGroupMessagePanelContainer'> 
        <div className='searchChatContainer'>
          <Search placeholder="поиск чатов" allowClear onSearch={(value) => console.log(value)} style={{ width: 280 }} /> 
        </div>
        <div className='searchChatMenu'>
          <ChatMenuGroup activeItem={activeItem} itemMenu={['Все', 'Непрочитанные','Мои','Другие','Новые']} onClick={(active) => {
            setActiveItem(active)
          }} /> 
        </div>
        <div className='dialogsContainer'>
          <Dialogs items={[
            {
            _id: '24',
            author: {_id: '1117437'}, 
            undread: true,
            created_at: new Date(),
            text:'fssfs',
            isMe: false,
            currentDialogId: '1',
            partner:{ fullname: 'Генрих', isOnline: true, avatar: "https://source.unsplash.com/100x100/?random=1&nature,water" },
            lastMessage: {
              user: {
                _id: '198712634'
              },
              createdAt: new Date(),
              undread: 0,
              readed: true,
              attachments: [{
                filename: 'logo',
                url:'https://source.unsplash.com/100x100/?random=1&nature,water'
              }]
            },
            userId: '1061374120',
            }]}
            userId={'165234'} 
            onSearch={e => console.log(e)} 
            inputValue={'1'} 
            currentDialogId={'1'} />
        </div>
      </div>
    );
}

export default ChatGroupMessagePanel;
